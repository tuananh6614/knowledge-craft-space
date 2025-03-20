
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, BookOpen, Users, FileText, ArrowRight, CheckCircle } from "lucide-react";
import HeroSection from "@/components/hero/HeroSection";
import FeaturedCourses from "@/components/sections/FeaturedCourses";
import BlogPreview from "@/components/sections/BlogPreview";
import ResourcesPreview from "@/components/sections/ResourcesPreview";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Courses",
      description: "Access structured learning paths from basics to advanced levels across various subjects.",
    },
    {
      icon: Users,
      title: "Community Learning",
      description: "Engage with peers and experts through our interactive blog and discussion forums.",
    },
    {
      icon: FileText,
      title: "Premium Resources",
      description: "Download high-quality educational materials, templates, and practice files.",
    },
    {
      icon: Award,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed progress reports and assessments.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-12 md:py-16 border-y bg-secondary/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
              <p className="text-sm text-muted-foreground mt-1">Online Courses</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">50k+</div>
              <p className="text-sm text-muted-foreground mt-1">Active Students</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">100+</div>
              <p className="text-sm text-muted-foreground mt-1">Expert Instructors</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">95%</div>
              <p className="text-sm text-muted-foreground mt-1">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="heading-lg">Why Choose EduSpace?</h2>
            <p className="body-lg text-muted-foreground mt-4">
              Our platform combines expert-led courses, community discussions, and premium 
              resources to create a complete learning ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-background rounded-xl p-6 text-center shadow-subtle border transition-all hover:shadow-card hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <FeaturedCourses />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-lg mb-4">Ready to start your learning journey?</h2>
            <p className="body-lg text-muted-foreground mb-8">
              Join thousands of students who are already transforming their lives 
              through our comprehensive learning platform.
            </p>
            <Link to="/register">
              <Button size="lg" className="mx-auto">
                Get Started For Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      </section>

      {/* Blog Preview Section */}
      <BlogPreview />

      {/* Premium Features */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                Premium Features
              </div>
              <h2 className="heading-lg mb-6">Unlock exclusive learning resources</h2>
              <p className="body-base text-muted-foreground mb-8">
                Our premium membership gives you unlimited access to specialized learning 
                materials, downloadable resources, and personalized learning paths.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Unlimited access to all premium courses",
                  "Downloadable study materials and templates",
                  "Certificate upon course completion",
                  "Priority support from instructors",
                  "Exclusive community forums",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/resources">
                <Button>
                  Explore Premium Resources
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-card">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop" 
                  alt="Students collaborating" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -z-0 top-8 -right-8 w-full h-full rounded-2xl bg-primary/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Preview Section */}
      <ResourcesPreview />
    </div>
  );
};

export default Index;
