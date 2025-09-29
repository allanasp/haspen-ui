import { ref, onMounted, onUnmounted, type Ref } from 'vue';

export interface UseClickOutsideOptions {
  enabled?: boolean;
  callback?: (event: MouseEvent) => void;
}

export interface UseClickOutsideReturn {
  targetRef: Ref<HTMLElement | null>;
  isClickedOutside: Ref<boolean>;
}

export function useClickOutside(
  options: UseClickOutsideOptions = {},
): UseClickOutsideReturn {
  const { enabled = true, callback } = options;

  const targetRef = ref<HTMLElement | null>(null);
  const isClickedOutside = ref(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (!enabled || !targetRef.value) return;

    const target = event.target as Node;
    const clickedOutside = !targetRef.value.contains(target);

    isClickedOutside.value = clickedOutside;

    if (clickedOutside && callback) {
      callback(event);
    }
  };

  onMounted(() => {
    if (enabled) {
      document.addEventListener('mousedown', handleClickOutside);
    }
  });

  onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside);
  });

  return {
    targetRef,
    isClickedOutside,
  };
}
