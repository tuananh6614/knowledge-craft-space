
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-primary/5 to-background">
      <div className="container-custom max-w-2xl text-center">
        <h1 className="text-8xl md:text-9xl font-bold mb-4 animate-fade-in text-primary/80">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Page not found
        </h2>
        <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Link to="/">
            <Button size="lg" className="flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
