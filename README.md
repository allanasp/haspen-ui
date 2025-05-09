# HäspenUI

A modern design system built with Vue 3 and Nuxt 3.

## Monorepo Structure

```
haspen-ui/
├── apps/                 # Example applications
│   └── components-test/  # Component testing app
├── packages/            # Core packages
│   ├── components/      # Vue components
│   ├── composables/     # Vue composables
│   └── nuxt/           # Nuxt module
└── docs/               # Documentation
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run development server
pnpm dev

# Run tests
pnpm test

# Run linting
pnpm lint
```

## Development

This project uses:
- [pnpm](https://pnpm.io/) for package management
- [Turborepo](https://turbo.build/) for build orchestration
- [Vue 3](https://vuejs.org/) for components
- [Nuxt 3](https://nuxt.com/) for the module

## License

MIT

## Packages

- `@haspen-ui/core`: Core styles, types, and utilities
- `@haspen-ui/components`: Vue 3 components
- `@haspen-ui/composables`: Vue 3 composables
- `@haspen-ui/nuxt`: Nuxt 3 module for seamless integration

## Installation

### Vue 3

```bash
# Core package
pnpm add @haspen-ui/core

# Components
pnpm add @haspen-ui/components

# Composables
pnpm add @haspen-ui/composables
```

### Nuxt 3

```bash
# Install Nuxt module
pnpm add @haspen-ui/nuxt
```

Then add the module to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['@haspen-ui/nuxt']
})
```

## Usage

### Vue 3

```vue
<script setup>
import { Button } from '@haspen-ui/components'
import { useToggle } from '@haspen-ui/composables'
</script>

<template>
  <Button variant="primary">Click me</Button>
</template>
```

### Nuxt 3

Components and composables are automatically available:

```vue
<script setup>
const { isOpen, toggle } = useToggle()
</script>

<template>
  <HaspenButton variant="primary">Click me</HaspenButton>
</template>
```

## Project Structure

```
haspen-ui/
├── apps/              # Demo and documentation applications
├── packages/          # Design system packages
│   ├── core/         # Core package with types, constants and base components
│   ├── shared/       # Shared utilities, helpers and formatters
│   ├── components/   # Vue components
│   ├── tokens/       # Design tokens
│   └── utils/        # Shared utilities
├── package.json
├── turbo.json
└── pnpm-workspace.yaml
```

## Packages

### @haspen-ui/core

The core package provides the fundamental building blocks of the design system:

- Type definitions for components and theme
- Default theme configuration
- Base component interfaces
- Common constants and utilities

See [core package README](./packages/core/README.md) for detailed documentation.

### @haspen-ui/shared

The shared package provides common utilities and helpers used across the design system:

- Formatting utilities (currency, dates, phone numbers)
- Validation helpers (CPR, email, phone)
- Common helper functions
- Shared types and interfaces

See [shared package README](./packages/shared/README.md) for detailed documentation.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build all packages and applications
- `pnpm lint` - Run linting
- `pnpm format` - Format code with Prettier

## Git Workflow

This project uses GitFlow as its branching strategy. Here's how to work with it:

### Branch Structure

- `main` - Production-ready code
- `develop` - Integration branch for features
- `feature/*` - New features
- `release/*` - Release preparation
- `hotfix/*` - Production fixes

### Common GitFlow Commands

1. Start a new feature:
```bash
git flow feature start feature-name
```

2. Finish a feature:
```bash
git flow feature finish feature-name
```

3. Start a release:
```bash
git flow release start v1.0.0
```

4. Finish a release:
```bash
git flow release finish v1.0.0
```

5. Start a hotfix:
```bash
git flow hotfix start hotfix-name
```

6. Finish a hotfix:
```bash
git flow hotfix finish hotfix-name
```

### Development Process

1. Create feature branch from `develop`
2. Develop and test your feature
3. Create pull request to `develop`
4. After review and approval, merge to `develop`
5. When ready for release, create release branch
6. After testing, merge to `main` and `develop`
7. Tag the release in `main`

### Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test changes
- `chore:` - Build process or auxiliary tool changes

Example:
```
feat(button): add new primary button variant
fix(modal): resolve z-index stacking issue
docs(readme): update installation instructions
``` 