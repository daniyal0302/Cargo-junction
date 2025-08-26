import React from 'react';
import { MapPin, Calendar, Package } from 'lucide-react';

interface ShipmentDetailsProps {
  origin: string;
  destination: string;
  createdAt: string;
  clientName: string;
}

const ShipmentDetails: React.FC<ShipmentDetailsProps> = ({ 
  origin, 
  destination, 
  createdAt, 
  clientName 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-gray-50">
      <div className="flex space-x-3">
        <MapPin className="w-5 h-5 text-cargo" />
        <div>
          <p className="text-sm text-gray-500">From</p>
          <p className="font-medium">{origin}</p>
        </div>
      </div>
      <div className="flex space-x-3">
        <MapPin className="w-5 h-5 text-cargo" />
        <div>
          <p className="text-sm text-gray-500">To</p>
          <p className="font-medium">{destination}</p>
        </div>
      </div>
      <div className="flex space-x-3">
        <Calendar className="w-5 h-5 text-cargo" />
        <div>
          <p className="text-sm text-gray-500">Ship Date</p>
          <p className="font-medium">{createdAt}</p>
        </div>
      </div>
      <div className="flex space-x-3">
        <Package className="w-5 h-5 text-cargo" />
        <div>
          <p className="text-sm text-gray-500">Client</p>
          <p className="font-medium">{clientName}</p>
        </div>
      </div>
    </div>
  );
};

export default ShipmentDetails;