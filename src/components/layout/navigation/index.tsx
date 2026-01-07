import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

import { Logo } from '../logo';
import { NavLink } from '../navigation/nav-link';

import mediaQueries from 'utils/media-queries';

const routes = [
  {
    icon: 'dispensaries',
    key: 'index',
    label: 'Read me!',
    pathname: '/',
  },
  {
    icon: 'menu',
    key: 'your-storefront',
    label: 'Your Storefront',
    pathname: '/your-storefront',
  },
];

export function Navigation() {
  const location = useLocation();

  return (
    <Container>
      <Logo />

      <NavWrapper>
        {routes.map((route) => (
          <NavLink
            active={location.pathname === route.pathname}
            icon={route.icon}
            key={route.key}
            label={route.label}
            pathname={route.pathname}
          />
        ))}
      </NavWrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundMenu};
  flex: 0 0 auto;
  padding-top: 37px;
  width: 68px;

  ${mediaQueries.desktop`
    width: 200px;
  `}
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 42px;
  padding-top: 41px;
`;
