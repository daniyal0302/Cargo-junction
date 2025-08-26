import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import ShipmentProgressBar from './ShipmentProgressBar';

interface ShipmentSummaryProps {
  shipmentId: string;
  status: 'Pending' | 'In Transit' | 'Customs' | 'Out for Delivery' | 'Delivered';
  estimatedDelivery: string;
  statusValue: number;
}

const ShipmentSummary: React.FC<ShipmentSummaryProps> = ({ 
  shipmentId, 
  status, 
  estimatedDelivery,
  statusValue
}) => {
  const { toast } = useToast();

  return (
    <div className="p-6 border-b border-gray-200">
      <div className="flex flex-wrap justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold mb-2">Tracking # {shipmentId}</h2>
          <div className="flex items-center">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
              status === 'Delivered' ? 'bg-green-100 text-green-800' :
              status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
              status === 'Customs' ? 'bg-purple-100 text-purple-800' :
              status === 'Out for Delivery' ? 'bg-orange-100 text-orange-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {status}
            </span>
            <span className="ml-4 text-gray-600">
              Estimated delivery: {estimatedDelivery}
            </span>
          </div>
        </div>
        <Button 
          className="mt-4 sm:mt-0 bg-cargo hover:bg-cargo-light"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            toast({
              title: "Link copied",
              description: "Tracking link copied to clipboard",
            });
          }}
        >
          Share Tracking
        </Button>
      </div>
      
      <ShipmentProgressBar status={status} statusValue={statusValue} />
    </div>
  );
};

export default ShipmentSummary;