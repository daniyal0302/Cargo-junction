
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
  const content = (
    <Card className="h-full transition-all duration-300 hover:shadow-lg border-gray-100">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="bg-green-50 p-3 rounded-full w-fit mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
        {link && (
          <div className="mt-4 text-cargo font-medium flex items-center">
            <span>Learn more</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        )}
      </CardContent>
    </Card>
  );

  if (link) {
    return (
      <Link to={link} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
};

export default ServiceCard;
