import styled from '@emotion/styled';
import { useState } from 'react';

import media from 'utils/media-queries';
import { CartSummary } from './components/cart-summary';
import { PageWrapper } from './components/layout/page-wrapper';
import { ProductCard } from './components/product-card';
import { useDebouncedValue } from './hooks/use-debounced-value';
import { useProducts } from './hooks/use-products';

export function YourStorefront() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebouncedValue(search);
  const { data: products = [], isPending, isError } = useProducts(debouncedSearch);

  return (
    <PageWrapper heading='Your Storefront' icon='menu'>
      <SearchInput
        type='text'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder='Search products…'
        aria-label='Search products'
      />
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

const SearchInput = styled.input``;

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
