import yaml from 'js-yaml';
import portfolioProjectsYml from '../../src/portfolioProjects.yml?raw';

// Parse YAML portfolio projects
export const parsedPortfolioProjects = yaml.load(portfolioProjectsYml) as any[];
