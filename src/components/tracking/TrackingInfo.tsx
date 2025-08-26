import React from 'react';
import { Truck, Clock, Package } from 'lucide-react';
import { Card } from '@/components/ui/card';

const TrackingInfo: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Truck className="w-10 h-10 text-cargo mb-4" />
            <h3 className="text-xl font-semibold mb-3">How to Track Your Shipment</h3>
            <p className="text-gray-600 mb-4">
              Enter your tracking number in the search box above. You can find your tracking number on your shipping confirmation email or receipt.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 bg-cargo rounded-full mt-1 mr-2"></span>
                <span>Tracking updates every 4-6 hours</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 bg-cargo rounded-full mt-1 mr-2"></span>
                <span>Get notifications via email</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 bg-cargo rounded-full mt-1 mr-2"></span>
                <span>View estimated delivery times</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Clock className="w-10 h-10 text-cargo mb-4" />
            <h3 className="text-xl font-semibold mb-3">Delivery Estimates</h3>
            <p className="text-gray-600 mb-4">
              Our delivery timeframes are based on the service you selected and destination location. Typical delivery times:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex justify-between">
                <span>Express Freight:</span>
                <span className="font-medium">1-2 Business Days</span>
              </li>
              <li className="flex justify-between">
                <span>Priority Freight:</span>
                <span className="font-medium">2-3 Business Days</span>
              </li>
              <li className="flex justify-between">
                <span>Standard Freight:</span>
                <span className="font-medium">3-5 Business Days</span>
              </li>
              <li className="flex justify-between">
                <span>Economy Freight:</span>
                <span className="font-medium">5-7 Business Days</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Package className="w-10 h-10 text-cargo mb-4" />
            <h3 className="text-xl font-semibold mb-3">Need Assistance?</h3>
            <p className="text-gray-600 mb-4">
              Can't find your shipment or have questions about your delivery? Our customer service team is ready to help.
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-1">Customer Service:</p>
                <p className="text-gray-600">+1 (800) 123-4567</p>
              </div>
              <div>
                <p className="font-medium mb-1">Email Support:</p>
                <p className="text-gray-600">support@cargojunction.com</p>
              </div>
              <div>
                <p className="font-medium mb-1">Hours:</p>
                <p className="text-gray-600">Monday-Friday: 9am-6pm EST</p>
                <p className="text-gray-600">Saturday: 9am-1pm EST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingInfo;