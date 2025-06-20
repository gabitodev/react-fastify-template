# React + Fastify Monorepo Template

This template provides a modern, batteries-included monorepo setup for building full-stack web applications using React, Fastify, TypeScript, Vite, and Tailwind CSS. It is designed to help you quickly scaffold new projects with best practices and a productive developer experience.

---

## Monorepo Structure

```
.
├── apps/
│   ├── client/   # React frontend app
│   └── server/   # Fastify backend app
├── package.json
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
└── README.md
```

---

## Tech Stack

### Frontend ([apps/client](apps/client))

- **React 19**: Modern UI library for building interactive user interfaces.
- **TypeScript**: Static typing for safer and more maintainable code.
- **Vite**: Lightning-fast development server and build tool.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **TanStack Router**: Powerful, type-safe routing for React apps.
- **ESLint & Prettier**: Code quality and formatting tools.
- **SWC**: Super-fast JavaScript/TypeScript compiler (via `@vitejs/plugin-react-swc`).

### Backend ([apps/server](apps/server))

- **Fastify**: High-performance Node.js web framework.
- **TypeScript**: Type-safe backend development.
- **Pino**: Fast and low-overhead logging (via `pino-pretty` for development).
- **ESLint & Prettier**: Code linting and formatting.
- **Cross-env**: Environment variable management for scripts.

### Tooling

- **pnpm**: Fast, disk space-efficient package manager with workspace support.
- **Monorepo**: Single repository for both frontend and backend, enabling shared tooling and dependencies.
- **TypeScript Project References**: For scalable, incremental builds.
- **Vite Proxy**: Seamless API requests from frontend to backend during development.

---

## Getting Started

1. **Install dependencies** (from the root):

   ```sh
   pnpm install
   ```

2. **Run the backend**:

   ```sh
   pnpm --filter server dev
   ```

3. **Run the frontend** (in a separate terminal):

   ```sh
   pnpm --filter client dev
   ```

4. **Open** [http://localhost:5173](http://localhost:5173) to view the app.

---

## Features

- **Hot Module Reloading** for both frontend and backend.
- **Type-safe routing** and API calls.
- **Pre-configured ESLint and Prettier** for consistent code style.
- **Production-ready build scripts** for both apps.
- **Easy environment management** with `cross-env`.

---

## Customization

- Add new routes in `apps/client/src/routes` and `apps/server`.
- Configure Tailwind in `apps/client/tailwind.config.js`.
- Extend ESLint rules in `eslint.config.js` or `eslint.config.mjs` in each app.

---

## License

MIT

---

> Scaffolded with ❤️ for modern full-stack TypeScript