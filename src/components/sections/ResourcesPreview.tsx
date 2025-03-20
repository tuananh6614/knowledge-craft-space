
import { Button } from "@/components/ui/button";
import ResourceCard from "@/components/ui/ResourceCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Mock data cho tài nguyên
const MOCK_RESOURCES = [
  {
    id: "1",
    title: "Tài liệu tham khảo JavaScript đầy đủ",
    description: "Hướng dẫn tham khảo toàn diện bao gồm tất cả các kiến thức cơ bản và nâng cao về JavaScript.",
    type: "PDF" as const,
    isPremium: false,
    size: "3.2 MB",
  },
  {
    id: "2",
    title: "Bộ công cụ và tài nguyên Khoa học Dữ liệu",
    description: "Tập hợp các công cụ, thư viện và bộ dữ liệu khoa học dữ liệu thiết yếu cho dự án của bạn.",
    type: "Gói" as const,
    isPremium: true,
    size: "1.8 GB",
  },
  {
    id: "3",
    title: "Các nghiên cứu tình huống Phân tích Kinh doanh",
    description: "Các vấn đề kinh doanh thực tế được giải quyết bằng các phương pháp và kỹ thuật phân tích dữ liệu.",
    type: "PDF" as const,
    isPremium: true,
    size: "24.5 MB",
  },
  {
    id: "4",
    title: "Mẫu dự án Phát triển Web",
    description: "Các mẫu và boilerplate sẵn sàng sử dụng cho các dự án phát triển web khác nhau.",
    type: "Gói" as const,
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
            <h2 className="heading-lg text-navy max-w-2xl">Tài nguyên cao cấp</h2>
            <p className="body-lg text-muted-foreground mt-2 max-w-2xl">
              Truy cập tài liệu học tập chuyên biệt và tài nguyên có thể tải xuống
            </p>
          </div>
          <Link to="/resources" className="mt-4 md:mt-0">
            <Button variant="outline" className="border-france-blue text-france-blue hover:bg-france-blue/10">
              Duyệt thư viện
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
