import React from 'react';
import Loader from './ui/loader';

const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <Loader size="lg" text="Loading page..." />
      </div>
    </div>
  );
};

export default PageLoader;