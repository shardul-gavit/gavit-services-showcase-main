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
import BlogIndex from "./pages/BlogIndex";
import BlogPostPage from "./pages/BlogPostPage";
import BlogCategoryPage from "./pages/BlogCategoryPage";
import TechRadar from "./pages/TechRadar";
import Career from "./pages/Career";
import CareerApply from "./pages/CareerApply";
import Elearning from "./pages/Elearning";
import TechnicalCertification from "./pages/TechnicalCertification";
import HrCertification from "./pages/HrCertification";
import ComingSoon from "./pages/ComingSoon";
import WhyJoinUs from "./pages/WhyJoinUs";
import CareerGrowth from "./pages/CareerGrowth";
import NotFound from "./pages/NotFound";
import ErpDevelopment from "./pages/ErpDevelopment";
import AiSoftware from "./pages/AiSoftware";
import GstBillingSoftware from "./pages/GstBillingSoftware";
import CustomBillingSoftware from "./pages/CustomBillingSoftware";
import LocationPage from "./pages/LocationPage";
import Industries from "./pages/Industries";
import Pricing from "./pages/Pricing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ErrorBoundary from "./components/ErrorBoundary";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesHub />} />
              <Route path="/it-services" element={<ItServices />} />
              <Route path="/staffing" element={<Staffing />} />
              <Route path="/remote-staffing" element={<RemoteStaffing />} />
              <Route path="/web-development" element={<WebDevelopment />} />
              <Route path="/app-development" element={<AppDevelopment />} />
              <Route path="/erp-development" element={<ErpDevelopment />} />
              <Route path="/ai-software" element={<AiSoftware />} />
              <Route path="/gst-billing-software" element={<GstBillingSoftware />} />
              <Route path="/custom-billing-software" element={<CustomBillingSoftware />} />
              <Route path="/web-app-development" element={<AppDevelopment />} />
              <Route path="/virtual-assistant" element={<RemoteStaffing />} />
              <Route path="/custom-software" element={<ItServices />} />
              <Route path="/it-consultancy" element={<ItServices />} />
              <Route path="/locations/:slug" element={<LocationPage />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/category/:category" element={<BlogCategoryPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/tech-radar" element={<TechRadar />} />
              <Route path="/case-studies" element={<BlogIndex />} />
              <Route path="/career" element={<Career />} />
              <Route path="/career/apply" element={<CareerApply />} />
              <Route path="/coming-soon" element={<ComingSoon />} />
              <Route path="/why-join-us" element={<WhyJoinUs />} />
              <Route path="/career-growth" element={<CareerGrowth />} />
              <Route path="/elearning" element={<Elearning />} />
              <Route path="/technical-certification" element={<TechnicalCertification />} />
              <Route path="/hr-certification" element={<HrCertification />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/blogs" element={<Blogs />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
