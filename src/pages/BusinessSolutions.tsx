
import React from 'react';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard from '@/components/ServiceCard';
import { BarChart3, Globe, Package, FileCheck, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const BusinessSolutions = () => {
  // Business solutions data
  const businessSolutions = [
    {
      icon: <BarChart3 className="w-6 h-6 text-cargo" />,
      title: "Supply Chain Analytics",
      description: "Data-driven insights to optimize your supply chain operations and improve decision-making."
    },
    {
      icon: <Globe className="w-6 h-6 text-cargo" />,
      title: "Global Trade Management",
      description: "End-to-end solutions for international trade compliance and risk management."
    },
    {
      icon: <Package className="w-6 h-6 text-cargo" />,
      title: "Inventory Optimization",
      description: "Advanced strategies to balance inventory levels while meeting customer demands."
    },
    {
      icon: <FileCheck className="w-6 h-6 text-cargo" />,
      title: "Customs Compliance",
      description: "Expert guidance and solutions for navigating complex customs regulations worldwide."
    }
  ];

  // Industry case studies
  const caseStudies = [
    {
      title: "Retail & E-commerce",
      description: "Helped a multinational retailer reduce shipping costs by 23% while improving delivery times by implementing our integrated logistics solutions.",
      metrics: [
        { label: "Cost Reduction", value: "23%" },
        { label: "Faster Delivery", value: "35%" },
        { label: "Return Processing", value: "48 hours" }
      ]
    },
    {
      title: "Manufacturing",
      description: "Streamlined the supply chain for an industrial manufacturer, reducing inventory holding costs while ensuring just-in-time delivery to production facilities.",
      metrics: [
        { label: "Inventory Reduction", value: "18%" },
        { label: "On-time Delivery", value: "99.4%" },
        { label: "Lead Time", value: "-4 days" }
      ]
    },
    {
      title: "Healthcare",
      description: "Implemented temperature-controlled logistics solutions for a pharmaceutical company, ensuring product integrity throughout the global supply chain.",
      metrics: [
        { label: "Compliance Rate", value: "100%" },
        { label: "Loss Prevention", value: "99.9%" },
        { label: "Distribution Reach", value: "+12 countries" }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Business Solutions" 
        subtitle="Transformative logistics and supply chain strategies to drive your business forward"
        backgroundImage="/lovable-uploads/c0a2f021-71d0-44dc-8803-25c9bdcc6686.png"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Optimizing Your Business Operations" 
            subtitle="Strategic solutions to enhance efficiency, reduce costs, and drive growth"
            center={true}
          />
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 mb-6">
              At Cargo Junction, we go beyond traditional logistics services to provide comprehensive business 
              solutions that address your unique operational challenges. Our expert team combines industry knowledge, 
              data analytics, and innovative technology to create tailored strategies that drive measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Our Business Solutions" 
            subtitle="Comprehensive strategies to optimize your operations and drive growth"
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessSolutions.map((solution, index) => (
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

      {/* Business Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Benefits for Your Business" 
            subtitle="How our solutions create tangible value for your organization"
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
              <div className="text-5xl font-bold text-cargo mb-3">30%</div>
              <h3 className="text-xl font-semibold mb-2">Cost Reduction</h3>
              <p className="text-gray-600">Average logistics cost savings achieved through our optimization strategies</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
              <div className="text-5xl font-bold text-cargo mb-3">99.8%</div>
              <h3 className="text-xl font-semibold mb-2">On-time Delivery</h3>
              <p className="text-gray-600">Consistent and reliable delivery performance across global shipments</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
              <div className="text-5xl font-bold text-cargo mb-3">24/7</div>
              <h3 className="text-xl font-semibold mb-2">Visibility</h3>
              <p className="text-gray-600">Complete supply chain transparency with real-time tracking and analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Success Stories" 
            subtitle="See how we've transformed operations for businesses across industries"
            center={true}
          />

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="retail" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="retail">Retail</TabsTrigger>
                <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
                <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
              </TabsList>
              
              {caseStudies.map((study, index) => (
                <TabsContent key={index} value={["retail", "manufacturing", "healthcare"][index]}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{study.title}</CardTitle>
                      <CardDescription>{study.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        {study.metrics.map((metric, idx) => (
                          <div key={idx}>
                            <div className="text-2xl font-bold text-cargo">{metric.value}</div>
                            <div className="text-sm text-gray-600">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Our Approach" 
            subtitle="A systematic methodology to deliver transformative business solutions"
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-cargo text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Assess</h3>
              <p className="text-gray-600">Comprehensive analysis of your current operations and challenges</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-cargo text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-gray-600">Custom solution development tailored to your specific needs</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-cargo text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Implement</h3>
              <p className="text-gray-600">Carefully managed deployment with minimal disruption</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-cargo text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Optimize</h3>
              <p className="text-gray-600">Continuous improvement based on performance data</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cargo-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="max-w-2xl mx-auto mb-8">Schedule a consultation with our business solutions experts to discuss your unique challenges and goals.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-cargo hover:bg-cargo-600 text-white">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-cargo-dark">
              <Link to="/services">Explore More Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessSolutions;
