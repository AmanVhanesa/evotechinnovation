const clients = [
  'Learnovo',
  'SP International School',
  'NewMedix Pharma',
  'Syphon Agri Biotech',
  'Cost Wise',
  'Vanbook',
];

const LogoCloud = () => (
  <div className="relative overflow-hidden py-2">
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent" />
    <div className="flex w-max animate-marquee items-center gap-12 sm:gap-16">
      {[...clients, ...clients].map((client, index) => (
        <span
          key={`${client}-${index}`}
          className="whitespace-nowrap font-display text-lg font-semibold tracking-tighter text-ink3"
        >
          {client}
        </span>
      ))}
    </div>
  </div>
);

export default LogoCloud;
