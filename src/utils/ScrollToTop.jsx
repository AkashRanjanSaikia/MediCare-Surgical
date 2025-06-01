import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {

  // useLocation provides access to the current URL path
  const { pathname } = useLocation();

  useEffect(() => {

    // When the path changes, scroll to the top of the page smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }, [pathname]);

  return null;
};

export default ScrollToTop;
