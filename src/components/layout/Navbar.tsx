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
          <span className={`text-2xl md:text-3xl font-sora font-extrabold tracking-tight ${
            (!isScrolled && !mobileMenuOpen) ? 'bg-clip-text text-transparent bg-gradient-to-r from-electricLime to-neonEmerald' : 'text-jetBlack'
          }`}>
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
        <div className="hidden lg:flex items-center space-x-6 ">
          <a 
            href="https://wa.me/+917204703202" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white rounded-full px-4 py-2 flex items-center space-x-2 transition-all duration-300 shadow-lg bg-green-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.068-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
            <span className="font-medium ">WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu - Sheet/Drawer Implementation */}
        <div className="lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                className={`p-3 rounded-full focus:outline-none active:scale-90 transition-all duration-300 ${
                  isScrolled ? 'bg-gray-200/50' : 'bg-white/30 backdrop-blur-lg'
                } hover:bg-gray-200/70`}
                aria-label="Toggle Menu"
              >
                <Menu size={28} className={isScrolled ? 'text-jetBlack' : 'text-gray-800'} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[300px] p-0 bg-white/95 backdrop-blur-xl">
              <div className="flex flex-col h-full">
                <div className="p-6 pb-3 border-b border-gray-100">
                  <span className="text-2xl font-sora font-extrabold text-jetBlack tracking-tight">
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
                
                <div className="p-6 space-y-4 border-t border-gray-100">
                  {/* <Button 
                    variant="outline" 
                    className="w-full border-2 border-electricLime text-jetBlack bg-transparent hover:bg-electricLime/10 rounded-full py-6 text-lg font-sora font-semibold transform hover:scale-105 transition-all duration-300"
                  >
                    Dealer Login
                  </Button> */}
                  {/* <Button 
                    className="w-full bg-gradient-to-r from-electricLime to-neonEmerald text-jetBlack rounded-full py-6 text-lg font-sora font-semibold hover:shadow-xl hover:shadow-electricLime/30 transform hover:scale-105 transition-all duration-300"
                  >
                    Test Drive
                  </Button> */}
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