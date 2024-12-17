import { vendors } from './vendors';

interface VersionRange {
  min: string;
  max: string;
}

const generateVersion = (range: VersionRange): string => {
  const minParts = range.min.split('.').map(Number);
  const maxParts = range.max.split('.').map(Number);
  
  return minParts.map((min, i) => {
    const max = maxParts[i] || min;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }).join('.');
};

export const versionRanges: Record<string, VersionRange> = {
  'Visual Studio': { min: '17.0.0', max: '17.9.0' },
  'VS Code': { min: '1.80.0', max: '1.87.0' },
  'Office': { min: '16.0.0', max: '16.0.17200' },
  'Photoshop': { min: '22.0.0', max: '25.5.0' },
  'IntelliJ IDEA': { min: '2023.1', max: '2024.1' },
  // Add more version ranges as needed
};

export const getRandomVersion = (appName: string): string => {
  const range = versionRanges[appName] || { min: '1.0.0', max: '5.0.0' };
  return generateVersion(range);
};