import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCover from './ProjectCover';
import { scaleReveal } from '@/styles/motionVariants';
import type { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

const ArrowUpRight = ({ className = '' }: { className?: string }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProjectCard = ({ project }: ProjectCardProps) => (
  <motion.article
    variants={scaleReveal}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="group relative h-full"
  >
    {/* Gradient halo behind the card on hover */}
    <div
      aria-hidden="true"
      className="absolute -inset-1 rounded-[2.1rem] opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-25"
      style={{ background: `linear-gradient(135deg, ${project.cover.from}, ${project.cover.to})` }}
    />

    <div className="glass-card relative flex h-full flex-col overflow-hidden rounded-3xl transition-transform duration-500 ease-apple group-hover:-translate-y-1.5">
      <Link to={`/work/${project.slug}`} className="relative m-3 mb-0 block overflow-hidden rounded-2xl border border-line">
        <div className="aspect-[16/10] overflow-hidden">
          <ProjectCover
            project={project}
            compact
            className="transition-transform duration-700 ease-apple group-hover:scale-[1.03]"
          />
        </div>
        <span className="glass absolute left-3 top-3 rounded-pill px-3 py-1 text-[0.7rem] font-semibold text-ink">
          {project.sector}
        </span>
        {project.appComingSoon ? (
          <span className="absolute right-3 top-3 rounded-pill bg-black/60 px-3 py-1 text-[0.7rem] font-semibold text-white backdrop-blur">
            App soon
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
        <div className="space-y-2.5">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink3">
            {project.categoryLabel}
          </p>
          <h3 className="font-display text-2xl font-semibold tracking-tighter text-ink">
            <Link to={`/work/${project.slug}`} className="transition-colors group-hover:text-brand-cyan">
              {project.title}
            </Link>
          </h3>
          <p className="text-[0.95rem] leading-relaxed text-ink2">{project.description}</p>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
          <Link
            to={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 rounded-pill bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#134e7c]"
          >
            Case study
            <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-pill border border-line px-4 py-2 text-sm font-semibold text-brand-cyan transition hover:border-brand-cyan/40 hover:bg-brand-cyan/5"
            >
              Live site <ArrowUpRight />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  </motion.article>
);

export default ProjectCard;
