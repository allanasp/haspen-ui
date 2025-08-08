import { describe, it, expect } from 'vitest';
import { useToggle } from './useToggle';

describe('useToggle', () => {
  it('should initialize with default value (false)', () => {
    const { isOpen } = useToggle();
    expect(isOpen.value).toBe(false);
  });

  it('should initialize with provided value', () => {
    const { isOpen } = useToggle({ initialValue: true });
    expect(isOpen.value).toBe(true);
  });

  it('should toggle value', () => {
    const { isOpen, toggle } = useToggle();
    expect(isOpen.value).toBe(false);
    toggle();
    expect(isOpen.value).toBe(true);
    toggle();
    expect(isOpen.value).toBe(false);
  });

  it('should open value', () => {
    const { isOpen, open } = useToggle();
    expect(isOpen.value).toBe(false);
    open();
    expect(isOpen.value).toBe(true);
  });

  it('should close value', () => {
    const { isOpen, close } = useToggle({ initialValue: true });
    expect(isOpen.value).toBe(true);
    close();
    expect(isOpen.value).toBe(false);
  });
});
