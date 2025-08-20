export interface ComponentProps {
  class?: string;
  style?: string | Record<string, string>;
}
export interface ThemeConfig {
  colors: Record<string, string>;
  spacing: Record<string, string>;
  typography: Record<string, any>;
}
export type Size = 'sm' | 'md' | 'lg';
export type Variant = 'primary' | 'secondary' | 'tertiary';
