import { PageWrapper } from './components/layout/page-wrapper';
import styled from '@emotion/styled';
import { ProductCard } from './components/product-card';

const API_URL = 'http://localhost:1337/get-products';

export function YourStorefront() {
  // fetch the data via useQuery from @tanstack/react-query!

  return (
    <PageWrapper heading='Your Storefront' icon='menu'>
      <ProductGrid>
        <ProductCard />
      </ProductGrid>
    </PageWrapper>
  );
}

const ProductGrid = styled.div`
  display: flex;
`;
