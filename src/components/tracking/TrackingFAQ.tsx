import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TrackingFAQ: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Tracking FAQs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Why can't I find my tracking number?</h3>
              <p className="text-gray-600">
                If you're having trouble finding your tracking number, check your shipping confirmation email or receipt. The tracking number usually starts with CJ followed by 4 digits.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">How often is tracking information updated?</h3>
              <p className="text-gray-600">
                Tracking information is typically updated every 4-6 hours as your shipment moves through our network. Please note that there might be delays in updates during weekends or holidays.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrackingFAQ;