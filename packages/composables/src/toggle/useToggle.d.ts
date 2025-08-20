import { type Ref } from 'vue';
export interface UseToggleOptions {
  initialValue?: boolean;
}
export interface UseToggleReturn {
  isOpen: Readonly<Ref<boolean>>;
  toggle: () => void;
  open: () => void;
  close: () => void;
}
export declare function useToggle(options?: UseToggleOptions): UseToggleReturn;
