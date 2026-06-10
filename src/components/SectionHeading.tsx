import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
}

const SectionHeading = ({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) => (
  <Reveal className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
    {eyebrow ? (
      <p className="eyebrow">
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
        {eyebrow}
      </p>
    ) : null}
    <h2 className="display-2 mt-5 text-balance">{title}</h2>
    {description ? (
      <p className={`mt-5 text-lg leading-relaxed text-ink2 ${align === 'center' ? 'mx-auto' : ''}`}>
        {description}
      </p>
    ) : null}
  </Reveal>
);

export default SectionHeading;
