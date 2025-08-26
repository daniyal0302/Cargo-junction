import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ShipmentEvent {
  date: string;
  time: string;
  location: string;
  status: string;
  completed: boolean;
}

interface ShipmentTimelineProps {
  events: ShipmentEvent[];
}

const ShipmentTimeline: React.FC<ShipmentTimelineProps> = ({ events }) => {
  return (
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-6">Shipment Timeline</h3>
      
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
        
        {/* Timeline events */}
        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={index} className="relative flex items-start">
              <div className={`absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 ${
                event.completed ? 'bg-green-500 border-green-500' : 'bg-gray-200 border-gray-300'
              }`}></div>
              
              <div className="ml-12">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold">{event.status}</span>
                  <span className={`text-sm ${event.completed ? 'text-green-600' : 'text-gray-500'}`}>
                    {event.completed && <CheckCircle className="inline w-4 h-4 mr-1" />}
                    {event.date} • {event.time}
                  </span>
                </div>
                <p className="text-gray-600">{event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShipmentTimeline;