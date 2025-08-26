
import React from 'react';
import Hero from '@/components/Hero';
import { Check, Globe, CheckCircle, Clock } from 'lucide-react';

const About = () => {
  const leaders = [
    {
      name: 'Sarah Johnson',
      position: 'Chief Executive Officer',
      image: '/placeholder.svg',
      bio: 'With over 20 years in logistics, Sarah leads our global strategy and operations.'
    },
    {
      name: 'Michael Chen',
      position: 'Chief Operations Officer',
      image: '/placeholder.svg',
      bio: 'Michael ensures our operations run smoothly across all regions and service lines.'
    },
    {
      name: 'Emma Rodriguez',
      position: 'Customer Service Director',
      image: '/placeholder.svg',
      bio: 'Emma\'s team ensures every client receives exceptional service and support.'
    }
  ];

  const values = [
    {
      icon: <Check className="w-10 h-10 text-cargo" />,
      title: 'Reliability',
      description: 'We deliver on our promises, ensuring your cargo reaches its destination safely and on time.'
    },
    {
      icon: <Globe className="w-10 h-10 text-cargo" />,
      title: 'Global Perspective',
      description: 'Our international outlook and local expertise combine to provide truly comprehensive logistics solutions.'
    },
    {
      icon: <Clock className="w-10 h-10 text-cargo" />,
      title: 'Efficiency',
      description: 'We constantly optimize processes to provide faster, more cost-effective logistics services.'
    }
  ];

  const regions = [
    {
      name: 'North America',
      countries: 'USA, Canada, Mexico'
    },
    {
      name: 'Europe',
      countries: 'UK, Germany, France, Italy, Spain'
    },
    {
      name: 'Asia Pacific',
      countries: 'China, Japan, Singapore, Australia, India'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="About Cargo Junction"
        subtitle="Your trusted partner in global logistics since 2003, delivering excellence across continents."
        backgroundImage="/lovable-uploads/hh.jpg"
      />

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2003, Cargo Junction began with a simple mission: to make global shipping accessible, transparent, and efficient for businesses of all sizes.
              </p>
              <p className="text-gray-700 mb-4">
                Over two decades, we've grown from a small regional operation to a global logistics provider with offices in 15 countries and a network spanning over 150 nations. Throughout our growth, we've maintained our commitment to personalized service and innovative solutions.
              </p>
              <p className="text-gray-700">
                Today, we're proud to be the logistics partner of choice for thousands of businesses worldwide, from startups to Fortune 500 companies. Our journey continues as we embrace new technologies and sustainable practices to shape the future of global logistics.
              </p>
            </div>
            <div>
              <img 
                src="/lovable-uploads/pexels-julius.jpg" 
                alt="Cargo ships at port" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide every decision, interaction, and every decision we make.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <div className="bg-green-50 p-3 rounded-full w-fit mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Meet the experts who drive our vision and ensure excellence in every aspect of our operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 bg-gray-200 rounded-full w-48 h-48 mx-auto overflow-hidden">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                <p className="text-cargo mb-3">{leader.position}</p>
                <p className="text-gray-600">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section 
        className="py-16 bg-cargo-dark text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(12, 58, 45, 0.8), rgba(12, 58, 45, 0.8)), url(/lovable-uploads/ddd.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Global Presence</h2>
            <p className="max-w-2xl mx-auto">With offices in 15 countries and a network spanning over 150 nations, we deliver global solutions with local expertise.</p>
          </div>

          <div className="relative mb-12">
            <img 
              src="/lovable-uploads/ggg.jpg" 
              alt="Global logistics network" 
              className="w-full h-auto rounded-lg object-cover"
              style={{ height: '400px' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-3">{region.name}</h3>
                <p>{region.countries}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Certifications & Partners</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Placeholder for certification logos */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="w-40 h-24 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-400">Certification {item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
