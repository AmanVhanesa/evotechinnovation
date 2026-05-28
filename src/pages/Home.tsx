import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import LogoCloud from '@/components/LogoCloud';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import CTAButton from '@/components/CTAButton';
import { featuredProjects } from '@/data/projects';
import usePageMeta from '@/hooks/usePageMeta';
import { fadeInUp, pageTransition, scaleReveal } from '@/styles/motionVariants';

const iconProps = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const services = [
  {
    title: 'Websites',
    description: 'Brand-led marketing sites and corporate websites that load fast and convert visitors.',
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18M8 21h8" />
      </svg>
    ),
  },
  {
    title: 'Platforms & ERP',
    description: 'Cloud platforms, dashboards and ERP systems that run real businesses end to end.',
    icon: (
      <svg {...iconProps}>
        <path d="M4 5h16v6H4zM4 15h7v4H4zM15 15h5v4h-5z" />
      </svg>
    ),
  },
  {
    title: 'Mobile apps',
    description: 'Polished Android and cross-platform apps built with Flutter for speed and reach.',
    icon: (
      <svg {...iconProps}>
        <rect x="7" y="2" width="10" height="20" rx="2.5" />
        <path d="M11 18h2" />
      </svg>
    ),
  },
  {
    title: 'Design & brand',
    description: 'Identity, UX and design systems so every product looks and feels considered.',
    icon: (
      <svg {...iconProps}>
        <path d="M12 3l2.5 5.5L20 11l-5.5 2.5L12 19l-2.5-5.5L4 11l5.5-2.5z" />
      </svg>
    ),
  },
];

const stats = [
  { value: '6+', label: 'Products shipped' },
  { value: '4', label: 'Live websites & platforms' },
  { value: '3', label: 'Industries served' },
  { value: '100%', label: 'In-house design & build' },
];

const Home = () => {
  usePageMeta();

  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit">
      <Hero />

      {/* Clients */}
      <section className="container-x py-10">
        <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-ink3">
          Powering the teams behind
        </p>
        <LogoCloud />
      </section>

      {/* Services */}
      <section className="bg-soft py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we do"
            title="One studio for the whole product."
            description="Strategy, design and engineering under one roof — from a single landing page to a full platform and its companion app."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected work"
              title="Real products, live in the world."
              description="A look at platforms, websites and apps we've designed and built."
            />
            <CTAButton to="/work" variant="ghost" className="hidden sm:inline-flex">
              View all work →
            </CTAButton>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-10 text-center sm:hidden">
            <CTAButton to="/work" variant="secondary">
              View all work
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Stats / promise */}
      <section className="bg-soft py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="How we work"
            title="Small team. Senior hands. Shipped work."
            description="You talk directly to the people designing and building your product — no layers, no hand-offs, no surprises."
          />
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="bg-white p-8 text-center"
              >
                <p className="font-display text-4xl font-semibold tracking-tighter text-ink">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-ink2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-x">
          <motion.div
            variants={scaleReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-brand px-8 py-16 text-center text-white sm:px-16 sm:py-20"
          >
            <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-black/15 blur-3xl" />
            <h2 className="display-2 relative mx-auto max-w-2xl text-white">
              Have a product in mind? Let's build it.
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/85">
              Tell us about your idea and we'll come back with a clear plan, timeline and a fixed
              quote.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="rounded-pill bg-white px-7 py-3.5 font-semibold text-brand-blue transition hover:bg-white/90"
              >
                Start a project
              </Link>
              <Link
                to="/work"
                className="rounded-pill border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                See our work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
