
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ResourceCard from "@/components/ui/ResourceCard";
import { Search, Lock } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for resources (extended from ResourcesPreview)
const MOCK_RESOURCES = [
  {
    id: "1",
    title: "Complete JavaScript Cheat Sheet",
    description: "A comprehensive reference guide covering all JavaScript fundamentals and advanced topics.",
    type: "PDF" as const,
    category: "Programming",
    isPremium: false,
    size: "3.2 MB",
  },
  {
    id: "2",
    title: "Data Science Toolkit and Resources",
    description: "Collection of essential data science tools, libraries, and datasets for your projects.",
    type: "Package" as const,
    category: "Data Science",
    isPremium: true,
    size: "1.8 GB",
  },
  {
    id: "3",
    title: "Business Analytics Case Studies",
    description: "Real-world business problems solved with data analytics approaches and techniques.",
    type: "PDF" as const,
    category: "Business",
    isPremium: true,
    size: "24.5 MB",
  },
  {
    id: "4",
    title: "Web Development Project Templates",
    description: "Ready-to-use templates and boilerplates for various web development projects.",
    type: "Package" as const,
    category: "Programming",
    isPremium: false,
    size: "45.6 MB",
  },
  {
    id: "5",
    title: "UX/UI Design Guidelines and Components",
    description: "Comprehensive guide to user interface design principles with reusable component examples.",
    type: "PDF" as const,
    category: "Design",
    isPremium: true,
    size: "18.3 MB",
  },
  {
    id: "6",
    title: "Marketing Strategy Workbook",
    description: "Interactive workbook for developing comprehensive marketing strategies from scratch.",
    type: "PDF" as const,
    category: "Marketing",
    isPremium: true,
    size: "9.7 MB",
  },
  {
    id: "7",
    title: "English Pronunciation Audio Guide",
    description: "Audio lessons focusing on proper English pronunciation for non-native speakers.",
    type: "Audio" as const,
    category: "Languages",
    isPremium: false,
    size: "320 MB",
  },
  {
    id: "8",
    title: "Cybersecurity Best Practices Handbook",
    description: "Comprehensive guide to protecting digital assets and implementing security protocols.",
    type: "PDF" as const,
    category: "IT Security",
    isPremium: true,
    size: "12.5 MB",
  },
];

// Get unique categories and types from resources
const uniqueCategories = Array.from(new Set(MOCK_RESOURCES.map(resource => resource.category)));
const uniqueTypes = Array.from(new Set(MOCK_RESOURCES.map(resource => resource.type)));

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResources, setFilteredResources] = useState(MOCK_RESOURCES);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [accessFilter, setAccessFilter] = useState("all");

  useEffect(() => {
    let filtered = MOCK_RESOURCES;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(resource => 
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (categoryFilter !== "all") {
      filtered = filtered.filter(resource => resource.category === categoryFilter);
    }

    // Filter by type
    if (typeFilter !== "all") {
      filtered = filtered.filter(resource => resource.type === typeFilter);
    }

    // Filter by access (premium/free)
    if (accessFilter !== "all") {
      filtered = filtered.filter(resource => 
        (accessFilter === "premium" && resource.isPremium) ||
        (accessFilter === "free" && !resource.isPremium)
      );
    }

    setFilteredResources(filtered);
  }, [searchTerm, categoryFilter, typeFilter, accessFilter]);

  const premiumResourcesCount = MOCK_RESOURCES.filter(r => r.isPremium).length;
  const freeResourcesCount = MOCK_RESOURCES.filter(r => !r.isPremium).length;

  return (
    <div className="bg-background min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-4">Resource Library</h1>
            <p className="body-lg text-muted-foreground mb-0">
              Access downloadable resources, templates, and learning materials
              to supplement your education.
            </p>
          </div>
        </div>
      </section>

      {/* Premium Banner */}
      <section className="border-y bg-primary/5 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <Lock className="h-5 w-5 text-primary mr-2" />
              <span>
                <span className="font-medium">{premiumResourcesCount} premium resources</span>
                <span className="text-muted-foreground ml-1">available with premium access</span>
              </span>
            </div>
            <Link to="/login">
              <Button>
                Upgrade to Premium
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 md:py-8 border-b">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search resources..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {uniqueCategories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {uniqueTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={accessFilter} onValueChange={setAccessFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Access" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Resources</SelectItem>
                  <SelectItem value="free">Free Only</SelectItem>
                  <SelectItem value="premium">Premium Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          {filteredResources.length > 0 ? (
            <>
              <div className="mb-6 text-muted-foreground">
                Showing {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredResources.map((resource) => (
                  <ResourceCard key={resource.id} {...resource} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No resources found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your search or filters</p>
              <Button onClick={() => {
                setSearchTerm("");
                setCategoryFilter("all");
                setTypeFilter("all");
                setAccessFilter("all");
              }}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Resources;
