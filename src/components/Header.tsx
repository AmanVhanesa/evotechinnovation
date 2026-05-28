import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
    const onScroll = () => setScrolled(window.scrollY > 8);
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || isOpen ? 'border-b border-line bg-white/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <div className="container-x flex h-[52px] items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
          <img src="/logo.png" alt="EvoTech Innovations" className="h-7 w-auto object-contain" />
          <span className="font-display text-[1.05rem] font-semibold tracking-tighter text-ink">
            EvoTech
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `text-[0.9rem] font-medium transition-colors ${
                  isActive ? 'text-ink' : 'text-ink2 hover:text-ink'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-pill bg-brand-blue px-4 py-1.5 text-[0.9rem] font-semibold text-white transition hover:bg-brand-bluedeep"
          >
            Start a project
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center text-ink md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            {isOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      {isOpen ? (
        <nav className="border-t border-line bg-white/95 px-5 py-4 backdrop-blur-xl md:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-3 text-base font-medium ${
                    isActive ? 'bg-soft text-ink' : 'text-ink2'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-pill bg-brand-blue px-5 py-3 text-center font-semibold text-white"
            >
              Start a project
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
};

export default Header;
