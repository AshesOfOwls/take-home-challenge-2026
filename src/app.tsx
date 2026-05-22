import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';

import { GlobalStyle } from './components/layout/global-style';
import { Navigation } from './components/layout/navigation/index';
import { HomePage } from './index';
import { YourStorefront } from './your-storefront';
import { theme } from 'utils/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProductPage } from './product';

export function App() {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Wrapper>
            <Navigation />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/your-storefront' element={<YourStorefront />} />
              <Route path='/product/:id' element={<ProductPage />} />
            </Routes>
          </Wrapper>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
