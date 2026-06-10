import LiveEmbed from './LiveEmbed';
import type { Project } from '@/types/project';

interface ProjectCoverProps {
  project: Project;
  className?: string;
  compact?: boolean;
}

/** Dark glass phone mock for app projects that don't have screenshots yet. */
const PhoneMock = ({ project }: { project: Project }) => (
  <div className="absolute left-1/2 top-1/2 h-[82%] -translate-x-1/2 -translate-y-1/2">
    <div className="relative flex h-full w-[180px] flex-col overflow-hidden rounded-[2.2rem] border border-white/15 bg-[#0a0f1c]/90 shadow-lift backdrop-blur-xl">
      <div className="absolute left-1/2 top-2.5 h-1.5 w-14 -translate-x-1/2 rounded-full bg-white/15" />
      <div className="px-4 pb-3 pt-9">
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/50">
          {project.sector}
        </p>
        <p className="mt-1 font-display text-base font-semibold leading-tight tracking-tight text-white">
          {project.title}
        </p>
      </div>
      <div
        className="mx-4 rounded-2xl p-4 text-white shadow-card"
        style={{ background: `linear-gradient(135deg, ${project.cover.from}, ${project.cover.to})` }}
      >
        <p className="text-[0.6rem] font-medium opacity-85">{project.tagline}</p>
        <p className="mt-2 font-display text-2xl font-semibold tracking-tight">₹ 24,580</p>
        <div className="mt-3 flex items-end gap-1" aria-hidden="true">
          {[10, 16, 8, 20, 14, 24, 18].map((h, i) => (
            <span key={i} className="w-2.5 rounded-sm bg-white/30" style={{ height: h }} />
          ))}
        </div>
      </div>
      <div className="mt-3 space-y-2 px-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.04] p-2">
            <span
              className="h-6 w-6 shrink-0 rounded-full opacity-60"
              style={{ background: `linear-gradient(135deg, ${project.cover.from}, ${project.cover.to})` }}
            />
            <span className="h-1.5 flex-1 rounded-full bg-white/10" />
            <span className="h-1.5 w-6 rounded-full bg-white/15" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ProjectCover = ({ project, className = '', compact }: ProjectCoverProps) => {
  if (project.liveEmbed && project.liveUrl) {
    return (
      <LiveEmbed
        url={project.liveUrl}
        title={`${project.title} live preview`}
        // Zoom in on cards so the site's hero fills the smaller frame; keep the
        // full desktop width on the large detail-page hero.
        viewportWidth={compact ? 1024 : 1280}
        className={className}
      />
    );
  }

  if (project.image) {
    // Screenshots keep their own aspect ratio on a soft plate so they're never cropped.
    return (
      <div className={`flex h-full w-full items-center justify-center bg-[#eef2f7] ${className}`}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain"
        />
      </div>
    );
  }

  return (
    // Deliberately dark scene — a deep navy tile makes app covers pop on the light UI.
    <div
      className={`relative h-full w-full overflow-hidden bg-[#0d1b2a] ${className}`}
      aria-hidden="true"
    >
      {/* Tinted aurora using the project's own colours */}
      <div
        className="pointer-events-none absolute -left-16 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
        style={{ background: project.cover.from }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-12 h-80 w-80 rounded-full opacity-25 blur-3xl"
        style={{ background: project.cover.to }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]">
        <defs>
          <pattern id={`cover-grid-${project.slug}`} width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0v32" fill="none" stroke="rgba(255,255,255,0.06)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#cover-grid-${project.slug})`} />
      </svg>
      <PhoneMock project={project} />
    </div>
  );
};

export default ProjectCover;
