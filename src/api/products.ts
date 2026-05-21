import type { Product } from '../../data';

const API_URL = 'http://localhost:1337/get-products';

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
  }
  return (await res.json()) as Product[];
}
