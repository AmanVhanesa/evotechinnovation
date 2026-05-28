import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import usePageMeta from '@/hooks/usePageMeta';
import { fadeInUp, pageTransition } from '@/styles/motionVariants';

const details = [
  { label: 'Email', value: 'hello@evotechinnovations.com', href: 'mailto:hello@evotechinnovations.com' },
  { label: 'Response time', value: 'Within one business day' },
  { label: 'Engagements', value: 'Websites · Platforms · Mobile apps' },
];

const Contact = () => {
  usePageMeta({
    title: 'Contact — EvoTech Innovations',
    description: 'Start a project with EvoTech Innovations — websites, platforms and mobile apps.',
  });

  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit">
      <section className="container-x pb-20 pt-20 sm:pt-28">
        <div className="grid gap-14 lg:grid-cols-[1fr,1.05fr] lg:items-start">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-green">
              Contact
            </p>
            <h1 className="display-1 mt-4 text-balance">Let's start something.</h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink2">
              Tell us about your project — what you're building, who it's for and roughly when you'd
              like it live. We'll reply with a clear plan and a fixed quote.
            </p>

            <dl className="mt-10 space-y-6">
              {details.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink3">
                    {detail.label}
                  </dt>
                  <dd className="mt-1.5 text-lg font-medium text-ink">
                    {detail.href ? (
                      <a href={detail.href} className="text-brand-blue hover:text-brand-bluedeep">
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <ContactForm />
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
