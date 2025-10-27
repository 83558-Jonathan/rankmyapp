import SearchBox from "./components/SearchBox";

export const revalidate = 3600;

export default function HomePage() {
  return (
    <div className="flex flex-col items-center gap-6 py-10">
      <p className="text-center text-lg">Digite um username do GitHub e veja os insights.</p>
      <SearchBox />
      <div className="rounded-lg border p-4 text-sm text-gray-600 dark:border-gray-700 dark:text-gray-300">
        Exemplo: <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">vercel</code>,{' '}
        <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">facebook</code>
      </div>
    </div>
  );
}
