import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Aurora from '@/components/Aurora';
import CTAButton from '@/components/CTAButton';
import Counter from '@/components/Counter';
import Hero from '@/components/Hero';
import Magnetic from '@/components/Magnetic';
import Marquee from '@/components/Marquee';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { featuredProjects } from '@/data/projects';
import usePageMeta from '@/hooks/usePageMeta';
import { pageTransition } from '@/styles/motionVariants';

const clients = [
  'Learnovo',
  'SP International School',
  'NewMedix Pharma',
  'Syphon Agri Biotech',
  'Cost Wise',
  'Vanbook',
];

/* ---------- Bento service illustrations (pure SVG) ---------- */

const WebIllustration = () => (
  <svg viewBox="0 0 220 120" fill="none" className="h-full w-full" aria-hidden="true">
    <rect x="10" y="8" width="200" height="104" rx="10" stroke="rgba(13,30,50,0.14)" />
    <circle cx="24" cy="20" r="3" fill="#ff5f57" opacity="0.7" />
    <circle cx="34" cy="20" r="3" fill="#febc2e" opacity="0.7" />
    <circle cx="44" cy="20" r="3" fill="#28c840" opacity="0.7" />
    <line x1="10" y1="32" x2="210" y2="32" stroke="rgba(13,30,50,0.1)" />
    <rect x="24" y="46" width="84" height="9" rx="4.5" fill="url(#bento-grad)" opacity="0.85" />
    <rect x="24" y="62" width="120" height="5" rx="2.5" fill="rgba(13,30,50,0.16)" />
    <rect x="24" y="73" width="96" height="5" rx="2.5" fill="rgba(13,30,50,0.1)" />
    <rect x="24" y="88" width="44" height="13" rx="6.5" fill="url(#bento-grad)" opacity="0.9" />
    <rect x="148" y="46" width="48" height="55" rx="8" fill="rgba(13,30,50,0.06)" stroke="rgba(13,30,50,0.1)" />
    <defs>
      <linearGradient id="bento-grad" x1="0" y1="0" x2="220" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="#17a06a" />
        <stop offset="0.5" stopColor="#0e7ea3" />
        <stop offset="1" stopColor="#134e7c" />
      </linearGradient>
    </defs>
  </svg>
);

const PlatformIllustration = () => (
  <svg viewBox="0 0 220 120" fill="none" className="h-full w-full" aria-hidden="true">
    <rect x="12" y="10" width="60" height="44" rx="8" fill="rgba(13,30,50,0.05)" stroke="rgba(13,30,50,0.12)" />
    <rect x="80" y="10" width="128" height="44" rx="8" fill="rgba(13,30,50,0.05)" stroke="rgba(13,30,50,0.12)" />
    <rect x="12" y="62" width="128" height="48" rx="8" fill="rgba(13,30,50,0.05)" stroke="rgba(13,30,50,0.12)" />
    <rect x="148" y="62" width="60" height="48" rx="8" fill="rgba(13,30,50,0.05)" stroke="rgba(13,30,50,0.12)" />
    {/* bars */}
    <rect x="24" y="86" width="9" height="16" rx="2" fill="#17a06a" opacity="0.85" />
    <rect x="39" y="78" width="9" height="24" rx="2" fill="#0e7ea3" opacity="0.85" />
    <rect x="54" y="70" width="9" height="32" rx="2" fill="#134e7c" opacity="0.85" />
    <rect x="69" y="82" width="9" height="20" rx="2" fill="#17a06a" opacity="0.6" />
    {/* donut */}
    <circle cx="42" cy="32" r="13" stroke="rgba(13,30,50,0.14)" strokeWidth="5" />
    <path d="M42 19a13 13 0 0 1 12.3 17.2" stroke="#0e7ea3" strokeWidth="5" strokeLinecap="round" />
    {/* line chart */}
    <path d="M90 44 L106 34 L122 38 L138 26 L154 30 L170 18 L196 24" stroke="url(#bento-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="160" y="74" width="36" height="6" rx="3" fill="rgba(13,30,50,0.16)" />
    <rect x="160" y="86" width="28" height="6" rx="3" fill="rgba(13,30,50,0.1)" />
  </svg>
);

