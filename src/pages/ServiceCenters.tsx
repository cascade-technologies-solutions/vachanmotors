import { useState } from 'react';
import { MapPin, Search, ChevronDown, ChevronRight, Wrench, BatteryFull, Cog, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import PageLayout from '@/components/layout/PageLayout';
import serviceimg from '../assets/L3_Pass_Group.png';

interface ServiceCenter {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  coordinates: [number, number];
}

interface CityData {
  name: string;
  centers: ServiceCenter[];
}

const serviceCentersData: CityData[] = [
  {
    name: 'Hubballi',
    centers: [
      {
        id: 1,
        name: 'Vachan Motors',
        address: 'B25, Industrial Estate 1st Gate, Gokul Road, Hubballi – 580030',
        phone: '+91 99451-82730',
        email: 'vachanmpl@gmail.com',
        coordinates: [15.351989421375597, 75.11452588014835]
      },
    ]
  }
];

const ServiceCenters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCenter, setSelectedCenter] = useState<ServiceCenter | null>(null);
  
  const filteredCities = serviceCentersData.filter(city => 
    city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    city.centers.some(center => 
      center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      center.address.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const openBookingForm = (center: ServiceCenter) => {
    setSelectedCenter(center);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[70vh] flex items-center bg-grey-800 text-white overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={serviceimg}
            alt="Contact us"
            className="w-full h-full object-contain opacity-100"
            style={{ minHeight: '100%', minWidth: '100%' }}
            onError={(e) => {
              console.error(`Image failed to load: ${serviceimg}`);
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <div className="w-20 h-1 bg-electricLime mb-8"></div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Service Centers <span className="text-orange-500">Network</span>
            </h1>
            {/* <p className="text-xl md:text-2xl mb-8 opacity-90">
              Find your nearest Vachan Motors service center for maintenance, repairs, and support.
            </p> */}
            
            {/* <div className="relative max-w-md">
              <Input
                type="text"
                placeholder="Search by city or address..."
                value={searchTerm}
                onChange={handleSearch}
                className="pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/70 focus:border-electricLime focus-visible:ring-electricLime"
              />
              <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white/70" size={18} />
            </div> */}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="col-span-1 order-2 lg:order-1">
              <h2 className="text-2xl font-bold mb-6">Find a Center Near You</h2>
              
              {filteredCities.length > 0 ? (
                <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm border">
                  {filteredCities.map((city, index) => (
                    <AccordionItem key={index} value={city.name}>
                      <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-gray-50">
                        <div className="flex items-center">
                          <MapPin className="mr-2 text-electricLime" size={18} />
                          <span>{city.name}</span>
                          <span className="ml-2 bg-electricLime text-xs text-jetBlack px-2 py-1 rounded-full">
                            {city.centers.length}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4">
                        {city.centers.map((center) => (
                          <div key={center.id} className="py-3 border-b border-gray-100 last:border-0">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium">{center.name}</h4>
                                <p className="text-sm text-gray-600 mt-1">{center.address}</p>
                                <p className="text-sm text-gray-600 mt-1">{center.phone}</p>
                              </div>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button 
                                    size="sm"
                                    onClick={() => openBookingForm(center)}
                                    className="bg-electricLime text-jetBlack hover:bg-neonEmerald hover:text-white"
                                  >
                                    Book Service
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                  <DialogHeader>
                                    <DialogTitle>Book Service Appointment</DialogTitle>
                                  </DialogHeader>
                                  <div className="py-4">
                                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                                      <h4 className="font-medium">{selectedCenter?.name}</h4>
                                      <p className="text-sm text-gray-600">{selectedCenter?.address}</p>
                                      <p className="text-sm text-gray-600">{selectedCenter?.phone}</p>
                                    </div>
                                    <form className="space-y-4">
                                      <div>
                                        <label className="text-sm font-medium block mb-1">Full Name</label>
                                        <Input type="text" placeholder="Your Name" />
                                      </div>
                                      <div>
                                        <label className="text-sm font-medium block mb-1">Phone Number</label>
                                        <Input type="tel" placeholder="+91 12345 67890" />
                                      </div>
                                      <div>
                                        <label className="text-sm font-medium block mb-1">Vehicle Model</label>
                                        <select className="w-full rounded-md border border-gray-300 py-2 px-3">
                                          <option value="">Select Vehicle Model</option>
                                          <option value="PASS 1+3">Gaja-P</option>
                                          <option value="PASS 1+3">Jeeva-P</option>
                                          <option value="PASS 1+3">Bhoomi-P</option>
                                          <option value="PASS 1+6">Gaja-L</option>
                                          <option value="PASS 1+6">Gaja-C</option>
                                          <option value="PASS 1+6">Jeeva-L</option>
                                        </select>
                                      </div>
                                      <div>
                                        <label className="text-sm font-medium block mb-1">Preferred Date</label>
                                        <Input type="date" />
                                      </div>
                                      <div>
                                        <label className="text-sm font-medium block mb-1">Service Type</label>
                                        <select className="w-full rounded-md border border-gray-300 py-2 px-3">
                                          <option value="">Select Service Type</option>
                                          <option value="Regular Maintenance">Regular Maintenance</option>
                                          <option value="Repair">Repair</option>
                                          <option value="Battery Service">Battery Service</option>
                                          <option value="Other">Other</option>
                                        </select>
                                      </div>
                                      <Button 
                                        type="submit" 
                                        className="w-full bg-electricLime text-jetBlack hover:bg-neonEmerald hover:text-white"
                                      >
                                        Submit Booking
                                      </Button>
                                    </form>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center p-8 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">No service centers found matching your search.</p>
                  <Button 
                    variant="link" 
                    onClick={() => setSearchTerm('')}
                    className="mt-2 text-electricLime"
                  >
                    Clear search
                  </Button>
                </div>
              )}
            </div>

            <div className="col-span-2 order-1 lg:order-2">
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md h-[600px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3847.451973809068!2d75.111951!3d15.3519894!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDIxJzA3LjIiTiA3NcKwMDYnNTIuMyJF!5e0!3m2!1sen!2sin!4v1749721799671!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Service Centers Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-3">🛠️ Our Services</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
           At Vachan Motors, we go the extra mile — so you can too. Our full-service ecosystem ensures your electric vehicle stays powerful, protected, and always road-ready.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Expert Maintenance',
                // description: 'Stay smooth, stay strong our scheduled servicing keeps your EV in peak condition for the long haul.',
                icon: <Wrench size={31} className="text-orange-500" />,
              },
              {
                title: 'Advanced Battery Care',
                // description: 'From diagnostics to upgrades, we optimize battery life so your journeys never fall short.',
                icon: <BatteryFull size={31} className="text-orange-500" />,
              },
              {
                title: 'Genuine Repairs & Parts',
                // description: 'Fast fixes, trusted parts — all handled by trained technicians using 100% Vachan-certified components.',
                icon: <Cog size={31} className="text-orange-500" />,
              },
              {
                title: '24/7 Roadside Assistance',
                // description: 'Because peace of mind should come standard. We’ve got your back, wherever the road takes you.',
                icon: <AlertTriangle size={31} className="text-orange-500" />,
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="p-8 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-electricLime hover:shadow-md flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-3">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Find answers to common questions about our service centers and maintenance.
          </p>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="bg-white">
              {[
                {
                  question: 'How often should I service my Vachan EV?',
                  answer: 'We recommend servicing your Vachan electric vehicle every 10,000 km or every 6 months, whichever comes first. Regular maintenance ensures optimal performance and extends the lifespan of your vehicle.'
                },
                {
                  question: 'Do I need an appointment for service?',
                  answer: 'While walk-ins are welcome, we recommend booking an appointment to ensure prompt service and minimize wait times. You can book through our website, mobile app, or by calling your nearest service center directly.'
                },
                {
                  question: 'What is covered under warranty?',
                  answer: 'Our standard warranty covers all manufacturing defects for 3 years or 80,000 km.'
                },
                {
                  question: 'How long does a typical service take?',
                  answer: 'A standard maintenance service typically takes 2-3 hours. More extensive repairs may require longer. We offer loaner vehicles or pickup/drop services at most locations to minimize inconvenience.'
                },
                {
                  question: 'Can I get service from any Vachan center?',
                  answer: 'Yes, all our service centers are equipped to handle any Vachan Motors vehicle. You can visit any center nationwide regardless of where you purchased your vehicle.'
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="hover:no-underline text-left py-4">
                    <span className="font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-electricLime">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-jetBlack">Need emergency assistance?</h2>
              <p className="text-jetBlack/80 mt-2">Our 24/7 helpline is always available to support you.</p>
            </div>
            <div>
              <Button 
                size="lg"
                className="bg-jetBlack text-white hover:bg-gray-800"
              >
                Call Helpline: +91 90350-82974
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServiceCenters;