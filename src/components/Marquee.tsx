import type { PropsWithChildren } from 'react';

interface MarqueeProps extends PropsWithChildren {
  speed?: 'normal' | 'fast';
  className?: string;
}

/**
 * Infinite horizontal marquee. Children are rendered twice and scrolled by
 * 50% on loop; edges fade via mask. Pauses on hover.
 */
const Marquee = ({ children, speed = 'normal', className = '' }: MarqueeProps) => (
  <div className={`mask-fade-x w-full overflow-hidden ${className}`}>
    <div
      className={`flex w-max items-center gap-0 ${
        speed === 'fast' ? 'animate-marquee-fast' : 'animate-marquee'
      } hover:[animation-play-state:paused]`}
    >
      <div className="flex items-center">{children}</div>
      <div className="flex items-center" aria-hidden="true">
        {children}
      </div>
    </div>
  </div>
);

export default Marquee;
