import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';

/**
 * A soft radial glow that trails the pointer across the whole site,
 * giving dark glass surfaces a "lit from above" feel. Disabled for
 * touch devices and reduced-motion users.
 */
const CursorGlow = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const sx = useSpring(x, { stiffness: 120, damping: 24, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 120, damping: 24, mass: 0.6 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const onMove = (event: PointerEvent) => {
      x.set(event.clientX - 300);
      y.set(event.clientY - 300);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [prefersReducedMotion, x, y]);

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[5] hidden h-[600px] w-[600px] rounded-full md:block"
      style={{
        x: sx,
        y: sy,
        background:
          'radial-gradient(circle at center, rgba(19,78,124,0.06) 0%, rgba(23,160,106,0.04) 38%, transparent 68%)',
      }}
    />
  );
};

export default CursorGlow;
