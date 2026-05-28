import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';

const ScrollRestorer = () => {
  const location = useLocation();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }, [location.pathname, prefersReducedMotion]);

  return null;
};

export default ScrollRestorer;

