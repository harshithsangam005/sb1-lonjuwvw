import React from 'react';
import { AuditResult } from '../types';
import AuditResultCard from './AuditResultCard';

interface AuditListProps {
  results: AuditResult[];
  isLoading: boolean;
}

const AuditList: React.FC<AuditListProps> = ({ results, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {results.map((result) => (
        <AuditResultCard key={result.application.id} result={result} />
      ))}
    </div>
  );
};

export default AuditList;