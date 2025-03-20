
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-france-blue">EduSpace</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Nền tảng học trực tuyến toàn diện với các khóa học, thảo luận cộng đồng,
              và tài nguyên học tập cao cấp.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-france-blue" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-france-blue" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-france-blue" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-france-blue" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-navy">Liên kết nhanh</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/courses" className="text-muted-foreground hover:text-france-blue">
                  Khóa học
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-france-blue">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-france-blue">
                  Tài nguyên
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-navy">Học tập</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-france-blue">
                  Lập trình
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-france-blue">
                  Ngoại ngữ
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-france-blue">
                  Toán học
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-france-blue">
                  Khoa học
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-france-blue">
                  Kinh doanh
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-navy">Liên hệ</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">hotro@eduspace.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} EduSpace. Tất cả các quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
