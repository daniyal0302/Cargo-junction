import React from 'react';
import { Truck, FileCheck, Clock, Shield, CheckCircle, Map, Home as HomeIcon, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard from '@/components/ServiceCard';
import TrackingForm from '@/components/TrackingForm';

const Home = () => {
  // Sample data for features
  const features = [
    {
      icon: <CheckCircle className="w-10 h-10 text-green-500" />,
      title: 'ISO Certified',
      description: 'Meeting international quality standards'
    },
    {
      icon: <Clock className="w-10 h-10 text-green-500" />,
      title: '30+ Years Experience',
      description: 'Decades of logistics expertise'
    },
    {
      icon: <Map className="w-10 h-10 text-green-500" />,
      title: 'Global Coverage',
      description: 'Serving clients in over 150 countries'
    }
  ];

  // Sample data for services
  const services = [
    {
      icon: <Truck className="w-6 h-6 text-cargo" />,
      title: 'Freight Forwarding',
      description: 'Comprehensive freight forwarding solutions for your global shipping needs',
      link: '/services/freight-forwarding'
    },
    {
      icon: <FileCheck className="w-6 h-6 text-cargo" />,
      title: 'Customs Clearance',
      description: 'Expert handling of customs documentation and regulatory compliance',
      link: '/services/customs-clearance'
    },
    {
      icon: <HomeIcon className="w-6 h-6 text-cargo" />,
      title: 'Warehousing & Distribution',
      description: 'Secure storage and efficient distribution services worldwide',
      link: '/services/warehousing'
    },
    {
      icon: <Truck className="w-6 h-6 text-cargo" />,
      title: 'Inland Transportation',
      description: 'Reliable ground transportation for first and last mile services',
      link: '/services/inland-transportation'
    },
    {
      icon: <Map className="w-6 h-6 text-cargo" />,
      title: 'International Air & Sea Cargo',
      description: 'Global air and ocean freight services with complete coverage',
      link: '/services/air-sea-cargo'
    }
  ];

  // Sample data for steps
  const steps = [
    {
      icon: <FileCheck className="w-8 h-8 text-cargo" />,
      title: 'Book',
      description: 'Request a quote and book your shipment online'
    },
    {
      icon: <HomeIcon className="w-8 h-8 text-cargo" />,
      title: 'Pack',
      description: 'Have your shipment properly packed for safe transport'
    },
    {
      icon: <Truck className="w-8 h-8 text-cargo" />,
      title: 'Ship',
      description: 'Your cargo is picked up and shipped via optimal routes'
    },
    {
      icon: <Map className="w-8 h-8 text-cargo" />,
      title: 'Track',
      description: 'Monitor your shipment in real-time with our tracking system'
    }
  ];

  // Sample data for benefits
  const benefits = [
    {
      icon: <Clock className="w-10 h-10 text-cargo" />,
      title: 'Fast Delivery',
      description: 'Optimized routes and efficient processes ensure your cargo arrives on time, every time'
    },
    {
      icon: <Users className="w-10 h-10 text-cargo" />,
      title: '24/7 Support',
      description: 'Our dedicated support is available round the clock to assist with any queries'
    },
    {
      icon: <Shield className="w-10 h-10 text-cargo" />,
      title: 'Secure Handling',
      description: 'Advanced packaging protocols and careful handling protect your valuable shipments'
    }
  ];

  // Sample testimonials
  const testimonials = [
    {
      text: '"Their shipping handling process has revolutionized our business model. Getting products into our overseas distribution centers has never been easier."',
      author: 'Sarah Johnson',
      position: 'Operations Director, Fashion Retailer'
    },
    {
      text: '"We\'ve been working with them for over 5 years. Their customs expertise and dedicated team have transformed our cross-border operations."',
      author: 'Michael Chen',
      position: 'CEO, Global Retail'
    },
    {
      text: '"As a growing business, we needed a logistics partner with high reliability standards and a personalized approach, and they deliver."',
      author: 'Emma Rodriguez',
      position: 'Supply Chain Manager'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Powering Your Freight Forwarding Experience" 
        subtitle="Reliable, Fast & Transparent Logistics Solutions" 
        showTracking={false}
        showButtons={true}
        backgroundImage="/lovable-uploads/jjg.jpg"
      />

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Trusted By Industry Leaders</h2>
          <div className="flex justify-around items-center flex-wrap gap-8">
            {/* Placeholder for company logos */}
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="h-12 w-28 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Services"
            subtitle="Comprehensive logistics solutions tailored to your business needs."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Step-by-Step Shipping Process"
            subtitle="We make global shipping simple and transparent."
            center={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 bg-white p-4 rounded-full shadow-md">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracking Section */}
      <section 
        className="py-20 bg-cargo-dark text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(12, 58, 45, 0.85), rgba(12, 58, 45, 0.85)), url(/lovable-uploads/cc1c6040-792d-4f1b-b18f-d301fe03865c.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Real-Time Shipment Tracking</h2>
          <p className="max-w-2xl mx-auto mb-8">Stay informed with our advanced tracking system. Monitor your shipment's progress with precision and peace of mind.</p>
          
          <div className="flex justify-center mb-8">
            <TrackingForm dark placeholder="Enter Tracking Number" buttonText="Track Now" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Why Choose Us"
            subtitle="We're committed to providing exceptional logistics services that exceed your expectations."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-block p-4 rounded-full bg-green-50 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Client Testimonials"
            subtitle="Don't just take our word for it - hear what clients have to say."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Get in Touch with Our Freight Experts</h2>
            <p className="text-gray-600 mb-6">Need assistance with your shipping? Please submit a message below and our team is ready to assist you.</p>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" id="fullName" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" id="phone" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" id="subject" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full p-2 border border-gray-300 rounded"></textarea>
              </div>
              <div className="md:col-span-2">
                <Button className="w-full bg-cargo hover:bg-cargo-light text-white">
                  Submit Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-cargo-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Simplify Your Logistics?</h2>
          <p className="max-w-2xl mx-auto mb-8">Join thousands of businesses that trust Cargo Junction for their shipping and supply chain needs.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-cargo hover:bg-cargo-600 text-white">
              <Link to="/get-started">Get Started</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-cargo-dark">
              <Link to="/consultation">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
