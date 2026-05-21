import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';

import { PageWrapper } from './components/layout/page-wrapper';
import { ProductCard } from './components/product-card';
import { fetchProducts } from './api/products';

export function YourStorefront() {
  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  return (
    <PageWrapper heading='Your Storefront' icon='menu'>
      <ProductGrid>
        {(products ?? []).map((product) => (
          <ProductCard key={product.id} />
        ))}
      </ProductGrid>
    </PageWrapper>
  );
}

const ProductGrid = styled.div`
  display: flex;
`;
