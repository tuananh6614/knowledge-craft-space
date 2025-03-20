
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "Lỗi 404: Người dùng đã cố truy cập trang không tồn tại:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-france-blue/5 to-background">
      <div className="container-custom max-w-2xl text-center">
        <h1 className="text-8xl md:text-9xl font-bold mb-4 animate-fade-in text-france-blue/80">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in text-navy" style={{ animationDelay: "0.1s" }}>
          Không tìm thấy trang
        </h2>
        <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
        </p>
        <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Link to="/">
            <Button size="lg" className="flex items-center bg-france-blue hover:bg-navy">
              <Home className="mr-2 h-4 w-4" />
              Quay lại trang chủ
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
