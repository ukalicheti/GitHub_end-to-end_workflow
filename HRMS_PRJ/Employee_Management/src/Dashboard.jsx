import { useState } from 'react';
import { Home as HomeIcon, Users, Calendar, ClipboardList } from 'lucide-react';
import Header from './Header';
import Home from './Home';
import Employees from './Employees';
import Leave from './Leave';
import Attendance from './Attendance';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <Home />;
      case 'Employees':
        return <Employees />;
      case 'Leave':
        return <Leave />;
      case 'Attendance':
        return <Attendance />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b">
          <img src="/AnerGroupIcon.png" alt="Logo" className="h-10" />
        </div>
        <nav className="mt-6 space-y-2">
          <button
            onClick={() => setActiveTab('Home')}
            className={`flex items-center p-4 text-gray-700 hover:bg-gray-200 w-full ${
              activeTab === 'Home' ? 'bg-gray-200' : ''
            }`}
          >
            <HomeIcon className="w-5 h-5 mr-3" /> Home
          </button>

          <button
            onClick={() => setActiveTab('Employees')}
            className={`flex items-center p-4 text-gray-700 hover:bg-gray-200 w-full ${
              activeTab === 'Employees' ? 'bg-gray-200' : ''
            }`}
          >
            <Users className="w-5 h-5 mr-3" /> Employees
          </button>

          <button
            onClick={() => setActiveTab('Leave')}
            className={`flex items-center p-4 text-gray-700 hover:bg-gray-200 w-full ${
              activeTab === 'Leave' ? 'bg-gray-200' : ''
            }`}
          >
            <Calendar className="w-5 h-5 mr-3" /> Leave
          </button>

          <button
            onClick={() => setActiveTab('Attendance')}
            className={`flex items-center p-4 text-gray-700 hover:bg-gray-200 w-full ${
              activeTab === 'Attendance' ? 'bg-gray-200' : ''
            }`}
          >
            <ClipboardList className="w-5 h-5 mr-3" /> Attendance
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Header />
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;
