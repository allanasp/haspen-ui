<template>
  <div class="app">
    <h1>HäspenUI Components Test</h1>
    <div class="components">
      <section>
        <h2>Button Component</h2>
        <div class="button-demo">
          <Button>Default Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button size="lg">Large Button</Button>
          <Button size="sm">Small Button</Button>
          <Button loading>Loading Button</Button>
          <Button disabled>Disabled Button</Button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Button } from '@haspen-ui/ui';
</script>

<style>
  .app {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .components {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .button-demo {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid #eee;
    border-radius: 8px;
  }
</style>
