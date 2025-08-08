# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this
repository.

## Essential Commands

### Development

```bash
pnpm dev                    # Start all development servers
pnpm dev:playground         # Start playground app only (@haspen-ui/playground)
pnpm storybook             # Start Storybook component documentation (port 6006)
```

### Building and Testing

```bash
pnpm build                 # Build all packages and apps
pnpm build:packages        # Build only packages (excludes apps)
pnpm test                  # Run all tests across monorepo
pnpm test --filter=@haspen-ui/ui  # Run tests for specific package
pnpm test:watch            # Run tests in watch mode
pnpm typecheck             # TypeScript checking across all packages
pnpm lint                  # Lint all packages
```

### Package-specific Development

```bash
# Build single package in watch mode
turbo run dev --filter=@haspen-ui/ui

# Run tests for single package
pnpm test --filter=@haspen-ui/composables
```

## Monorepo Architecture

### Package Structure and Dependencies

- **@haspen-ui/core** - Foundation types, constants, base interfaces
- **@haspen-ui/shared** - Utilities, formatters, validation (depends on core)
- **@haspen-ui/design-tokens** - SCSS variables, colors, typography, spacing
- **@haspen-ui/ui** - Vue 3 components using atomic design (depends on core, shared)
- **@haspen-ui/composables** - Vue 3 composables/hooks (depends on core, shared)
- **@haspen-ui/nuxt** - Nuxt 3 module (depends on ui, composables)
- **@haspen-ui/playground** - Demo application (depends on all packages)

### Build Pipeline (Turborepo)

The build system uses dependency-aware parallel execution:

1. **core** and **shared** build first (no dependencies)
2. **design-tokens**, **ui**, **composables** build in parallel (depend on core/shared)
3. **nuxt** and **playground** build last (depend on ui/composables)

Tests depend on build completion. Turborepo caches outputs based on file changes and dependencies.

## Component Development Patterns

### Atomic Design Structure

Components are organized in `/packages/ui/src/`:

- `atoms/` - Basic building blocks (Button, Input)
- `molecules/` - Component combinations (FormField, Card)
- `organisms/` - Complex components (Header, Navigation)
- `templates/` - Page layouts
- `pages/` - Complete pages

### Component File Structure

```
ComponentName/
├── ComponentName.vue        # Vue 3 Composition API with <script setup>
├── ComponentName.stories.ts # Storybook documentation
├── ComponentName.test.ts    # Vitest unit tests
├── ComponentName.scss       # SCSS with BEM naming (optional)
├── types.ts                # TypeScript interfaces
└── index.ts                # Named exports
```

### TypeScript Configuration

- Strict mode enabled across all packages
- Path aliases: `@haspen-ui/*` maps to `packages/*/src`
- `tsconfig.build.json` excludes test files from production builds
- Each package extends root config with package-specific overrides

## Danish Localization Features

This design system includes Danish-specific utilities:

- CPR (Danish social security) number validation in `@haspen-ui/shared`
- Danish phone number formatting and validation
- Danish currency formatting (`formatCurrency` outputs "kr.")
- Danish date formatting

## Storybook Integration

- Stories auto-discover from `packages/*/src/**/*.stories.ts`
- Configured with accessibility, docs, and Vitest addons
- Component props auto-documented via TypeScript interfaces
- Visual regression testing via Chromatic integration

## Testing Strategy

- **Vitest** for unit testing with jsdom environment
- **@vue/test-utils** for Vue component testing
- **Playwright** for browser/E2E testing
- **Storybook + Chromatic** for visual regression
- Tests must pass before builds in CI pipeline

## Build Output and Publishing

- All packages build to dual format (ESM + CommonJS) via tsup
- Tree-shaking friendly with proper `sideEffects: false`
- Workspace dependencies use `workspace:*` protocol
- Automated releases via `auto-it` with conventional commits

## Mandatory Development Standards

### Atomic Design Structure

Components MUST follow atomic design principles:

**Atoms** (`packages/ui/src/atoms/`)

- Single-purpose, indivisible UI elements (Button, Input, Icon, Label)
- No business logic, only presentation logic
- Highly reusable across the system

**Molecules** (`packages/ui/src/molecules/`)

- Combinations of atoms that work together (FormField = Label + Input + ErrorMessage)
- Simple, focused functionality
- Can contain local state management

**Organisms** (`packages/ui/src/organisms/`)

- Complex components combining molecules/atoms (Header, DataTable, Form)
- Can contain business logic and complex interactions
- May connect to external data sources

**Templates** (`packages/ui/src/templates/`)

