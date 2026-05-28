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
    <div className="inline-flex flex-wrap gap-1.5 rounded-pill border border-line bg-soft p-1.5">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.value;
        return (
          <button
            key={filter.value}
            type="button"
            className={`rounded-pill px-4 py-2 text-sm font-semibold transition duration-300 ease-apple ${
              isActive ? 'bg-white text-ink shadow-soft' : 'text-ink2 hover:text-ink'
            }`}
            aria-pressed={isActive}
            onClick={() => updateFilter(filter.value)}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
};

export default FilterChips;
