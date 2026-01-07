import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import mediaQueries from 'utils/media-queries';

export function Logo() {
  return (
    <Link to='/'>
      <Container>
        <Image src='/static/dutchie-logo.png' />
      </Container>
    </Link>
  );
}

const Container = styled.div`
  cursor: pointer;
  margin: 0 auto;
  width: 90%;

  ${mediaQueries.desktop`
    width: 111px;
  `}
`;

const Image = styled.img`
  display: block;
  width: 40px;
  margin: 0 auto;
  ${mediaQueries.desktop`
    width: 80px;
  `}
`;
