
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/ui/CourseCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Mock data for courses
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
];

const FeaturedCourses = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="heading-lg max-w-2xl">Featured Courses</h2>
            <p className="body-lg text-muted-foreground mt-2 max-w-2xl">
              Explore our most popular courses across various disciplines
            </p>
          </div>
          <Link to="/courses" className="mt-4 md:mt-0">
            <Button variant="outline">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_COURSES.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
