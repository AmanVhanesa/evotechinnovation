import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import FilterChips from '@/components/FilterChips';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import usePageMeta from '@/hooks/usePageMeta';
import type { ProjectCategory } from '@/types/project';
import { fadeInUp, pageTransition } from '@/styles/motionVariants';

const Portfolio = () => {
  usePageMeta({
    title: 'Work — EvoTech Innovations',
    description: 'Platforms, websites and mobile apps designed and built by EvoTech Innovations.',
  });
  const [searchParams] = useSearchParams();
  const activeFilter = (searchParams.get('filter') as ProjectCategory | 'all') ?? 'all';

  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit">
      <section className="container-x pb-12 pt-20 sm:pt-24">
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-green">Our work</p>
          <h1 className="display-1 mt-4 text-balance">Products we've shipped.</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink2 sm:text-xl">
            A growing collection of platforms, websites and mobile apps — built for education,
            healthcare, agriculture and beyond.
          </p>
        </motion.div>
        <div className="mt-10">
          <FilterChips />
        </div>
      </section>

      <section className="container-x pb-28">
        <motion.div layout className="grid gap-7 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Portfolio;
