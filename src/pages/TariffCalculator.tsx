import React, { useState } from 'react';
import { Calculator, Package, Truck, Ship, Plane } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SectionHeader from '@/components/SectionHeader';

interface TariffResult {
  baseCost: number;
  tariff: number;
  insurance: number;
  handling: number;
  total: number;
}

const TariffCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    weight: '',
    length: '',
    width: '',
    height: '',
    value: '',
    origin: '',
    destination: '',
    shippingMethod: '',
    cargoType: ''
  });
  
  const [result, setResult] = useState<TariffResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const shippingMethods = [
    { value: 'air', label: 'Air Freight', icon: Plane, multiplier: 2.5 },
    { value: 'sea', label: 'Sea Freight', icon: Ship, multiplier: 1.0 },
    { value: 'ground', label: 'Ground Transport', icon: Truck, multiplier: 1.5 }
  ];

  const cargoTypes = [
    { value: 'general', label: 'General Cargo', tariffRate: 0.05 },
    { value: 'electronics', label: 'Electronics', tariffRate: 0.08 },
    { value: 'textiles', label: 'Textiles', tariffRate: 0.12 },
    { value: 'machinery', label: 'Machinery', tariffRate: 0.06 },
    { value: 'food', label: 'Food Products', tariffRate: 0.15 },
    { value: 'chemicals', label: 'Chemicals', tariffRate: 0.10 }
  ];

  const countries = [
    'United States', 'Canada', 'Mexico', 'United Kingdom', 'Germany', 
    'France', 'China', 'Japan', 'Australia', 'Brazil', 'India', 'South Korea'
  ];

  const calculateTariff = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const weight = parseFloat(formData.weight) || 0;
      const volume = (parseFloat(formData.length) || 0) * 
                    (parseFloat(formData.width) || 0) * 
                    (parseFloat(formData.height) || 0) / 1000000; // Convert to cubic meters
      const value = parseFloat(formData.value) || 0;
      
      const selectedMethod = shippingMethods.find(m => m.value === formData.shippingMethod);
      const selectedCargo = cargoTypes.find(c => c.value === formData.cargoType);
      
      if (!selectedMethod || !selectedCargo) return;
      
      // Base cost calculation (simplified)
      const baseCost = Math.max(weight * 5, volume * 100) * selectedMethod.multiplier;
      
      // Tariff calculation
      const tariff = value * selectedCargo.tariffRate;
      
      // Insurance (1% of cargo value)
      const insurance = value * 0.01;
      
      // Handling fees
      const handling = 50 + (weight > 100 ? (weight - 100) * 2 : 0);
      
      const total = baseCost + tariff + insurance + handling;
      
      setResult({
        baseCost,
        tariff,
        insurance,
        handling,
        total
      });
      
      setIsCalculating(false);
    }, 1500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setResult(null); // Clear previous results when form changes
  };

  const isFormValid = formData.weight && formData.value && formData.origin && 
                     formData.destination && formData.shippingMethod && formData.cargoType;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Tariff Calculator"
          subtitle="Calculate shipping costs and tariffs for your cargo shipments"
          center
        />

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calculator Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-cargo" />
                Shipment Details
              </CardTitle>
              <CardDescription>
                Enter your cargo details to calculate shipping costs and tariffs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Cargo Dimensions */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="0"
                    value={formData.weight}
                    onChange={(e) => handleInputChange('weight', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="value">Cargo Value (USD)</Label>
                  <Input
                    id="value"
                    type="number"
                    placeholder="0"
                    value={formData.value}
                    onChange={(e) => handleInputChange('value', e.target.value)}
                  />
                </div>
              </div>

              {/* Dimensions */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="length">Length (cm)</Label>
                  <Input
                    id="length"
                    type="number"
                    placeholder="0"
                    value={formData.length}
                    onChange={(e) => handleInputChange('length', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="width">Width (cm)</Label>
                  <Input
                    id="width"
                    type="number"
                    placeholder="0"
                    value={formData.width}
                    onChange={(e) => handleInputChange('width', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="0"
                    value={formData.height}
                    onChange={(e) => handleInputChange('height', e.target.value)}
                  />
                </div>
              </div>

              {/* Origin and Destination */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="origin">Origin Country</Label>
                  <Select value={formData.origin} onValueChange={(value) => handleInputChange('origin', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select origin" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map(country => (
                        <SelectItem key={country} value={country}>{country}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="destination">Destination Country</Label>
                  <Select value={formData.destination} onValueChange={(value) => handleInputChange('destination', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select destination" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map(country => (
                        <SelectItem key={country} value={country}>{country}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Shipping Method */}
              <div>
                <Label htmlFor="shipping-method">Shipping Method</Label>
                <Select value={formData.shippingMethod} onValueChange={(value) => handleInputChange('shippingMethod', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select shipping method" />
                  </SelectTrigger>
                  <SelectContent>
                    {shippingMethods.map(method => {
                      const Icon = method.icon;
                      return (
                        <SelectItem key={method.value} value={method.value}>
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4" />
                            {method.label}
                          </div>
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>

              {/* Cargo Type */}
              <div>
                <Label htmlFor="cargo-type">Cargo Type</Label>
                <Select value={formData.cargoType} onValueChange={(value) => handleInputChange('cargoType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select cargo type" />
                  </SelectTrigger>
                  <SelectContent>
                    {cargoTypes.map(type => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={calculateTariff}
                disabled={!isFormValid || isCalculating}
                className="w-full bg-cargo hover:bg-cargo-600"
              >
                {isCalculating ? 'Calculating...' : 'Calculate Tariff'}
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5 text-cargo" />
                Cost Breakdown
              </CardTitle>
              <CardDescription>
                Detailed breakdown of your shipping costs
              </CardDescription>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">Base Shipping Cost</p>
                      <p className="text-lg font-semibold">${result.baseCost.toFixed(2)}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">Tariff & Duties</p>
                      <p className="text-lg font-semibold">${result.tariff.toFixed(2)}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">Insurance</p>
                      <p className="text-lg font-semibold">${result.insurance.toFixed(2)}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">Handling Fees</p>
                      <p className="text-lg font-semibold">${result.handling.toFixed(2)}</p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center p-4 bg-cargo-50 rounded-lg">
                      <span className="text-lg font-semibold">Total Cost:</span>
                      <span className="text-2xl font-bold text-cargo">${result.total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                    <p><strong>Note:</strong> This is an estimated calculation. Actual costs may vary based on specific route, carrier, and current market conditions. Please contact us for a detailed quote.</p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Calculator className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Fill in the form to calculate your shipping costs</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TariffCalculator;