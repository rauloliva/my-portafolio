import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MyResume from '../components/MyResume';

describe('My Resume page', () => {
  it('renders the title', () => {
    render(<MyResume />);

    const title = screen.getByRole('heading', { level: 1 });

    expect(title).toBeInTheDocument();

    const text = title.textContent;

    expect(text).toEqual('My Resume');
  });

  it('Resume is embeded in DOM', () => {
    render(<MyResume />);

    const embed = screen.getByTitle('embeded-resume');

    expect(embed).toBeInTheDocument();
  });
});
