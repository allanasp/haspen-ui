/**
 * Icon Provider for configurable icon system
 * Supports multiple icon libraries: custom, heroicons, lucide
 */

import type { InjectionKey, Component } from 'vue';

export type IconLibrary = 'custom' | 'heroicons' | 'lucide';

export interface IconConfig {
  /**
   * The icon library to use by default
   * @default 'custom'
   */
  library: IconLibrary;
  
  /**
   * Custom icon components registry
   * Only used when library is 'custom'
   */
  icons: Record<string, Component>;
  
  /**
   * CSS class prefix for icons
   * @default ''
   */
  prefix?: string;
  
  /**
   * Default icon size
   * @default 16
   */
  defaultSize?: number;
  
  /**
   * Configuration for specific libraries
   */
  libraryConfig?: {
    heroicons?: {
      /**
       * Heroicons variant to use
       * @default 'outline'
       */
      variant: 'outline' | 'solid' | 'mini';
    };
    lucide?: {
      /**
       * Lucide-specific configuration
       */
      strokeWidth?: number;
    };
  };
}

export const ICON_PROVIDER_KEY: InjectionKey<IconConfig> = Symbol('haspen-ui-icon-provider');

/**
 * Default icon configuration
 */
export const defaultIconConfig: IconConfig = {
  library: 'custom',
  icons: {},
  prefix: '',
  defaultSize: 16,
  libraryConfig: {
    heroicons: {
      variant: 'outline',
    },
    lucide: {
      strokeWidth: 2,
    },
  },
};

/**
 * Utility function to create icon configuration
 */
export function createIconConfig(config: Partial<IconConfig> = {}): IconConfig {
  return {
    ...defaultIconConfig,
    ...config,
    libraryConfig: {
      ...defaultIconConfig.libraryConfig,
      ...config.libraryConfig,
    },
  };
}

/**
 * Built-in icon registry for common icons
 * These can be imported individually to keep bundle size small
 */
export { default as SunIcon } from './SunIcon.vue';
export { default as MoonIcon } from './MoonIcon.vue';