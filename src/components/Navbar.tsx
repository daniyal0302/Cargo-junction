
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Search, Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Lock } from 'lucide-react';
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from '@/components/ui/drawer';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
   const navigate = useNavigate();

  // Close drawer when location changes (user navigates to a new page)
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle scroll behavior for navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      setIsScrolled(currentScrollPos > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle tracking logic
    console.log(`Tracking number submitted: ${trackingNumber}`);
    // Would typically redirect to tracking page with the number as a parameter
        if (!trackingNumber.trim()) return;
    
    // Navigate to tracking page with the tracking number
    navigate(`/tracking?tracking=${trackingNumber.trim()}`);
    setTrackingNumber(''); // Clear the input after submission
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-gray-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <span className="text-sm">+1 (800) 123-4567</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <form onSubmit={handleTrackSubmit} className="flex">
              <Input
                type="text"
                placeholder="Enter Tracking Number"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="h-8 text-sm bg-gray-800 border-gray-700 rounded-r-none focus-visible:ring-offset-0 text-white"
              />
              <Button
                type="submit"
                size="sm"
                className="h-8 rounded-l-none bg-cargo hover:bg-cargo-500"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
            <Link to="/contact" className="text-sm hover:text-cargo transition-colors">Contact</Link>
            <Link to="/careers" className="text-sm hover:text-cargo transition-colors">Careers</Link>
            <Link to="/client-portal" className="text-sm hover:text-cargo transition-colors">Client Portal</Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`bg-white py-4 shadow-md transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' : ''
          } ${!visible ? '-translate-y-full' : 'translate-y-0'
          }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold flex items-center">
              <span className="text-cargo-dark">Cargo</span>
              <span className="text-cargo">Junction</span>
            </div>
          </Link> */}
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/logo1.png" alt="Company Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-800 hover:text-cargo transition-colors">About Us</Link>
            <Link to="/services" className="text-gray-800 hover:text-cargo transition-colors">Logistics</Link>
            <Link to="/certificate-of-origin" className="text-gray-800 hover:text-cargo transition-colors">COO</Link>
            <Link to="/business-solutions" className="text-gray-800 hover:text-cargo transition-colors">Business Solutions</Link>
            <Link to="/tariff-calculator">
              <Button className="bg-cargo hover:bg-cargo-600 text-white">
                Tariff Calculator
              </Button>
            </Link>
            <Link to="/admin/login" className="flex items-center text-gray-800 hover:text-orange transition-colors">
              <Lock className="w-4 h-4 mr-1" />
              Admin
            </Link>
          </div>

          {/* Mobile menu button and drawer */}
          <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
              <button className="md:hidden p-2 focus:outline-none">
                <Menu className="w-6 h-6 text-gray-800" />
              </button>
            </DrawerTrigger>
            <DrawerContent className="px-4 pt-4 pb-8">
              <div className="flex justify-end mb-4">
                <DrawerClose className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </DrawerClose>
              </div>

              <div className="flex items-center justify-center mb-6">
                {/* <div className="text-xl font-bold flex items-center">
                  <span className="text-cargo-dark">Cargo</span>
                  <span className="text-cargo">Junction</span>
                </div> */}
                <img src="/lovable-uploads/logo1.png" alt="Company Logo" className="h-12 w-auto mx-auto" />

              </div>

              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className="text-gray-800 py-3 px-4 border-b border-gray-100 hover:bg-gray-50 hover:text-cargo transition-colors rounded-md flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-800 py-3 px-4 border-b border-gray-100 hover:bg-gray-50 hover:text-cargo transition-colors rounded-md flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/services"
                  className="text-gray-800 py-3 px-4 border-b border-gray-100 hover:bg-gray-50 hover:text-cargo transition-colors rounded-md flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  Logistics
                </Link>
                <Link
                  to="/certificate-of-origin"
                  className="text-gray-800 py-3 px-4 border-b border-gray-100 hover:bg-gray-50 hover:text-cargo transition-colors rounded-md flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  COO
                </Link>
                <Link
                  to="/business-solutions"
                  className="text-gray-800 py-3 px-4 border-b border-gray-100 hover:bg-gray-50 hover:text-cargo transition-colors rounded-md flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  Business Solutions
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-800 py-3 px-4 border-b border-gray-100 hover:bg-gray-50 hover:text-cargo transition-colors rounded-md flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="/tracking"
                  className="text-gray-800 py-3 px-4 border-b border-gray-100 hover:bg-gray-50 hover:text-cargo transition-colors rounded-md flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  Tracking
                </Link>
                <Link
                  to="/careers"
                  className="text-gray-800 py-3 px-4 border-b border-gray-100 hover:bg-gray-50 hover:text-cargo transition-colors rounded-md flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  Careers
                </Link>
                <Link
                  to="/client-portal"
                  className="text-gray-800 py-3 px-4 border-b border-gray-100 hover:bg-gray-50 hover:text-cargo transition-colors rounded-md flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  Client Portal
                </Link>

                <Link to="/tariff-calculator" onClick={() => setIsOpen(false)}>
                  <Button className="bg-cargo hover:bg-cargo-600 text-white w-full mt-2">
                    Tariff Calculator
                  </Button>
                </Link>

                <Link
                  to="/admin/login"
                  className="flex items-center justify-center text-gray-800 py-3 px-4 border border-gray-300 hover:bg-gray-50 hover:text-orange transition-colors rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Admin Login
                </Link>

                <form onSubmit={handleTrackSubmit} className="flex mt-4 w-full">
                  <Input
                    type="text"
                    placeholder="Enter Tracking Number"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="rounded-r-none focus-visible:ring-offset-0"
                  />
                  <Button
                    type="submit"
                    className="rounded-l-none bg-cargo hover:bg-cargo-500"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
