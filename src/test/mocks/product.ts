import type { Product } from '../../../data';

export const mockProduct = (overrides: Partial<Product> = {}): Product => ({
  id: 'mock-id',
  name: 'Mock Product',
  options: [],
  type: 'Edible',
  strainType: 'Hybrid',
  image: 'mock-image.jpg',
  prices: [],
  status: 'Active',
  effects: {},
  weight: 0,
  integration: false,
  description: '',
  thcContent: 0,
  cbdContent: 0,
  dispensaryId: 'mock-dispensary',
  updatedAt: '2025-01-01T00:00:00.000Z',
  createdAt: '2025-01-01T00:00:00.000Z',
  score: 0,
  descriptionHtml: '',
  ...overrides,
});
