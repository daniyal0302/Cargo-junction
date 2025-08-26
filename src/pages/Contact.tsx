
import React from 'react';
import Hero from '@/components/Hero';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8 text-green-500" />,
      title: "Our Headquarters",
      details: [
        "123 Logistics Way",
        "Shipping City, SC 12345",
        "United States"
      ]
    },
    {
      icon: <Phone className="w-8 h-8 text-green-500" />,
      title: "Phone Numbers",
      details: [
        "Main: +1 (800) 123-4567",
        "Support: +1 (800) 987-6543",
        "Fax: +1 (800) 456-7890"
      ]
    },
    {
      icon: <Mail className="w-8 h-8 text-green-500" />,
      title: "Email Addresses",
      details: [
        "info@cargojunction.com",
        "support@cargojunction.com", 
        "sales@cargojunction.com"
      ]
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: "Business Hours",
      details: [
        "Monday-Friday: 9am-6pm",
        "Saturday: 9am-1pm", 
        "Sunday: Closed"
      ]
    }
  ];

  const globalOffices = [
    {
      region: "North America",
      locations: ["New York • Chicago • Los Angeles • Toronto"]
    },
    {
      region: "Europe",
      locations: ["London • Paris • Berlin • Amsterdam"]
    },
    {
      region: "Middle East & Africa",
      locations: ["Dubai • Johannesburg • Cairo"]
    },
    {
      region: "Asia Pacific",
      locations: ["Singapore • Tokyo • Shanghai • Sydney"]
    }
  ];

  const faqs = [
    {
      question: "How do I get a shipping quote?",
      answer: "You can request a shipping quote by filling out our online quote form, calling our customer service team, or sending an email to quotes@cargojunction.com with your shipment details."
    },
    {
      question: "How can I track my shipment?",
      answer: "You can track your shipment by entering your tracking number on our website's tracking page or by contacting our customer service team with your reference number."
    },
    {
      question: "What shipping documents do I need?",
      answer: "Required documents typically include a commercial invoice, packing list, and bill of lading. For international shipments, you may also need certificates of origin, customs declarations, and other specific documents."
    },
    {
      question: "What are your payment terms?",
      answer: "We offer various payment options including credit terms for established customers, credit card payments, and bank transfers. Please contact our accounting department for specific details."
    },
    {
      question: "Do you offer customs clearance services?",
      answer: "Yes, we provide comprehensive customs clearance services to ensure your shipments move smoothly across international borders, including documentation preparation and regulatory compliance."
    },
    {
      question: "Do you offer cargo insurance?",
      answer: "Yes, we offer comprehensive cargo insurance options to protect your shipments against loss or damage during transit. Our team can help you determine the appropriate coverage for your needs."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Contact Us" 
        subtitle="Get in touch with our logistics experts to discuss your shipping needs and discover tailored solutions."
        backgroundImage="/lovable-uploads/620ff3a4-172b-454c-bddd-dc44d71c2814.png"
      />

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 mb-1">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cargo"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cargo"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cargo"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cargo"
                    placeholder="Acme Inc."
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cargo"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={6} 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cargo"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                <Button className="w-full bg-cargo hover:bg-cargo-light text-white">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <img 
                src="/lovable-uploads/ee046937-aef1-4078-816c-8630b7842717.png" 
                alt="Container ship at port" 
                className="w-full h-auto rounded-lg shadow-lg mb-8"
              />

              <h3 className="text-2xl font-bold mb-4">Global Offices</h3>
              
              <div className="space-y-6">
                {globalOffices.map((office, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-lg mb-2">{office.region}</h4>
                    {office.locations.map((location, i) => (
                      <p key={i} className="text-gray-600">{location}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find quick answers to common questions about our services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cargo-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Simplify Your Logistics?</h2>
          <p className="max-w-2xl mx-auto mb-8">Join thousands of businesses that trust Cargo Junction for their shipping and supply chain needs.</p>
          
          <div className="flex justify-center">
            <Button className="bg-white text-cargo-dark hover:bg-gray-100">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
