import './globals.css';
import type { Metadata } from 'next';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './components/ThemeProvider';

export const metadata: Metadata = {
  title: 'GitHub Insights Dashboard',
  description: 'Busca usuários e visualiza insights de repositórios do GitHub'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-dvh bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
        <ThemeProvider>
          <header className="border-b px-4 py-3 dark:border-gray-800">
            <div className="mx-auto flex max-w-6xl items-center justify-between">
              <h1 className="text-lg font-semibold">GitHub Insights Dashboard</h1>
              <ThemeToggle />
            </div>
          </header>
          <main className="mx-auto max-w-6xl p-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
