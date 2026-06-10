import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

/** Counts up from 0 when scrolled into view. */
const Counter = ({ value, suffix = '', prefix = '', duration = 1.6, className }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!inView) return;
    if (prefersReducedMotion) {
      el.textContent = `${prefix}${value}${suffix}`;
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 0.61, 0.21, 1],
      onUpdate: (latest) => {
        el.textContent = `${prefix}${Math.round(latest)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix, prefix, duration, prefersReducedMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
};

export default Counter;
