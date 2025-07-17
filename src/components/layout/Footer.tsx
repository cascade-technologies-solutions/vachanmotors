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
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
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
