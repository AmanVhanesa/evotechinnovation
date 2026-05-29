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
  /** When true, embed the live site (liveUrl) in the card/hero. Only for sites that allow framing. */
  liveEmbed?: boolean;
  playStoreUrl?: string;
  appComingSoon?: boolean;
  /** Optional real screenshot at /public/projects/<slug>.* — overrides the generated cover. */
  image?: string;
  /** Optional real screenshots shown in a gallery on the project detail page. */
  gallery?: { src: string; alt: string }[];
  cover: { from: string; to: string };
  featured?: boolean;
}
