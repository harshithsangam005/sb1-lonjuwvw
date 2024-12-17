export interface Application {
  id: string;
  name: string;
  currentVersion: string;
  vendor: string;
  lastChecked: string;
  category: string;
  isWin11Compatible?: boolean;
}

export interface VersionInfo {
  latestVersion: string;
  isCompatibleWin11: boolean;
  releaseDate: string;
}

export interface AuditResult {
  application: Application;
  latestVersion: string;
  needsUpdate: boolean;
  isWin11Compatible: boolean;
  checkDate: string;
}

export interface FilterOptions {
  vendor?: string;
  category?: string;
  updateStatus?: 'all' | 'needsUpdate' | 'upToDate';
  win11Status?: 'all' | 'compatible' | 'incompatible';
}

export interface SortOptions {
  field: keyof Application | 'updateStatus';
  direction: 'asc' | 'desc';
}