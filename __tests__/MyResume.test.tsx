import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

const mockUseResumeFile = jest.fn(() => '/mock-resume.pdf');

jest.mock('@/hooks/useGithub', () => ({
  useResumeFile: () => mockUseResumeFile(),
}));

import MyResume from '@/components/features/MyResume/MyResume';

describe('My Resume page', () => {
  it('renders the title', () => {
    render(<MyResume />);

    const title = screen.getByRole('heading', { level: 1 });

    expect(title).toBeInTheDocument();
    expect(title.textContent).toEqual('My Resume');
  });

  it('embeds the resume PDF returned by the hook', () => {
    render(<MyResume />);

    const embed = screen.getByTitle('embeded-resume');

    expect(embed).toBeInTheDocument();
    expect(embed).toHaveAttribute('src', '/mock-resume.pdf');
  });
});
