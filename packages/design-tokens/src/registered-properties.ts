/**
 * CSS Registered Properties Type Definitions
 * 
 * These types provide TypeScript support for the registered CSS custom properties.
 * Registered properties offer better performance, type safety, and animation capabilities.
 */

// CSS Registered Property Syntax Types
export type CSSPropertySyntax = 
  | '<color>'
  | '<length>'
  | '<number>'
  | '<integer>'
  | '<time>'
  | '<percentage>'
  | '<angle>'
  | '*';

// Registered Property Definition
export interface RegisteredProperty {
  syntax: CSSPropertySyntax;
  initialValue: string;
  inherits: boolean;
}

// Color Properties
export interface HaspenColorProperties {
  '--haspen-color-primary': RegisteredProperty;
  '--haspen-color-primary-hover': RegisteredProperty;
  '--haspen-color-primary-active': RegisteredProperty;
  '--haspen-color-secondary': RegisteredProperty;
  '--haspen-color-success': RegisteredProperty;
  '--haspen-color-warning': RegisteredProperty;
  '--haspen-color-error': RegisteredProperty;
  '--haspen-color-info': RegisteredProperty;
}

// Typography Properties
export interface HaspenTypographyProperties {
  '--haspen-font-size-base': RegisteredProperty;
  '--haspen-font-size-sm': RegisteredProperty;
  '--haspen-font-size-lg': RegisteredProperty;
  '--haspen-font-size-xl': RegisteredProperty;
  '--haspen-font-weight-normal': RegisteredProperty;
  '--haspen-font-weight-medium': RegisteredProperty;
  '--haspen-font-weight-semibold': RegisteredProperty;
  '--haspen-font-weight-bold': RegisteredProperty;
  '--haspen-line-height-normal': RegisteredProperty;
  '--haspen-line-height-tight': RegisteredProperty;
  '--haspen-line-height-relaxed': RegisteredProperty;
}

// Spacing Properties
export interface HaspenSpacingProperties {
  '--haspen-space-xs': RegisteredProperty;
  '--haspen-space-sm': RegisteredProperty;
  '--haspen-space-md': RegisteredProperty;
  '--haspen-space-lg': RegisteredProperty;
  '--haspen-space-xl': RegisteredProperty;
  '--haspen-space-2xl': RegisteredProperty;
}

// Border Radius Properties
export interface HaspenRadiusProperties {
  '--haspen-radius-sm': RegisteredProperty;
  '--haspen-radius-md': RegisteredProperty;
  '--haspen-radius-lg': RegisteredProperty;
  '--haspen-radius-xl': RegisteredProperty;
  '--haspen-radius-full': RegisteredProperty;
}

// Animation Properties
export interface HaspenAnimationProperties {
  '--haspen-duration-fast': RegisteredProperty;
  '--haspen-duration-normal': RegisteredProperty;
  '--haspen-duration-slow': RegisteredProperty;
}

// Breakpoint Properties
export interface HaspenBreakpointProperties {
  '--haspen-breakpoint-sm': RegisteredProperty;
  '--haspen-breakpoint-md': RegisteredProperty;
  '--haspen-breakpoint-lg': RegisteredProperty;
  '--haspen-breakpoint-xl': RegisteredProperty;
  '--haspen-breakpoint-2xl': RegisteredProperty;
}

// Z-index Properties
export interface HaspenZIndexProperties {
  '--haspen-z-dropdown': RegisteredProperty;
  '--haspen-z-sticky': RegisteredProperty;
  '--haspen-z-fixed': RegisteredProperty;
  '--haspen-z-modal-backdrop': RegisteredProperty;
  '--haspen-z-modal': RegisteredProperty;
  '--haspen-z-popover': RegisteredProperty;
  '--haspen-z-tooltip': RegisteredProperty;
}

// All Registered Properties
export interface HaspenRegisteredProperties
  extends HaspenColorProperties,
    HaspenTypographyProperties,
    HaspenSpacingProperties,
    HaspenRadiusProperties,
    HaspenAnimationProperties,
    HaspenBreakpointProperties,
    HaspenZIndexProperties {}

