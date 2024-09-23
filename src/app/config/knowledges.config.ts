export enum filtersType {
  allVideos = 'allVideos',
  advancedPrototyping = 'advancedPrototyping',
  autoLayout = 'autoLayout',
  variables = 'variables',
  userResearch = 'userResearch',
  designSystem = 'designSystem'
}

export const availableFilters = Object.values(filtersType);

export const knowledgesVideo = [
  {
    id: 'APNWWhXIg04',
    title: 'Figma tutorial: Variables for typography',
    filters: [filtersType.variables],
  },
  {
    id: 'UUsysuFmVrA',
    title: 'Figma for Edu: Prototyping 101, new basics',
    filters: [filtersType.userResearch],
  },
  {
    id: 'UPh8nFAwdTk',
    title: 'Personas vs. Analytics Segments',
    filters: [filtersType.userResearch],
  },
  {
    id: '2bG3VEtWM6E',
    title: 'Figma Tutorial: Advanced Prototyping With Variables',
    filters: [filtersType.variables],
  },
  {
    id: 'fn4rP20U2UM',
    title: 'Figma Tutorial: Use Figma Variables Like a Pro',
    filters: [filtersType.variables],
  },
  {
    id: 'XKudQA6gsTY',
    title: 'State Management in Figma',
    filters: [filtersType.variables],
  },
  {
    id: 'jrQNtNm2-Qs',
    title: 'Figma Auto-Layout Updates',
    filters: [filtersType.autoLayout],
  },
  {
    id: 'MFGQrjBFMe8',
    title: 'Tracking Prototype Analytics',
    filters: [filtersType.advancedPrototyping],
  },
  {
    id: 'WATzIK0Ai8I',
    title: 'Master Figma Tokens & Variables:',
    filters: [filtersType.variables],
  },
  {
    id: 'wk9xSDNboZw',
    title: "How to use Figma's new Dev Mode",
    filters: [filtersType.variables],
  },
  {
    id: 'drg7jG6GTFg',
    title: 'Figma tutorial: Sticky scroll',
    filters: [filtersType.advancedPrototyping],
  },
  {
    id: 'e9uPfBEJKLs',
    title: 'Office hours: Advanced prototyping',
    filters: [filtersType.advancedPrototyping],
  },
  {
    id: 'qB-4-ZC1M5s',
    title: 'Figma Component - Input Field',
    filters: [filtersType.variables],
  },
];
