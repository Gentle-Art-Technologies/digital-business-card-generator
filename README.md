# Digital business card generator

Alianza team digital business cards (alianza.health)

## Development

Requires Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

Run the production checks with:

```sh
npm run check
npm run build
```

## Cloudflare Pages

Wrangler is pinned in the project for Cloudflare-compatible local previews and
manual recovery deployments:

```sh
npm run pages:dev
npm run pages:deploy
```
