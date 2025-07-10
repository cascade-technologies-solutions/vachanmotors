
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      <div className="text-center max-w-lg">
        <div className="relative mb-8">
          <h1 className="text-9xl font-bold text-gray-200">404</h1>
          <h2 className="text-2xl font-bold text-jetBlack absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Page Not Found
          </h2>
        </div>
        
        <div className="mb-8">
          <div className="w-16 h-1 bg-electricLime mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-gray-500">
            Check the URL or navigate back to our homepage.
          </p>
        </div>
        
        <Button asChild className="bg-electricLime text-jetBlack hover:bg-neonEmerald hover:text-white">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
