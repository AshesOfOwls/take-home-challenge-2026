import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { PageWrapper, type PageWrapperProps } from './page-wrapper';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'utils/theme';

const renderPageWrapper = (props: PageWrapperProps) => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <PageWrapper {...props} />
      </ThemeProvider>
    </BrowserRouter>
  );
};

describe('PageWrapper', () => {
  it('renders the component with the correct heading, icon, and children', () => {
    renderPageWrapper({ children: <div>Hello</div>, heading: 'Test', icon: 'test' });

    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', '/static/menu-icons/test-big.svg');
  });
});
