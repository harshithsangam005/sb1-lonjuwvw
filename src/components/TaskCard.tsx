import React from 'react';
import { Clock, Tag } from 'lucide-react';

interface TaskCardProps {
  title: string;
  description: string;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
  assignee: {
    name: string;
    avatar: string;
  };
}

const priorityColors = {
  low: 'bg-green-100 text-green-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-red-100 text-red-800',
};

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  description,
  dueDate,
  priority,
  assignee,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[priority]}`}
        >
          {priority}
        </span>
      </div>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <Clock className="w-4 h-4" />
          <span>{dueDate}</span>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={assignee.avatar}
            alt={assignee.name}
            className="w-6 h-6 rounded-full"
          />
          <span className="text-sm text-gray-600">{assignee.name}</span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;