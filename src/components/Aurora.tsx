interface AuroraProps {
  /** Visual intensity of the gradient blobs. */
  variant?: 'hero' | 'subtle';
  className?: string;
}

/**
 * Animated aurora background — large blurred gradient blobs drifting slowly,
 * layered under an SVG dot-grid that fades out radially. Pure CSS animation,
 * cheap to render, sits absolutely inside a `relative overflow-hidden` parent.
 */
const Aurora = ({ variant = 'subtle', className = '' }: AuroraProps) => {
  const opacity = variant === 'hero' ? 'opacity-100' : 'opacity-60';

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className={`absolute inset-0 ${opacity}`}>
        <div className="absolute -top-[20%] left-[8%] h-[42rem] w-[42rem] animate-aurora-a rounded-full bg-[radial-gradient(circle_at_center,rgba(23,160,106,0.13),transparent_65%)] blur-3xl" />
        <div className="absolute -right-[12%] top-[6%] h-[38rem] w-[38rem] animate-aurora-b rounded-full bg-[radial-gradient(circle_at_center,rgba(19,78,124,0.12),transparent_65%)] blur-3xl" />
        <div className="absolute -bottom-[22%] left-[34%] h-[40rem] w-[40rem] animate-aurora-c rounded-full bg-[radial-gradient(circle_at_center,rgba(14,126,163,0.11),transparent_65%)] blur-3xl" />
      </div>

      {/* Dot grid, masked to fade away from the top center */}
      <svg className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_70%_60%_at_50%_8%,black_30%,transparent_75%)]">
        <defs>
          <pattern id="aurora-dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(13,30,50,0.12)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#aurora-dots)" />
      </svg>
    </div>
  );
};

export default Aurora;
