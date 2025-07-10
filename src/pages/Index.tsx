import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Zap, Battery, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import PageLayout from '@/components/layout/PageLayout';
import ResponsiveImage from '@/components/shared/ResponsiveImage';
import { useIsMobile, useIsTablet } from '@/hooks/use-mobile';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type { SwiperRef } from 'swiper/react';
import p4 from '../assets/L3_Pass-4.png';
import p7 from '../assets/Gaja-P.png';

const statsData = [
  { id: 1, label: 'Range Per Charge', value: '200', unit: 'KM' },
  { id: 2, label: 'Dealers Nationwide', value: '2', unit: '+' },
  { id: 3, label: 'Cities Covered', value: '1', unit: '+' }
];

const featuresData = [
  {
    id: 1,
    title: 'Fast Charging',
    description: 'Charge overnight and hit the road fully powered — no downtime, no disruptions.',
    icon: <Zap className="h-6 w-6 md:h-8 md:w-8 text-green-500" /> // Fallback for undefined text-electricLime
  },
  {
    id: 2,
    title: 'Extended Battery Life',
    description: 'Our batteries are designed to last 2000+ charging cycles, giving you years of reliable service.',
    icon: <Battery className="h-6 w-6 md:h-8 md:w-8 text-green-500" />
  },
  {
    id: 3,
    title: 'Low Running Cost',
    description: 'Save up to ₹400 per day compared to conventional fuel vehicles.',
    icon: <Clock className="h-6 w-6 md:h-8 md:w-8 text-green-500" />
  },
  {
    id: 4,
    title: 'Award Winning Design',
    description: 'Recognized for innovation and ergonomics with multiple industry awards.',
    icon: <Award className="h-6 w-6 md:h-8 md:w-8 text-green-500" />
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
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const swiperRef = useRef<SwiperRef>(null);
  const [initialFast, setInitialFast] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const counter1 = useCounterAnimation(parseInt(statsData[0].value));
  const counter2 = useCounterAnimation(parseInt(statsData[1].value));
  const counter3 = useCounterAnimation(parseInt(statsData[2].value));
  const counters = [counter1, counter2, counter3];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (swiperRef.current?.swiper && initialFast) {
      swiperRef.current.swiper.autoplay.start();
      timeout = setTimeout(() => {
        setInitialFast(false);
        if (swiperRef.current?.swiper) {
          swiperRef.current.swiper.autoplay.stop();
          swiperRef.current.swiper.autoplay.start();
        }
      }, 10000);
    }
    const imageLoadTimeout = setTimeout(() => setIsLoading(false), 2000);
    return () => {
      clearTimeout(timeout);
      clearTimeout(imageLoadTimeout);
    };
  }, [initialFast]);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-[80px] min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen flex items-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          {isLoading ? (
            <div className="w-full h-full bg-gray-300 animate-pulse" />
          ) : (
            <Swiper
              ref={swiperRef}
              modules={[Pagination, Autoplay]}
              autoplay={{ delay: initialFast ? 2000 : 5000, disableOnInteraction: false }}
              pagination={{ clickable: true, dynamicBullets: true }}
              loop={true}
              className="w-full min-h-0 md:h-full" // Dynamic height for mobile, full height for desktop
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 0 },
                640: { slidesPerView: 1, spaceBetween: 0 },
                1024: { slidesPerView: 1, spaceBetween: 0 }
              }}
            >
              {[
                '/vachanamotors/assets/L3.png',
                '/vachanamotors/assets/DS.png',
                '/vachanamotors/assets/L5C.png',
                '/vachanamotors/assets/L3C.png',
                '/vachanamotors/assets/L5.png'
              ].map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full min-h-0 md:h-full pt-[64px]"> {/* Offset for mobile navbar, full height for desktop */}
                    <img
                      src={src}
                      alt={`Slide ${index + 1}`}
                      className="w-full object-cover sm:object-contain" // object-cover for desktop, object-contain for mobile (sm+)
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
                        setIsLoading(false);
                      }}
                    />
                    {/* Light overlay for readability */}
                    <div className="absolute inset-0 bg-black/20 backdrop-brightness-[0.9]" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-3xl text-orange-500 sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Electrifying India
            </h1>
            <h2>
              <span className="text-white block mt-2">Driving the Future.</span>
            </h2>
            <br />
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Button
                asChild
                className="bg-green-500 text-black hover:bg-green-600 hover:text-white flex items-center gap-2 text-base md:text-lg px-5 py-5 md:px-8 md:py-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300" // Fallback for undefined classes
              >
                <Link to="/products">
                  Explore Models <ArrowRight size={isMobile ? 16 : 18} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-green-600 text-black hover:bg-green-500 hover:text-white flex items-center gap-2 text-base md:text-lg px-5 py-5 md:px-8 md:py-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300" // Fallback
              >
                <Link to="/contact">
                  Dealer Enquiry
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            {statsData.map((stat, index) => {
              const { count, ref } = counters[index] || { count: 0, ref: null }; // Fallback for index mismatch
              return (
                <div 
                  key={stat.id} 
                  ref={ref}
                  className="p-4 md:p-8 rounded-lg"
                >
                  <div className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600"> {/* Fallback colors */}
                    {count}{stat.unit}
                  </div>
                  <p className="text-base md:text-lg text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="py-12 md:py-20 bg-gray-50">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 md:mb-4">Engineered for Excellence: Our Premium Electric Vehicles</h2>
    <p className="text-lg md:text-xl text-gray-600 text-center mb-8 md:mb-12 max-w-3xl mx-auto">
      Drive the change with electric power built for tomorrow.
Crafted for comfort, performance, and a cleaner planet.
Where smart engineering meets everyday mobility.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
      {productsData.map((product) => (
        <Card 
          key={product.id} 
          className="overflow-hidden border-0 shadow-lg"
        >
          <div className="relative overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full object-contain transition-transform duration-500 hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 md:p-6 text-white">
                <h3 className="text-xl md:text-2xl font-bold">{product.name}</h3>
              </div>
            </div>
          </div>
          <CardContent className="p-4 md:p-6">
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="mb-5 md:mb-6">
              <h4 className="text-sm uppercase font-semibold text-gray-500 mb-2">Key Features</h4>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700 text-sm md:text-base">
                    <Check size={isMobile ? 14 : 16} className="text-green-500" /> {/* Fallback color */}
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Button 
              asChild
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-black" // Fallback colors
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
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 md:mb-4">Why Choose Us</h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-8 md:mb-12 max-w-3xl mx-auto">
            We don’t just build electric vehicles — we build trust, performance, and a cleaner future with every mile..
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuresData.map((feature, index) => (
              <div 
                key={feature.id}
                className="p-4 md:p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-3 md:mb-4">{feature.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Ready to Make the Switch?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
            Join hundred of satisfied drivers who have already made the smart choice for their business and the environment.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {/* <Button 
              asChild
              className="bg-green-500 text-black hover:bg-green-600 hover:text-white text-base md:text-lg px-5 py-5 md:px-8 md:py-6" // Fallback
            >
              <Link to="/contact">
                Book a Test Drive
              </Link>
            </Button> */}
            <Button 
              asChild
              className="bg-gradient-to-r from-electricLime to-neonEmerald text-black hover:opacity-90 text-base md:text-lg px-5 py-5 md:px-8 md:py-6 rounded-full font-semibold"
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