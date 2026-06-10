import type { PropsWithChildren } from 'react';

interface BrowserFrameProps extends PropsWithChildren {
  url?: string;
  className?: string;
  /** Extra classes for the content area below the chrome bar. */
  bodyClassName?: string;
}

/** Glass macOS-style browser window used to present product screenshots. */
const BrowserFrame = ({ url, children, className = '', bodyClassName = '' }: BrowserFrameProps) => (
  <div
    className={`overflow-hidden rounded-2xl border border-linestrong bg-white/90 shadow-lift backdrop-blur-xl ${className}`}
  >
    <div className="flex items-center gap-3 border-b border-line bg-soft px-4 py-2.5">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>
      {url ? (
        <div className="mx-auto flex min-w-0 items-center gap-1.5 rounded-pill border border-line bg-white px-3 py-1 text-[0.7rem] text-ink3">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M8 10V7a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span className="truncate">{url}</span>
        </div>
      ) : null}
      <div className="w-10" />
    </div>
    <div className={`relative ${bodyClassName}`}>{children}</div>
  </div>
);

export default BrowserFrame;
