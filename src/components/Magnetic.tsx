import { useRef, type PropsWithChildren } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';

interface MagneticProps extends PropsWithChildren {
  /** How strongly the element is pulled toward the cursor (0–1). */
  strength?: number;
  className?: string;
}

/** Wraps children so they gently follow the cursor while hovered. */
const Magnetic = ({ children, strength = 0.3, className }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const onPointerMove = (event: React.PointerEvent) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * strength);
    y.set((event.clientY - rect.top - rect.height / 2) * strength);
  };

  const onPointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className ?? ''}`}
      style={{ x: sx, y: sy }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
