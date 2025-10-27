'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { GitHubRepo } from '../lib/github';
import RepoCard from './RepoCard';

function makeMock(baseId: number): GitHubRepo {
  const id = baseId + Math.floor(Math.random() * 100000);
  const langs = ['TypeScript', 'JavaScript', 'Go', 'Rust', 'Python', null];
  const lang = langs[Math.floor(Math.random() * langs.length)];
  return {
    id,
    name: `mock-repo-${id}`,
    description: 'Repositório simulado chegando em tempo real',
    stargazers_count: Math.floor(Math.random() * 50),
    language: lang,
    html_url: 'https://github.com/mock/mock',
    updated_at: new Date().toISOString(),
  };
}

export default function RealtimeMock({ initial }: { initial: GitHubRepo[] }) {
  const [repos, setRepos] = useState<GitHubRepo[]>(initial);
  const counter = useRef(0);

  useEffect(() => {
    const t = setInterval(() => {
      counter.current += 1;
      setRepos((prev) => [makeMock(counter.current), ...prev].slice(0, 50));
    }, 30_000);
    return () => clearInterval(t);
  }, []);

  const sorted = useMemo(
    () => [...repos].sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()),
    [repos]
  );

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {sorted.map((r) => (
        <RepoCard key={r.id} repo={r} />
      ))}
    </div>
  );
}
