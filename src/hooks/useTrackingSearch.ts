import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { generateEvents } from '@/utils/tracking';

interface Shipment {
  id: string;
  clientName: string;
  origin: string;
  destination: string;
  createdAt: string;
  estimatedDelivery: string;
  status: 'Pending' | 'In Transit' | 'Customs' | 'Out for Delivery' | 'Delivered';
}

interface ShipmentEvent {
  date: string;
  time: string;
  location: string;
  status: string;
  completed: boolean;
}

const useTrackingSearch = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [shipmentData, setShipmentData] = useState<Shipment | null>(null);
  const [shipmentEvents, setShipmentEvents] = useState<ShipmentEvent[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber) return;
    
    // Update URL with tracking number for shareable link
    navigate(`/tracking?tracking=${trackingNumber}`);
    handleTrackingSearch(trackingNumber);
  };
  
  const handleTrackingSearch = (number: string) => {
    setIsTracking(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Look for shipment in localStorage
      const storedShipments = localStorage.getItem('shipments');
      if (storedShipments) {
        const shipments: Shipment[] = JSON.parse(storedShipments);
        const foundShipment = shipments.find(s => s.id === number);
        
        if (foundShipment) {
          setShipmentData(foundShipment);
          setShipmentEvents(generateEvents(foundShipment));
          setIsTracking(false);
        } else {
          setShipmentData(null);
          toast({
            title: "Shipment not found",
            description: `No shipment found with tracking number ${number}`,
            variant: "destructive",
          });
          setIsTracking(false);
        }
      } else {
        // If no shipments in localStorage, show error
        setShipmentData(null);
        toast({
          title: "No shipments available",
          description: "No shipping data found in the system",
          variant: "destructive",
        });
        setIsTracking(false);
      }
    }, 1000);
  };

  return {
    trackingNumber,
    setTrackingNumber,
    isTracking,
    shipmentData,
    shipmentEvents,
    handleSubmit,
    handleTrackingSearch
  };
};

export default useTrackingSearch;