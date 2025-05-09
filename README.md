# HäspenUI Design System

Et moderne Vue 3-baseret designsystem bygget med TypeScript, Turborepo og pnpm.

## Turborepo Pipeline

HäspenUI bruger Turborepo til at håndtere byggeprocessen på tværs af alle pakker. Dette giver os:

- Hurtigere byggetider gennem intelligent caching
- Parallelle builds af uafhængige pakker
- Konsistent udviklingsmiljø
- Automatisk håndtering af afhængigheder

### Pipeline Tasks

```bash
# Byg alle pakker
pnpm build

# Start udviklingsserver for alle pakker
pnpm dev

# Kør linting på tværs af alle pakker
pnpm lint

# Kør tests for alle pakker
pnpm test

# Ryd op i alle pakker
pnpm clean

# Typecheck alle pakker
pnpm typecheck
```

### Caching

Turborepo cacher output fra hver task baseret på:
- Kildekode
- Afhængigheder
- Miljøvariabler
- Task-konfiguration

Dette betyder at:
- Når du ændrer én pakke, genbygges kun den og dens afhængige pakker
- Uændrede pakker genbruger deres cachede output
- Byggetiden reduceres betydeligt efter første build

### Pipeline Struktur

```
build
  ├── core (bygger først)
  ├── shared (bygger først)
  ├── components (afhænger af core, shared)
  ├── composables (afhænger af core)
  └── nuxt (afhænger af alle andre)

test
  └── afhænger af build

lint
  └── kører parallelt

dev
  └── kører parallelt
```

## Udvikling

1. Installer dependencies:
```bash
pnpm install
```

2. Start udviklingsserver:
```bash
pnpm dev
```

3. Byg alle pakker:
```bash
pnpm build
```

## Licens

MIT

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

## TypeScript konfiguration

Dette monorepo bruger en central TypeScript konfiguration for alle pakker, optimeret til et Vue 3 designsystem med høj typesikkerhed.

### Rodniveau tsconfig.json
- **Strict mode**: Alle relevante strict-flags er slået til for maksimal typesikkerhed og robusthed.
- **Target**: ES2020 og ESNext module for moderne JavaScript og tree-shaking.
- **Path aliases**: `@haspen-ui/*` peger på `packages/*/src` så du kan importere på tværs af pakker med korte imports.
- **Lib**: Både ES2020 og DOM for browser- og moderne JS-API'er.
- **Types**: Understøtter `vitest`, `node` og `vue` globalt.
- **Vue 3 support**: Konfigureret til at forstå `.vue` filer og bruge Vue 3's compiler.

### tsconfig.build.json
- Udvider root-konfigurationen.
- Ekskluderer testfiler og test-mapper fra builds.
- Optimerer til produktion: ingen source maps, ingen kommentarer i output.

### Path aliases
- `@haspen-ui/*` bruges til at importere kode på tværs af pakker, fx:
  ```ts
  import { Button } from '@haspen-ui/components'
  ```
- Dette gør det nemt at refaktorere og giver bedre editor-support.

### TypeScript version
- Projektet bruger TypeScript version 5.8.3 (se root package.json).

---

## Forklaring af vigtige indstillinger

- **strict**: Aktiverer alle strenge typechecks for at fange fejl tidligt.
- **noImplicitAny**: Forhindrer implicit `any` typer, så alle typer skal være eksplicitte.
- **strictNullChecks**: Gør at `null` og `undefined` skal håndteres eksplicit.
- **forceConsistentCasingInFileNames**: Undgår fejl på tværs af OS ved at kræve ensartet brug af store/små bogstaver.
- **esModuleInterop/allowSyntheticDefaultImports**: Gør det lettere at importere CommonJS/ESM moduler.
- **paths**: Gør det muligt at bruge aliaser til imports på tværs af pakker.
- **types**: Sikrer at globale typer fra fx `vitest` og `vue` altid er tilgængelige.
- **vueCompilerOptions**: Gør at TypeScript forstår og kan typechecke `.vue` filer med Vue 3.

Denne opsætning sikrer et moderne, robust og skalerbart TypeScript-setup til et Vue 3 designsystem. 