import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface Shipment {
  id: string;
  clientName: string;
  origin: string;
  destination: string;
  createdAt: string;
  estimatedDelivery: string;
  status: 'Pending' | 'In Transit' | 'Customs' | 'Out for Delivery' | 'Delivered';
}

interface CreateShipmentFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (shipment: Shipment) => void;
  shipment: Shipment | null;
}

const CreateShipmentForm: React.FC<CreateShipmentFormProps> = ({
  isOpen,
  onClose,
  onSave,
  shipment
}) => {
  const [clientName, setClientName] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [status, setStatus] = useState<'Pending' | 'In Transit' | 'Customs' | 'Out for Delivery' | 'Delivered'>('Pending');
  const [estimatedDelivery, setEstimatedDelivery] = useState<Date | undefined>(undefined);

  useEffect(() => {
    if (shipment) {
      setClientName(shipment.clientName);
      setOrigin(shipment.origin);
      setDestination(shipment.destination);
      setStatus(shipment.status);
      setEstimatedDelivery(new Date(shipment.estimatedDelivery));
    } else {
      setClientName('');
      setOrigin('');
      setDestination('');
      setStatus('Pending');
      setEstimatedDelivery(undefined);
    }
  }, [shipment]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!clientName || !origin || !destination || !estimatedDelivery) {
      return; // Form validation
    }

    const formattedDate = format(estimatedDelivery, 'yyyy-MM-dd');
    
    onSave({
      id: shipment?.id || '', // If editing, this will be replaced in parent component
      clientName,
      origin,
      destination,
      createdAt: shipment?.createdAt || new Date().toISOString().split('T')[0],
      estimatedDelivery: formattedDate,
      status
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {shipment ? `Edit Shipment #${shipment.id}` : 'Create New Shipment'}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="clientName">Client Name</Label>
              <Input
                id="clientName"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Enter client name"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="origin">Origin</Label>
              <Input
                id="origin"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                placeholder="Enter origin city, state"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="destination">Destination</Label>
              <Input
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Enter destination city, state"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="status">Status</Label>
              <Select value={status} onValueChange={(value) => setStatus(value as any)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="In Transit">In Transit</SelectItem>
                  <SelectItem value="Customs">Customs</SelectItem>
                  <SelectItem value="Out for Delivery">Out for Delivery</SelectItem>
                  <SelectItem value="Delivered">Delivered</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="estimatedDelivery">Estimated Delivery Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !estimatedDelivery && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {estimatedDelivery ? (
                      format(estimatedDelivery, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={estimatedDelivery}
                    onSelect={setEstimatedDelivery}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-cargo hover:bg-cargo-light">
              {shipment ? 'Update Shipment' : 'Create Shipment'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateShipmentForm;
