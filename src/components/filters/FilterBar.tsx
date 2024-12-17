import React from 'react';
import { vendors } from '../../utils/data/vendors';
import { categories } from '../../utils/data/applicationCategories';
import { FilterOptions } from '../../types';

interface FilterBarProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
      <select
        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        value={filters.vendor || ''}
        onChange={(e) => onFilterChange({ ...filters, vendor: e.target.value || undefined })}
      >
        <option value="">All Vendors</option>
        {Object.keys(vendors).map((vendor) => (
          <option key={vendor} value={vendor}>{vendor}</option>
        ))}
      </select>

      <select
        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        value={filters.category || ''}
        onChange={(e) => onFilterChange({ ...filters, category: e.target.value || undefined })}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      <select
        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        value={filters.updateStatus || 'all'}
        onChange={(e) => onFilterChange({ ...filters, updateStatus: e.target.value as any })}
      >
        <option value="all">All Update Status</option>
        <option value="needsUpdate">Needs Update</option>
        <option value="upToDate">Up to Date</option>
      </select>

      <select
        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        value={filters.win11Status || 'all'}
        onChange={(e) => onFilterChange({ ...filters, win11Status: e.target.value as any })}
      >
        <option value="all">All Win11 Status</option>
        <option value="compatible">Compatible</option>
        <option value="incompatible">Incompatible</option>
      </select>
    </div>
  );
};

export default FilterBar;