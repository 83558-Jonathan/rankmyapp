import { GitHubRepo } from '../lib/github';
import Link from 'next/link';

export default function RepoCard({ repo }: { repo: GitHubRepo }) {
  return (
    <div className="rounded-lg border p-4 dark:border-gray-700">
      <div className="flex items-start justify-between">
        <h3 className="text-base font-semibold">{repo.name}</h3>
        <span className="rounded bg-gray-100 px-2 py-0.5 text-xs dark:bg-gray-800">
          ⭐ {repo.stargazers_count}
        </span>
      </div>
      {repo.description && (
        <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{repo.description}</p>
      )}
      <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
        <span className="mr-3">Linguagem: {repo.language ?? '—'}</span>
        <span>Atualizado: {new Date(repo.updated_at).toLocaleString()}</span>
      </div>
      <Link className="mt-2 inline-block text-blue-600 hover:underline" href={repo.html_url} target="_blank">
        Abrir repositório →
      </Link>
    </div>
  );
}
