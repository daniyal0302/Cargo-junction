import React from 'react';
import { Progress } from '@/components/ui/progress';

interface ShipmentProgressBarProps {
  status: string;
  statusValue: number;
}

const ShipmentProgressBar: React.FC<ShipmentProgressBarProps> = ({ status, statusValue }) => {
  return (
    <div className="mt-6">
      <div className="mb-2 flex justify-between text-sm">
        <span>Shipment Progress</span>
        <span>{statusValue}%</span>
      </div>
      <Progress value={statusValue} className="h-2" />
      
      <div className="flex justify-between mt-2 text-xs text-gray-500">
        <span>Created</span>
        <span>In Transit</span>
        <span>Customs</span>
        <span>Out for Delivery</span>
        <span>Delivered</span>
      </div>
    </div>
  );
};

export default ShipmentProgressBar;