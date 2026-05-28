export type ProjectCategory = 'platform' | 'web' | 'app';

export interface Project {
  title: string;
  slug: string;
  category: ProjectCategory;
  categoryLabel: string;
  sector: string;
  tagline: string;
  description: string;
  overview: string;
  year: string;
  tech: string[];
  services: string[];
  features: string[];
  liveUrl?: string;
  liveLabel?: string;
  playStoreUrl?: string;
  appComingSoon?: boolean;
  /** Optional real screenshot at /public/projects/<slug>.* — overrides the generated cover. */
  image?: string;
  cover: { from: string; to: string };
  featured?: boolean;
}
