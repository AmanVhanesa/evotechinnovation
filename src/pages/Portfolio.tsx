import { AnimatePresence, motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import Aurora from '@/components/Aurora';
import FilterChips from '@/components/FilterChips';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import usePageMeta from '@/hooks/usePageMeta';
import { ease, fadeInUp, pageTransition } from '@/styles/motionVariants';

const Portfolio = () => {
  usePageMeta({
    title: 'Work — EvoTech Innovations',
    description: 'Platforms, websites and mobile apps designed and built by EvoTech Innovations.',
  });
  const [searchParams] = useSearchParams();
  const activeFilter = searchParams.get('filter') ?? 'all';

  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit">
      <section className="relative overflow-hidden pb-12 pt-[150px] sm:pt-[170px]">
        <Aurora />
        <div className="container-x relative">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="max-w-3xl">
            <p className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
              Our work
            </p>
            <h1 className="display-1 mt-6 text-balance">
              Products we've <span className="gradient-text">shipped.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink2 sm:text-xl">
              A growing collection of platforms, websites and mobile apps — built for education,
              healthcare, agriculture and beyond.
            </p>
          </motion.div>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease }}
          >
            <FilterChips />
          </motion.div>
        </div>
      </section>

      <section className="container-x pb-28">
        <motion.div layout className="grid gap-7 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Portfolio;
