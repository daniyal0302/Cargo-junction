
import React from 'react';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import { FileCheck, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';

const CertificateOfOrigin = () => {
  // COO services
  const cooServices = [
    {
      icon: <FileCheck className="w-6 h-6 text-cargo" />,
      title: "Certificate Issuance",
      description: "Quick and accurate issuance of Certificates of Origin for your international shipments."
    },
    {
      icon: <Shield className="w-6 h-6 text-cargo" />,
      title: "Document Verification",
      description: "Expert verification of your documents to ensure compliance with international trade requirements."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-cargo" />,
      title: "Customs Clearance",
      description: "Streamlined customs clearance process with proper documentation and expert guidance."
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "What is a Certificate of Origin?",
      answer: "A Certificate of Origin (COO) is a document that certifies the country where goods were manufactured. It's required by many countries for customs clearance, determining applicable duties, and confirming eligibility for preferential treatment under trade agreements."
    },
    {
      question: "Why do I need a Certificate of Origin?",
      answer: "COOs are required to determine the origin of imported goods and apply the correct tariff rates. They're essential for qualifying for preferential treatment under free trade agreements and for complying with import regulations in destination countries."
    },
    {
      question: "How long does it take to process a Certificate of Origin?",
      answer: "Standard processing typically takes 1-2 business days. For urgent requests, we offer expedited services that can process certificates within the same day, depending on the complexity and documentation provided."
    },
    {
      question: "What documents are required for obtaining a Certificate of Origin?",
      answer: "Required documents typically include a commercial invoice, packing list, bill of lading or airway bill, and manufacturing information that proves the origin of goods. Requirements may vary based on destination country and product type."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Certificate of Origin Services" 
        subtitle="Expert documentation services for international trade compliance"
        backgroundImage="/lovable-uploads/sss.webp"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeader 
              title="Certificate of Origin Documentation" 
              subtitle="Facilitating international trade with accurate and timely documentation"
              center={true}
            />
            
            <p className="text-gray-600 mb-6">
              Certificates of Origin (COO) are crucial documents in international trade that certify the country where goods 
              originated. They help determine eligibility for preferential tariff treatment under free trade agreements, 
              satisfy import requirements, and establish compliance with various trade regulations.
            </p>
            
            <p className="text-gray-600 mb-6">
              At Cargo Junction, our expert team provides comprehensive Certificate of Origin services to ensure your 
              shipments comply with international trade regulations and qualify for applicable tariff preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Our Certificate Services" 
            subtitle="Comprehensive documentation solutions for your international shipments"
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cooServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl border border-gray-100">
                <div className="bg-green-50 p-3 rounded-full w-fit mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Our Certificate Process" 
            subtitle="Simplified steps for obtaining your Certificate of Origin"
            center={true}
          />

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-cargo text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Document Submission</h3>
                <p className="text-gray-600">Submit your shipment documents and origin information through our online portal</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-cargo text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Verification</h3>
                <p className="text-gray-600">Our experts verify your documents and confirm compliance with destination requirements</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-cargo text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Certificate Issuance</h3>
                <p className="text-gray-600">We issue your Certificate of Origin and deliver it through your preferred method</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Frequently Asked Questions" 
            subtitle="Common queries about Certificate of Origin services"
            center={true}
          />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cargo-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Certificate of Origin Services?</h2>
          <p className="max-w-2xl mx-auto mb-8">Contact our documentation experts today to streamline your international trade documentation and ensure compliance.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-cargo hover:bg-cargo-600 text-white">
              <Link to="/contact">Contact Us</Link>
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

export default CertificateOfOrigin;
