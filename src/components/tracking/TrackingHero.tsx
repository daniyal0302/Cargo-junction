import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface TrackingHeroProps {
  trackingNumber: string;
  setTrackingNumber: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isTracking: boolean;
}

const TrackingHero: React.FC<TrackingHeroProps> = ({ 
  trackingNumber, 
  setTrackingNumber, 
  handleSubmit,
  isTracking
}) => {
  return (
    <div className="bg-cargo-dark text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Track Your Shipment</h1>
          <p className="text-lg max-w-2xl mx-auto mb-10">
            Enter your tracking number to get real-time updates on your shipment's journey.
          </p>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-3">
              <Input
                type="text"
                placeholder="Enter Tracking Number"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1 bg-white text-gray-800"
              />
              <Button 
                type="submit" 
                className="bg-orange hover:bg-orange-600 text-white"
                disabled={isTracking}
              >
                {isTracking ? 'Searching...' : 'Track Shipment'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TrackingHero;