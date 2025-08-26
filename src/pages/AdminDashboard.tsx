import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, Edit, Trash2, Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { useToast } from '@/components/ui/use-toast';
import CreateShipmentForm from '@/components/admin/CreateShipmentForm';

interface Shipment {
  id: string;
  clientName: string;
  origin: string;
  destination: string;
  createdAt: string;
  estimatedDelivery: string;
  status: 'Pending' | 'In Transit' | 'Customs' | 'Out for Delivery' | 'Delivered';
}

const AdminDashboard = () => {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingShipment, setEditingShipment] = useState<Shipment | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if admin is logged in
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/admin/login');
      return;
    }

    // Load mock data from localStorage or use sample data
    const storedShipments = localStorage.getItem('shipments');
    if (storedShipments) {
      setShipments(JSON.parse(storedShipments));
    } else {
      // Sample data
      const sampleShipments: Shipment[] = [
        {
          id: 'CJ1001',
          clientName: 'Acme Corporation',
          origin: 'Los Angeles, CA',
          destination: 'New York, NY',
          createdAt: '2025-04-29',
          estimatedDelivery: '2025-05-05',
          status: 'In Transit',
        },
        {
          id: 'CJ1002',
          clientName: 'Global Industries',
          origin: 'Chicago, IL',
          destination: 'Miami, FL',
          createdAt: '2025-04-30',
          estimatedDelivery: '2025-05-06',
          status: 'Pending',
        },
        {
          id: 'CJ1003',
          clientName: 'Tech Innovations',
          origin: 'Seattle, WA',
          destination: 'Boston, MA',
          createdAt: '2025-04-28',
          estimatedDelivery: '2025-05-03',
          status: 'Delivered',
        },
      ];
      setShipments(sampleShipments);
      localStorage.setItem('shipments', JSON.stringify(sampleShipments));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    navigate('/admin/login');
  };

  const handleSaveShipment = (shipment: Shipment) => {
    if (editingShipment) {
      // Update existing shipment
      const updatedShipments = shipments.map(s => 
        s.id === editingShipment.id ? { ...shipment, id: editingShipment.id } : s
      );
      setShipments(updatedShipments);
      localStorage.setItem('shipments', JSON.stringify(updatedShipments));
      toast({
        title: "Shipment updated",
        description: `Tracking #${editingShipment.id} has been updated`,
      });
    } else {
      // Create new shipment with unique ID
      const newId = `CJ${Math.floor(1000 + Math.random() * 9000)}`;
      const newShipment = { ...shipment, id: newId, createdAt: new Date().toISOString().split('T')[0] };
      const updatedShipments = [...shipments, newShipment];
      setShipments(updatedShipments);
      localStorage.setItem('shipments', JSON.stringify(updatedShipments));
      toast({
        title: "Shipment created",
        description: `New tracking #${newId} has been created`,
      });
    }
    
    setIsFormOpen(false);
    setEditingShipment(null);
  };

  const handleEditShipment = (shipment: Shipment) => {
    setEditingShipment(shipment);
    setIsFormOpen(true);
  };

  const handleDeleteShipment = (id: string) => {
    const updatedShipments = shipments.filter(s => s.id !== id);
    setShipments(updatedShipments);
    localStorage.setItem('shipments', JSON.stringify(updatedShipments));
    toast({
      title: "Shipment deleted",
      description: `Tracking #${id} has been removed`,
    });
  };

  const filteredShipments = shipments.filter(shipment => 
    shipment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shipment.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shipment.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shipment.destination.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Shipping Dashboard</h1>
          <p className="text-gray-600">Manage all your shipments in one place</p>
        </div>
        <Button onClick={handleLogout} variant="outline">Logout</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Shipments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Package className="h-6 w-6 text-cargo mr-2" />
              <p className="text-3xl font-bold">{shipments.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Active Shipments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Package className="h-6 w-6 text-blue-500 mr-2" />
              <p className="text-3xl font-bold">
                {shipments.filter(s => s.status !== 'Delivered').length}
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Delivered</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Package className="h-6 w-6 text-green-500 mr-2" />
              <p className="text-3xl font-bold">
                {shipments.filter(s => s.status === 'Delivered').length}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="flex w-full md:w-auto mb-4 md:mb-0">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input 
              type="text"
              placeholder="Search shipments..." 
              className="pl-10" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <Button 
          onClick={() => {
            setEditingShipment(null);
            setIsFormOpen(true);
          }} 
          className="bg-cargo hover:bg-cargo-light text-white"
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Shipment
        </Button>
      </div>

      <div className="rounded-lg border shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tracking #</TableHead>
              <TableHead>Client</TableHead>
              <TableHead className="hidden md:table-cell">Origin</TableHead>
              <TableHead className="hidden md:table-cell">Destination</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Est. Delivery</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredShipments.length > 0 ? (
              filteredShipments.map((shipment) => (
                <TableRow key={shipment.id}>
                  <TableCell className="font-medium">{shipment.id}</TableCell>
                  <TableCell>{shipment.clientName}</TableCell>
                  <TableCell className="hidden md:table-cell">{shipment.origin}</TableCell>
                  <TableCell className="hidden md:table-cell">{shipment.destination}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      shipment.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      shipment.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                      shipment.status === 'Customs' ? 'bg-purple-100 text-purple-800' :
                      shipment.status === 'Out for Delivery' ? 'bg-orange-100 text-orange-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {shipment.status}
                    </span>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{shipment.estimatedDelivery}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleEditShipment(shipment)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleDeleteShipment(shipment.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-4 text-gray-500">
                  No shipments found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {isFormOpen && (
        <CreateShipmentForm 
          isOpen={isFormOpen} 
          onClose={() => {
            setIsFormOpen(false);
            setEditingShipment(null);
          }}
          onSave={handleSaveShipment}
          shipment={editingShipment}
        />
      )}
    </div>
  );
};

export default AdminDashboard;