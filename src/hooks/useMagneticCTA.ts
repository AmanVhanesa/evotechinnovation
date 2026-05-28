import { useEffect, useRef } from 'react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const useMagneticCTA = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion) return undefined;

    const handleMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const offsetX = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
      const offsetY = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
      element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    };

    const reset = () => {
      element.style.transform = 'translate(0, 0)';
    };

    element.addEventListener('mousemove', handleMove);
    element.addEventListener('mouseleave', reset);
    return () => {
      element.removeEventListener('mousemove', handleMove);
      element.removeEventListener('mouseleave', reset);
    };
  }, [prefersReducedMotion]);

  return ref;
};

export default useMagneticCTA;

