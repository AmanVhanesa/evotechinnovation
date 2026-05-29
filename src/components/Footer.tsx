import { Link } from 'react-router-dom';

const columns = [
  {
    heading: 'Studio',
    links: [
      { label: 'Work', to: '/work' },
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
  },
];

const liveProjects = [
  { label: 'Learnovo', href: 'https://learnovoportal.com' },
  { label: 'SP International School', href: 'https://spinternationalschool.com' },
  { label: 'NewMedix Pharma', href: 'https://newmedixpharma.com' },
  { label: 'Syphon Agri Biotech', href: 'https://syphonagribiotech.com' },
];

const Footer = () => (
  <footer className="border-t border-line bg-soft">
    <div className="container-x py-16">
      <div className="grid gap-12 md:grid-cols-[1.4fr,1fr,1fr]">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="EvoTech Innovations" className="h-14 w-auto object-contain" />
            <span className="font-display text-lg font-semibold tracking-tighter text-ink">
              EvoTech Innovations
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-ink2">
            We design and build websites, platforms and mobile apps that businesses rely on every
            day — fast, polished and made to last.
          </p>
          <a
            href="mailto:evotechnologiesinnovation@gmail.com"
            className="mt-5 inline-block font-display text-lg font-semibold tracking-tighter text-brand-blue hover:text-brand-bluedeep"
          >
            evotechnologiesinnovation@gmail.com
          </a>
        </div>

        {columns.map((col) => (
          <div key={col.heading}>
            <p className="text-sm font-semibold text-ink">{col.heading}</p>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.to}>
                  <Link className="text-[0.95rem] text-ink2 transition hover:text-ink" to={link.to}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-sm font-semibold text-ink">Selected projects</p>
          <ul className="mt-4 space-y-3">
            {liveProjects.map((link) => (
              <li key={link.href}>
                <a
                  className="text-[0.95rem] text-ink2 transition hover:text-ink"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-2 border-t border-line pt-7 text-sm text-ink3 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} EvoTech Innovations. All rights reserved.</p>
        <p>Designed &amp; built in-house.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
