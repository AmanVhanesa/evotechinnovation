import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import Aurora from '@/components/Aurora';
import BrowserFrame from '@/components/BrowserFrame';
import CTAButton from '@/components/CTAButton';
import Magnetic from '@/components/Magnetic';
import ProjectCover from '@/components/ProjectCover';
import Reveal from '@/components/Reveal';
import { getProjectBySlug, projects } from '@/data/projects';
import usePageMeta from '@/hooks/usePageMeta';
import { fadeInUp, pageTransition, scaleReveal } from '@/styles/motionVariants';

const Check = () => (
  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-brand">
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-white">
      <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
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
      <section className="relative overflow-hidden pb-10 pt-[136px] sm:pt-[150px]">
        <Aurora />
        <div className="container-x relative">
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink2 transition hover:text-ink"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-x-0.5">
              <path d="M19 12H5m6 6-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All work
          </Link>
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="mt-8 max-w-3xl">
            <p className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
              {project.categoryLabel}
            </p>
            <h1 className="display-1 mt-5 text-balance">{project.title}</h1>
            <p className="mt-5 text-xl leading-relaxed text-ink2">{project.tagline}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {project.liveUrl ? (
                <Magnetic>
                  <CTAButton href={project.liveUrl} external>
                    Visit live site
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </CTAButton>
                </Magnetic>
              ) : null}
              {project.playStoreUrl ? (
                <CTAButton href={project.playStoreUrl} external variant="secondary">
                  Get it on Play Store
                </CTAButton>
              ) : project.appComingSoon ? (
                <span className="pill !px-5 !py-3 text-[0.95rem] font-semibold">
                  <span className="h-2 w-2 animate-pulse-dot rounded-full bg-brand-teal" />
                  Android app · Coming soon
                </span>
              ) : null}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero visual */}
      <section className="container-x relative">
        <motion.div
          variants={scaleReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-8 -z-10 rounded-[3rem] opacity-25 blur-3xl"
            style={{ background: `linear-gradient(135deg, ${project.cover.from}, ${project.cover.to})` }}
          />
          {project.category === 'app' && !project.image && !project.liveEmbed ? (
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-linestrong shadow-lift sm:aspect-[16/8.5]">
              <ProjectCover project={project} className="absolute inset-0" />
            </div>
          ) : (
            <BrowserFrame url={project.liveLabel} bodyClassName="aspect-[16/10] sm:aspect-[16/8.5]">
              <ProjectCover project={project} className="absolute inset-0" />
            </BrowserFrame>
          )}
        </motion.div>
      </section>

      <section className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-[1.6fr,1fr]">
          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-semibold tracking-tighter text-ink">Overview</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink2">{project.overview}</p>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="font-display text-2xl font-semibold tracking-tighter text-ink">
                Highlights
              </h2>
              <ul className="mt-6 space-y-4">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3.5 text-[1.02rem] leading-relaxed text-ink">
                    <Check />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="h-fit">
            <aside className="glass-card rounded-3xl p-7">
              <dl className="space-y-7">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink3">Sector</dt>
                  <dd className="mt-2 font-medium text-ink">{project.sector}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink3">Year</dt>
                  <dd className="mt-2 font-medium text-ink">{project.year}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink3">
                    What we delivered
                  </dt>
                  <dd className="mt-3 flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span key={service} className="pill">
                        {service}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink3">
                    Built with
                  </dt>
                  <dd className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="pill">
                        <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
                        {tech}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </aside>
          </Reveal>
        </div>
      </section>

      {project.gallery?.length ? (
        <section className="container-x pb-20">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tighter text-ink">Gallery</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {project.gallery.map((shot, index) => (
              <motion.figure
                key={shot.src}
                variants={scaleReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={`group overflow-hidden rounded-2xl border border-line bg-[#eef2f7] shadow-card ${
                  index === 0 ? 'sm:col-span-2' : ''
                }`}
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain transition-transform duration-700 ease-apple group-hover:scale-[1.02]"
                />
              </motion.figure>
            ))}
          </div>
        </section>
      ) : null}

      {/* Next + CTA */}
      <section className="relative overflow-hidden border-t border-line bg-soft py-20">
        <Aurora />
        <div className="container-x relative flex flex-col items-center gap-12 text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink3">Up next</p>
            <Link
              to={`/work/${next.slug}`}
              className="group mt-4 inline-flex items-center gap-3 font-display text-3xl font-semibold tracking-tighter text-ink transition hover:text-brand-cyan sm:text-4xl"
            >
              {next.title}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1.5">
                <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
          <div className="h-px w-24 bg-gradient-brand opacity-50" />
          <Reveal delay={0.1}>
            <h2 className="display-2 max-w-xl text-balance">
              Want something <span className="gradient-text">like this?</span>
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Magnetic>
                <CTAButton to="/contact">Start a project</CTAButton>
              </Magnetic>
              <CTAButton to="/work" variant="secondary">
                See more work
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetail;
