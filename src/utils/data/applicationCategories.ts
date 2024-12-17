export const categories = [
  'Development Tools',
  'Design & Creative',
  'Office & Productivity',
  'Communication',
  'Security',
  'Database',
  'Cloud & DevOps',
  'Business',
  'Media & Entertainment',
  'System Utilities',
] as const;

export type ApplicationCategory = typeof categories[number];