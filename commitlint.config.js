export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // New feature
        'fix',      // Bug fix
        'docs',     // Documentation changes
        'style',    // Code style changes (formatting, etc)
        'refactor', // Code refactoring
        'perf',     // Performance improvements
        'test',     // Test changes
        'build',    // Build system changes
        'ci',       // CI configuration changes
        'chore',    // Maintenance tasks
        'revert',   // Revert previous commit
      ],
    ],
    'scope-enum': [
      2,
      'always',
      [
        'ui',           // @haspen-ui/ui package
        'core',         // @haspen-ui/core package
        'shared',       // @haspen-ui/shared package
        'composables',  // @haspen-ui/composables package
        'design-tokens',// @haspen-ui/design-tokens package
        'nuxt',         // @haspen-ui/nuxt package
        'playground',   // @haspen-ui/playground package
        'storybook',    // Storybook configuration
        'deps',         // Dependencies
        'config',       // Configuration files
        'ci',           // CI/CD
        'docs',         // Documentation
        'release',      // Release related
      ],
    ],
    'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']],
    'subject-max-length': [2, 'always', 100],
    'body-max-line-length': [2, 'always', 100],
    'footer-max-line-length': [2, 'always', 100],
  },
};