import { motion } from 'framer-motion';
import { LogoMark } from './Logo';

const PageLoader = () => (
  <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-label="Loading">
    <motion.div
      animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
    >
      <LogoMark className="h-12 w-12" />
    </motion.div>
  </div>
);

export default PageLoader;
