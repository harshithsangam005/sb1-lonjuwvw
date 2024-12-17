import { Application, VersionInfo } from '../types';

// Simulating API calls to vendor websites
export async function checkLatestVersion(application: Application): Promise<VersionInfo> {
  // In a real implementation, this would make actual API calls to vendor websites
  // or third-party version tracking services
  
  // Mock data for demonstration
  const mockVersionData: Record<string, VersionInfo> = {
    'Adobe Photoshop': {
      latestVersion: '24.0.0',
      isCompatibleWin11: true,
      releaseDate: '2024-03-01',
    },
    'Microsoft Office': {
      latestVersion: '16.0.14931.20118',
      isCompatibleWin11: true,
      releaseDate: '2024-02-28',
    },
    'Slack': {
      latestVersion: '4.35.126',
      isCompatibleWin11: true,
      releaseDate: '2024-03-05',
    },
  };

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return mockVersionData[application.name] || {
    latestVersion: application.currentVersion,
    isCompatibleWin11: false,
    releaseDate: 'Unknown',
  };
}

export function compareVersions(current: string, latest: string): boolean {
  const currentParts = current.split('.').map(Number);
  const latestParts = latest.split('.').map(Number);

  for (let i = 0; i < Math.max(currentParts.length, latestParts.length); i++) {
    const currentPart = currentParts[i] || 0;
    const latestPart = latestParts[i] || 0;
    
    if (currentPart < latestPart) return true;
    if (currentPart > latestPart) return false;
  }

  return false;
}