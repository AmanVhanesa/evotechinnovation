interface LogoProps {
  className?: string;
}

/**
 * Circuit-spark mark drawn as an SVG in the brand gradient — used where a
 * compact square mark fits better than the full wordmark (e.g. the loader).
 */
export const LogoMark = ({ className = 'h-9 w-9' }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
    <defs>
      <linearGradient id="evo-grad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#134e7c" />
        <stop offset="0.5" stopColor="#0e7ea3" />
        <stop offset="1" stopColor="#17a06a" />
      </linearGradient>
    </defs>
    <rect x="1.5" y="1.5" width="37" height="37" rx="11" stroke="url(#evo-grad)" strokeWidth="1.6" opacity="0.9" />
    <rect x="1.5" y="1.5" width="37" height="37" rx="11" fill="url(#evo-grad)" opacity="0.08" />
    {/* circuit spark */}
    <circle cx="20" cy="20" r="4" fill="url(#evo-grad)" />
    <g stroke="url(#evo-grad)" strokeWidth="1.6" strokeLinecap="round">
      <path d="M20 16v-5M20 24v5M16 20h-5M24 20h5" />
      <path d="M16.8 16.8l-3.2-3.2M23.2 23.2l3.2 3.2M23.2 16.8l3.2-3.2M16.8 23.2l-3.2 3.2" opacity="0.7" />
    </g>
    <g fill="url(#evo-grad)">
      <circle cx="20" cy="9.5" r="1.5" />
      <circle cx="20" cy="30.5" r="1.5" />
      <circle cx="9.5" cy="20" r="1.5" />
      <circle cx="30.5" cy="20" r="1.5" />
    </g>
  </svg>
);

/** The real EvoTech Innovations wordmark (trimmed, transparent background). */
const Logo = ({ className = '' }: LogoProps) => (
  <img
    src="/logo-wordmark.png"
    alt="EvoTech Innovations"
    className={`h-9 w-auto object-contain sm:h-10 ${className}`}
  />
);

export default Logo;
