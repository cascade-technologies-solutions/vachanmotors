import { useState, useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type TestimonialType = {
  id: number;
  name: string;
  role: string;
  company?: string;
  quote: string;
  avatar?: string;
  type: 'customer' | 'dealer' | 'fleet';
};

const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Auto Driver',
    quote: 'The PASS 1+3 has transformed my daily income. I save ₹400 per day on fuel costs!',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    type: 'customer'
  },
  {
    id: 2,
    name: 'Arjun Reddy',
    role: 'Dealer',
    company: 'EV Motors Hyderabad',
    quote: 'Vachan Motors provides the best after-sales support in the industry. My customers love their reliability.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    type: 'dealer'
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Fleet Manager',
    company: 'GreenCabs Ltd.',
    quote: "We've converted our entire fleet to Vachan vehicles. Maintenance costs are down 40% and drivers report higher satisfaction.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    type: 'fleet'
  },
  {
    id: 4,
    name: 'Mahesh Iyer',
    role: 'Delivery Partner',
    company: 'QuickDelivery',
    quote: 'The 200km range is real! I complete all my deliveries on a single charge and the cargo space is perfect.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    type: 'customer'
  },
  {
    id: 5,
    name: 'Lakshmi Narayan',
    role: 'Dealer',
    company: 'Green Auto Hub',
    quote: 'The new PASS 1+6 model has been our bestseller since launch. Vachan Motors understands what the market needs.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    type: 'dealer'
  }
];

const TestimonialBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const scrollToTestimonial = (index: number) => {
    setActiveIndex(index);
    const container = scrollRef.current;
    const targetCard = container?.children[index] as HTMLElement;

    if (container && targetCard) {
      container.scrollTo({
        left: targetCard.offsetLeft,
        behavior: 'smooth'
      });
    }
  };

  const handlePrevious = () => {
    const newIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    scrollToTestimonial(newIndex);
  };

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % testimonials.length;
    scrollToTestimonial(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="relative bg-gradient-to-r from-jetBlack to-gray-900 py-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-2xl font-sora font-bold text-white mb-2">
              What Our Users Say
            </h3>
            <div className="w-20 h-1 bg-electricLime"></div>
          </div>
          <div className="flex items-center space-x-3">
            <Button onClick={handlePrevious} variant="outline" size="icon" className="rounded-full border-gray-600 text-gray-300 hover:text-white hover:border-electricLime">
              <ArrowLeft size={18} />
            </Button>
            <Button onClick={handleNext} variant="outline" size="icon" className="rounded-full border-gray-600 text-gray-300 hover:text-white hover:border-electricLime">
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>

        <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory space-x-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full md:min-w-[calc(33.333%-1rem)] flex-shrink-0 snap-start">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 h-full border border-white/10 hover:border-electricLime/30 transition-all duration-300 flex flex-col">
                <Quote size={24} className="text-electricLime mb-4" />
                <p className="text-white/80 flex-grow mb-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 border-2 border-electricLime">
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback className="bg-electricLime text-jetBlack">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToTestimonial(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                activeIndex === index ? 'bg-electricLime' : 'bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialBar;
