
import { Button } from "@/components/ui/button";
import BlogPostCard from "@/components/ui/BlogPostCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Mock data cho bài viết blog
const MOCK_BLOG_POSTS = [
  {
    id: "1",
    title: "Làm thế nào để thành thạo một ngôn ngữ lập trình mới trong 30 ngày",
    excerpt: "Khám phá các chiến lược đã được chứng minh để học hiệu quả bất kỳ ngôn ngữ lập trình nào chỉ trong một tháng.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=869&auto=format&fit=crop",
    author: {
      name: "Nguyễn Minh Tuấn",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    date: "12 Tháng 5, 2023",
    commentCount: 24,
  },
  {
    id: "2",
    title: "Tương lai của giáo dục: Trợ lý học tập sử dụng trí tuệ nhân tạo",
    excerpt: "Khám phá cách trí tuệ nhân tạo đang chuyển đổi giáo dục và tạo ra trải nghiệm học tập cá nhân hóa.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=806&auto=format&fit=crop",
    author: {
      name: "Trần Thị Mai",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    date: "28 Tháng 4, 2023",
    commentCount: 18,
  },
  {
    id: "3",
    title: "5 kỹ thuật học tập thiết yếu dựa trên khoa học nhận thức",
    excerpt: "Tìm hiểu các phương pháp học tập dựa trên bằng chứng sẽ giúp bạn ghi nhớ thông tin hiệu quả hơn.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=873&auto=format&fit=crop",
    author: {
      name: "Lê Văn Hoàng",
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    date: "15 Tháng 3, 2023",
    commentCount: 32,
  },
];

const BlogPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="heading-lg text-navy max-w-2xl">Bài viết mới nhất</h2>
            <p className="body-lg text-muted-foreground mt-2 max-w-2xl">
              Chia sẻ kiến thức, mẹo và thảo luận cộng đồng về giáo dục và học tập
            </p>
          </div>
          <Link to="/blog" className="mt-4 md:mt-0">
            <Button variant="outline" className="border-france-blue text-france-blue hover:bg-france-blue/10">
              Xem tất cả bài viết
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
