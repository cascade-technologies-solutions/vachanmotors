
import { useState } from 'react';
import { Star, Play, Quote } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import PageLayout from '@/components/layout/PageLayout';
import contactimg from '../assets/DS.png';

const testimonialCategories = ['All', 'Customer', 'Dealer', 'Fleet Owner'];

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Auto Driver',
    location: 'Delhi',
    quote: 'The PASS 1+3 has transformed my daily income. I save ₹400 per day on fuel costs, which means I take more money home to my family. The vehicle is comfortable for my passengers and I get more rides because people specifically ask for the electric auto.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    type: 'Customer',
    hasVideo: true,
    videoId: 'dQw4w9WgXcQ'
  },
  {
    id: 2,
    name: 'Arjun Reddy',
    role: 'Dealer',
    company: 'EV Motors Hyderabad',
    location: 'Hyderabad',
    quote: 'Vachan Motors provides the best after-sales support in the industry. My customers love their reliability and I appreciate the business partnership. The sales team is responsive and the training provided to my technicians ensures we can service vehicles properly.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    type: 'Dealer',
    hasVideo: false
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Fleet Manager',
    company: 'GreenCabs Ltd.',
    location: 'Bangalore',
    quote: 'We\'ve converted our entire fleet to Vachan vehicles. Maintenance costs are down 40% and drivers report higher satisfaction. The analytics platform helps us optimize routes and manage charging schedules efficiently. Our customers appreciate our eco-friendly approach too.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    type: 'Fleet Owner',
    hasVideo: true,
    videoId: 'dQw4w9WgXcQ'
  },
  {
    id: 4,
    name: 'Mahesh Iyer',
    role: 'Delivery Partner',
    company: 'QuickDelivery',
    location: 'Chennai',
    quote: 'The 200km range is real! I complete all my deliveries on a single charge and the cargo space is perfect. Even during monsoon season, the vehicle performs flawlessly and keeps my packages dry.',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    type: 'Customer',
    hasVideo: false
  },
  {
    id: 5,
    name: 'Lakshmi Narayan',
    role: 'Dealer',
    company: 'Green Auto Hub',
    location: 'Mumbai',
    quote: 'The new PASS 1+6 model has been our bestseller since launch. Vachan Motors understands what the market needs and delivers vehicles that meet those demands. Their dealer support program is excellent, making it easy to grow my business.',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    type: 'Dealer',
    hasVideo: false
  },
  {
    id: 6,
    name: 'Vikram Singh',
    role: 'Fleet Owner',
    company: 'EcoTransit Solutions',
    location: 'Pune',
    quote: 'We operate a fleet of 50 Vachan vehicles for last-mile connectivity from metro stations. The reliability and low operating costs have significantly improved our profit margins. Passenger feedback has been overwhelmingly positive about the comfortable ride.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    type: 'Fleet Owner',
    hasVideo: true,
    videoId: 'dQw4w9WgXcQ'
  },
  {
    id: 7,
    name: 'Aisha Patel',
    role: 'Auto Driver',
    location: 'Ahmedabad',
    quote: 'As a woman driver, I appreciate the safety features and ease of operation. The automatic transmission makes driving less tiring during long shifts. My daily earnings have increased because customers prefer my clean, quiet EV over traditional autos.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    type: 'Customer',
    hasVideo: false
  },
  {
    id: 8,
    name: 'Sameer Desai',
    role: 'Dealer',
    company: 'Future Mobility',
    location: 'Kolkata',
    quote: 'The training and marketing support from Vachan Motors is outstanding. They helped us establish our dealership and continuously provide resources to help us grow. The product reliability means fewer service issues and happier customers.',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    type: 'Dealer',
    hasVideo: false
  }
];

