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
    const subheading = screen.getByText(/You're on a mission to build exceptional tech teams/i);
    expect(subheading).toBeInTheDocument();
  });

  it('renders a Call-to-Action button', () => {
    render(<Hero />);
    const ctaButton = screen.queryByRole('button', { name: /Go now/i });
    expect(ctaButton).toBeInTheDocument();
  });

  it('renders the Hero visual', () => {
    render(<Hero />);
    const heroVisual = screen.getByTestId('hero-visual');
    expect(heroVisual).toBeInTheDocument();
  });
});