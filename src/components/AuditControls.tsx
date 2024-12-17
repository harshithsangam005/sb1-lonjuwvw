import React from 'react';
import { RefreshCw } from 'lucide-react';

interface AuditControlsProps {
  onRunAudit: () => void;
  isRunning: boolean;
}

const AuditControls: React.FC<AuditControlsProps> = ({ onRunAudit, isRunning }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Application Audit</h1>
        <p className="text-gray-600 mt-1">Check for application updates and Windows 11 compatibility</p>
      </div>
      <button
        onClick={onRunAudit}
        disabled={isRunning}
        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <RefreshCw className={`w-4 h-4 ${isRunning ? 'animate-spin' : ''}`} />
        {isRunning ? 'Running Audit...' : 'Run Audit'}
      </button>
    </div>
  );
};

export default AuditControls;