import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';

import media from 'utils/media-queries';
import { useProduct } from './hooks/use-product';

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const { data: product } = useProduct(id ?? '');

  return (
    <Container>
      <ImageSection />
      <DetailsSection>
        <Heading>
          <Brand>{product?.brandName ?? 'Unknown Brand'}</Brand>
          <Name>{product?.name ?? 'Unknown Name'}</Name>
        </Heading>
        <Pricing />
        <Description />
        <Metadata />
      </DetailsSection>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${media.tablet`
    flex-direction: row;
  `}
`;

const ImageSection = styled.div`
  flex: 1;
`;

const DetailsSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Heading = styled.div``;

const Brand = styled.div``;

const Name = styled.div``;

const Pricing = styled.div``;

const Description = styled.div``;

const Metadata = styled.div``;
