# @haspen-ui/components

Vue 3 komponenter for HäspenUI designsystemet, bygget med Atomic Design principper.

## Installation

```bash
npm install @haspen-ui/components
# eller
yarn add @haspen-ui/components
# eller
pnpm add @haspen-ui/components
```

## Brug

```vue
<template>
  <Button variant="primary" size="md">
    Click me
  </Button>
</template>

<script setup>
import { Button } from '@haspen-ui/components'
</script>
```

## Atomic Design Struktur

Komponenterne er organiseret efter Atomic Design principper:

### Atoms
Grundlæggende byggeblokke som:
- Button
- Input
- Icon
- Typography

### Molecules
Kombinationer af atomer som:
- InputGroup
- FormField
- Card
- Alert

### Organisms
Komplekse UI-komponenter som:
- Header
- Footer
- Modal
- Navigation

### Templates
Sidelayout-strukturer og skabeloner:
- DefaultLayout
- AuthLayout
- DashboardLayout

### Pages
Komplette sideskabeloner:
- HomePage
- LoginPage
- DashboardPage

## Udvikling

1. Installer dependencies:
```bash
pnpm install
```

2. Start udviklingsserver:
```bash
pnpm dev
```

3. Byg pakken:
```bash
pnpm build
```

## Konventioner

### Komponentstruktur
Hver komponent skal følge denne struktur:
```
ComponentName/
  ├── ComponentName.vue    # Komponent-implementation
  ├── ComponentName.scss   # Styling
  ├── index.ts            # Export
  └── ComponentName.test.ts # Tests
```

### SCSS Konventioner
- Brug BEM metodologi
- Hold styling i separate SCSS-filer
- Brug CSS variabler fra @haspen-ui/core

### TypeScript
- Brug TypeScript for alle komponenter
- Definer props interfaces
- Eksporter typer når nødvendigt

## Licens

MIT 