const statsData = [
  { label: 'Happy Customers', value: '100+' },
  { label: 'Dealer Network', value: '2+' },
  { label: 'Cities Covered', value: '1+' },
  { label: 'KM Traveled', value: '3000KM+' }
];

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }).map((_, index) => (
    <Star 
      key={index}
      size={16}
      className={`${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
    />
  ));
};

const Testimonials = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');

  const filteredTestimonials = activeCategory === 'All'
    ? testimonials
    : testimonials.filter(testimonial => testimonial.type === activeCategory);
  
  const playVideo = (videoId: string) => {
    setCurrentVideoId(videoId);
    setIsVideoOpen(true);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[70vh] flex items-center bg-grey-800 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
             src={contactimg}
             alt="Contact us"
             className="w-full h-full object-cover md:object-contain opacity-100 "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <div className="w-20 h-1 bg-electricLime mb-8"></div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ⚡Voices of Vachan
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <h1 className="text-3.5xl md:text-4xl font-bold mb-4">
              💬What Our Users Say
            </h1>
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Hear it from the road — authentic stories from drivers, dealers, and business owners who trust Vachan Motors to move them forward.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {statsData.map((stat, index) => (
              <div key={index} className="p-4">
                <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-electricLime to-neonEmerald mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Filter Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-10 flex justify-center">
            <Tabs 
              defaultValue="All" 
              value={activeCategory}
              onValueChange={setActiveCategory}
              className="w-full max-w-md"
            >
              <TabsList className="grid grid-cols-4">
                {testimonialCategories.map((category) => (
                  <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
              >
                {/* {testimonial.hasVideo && (
                  <div 
                    className="relative h-48 overflow-hidden cursor-pointer"
                    onClick={() => playVideo(testimonial.videoId)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${testimonial.videoId}/hqdefault.jpg`}
                      alt={`${testimonial.name}'s video testimonial`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center backdrop-blur-sm">
                        <Play size={24} className="text-electricLime ml-1" />
                      </div>
                    </div>
                  </div>
                )} */}
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''} | {testimonial.location}
                      </p>
                      <div className="flex mt-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Quote size={18} className="absolute top-0 left-0 text-electricLime opacity-30" />
                    <p className="pl-6 text-gray-700">{testimonial.quote}</p>
                  </div>
                  
                  <div className="mt-4 flex justify-end">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-800">
                      {testimonial.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video Testimonial
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Featured Stories</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Watch how Vachan Motors is transforming lives and businesses across India.
          </p>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Vachan Motors Customer Stories"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-[400px]"
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">The Electric Revolution: Customer Stories</h3>
              <p className="text-gray-700">
                Hear from our customers about how switching to Vachan Motors electric three-wheelers has 
                improved their businesses, increased their earnings, and reduced their environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Customer Success Metrics */}
      <section className="py-16 bg-gradient-to-r from-jetBlack to-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">The Impact of Going Electric</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="text-5xl font-bold mb-3 text-electricLime">₹400+</div>
              <h3 className="text-xl font-semibold mb-2">Daily Savings</h3>
              <p className="text-gray-300">Average daily operational cost savings reported by drivers.</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold mb-3 text-electricLime">86%</div>
              <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-gray-300">Riders prefer the smooth, quiet experience of our EVs.</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold mb-3 text-electricLime">62%</div>
              <h3 className="text-xl font-semibold mb-2">Reduced Maintenance</h3>
              <p className="text-gray-300">Lower maintenance requirements compared to traditional vehicles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Share Your Story</h2>
            <p className="text-xl text-gray-600 mb-8">
              Are you a Vachan Motors vehicle owner? We'd love to hear about your experience!
            </p>
            <div className="p-8 bg-gray-50 rounded-lg">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electricLime"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electricLime"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Vehicle Model</label>
                    <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electricLime">
                      <option value="">Select Model</option>
                      <option value="PASS 1+3">PASS 1+3</option>
                      <option value="PASS 1+6">PASS 1+6</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">User Type</label>
                    <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electricLime">
                      <option value="">Select Type</option>
                      <option value="Individual Driver">Individual Driver</option>
                      <option value="Fleet Owner">Fleet Owner</option>
                      <option value="Dealer">Dealer</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Your Story</label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-electricLime"
                    placeholder="Share your experience with Vachan Motors..."
                  ></textarea>
                </div>
                {/* <div className="flex items-center">
                  <input type="checkbox" id="consent" className="mr-2" />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I agree that Vachan Motors may use my story for promotional purposes.
                  </label>
                </div> */}
                <button
                  type="submit"
                  className="w-full bg-electricLime text-jetBlack py-3 rounded-md font-medium hover:bg-neonEmerald hover:text-white transition-colors"
                >
                  Submit Your Story
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      Video Dialog
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-3xl p-0 bg-black overflow-hidden">
          <iframe 
            src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`}
            title="Testimonial Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="w-full h-[500px]"
          ></iframe>
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default Testimonials;