// Property Registration Configuration
export const HASPEN_REGISTERED_PROPERTIES: HaspenRegisteredProperties = {
  // Color properties
  '--haspen-color-primary': {
    syntax: '<color>',
    initialValue: '#0059b3',
    inherits: false,
  },
  '--haspen-color-primary-hover': {
    syntax: '<color>',
    initialValue: '#004a96',
    inherits: false,
  },
  '--haspen-color-primary-active': {
    syntax: '<color>',
    initialValue: '#003a7a',
    inherits: false,
  },
  '--haspen-color-secondary': {
    syntax: '<color>',
    initialValue: '#6c757d',
    inherits: false,
  },
  '--haspen-color-success': {
    syntax: '<color>',
    initialValue: '#28a745',
    inherits: false,
  },
  '--haspen-color-warning': {
    syntax: '<color>',
    initialValue: '#ffc107',
    inherits: false,
  },
  '--haspen-color-error': {
    syntax: '<color>',
    initialValue: '#dc3545',
    inherits: false,
  },
  '--haspen-color-info': {
    syntax: '<color>',
    initialValue: '#17a2b8',
    inherits: false,
  },

  // Typography properties
  '--haspen-font-size-base': {
    syntax: '<length>',
    initialValue: '1rem',
    inherits: true,
  },
  '--haspen-font-size-sm': {
    syntax: '<length>',
    initialValue: '0.875rem',
    inherits: true,
  },
  '--haspen-font-size-lg': {
    syntax: '<length>',
    initialValue: '1.125rem',
    inherits: true,
  },
  '--haspen-font-size-xl': {
    syntax: '<length>',
    initialValue: '1.25rem',
    inherits: true,
  },
  '--haspen-font-weight-normal': {
    syntax: '<number>',
    initialValue: '400',
    inherits: true,
  },
  '--haspen-font-weight-medium': {
    syntax: '<number>',
    initialValue: '500',
    inherits: true,
  },
  '--haspen-font-weight-semibold': {
    syntax: '<number>',
    initialValue: '600',
    inherits: true,
  },
  '--haspen-font-weight-bold': {
    syntax: '<number>',
    initialValue: '700',
    inherits: true,
  },
  '--haspen-line-height-normal': {
    syntax: '<number>',
    initialValue: '1.5',
    inherits: true,
  },
  '--haspen-line-height-tight': {
    syntax: '<number>',
    initialValue: '1.25',
    inherits: true,
  },
  '--haspen-line-height-relaxed': {
    syntax: '<number>',
    initialValue: '1.75',
    inherits: true,
  },

  // Spacing properties
  '--haspen-space-xs': {
    syntax: '<length>',
    initialValue: '0.25rem',
    inherits: false,
  },
  '--haspen-space-sm': {
    syntax: '<length>',
    initialValue: '0.5rem',
    inherits: false,
  },
  '--haspen-space-md': {
    syntax: '<length>',
    initialValue: '1rem',
    inherits: false,
  },
  '--haspen-space-lg': {
    syntax: '<length>',
    initialValue: '1.5rem',
    inherits: false,
  },
  '--haspen-space-xl': {
    syntax: '<length>',
    initialValue: '2rem',
    inherits: false,
  },
  '--haspen-space-2xl': {
    syntax: '<length>',
    initialValue: '3rem',
    inherits: false,
  },

  // Border radius properties
  '--haspen-radius-sm': {
    syntax: '<length>',
    initialValue: '0.125rem',
    inherits: false,
  },
  '--haspen-radius-md': {
    syntax: '<length>',
    initialValue: '0.25rem',
    inherits: false,
  },
  '--haspen-radius-lg': {
    syntax: '<length>',
    initialValue: '0.5rem',
    inherits: false,
  },
  '--haspen-radius-xl': {
    syntax: '<length>',
    initialValue: '1rem',
    inherits: false,
  },
  '--haspen-radius-full': {
    syntax: '<length>',
    initialValue: '9999px',
    inherits: false,
  },

  // Animation properties
  '--haspen-duration-fast': {
    syntax: '<time>',
    initialValue: '150ms',
    inherits: false,
  },
  '--haspen-duration-normal': {
    syntax: '<time>',
    initialValue: '300ms',
    inherits: false,
  },
  '--haspen-duration-slow': {
    syntax: '<time>',
    initialValue: '500ms',
    inherits: false,
  },

  // Breakpoint properties
  '--haspen-breakpoint-sm': {
    syntax: '<length>',
    initialValue: '640px',
    inherits: false,
  },
  '--haspen-breakpoint-md': {
    syntax: '<length>',
    initialValue: '768px',
    inherits: false,
  },
  '--haspen-breakpoint-lg': {
    syntax: '<length>',
    initialValue: '1024px',
    inherits: false,
  },
  '--haspen-breakpoint-xl': {
    syntax: '<length>',
    initialValue: '1280px',
    inherits: false,
  },
  '--haspen-breakpoint-2xl': {
    syntax: '<length>',
    initialValue: '1536px',
    inherits: false,
  },

  // Z-index properties
  '--haspen-z-dropdown': {
    syntax: '<integer>',
    initialValue: '1000',
    inherits: false,
  },
  '--haspen-z-sticky': {
    syntax: '<integer>',
    initialValue: '1020',
    inherits: false,
  },
  '--haspen-z-fixed': {
    syntax: '<integer>',
    initialValue: '1030',
    inherits: false,
  },
  '--haspen-z-modal-backdrop': {
    syntax: '<integer>',
    initialValue: '1040',
    inherits: false,
  },
  '--haspen-z-modal': {
    syntax: '<integer>',
    initialValue: '1050',
    inherits: false,
  },
  '--haspen-z-popover': {
    syntax: '<integer>',
    initialValue: '1060',
    inherits: false,
  },
  '--haspen-z-tooltip': {
    syntax: '<integer>',
    initialValue: '1070',
    inherits: false,
  },
};

