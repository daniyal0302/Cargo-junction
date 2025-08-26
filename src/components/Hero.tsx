
import React from 'react';
import { Button } from '@/components/ui/button';
import TrackingForm from './TrackingForm';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  showTracking?: boolean;
  showButtons?: boolean;
  backgroundImage?: string;
  imagePosition?: 'center' | 'top' | 'bottom';
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  showTracking = false,
  showButtons = false,
  backgroundImage = '/lovable-uploads/jjg.jpg',
  imagePosition = 'center'
}) => {
  return (
    <div 
      className="relative bg-cargo-dark text-white py-24 md:py-32"
      style={{
        backgroundImage: `linear-gradient(rgba(12, 58, 45, 0.85), rgba(12, 58, 45, 0.85)), url(${backgroundImage})`,
        backgroundPosition: imagePosition,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">{subtitle}</p>
          
          {showTracking && (
            <div className="mb-8">
              <TrackingForm dark />
            </div>
          )}

          {showButtons && (
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-cargo hover:bg-cargo-600 text-white">
                <Link to="/tracking">Track Your Shipment</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-cargo-dark">
                <Link to="/quote">Get a Quote</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
