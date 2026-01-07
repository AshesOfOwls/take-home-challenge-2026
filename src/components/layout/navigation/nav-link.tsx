import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import mediaQueries from 'utils/media-queries';

type NavLinkProps = {
  active: boolean;
  icon: string;
  label: string;
  pathname: string;
};

export function NavLink({ active, icon, label, pathname }: NavLinkProps) {
  const iconSrc = active ? `/static/menu-icons/${icon}-active.svg` : `/static/menu-icons/${icon}-inactive.svg`;

  return (
    <Container>
      <Link to={pathname}>
        <Wrapper active={active}>
          <Icon src={iconSrc} />
          <Text>{label}</Text>
        </Wrapper>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;

const Wrapper = styled.div<{ active: boolean }>`
  align-items: center;
  background-color: ${({ active }) => (active ? '#102F4D' : null)};
  cursor: pointer;
  display: flex;
  font-size: 14px;
  justify-content: center;
  padding: 10px 0;

  ${mediaQueries.desktop`
    height: 42px;
    justify-content: flex-start;
    padding: 0 0 0 38px;
  `}
`;

const Icon = styled.img`
  display: inline-block;
  width: 22px;

  ${mediaQueries.desktop`
    width: 14px;
  `}
`;

const Text = styled.span`
  color: #fff;
  display: none;
  font-family: ${({ theme }) => theme.fontFamilies.proxima};
  font-weight: 700;
  margin-left: 18px;

  ${mediaQueries.desktop`
    display: inline;
  `}
`;
