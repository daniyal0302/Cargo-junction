import React, { useState } from 'react';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard from '@/components/ServiceCard';
import { Truck, FileCheck, Home, Map, Package, BarChart3, Leaf, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const Services = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("ocean");

  // Core services data
  const coreServices = [
    {
      icon: <Truck className="w-6 h-6 text-cargo" />,
      title: "Ocean Freight",
      description: "Reliable sea freight solutions for your international shipping needs, from FCL to LCL shipments."
    },
    {
      icon: <Map className="w-6 h-6 text-cargo" />,
      title: "Air Freight",
      description: "Fast and efficient air cargo services for time-sensitive shipments across the globe."
    },
    {
      icon: <Truck className="w-6 h-6 text-cargo" />,
      title: "Road Transportation",
      description: "Comprehensive road freight services with extensive coverage for domestic and cross-border shipments."
    },
    {
      icon: <FileCheck className="w-6 h-6 text-cargo" />,
      title: "Customs Clearance",
      description: "Expert handling of customs documentation and regulatory compliance to ensure smooth border clearance."
    },
    {
      icon: <Home className="w-6 h-6 text-cargo" />,
      title: "Warehousing & Distribution",
      description: "Strategic storage solutions and efficient distribution services to optimize your supply chain."
    },
    {
      icon: <Package className="w-6 h-6 text-cargo" />,
      title: "Project Cargo",
      description: "Specialized handling of oversized and heavy-lift cargo with meticulous planning and execution."
    }
  ];

  // Industry solutions data
  const industrySolutions = [
    {
      icon: <Package className="w-6 h-6 text-cargo" />,
      title: "Retail & E-commerce",
      description: "Streamlined logistics solutions for online retailers, from warehousing to last-mile delivery."
    },
    {
      icon: <FileCheck className="w-6 h-6 text-cargo" />,
      title: "Manufacturing",
      description: "Specialized services for manufacturers, including just-in-time delivery and production support."
    },
    {
      icon: <FileCheck className="w-6 h-6 text-cargo" />,
      title: "Pharmaceuticals",
      description: "Temperature-controlled and secure transport solutions for pharmaceutical products with full compliance."
    },
    {
      icon: <FileCheck className="w-6 h-6 text-cargo" />,
      title: "Technology",
      description: "Tailored solutions for high-value technology products with enhanced security and agility."
    }
  ];

  // Value-added services data
  const valueAddedServices = [
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Supply Chain Consulting",
      description: "Expert analysis and optimization of your entire supply chain for improved efficiency and cost savings."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "Cargo Insurance",
      description: "Comprehensive insurance coverage to protect your valuable shipments against loss or damage."
    },
    {
      icon: <FileCheck className="w-6 h-6 text-white" />,
      title: "Customs Brokerage",
      description: "Professional handling of customs documentation and procedures to ensure smooth border crossings."
    },
    {
      icon: <Map className="w-6 h-6 text-white" />,
      title: "Track & Trace",
      description: "Real-time visibility of your shipments with our advanced tracking technology."
    },
    {
      icon: <Package className="w-6 h-6 text-white" />,
      title: "Packaging Solutions",
      description: "Custom packaging services to ensure your products are protected during transit."
    },
    {
      icon: <Leaf className="w-6 h-6 text-white" />,
      title: "Green Logistics",
      description: "Environmentally friendly shipping options to reduce your carbon footprint."
    }
  ];

  // Service tab content
  const serviceTabContent = {
    ocean: {
      title: "Ocean Freight Solutions",
      description: "Our ocean freight services offer reliable and cost-effective solutions for transporting your goods globally. From FCL to LCL services, we have the expertise to handle your shipments with care.",
      features: [
        "Full Container Load (FCL)",
        "Less than Container Load (LCL)",
        "Break Bulk Services",
        "Roll-on/Roll-off (RoRo)"
      ],
      image: "/lovable-uploads/ocean-freight.jpg"
    },
    air: {
      title: "Air Freight Solutions",
      description: "Our air freight services provide fast and efficient transportation for time-sensitive cargo. We offer competitive rates and reliable schedules to meet your urgent shipping needs.",
      features: [
        "Express Air Freight",
        "Consolidated Air Freight",
        "Charter Services",
        "Dangerous Goods Handling"
      ],
      image: "/lovable-uploads/svergreen.jpg"
    },
    road: {
      title: "Road Transportation",
      description: "Our comprehensive road transportation services provide reliable and cost-effective solutions for your domestic and cross-border shipping needs with extensive coverage.",
      features: [
        "Full Truckload (FTL)",
        "Less than Truckload (LTL)",
        "Express Delivery",
        "Specialized Vehicle Transportation"
      ],
      image: "/lovable-uploads/c0a2f021-71d0-44dc-8803-25c9bdcc6686.png"
    },
    warehouse: {
      title: "Warehousing Solutions",
      description: "Our warehousing solutions offer secure storage and efficient inventory management to optimize your supply chain operations with strategic locations worldwide.",
      features: [
        "Short and Long-term Storage",
        "Inventory Management",
        "Pick and Pack Services",
        "Cross-Docking Solutions"
      ],
      image: "/lovable-uploads/cc1c6040-792d-4f1b-b18f-d301fe03865c.png"
    }
  };

  // Function to handle tab changes
  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Our Services" 
        subtitle="Comprehensive logistics solutions tailored to your business needs, from local deliveries to global supply chains."
        backgroundImage="/lovable-uploads/banner.jpg"
      />

      {/* Core Logistics Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Core Logistics Services" 
            subtitle="Explore our comprehensive range of logistics solutions designed to optimize your supply chain."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Explore Our Services" 
            subtitle="Discover the details of our comprehensive logistics solutions."
            center={true}
          />

          <div className="mb-8">
            <Tabs defaultValue="ocean" value={activeTab} onValueChange={handleTabChange}>
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-transparent">
                <TabsTrigger 
                  value="ocean" 
                  className={`px-6 py-3 ${activeTab === 'ocean' ? 'border-b-2 border-cargo text-cargo font-medium' : 'text-gray-700'}`}
                >
                  Ocean Freight
                </TabsTrigger>
                <TabsTrigger 
                  value="air" 
                  className={`px-6 py-3 ${activeTab === 'air' ? 'border-b-2 border-cargo text-cargo font-medium' : 'text-gray-700'}`}
                >
                  Air Freight
                </TabsTrigger>
                <TabsTrigger 
                  value="road" 
                  className={`px-6 py-3 ${activeTab === 'road' ? 'border-b-2 border-cargo text-cargo font-medium' : 'text-gray-700'}`}
                >
                  Road Transport
                </TabsTrigger>
                <TabsTrigger 
                  value="warehouse" 
                  className={`px-6 py-3 ${activeTab === 'warehouse' ? 'border-b-2 border-cargo text-cargo font-medium' : 'text-gray-700'}`}
                >
                  Warehousing
                </TabsTrigger>
              </TabsList>

              {Object.keys(serviceTabContent).map((tabKey) => (
                <TabsContent key={tabKey} value={tabKey} className="mt-6">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-3 order-2 lg:order-1">
                      <h3 className="text-2xl font-bold mb-4">{serviceTabContent[tabKey].title}</h3>
                      <p className="text-gray-600 mb-4">
                        {serviceTabContent[tabKey].description}
                      </p>
                      
                      <div className="space-y-4 mb-6">
                        {serviceTabContent[tabKey].features.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <p>{feature}</p>
                          </div>
                        ))}
                      </div>

                      <Button className="bg-cargo hover:bg-cargo-light text-white">
                        Learn More
                      </Button>
                    </div>

                    <div className="lg:col-span-2 order-1 lg:order-2">
                      <img 
                        src={serviceTabContent[tabKey].image}
                        alt={serviceTabContent[tabKey].title} 
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Industry Solutions" 
            subtitle="Tailored logistics solutions for specific industries and unique requirements."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industrySolutions.map((solution, index) => (
              <ServiceCard 
                key={index}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Value-Added Services */}
      <section className="py-16 bg-cargo-dark text-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Value-Added Services" 
            subtitle="Enhance your logistics operations with our comprehensive suite of value-added services."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueAddedServices.map((service, index) => (
              <div key={index} className="bg-cargo p-6 rounded-lg border border-cargo-light transition-transform duration-300 hover:transform hover:scale-105">
                <div className="bg-cargo-light p-3 rounded-full w-fit mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-100">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-16 bg-cargo-dark text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(12, 58, 45, 0.8), rgba(12, 58, 45, 0.8)), url(/lovable-uploads/cc1c6040-792d-4f1b-b18f-d301fe03865c.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-cargo-dark bg-opacity-80 p-8 rounded-lg border border-cargo-light">
            <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Logistics?</h2>
            <p className="mb-8">Contact our team today to discuss your specific requirements and discover how our services can transform your supply chain.</p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-cargo hover:bg-cargo-600 text-white">
                <Link to="/get-started">Get Started</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-cargo-dark">
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
