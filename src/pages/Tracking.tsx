import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TrackingHero from '@/components/tracking/TrackingHero';
import TrackingInfo from '@/components/tracking/TrackingInfo';
import TrackingFAQ from '@/components/tracking/TrackingFAQ';
import ShipmentResult from '@/components/tracking/ShipmentResult';
import useTrackingSearch from '@/hooks/useTrackingSearch';

const Tracking: React.FC = () => {
  const {
    trackingNumber,
    setTrackingNumber,
    isTracking,
    shipmentData,
    shipmentEvents,
    handleSubmit,
    handleTrackingSearch
  } = useTrackingSearch();
  
  const location = useLocation();

  useEffect(() => {
    // Check if there's a tracking number in the URL query params
    const searchParams = new URLSearchParams(location.search);
    const trackingParam = searchParams.get('tracking');
    
    if (trackingParam) {
      setTrackingNumber(trackingParam);
      handleTrackingSearch(trackingParam);
    }
  }, [location]);

  return (
    <div>
      {/* Hero Section */}
      <TrackingHero 
        trackingNumber={trackingNumber}
        setTrackingNumber={setTrackingNumber}
        handleSubmit={handleSubmit}
        isTracking={isTracking}
      />

      {/* Tracking Results Section */}
      {shipmentData && (
        <ShipmentResult 
          shipment={shipmentData}
          events={shipmentEvents}
        />
      )}

      {/* Info Section (when no tracking results) */}
      {!shipmentData && !isTracking && (
        <TrackingInfo />
      )}

      {/* FAQ Section */}
      <TrackingFAQ />
    </div>
  );
};

export default Tracking;