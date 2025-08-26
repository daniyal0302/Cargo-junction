import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface AdminGuardProps {
  children: React.ReactNode;
}

const AdminGuard: React.FC<AdminGuardProps> = ({ children }) => {
  const navigate = useNavigate();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Check if the admin is logged in
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    
    if (!isLoggedIn) {
      toast({
        title: "Authentication required",
        description: "Please log in to access the admin dashboard",
        variant: "destructive",
      });
      navigate('/admin/login');
    }
    
    setIsCheckingAuth(false);
  }, [navigate, toast]);

  // Show loading indicator while checking auth
  if (isCheckingAuth) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-cargo" />
      </div>
    );
  }

  return <>{children}</>;
};

export default AdminGuard;