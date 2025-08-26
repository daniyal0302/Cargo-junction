
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import React from 'react';
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import Tracking from "./pages/Tracking";
// import NotFound from "./pages/NotFound";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import CertificateOfOrigin from "./pages/CertificateOfOrigin";
// import BusinessSolutions from "./pages/BusinessSolutions";
// import AdminLogin from "./pages/AdminLogin";
// import AdminDashboard from "./pages/AdminDashboard";
// import AdminGuard from "./components/admin/AdminGuard";
// import TariffCalculator from "./pages/TariffCalculator";
// Lazy load components for better performance
import React, { Suspense } from 'react';
import PageLoader from "./components/PageLoader";
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Services = React.lazy(() => import("./pages/Services"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Tracking = React.lazy(() => import("./pages/Tracking"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const CertificateOfOrigin = React.lazy(() => import("./pages/CertificateOfOrigin"));
const BusinessSolutions = React.lazy(() => import("./pages/BusinessSolutions"));
const AdminLogin = React.lazy(() => import("./pages/AdminLogin"));
const AdminDashboard = React.lazy(() => import("./pages/AdminDashboard"));
const TariffCalculator = React.lazy(() => import("./pages/TariffCalculator"));
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminGuard from "./components/admin/AdminGuard";

// Create a client
const queryClient = new QueryClient();

// Layout wrapper component
const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col min-h-screen animate-fade-in">
    <Navbar />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            {/* <Routes>
             
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route 
                path="/admin/dashboard" 
                element={
                  <AdminGuard>
                    <AdminDashboard />
                  </AdminGuard>
                } 
              />
              
             
              <Route path="/" element={
                <div className="flex flex-col min-h-screen">
                  <Navbar />
                  <main className="flex-grow">
                    <Home />
                  </main>
                  <Footer />
                </div>
              } />
              
              <Route path="/about" element={
                <div className="flex flex-col min-h-screen">
                  <Navbar />
                  <main className="flex-grow">
                    <About />
                  </main>
                  <Footer />
                </div>
              } />
              
              <Route path="/services" element={
                <div className="flex flex-col min-h-screen">
                  <Navbar />
                  <main className="flex-grow">
                    <Services />
                  </main>
                  <Footer />
                </div>
              } />
              
              <Route path="/contact" element={
                <div className="flex flex-col min-h-screen">
                  <Navbar />
                  <main className="flex-grow">
                    <Contact />
                  </main>
                  <Footer />
                </div>
              } />
              
              <Route path="/tracking" element={
                <div className="flex flex-col min-h-screen">
                  <Navbar />
                  <main className="flex-grow">
                    <Tracking />
                  </main>
                  <Footer />
                </div>
              } />
              
              <Route path="/certificate-of-origin" element={
                <div className="flex flex-col min-h-screen">
                  <Navbar />
                  <main className="flex-grow">
                    <CertificateOfOrigin />
                  </main>
                  <Footer />
                </div>
              } />
              
              <Route path="/business-solutions" element={
                <div className="flex flex-col min-h-screen">
                  <Navbar />
                  <main className="flex-grow">
                    <BusinessSolutions />
                  </main>
                  <Footer />
                </div>
              } />
              
              <Route path="/tariff-calculator" element={
                <div className="flex flex-col min-h-screen">
                  <Navbar />
                  <main className="flex-grow">
                    <TariffCalculator />
                  </main>
                  <Footer />
                </div>
              } />
            </Routes> */}
             <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* Admin Routes (no navbar/footer) */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route 
                  path="/admin/dashboard" 
                  element={
                    <AdminGuard>
                      <AdminDashboard />
                    </AdminGuard>
                  } 
                />
                
                {/* Public Routes (with navbar/footer) */}
                <Route path="/" element={
                  <PageLayout>
                    <Home />
                  </PageLayout>
                } />
                
                <Route path="/about" element={
                  <PageLayout>
                    <About />
                  </PageLayout>
                } />
                
                <Route path="/services" element={
                  <PageLayout>
                    <Services />
                  </PageLayout>
                } />
                
                <Route path="/contact" element={
                  <PageLayout>
                    <Contact />
                  </PageLayout>
                } />
                
                <Route path="/tracking" element={
                  <PageLayout>
                    <Tracking />
                  </PageLayout>
                } />
                
                <Route path="/certificate-of-origin" element={
                  <PageLayout>
                    <CertificateOfOrigin />
                  </PageLayout>
                } />
                
                <Route path="/business-solutions" element={
                  <PageLayout>
                    <BusinessSolutions />
                  </PageLayout>
                } />
                
                <Route path="/tariff-calculator" element={
                  <PageLayout>
                    <TariffCalculator />
                  </PageLayout>
                } />
                
                <Route path="*" element={
                  <PageLayout>
                    <NotFound />
                  </PageLayout>
                } />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
