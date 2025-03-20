
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/ui/CourseCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Mock data cho khóa học
const MOCK_COURSES = [
  {
    id: "1",
    title: "Nhập môn Phát triển Web",
    description: "Học các nền tảng của HTML, CSS và JavaScript để xây dựng trang web đẹp mắt từ đầu.",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=870&auto=format&fit=crop",
    category: "Lập trình",
    level: "Cơ bản" as const,
    duration: "8 tuần",
    students: 12543,
    rating: 4.8,
  },
  {
    id: "2",
    title: "Làm chủ Khoa học Dữ liệu với Python",
    description: "Khám phá phân tích dữ liệu, trực quan hóa và học máy sử dụng các thư viện Python phổ biến.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=870&auto=format&fit=crop",
    category: "Khoa học Dữ liệu",
    level: "Trung cấp" as const,
    duration: "10 tuần",
    students: 8975,
    rating: 4.9,
  },
  {
    id: "3",
    title: "Nền tảng Phân tích Kinh doanh",
    description: "Học cách sử dụng dữ liệu để đưa ra quyết định kinh doanh tốt hơn và thúc đẩy tăng trưởng.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=815&auto=format&fit=crop",
    category: "Kinh doanh",
    level: "Cơ bản" as const,
    duration: "6 tuần",
    students: 5431,
    rating: 4.7,
  },
  {
    id: "4",
    title: "Phát triển Ứng dụng Di động Nâng cao",
    description: "Xây dựng ứng dụng di động đa nền tảng sử dụng React Native và JavaScript hiện đại.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=870&auto=format&fit=crop",
    category: "Lập trình",
    level: "Nâng cao" as const,
    duration: "12 tuần",
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
            <h2 className="heading-lg text-navy max-w-2xl">Khóa học nổi bật</h2>
            <p className="body-lg text-muted-foreground mt-2 max-w-2xl">
              Khám phá các khóa học phổ biến nhất của chúng tôi trên nhiều lĩnh vực
            </p>
          </div>
          <Link to="/courses" className="mt-4 md:mt-0">
            <Button variant="outline" className="border-france-blue text-france-blue hover:bg-france-blue/10">
              Xem tất cả khóa học
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
