import { motion } from 'framer-motion';

const PageLoader = () => (
  <div className="flex min-h-[50vh] items-center justify-center">
    <motion.div
      className="h-12 w-12 rounded-full border-2 border-primary border-t-transparent"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, ease: 'linear', duration: 1 }}
      role="status"
      aria-label="Loading"
    />
  </div>
);

export default PageLoader;

