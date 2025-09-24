export interface IconProps {
  /**
   * Size of the icon in pixels
   * @default 16
   */
  size?: number;

  /**
   * Whether the icon should be hidden from screen readers
   * @default true
   */
  ariaHidden?: boolean;

  /**
   * Accessible label for the icon
   * Only used when ariaHidden is false
   */
  ariaLabel?: string;
}

/**
 * Props for the configurable Icon component
 */
export interface ConfigurableIconProps extends IconProps {
  /**
   * Name of the icon to render
   */
  name: string;
  
  /**
   * Override the icon library for this specific icon
   */
  library?: 'custom' | 'heroicons' | 'lucide';
}

/**
 * Icon libraries supported by the system
 */
export type IconLibrary = 'custom' | 'heroicons' | 'lucide';

/**
 * Icon registry for custom icons
 */
export type IconRegistry = Record<string, any>;