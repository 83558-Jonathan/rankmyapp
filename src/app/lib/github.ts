import axios from 'axios';

export type GitHubUser = {
  login: string;
  avatar_url: string;
  name: string | null;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
};

export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  html_url: string;
  updated_at: string;
};

export const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: { Accept: 'application/vnd.github+json' }
});

export async function getUser(username: string): Promise<GitHubUser> {
  const { data } = await api.get<GitHubUser>(`/users/${username}`);
  return data;
}

export async function getRepos(username: string): Promise<GitHubRepo[]> {
  const { data } = await api.get<GitHubRepo[]>(`/users/${username}/repos?per_page=100&sort=updated`);
  return data;
}

export function computeLanguageInsights(repos: GitHubRepo[]) {
  const byLanguageCount: Record<string, number> = {};
  const starsByLanguage: Record<string, number> = {};

  repos.forEach((r) => {
    const lang = r.language ?? 'Other';
    byLanguageCount[lang] = (byLanguageCount[lang] ?? 0) + 1;
    starsByLanguage[lang] = (starsByLanguage[lang] ?? 0) + (r.stargazers_count || 0);
  });

  const languages = Object.keys(byLanguageCount);
  return {
    languages,
    byLanguageCount,
    starsByLanguage
  };
}
