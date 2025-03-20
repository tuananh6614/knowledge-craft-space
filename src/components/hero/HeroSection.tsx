
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent py-20 md:py-32">
      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6 animate-fade-in">
            <span className="rounded-full bg-primary h-2 w-2 mr-2"></span>
            Welcome to the future of learning
          </div>
          
          <h1 className="animate-fade-up heading-xl mb-6 text-center">
            Discover a new way <br className="hidden sm:inline" />
            to <span className="text-primary">learn and grow</span>
          </h1>
          
          <p className="body-lg mb-8 text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Access expert-led courses, join community discussions, and explore premium resources, 
            all in one integrated platform designed for seamless learning.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/courses">
              <Button size="lg" className="w-full sm:w-auto">
                Explore Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 blur-3xl opacity-20 w-full max-w-4xl h-96 bg-primary rounded-full"></div>
    </section>
  );
};

export default HeroSection;
