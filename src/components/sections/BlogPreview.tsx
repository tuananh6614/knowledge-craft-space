
import { Button } from "@/components/ui/button";
import BlogPostCard from "@/components/ui/BlogPostCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Mock data for blog posts
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
  },
];

const BlogPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="heading-lg max-w-2xl">Latest from our Blog</h2>
            <p className="body-lg text-muted-foreground mt-2 max-w-2xl">
              Insights, tips, and community discussions on education and learning
            </p>
          </div>
          <Link to="/blog" className="mt-4 md:mt-0">
            <Button variant="outline">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_BLOG_POSTS.map((post) => (
            <BlogPostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