const AppIllustration = () => (
  <svg viewBox="0 0 220 120" fill="none" className="h-full w-full" aria-hidden="true">
    <rect x="80" y="6" width="60" height="120" rx="14" fill="rgba(13,30,50,0.05)" stroke="rgba(13,30,50,0.14)" />
    <rect x="100" y="14" width="20" height="4" rx="2" fill="rgba(13,30,50,0.2)" />
    <rect x="90" y="28" width="40" height="26" rx="6" fill="url(#bento-grad)" opacity="0.8" />
    <rect x="90" y="60" width="40" height="6" rx="3" fill="rgba(13,30,50,0.16)" />
    <rect x="90" y="72" width="28" height="6" rx="3" fill="rgba(13,30,50,0.1)" />
    <rect x="90" y="88" width="40" height="14" rx="7" fill="rgba(13,30,50,0.1)" />
    <circle cx="40" cy="60" r="3" fill="#17a06a" opacity="0.8" />
    <circle cx="180" cy="40" r="3" fill="#134e7c" opacity="0.8" />
    <path d="M28 80c10-6 18 4 30-4" stroke="rgba(13,30,50,0.18)" strokeWidth="2" strokeLinecap="round" />
    <path d="M162 84c12 4 20-8 32-2" stroke="rgba(13,30,50,0.18)" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const DesignIllustration = () => (
  <svg viewBox="0 0 220 120" fill="none" className="h-full w-full" aria-hidden="true">
    <path d="M110 16l9.5 21.5L141 47l-21.5 9.5L110 78l-9.5-21.5L79 47l21.5-9.5z" fill="url(#bento-grad)" opacity="0.9" />
    <circle cx="110" cy="47" r="38" stroke="rgba(13,30,50,0.12)" strokeDasharray="3 7" />
    <rect x="30" y="92" width="160" height="10" rx="5" fill="rgba(13,30,50,0.07)" />
    <rect x="30" y="92" width="92" height="10" rx="5" fill="url(#bento-grad)" opacity="0.55" />
    <circle cx="170" cy="22" r="3" fill="#17a06a" opacity="0.9" />
    <circle cx="44" cy="30" r="2.5" fill="#134e7c" opacity="0.9" />
  </svg>
);

const services = [
  {
    title: 'Websites',
    description:
      'Brand-led marketing sites and corporate websites that load fast, rank well and convert visitors into enquiries.',
    chips: ['React', 'SEO', 'Performance'],
    illustration: <WebIllustration />,
    span: 'lg:col-span-3',
  },
  {
    title: 'Mobile apps',
    description: 'Polished Android and cross-platform apps built with Flutter for speed and reach.',
    chips: ['Flutter', 'Android'],
    illustration: <AppIllustration />,
    span: 'lg:col-span-2',
  },
  {
    title: 'Platforms & ERP',
    description: 'Cloud platforms, dashboards and ERP systems that run real businesses end to end.',
    chips: ['SaaS', 'Dashboards'],
    illustration: <PlatformIllustration />,
    span: 'lg:col-span-2',
  },
  {
    title: 'Design & brand',
    description:
      'Identity, UX and design systems so every screen feels considered — and unmistakably yours.',
    chips: ['UX', 'Identity', 'Design systems'],
    illustration: <DesignIllustration />,
    span: 'lg:col-span-3',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We dig into your goals, users and market until the problem is crystal clear.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Wireframes become polished interfaces you can click through and react to.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Senior engineers ship clean, fast code with weekly demos — no black boxes.',
  },
  {
    number: '04',
    title: 'Launch & grow',
    description: 'We deploy, measure and keep improving long after the confetti settles.',
  },
];

const stats = [
  { value: 6, suffix: '+', label: 'Products shipped' },
  { value: 4, suffix: '', label: 'Live websites & platforms' },
  { value: 3, suffix: '', label: 'Industries served' },
  { value: 100, suffix: '%', label: 'In-house design & build' },
];

const ProcessLine = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 55%'] });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative mt-14">
      {/* Track + scroll-linked gradient fill */}
      <div className="absolute left-7 top-7 hidden h-px right-7 bg-[#134e7c]/10 lg:block" />
      <motion.div
        className="absolute left-7 top-7 hidden h-px right-7 origin-left bg-gradient-brand lg:block"
        style={{ scaleX }}
      />
      <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
        {processSteps.map((step, index) => (
          <Reveal key={step.number} delay={index * 0.1} className="relative">
            <div className="glass-card flex h-14 w-14 items-center justify-center rounded-2xl">
              <span className="gradient-text font-display text-lg font-bold">{step.number}</span>
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
              {step.title}
            </h3>
            <p className="mt-2.5 max-w-xs text-[0.95rem] leading-relaxed text-ink2">
              {step.description}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  usePageMeta();

  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit">
      <Hero />

      {/* Client / product marquee */}
      <section className="border-y border-line bg-soft/60 py-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.24em] text-ink3">
          Powering the teams behind
        </p>
        <Marquee>
          {clients.map((client) => (
            <span key={client} className="flex items-center">
              <span className="px-6 font-display text-xl font-medium tracking-tight text-ink2 transition hover:text-ink sm:text-2xl">
                {client}
              </span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-brand-cyan/60">
                <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" fill="currentColor" />
              </svg>
            </span>
          ))}
        </Marquee>
      </section>

      {/* Services — bento grid */}
      <section className="relative py-24 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                One studio for the <span className="gradient-text">whole product.</span>
              </>
            }
            description="Strategy, design and engineering under one roof — from a single landing page to a full platform and its companion app."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08} className={`${service.span} sm:col-span-1`}>
                <div className="group glass-card relative h-full overflow-hidden rounded-3xl p-7 transition-transform duration-500 ease-apple hover:-translate-y-1.5">
                  {/* Gradient top edge revealed on hover */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-brand opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-[0.12]" />

                  <div className="h-32 opacity-80 transition-opacity duration-500 group-hover:opacity-100">
                    {service.illustration}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink2">{service.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.chips.map((chip) => (
                      <span key={chip} className="pill !px-3 !py-1 text-[0.72rem]">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="relative overflow-hidden border-t border-line bg-soft py-24 sm:py-28">
        <Aurora />
        <div className="container-x relative">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected work"
              title={
                <>
                  Real products, <span className="gradient-text">live in the world.</span>
                </>
              }
              description="Platforms, websites and apps we've designed, built and shipped — not mock-ups."
            />
            <Reveal delay={0.15}>
              <CTAButton to="/work" variant="secondary" className="hidden sm:inline-flex">
                View all work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </CTAButton>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-7 md:grid-cols-2">
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

      {/* Process */}
      <section className="py-24 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="How we work"
            title={
              <>
                A process with <span className="gradient-text">zero surprises.</span>
              </>
            }
            description="You talk directly to the people designing and building your product — no layers, no hand-offs."
          />
          <ProcessLine />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-line bg-soft/60 py-16">
        <div className="container-x grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08} className="relative text-center">
              {index > 0 ? (
                <span className="absolute left-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#134e7c]/20 to-transparent lg:block" />
              ) : null}
              <p className="font-display text-5xl font-semibold tracking-tighter">
                <Counter value={stat.value} suffix={stat.suffix} className="gradient-text" />
              </p>
              <p className="mt-2.5 text-sm text-ink2">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <Reveal>
            <div className="noise relative overflow-hidden rounded-[2.5rem] border border-linestrong px-8 py-20 text-center sm:px-16 sm:py-24">
              {/* Liquid gradient backdrop */}
              <div className="absolute inset-0 -z-10 bg-raised" />
              <div className="absolute -left-24 -top-32 -z-10 h-96 w-96 animate-aurora-a rounded-full bg-[radial-gradient(circle_at_center,rgba(23,160,106,0.20),transparent_65%)] blur-3xl" />
              <div className="absolute -bottom-32 -right-24 -z-10 h-96 w-96 animate-aurora-b rounded-full bg-[radial-gradient(circle_at_center,rgba(19,78,124,0.18),transparent_65%)] blur-3xl" />
              <div className="absolute left-1/3 top-0 -z-10 h-80 w-80 animate-aurora-c rounded-full bg-[radial-gradient(circle_at_center,rgba(14,126,163,0.16),transparent_65%)] blur-3xl" />

              <p className="eyebrow mx-auto">Let's talk</p>
              <h2 className="display-2 mx-auto mt-6 max-w-2xl text-balance">
                Have a product in mind? <span className="gradient-text">Let's build it.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-ink2">
                Tell us about your idea and we'll come back with a clear plan, timeline and a fixed
                quote — within one business day.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Magnetic>
                  <CTAButton to="/contact">Start a project</CTAButton>
                </Magnetic>
                <Magnetic>
                  <Link
                    to="/work"
                    className="inline-flex items-center justify-center gap-2 rounded-pill border border-linestrong px-6 py-3 text-[0.95rem] font-semibold text-ink transition hover:bg-soft"
                  >
                    See our work
                  </Link>
                </Magnetic>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
