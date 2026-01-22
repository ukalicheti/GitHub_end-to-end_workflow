import { Search, Bell, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <Search className="w-5 h-5 text-gray-500" />
        <input 
          type="text" 
          placeholder="Search here..." 
          className="p-2 w-64 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400" 
        />
      </div>
      <div className="flex items-center space-x-6">
        <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
        <Mail className="w-5 h-5 text-gray-600 cursor-pointer" />
        <div className="flex items-center space-x-2">
          <span className="font-medium">UDAY kiran</span>
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
