import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://veyroniq.netlify.app';

export default function usePageMeta(title, description) {
  const { pathname } = useLocation();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    let createdMeta = false;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
      createdMeta = true;
    }
    const previousDescription = meta.getAttribute('content');
    meta.setAttribute('content', description);

    let canonical = document.querySelector('link[rel="canonical"]');
    let createdCanonical = false;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
      createdCanonical = true;
    }
    const previousCanonical = canonical.getAttribute('href');
    canonical.setAttribute('href', `${SITE_URL}${pathname}`);

    return () => {
      document.title = previousTitle;
      if (createdMeta) {
        meta.remove();
      } else if (previousDescription !== null) {
        meta.setAttribute('content', previousDescription);
      }

      if (createdCanonical) {
        canonical.remove();
      } else if (previousCanonical !== null) {
        canonical.setAttribute('href', previousCanonical);
      }
    };
  }, [title, description, pathname]);
}
