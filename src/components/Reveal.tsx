import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

interface RevealProps extends PropsWithChildren {
  delay?: number;
  /** Vertical travel in px. */
  y?: number;
  className?: string;
  /** Portion of the element that must be in view before animating. */
  amount?: number;
}

/** Scroll-triggered reveal: fades up out of a slight blur. */
const Reveal = ({ children, delay = 0, y = 28, amount = 0.25, className }: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y, filter: 'blur(10px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, amount }}
    transition={{ duration: 0.8, delay, ease: [0.22, 0.61, 0.21, 1] }}
  >
    {children}
  </motion.div>
);

export default Reveal;
