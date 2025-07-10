import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useState } from 'react';

const Footer = () => {
  const isMobile = useIsMobile();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!email || !isValidEmail) {
      setError(true);
      setMessage('Please provide a valid email address.');
    } else {
      setError(false);
      setMessage('Subscribed successfully!');
      setEmail('');
    }

    setTimeout(() => setMessage(''), 5000);
  };

  return (
    <footer className="bg-jetBlack text-white pt-12 md:pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-electricLime to-neonEmerald">
              VACHAN MOTORS
            </h3>
            <p className="text-gray-300 text-sm md:text-base">
              Electrifying India, One Ride at a Time. Premium electric three-wheeler manufacturer focused on sustainability and innovation.
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-gray-400 hover:text-electricLime transition-colors" aria-label="Facebook">
                <Facebook size={isMobile ? 18 : 20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-electricLime transition-colors" aria-label="Instagram">
                <Instagram size={isMobile ? 18 : 20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-electricLime transition-colors" aria-label="Twitter">
                <Twitter size={isMobile ? 18 : 20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-electricLime transition-colors" aria-label="LinkedIn">
                <Linkedin size={isMobile ? 18 : 20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-electricLime transition-colors" aria-label="YouTube">
                <Youtube size={isMobile ? 18 : 20} />
              </a> */}
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
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-electricLime transition-colors text-sm md:text-base">About Us</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-electricLime transition-colors text-sm md:text-base">Products</Link></li>
              <li><Link to="/service-centers" className="text-gray-300 hover:text-electricLime transition-colors text-sm md:text-base">Service Centers</Link></li>
              {/* <li><Link to="/testimonials" className="text-gray-300 hover:text-electricLime transition-colors text-sm md:text-base">Testimonials</Link></li> */}
              <li><Link to="/contact" className="text-gray-300 hover:text-electricLime transition-colors text-sm md:text-base">Contact</Link></li>
              {/* <li><a href="#" className="text-gray-300 hover:text-electricLime transition-colors text-sm md:text-base">Careers</a></li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-3 md:mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={isMobile ? 16 : 18} className="mr-2 text-electricLime mt-1 flex-shrink-0" />
                <p>Vachan Motors Pvt. Ltd. B25, Industrial Estate 1st Gate, Gokul Road, Hubballi – 580030</p>
              </li>
              <li className="flex items-center">
                <Phone size={isMobile ? 16 : 18} className="mr-2 text-electricLime flex-shrink-0" /> 
                <a href="tel:+919035082973" className="text-gray-300 hover:text-electricLime transition-colors text-sm md:text-base">+91 90350-82973  / +91 90350-82974</a>
              </li>
              <li className="flex items-center">
                <Mail size={isMobile ? 16 : 18} className="mr-2 text-electricLime flex-shrink-0" />
                <a href="mailto:vachanmpl@gmail.com" className="text-gray-300 hover:text-electricLime transition-colors text-sm md:text-base truncate">vachanmpl@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-3 md:mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4 text-sm md:text-base">
              Subscribe to our newsletter for updates on new models, features, and company news.
            </p>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-electricLime"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email for newsletter"
              />
              <Button 
                type="submit"
                className="w-full bg-electricLime text-jetBlack hover:bg-neonEmerald hover:text-white transition-colors"
              >
                Subscribe
              </Button>
              {message && (
                <p className={`text-sm ${error ? 'text-red-500' : 'text-green-500'}`}>{message}</p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8 mt-6 md:mt-8 text-center">
          <p className="text-gray-400 text-sm md:text-base">© {new Date().getFullYear()} Vachan Motors Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 text-sm">
            <a href="#" className="hover:text-electricLime transition-colors text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-electricLime transition-colors text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-electricLime transition-colors text-gray-400">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
