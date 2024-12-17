import React, { useState, useMemo } from 'react';
import { mockApplications } from './utils/mockData';
import { checkLatestVersion, compareVersions } from './utils/versionChecker';
import { AuditResult, FilterOptions, SortOptions } from './types';
import AuditControls from './components/AuditControls';
import AuditList from './components/AuditList';
import FilterBar from './components/filters/FilterBar';
import Pagination from './components/pagination/Pagination';

const ITEMS_PER_PAGE = 12;

function App() {
  const [auditResults, setAuditResults] = useState<AuditResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterOptions>({});
  const [sort, setSort] = useState<SortOptions>({
    field: 'name',
    direction: 'asc',
  });

  const runAudit = async () => {
    setIsRunning(true);
    const results: AuditResult[] = [];

    for (const app of mockApplications) {
      const versionInfo = await checkLatestVersion(app);
      
      results.push({
        application: app,
        latestVersion: versionInfo.latestVersion,
        needsUpdate: compareVersions(app.currentVersion, versionInfo.latestVersion),
        isWin11Compatible: versionInfo.isCompatibleWin11,
        checkDate: new Date().toISOString(),
      });
    }

    setAuditResults(results);
    setIsRunning(false);
  };

  const filteredResults = useMemo(() => {
    return auditResults.filter((result) => {
      if (filters.vendor && result.application.vendor !== filters.vendor) return false;
      if (filters.category && result.application.category !== filters.category) return false;
      if (filters.updateStatus === 'needsUpdate' && !result.needsUpdate) return false;
      if (filters.updateStatus === 'upToDate' && result.needsUpdate) return false;
      if (filters.win11Status === 'compatible' && !result.isWin11Compatible) return false;
      if (filters.win11Status === 'incompatible' && result.isWin11Compatible) return false;
      return true;
    });
  }, [auditResults, filters]);

  const sortedResults = useMemo(() => {
    return [...filteredResults].sort((a, b) => {
      let valueA, valueB;

      if (sort.field === 'updateStatus') {
        valueA = a.needsUpdate ? 1 : 0;
        valueB = b.needsUpdate ? 1 : 0;
      } else {
        valueA = a.application[sort.field];
        valueB = b.application[sort.field];
      }

      if (valueA < valueB) return sort.direction === 'asc' ? -1 : 1;
      if (valueA > valueB) return sort.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredResults, sort]);

  const paginatedResults = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedResults.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [sortedResults, currentPage]);

  const totalPages = Math.ceil(sortedResults.length / ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <AuditControls onRunAudit={runAudit} isRunning={isRunning} />
        
        {auditResults.length > 0 && (
          <>
            <FilterBar
              filters={filters}
              onFilterChange={setFilters}
            />
            <AuditList
              results={paginatedResults}
              isLoading={isRunning}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;