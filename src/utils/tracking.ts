// Helper functions for tracking

export const statusToProgress = (status: string): number => {
    switch (status) {
      case 'Pending': return 0;
      case 'In Transit': return 25;
      case 'Customs': return 50;
      case 'Out for Delivery': return 75;
      case 'Delivered': return 100;
      default: return 0;
    }
  };
  
  export const generateEvents = (shipment: {
    id: string;
    clientName: string;
    origin: string;
    destination: string;
    createdAt: string;
    estimatedDelivery: string;
    status: 'Pending' | 'In Transit' | 'Customs' | 'Out for Delivery' | 'Delivered';
  }) => {
    const events = [];
    const statusOrder = ['Pending', 'In Transit', 'Customs', 'Out for Delivery', 'Delivered'];
    const currentStatusIndex = statusOrder.indexOf(shipment.status);
    
    // Created/Pending event
    events.push({
      date: shipment.createdAt,
      time: '09:00 AM',
      location: shipment.origin,
      status: 'Shipment created',
      completed: true
    });
    
    // In Transit event
    if (currentStatusIndex >= 1) {
      const inTransitDate = new Date(shipment.createdAt);
      inTransitDate.setDate(inTransitDate.getDate() + 1);
      events.push({
        date: inTransitDate.toISOString().split('T')[0],
        time: '10:30 AM',
        location: shipment.origin,
        status: 'Shipment in transit',
        completed: true
      });
    }
    
    // Customs event
    if (currentStatusIndex >= 2) {
      const customsDate = new Date(shipment.createdAt);
      customsDate.setDate(customsDate.getDate() + 2);
      events.push({
        date: customsDate.toISOString().split('T')[0],
        time: '02:15 PM',
        location: 'Customs Processing Center',
        status: 'Processing at customs',
        completed: true
      });
    }
    
    // Out for Delivery event
    if (currentStatusIndex >= 3) {
      const outForDeliveryDate = new Date(shipment.estimatedDelivery);
      outForDeliveryDate.setDate(outForDeliveryDate.getDate() - 1);
      events.push({
        date: outForDeliveryDate.toISOString().split('T')[0],
        time: '08:45 AM',
        location: shipment.destination,
        status: 'Out for delivery',
        completed: true
      });
    }
    
    // Delivered event
    if (currentStatusIndex >= 4) {
      events.push({
        date: shipment.estimatedDelivery,
        time: '02:30 PM',
        location: shipment.destination,
        status: 'Delivered',
        completed: true
      });
    } else {
      events.push({
        date: shipment.estimatedDelivery,
        time: '12:00 PM',
        location: shipment.destination,
        status: 'Estimated delivery',
        completed: false
      });
    }
    
    return events;
  };
  