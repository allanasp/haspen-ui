import { inject } from 'vue';
import type { ThemeProviderContext } from '@haspen-ui/core';
import { THEME_INJECTION_KEY } from '@haspen-ui/core';

export function useTheme(): ThemeProviderContext {
  const themeContext = inject(THEME_INJECTION_KEY);

  if (!themeContext) {
    throw new Error(
      'useTheme must be called within a ThemeProvider. ' +
        'Make sure to wrap your app with <ThemeProvider>.',
    );
  }

  return themeContext;
}

export { THEME_INJECTION_KEY } from '@haspen-ui/core';
export type {
  ThemeMode,
  Theme,
  ThemeColors,
  ThemeSpacing,
  ThemeTypography,
  ThemeShadows,
  ThemeRadius,
  ThemeTransitions,
  ThemeProviderContext,
  ThemeProviderProps,
} from '@haspen-ui/core';
