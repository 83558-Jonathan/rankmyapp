'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function SearchBox() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    router.push(`/u/${encodeURIComponent(username.trim())}`);
  }

  return (
    <form onSubmit={onSubmit} className="flex gap-2 w-full max-w-xl">
      <input
        aria-label="GitHub username"
        className="flex-1 rounded border px-3 py-2 outline-none focus:ring dark:bg-gray-900 dark:border-gray-700"
        placeholder="Digite um username do GitHub (ex: vercel)"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        disabled={loading}
      />
      <button
        className={`rounded px-4 py-2 text-white font-medium transition ${
          loading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
        disabled={!username.trim() || loading}
        type="submit"
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Buscando...
          </div>
        ) : (
          'Buscar'
        )}
      </button>
    </form>
  );
}
