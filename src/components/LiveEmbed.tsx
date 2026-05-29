import { useEffect, useRef, useState } from 'react';

interface LiveEmbedProps {
  url: string;
  title: string;
  /** Virtual viewport width the site renders at before being scaled to fit. */
  viewportWidth?: number;
  className?: string;
}

/**
 * Renders a live website inside a fixed-size container by loading it in an
 * iframe at a desktop viewport width and scaling it down to fit. The iframe is
 * non-interactive (pointer-events disabled) so clicks fall through to the
 * wrapping link and the card still navigates to the case study.
 */
const LiveEmbed = ({ url, title, viewportWidth = 1280, className = '' }: LiveEmbedProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ scale: 0.25, height: 800 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const scale = el.clientWidth / viewportWidth;
      setDims({ scale, height: scale ? el.clientHeight / scale : el.clientHeight });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [viewportWidth]);

  return (
    <div ref={ref} className={`relative h-full w-full overflow-hidden bg-white ${className}`}>
      <iframe
        src={url}
        title={title}
        loading="lazy"
        tabIndex={-1}
        aria-hidden="true"
        scrolling="no"
        className="pointer-events-none absolute left-0 top-0 origin-top-left border-0"
        style={{
          width: `${viewportWidth}px`,
          height: `${dims.height}px`,
          transform: `scale(${dims.scale})`,
        }}
      />
    </div>
  );
};

export default LiveEmbed;
