import { motion } from 'framer-motion';
import Aurora from '@/components/Aurora';
import ContactForm from '@/components/ContactForm';
import usePageMeta from '@/hooks/usePageMeta';
import { fadeInUp, pageTransition } from '@/styles/motionVariants';

const details = [
  {
    label: 'Email',
    value: 'evotechnologiesinnovation@gmail.com',
    href: 'mailto:evotechnologiesinnovation@gmail.com',
  },
  { label: 'Response time', value: 'Within one business day' },
  { label: 'Engagements', value: 'Websites · Platforms · Mobile apps' },
];

const steps = [
  'Tell us about your idea',
  'We reply with a plan & fixed quote',
  'Design, build, launch — together',
];

const Contact = () => {
  usePageMeta({
    title: 'Contact — EvoTech Innovations',
    description: 'Start a project with EvoTech Innovations — websites, platforms and mobile apps.',
  });

  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit">
      <section className="relative overflow-hidden pb-24 pt-[150px] sm:pt-[180px]">
        <Aurora variant="hero" />
        <div className="container-x relative grid gap-14 lg:grid-cols-[1fr,1.05fr] lg:items-start">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <p className="eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-teal opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-teal" />
              </span>
              Contact
            </p>
            <h1 className="display-1 mt-6 text-balance">
              Let's start <span className="gradient-text">something.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink2">
              Tell us about your project — what you're building, who it's for and roughly when you'd
              like it live. We'll reply with a clear plan and a fixed quote.
            </p>

            <dl className="mt-10 space-y-6">
              {details.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink3">
                    {detail.label}
                  </dt>
                  <dd className="mt-1.5 break-all text-lg font-medium text-ink">
                    {detail.href ? (
                      <a href={detail.href} className="text-brand-cyan transition hover:text-brand-tealsoft">
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <ol className="mt-10 space-y-3">
              {steps.map((step, index) => (
                <li key={step} className="flex items-center gap-3 text-[0.95rem] text-ink2">
                  <span className="glass flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold text-brand-cyan">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </motion.div>

          <ContactForm />
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
