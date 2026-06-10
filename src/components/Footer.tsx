import { Link } from 'react-router-dom';
import Logo from './Logo';

const studioLinks = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const liveProjects = [
  { label: 'Learnovo', href: 'https://learnovoportal.com' },
  { label: 'SP International School', href: 'https://spinternationalschool.com' },
  { label: 'NewMedix Pharma', href: 'https://newmedixpharma.com' },
  { label: 'Syphon Agri Biotech', href: 'https://syphonagribiotech.com' },
];

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-line bg-soft">
    {/* Top glow line */}
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent" />

    <div className="container-x relative py-16">
      <div className="grid gap-12 md:grid-cols-[1.5fr,1fr,1fr]">
        <div>
          <Link to="/" className="inline-block">
            <Logo />
          </Link>
          <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-ink2">
            We design and build websites, platforms and mobile apps that businesses rely on every
            day — fast, polished and made to last.
          </p>
          <a
            href="mailto:evotechnologiesinnovation@gmail.com"
            className="mt-6 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-ink transition hover:text-brand-cyan"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
              <path d="M3.5 7l8.5 6 8.5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            evotechnologiesinnovation@gmail.com
          </a>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink3">Studio</p>
          <ul className="mt-5 space-y-3">
            {studioLinks.map((link) => (
              <li key={link.to}>
                <Link
                  className="group inline-flex items-center gap-1.5 text-[0.95rem] text-ink2 transition hover:text-ink"
                  to={link.to}
                >
                  {link.label}
                  <span className="opacity-0 transition group-hover:opacity-100">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink3">Live in the world</p>
          <ul className="mt-5 space-y-3">
            {liveProjects.map((link) => (
              <li key={link.href}>
                <a
                  className="group inline-flex items-center gap-1.5 text-[0.95rem] text-ink2 transition hover:text-ink"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-teal/70 transition group-hover:bg-brand-teal" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-2 border-t border-line pt-7 text-sm text-ink3 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} EvoTech Innovations. All rights reserved.</p>
        <p className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-brand-teal" />
          Designed &amp; built in-house.
        </p>
      </div>
    </div>

    {/* Giant gradient watermark */}
    <div aria-hidden="true" className="pointer-events-none relative select-none">
      <p className="bg-gradient-to-b from-[#134e7c]/10 to-transparent bg-clip-text text-center font-display text-[clamp(4rem,14vw,12rem)] font-bold leading-[0.8] tracking-tightest text-transparent">
        EVOTECH
      </p>
    </div>
  </footer>
);

export default Footer;
