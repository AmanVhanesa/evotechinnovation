import { motion } from 'framer-motion';
import { fadeInUp } from '@/styles/motionVariants';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

const SectionHeading = ({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) => (
  <motion.div
    className={`space-y-4 ${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.4 }}
  >
    {eyebrow ? (
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-green">{eyebrow}</p>
    ) : null}
    <h2 className="display-2 text-balance">{title}</h2>
    {description ? (
      <p className={`text-lg leading-relaxed text-ink2 ${align === 'center' ? 'mx-auto' : ''}`}>
        {description}
      </p>
    ) : null}
  </motion.div>
);

export default SectionHeading;
