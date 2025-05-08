# HäspenUI

A Vue 3 based design system built with modern tooling.

## Prerequisites

- [Volta](https://volta.sh/) for Node.js version management
- [pnpm](https://pnpm.io/) for package management

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Start development server:
```bash
pnpm dev
```

## Project Structure

```
haspen-ui/
├── apps/              # Demo and documentation applications
├── packages/          # Design system packages
│   ├── components/    # Vue components
│   ├── tokens/        # Design tokens
│   └── utils/         # Shared utilities
├── package.json
├── turbo.json
└── pnpm-workspace.yaml
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build all packages and applications
- `pnpm lint` - Run linting
- `pnpm format` - Format code with Prettier 