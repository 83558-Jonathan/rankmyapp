import { render, screen, act } from '@testing-library/react';
import RealtimeMock from '@/app/components/RealtimeMock';
import { GitHubRepo } from '@/app/lib/github';

jest.useFakeTimers();

function fakeRepo(id: number): GitHubRepo {
  return {
    id,
    name: `r-${id}`,
    description: null,
    stargazers_count: 0,
    language: 'TypeScript',
    html_url: '#',
    updated_at: new Date().toISOString(),
  };
}

describe('RealtimeMock', () => {
  it('adiciona repositório a cada 30s', () => {
    render(<RealtimeMock initial={[fakeRepo(1), fakeRepo(2)]} />);
    expect(screen.getByText('r-1')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(30_000);
    });
    expect(screen.getByText(/mock-repo-/i)).toBeInTheDocument();
  });
});
