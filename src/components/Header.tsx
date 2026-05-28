import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import MenuToggleIcon from './MenuToggleIcon';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const floating = scrolled && !isOpen;

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-apple',
        floating ? 'px-4' : 'px-0',
      )}
    >
      <div
        className={clsx(
          'mx-auto flex items-center justify-between transition-all duration-300 ease-apple',
          floating
            ? 'mt-3 h-12 max-w-4xl rounded-2xl border border-line bg-white/80 px-4 shadow-soft backdrop-blur-xl sm:px-5'
            : isOpen
              ? 'h-[52px] max-w-content border-b border-line bg-white/90 px-5 backdrop-blur-xl sm:px-6 lg:px-10'
              : 'h-[52px] max-w-content border-b border-transparent px-5 sm:px-6 lg:px-10',
        )}
      >
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
          <img src="/logo.png" alt="EvoTech Innovation" className="h-7 w-auto object-contain" />
          <span className="font-display text-[1.05rem] font-semibold tracking-tighter text-ink">
            EvoTech Innovation
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                clsx(
                  'text-[0.9rem] font-medium transition-colors',
                  isActive ? 'text-ink' : 'text-ink2 hover:text-ink',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-pill bg-brand-blue px-4 py-1.5 text-[0.9rem] font-semibold text-white shadow-soft transition duration-300 ease-apple hover:-translate-y-0.5 hover:bg-brand-bluedeep"
          >
            Start a project
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-soft md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <MenuToggleIcon open={isOpen} className="size-5" duration={300} />
        </button>
      </div>

      <div
        className={clsx(
          'fixed inset-x-0 bottom-0 top-[52px] z-40 bg-white/95 backdrop-blur-xl md:hidden',
          isOpen ? 'flex flex-col' : 'hidden',
        )}
      >
        <div className="flex h-full flex-col justify-between px-5 py-6">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  clsx(
                    'rounded-xl px-3 py-3 text-lg font-medium transition-colors',
                    isActive ? 'bg-soft text-ink' : 'text-ink2 hover:text-ink',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="rounded-pill bg-brand-blue px-5 py-3.5 text-center text-base font-semibold text-white shadow-soft transition hover:bg-brand-bluedeep"
          >
            Start a project
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
