import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import CTAButton from '@/components/CTAButton';
import ProjectCover from '@/components/ProjectCover';
import { getProjectBySlug, projects } from '@/data/projects';
import usePageMeta from '@/hooks/usePageMeta';
import { fadeInUp, pageTransition, scaleReveal } from '@/styles/motionVariants';

const Check = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 text-brand-green">
    <path d="M4 12.5l5 5 11-11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = useMemo(() => (slug ? getProjectBySlug(slug) : undefined), [slug]);
  usePageMeta({
    title: project ? `${project.title} — EvoTech Innovations` : 'Project — EvoTech Innovations',
    description: project?.description,
  });

  if (!project) {
    return (
      <motion.section
        variants={pageTransition}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="container-x py-32 text-center"
      >
        <h1 className="display-2">We couldn't find that project.</h1>
        <div className="mt-8 flex justify-center">
          <CTAButton to="/work">Back to work</CTAButton>
        </div>
      </motion.section>
    );
  }

  const next = projects[(projects.findIndex((p) => p.slug === project.slug) + 1) % projects.length];

  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit">
      <section className="container-x pb-10 pt-16 sm:pt-20">
        <Link to="/work" className="text-sm font-medium text-ink2 transition hover:text-ink">
          ← All work
        </Link>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="mt-6 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-green">
            {project.categoryLabel}
          </p>
          <h1 className="display-1 mt-3 text-balance">{project.title}</h1>
          <p className="mt-5 text-xl leading-relaxed text-ink2">{project.tagline}</p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            {project.liveUrl ? (
              <CTAButton href={project.liveUrl} external>
                Visit live site →
              </CTAButton>
            ) : null}
            {project.playStoreUrl ? (
              <CTAButton href={project.playStoreUrl} external variant="secondary">
                Get it on Play Store
              </CTAButton>
            ) : project.appComingSoon ? (
              <span className="inline-flex items-center gap-2 rounded-pill border border-line bg-soft px-5 py-3 text-[0.95rem] font-semibold text-ink2">
                <span className="h-2 w-2 rounded-full bg-brand-green" />
                Android app · Coming soon
              </span>
            ) : null}
          </div>
        </motion.div>
      </section>

      <section className="container-x">
        <motion.div
          variants={scaleReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="aspect-[16/10] overflow-hidden rounded-3xl border border-line shadow-lift sm:aspect-[16/8]"
        >
          <ProjectCover project={project} />
        </motion.div>
      </section>

      <section className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-[1.6fr,1fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tighter text-ink">Overview</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink2">{project.overview}</p>

            <h2 className="mt-12 font-display text-2xl font-semibold tracking-tighter text-ink">
              Highlights
            </h2>
            <ul className="mt-5 space-y-3.5">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-[1.02rem] leading-relaxed text-ink">
                  <Check />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit rounded-3xl border border-line bg-soft p-7">
            <dl className="space-y-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink3">Sector</dt>
                <dd className="mt-1.5 font-medium text-ink">{project.sector}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink3">Year</dt>
                <dd className="mt-1.5 font-medium text-ink">{project.year}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink3">
                  What we delivered
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span key={service} className="rounded-pill bg-white px-3 py-1.5 text-sm text-ink2">
                      {service}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink3">
                  Built with
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-pill bg-white px-3 py-1.5 text-sm text-ink2">
                      {tech}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      {/* Next + CTA */}
      <section className="bg-soft py-20">
        <div className="container-x flex flex-col items-center gap-10 text-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-green">Up next</p>
            <Link
              to={`/work/${next.slug}`}
              className="mt-3 inline-block font-display text-3xl font-semibold tracking-tighter text-ink transition hover:text-brand-blue"
            >
              {next.title} →
            </Link>
          </div>
          <div className="h-px w-24 bg-line" />
          <div>
            <h2 className="display-2 max-w-xl">Want something like this?</h2>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <CTAButton to="/contact">Start a project</CTAButton>
              <CTAButton to="/work" variant="secondary">
                See more work
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetail;
