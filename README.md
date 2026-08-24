# alianza-card

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

The `alianza-card` Pages project is connected to
`Gentle-Art-Technologies/alianza-card`. Commits to `main` build with
`npm run build` and publish `dist/` to `https://alianza-card.pages.dev`.

Wrangler is pinned in the project for Cloudflare-compatible local previews and
manual recovery deployments:

```sh
npm run pages:dev
npm run pages:deploy
```