- Page-level layouts defining content structure
- Placeholder content, no real data
- Focus on layout and component placement

**Pages** (`packages/ui/src/pages/`)

- Real content instances of templates
- Actual data and final implementation

### Clean Code Requirements

**Component Structure** Every component MUST include:

```
ComponentName/
├── ComponentName.vue        # Implementation
├── ComponentName.stories.ts # Storybook documentation
├── ComponentName.test.ts    # Unit tests (MANDATORY)
├── ComponentName.scss       # Styles (if needed)
├── types.ts                # TypeScript interfaces
├── index.ts                # Named exports
└── README.md               # Component documentation
```

**Code Quality Standards**

- MANDATORY: Every component must have comprehensive unit tests covering all props, slots, and
  interactions
- MANDATORY: All components must have Storybook stories demonstrating all variants and states
- MANDATORY: TypeScript interfaces for all props, events, and exposed methods
- Single responsibility principle - one component does one thing well
- Props must be typed with interfaces, never `any` types
- Use descriptive, intention-revealing names for variables and functions
- Functions should be pure when possible, avoid side effects
- Maximum component complexity: 150 lines of code (template + script + style)

### Testing Requirements

**Unit Testing (MANDATORY for all components)**

```typescript
// ComponentName.test.ts
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ComponentName from './ComponentName.vue';

describe('ComponentName', () => {
  // Test all props
  it('renders with all prop variants', () => {});

  // Test all slots
  it('renders slot content correctly', () => {});

  // Test all emitted events
  it('emits events on user interaction', () => {});

  // Test edge cases and error states
  it('handles error states gracefully', () => {});

  // Test accessibility
  it('meets accessibility requirements', () => {});
});
```

**Test Coverage Requirements**

- Minimum 90% test coverage for all packages
- Every prop combination must be tested
- All user interactions must be tested
- Error states and edge cases must be tested
- Accessibility features must be tested

### Documentation Requirements

**Component Documentation (MANDATORY README.md for each component)**

```markdown
# ComponentName

Brief description of the component's purpose and use case.

## Usage

\`\`\`vue <ComponentName variant="primary" size="md" @click="handleClick"

> Content here </ComponentName> \`\`\`

## Props

| Prop    | Type                     | Default   | Description    |
| ------- | ------------------------ | --------- | -------------- |
| variant | 'primary' \| 'secondary' | 'primary' | Visual variant |

## Events

| Event | Payload    | Description          |
| ----- | ---------- | -------------------- |
| click | MouseEvent | Emitted when clicked |

## Slots

| Slot    | Description       |
| ------- | ----------------- |
| default | Main content area |

## Examples

[Link to Storybook examples]

## Accessibility

- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
```

**Utility Documentation (MANDATORY for all functions)** Every utility function must have
comprehensive JSDoc:

````typescript
/**
 * Validates a Danish CPR number
 *
 * @param cpr - The CPR number to validate (format: XXXXXX-XXXX or XXXXXXXXXX)
 * @returns True if valid CPR number, false otherwise
 *
 * @example
 * ```typescript
 * isValidCPR('123456-7890') // true
 * isValidCPR('invalid') // false
 * ```
 *
 * @see https://da.wikipedia.org/wiki/CPR-nummer for CPR format rules
 */
export function isValidCPR(cpr: string): boolean {
  // Implementation
}
````

**Design Token Documentation** Every design token must include:

- Purpose and semantic meaning
- Usage examples in components
- Accessibility considerations (contrast ratios for colors)
- Responsive behavior (for spacing/typography)

### Storybook Documentation Standards

**Story Structure (MANDATORY for all components)**

```typescript
// ComponentName.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3';
import ComponentName from './ComponentName.vue';

const meta: Meta<typeof ComponentName> = {
  title: 'Atoms/ComponentName', // Correct atomic design path
  component: ComponentName,
  parameters: {
    docs: {
      description: {
        component: 'Detailed component description with use cases',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // Define all prop controls with descriptions
  },
};

export default meta;

// MANDATORY stories:
export const Default: StoryObj<typeof meta> = {};
export const AllVariants: StoryObj<typeof meta> = {};
export const InteractiveStates: StoryObj<typeof meta> = {};
export const AccessibilityDemo: StoryObj<typeof meta> = {};
export const ErrorStates: StoryObj<typeof meta> = {};
```

### Code Enforcement

- Pre-commit hooks ensure all tests pass
- CI fails if test coverage drops below 90%
- ESLint rules enforce clean code standards
- Storybook build fails if components lack stories
- TypeScript strict mode catches type issues
