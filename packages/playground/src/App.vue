<template>
  <div class="playground">
    <h1>HäspenUI Playground</h1>
    <section>
      <h2>Buttons</h2>
      <div class="demo-section">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="tertiary">Tertiary Button</Button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { Button } from '@haspen/ui';
</script>

<style scoped>
  .playground {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .demo-section {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin: 1rem 0;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 1.5rem;
    margin: 2rem 0 1rem;
  }
</style>
