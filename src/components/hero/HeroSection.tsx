
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-france-blue/5 to-transparent py-20 md:py-32">
      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full bg-france-blue/10 px-3 py-1 text-sm font-medium text-france-blue mb-6 animate-fade-in">
            <span className="rounded-full bg-france-blue h-2 w-2 mr-2"></span>
            Chào mừng đến với tương lai của học tập
          </div>
          
          <h1 className="animate-fade-up heading-xl mb-6 text-center">
            Khám phá cách mới <br className="hidden sm:inline" />
            để <span className="text-france-blue">học tập và phát triển</span>
          </h1>
          
          <p className="body-lg mb-8 text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Truy cập các khóa học do chuyên gia hướng dẫn, tham gia thảo luận cộng đồng và khám phá 
            tài nguyên cao cấp, tất cả trong một nền tảng tích hợp được thiết kế để học tập liền mạch.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/courses">
              <Button size="lg" className="w-full sm:w-auto bg-france-blue hover:bg-navy">
                Khám phá khóa học
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-france-blue text-france-blue hover:bg-france-blue/10">
                Tạo tài khoản
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 blur-3xl opacity-20 w-full max-w-4xl h-96 bg-france-blue rounded-full"></div>
    </section>
  );
};

export default HeroSection;