/**
 * Utility function to register CSS custom properties programmatically
 * Useful for fallback support or dynamic registration
 */
export function registerCSSProperties(
  properties: Partial<HaspenRegisteredProperties> = HASPEN_REGISTERED_PROPERTIES
): void {
  if (!CSS?.registerProperty) {
    console.warn(
      'CSS.registerProperty is not supported in this browser. Registered properties will fallback to regular custom properties.'
    );
    return;
  }

  for (const [name, config] of Object.entries(properties)) {
    try {
      CSS.registerProperty({
        name,
        ...config,
      });
    } catch (error) {
      console.warn(`Failed to register CSS property ${name}:`, error);
    }
  }
}

// Property name constants for type safety
export const HASPEN_CSS_PROPERTIES = {
  // Colors
  COLOR_PRIMARY: '--haspen-color-primary',
  COLOR_PRIMARY_HOVER: '--haspen-color-primary-hover',
  COLOR_PRIMARY_ACTIVE: '--haspen-color-primary-active',
  COLOR_SECONDARY: '--haspen-color-secondary',
  COLOR_SUCCESS: '--haspen-color-success',
  COLOR_WARNING: '--haspen-color-warning',
  COLOR_ERROR: '--haspen-color-error',
  COLOR_INFO: '--haspen-color-info',

  // Typography
  FONT_SIZE_BASE: '--haspen-font-size-base',
  FONT_SIZE_SM: '--haspen-font-size-sm',
  FONT_SIZE_LG: '--haspen-font-size-lg',
  FONT_SIZE_XL: '--haspen-font-size-xl',
  FONT_WEIGHT_NORMAL: '--haspen-font-weight-normal',
  FONT_WEIGHT_MEDIUM: '--haspen-font-weight-medium',
  FONT_WEIGHT_SEMIBOLD: '--haspen-font-weight-semibold',
  FONT_WEIGHT_BOLD: '--haspen-font-weight-bold',
  LINE_HEIGHT_NORMAL: '--haspen-line-height-normal',
  LINE_HEIGHT_TIGHT: '--haspen-line-height-tight',
  LINE_HEIGHT_RELAXED: '--haspen-line-height-relaxed',

  // Spacing
  SPACE_XS: '--haspen-space-xs',
  SPACE_SM: '--haspen-space-sm',
  SPACE_MD: '--haspen-space-md',
  SPACE_LG: '--haspen-space-lg',
  SPACE_XL: '--haspen-space-xl',
  SPACE_2XL: '--haspen-space-2xl',

  // Border radius
  RADIUS_SM: '--haspen-radius-sm',
  RADIUS_MD: '--haspen-radius-md',
  RADIUS_LG: '--haspen-radius-lg',
  RADIUS_XL: '--haspen-radius-xl',
  RADIUS_FULL: '--haspen-radius-full',

  // Animation
  DURATION_FAST: '--haspen-duration-fast',
  DURATION_NORMAL: '--haspen-duration-normal',
  DURATION_SLOW: '--haspen-duration-slow',

  // Breakpoints
  BREAKPOINT_SM: '--haspen-breakpoint-sm',
  BREAKPOINT_MD: '--haspen-breakpoint-md',
  BREAKPOINT_LG: '--haspen-breakpoint-lg',
  BREAKPOINT_XL: '--haspen-breakpoint-xl',
  BREAKPOINT_2XL: '--haspen-breakpoint-2xl',

  // Z-index
  Z_DROPDOWN: '--haspen-z-dropdown',
  Z_STICKY: '--haspen-z-sticky',
  Z_FIXED: '--haspen-z-fixed',
  Z_MODAL_BACKDROP: '--haspen-z-modal-backdrop',
  Z_MODAL: '--haspen-z-modal',
  Z_POPOVER: '--haspen-z-popover',
  Z_TOOLTIP: '--haspen-z-tooltip',
} as const;

export type HaspenCSSPropertyName = keyof typeof HASPEN_CSS_PROPERTIES;