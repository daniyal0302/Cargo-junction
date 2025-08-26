import React from 'react';
import { Button } from '@/components/ui/button';
import ShipmentSummary from './ShipmentSummary';
import ShipmentDetails from './ShipmentDetails';
import ShipmentTimeline from './ShipmentTimeline';
import { statusToProgress } from '@/utils/tracking';

interface ShipmentEvent {
  date: string;
  time: string;
  location: string;
  status: string;
  completed: boolean;
}

interface Shipment {
  id: string;
  clientName: string;
  origin: string;
  destination: string;
  createdAt: string;
  estimatedDelivery: string;
  status: 'Pending' | 'In Transit' | 'Customs' | 'Out for Delivery' | 'Delivered';
}

interface ShipmentResultProps {
  shipment: Shipment;
  events: ShipmentEvent[];
}

const ShipmentResult: React.FC<ShipmentResultProps> = ({ shipment, events }) => {
  const statusValue = statusToProgress(shipment.status);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <ShipmentSummary 
            shipmentId={shipment.id}
            status={shipment.status}
            estimatedDelivery={shipment.estimatedDelivery}
            statusValue={statusValue}
          />

          <ShipmentDetails 
            origin={shipment.origin}
            destination={shipment.destination}
            createdAt={shipment.createdAt}
            clientName={shipment.clientName}
          />

          <ShipmentTimeline events={events} />
        </div>

        {/* Additional Options */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Button variant="outline" className="border-cargo text-cargo hover:bg-cargo hover:text-white">
            Email Tracking Updates
          </Button>
          <Button variant="outline" className="border-cargo text-cargo hover:bg-cargo hover:text-white">
            Report an Issue
          </Button>
          <Button variant="outline" className="border-cargo text-cargo hover:bg-cargo hover:text-white">
            Download Shipping Documents
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShipmentResult;