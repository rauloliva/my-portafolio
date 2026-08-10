import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Skills from '@/components/layouts/Skills';

describe('My Skill Set', () => {
  it('should render my Skills layout', () => {
    render(<Skills />);

    const articles = screen.getAllByRole('article');

    const n_articles = articles.length;

    expect(n_articles).toEqual(5);
  });
});
