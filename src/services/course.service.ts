
import { apiService } from './api.service';
import { ENDPOINTS } from '@/config/api';

// Định nghĩa kiểu dữ liệu
export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  level: "Cơ bản" | "Trung cấp" | "Nâng cao";
  duration: string;
  students: number;
  rating: number;
  content?: string;
  price?: number;
  instructor?: {
    id: string;
    name: string;
    avatar?: string;
  };
}

// Course Service
class CourseService {
  // Lấy danh sách khóa học
  async getCourses(params?: { category?: string; level?: string }): Promise<Course[]> {
    return apiService.get<Course[]>(ENDPOINTS.COURSES, {
      params: params as Record<string, string>,
    });
  }
  
  // Lấy chi tiết khóa học
  async getCourseById(id: string): Promise<Course> {
    return apiService.get<Course>(ENDPOINTS.COURSE_BY_ID(id));
  }
  
  // Các method khác như enrollCourse, rateCourse có thể được thêm vào sau
}

export const courseService = new CourseService();
