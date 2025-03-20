
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
  
  // Đăng ký khóa học
  async enrollCourse(courseId: string): Promise<{ success: boolean; message: string }> {
    return apiService.post<{ success: boolean; message: string }>(
      `${ENDPOINTS.COURSE_BY_ID(courseId)}/enroll`,
      { requiresAuth: true }
    );
  }
  
  // Đánh giá khóa học
  async rateCourse(courseId: string, rating: number, comment?: string): Promise<{ success: boolean }> {
    return apiService.post<{ success: boolean }>(
      `${ENDPOINTS.COURSE_BY_ID(courseId)}/rate`,
      { 
        body: { rating, comment },
        requiresAuth: true 
      }
    );
  }
}

export const courseService = new CourseService();
