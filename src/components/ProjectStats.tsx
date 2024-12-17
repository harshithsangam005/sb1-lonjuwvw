import React from 'react';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

const ProjectStats = () => {
  const stats = [
    {
      label: 'Completed Tasks',
      value: '24',
      icon: CheckCircle,
      color: 'text-green-500',
    },
    {
      label: 'In Progress',
      value: '12',
      icon: Clock,
      color: 'text-yellow-500',
    },
    {
      label: 'Overdue',
      value: '3',
      icon: AlertCircle,
      color: 'text-red-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">{stat.label}</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">
                {stat.value}
              </h3>
            </div>
            <stat.icon className={`w-8 h-8 ${stat.color}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectStats;