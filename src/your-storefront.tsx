import styled from '@emotion/styled';

import { PageWrapper } from './components/layout/page-wrapper';
import { ProductCard } from './components/product-card';
import { useProducts } from './hooks/use-products';

export function YourStorefront() {
  const { data: products } = useProducts();

  return (
    <PageWrapper heading='Your Storefront' icon='menu'>
      <ProductGrid>
        {(products ?? []).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </PageWrapper>
  );
}

const ProductGrid = styled.div`
  display: flex;
`;
