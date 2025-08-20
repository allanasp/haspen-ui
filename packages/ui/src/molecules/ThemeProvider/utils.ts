import type { Theme } from '@haspen-ui/core';

export function applyThemeToDOM(theme: Theme): void {
  const root = document.documentElement;

  // Colors
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--haspen-color-${key}`, value);
  });

  // Spacing
  Object.entries(theme.spacing).forEach(([key, value]) => {
    root.style.setProperty(`--haspen-spacing-${key}`, value);
  });

  // Typography
  Object.entries(theme.typography.fontFamily).forEach(([key, value]) => {
    root.style.setProperty(`--haspen-font-family-${key}`, value);
  });

  Object.entries(theme.typography.fontSize).forEach(([key, value]) => {
    root.style.setProperty(`--haspen-font-size-${key}`, value);
  });

  Object.entries(theme.typography.fontWeight).forEach(([key, value]) => {
    root.style.setProperty(`--haspen-font-weight-${key}`, String(value));
  });

  Object.entries(theme.typography.lineHeight).forEach(([key, value]) => {
    root.style.setProperty(`--haspen-line-height-${key}`, String(value));
  });

  // Shadows
  Object.entries(theme.shadows).forEach(([key, value]) => {
    root.style.setProperty(`--haspen-shadow-${key}`, value);
  });

  // Radius
  Object.entries(theme.radius).forEach(([key, value]) => {
    root.style.setProperty(`--haspen-radius-${key}`, value);
  });

  // Transitions
  Object.entries(theme.transitions.duration).forEach(([key, value]) => {
    root.style.setProperty(`--haspen-transition-duration-${key}`, value);
  });

  Object.entries(theme.transitions.timing).forEach(([key, value]) => {
    root.style.setProperty(`--haspen-transition-timing-${key}`, value);
  });

  // Set theme mode attribute
  root.setAttribute('data-theme', theme.mode);
}

export function getSystemThemeMode(): 'light' | 'dark' {
  if (typeof window === 'undefined') {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function getStoredThemeMode(
  storageKey: string,
): 'light' | 'dark' | 'auto' | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const stored = localStorage.getItem(storageKey);
    if (stored === 'light' || stored === 'dark' || stored === 'auto') {
      return stored;
    }
  } catch {
    // Ignore localStorage errors
  }

  return null;
}

export function storeThemeMode(
  storageKey: string,
  mode: 'light' | 'dark' | 'auto',
): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.setItem(storageKey, mode);
  } catch {
    // Ignore localStorage errors
  }
}

export function mergeThemes(base: Theme, override?: Partial<Theme>): Theme {
  if (!override) {
    return base;
  }

  return {
    ...base,
    ...override,
    colors: { ...base.colors, ...override.colors },
    spacing: { ...base.spacing, ...override.spacing },
    typography: {
      ...base.typography,
      ...override.typography,
      fontFamily: {
        ...base.typography.fontFamily,
        ...override.typography?.fontFamily,
      },
      fontSize: {
        ...base.typography.fontSize,
        ...override.typography?.fontSize,
      },
      fontWeight: {
        ...base.typography.fontWeight,
        ...override.typography?.fontWeight,
      },
      lineHeight: {
        ...base.typography.lineHeight,
        ...override.typography?.lineHeight,
      },
    },
    shadows: { ...base.shadows, ...override.shadows },
    radius: { ...base.radius, ...override.radius },
    transitions: {
      ...base.transitions,
      ...override.transitions,
      duration: {
        ...base.transitions.duration,
        ...override.transitions?.duration,
      },
      timing: { ...base.transitions.timing, ...override.transitions?.timing },
    },
  };
}
