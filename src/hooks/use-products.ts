import { useQuery } from '@tanstack/react-query';

import { fetchProducts } from '../api/products';

export function useProducts(searchText: string = '') {
  return useQuery({
    queryKey: ['products', searchText],
    queryFn: () => fetchProducts(searchText),
  });
}
