
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CourseCard from "@/components/ui/CourseCard";
import { Search } from "lucide-react";

// Mock data for courses (extended from FeaturedCourses)
const MOCK_COURSES = [
  {
    id: "1",
    title: "Introduction to Web Development",
    description: "Learn the fundamentals of HTML, CSS, and JavaScript to build beautiful websites from scratch.",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=870&auto=format&fit=crop",
    category: "Programming",
    level: "Beginner" as const,
    duration: "8 weeks",
    students: 12543,
    rating: 4.8,
  },
  {
    id: "2",
    title: "Mastering Data Science with Python",
    description: "Explore data analysis, visualization, and machine learning using popular Python libraries.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=870&auto=format&fit=crop",
    category: "Data Science",
    level: "Intermediate" as const,
    duration: "10 weeks",
    students: 8975,
    rating: 4.9,
  },
  {
    id: "3",
    title: "Business Analytics Fundamentals",
    description: "Learn how to use data to make better business decisions and drive growth.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=815&auto=format&fit=crop",
    category: "Business",
    level: "Beginner" as const,
    duration: "6 weeks",
    students: 5431,
    rating: 4.7,
  },
  {
    id: "4",
    title: "Advanced Mobile App Development",
    description: "Build cross-platform mobile applications using React Native and modern JavaScript.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=870&auto=format&fit=crop",
    category: "Programming",
    level: "Advanced" as const,
    duration: "12 weeks",
    students: 3217,
    rating: 4.6,
  },
  {
    id: "5",
    title: "UX/UI Design Principles",
    description: "Learn the core principles of creating intuitive, user-friendly digital products.",
    image: "https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?q=80&w=870&auto=format&fit=crop",
    category: "Design",
    level: "Beginner" as const,
    duration: "7 weeks",
    students: 7824,
    rating: 4.5,
  },
  {
    id: "6",
    title: "Marketing Analytics and Strategy",
    description: "Use data-driven approaches to optimize marketing campaigns and drive growth.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=874&auto=format&fit=crop",
    category: "Marketing",
    level: "Intermediate" as const,
    duration: "9 weeks",
    students: 4532,
    rating: 4.7,
  },
  {
    id: "7",
    title: "English for Business Communication",
    description: "Enhance your English language skills for professional settings and business interactions.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=870&auto=format&fit=crop",
    category: "Languages",
    level: "Intermediate" as const,
    duration: "10 weeks",
    students: 9823,
    rating: 4.8,
  },
  {
    id: "8",
    title: "Cybersecurity Fundamentals",
    description: "Learn essential security concepts to protect systems and data from cyber threats.",
    image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=869&auto=format&fit=crop",
    category: "IT Security",
    level: "Beginner" as const,
    duration: "8 weeks",
    students: 6247,
    rating: 4.9,
  },
];

// Get unique categories from courses
const uniqueCategories = Array.from(new Set(MOCK_COURSES.map(course => course.category)));
const uniqueLevels = ["Beginner", "Intermediate", "Advanced"];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(MOCK_COURSES);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");

  useEffect(() => {
    let filtered = MOCK_COURSES;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (categoryFilter !== "all") {
      filtered = filtered.filter(course => course.category === categoryFilter);
    }

    // Filter by level
    if (levelFilter !== "all") {
      filtered = filtered.filter(course => course.level === levelFilter);
    }

    setFilteredCourses(filtered);
  }, [searchTerm, categoryFilter, levelFilter]);

  return (
    <div className="bg-background min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-4">Courses</h1>
            <p className="body-lg text-muted-foreground mb-0">
              Browse our comprehensive collection of courses across various 
              disciplines, from programming to business and beyond.
            </p>
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
                placeholder="Search courses..."
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
              <Select value={levelFilter} onValueChange={setLevelFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  {uniqueLevels.map(level => (
                    <SelectItem key={level} value={level}>{level}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          {filteredCourses.length > 0 ? (
            <>
              <div className="mb-6 text-muted-foreground">
                Showing {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} {...course} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No courses found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your search or filters</p>
              <Button onClick={() => {
                setSearchTerm("");
                setCategoryFilter("all");
                setLevelFilter("all");
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

export default Courses;
