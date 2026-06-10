import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import type { ProjectCategory } from '@/types/project';

const filters: { label: string; value: 'all' | ProjectCategory }[] = [
  { label: 'All work', value: 'all' },
  { label: 'Platforms', value: 'platform' },
  { label: 'Websites', value: 'web' },
  { label: 'Mobile apps', value: 'app' },
];

const FilterChips = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = (searchParams.get('filter') as ProjectCategory | 'all') ?? 'all';

  const updateFilter = (value: 'all' | ProjectCategory) => {
    if (value === 'all') {
      searchParams.delete('filter');
    } else {
      searchParams.set('filter', value);
    }
    setSearchParams(searchParams, { replace: true });
  };

  return (
    <div className="glass inline-flex flex-wrap gap-1 rounded-pill p-1.5">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.value;
        return (
          <button
            key={filter.value}
            type="button"
            className="relative rounded-pill px-4 py-2 text-sm font-semibold"
            aria-pressed={isActive}
            onClick={() => updateFilter(filter.value)}
          >
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-pill bg-gradient-brand"
                transition={{ type: 'spring', stiffness: 380, damping: 34 }}
              />
            )}
            <span className={`relative transition-colors ${isActive ? 'text-white' : 'text-ink2 hover:text-ink'}`}>
              {filter.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default FilterChips;
