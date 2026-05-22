import { ThemeProvider } from '@emotion/react';
import { render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { theme } from 'utils/theme';
import type { Product } from '../../../data';
import { mockProduct } from '../../test/mocks/product';
import { ProductCard } from '.';

const renderCard = (overrides: Partial<Product> = {}) => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ProductCard product={mockProduct(overrides)} />
      </ThemeProvider>
    </BrowserRouter>
  );
};

describe('ProductCard', () => {
  it('renders image alt, name, brand, and price', () => {
    renderCard({
      id: '42',
      name: 'Blue Dream',
      brandName: 'Acme',
      prices: [10, 20],
      image: 'blue-dream.jpg',
    });

    const card = screen.getByTestId('product-card');
    const image = within(card).getByRole('img', { name: 'Blue Dream' });

    expect(image).toHaveAttribute('src', 'blue-dream.jpg');
    expect(card).toHaveTextContent('Acme');
    expect(card).toHaveTextContent('Blue Dream');
    expect(card).toHaveTextContent('$10');
    expect(card).toHaveTextContent('$20');
  });

  it('links to /product/:id', () => {
    renderCard({ id: '42' });

    expect(screen.getByRole('link')).toHaveAttribute('href', '/product/42');
  });

  it('falls back to "Unknown Brand" when brandName is missing', () => {
    renderCard({ brandName: undefined });

    expect(screen.getByTestId('product-card')).toHaveTextContent('Unknown Brand');
  });
});
