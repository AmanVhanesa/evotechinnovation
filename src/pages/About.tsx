import { motion } from 'framer-motion';
import Aurora from '@/components/Aurora';
import CTAButton from '@/components/CTAButton';
import Magnetic from '@/components/Magnetic';
import Marquee from '@/components/Marquee';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import usePageMeta from '@/hooks/usePageMeta';
import { fadeInUp, pageTransition } from '@/styles/motionVariants';

const principles = [
  {
    title: 'Design that earns trust',
    description:
      'Whether it is a school, a pharma brand or a fintech app, the product has to feel credible from the first second. We sweat the details that build confidence.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3l7 3v5c0 4.4-3 8.4-7 10-4-1.6-7-5.6-7-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Fast by default',
    description:
      'Performance is a feature. We budget for speed, ship lean code and make sure everything feels instant on real devices and real networks.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 2 4.5 13.5H11L9.5 22 19 10h-6.5z" />
      </svg>
    ),
  },
  {
    title: 'One team, end to end',
    description:
      'Strategy, design, web and mobile under one roof. You deal with the people doing the work — not account managers relaying messages.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 19c.8-3 3-4.5 5.5-4.5S13.7 16 14.5 19" />
        <circle cx="17" cy="9" r="2.6" />
        <path d="M15.5 14.6c2.3.2 4.2 1.6 5 4.4" />
      </svg>
    ),
  },
];

const offerings = [
  'Marketing & corporate websites',
  'Cloud platforms & ERP systems',
  'Android & cross-platform apps',
  'Brand identity & UX design',
  'Performance, SEO & maintenance',
  'Hosting, deployment & support',
];

const sectors = ['Education', 'Healthcare & Pharma', 'Agri-Biotech', 'Finance', 'Transport & Logistics'];

const About = () => {
  usePageMeta({
    title: 'About — EvoTech Innovations',
    description:
      'EvoTech Innovations is a digital product studio designing and building websites, cloud platforms and mobile apps.',
  });

  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit">
      {/* Statement hero */}
      <section className="relative overflow-hidden pb-16 pt-[150px] sm:pt-[180px]">
        <Aurora variant="hero" />
        <div className="container-x relative">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="max-w-3xl">
            <p className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
              About the studio
            </p>
            <h1 className="display-1 mt-6 text-balance">
              A small studio that ships <span className="gradient-text">like a big one.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink2 sm:text-xl">
              EvoTech Innovations is a digital product studio. We partner with founders, schools and
              growing companies to design and build the websites, platforms and apps their work runs
              on — and we stay close after launch to keep them evolving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sector marquee */}
      <section className="border-y border-line bg-soft/60 py-7">
        <Marquee speed="fast">
          {sectors.map((sector) => (
            <span key={sector} className="flex items-center">
              <span className="px-6 font-display text-lg font-medium tracking-tight text-ink2">
                {sector}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand opacity-70" />
            </span>
          ))}
        </Marquee>
      </section>

      {/* Principles */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we believe"
            title={
              <>
                Principles we <span className="gradient-text">build by.</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.1}>
                <div className="group glass-card relative h-full overflow-hidden rounded-3xl p-7 transition-transform duration-500 ease-apple hover:-translate-y-1.5">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-brand opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand-soft text-brand-cyan">
                    {principle.icon}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink2">{principle.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="relative overflow-hidden border-t border-line bg-soft py-24">
        <Aurora />
        <div className="container-x relative grid gap-12 lg:grid-cols-[1fr,1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="What we offer"
            title={
              <>
                Everything a product needs, <span className="gradient-text">under one roof.</span>
              </>
            }
            description="From the first wireframe to hosting and long-term care — one accountable team for the whole journey."
          />
          <Reveal delay={0.15}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {offerings.map((offering) => (
                <li
                  key={offering}
                  className="glass flex items-center gap-3 rounded-2xl px-5 py-4 text-[0.95rem] font-medium text-ink"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-brand">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-white">
                      <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {offering}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="display-2 mx-auto max-w-2xl text-balance">
              Let's make your product the next one <span className="gradient-text">live in the world.</span>
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Magnetic>
                <CTAButton to="/contact">Start a project</CTAButton>
              </Magnetic>
              <CTAButton to="/work" variant="secondary">
                See our work
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
