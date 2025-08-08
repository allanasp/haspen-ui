import { ref, readonly, type Ref } from 'vue';

export interface UseToggleOptions {
  initialValue?: boolean;
}

export interface UseToggleReturn {
  isOpen: Readonly<Ref<boolean>>;
  toggle: () => void;
  open: () => void;
  close: () => void;
}

export function useToggle(options: UseToggleOptions = {}): UseToggleReturn {
  const { initialValue = false } = options;
  const isOpen = ref(initialValue);

  const toggle = () => {
    isOpen.value = !isOpen.value;
  };

  const open = () => {
    isOpen.value = true;
  };

  const close = () => {
    isOpen.value = false;
  };

  return {
    isOpen: readonly(isOpen),
    toggle,
    open,
    close,
  };
}
