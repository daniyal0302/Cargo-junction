
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface TrackingFormProps {
  dark?: boolean;
  placeholder?: string;
  buttonText?: string;
}

const TrackingForm: React.FC<TrackingFormProps> = ({ 
  dark = false, 
  placeholder = "Enter your tracking number", 
  buttonText = "Track",
}) => {
  const [trackingNumber, setTrackingNumber] = useState('');
   const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle tracking logic
    console.log(`Tracking number submitted: ${trackingNumber}`);
    // Would typically redirect to tracking page with the number as a parameter
        if (!trackingNumber.trim()) return;
    
    // Navigate to tracking page with the tracking number
    navigate(`/tracking?tracking=${trackingNumber.trim()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex">
        <Input
          type="text"
          placeholder={placeholder}
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          className={`rounded-r-none shadow-sm ${
            dark ? 'bg-gray-800 border-gray-700 text-white placeholder:text-gray-400' : ''
          }`}
        />
        <Button 
          type="submit" 
          className={`px-6 rounded-l-none ${
            dark 
              ? 'bg-cargo hover:bg-cargo-600 text-white' 
              : 'bg-cargo hover:bg-cargo-light text-white'
          }`}
        >
          <Search className="h-4 w-4 mr-2" />
          {buttonText}
        </Button>
      </div>
    </form>
  );
};

export default TrackingForm;
