import React from 'react';
import { Layout, Home, CheckSquare, Calendar, Settings, Users } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Dashboard' },
    { icon: CheckSquare, label: 'Tasks' },
    { icon: Layout, label: 'Projects' },
    { icon: Calendar, label: 'Calendar' },
    { icon: Users, label: 'Team' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200 fixed left-0 top-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-indigo-600 flex items-center gap-2">
          <Layout className="w-6 h-6" />
          TaskFlow
        </h1>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;