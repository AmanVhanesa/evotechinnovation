import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';

const AnimatedCursor = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const smoothX = useSpring(cursorX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(cursorY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    if (prefersReducedMotion) return undefined;
    const move = (event: MouseEvent) => {
      cursorX.set(event.clientX - 20);
      cursorY.set(event.clientY - 20);
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, [cursorX, cursorY, prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      style={{ x: smoothX, y: smoothY }}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-50 hidden h-12 w-12 rounded-full bg-accent/20 blur-3xl md:block"
    />
  );
};

export default AnimatedCursor;

