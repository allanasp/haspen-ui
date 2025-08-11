import { ref } from 'vue';

export interface UseClickOutsideOptions {
  enabled?: boolean;
}

export interface UseClickOutsideReturn {
  isOutside: boolean;
}

export function useClickOutside(
  _options: UseClickOutsideOptions = {},
): UseClickOutsideReturn {
  const isOutside = ref(false);

  // TODO: Implement click outside detection
  // This is just a placeholder for future implementation

  return {
    isOutside,
  };
}
