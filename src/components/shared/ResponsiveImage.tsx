
import { useState, useEffect } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
}

/**
 * ResponsiveImage component that implements lazy loading and optimized image loading
 */
const ResponsiveImage = ({ 
  src, 
  alt, 
  className = "", 
  width, 
  height,
  sizes = "100vw",
  priority = false
}: ResponsiveImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(priority ? src : '');

  useEffect(() => {
    // If not priority, set up intersection observer for lazy loading
    if (!priority) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );

      const element = document.getElementById(`img-${src.replace(/[^a-zA-Z0-9]/g, '-')}`);
      if (element) {
        observer.observe(element);
      }

      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    }
  }, [src, priority]);

  // Generate multiple srcSet sizes for responsive loading
  const generateSrcSet = () => {
    // For unsplash images, we can use their size parameters
    if (src.includes('unsplash.com')) {
      return [400, 800, 1200, 1600].map(size => 
        `${src.includes('?') ? 
          `${src.split('?')[0]}?w=${size}&auto=format&q=${size <= 800 ? 70 : 80}${src.split('?')[1] ? `&${src.split('?')[1]}` : ''}` : 
          `${src}?w=${size}&auto=format&q=${size <= 800 ? 70 : 80}`} ${size}w`
      ).join(', ');
    }
    
    // For other images, return the original source
    return src;
  };

  return (
    <div 
      id={`img-${src.replace(/[^a-zA-Z0-9]/g, '-')}`} 
      className={`relative overflow-hidden ${className}`}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          srcSet={generateSrcSet()}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          onLoad={() => setIsLoaded(true)}
          className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        />
      )}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      )}
    </div>
  );
};

export default ResponsiveImage;
