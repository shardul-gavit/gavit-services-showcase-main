import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <Seo
        title="404 - Page Not Found | Gavit E-Services"
        description="The page you're looking for doesn't exist."
        canonical="https://www.gaviteservice.com/404"
        robots="noindex, nofollow"
      />
      <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-orange-50 dark:from-blue-950 dark:to-orange-950 py-16">
        <div className="max-w-2xl w-full mx-auto px-4 text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              404
            </h1>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The page you're looking for doesn't exist or has been moved.
            </p>
            {location.pathname && (
              <p className="text-sm text-gray-500 dark:text-gray-500 font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded">
                {location.pathname}
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link to="/">
                <Home className="w-4 h-4" />
                Go Home
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2"
              onClick={() => window.history.back()}
            >
              <button type="button">
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link to="/services">
                <Search className="w-4 h-4" />
                Browse Services
              </Link>
            </Button>
          </div>

          <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Popular pages:
            </p>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <Link
                to="/services"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                Services
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/elearning"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                E-Learning
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/contact"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                Contact
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/career"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                Careers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
