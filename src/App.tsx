import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import ServicesHub from "./pages/ServicesHub";
import ItServices from "./pages/ItServices";
import Staffing from "./pages/Staffing";
import RemoteStaffing from "./pages/RemoteStaffing";
import WebDevelopment from "./pages/WebDevelopment";
import AppDevelopment from "./pages/AppDevelopment";
import ContactPage from "./pages/ContactPage";
import Blogs from "./pages/Blogs";
import Career from "./pages/Career";
import Elearning from "./pages/Elearning";
import TechnicalCertification from "./pages/TechnicalCertification";
import HrCertification from "./pages/HrCertification";
import ComingSoon from "./pages/ComingSoon";
import WhyJoinUs from "./pages/WhyJoinUs";
import CareerGrowth from "./pages/CareerGrowth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesHub />} />
          <Route path="/it-services" element={<ItServices />} />
          <Route path="/staffing" element={<Staffing />} />
          <Route path="/remote-staffing" element={<RemoteStaffing />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route path="/career" element={<Career />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/why-join-us" element={<WhyJoinUs />} />
          <Route path="/career-growth" element={<CareerGrowth />} />
          <Route path="/elearning" element={<Elearning />} />
          <Route path="/technical-certification" element={<TechnicalCertification />} />
          <Route path="/hr-certification" element={<HrCertification />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blogs" element={<Blogs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
