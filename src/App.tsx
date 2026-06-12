import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ErrorBoundary from "./components/ErrorBoundary";
import { PageLoader } from "./components/PageLoader";
import { PrerenderSignal } from "./components/PrerenderSignal";
import { ALIAS_ROUTE_SEO } from "./constants/aliasRouteSeo";

const About = lazy(() => import("./pages/About"));
const ServicesHub = lazy(() => import("./pages/ServicesHub"));
const ItServices = lazy(() => import("./pages/ItServices"));
const Staffing = lazy(() => import("./pages/Staffing"));
const RemoteStaffing = lazy(() => import("./pages/RemoteStaffing"));
const WebDevelopment = lazy(() => import("./pages/WebDevelopment"));
const AppDevelopment = lazy(() => import("./pages/AppDevelopment"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogIndex = lazy(() => import("./pages/BlogIndex"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const BlogNotFound = lazy(() => import("./pages/BlogNotFound"));
const BlogCategoryPage = lazy(() => import("./pages/BlogCategoryPage"));
const TechRadar = lazy(() => import("./pages/TechRadar"));
const Career = lazy(() => import("./pages/Career"));
const CareerApply = lazy(() => import("./pages/CareerApply"));
const Elearning = lazy(() => import("./pages/Elearning"));
const TechnicalCertification = lazy(() => import("./pages/TechnicalCertification"));
const HrCertification = lazy(() => import("./pages/HrCertification"));
const ComingSoon = lazy(() => import("./pages/ComingSoon"));
const WhyJoinUs = lazy(() => import("./pages/WhyJoinUs"));
const CareerGrowth = lazy(() => import("./pages/CareerGrowth"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ErpDevelopment = lazy(() => import("./pages/ErpDevelopment"));
const AiSoftware = lazy(() => import("./pages/AiSoftware"));
const GstBillingSoftware = lazy(() => import("./pages/GstBillingSoftware"));
const CustomBillingSoftware = lazy(() => import("./pages/CustomBillingSoftware"));
const LocationPage = lazy(() => import("./pages/LocationPage"));
const Industries = lazy(() => import("./pages/Industries"));
const Pricing = lazy(() => import("./pages/Pricing"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const FaqPage = lazy(() => import("./pages/FaqPage"));

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
          <PrerenderSignal />
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<ServicesHub />} />
                <Route path="/services/web-development" element={<WebDevelopment />} />
                <Route path="/services/it-staff-augmentation" element={<Staffing />} />
                <Route
                  path="/services/custom-software"
                  element={<ItServices seo={ALIAS_ROUTE_SEO.customSoftware} />}
                />
                <Route path="/services/erp-development" element={<ErpDevelopment />} />
                <Route path="/services/ai-development" element={<AiSoftware />} />
                <Route
                  path="/services/virtual-assistant"
                  element={<RemoteStaffing seo={ALIAS_ROUTE_SEO.virtualAssistant} />}
                />
                <Route path="/services/seo" element={<WebDevelopment />} />
                <Route path="/it-services" element={<ItServices />} />
                <Route path="/staffing" element={<Staffing />} />
                <Route path="/remote-staffing" element={<RemoteStaffing />} />
                <Route path="/web-development" element={<WebDevelopment />} />
                <Route path="/app-development" element={<AppDevelopment />} />
                <Route path="/erp-development" element={<ErpDevelopment />} />
                <Route path="/ai-software" element={<AiSoftware />} />
                <Route path="/gst-billing-software" element={<GstBillingSoftware />} />
                <Route path="/custom-billing-software" element={<CustomBillingSoftware />} />
                <Route path="/web-app-development" element={<AppDevelopment seo={ALIAS_ROUTE_SEO.webAppDevelopment} />} />
                <Route path="/virtual-assistant" element={<RemoteStaffing seo={ALIAS_ROUTE_SEO.virtualAssistant} />} />
                <Route path="/custom-software" element={<ItServices seo={ALIAS_ROUTE_SEO.customSoftware} />} />
                <Route path="/it-consultancy" element={<ItServices seo={ALIAS_ROUTE_SEO.itConsultancy} />} />
                <Route path="/locations/:slug" element={<LocationPage />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/blog" element={<BlogIndex />} />
                <Route path="/blog/404" element={<BlogNotFound />} />
                <Route path="/blog/category/:category" element={<BlogCategoryPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="/tech-radar" element={<TechRadar />} />
                <Route path="/career" element={<Career />} />
                <Route path="/career/apply" element={<CareerApply />} />
                <Route path="/coming-soon" element={<ComingSoon />} />
                <Route path="/why-join-us" element={<WhyJoinUs />} />
                <Route path="/career-growth" element={<CareerGrowth />} />
                <Route path="/elearning" element={<Elearning />} />
                <Route path="/technical-certification" element={<TechnicalCertification />} />
                <Route path="/hr-certification" element={<HrCertification />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
