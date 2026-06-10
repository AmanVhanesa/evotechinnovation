import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Aurora from './Aurora';
import BrowserFrame from './BrowserFrame';
import CTAButton from './CTAButton';
import Magnetic from './Magnetic';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { ease } from '@/styles/motionVariants';

const headlineLines = [
  { words: ['We', 'design', '&', 'build'], gradient: false },
  { words: ['digital', 'experiences'], gradient: true },
  { words: ['clients', 'fall', 'for.'], gradient: false },
];

const lineContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const wordReveal = {
  hidden: { y: '115%', rotate: 2.5 },
  visible: { y: '0%', rotate: 0, transition: { duration: 0.85, ease } },
};

/** Slowly rotating orbit rings behind the hero showcase. */
const OrbitRings = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute left-1/2 top-[58%] -z-10 -translate-x-1/2 -translate-y-1/2"
  >
    <svg width="760" height="760" viewBox="0 0 760 760" fill="none" className="animate-spin-slow">
      <circle cx="380" cy="380" r="280" stroke="rgba(13,30,50,0.10)" strokeDasharray="3 10" />
      <circle cx="380" cy="100" r="4" fill="#0e7ea3" opacity="0.7" />
      <circle cx="660" cy="380" r="3" fill="#17a06a" opacity="0.6" />
    </svg>
    <svg
      width="560"
      height="560"
      viewBox="0 0 560 560"
      fill="none"
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slower"
    >
      <circle cx="280" cy="280" r="220" stroke="rgba(13,30,50,0.12)" strokeDasharray="2 8" />
      <circle cx="280" cy="60" r="3.5" fill="#134e7c" opacity="0.7" />
    </svg>
  </div>
);

/** Tiny gradient sparkline used in a floating stat chip. */
const Sparkline = () => (
  <svg width="72" height="26" viewBox="0 0 72 26" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="sparkline-grad" x1="0" y1="0" x2="72" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="#17a06a" />
        <stop offset="1" stopColor="#134e7c" />
      </linearGradient>
    </defs>
    <motion.path
      d="M2 20 L12 16 L22 18 L32 10 L42 13 L52 6 L62 9 L70 3"
      stroke="url(#sparkline-grad)"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.6, delay: 1.1, ease: 'easeOut' }}
    />
  </svg>
);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Parallax: the showcase sinks slower than the page, floating chips drift faster.
  const showcaseY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 90]);
  const chipLeftY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -70]);
  const chipRightY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -130]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden pb-10 pt-[136px] sm:pt-[170px]">
      <Aurora variant="hero" />

      <motion.div style={{ opacity: fade }} className="container-x relative text-center">
        {/* Availability pill */}
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-teal opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-teal" />
          </span>
          Digital product studio · Accepting new projects
        </motion.p>

        {/* Word-staggered headline */}
        <motion.h1
          className="display-1 mx-auto mt-7 max-w-4xl"
          variants={lineContainer}
          initial="hidden"
          animate="visible"
        >
          {headlineLines.map((line) => (
            <span key={line.words.join(' ')} className="block">
              {line.words.map((word, wordIndex) => (
                <span key={`${word}-${wordIndex}`} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
                  <motion.span
                    variants={wordReveal}
                    className={`inline-block will-change-transform ${line.gradient ? 'gradient-text' : ''}`}
                  >
                    {word}
                    {wordIndex < line.words.length - 1 ? ' ' : ''}
                  </motion.span>
                </span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.p
          className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-ink2 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease }}
        >
          EvoTech Innovations crafts fast, beautiful websites, cloud platforms and mobile apps —
          from first sketch to launch day and beyond.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
        >
          <Magnetic>
            <CTAButton to="/contact">
              Start a project
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </CTAButton>
          </Magnetic>
          <Magnetic>
            <CTAButton to="/work" variant="secondary">
              Explore our work
            </CTAButton>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Showcase — Learnovo dashboard in a glass browser, floating stat chips */}
      <div className="container-x relative mt-16 sm:mt-20">
        <OrbitRings />

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.5, ease }}
          style={{ y: showcaseY }}
          className="relative mx-auto max-w-4xl"
        >
          {/* Glow under the frame */}
          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-brand opacity-[0.14] blur-3xl"
          />
          <BrowserFrame url="learnovoportal.com" bodyClassName="bg-[#eef2f7]">
            <img
              src="/projects/learnovo-dashboard.png"
              alt="Learnovo school management dashboard built by EvoTech"
              className="w-full"
              decoding="async"
              fetchPriority="high"
            />
          </BrowserFrame>

          {/* Floating chips */}
          <motion.div
            style={{ y: chipLeftY }}
            className="absolute -left-6 top-[16%] hidden md:block lg:-left-16"
          >
            <motion.div
              className="glass-card rounded-2xl p-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink3">
                Student attendance
              </p>
              <div className="mt-1.5 flex items-end gap-3">
                <p className="font-display text-2xl font-semibold text-ink">98%</p>
                <Sparkline />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: chipRightY }}
            className="absolute -right-6 bottom-[18%] hidden md:block lg:-right-16"
          >
            <motion.div
              className="glass-card rounded-2xl p-4"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M20 7 9 18l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p className="font-display text-lg font-semibold leading-none text-ink">2,00,000+</p>
                  <p className="mt-1 text-[0.7rem] text-ink3">students managed on Learnovo</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="mt-14 hidden justify-center sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2 text-ink3">
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em]">Scroll</span>
          <span className="flex h-9 w-5 items-start justify-center rounded-pill border border-linestrong p-1">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-gradient-brand"
              animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            />
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
