import { motion } from 'framer-motion';
import LogoCloud from '@/components/LogoCloud';
import CTAButton from '@/components/CTAButton';
import usePageMeta from '@/hooks/usePageMeta';
import { fadeInUp, pageTransition, scaleReveal } from '@/styles/motionVariants';

const principles = [
  {
    title: 'Design that earns trust',
    description:
      'Whether it is a school, a pharma brand or a fintech app, the product has to feel credible from the first second. We sweat the details that build confidence.',
  },
  {
    title: 'Fast by default',
    description:
      'Performance is a feature. We budget for speed, ship lean code and make sure everything feels instant on real devices and real networks.',
  },
  {
    title: 'One team, end to end',
    description:
      'Strategy, design, web and mobile under one roof. You deal with the people doing the work — not account managers relaying messages.',
  },
];

const offerings = [
  'Marketing & corporate websites',
  'Cloud platforms & ERP systems',
  'Android & cross-platform apps',
  'Brand identity & UX design',
  'Performance, SEO & maintenance',
  'Ongoing product partnership',
];

const About = () => {
  usePageMeta({
    title: 'About — EvoTech Innovations',
    description:
      'EvoTech Innovations is a digital product studio designing and building websites, platforms and mobile apps.',
  });

  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit">
      <section className="container-x pb-12 pt-20 sm:pt-28">
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-green">
            About EvoTech
          </p>
          <h1 className="display-1 mt-4 text-balance">
            A digital product studio that <span className="gradient-text">ships.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-ink2">
            EvoTech Innovations designs and builds the websites, platforms and mobile apps that
            businesses run on. We partner closely with founders and teams to turn ideas into
            polished products that are fast, reliable and genuinely nice to use.
          </p>
        </motion.div>
      </section>

      <section className="container-x py-10">
        <LogoCloud />
      </section>

      <section className="bg-soft py-24">
        <div className="container-x">
          <h2 className="display-2 max-w-2xl">What we believe.</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {principles.map((principle) => (
              <motion.div
                key={principle.title}
                variants={scaleReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="rounded-3xl border border-line bg-white p-8"
              >
                <h3 className="font-display text-xl font-semibold tracking-tighter text-ink">
                  {principle.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink2">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr,1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-green">
              Capabilities
            </p>
            <h2 className="display-2 mt-3">Everything your product needs, in one place.</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink2">
              From the first sketch to launch and beyond, we cover the full journey — so you never
              have to stitch together a dozen freelancers.
            </p>
            <div className="mt-8">
              <CTAButton to="/contact">Work with us</CTAButton>
            </div>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
            {offerings.map((offering) => (
              <motion.div
                key={offering}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="bg-white p-6 text-[0.98rem] font-medium text-ink"
              >
                {offering}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
