import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/layout/PageLayout';
import contactimg from '../assets/L5_Cargo-Group.png';

const contactInfo = {
  address: 'Vachan Motors Pvt. Ltd. B25, Industrial Estate 1st Gate, Gokul Road, Hubballi – 580030',
  phone: '+91 90350-82973',
  phone2: '+91 90350-82974',
  email: 'vachanmpl@gmail.com',
  hours: 'Monday - Saturday: 9:00 AM - 6:00 PM'
};

const Contact = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('customer');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    phone2: '',
    subject: '',
    message: '',
    companyName: '',
    city: '',
    dealerType: '',
    existingBusiness: '',
    investmentCapacity: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  // const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwFr62GSBhs2cTPAl-AEEeuhLsuALkBbg3S2Z1uogSxfSN6aX3d6D1ZcftyX4qIuIMYTg/exec';
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwFr62GSBhs2cTPAl-AEEeuhLsuALkBbg3S2Z1uogSxfSN6aX3d6D1ZcftyX4qIuIMYTg/exec';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  let payload: any = {};

  if (activeTab === 'customer') {
    payload = {
      formType: 'Customer',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      companyName: formData.companyName,
      city: formData.city,
      dealerType: formData.dealerType,
      existingBusiness: formData.existingBusiness,
      investmentCapacity: formData.investmentCapacity,      
      subject: formData.subject,
      message: formData.message,
    };
  } else if (activeTab === 'dealer') {
    payload = {
      formType: 'Dealer',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      companyName: formData.companyName,
      city: formData.city,
      dealerType: formData.dealerType,
      existingBusiness: formData.existingBusiness,
      investmentCapacity: formData.investmentCapacity,
      message: formData.message,
    };
  }

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    toast({
      title: 'Message Sent!',
      description: "We've received your message and will get back to you soon.",
    });

    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      phone2: '',
      subject: '',
      message: '',
      companyName: '',
      city: '',
      dealerType: '',
      existingBusiness: '',
      investmentCapacity: '',
    });
  } catch (error) {
    console.error('Form submission error:', error);
    toast({
      title: 'Error!',
      description: 'Something went wrong. Please try again later.',
    });
  }
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
              ⚡Get In Touch<span className="text-electricLime"> with Vachan Motors</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Whether you're ready to switch to electric or just have a question — our team is here to support your journey every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Reach Out To Us</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-electricLime/20 flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin className="text-electricLime" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Head Office</h3>
                    <p className="text-gray-600 mt-1">{contactInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-electricLime/20 flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone className="text-electricLime" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600 mt-1">
                      <a href={`tel:${contactInfo.phone}`} className="hover:text-electricLime transition-colors">
                        {contactInfo.phone}
                      </a> 
                      <br />
                      <a href={`tel:${contactInfo.phone2}`} className="hover:text-electricLime transition-colors">
                        {contactInfo.phone2}
                      </a> 
                    </p>
                    {/* <p className="text-gray-500 text-sm mt-1">Toll-Free: 1800-123-4567</p> */}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-electricLime/20 flex items-center justify-center flex-shrink-0 mr-4">
                    <Mail className="text-electricLime" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600 mt-1">
                      <a href={`mailto:${contactInfo.email}`} className="hover:text-electricLime transition-colors">
                        {contactInfo.email}
                      </a>
                    </p>
                   
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-electricLime/20 flex items-center justify-center flex-shrink-0 mr-4">
                    <Clock className="text-electricLime" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Business Hours</h3>
                    <p className="text-gray-600 mt-1">{contactInfo.hours}</p>
                    <p className="text-gray-500 text-sm mt-1">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-semibold text-xl mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  {/* {['facebook', 'twitter', 'instagram', 'linkedin', 'youtube'].map((social) => (
                    <a 
                      key={social}
                      href={`https://${social}.com`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-electricLime hover:text-white transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <img 
                        src={`https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/${social}.svg`} 
                        className="w-5 h-5"
                        alt={social}
                      />
                    </a>
                  ))} */}
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
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="customer">Customer</TabsTrigger>
                  <TabsTrigger value="dealer">Dealer Enquiry</TabsTrigger>
                </TabsList>
                
                <TabsContent value="customer">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electricLime"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electricLime"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electricLime"
                          placeholder="+91 12345 67890"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Subject</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electricLime"
                          required
                        >
                          <option value="">Select Subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          {/* <option value="Test Drive Request">Test Drive Request</option> */}
                          <option value="Service Support">Service Support</option>
                          <option value="Product Information">Product Information</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-electricLime"
                        placeholder="How can we help you?"
                        required
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-electricLime text-jetBlack hover:bg-neonEmerald hover:text-white flex items-center justify-center gap-2"
                    >
                      <Send size={16} />
                      Send Message
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="dealer">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electricLime"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Company Name</label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electricLime"
                          placeholder="Your Company"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electricLime"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electricLime"
                          placeholder="+91 12345 67890"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">City of Interest</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electricLime"
                          placeholder="City"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Dealer Type</label>
                        <select
                          name="dealerType"
                          value={formData.dealerType}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electricLime"
                          required
                        >
                          <option value="">Select Type</option>
                          <option value="Sales Only">Sales Only</option>
                          <option value="Sales & Service">Sales & Service</option>
                          <option value="Service Only">Service Only</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Existing Business</label>
                        <input
                          type="text"
                          name="existingBusiness"
                          value={formData.existingBusiness}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electricLime"
                          placeholder="Current Business (if any)"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Investment Capacity</label>
                        <select
                          name="investmentCapacity"
                          value={formData.investmentCapacity}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electricLime"
                          required
                        >
                          <option value="">Select Range</option>
                          <option value="₹10-20 Lakhs">₹10 Lakhs +</option>
                          <option value="₹20-50 Lakhs">₹25 Lakhs +</option>
                          <option value="₹50 Lakhs - 1 Crore">₹50 Lakhs +</option>
                      
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md h-24 focus:outline-none focus:ring-2 focus:ring-electricLime"
                        placeholder="Tell us about your interest in becoming a Vachan Motors dealer..."
                        required
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-electricLime text-jetBlack hover:bg-neonEmerald hover:text-white flex items-center justify-center gap-2"
                    >
                      <Send size={16} />
                      Submit Enquiry
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Find Us</h2>

          <div className="h-[500px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3847.451973809068!2d75.111951!3d15.3519894!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDIxJzA3LjIiTiA3NcKwMDYnNTIuMyJF!5e0!3m2!1sen!2sin!4v1749721799671!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Vachan Motors Head Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-3">❓ Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Got questions? We’ve got answers. If you don’t see what you’re looking for, our support team is just a message away.
          </p>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: 'How can I schedule a test ride?',
                answer: 'You can schedule a test ride by filling out the contact form on this page, calling our customer service line, or visiting your nearest Vachan Motors dealership.'
              },
              {
                question: 'What are the requirements for becoming a dealer?',
                answer: 'To become a Vachan Motors dealer, you need adequate showroom space (at least 1,500 sq ft), investment capacity, and a business plan. Fill out our dealer enquiry form, and our team will guide you through the process.'
              },
              {
                question: 'How can I get spare parts for my Vachan vehicle?',
                answer: 'Genuine spare parts are available at all authorized Vachan Motors service centers. You can also order them online through our customer portal or mobile app.'
              },
              {
                question: 'Do you offer corporate fleet solutions?',
                answer: 'Yes, we offer customized fleet solutions for businesses. Contact our corporate sales team at corporate@vachanmotors.com for tailored packages based on your requirements.'
              }
            ].map((faq, index) => (
              <div key={index} className="mb-6 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;


