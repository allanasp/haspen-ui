# HäspenUI

A Vue 3 based design system built with modern tooling.

## Prerequisites

- [Volta](https://volta.sh/) for Node.js version management
- [pnpm](https://pnpm.io/) for package management
- [Git](https://git-scm.com/) for version control
- [GitFlow](https://github.com/nvie/gitflow) for branching strategy

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
│   ├── core/         # Core package with types, constants and base components
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