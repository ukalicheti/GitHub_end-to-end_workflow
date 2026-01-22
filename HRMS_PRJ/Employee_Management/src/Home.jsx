const Home = () => {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
  
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl">Employee</h2>
            <p className="text-4xl font-bold mt-2">1000</p>
          </div>
          <div className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl">Leaves</h2>
            <p className="text-4xl font-bold mt-2">150</p>
          </div>
          <div className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl">Attendance</h2>
            <p className="text-4xl font-bold mt-2">950</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  