
import { Button } from "@/components/ui/button";
import ResourceCard from "@/components/ui/ResourceCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Mock data for resources
const MOCK_RESOURCES = [
  {
    id: "1",
    title: "Complete JavaScript Cheat Sheet",
    description: "A comprehensive reference guide covering all JavaScript fundamentals and advanced topics.",
    type: "PDF" as const,
    isPremium: false,
    size: "3.2 MB",
  },
  {
    id: "2",
    title: "Data Science Toolkit and Resources",
    description: "Collection of essential data science tools, libraries, and datasets for your projects.",
    type: "Package" as const,
    isPremium: true,
    size: "1.8 GB",
  },
  {
    id: "3",
    title: "Business Analytics Case Studies",
    description: "Real-world business problems solved with data analytics approaches and techniques.",
    type: "PDF" as const,
    isPremium: true,
    size: "24.5 MB",
  },
  {
    id: "4",
    title: "Web Development Project Templates",
    description: "Ready-to-use templates and boilerplates for various web development projects.",
    type: "Package" as const,
    isPremium: false,
    size: "45.6 MB",
  },
];

const ResourcesPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="heading-lg max-w-2xl">Premium Resources</h2>
            <p className="body-lg text-muted-foreground mt-2 max-w-2xl">
              Access specialized learning materials and downloadable resources
            </p>
          </div>
          <Link to="/resources" className="mt-4 md:mt-0">
            <Button variant="outline">
              Browse Library
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_RESOURCES.map((resource) => (
            <ResourceCard key={resource.id} {...resource} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesPreview;
