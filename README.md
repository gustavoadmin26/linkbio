# Gustavo Goulart — Link na Bio

Landing page mobile-first com os quatro cards de conversão de Gustavo Goulart, seguindo a identidade visual do projeto `gustavoadmin26/Site`.

## Cards

1. Contrate a Arquitetura de Crescimento™ — formulário YayForms conectado.
2. Aprenda comigo — URL da mentoria pendente.
3. O que é a Arquitetura de Crescimento™? — URL do método pendente.
4. Palestras & Workshops — URL de contratação pendente.

Os destinos ficam centralizados em `public/config.js`.

## Cloudflare Workers — deploy direto

Este projeto não usa GitHub Actions.

```bash
npm install
npx wrangler login
npm run deploy
```

Para desenvolvimento local:

```bash
npm install
npm run dev
```

Nenhum secret de aplicação é necessário para a página atual. Os links dos cards são URLs públicas e ficam em `public/config.js`.
