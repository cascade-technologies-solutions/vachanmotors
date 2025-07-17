import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Check, Zap, Award, BatteryCharging, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import PageLayout from '@/components/layout/PageLayout';
import heroImage1 from '../assets/L5_Cargo-Group.png';
import heroImage2 from '../assets/L3_Pass_Group.png';
import heroImage3 from '../assets/L5C.png';
import heroImage4 from '../assets/L3_Pass-4.png';
import heroImage5 from '../assets/L5_Passenger-Group.png';
import p7 from '../assets/Gaja-P.png';
import p4 from '../assets/L3_Pass-4.png';

const statsData = [
  { id: 1, label: 'Range Per Charge', value: '200', unit: 'KM' },
  { id: 2, label: 'Dealers Nationwide', value: '2', unit: '+' },
  { id: 3, label: 'Cities Covered', value: '1', unit: '+' }
];

const featuresData = [
  {
    id: 1,
    title: 'Fast Charging',
    icon: <Zap className="h-6 w-6 md:h-8 md:w-8 text-orange-500" />
  },
  {
    id: 2,
    title: 'Extended Battery Life',
    icon: <BatteryCharging className="h-6 w-6 md:h-8 md:w-8 text-orange-500" />
  },
  {
    id: 3,
    title: 'Low Running Cost',
    icon: <TrendingDown className="h-6 w-6 md:h-8 md:w-8 text-orange-500" />
  },
  {
    id: 4,
    title: 'Award Winning Design',
    icon: <Award className="h-6 w-6 md:h-8 md:w-8 text-orange-500" />
  }
];

const productsData = [
  {
    id: 1,
    name: 'Jeeva-P',
    description: 'Perfect for passenger transport in urban environments',
    image: p4,
    features: ['130 KM Range', 'Fast Charging', 'Comfortable Seating', 'Advanced Safety']
  },
  {
    id: 2,
    name: 'Gaja-P',
    description: 'Designed for maximum capacity and comfort',
    image: p7,
    features: ['200 KM Range', 'Enhanced Suspension', 'Spacious Interior', 'High Durability']
  }
];

const heroImages = [
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5
];

const useCounterAnimation = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return { count, ref: elementRef };
};

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const counter1 = useCounterAnimation(parseInt(statsData[0].value));
  const counter2 = useCounterAnimation(parseInt(statsData[1].value));
  const counter3 = useCounterAnimation(parseInt(statsData[2].value));
  const counters = [counter1, counter2, counter3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageLayout>
      <style>
        {`
          @keyframes fadeInScale {
            0% {
              opacity: 0;
              transform: scale(0.8);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-fade-in-scale {
            animation: fadeInScale 0.8s ease-out forwards;
          }
          .animation-delay-200 {
            animation-delay: 0.2s;
          }
          .animation-delay-400 {
            animation-delay: 0.4s;
          }
          .animation-delay-600 {
            animation-delay: 0.6s;
          }
        `}
      </style>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Hero ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-contain bg-gradient-to-t from-transparent to-black transition-opacity duration-1000 ${
                currentImage === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center lg:justify-start">
            <div className="text-center lg:text-left px-4 sm:px-6 md:px-8 lg:pl-16 max-w-2xl pt-40 sm:pt-0">
            {/* <div className="w-20 h-1 bg-electricLime mb-8"></div> */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 mb-2 sm:mb-4 animate-fade-in-scale ">
                Electrifying India
              </h1>
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-white animate-fade-in-scale animation-delay-200">
                Driving the Future
              </span>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-2 sm:gap-4 animate-fade-in-scale animation-delay-400">
                <Button
                  asChild
                  className="bg-[#D4FF00] text-black hover:bg-orange-500 text-xs sm:text-base md:text-lg px-3 sm:px-6 py-1 sm:py-2 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <Link to="/products">Explore Models</Link>
                </Button>
                <Button
                  asChild
                  className="bg-[#D4FF00] text-black hover:bg-orange-500 text-xs sm:text-base md:text-lg px-3 sm:px-6 py-1 sm:py-2 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <Link to="/contact">Dealer Enquiry</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
            {statsData.map((stat, index) => {
              const { count, ref } = counters[index] || { count: 0, ref: null };
              return (
                <div 
                  key={stat.id} 
                  ref={ref}
                  className="p-2 sm:p-4 md:p-6 rounded-lg"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sora font-bold mb-1 sm:mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">
                    {count}{stat.unit}
                  </div>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 sm:mb-4">Engineered for Excellence: Our Premium Electric Vehicles</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 text-center mb-2 sm:mb-4 max-w-2xl sm:max-w-3xl mx-auto">
            Drive the change with electric power built for tomorrow.
            Crafted for comfort, performance, and a cleaner planet.
            Where smart engineering meets everyday mobility.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {productsData.map((product) => (
              <Card 
                key={product.id} 
                className="overflow-hidden border-0 shadow-lg"
              >
                <div className="relative overflow-hidden">
                <img 
  src={product.image} 
  alt={product.name}
  className="w-full h-72 sm:h-80 md:h-96 object-contain bg-white transition-transform duration-500 hover:scale-105"
/>


                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-2 sm:p-4 text-white">
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">{product.name}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-2 sm:p-4">
                  <p className="text-gray-600 mb-1 sm:mb-2 text-sm sm:text-base">{product.description}</p>
                  <div className="mb-1 sm:mb-2">
                    <h4 className="text-xs sm:text-sm uppercase font-semibold text-gray-500 mb-1">Key Features</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-1 sm:gap-2 text-gray-700 text-xs sm:text-sm">
                          <Check size={12} sm:size={14} md:size={16} className="text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-black text-xs sm:text-sm md:text-base"
                  >
                    <Link to={`/products#${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      View Details
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 sm:mb-4">Why Choose Us</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 text-center mb-2 sm:mb-4 max-w-2xl sm:max-w-3xl mx-auto">
            We don't just build electric vehicles — we build trust, performance, and a cleaner future with every mile.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
            {featuresData.map((feature, index) => (
              <div 
                key={feature.id}
                className="p-2 sm:p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-1 sm:mb-2 flex justify-center">{feature.icon}</div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">Ready to Make the Switch?</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-4 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
            Join hundred of satisfied drivers who have already made the smart choice for their business and the environment.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <Button 
              asChild
              className="bg-gradient-to-r from-green-400 to-green-500 text-black hover:opacity-90 text-xs sm:text-sm md:text-base px-2 sm:px-4 py-1 sm:py-2 rounded-md font-semibold"
            >
              <Link to="/service-centers">
                Find Nearest Dealer
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;