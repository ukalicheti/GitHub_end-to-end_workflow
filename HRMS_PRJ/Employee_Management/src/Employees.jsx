import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Plus, Edit, Trash2 } from 'lucide-react';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({ name: '', position: '', department: '' });
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleAddOrEditEmployee = async () => {
    try {
      if (!newEmployee.name || !newEmployee.position || !newEmployee.department) {
        setError('Please fill in all fields.');
        return;
      }

      if (editingEmployee && editingEmployee.id) {
        console.log(`Editing employee with ID: ${editingEmployee.id}`);
        console.log('Data being sent:', newEmployee);

        await axios.put(`http://localhost:5000/api/employees/${editingEmployee.id}`, newEmployee);
      } else {
        await axios.post('http://localhost:5000/api/employees/add', newEmployee);
      }

      setNewEmployee({ name: '', position: '', department: '' });
      setEditingEmployee(null);
      setError('');
      fetchEmployees();
    } catch (error) {
      console.error('Error saving employee:', error);
      setError('Error saving employee. Check console for details.');
    }
  };

  const handleDeleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/employees/${id}`);
      fetchEmployees();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);
    setNewEmployee({ name: employee.name, position: employee.position, department: employee.department });
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Employee Management</h2>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <div className="mb-6">
        <input
          type="text"
          placeholder="Name"
          value={newEmployee.name}
          onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
          className="border p-2 mr-2 rounded"
        />
        <input
          type="text"
          placeholder="Position"
          value={newEmployee.position}
          onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })}
          className="border p-2 mr-2 rounded"
        />
        <input
          type="text"
          placeholder="Department"
          value={newEmployee.department}
          onChange={(e) => setNewEmployee({ ...newEmployee, department: e.target.value })}
          className="border p-2 mr-2 rounded"
        />
        <button
          onClick={handleAddOrEditEmployee}
          className="bg-blue-500 text-white p-2 rounded"
        >
          {editingEmployee ? 'Update Employee' : 'Add Employee'}
        </button>
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Position</th>
            <th className="border p-2">Department</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="border p-2">{employee.name}</td>
              <td className="border p-2">{employee.position}</td>
              <td className="border p-2">{employee.department}</td>
              <td className="border p-2">
                <button onClick={() => handleEditEmployee(employee)} className="mr-2 text-blue-500">
                  <Edit />
                </button>
                <button onClick={() => handleDeleteEmployee(employee.id)} className="text-red-500">
                  <Trash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
