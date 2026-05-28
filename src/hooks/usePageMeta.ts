import { useEffect } from 'react';

interface MetaOptions {
  title?: string;
  description?: string;
}

const DEFAULT_TITLE = 'EvoTech Innovations — Websites, platforms & mobile apps';
const DEFAULT_DESCRIPTION =
  'EvoTech Innovations is a digital product studio. We design and build fast, beautiful websites, cloud platforms and mobile apps — including Learnovo, NewMedix Pharma, Syphon Agri Biotech and SP International School.';

const usePageMeta = ({ title, description }: MetaOptions = {}) => {
  useEffect(() => {
    document.title = title ?? DEFAULT_TITLE;
    if (description) {
      let descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!descriptionTag) {
        descriptionTag = document.createElement('meta');
        descriptionTag.setAttribute('name', 'description');
        document.head.appendChild(descriptionTag);
      }
      descriptionTag.setAttribute('content', description ?? DEFAULT_DESCRIPTION);
    }

    let ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title ?? DEFAULT_TITLE);
  }, [title, description]);
};

export default usePageMeta;

