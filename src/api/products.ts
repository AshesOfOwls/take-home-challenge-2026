import type { Product } from '../../data';

const API_URL = 'http://localhost:1337/get-products';

export async function fetchProducts(searchText?: string): Promise<Product[]> {
  const url = new URL(API_URL);
  if (searchText) {
    url.searchParams.set('searchText', searchText);
  }
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
  }
  return (await res.json()) as Product[];
}
