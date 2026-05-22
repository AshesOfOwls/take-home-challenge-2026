import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

import { theme } from 'utils/theme';
import { fetchProducts } from './api/products';
import { mockProduct } from './test/mocks/product';
import { YourStorefront } from './your-storefront';

vi.mock('./api/products', () => ({
  fetchProducts: vi.fn(),
}));

const mockProducts = [
  mockProduct({ id: '1', name: 'Product One', image: 'img1.jpg', prices: [10] }),
  mockProduct({ id: '2', name: 'Product Two', image: 'img2.jpg', prices: [20] }),
  mockProduct({ id: '3', name: 'Product Three', image: 'img3.jpg', prices: [30] }),
];

const renderStorefront = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <YourStorefront />
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

describe('YourStorefront', () => {
  it('renders a card for each product returned by the query', async () => {
    vi.mocked(fetchProducts).mockResolvedValue(mockProducts);

    renderStorefront();

    const cards = await screen.findAllByTestId('product-card');
    expect(cards).toHaveLength(3);
    expect(cards[0]).toHaveTextContent('Product One');
    expect(cards[1]).toHaveTextContent('Product Two');
    expect(cards[2]).toHaveTextContent('Product Three');
  });
});
