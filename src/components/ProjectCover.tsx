import LiveEmbed from './LiveEmbed';
import type { Project } from '@/types/project';

interface ProjectCoverProps {
  project: Project;
  className?: string;
  compact?: boolean;
}

const BrowserMock = ({ project, compact }: { project: Project; compact?: boolean }) => (
  <div
    className={`absolute left-1/2 top-1/2 w-[86%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-white/95 shadow-2xl ring-1 ring-black/5 backdrop-blur ${
      compact ? 'max-w-[420px]' : 'max-w-[560px]'
    }`}
  >
    <div className="flex items-center gap-1.5 border-b border-black/5 px-4 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      <span className="ml-3 truncate rounded-md bg-black/[0.05] px-3 py-1 text-[0.7rem] font-medium text-ink3">
        {project.liveLabel ?? `${project.slug}.com`}
      </span>
    </div>
    <div className="px-6 py-7">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink3">
        {project.sector}
      </p>
      <p className="mt-2 font-display text-xl font-semibold leading-tight tracking-tighter text-ink sm:text-2xl">
        {project.tagline}
      </p>
      <div className="mt-5 flex gap-2">
        <span
          className="rounded-full px-3 py-1.5 text-[0.7rem] font-semibold text-white"
          style={{ background: project.cover.from }}
        >
          Explore
        </span>
        <span className="rounded-full bg-black/[0.05] px-3 py-1.5 text-[0.7rem] font-semibold text-ink2">
          Learn more
        </span>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-10 rounded-lg bg-black/[0.045]" />
        ))}
      </div>
    </div>
  </div>
);

const PhoneMock = ({ project }: { project: Project }) => (
  <div className="absolute left-1/2 top-1/2 h-[80%] -translate-x-1/2 -translate-y-1/2">
    <div className="relative flex h-full w-[176px] flex-col overflow-hidden rounded-[2rem] border-[5px] border-black/80 bg-white shadow-2xl">
      <div className="absolute left-1/2 top-2 h-1.5 w-14 -translate-x-1/2 rounded-full bg-black/80" />
      <div className="px-4 pb-4 pt-9">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink3">
          {project.sector}
        </p>
        <p className="mt-1 font-display text-base font-semibold leading-tight tracking-tighter text-ink">
          {project.title}
        </p>
      </div>
      <div
        className="mx-4 rounded-2xl p-4 text-white"
        style={{ background: `linear-gradient(135deg, ${project.cover.from}, ${project.cover.to})` }}
      >
        <p className="text-[0.6rem] font-medium opacity-80">{project.tagline}</p>
        <p className="mt-2 font-display text-2xl font-semibold tracking-tighter">₹ 24,580</p>
      </div>
      <div className="mt-3 space-y-2 px-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className="h-7 w-7 shrink-0 rounded-full"
              style={{ background: i % 2 ? `${project.cover.to}22` : `${project.cover.from}22` }}
            />
            <span className="h-2 flex-1 rounded-full bg-black/[0.06]" />
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
    return (
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        decoding="async"
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  const isApp = project.category === 'app';

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{ background: `linear-gradient(135deg, ${project.cover.from}, ${project.cover.to})` }}
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute -left-16 -top-20 h-60 w-60 rounded-full bg-white/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-black/15 blur-3xl" />
      {isApp ? <PhoneMock project={project} /> : <BrowserMock project={project} compact={compact} />}
    </div>
  );
};

export default ProjectCover;
