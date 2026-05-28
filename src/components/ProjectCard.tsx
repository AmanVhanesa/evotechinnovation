import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCover from './ProjectCover';
import { cardHover, scaleReveal } from '@/styles/motionVariants';
import type { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProjectCard = ({ project }: ProjectCardProps) => (
  <motion.article
    variants={scaleReveal}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="group"
  >
    <motion.div
      variants={cardHover}
      initial="initial"
      whileHover="hover"
      className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-card transition-shadow duration-500 hover:shadow-lift"
    >
      <Link to={`/work/${project.slug}`} className="relative block aspect-[16/11] overflow-hidden">
        <ProjectCover
          project={project}
          compact
          className="transition-transform duration-700 ease-apple group-hover:scale-[1.04]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[0.7rem] font-semibold text-ink backdrop-blur">
          {project.sector}
        </span>
        {project.appComingSoon ? (
          <span className="absolute right-4 top-4 rounded-full bg-black/55 px-3 py-1 text-[0.7rem] font-semibold text-white backdrop-blur">
            App soon
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
        <div className="space-y-2">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink3">
            {project.categoryLabel}
          </p>
          <h3 className="font-display text-2xl font-semibold tracking-tighter text-ink">
            {project.title}
          </h3>
          <p className="text-[0.95rem] leading-relaxed text-ink2">{project.description}</p>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
          <Link
            to={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-black"
          >
            Case study
          </Link>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-semibold text-brand-blue transition hover:border-brand-blue/40"
            >
              Live site <ArrowUpRight />
            </a>
          ) : null}
        </div>
      </div>
    </motion.div>
  </motion.article>
);

export default ProjectCard;
