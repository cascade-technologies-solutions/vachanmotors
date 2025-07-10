
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/layout/PageLayout';
import aboutimg from '../assets/L5_Passenger-Group.png';
import aboutimg1 from '../assets/L3_Pass-with_people.png';


const milestones = [
  {
    year: 2022,
    title: 'Conceptualization',
    description: 'Vachan Motors was established with a vision to revolutionize urban transportation in India.'
  },
  {
    year: 2022,
    title: 'Planning & R&D',
    description: 'Initiated in-depth research and development to design our first line of advanced electric three-wheelers.'
  },
  {
    year: 2023,
    title: 'Registration & First Prototype',
    description: 'Our first electric three-wheeler prototype was developed and tested rigorously.'
  },
  {
    year: 2023,
    title: 'Production Begins',
    description: 'Launched our first Product (JEEVA) in Hubballi and began limited production.'
  },
  {
    year: 2024,
    title: 'Product Expansion',
    description: 'We introduced BHOOMI & GAJA to market .'
  },
  {
    year: 2024,
    title: 'Reaching the Demand ',
    description: 'Production of our all 3 models to meet desired demand.'
  },
  {
    year: 2025,
    title: 'National Presence',
    description: 'READY FOR EXPANSION.'
  },
];

const values = [
  {
    title: 'Innovation',
    description: 'We challenge conventions and engineer smart, future-ready EV solutions that redefine mobility.'
  },
  {
    title: 'Sustainability',
    description: 'From design to delivery, we build with the planet in mind — reducing emissions, waste, and noise.'
  },
  {
    title: 'Reliability',
    description: 'Our vehicles are built to last — tough, dependable, and ready for every journey, every day.'
  },
  {
    title: 'Accessibility',
    description: 'We believe electric mobility should be for everyone — that’s why we make it affordable and available across India.'
  }
];

const About = () => {
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineItemElements = timelineRef.current.querySelectorAll('.timeline-item');
      timelineItemElements.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.7 && rect.bottom >= 0;
        
        if (isVisible) {
          setActiveTimelineItem(index);
          item.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[70vh] flex items-center bg-grey-800 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
             src={aboutimg}
             alt="Contact us"
             className="w-full h-full object-cover md:object-contain opacity-100 "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <div className="w-20 h-1 bg-electricLime mb-8"></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
             ⚡ Our Journey to <span className="text-electricLime">Power a Greener</span> India
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              From bold ideas to powerful electric rides, Vachan Motors is leading a movement — redefining mobility with innovation, purpose, and a cleaner tomorrow in every mile.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story  From Vision to Voltage: The Vachan Motors Journey</h2>
              <p className="text-lg text-gray-700 mb-4">
                In a quiet workshop in Hubballi, a bold idea sparked — what if the future of Indian mobility wasn’t noisy, polluting, or unreliable? That idea became Vachan Motors, born to challenge the status quo with rugged, smart, and fully electric 3-wheelers crafted for the Indian dream. Every model that rolls out carries more than engineering — it carries intent, pride, and purpose. From city corners to country roads, Vachan is rewriting what it means to move forward.
              </p>
              <p className="text-lg text-gray-700 mb-6">
               What began as a blueprint in 2023 quickly evolved into a national movement. With relentless R&D, local ingenuity, and a deep commitment to sustainability, Vachan Motors has built more than vehicles — it’s built trust. Drivers count on us. Dealers partner with us. Communities grow because of us. And as the wheels turn, so does India’s journey into a cleaner, quieter tomorrow.
              </p>
              
              <div className="space-y-3 mb-8">
                {['Made in India, for India', 'Built for durability and reliability', 'Backed by cutting-edge technology'].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 text-neonEmerald flex-shrink-0" />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={aboutimg1}
                alt="Vachan Motors team" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-lg bg-electricLime -z-10"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 rounded-lg border-2 border-electricLime -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Values</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
           At Vachan Motors, our core values are more than words they’re the driving force behind every innovation, every partnership, and every electric mile. From bold engineering to heartfelt service, we lead with purpose, passion, and integrity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="p-8 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-electricLime hover:shadow-md transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-12 rounded-full bg-electricLime/20 flex items-center justify-center mb-6">
                  <div className="w-6 h-6 rounded-full bg-electricLime"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            From a small startup to a national presence, follow our growth story through the years.
          </p>

          <div ref={timelineRef} className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gray-200 -translate-x-1/2 z-0"></div>

            {/* Timeline Items */}
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`timeline-item flex flex-col md:grid md:grid-cols-2 gap-8 mb-16 relative opacity-60 transition-all duration-500 ${activeTimelineItem >= index ? 'active opacity-100' : ''}`}
              >
                <div className={`md:text-right ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="bg-electricLime text-jetBlack inline-block px-3 py-1 rounded text-sm font-semibold mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>

                <div className={`hidden md:block ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  {/* Empty space for timeline alignment */}
                </div>

                {/* Timeline marker */}
                <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-white border-4 border-electricLime rounded-full -translate-x-1/2 z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Team Section */}
    {/*}  <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Leadership</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Meet the visionaries who are driving our mission forward with expertise and passion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {name: 'Ramesh Kumar', title: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'},
              {name: 'Priya Sharma', title: 'Chief Operations Officer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'},
              {name: 'Ajith Nair', title: 'Chief Technology Officer', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'},
              {name: 'Neha Reddy', title: 'Head of Design', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'}
            ].map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative overflow-hidden group">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-4 text-white w-full">
                      <div className="flex justify-center space-x-4">
                        {/* Social media icons would go here 
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-jetBlack to-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold">Ready to join the electric revolution?</h2>
              <p className="text-gray-300 mt-2">Discover how Vachan Motors can transform your business.</p>
            </div>
            <div>
              <Button 
                asChild
                className="bg-electricLime text-jetBlack hover:bg-neonEmerald hover:text-white flex items-center gap-2"
              >
                <Link to="/contact">
                  Contact Us <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
