import styled from '@emotion/styled';

import media from 'utils/media-queries';
import { CartSummary } from './components/cart-summary';
import { PageWrapper } from './components/layout/page-wrapper';
import { ProductCard } from './components/product-card';
import { useProducts } from './hooks/use-products';

export function YourStorefront() {
  const { data: products = [], isPending, isError } = useProducts();

  return (
    <PageWrapper heading='Your Storefront' icon='menu'>
      {isPending && <div role='status'>Loading products…</div>}
      {isError && <div role='alert'>Failed to load products. Please try again.</div>}
      <CartSummary />
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </PageWrapper>
  );
}

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 300px;
  gap: 16px;
  justify-content: center;

  ${media.tablet`
    grid-template-columns: repeat(2, 300px);
  `}

  ${media.desktop`
    grid-template-columns: repeat(3, 300px);
  `}
`;
