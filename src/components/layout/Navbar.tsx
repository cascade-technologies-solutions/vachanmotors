import { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile, useIsTablet } from '@/hooks/use-mobile';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Service Centers', path: '/service-centers' },
    // { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-2xl' : 'bg-transparent backdrop-blur-xl'
      }`}
      style={{ height: '80px' }} // Fixed height for consistent spacing
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 md:px-8 xl:px-12">
        <Link to="/" className="flex items-center space-x-3 z-20">
          <img src={logo} alt="Vachan Motors Logo" className="h-12 w-auto transform hover:scale-105 transition-transform duration-300" />
          <span className={`text-2xl md:text-3xl font-sora font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-electricLime to-neonEmerald ${
            (!isScrolled && !mobileMenuOpen) ? '' : 'text-jetBlack'
          } tracking-tight`}>
            VACHAN MOTORS
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
          {navItems.map(item => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`font-sora font-semibold text-sm xl:text-base transition-all duration-500 relative group ${
                location.pathname === item.path 
                  ? 'text-jetBlack' 
                  : 'text-gray-700 hover:text-electricLime hover:bg-gray-100/50 hover:scale-105'
              }`}
            >
              {item.name}
              <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-electricLime to-neonEmerald transform origin-left transition-transform duration-500 ${
                location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
          ))}
        </div>

        {/* <div className="hidden lg:flex items-center space-x-6">
          <Button 
            className="bg-gradient-to-r from-electricLime to-neonEmerald text-jetBlack rounded-full px-8 py-2 text-base font-sora font-semibold hover:shadow-xl hover:shadow-electricLime/30 transform hover:scale-105 transition-all duration-300"
          >
            Test Drive
          </Button>
        </div> */}
    <div className="hidden lg:flex items-center space-x-6">
  <a 
    href="https://wa.me/+917204703202" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-green-500 hover:bg-green-600 text-white rounded-full px-4 py-2 flex items-center space-x-2 transition-all duration-300 shadow-lg"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 448 512"
    >
      <path d="M380.9 97.1C339-18.3 214.5-32.3 133.5 35.5 78.6 80.6 53.2 152.7 68.1 218.5L39.5 350.4c-4.6 20.6 14.2 38.8 35.1 34.3l131.6-29.9c63.3 31.1 140.8 7.2 181.8-54.9 36.8-55.6 28.6-126.9-7.1-171.7zM224 338.9c-22.7 0-44.9-5.9-64.3-17.2l-7.8-4.6-78 17.7 16.8-76.7-5-8.2c-25.9-42.5-18.6-97.3 18.2-131.4 29.6-28.2 72.1-40.1 114.3-31.6 55.7 11.2 97.3 59.9 97.3 117.1 0 66.2-53.8 120-120 120z" />
    </svg>
    <span className="font-medium">WhatsApp</span>
  </a>
</div>


        {/* Mobile Menu - Sheet/Drawer Implementation */}
        <div className="lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button 
                className={`p-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-electricLime active:scale-90 transition-all duration-300 ${
                  isScrolled ? 'bg-gray-200/50' : 'bg-white/30 backdrop-blur-lg'
                } hover:bg-gray-200/70`}
                aria-label="Toggle Menu"
              >
                <Menu size={28} className={isScrolled ? 'text-jetBlack' : 'text-gray-800'} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[300px] p-0 bg-white/95 backdrop-blur-xl">
              <div className="flex flex-col h-full">
                <div className="p-6 pb-3 border-b border-gray-100">
                  <span className="text-2xl font-sora font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-electricLime to-neonEmerald tracking-tight">
                    VACHAN MOTORS
                  </span>
                </div>
                
                <nav className="flex-grow overflow-auto px-6 py-10">
                  <div className="flex flex-col space-y-3">
                    {navItems.map(item => (
                      <Link 
                        key={item.path} 
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`p-4 text-base font-sora font-semibold rounded-xl transition-all duration-300 ${
                          location.pathname === item.path 
                            ? 'bg-gradient-to-r from-electricLime/20 to-neonEmerald/20 text-jetBlack' 
                            : 'text-gray-700 hover:bg-gray-100/50 hover:text-electricLime hover:scale-105'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </nav>
                
                <div className="p-6 space-y-4 border-t border-gray-100 bg-gray-50/50">
                  {/* <Button 
                    variant="outline" 
                    className="w-full border-2 border-electricLime text-jetBlack bg-transparent hover:bg-electricLime/10 rounded-full py-6 text-lg font-sora font-semibold transform hover:scale-105 transition-all duration-300"
                  >
                    Dealer Login
                  </Button> */}
                  <Button 
                    className="w-full bg-gradient-to-r from-electricLime to-neonEmerald text-jetBlack rounded-full py-6 text-lg font-sora font-semibold hover:shadow-xl hover:shadow-electricLime/30 transform hover:scale-105 transition-all duration-300"
                  >
                    Test Drive
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;