<template>
  <div class="app">
    <h1>Shared Package Test</h1>

    <section class="test-section">
      <h2>Formatting</h2>
      <div class="test-grid">
        <div class="test-card">
          <h3>Currency</h3>
          <p>Input: 199.99</p>
          <p>Output: {{ formatCurrency(199.99) }}</p>
        </div>

        <div class="test-card">
          <h3>Date</h3>
          <p>Input: {{ new Date().toISOString() }}</p>
          <p>Output: {{ formatDate(new Date()) }}</p>
        </div>

        <div class="test-card">
          <h3>Phone Number</h3>
          <p>Input: 12345678</p>
          <p>Output: {{ formatPhoneNumber('12345678') }}</p>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2>Validation</h2>
      <div class="test-grid">
        <div class="test-card">
          <h3>CPR</h3>
          <p>Input: 1234567890</p>
          <p>Valid: {{ isValidCPR('1234567890') ? 'Yes' : 'No' }}</p>
        </div>

        <div class="test-card">
          <h3>Email</h3>
          <p>Input: test@example.com</p>
          <p>Valid: {{ isValidEmail('test@example.com') ? 'Yes' : 'No' }}</p>
        </div>

        <div class="test-card">
          <h3>Phone</h3>
          <p>Input: 12345678</p>
          <p>Valid: {{ isValidPhoneNumber('12345678') ? 'Yes' : 'No' }}</p>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2>Helpers</h2>
      <div class="test-grid">
        <div class="test-card">
          <h3>Debounce</h3>
          <button @click="handleDebouncedClick">Click me (debounced)</button>
          <p>Clicks: {{ clickCount }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import {
    formatCurrency,
    formatDate,
    formatPhoneNumber,
    isValidCPR,
    isValidEmail,
    isValidPhoneNumber,
    debounce,
  } from '@haspen-ui/shared';

  const clickCount = ref(0);
  const handleDebouncedClick = debounce(() => {
    clickCount.value++;
  }, 500);
</script>

<style>
  .app {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .test-section {
    margin-top: 3rem;
  }

  .test-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
  }

  .test-card {
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #f8f9fa;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
  }

  .test-card h3 {
    margin-top: 0;
    color: #2c3e50;
  }

  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    background-color: #06c;
    color: white;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  button:hover {
    background-color: #0052a3;
  }
</style>
