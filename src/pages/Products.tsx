import { useState } from 'react';
import { Check, ArrowRight, Zap, Battery, Shield, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageLayout from '@/components/layout/PageLayout';
import productimg from '../assets/L5_Cargo-6.png';
import gajaP from '../assets/Gaja-P.png';
import jeevaP from '../assets/L3_Pass-4.png';
import bhoomiP from '../assets/DS.png';
import gajaL from '../assets/L5.png';
import gajaC from '../assets/L5C.png';
import jeevaL from '../assets/L3C.png';

const productsData = [
  {
    id: 'gaja-p',
    name: 'GAJA-P',
    tagline: 'Power-Packed Passenger Mobility',
    description: 'Designed for high-capacity urban transport, the GAJA-P combines robust performance with exceptional range for seamless passenger mobility.',
    image: gajaP,
    specs: {
      seating: '6+1',
      range: '200 KM',
      topSpeed: '55 KM/H',
      batteryWarranty: '3 Years / 80,000 KM',
      motorPower: '5Kw / 11Kw (Peak) Sine Wave Motor',
      batteryCapacity: '230 Ah Li-ion Battery',
    },
    features: [
      'High-capacity seating for urban routes',
      'Long-range battery for extended trips',
      'Robust motor for reliable performance',
      'Finance options available',
      'Eco-friendly electric design',
      'Low maintenance costs',
    ],
    price: 'Contact for pricing'
  },
  {
    id: 'jeeva-p',
    name: 'JEEVA-P',
    tagline: 'Compact and Efficient',
    description: 'The JEEVA-P is perfect for smaller groups, offering a balance of efficiency and comfort for short to medium city commutes.',
    image: jeevaP,
    specs: {
      seating: '4+1',
      range: '130 KM',
      batteryWarranty: '3 Years / 80,000 KM',
      motorPower: '1200W BLDC Motor',
      batteryCapacity: '105 Ah Li-ion Battery',
    },
    features: [
      'Compact design for easy maneuverability',
      'Efficient battery for daily commutes',
      'Finance options available',
      'Eco-friendly and low maintenance',
      'Comfortable seating for passengers',
    ],
    price: 'Contact for pricing'
  },
  {
    id: 'bhoomi-p',
    name: 'BHOOMI-P',
    tagline: 'Affordable Urban Transport',
    description: 'The BHOOMI-P offers reliable passenger transport with a focus on affordability and efficiency for urban environments.',
    image: bhoomiP,
    specs: {
      seating: '4+1',
      range: '120 KM',
      batteryWarranty: '3 Years / 80,000 KM',
      motorPower: '1250W BLDC Motor',
      batteryCapacity: '105 Ah Li-ion Battery',
    },
    features: [
      'Cost-effective passenger transport',
      'Efficient battery for daily use',
      'Finance options available',
      'Low maintenance and eco-friendly',
      'Durable design for city roads',
    ],
    price: 'Contact for pricing'
  },
  {
    id: 'gaja-l',
    name: 'GAJA-L',
    tagline: 'Heavy-Duty Cargo Solution',
    description: 'The GAJA-L is built for heavy-duty cargo transport, offering a robust payload capacity and long range for commercial needs.',
    image: gajaL,
    specs: {
      payloadCapacity: '750 Kg (ICAT Approved)',
      cargoSize: '6 x 4.8 x 1 feet (Open)',
      range: '170 KM',
      batteryWarranty: '3 Years / 80,000 KM',
      motorPower: '5Kw / 11Kw (Peak) BLDC Motor',
      batteryCapacity: '16 KWh Battery',
    },
    features: [
      'High payload capacity for commercial use',
      'Spacious open cargo area',
      'Long-range battery for extended trips',
      'Finance options available',
      'Eco-friendly and low maintenance',
    ],
    price: 'Contact for pricing'
  },
  {
    id: 'gaja-c',
    name: 'GAJA-C',
    tagline: 'Secure Cargo Transport',
    description: 'The GAJA-C provides secure cargo transport with a closed cargo area, ideal for protecting goods during transit.',
    image: gajaC,
    specs: {
      payloadCapacity: '750 Kg (ICAT Approved)',
      cargoSize: '6 x 4.8 x 5 feet (Closed)',
      range: '170 KM',
      batteryWarranty: '3 Years / 80,000 KM',
      motorPower: '5Kw / 11Kw (Peak) BL inWave Motor',
      batteryCapacity: '16 KWh Battery',
    },
    features: [
      'Secure closed cargo area',
      'High payload capacity for commercial use',
      'Long-range battery for extended trips',
      'Finance options available',
      'Eco-friendly and low maintenance',
    ],
    price: 'Contact for pricing'
  },
  {
    id: 'jeeva-l',
    name: 'JEEVA-L',
    tagline: 'Light Cargo Efficiency',
    description: 'The JEEVA-L is designed for light cargo transport, offering efficiency and reliability for small to medium loads.',
    image: jeevaL,
    specs: {
      payloadCapacity: '350 Kg (ICAT Approved)',
      range: '130 KM',
      batteryWarranty: '3 Years / 80,000 KM',
      motorPower: '1200W BLDC Motor',
      batteryCapacity: '105 Ah Li-ion Battery',
    },
    features: [
      'Efficient for light cargo transport',
      'Compact design for easy navigation',
      'Finance options available',
      'Eco-friendly and low maintenance',
      'Reliable for small to medium loads',
    ],
    price: 'Contact for pricing'
  }
];

const benefitsData = [
  {
    icon: <Zap size={24} className="text-electricLime" />,
    title: '💸 Cut Operating Costs by Up to 70%',
    description: 'Slash fuel expenses and enjoy unbeatable efficiency with every charge — your bottom line will thank you.'
  },
  {
    icon: <Battery size={24} className="text-electricLime" />,
    title: '🛠️ Drive More, Maintain Less',
    description: 'With fewer moving parts and no oil changes, our EVs keep you on the road and out of the workshop.'
  },
  {
    icon: <Shield size={24} className="text-electricLime" />,
    title: '🎁 Unlock Government Rewards',
    description: 'Enjoy exclusive incentives, tax savings, and EV subsidies designed to fuel your growth.'
  },
  {
    icon: <Truck size={24} className="text-electricLime" />,
    title: '🚀 Invest in Tomorrow, Today',
    description: 'Future-ready and regulation-proof — go electric now and stay ahead of rising fuel costs and emission laws.'
  }
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(productsData[0]);
  const [activeTab, setActiveTab] = useState('overview');

  const handleDownload = async () => {
    try {
      const response = await fetch('/public/Broucher.pdf');
      if (!response.ok) {
        throw new Error('Failed to fetch the PDF file');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'VachanMotors-Brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download the brochure. Please try again later.');
    }
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[70vh] flex items-center bg-grey-800 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={productimg}
            alt="Contact us"
            className="w-full h-full object-cover md:object-contain opacity-100"
            onError={(e) => {
              console.error(`Image failed to load: ${productimg}`);
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <div className="w-20 h-1 bg-electricLime mb-8"></div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ⚡ Our Electric <span className="text-electricLime">Vehicles</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Boldly engineered. Effortlessly electric. Explore our next-gen three-wheelers built to power the future of India’s mobility — clean, reliable, and ready for every road.
            </p>
          </div>
        </div>
      </section>

      {/* Product Selection Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-6 mb-12 justify-center">
            {productsData.map((product) => (
              <div 
                key={product.id}
                className={`cursor-pointer p-6 rounded-xl transition-all duration-300 ${
                  selectedProduct.id === product.id 
                    ? 'bg-electricLime text-jetBlack shadow-lg' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedProduct(product)}
              >
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className={selectedProduct.id === product.id ? 'text-jetBlack/80' : 'text-gray-600'}>
                  {product.tagline}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative group">
              <div className="overflow-hidden rounded-xl">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    console.error(`Image failed to load: ${selectedProduct.image}`);
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-electricLime text-jetBlack px-6 py-3 rounded-lg font-bold shadow-lg">
                {selectedProduct.name}
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">{selectedProduct.name}</h2>
              <p className="text-xl text-gray-600 mb-6">{selectedProduct.tagline}</p>
              <p className="text-gray-700 mb-8">{selectedProduct.description}</p>
              
              <div className="text-2xl font-sora font-bold mb-6 text-neonEmerald">
                {selectedProduct.price}
              </div>

              <div className="space-y-2 mb-8">
                {['Eco-friendly', '3-Year Warranty', 'Low Maintenance', 'Finance Available'].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="text-electricLime" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={handleDownload}
                  variant="outline" 
                  className="border-electricLime text-jetBlack hover:bg-electricLime"
                >
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <Tabs 
            defaultValue="overview" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full md:w-[400px] grid-cols-3 mb-8">
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
            </TabsList>
            <TabsContent value="specs" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(selectedProduct.specs).map(([key, value]) => (
                  <div key={key} className="flex space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-3 bg-electricLime rounded-full"></div>
                    <div>
                      <h4 className="text-sm font-medium uppercase text-gray-500">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </h4>
                      <p className="text-lg font-semibold">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedProduct.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4">
                    <div className="rounded-full p-2 bg-electricLime/20 text-electricLime">
                      <Check size={18} />
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-3">Why Go Electric?</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Step into the future of mobility — smarter, cleaner, and built for business. Electric vehicles aren’t just an upgrade — they’re a game-changer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitsData.map((benefit, index) => (
              <div 
                key={index} 
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:border-electricLime border border-transparent"
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-jetBlack text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Experience the Future of Mobility?</h2>
              <p className="text-lg opacity-80 mb-8">
                Schedule a test drive today and see how our electric three-wheelers can transform your business operations.
              </p>
              <Button 
                asChild
                className="bg-electricLime text-jetBlack hover:bg-neonEmerald hover:text-white flex items-center gap-2"
              >
                <Link to="/contact">
                  Schedule Now <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Electric vehicle charging"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Products;