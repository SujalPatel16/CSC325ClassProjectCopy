import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Hero from '../src/components/Hero';

describe('Hero Component Tests', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    const heading = screen.queryByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('renders the subheading', () => {
    render(<Hero />);
    const subheading = screen.queryByRole('heading', { level: 2 });
    expect(subheading).toBeInTheDocument();
  });

  it('renders a Call-to-Action button', () => {
    render(<Hero />);
    const ctaButton = screen.queryByRole('button');
    expect(ctaButton).toBeInTheDocument();
  });

  it('renders the Hero visual', () => {
    render(<Hero />);
    const heroVisual = screen.queryByRole('img');
    expect(heroVisual).toBeInTheDocument();
  });
});