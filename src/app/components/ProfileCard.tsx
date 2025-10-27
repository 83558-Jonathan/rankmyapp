import Link from 'next/link';
import { GitHubUser } from '../lib/github';

export default function ProfileCard({ user }: { user: GitHubUser }) {
  return (
    <div className="flex gap-4 rounded-lg border p-4 dark:border-gray-700">
      <img src={user.avatar_url} alt={user.login} className="h-20 w-20 rounded-full" />
      <div className="flex-1">
        <div className="text-lg font-semibold">{user.name ?? user.login}</div>
        <div className="text-sm text-gray-600 dark:text-gray-300">{user.bio}</div>
        <div className="mt-2 flex gap-4 text-sm">
          <span>Seguidores: {user.followers}</span>
          <span>Seguindo: {user.following}</span>
          <span>Repositórios públicos: {user.public_repos}</span>
        </div>
        <Link
          className="mt-2 inline-block text-blue-600 hover:underline"
          href={user.html_url}
          target="_blank"
        >
          Ver no GitHub →
        </Link>
      </div>
    </div>
  );
}
