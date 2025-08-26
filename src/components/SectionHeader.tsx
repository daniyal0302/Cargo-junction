
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  center?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, center = false }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className="text-3xl font-bold mb-3">{title}</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
