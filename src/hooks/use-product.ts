import { useQuery } from '@tanstack/react-query';

import { fetchProducts } from '../api/products';

export function useProduct(id: string) {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    select: (products) => products.find((p) => p.id === id),
  });
}
