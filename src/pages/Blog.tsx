
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
import BlogPostCard from "@/components/ui/BlogPostCard";
import { Search, PenLine } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for blog posts (extended from BlogPreview)
const MOCK_BLOG_POSTS = [
  {
    id: "1",
    title: "How to Master a New Programming Language in 30 Days",
    excerpt: "Discover proven strategies to efficiently learn any programming language in just one month.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=869&auto=format&fit=crop",
    author: {
      name: "Alex Johnson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    date: "May 12, 2023",
    commentCount: 24,
    category: "Programming",
  },
  {
    id: "2",
    title: "The Future of Education: AI-Powered Learning Assistants",
    excerpt: "Explore how artificial intelligence is transforming education and creating personalized learning experiences.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=806&auto=format&fit=crop",
    author: {
      name: "Sophia Chen",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    date: "April 28, 2023",
    commentCount: 18,
    category: "Education Technology",
  },
  {
    id: "3",
    title: "5 Essential Study Techniques Based on Cognitive Science",
    excerpt: "Learn evidence-based study methods that will help you retain information more effectively.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=873&auto=format&fit=crop",
    author: {
      name: "David Miller",
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    date: "March 15, 2023",
    commentCount: 32,
    category: "Study Tips",
  },
  {
    id: "4",
    title: "The Role of Data Science in Modern Business Decision Making",
    excerpt: "How companies are leveraging data analytics to gain competitive advantages and make smarter choices.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=815&auto=format&fit=crop",
    author: {
      name: "Emma Wilson",
      avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    },
    date: "March 3, 2023",
    commentCount: 15,
    category: "Data Science",
  },
  {
    id: "5",
    title: "Why Soft Skills Matter as Much as Technical Knowledge",
    excerpt: "The importance of developing communication, leadership, and problem-solving abilities alongside technical expertise.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=870&auto=format&fit=crop",
    author: {
      name: "James Rodriguez",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    date: "February 18, 2023",
    commentCount: 28,
    category: "Career Development",
  },
  {
    id: "6",
    title: "Building Your First Mobile App: A Beginner's Journey",
    excerpt: "Personal insights and lessons learned from developing a mobile application with no prior experience.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=870&auto=format&fit=crop",
    author: {
      name: "Olivia Martinez",
      avatar: "https://randomuser.me/api/portraits/women/58.jpg",
    },
    date: "January 30, 2023",
    commentCount: 22,
    category: "Programming",
  },
];

// Get unique categories from blog posts
const uniqueCategories = Array.from(new Set(MOCK_BLOG_POSTS.map(post => post.category)));

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(MOCK_BLOG_POSTS);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortOption, setSortOption] = useState("newest");

  useEffect(() => {
    let filtered = MOCK_BLOG_POSTS;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (categoryFilter !== "all") {
      filtered = filtered.filter(post => post.category === categoryFilter);
    }

    // Sort posts
    if (sortOption === "newest") {
      // For mock data, we'll assume the posts are already ordered by date
    } else if (sortOption === "popular") {
      filtered = [...filtered].sort((a, b) => b.commentCount - a.commentCount);
    }

    setFilteredPosts(filtered);
  }, [searchTerm, categoryFilter, sortOption]);

  return (
    <div className="bg-background min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-4">Community Blog</h1>
            <p className="body-lg text-muted-foreground mb-6">
              Read and share insights, experiences, and knowledge with our 
              vibrant learning community.
            </p>
            <Link to="/login">
              <Button className="flex items-center">
                <PenLine className="mr-2 h-4 w-4" />
                Write a Post
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
                placeholder="Search posts..."
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
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          {filteredPosts.length > 0 ? (
            <>
              <div className="mb-6 text-muted-foreground">
                Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <BlogPostCard key={post.id} {...post} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No posts found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your search or filters</p>
              <Button onClick={() => {
                setSearchTerm("");
                setCategoryFilter("all");
                setSortOption("newest");
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

export default Blog;
