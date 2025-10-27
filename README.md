# GitHub Insights Dashboard – RankMyApp

Aplicação Next.js 14 (App Router) + React 18 + TypeScript + Tailwind + Axios + Recharts.

## Funcionalidades
- Busca de usuários do GitHub.
- Listagem de repositórios em cards (nome, descrição, linguagem, estrelas, última atualização).
- Gráficos de insights:
  - Linguagens mais usadas (quantidade de repositórios).
  - Total de estrelas por linguagem.
- Atualização “em tempo real” mockada (1 repo a cada 30s).
- Dark/Light mode persistente via localStorage.
- SSR na rota `/u/[username]`.
- Testes (Jest + RTL), ESLint + Prettier, Dockerfile e CI (GitHub Actions).

---

## Rodando localmente
```bash
npm ci
npm run dev
# abra http://localhost:3000
