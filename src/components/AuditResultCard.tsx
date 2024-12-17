import React from 'react';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { AuditResult } from '../types';

interface AuditResultCardProps {
  result: AuditResult;
}

const AuditResultCard: React.FC<AuditResultCardProps> = ({ result }) => {
  const {
    application,
    latestVersion,
    needsUpdate,
    isWin11Compatible,
    checkDate,
  } = result;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-gray-800">{application.name}</h3>
          <p className="text-sm text-gray-500">{application.vendor}</p>
        </div>
        {needsUpdate ? (
          <AlertTriangle className="w-6 h-6 text-amber-500" />
        ) : (
          <CheckCircle className="w-6 h-6 text-green-500" />
        )}
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Current Version:</span>
          <span className="font-medium">{application.currentVersion}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Latest Version:</span>
          <span className="font-medium">{latestVersion}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Windows 11:</span>
          <span className={`font-medium ${isWin11Compatible ? 'text-green-600' : 'text-red-600'}`}>
            {isWin11Compatible ? 'Compatible' : 'Not Compatible'}
          </span>
        </div>
      </div>

      {needsUpdate && (
        <div className="mt-4 p-3 bg-amber-50 rounded-md flex items-start gap-2">
          <Info className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            You are using an older version. Please update to the latest version for improved features and security.
          </p>
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500">
          Last checked: {new Date(checkDate).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default AuditResultCard;