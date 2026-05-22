import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

import { theme } from 'utils/theme';
import { fetchProducts } from './api/products';
import { ProductPage } from './product';
import { mockProduct } from './test/mocks/product';

vi.mock('./api/products', () => ({
  fetchProducts: vi.fn(),
}));

const renderProductPage = (id: string) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return render(
    <MemoryRouter initialEntries={[`/product/${id}`]}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path='/product/:id' element={<ProductPage />} />
          </Routes>
        </ThemeProvider>
      </QueryClientProvider>
    </MemoryRouter>
  );
};

describe('ProductPage', () => {
  it('renders product name, description, and effects', async () => {
    vi.mocked(fetchProducts).mockResolvedValue([
      mockProduct({
        id: '42',
        name: 'Blue Dream',
        description: 'A sweet berry aroma.',
        effects: { Happy: 5, Relaxed: 4 },
      }),
    ]);

    renderProductPage('42');

    expect(await screen.findByText('Blue Dream')).toBeInTheDocument();
    expect(screen.getByText('A sweet berry aroma.')).toBeInTheDocument();
    expect(screen.getByText('Happy: 5')).toBeInTheDocument();
    expect(screen.getByText('Relaxed: 4')).toBeInTheDocument();
  });

  it('renders the not-found message for unknown ids', async () => {
    vi.mocked(fetchProducts).mockResolvedValue([mockProduct({ id: '1' })]);

    renderProductPage('999');

    expect(await screen.findByRole('alert')).toHaveTextContent('Product not found.');
  });
});
