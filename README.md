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

## Descrição técnica
- Next.js 14 — framework React com suporte a SSR, SSG e App Router.
- React 18 — componentes funcionais, hooks e rendering assíncrono.
- TypeScript — tipagem estática para maior confiabilidade.
- TailwindCSS 3.x — estilização utilitária responsiva e dark mode.
- Axios — requisições HTTP para a API pública do GitHub.
- Recharts — gráficos interativos para exibir métricas de repositórios.
- Jest + React Testing Library (RTL) — testes unitários e de renderização.
- ESLint + Prettier — linting e formatação padronizada.
- Dockerfile — containerização pronta para deploy.

---

## Rodando localmente
```bash
npm ci
npm run dev
http://localhost:3000
```

---

## Testes automatizados
```bash
npm test
```

---

## Executar via Docker
```bash
docker build -t rankmyapp .
docker run -p 3000:3000 rankmyapp
```
