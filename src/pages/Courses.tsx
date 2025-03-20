
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
  {
    id: "5",
    title: "Nguyên tắc Thiết kế UX/UI",
    description: "Học các nguyên tắc cốt lõi để tạo ra sản phẩm số thân thiện với người dùng và trực quan.",
    image: "https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?q=80&w=870&auto=format&fit=crop",
    category: "Thiết kế",
    level: "Cơ bản" as const,
    duration: "7 tuần",
    students: 7824,
    rating: 4.5,
  },
  {
    id: "6",
    title: "Phân tích và Chiến lược Marketing",
    description: "Sử dụng các phương pháp dựa trên dữ liệu để tối ưu hóa chiến dịch tiếp thị và thúc đẩy tăng trưởng.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=874&auto=format&fit=crop",
    category: "Marketing",
    level: "Trung cấp" as const,
    duration: "9 tuần",
    students: 4532,
    rating: 4.7,
  },
  {
    id: "7",
    title: "Tiếng Anh cho Giao tiếp Doanh nghiệp",
    description: "Nâng cao kỹ năng ngôn ngữ tiếng Anh cho môi trường chuyên nghiệp và tương tác kinh doanh.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=870&auto=format&fit=crop",
    category: "Ngôn ngữ",
    level: "Trung cấp" as const,
    duration: "10 tuần",
    students: 9823,
    rating: 4.8,
  },
  {
    id: "8",
    title: "Cơ bản về An ninh mạng",
    description: "Học các khái niệm bảo mật thiết yếu để bảo vệ hệ thống và dữ liệu khỏi các mối đe dọa mạng.",
    image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=869&auto=format&fit=crop",
    category: "Bảo mật IT",
    level: "Cơ bản" as const,
    duration: "8 tuần",
    students: 6247,
    rating: 4.9,
  },
];

// Get unique categories from courses
const uniqueCategories = Array.from(new Set(MOCK_COURSES.map(course => course.category)));
const uniqueLevels = ["Cơ bản", "Trung cấp", "Nâng cao"];

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
            <h1 className="heading-xl mb-4">Khóa học</h1>
            <p className="body-lg text-muted-foreground mb-0">
              Duyệt qua bộ sưu tập khóa học toàn diện của chúng tôi trên nhiều 
              lĩnh vực, từ lập trình đến kinh doanh và hơn thế nữa.
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
                placeholder="Tìm kiếm khóa học..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Danh mục" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả danh mục</SelectItem>
                  {uniqueCategories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={levelFilter} onValueChange={setLevelFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Cấp độ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả cấp độ</SelectItem>
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
                Hiển thị {filteredCourses.length} {filteredCourses.length === 1 ? 'khóa học' : 'khóa học'}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} {...course} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">Không tìm thấy khóa học nào</h3>
              <p className="text-muted-foreground mb-6">Thử điều chỉnh tìm kiếm hoặc bộ lọc của bạn</p>
              <Button onClick={() => {
                setSearchTerm("");
                setCategoryFilter("all");
                setLevelFilter("all");
              }}>
                Đặt lại bộ lọc
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Courses;
