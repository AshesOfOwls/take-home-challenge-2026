import styled from '@emotion/styled';
import { Link, useParams } from 'react-router-dom';

import media from 'utils/media-queries';
import { PageWrapper } from './components/layout/page-wrapper';
import { useProduct } from './hooks/use-product';

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const { data: product, isPending } = useProduct(id ?? '');

  return (
    <PageWrapper heading='Product' icon='menu'>
      <BackLink to='/your-storefront'>Back to storefront</BackLink>
      {isPending && <div role='status'>Loading product…</div>}
      {!isPending && !product && <div role='alert'>Product not found.</div>}
      {product && (
        <Container>
          <ImageSection>
            <Image src={product?.image} alt={product?.name ?? 'Unknown Name'} />
          </ImageSection>
          <DetailsSection>
            <Heading>
              <Brand>{product?.brandName ?? 'Unknown Brand'}</Brand>
              <Name>{product?.name ?? 'Unknown Name'}</Name>
              <Type>{product?.type ?? 'Unknown Type'}</Type>
              <Strain>{product?.strainType ?? 'Unknown Strain'}</Strain>
            </Heading>
            <Pricing>
              {product?.prices?.map((price) => <Price key={price}>${price}</Price>) ?? 'No prices available'}
            </Pricing>
            <Description>{product?.description ?? 'Unknown Description'}</Description>
            <Metadata>
              <Effects>
                {product?.effects
                  ? Object.entries(product.effects).map(([effect, score]) => (
                      <Effect key={effect}>
                        {effect}: {score}
                      </Effect>
                    ))
                  : 'No effects available'}
              </Effects>
              <Thc>THC: {product?.thcContent ?? 'Unknown'}</Thc>
              <Cbd>CBD: {product?.cbdContent ?? 'Unknown'}</Cbd>
              <Flavors>
                {product?.flavors?.map((flavor) => <Flavor key={flavor}>{flavor}</Flavor>) ?? 'No flavors available'}
              </Flavors>
              <Weight>Weight: {product?.weight ?? 'Unknown'}</Weight>
              <Options>
                {product?.options?.map((option) => <Option key={option}>{option}</Option>) ?? 'No options available'}
              </Options>
            </Metadata>
          </DetailsSection>
        </Container>
      )}
    </PageWrapper>
  );
}

const BackLink = styled(Link)``;

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

const Image = styled.img`
  width: 100%;
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

const Type = styled.div``;

const Strain = styled.div``;

const Pricing = styled.div``;

const Price = styled.div``;

const Description = styled.div``;

const Metadata = styled.div``;

const Effects = styled.div``;

const Effect = styled.div``;

const Thc = styled.div``;

const Cbd = styled.div``;

const Flavors = styled.div``;

const Flavor = styled.div``;

const Weight = styled.div``;

const Options = styled.div``;

const Option = styled.div``;
