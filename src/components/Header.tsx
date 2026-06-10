import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './Logo';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-x">
        <div
          className={`mt-3 flex items-center justify-between rounded-pill border px-4 py-2.5 pl-5 transition-all duration-500 sm:mt-4 ${
            scrolled || menuOpen
              ? 'border-line bg-white/80 shadow-card backdrop-blur-2xl'
              : 'border-transparent bg-transparent'
          }`}
        >
          <Link to="/" aria-label="EvoTech Innovations — home" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className="relative px-4 py-2">
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-pill border border-line bg-[#134e7c]/[0.06]"
                        transition={{ type: 'spring', stiffness: 350, damping: 32 }}
                      />
                    )}
                    <span
                      className={`relative text-sm font-medium transition-colors ${
                        isActive ? 'text-ink' : 'text-ink2 hover:text-ink'
                      }`}
                    >
                      {link.label}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-pill bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-glow"
            >
              Start a project
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <button
            type="button"
            className="glass inline-flex h-10 w-10 items-center justify-center rounded-pill text-ink md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <motion.path
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                animate={{ d: menuOpen ? 'M4 4L14 14' : 'M2 5h14' }}
              />
              <motion.path
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                animate={{ d: menuOpen ? 'M4 14L14 4' : 'M2 13h14' }}
              />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 -z-10 flex flex-col bg-white/95 px-6 pt-28 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: 0.06 * index, duration: 0.45, ease: [0.22, 0.61, 0.21, 1] }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block border-b border-line py-4 font-display text-3xl font-semibold tracking-tight ${
                        isActive ? 'gradient-text' : 'text-ink'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.28, duration: 0.45 }}
              className="mt-8"
            >
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-pill bg-gradient-brand px-6 py-4 font-semibold text-white"
              >
                Start a project →
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
