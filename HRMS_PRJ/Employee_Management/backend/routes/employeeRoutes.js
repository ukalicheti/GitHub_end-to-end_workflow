const express = require('express');
const router = express.Router();
const db = require('../db');

// Add a new employee
router.post('/add', (req, res) => {
  const { name, position, department } = req.body;

  const query = 'INSERT INTO employees (name, position, department) VALUES (?, ?, ?)';
  db.query(query, [name, position, department], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Employee added successfully!', id: results.insertId });
  });
});

// Get all employees
router.get('/', (req, res) => {
  db.query('SELECT * FROM employees', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
});

// Update an employee
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, position, department } = req.body;

  const updateQuery = 'UPDATE employees SET name = ?, position = ?, department = ? WHERE id = ?';
  db.query(updateQuery, [name, position, department, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee updated successfully!' });
  });
});

// Delete an employee
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM employees WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Employee not found.' });
    }
    res.status(200).json({ message: 'Employee deleted successfully!' });
  });
});

module.exports = router;
