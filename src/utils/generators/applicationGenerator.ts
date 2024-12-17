import { Application } from '../../types';
import { categories } from '../data/applicationCategories';
import { vendors } from '../data/vendors';
import { getRandomVersion } from '../data/applicationVersions';

export function generateApplications(count: number): Application[] {
  const applications: Application[] = [];
  let id = 1;

  // Generate applications for each vendor
  Object.entries(vendors).forEach(([vendor, products]) => {
    products.forEach(product => {
      if (applications.length < count) {
        const currentVersion = getRandomVersion(product);
        applications.push({
          id: String(id++),
          name: product,
          currentVersion,
          vendor,
          lastChecked: new Date(
            Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
          ).toISOString().split('T')[0],
          category: categories[Math.floor(Math.random() * categories.length)],
        });
      }
    });
  });

  // Generate remaining applications if needed
  while (applications.length < count) {
    const vendor = Object.keys(vendors)[Math.floor(Math.random() * Object.keys(vendors).length)];
    const name = `${vendor} App ${applications.length + 1}`;
    
    applications.push({
      id: String(id++),
      name,
      currentVersion: getRandomVersion(name),
      vendor,
      lastChecked: new Date(
        Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
      ).toISOString().split('T')[0],
      category: categories[Math.floor(Math.random() * categories.length)],
    });
  }

  return applications;
}