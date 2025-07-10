
import { ReactNode, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import TestimonialBar from '../shared/TestimonialBar';
import { useIsMobile, useIsTablet } from '@/hooks/use-mobile';

interface PageLayoutProps {
  children: ReactNode;
  hideTestimonials?: boolean;
}

const PageLayout = ({ children, hideTestimonials = false }: PageLayoutProps) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  
  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <main 
        id="main-content" 
        tabIndex={-1} 
        className={`flex-grow`}
      >
        {children}
      </main>
      {/* {!hideTestimonials && <TestimonialBar />} */}
      <Footer />
    </div>
  );
};

export default PageLayout;
