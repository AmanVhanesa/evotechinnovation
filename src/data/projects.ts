import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Learnovo',
    slug: 'learnovo',
    category: 'platform',
    categoryLabel: 'Cloud Platform · School ERP',
    sector: 'Education',
    tagline: 'The operating system for modern schools.',
    description:
      'An all-in-one cloud school-management platform and ERP that runs an entire institution from one secure system.',
    overview:
      'Learnovo is a cloud school-management platform and ERP built for K-12 institutions. It brings students, fees, attendance, exams, timetables, payroll, transport and parent communication together in one secure system — replacing a tangle of registers and spreadsheets with a single source of truth for staff, parents and administrators.',
    year: '2024',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Cloud Hosting', 'REST API'],
    services: ['Product design', 'Full-stack engineering', 'SaaS architecture', 'Parent & staff portals'],
    features: [
      'Student records, admissions and digital ID in one place',
      'Fee collection, invoicing and payroll automation',
      'Attendance, exams, results and timetable management',
      'Transport tracking and parent communication',
      'Secure, role-based cloud access with a free 14-day trial',
    ],
    liveUrl: 'https://learnovoportal.com',
    liveLabel: 'learnovoportal.com',
    cover: { from: '#134e7c', to: '#17a06a' },
    featured: true,
  },
  {
    title: 'SP International School',
    slug: 'sp-international-school',
    category: 'web',
    categoryLabel: 'Website + Mobile App',
    sector: 'Education',
    tagline: 'The future begins here.',
    description:
      'A complete digital presence — an editorial website plus a companion mobile app — for a school proudly serving defence families.',
    overview:
      'SP International School needed a digital home worthy of its motto, “The future begins here.” We delivered an editorial, story-led website alongside a companion mobile app, serving a community that is 95% defence families with students from Nursery to 8th grade. The experience showcases academics, facilities and admissions while making everyday parent engagement effortless.',
    year: '2024',
    tech: ['React', 'Tailwind CSS', 'Flutter', 'Android'],
    services: ['Brand-led web design', 'Admissions flow', 'Mobile app', 'Content & gallery'],
    features: [
      'Story-led homepage with academics, facilities and gallery',
      'Online admissions and enquiry flow',
      'Companion mobile app for parents and students',
      'Built around the school’s values: Discipline · Values · Excellence',
      'Thoughtful support for defence-family schedules',
    ],
    liveUrl: 'https://spinternationalschool.com',
    liveLabel: 'spinternationalschool.com',
    appComingSoon: true,
    cover: { from: '#0f3b63', to: '#2f8f9d' },
    featured: true,
  },
  {
    title: 'NewMedix Pharma',
    slug: 'newmedix-pharma',
    category: 'web',
    categoryLabel: 'Corporate Website',
    sector: 'Pharmaceutical',
    tagline: 'Trustworthy pharmaceutical innovation.',
    description:
      'A polished corporate site that presents products, certifications and quality standards to partners, distributors and regulators.',
    overview:
      'NewMedix Pharma is built around a single promise — trustworthy, innovative pharmaceutical solutions. The website presents the company’s product range, certifications and quality credentials in a clean, credible layout designed to win the confidence of healthcare partners, distributors and regulators, with clear paths to product information and contact.',
    year: '2024',
    tech: ['React', 'Vite', 'Tailwind CSS', 'SEO'],
    services: ['Web design & build', 'Product catalogue', 'Certifications & trust', 'SEO'],
    features: [
      'Credibility-first design for a regulated industry',
      'Structured product and therapeutic catalogue',
      'Certifications and quality standards front and centre',
      'Clear contact and partnership enquiry paths',
      'Fast, SEO-friendly and fully responsive',
    ],
    liveUrl: 'https://newmedixpharma.com',
    liveLabel: 'newmedixpharma.com',
    cover: { from: '#0e5a73', to: '#17a06a' },
    featured: true,
  },
  {
    title: 'Syphon Agri Biotech LLP',
    slug: 'syphon-agri-biotech',
    category: 'web',
    categoryLabel: 'Corporate Website',
    sector: 'Agri-Biotech',
    tagline: 'Innovative agri-biotech, growing forward.',
    description:
      'A clean, modern website communicating agricultural biotechnology solutions to farmers, dealers and agribusiness partners.',
    overview:
      'Syphon Agri Biotech LLP delivers innovative agri-biotech solutions. We built a clean, modern website that communicates the company’s crop and soil-health offerings with clarity — positioning the brand for farmers, dealers and agribusiness partners, and giving the team a credible platform to grow on.',
    year: '2024',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    services: ['Web design & build', 'Brand positioning', 'Content structure'],
    features: [
      'Modern, nature-forward visual identity',
      'Clear presentation of agri-biotech solutions',
      'Built for farmers, dealers and partners',
      'Responsive and fast on rural connections',
      'Foundation ready for catalogue expansion',
    ],
    liveUrl: 'https://syphonagribiotech.com',
    liveLabel: 'syphonagribiotech.com',
    cover: { from: '#15803d', to: '#1aa06a' },
    featured: true,
  },
  {
    title: 'Cost Wise',
    slug: 'cost-wise',
    category: 'app',
    categoryLabel: 'Mobile App · Android',
    sector: 'Finance & Productivity',
    tagline: 'Spend smart. Save smarter.',
    description:
      'A mobile expense and budgeting app that helps people and small businesses track costs and stay on top of their money.',
    overview:
      'Cost Wise is a mobile app that makes everyday money management effortless. Users log expenses in seconds, organise spending into categories, set budgets and see exactly where their money goes — all in a fast, private, offline-friendly experience designed for individuals and small businesses alike.',
    year: '2024',
    tech: ['Flutter', 'Dart', 'Android', 'Local Storage'],
    services: ['App UX design', 'Android development', 'Data & sync'],
    features: [
      'One-tap expense logging with smart categories',
      'Budgets, limits and spending insights',
      'Clear charts and monthly summaries',
      'Offline-first and privacy-friendly',
      'Lightweight and fast on any Android device',
    ],
    appComingSoon: true,
    cover: { from: '#134e7c', to: '#1f9c6a' },
    featured: false,
  },
  {
    title: 'Vanbook',
    slug: 'vanbook',
    category: 'app',
    categoryLabel: 'Mobile App · Android',
    sector: 'Transport & Booking',
    tagline: 'Booking made effortless.',
    description:
      'A mobile booking app that connects customers with van and transport services for quick, reliable trips.',
    overview:
      'Vanbook is a mobile booking app that streamlines van and transport bookings end to end — from requesting a vehicle to confirming the trip. It is built for speed and reliability, giving customers a simple way to book and operators a clean way to manage demand.',
    year: '2024',
    tech: ['Flutter', 'Dart', 'Android'],
    services: ['App UX design', 'Android development', 'Booking flow'],
    features: [
      'Fast, friction-free booking flow',
      'Trip management and confirmations',
      'Clean, modern mobile interface',
      'Built for reliability on the move',
      'Scales from single trips to repeat bookings',
    ],
    appComingSoon: true,
    cover: { from: '#243b55', to: '#1f8aa8' },
    featured: false,
  },
];

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);

export const featuredProjects = projects.filter((project) => project.featured);
