
import { apiService } from './api.service';
import { ENDPOINTS } from '@/config/api';

// Định nghĩa kiểu dữ liệu
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  category: string;
  tags?: string[];
  image?: string;
  createdAt: string;
  updatedAt: string;
  commentCount?: number;
}

export interface Comment {
  id: string;
  postId: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  createdAt: string;
  updatedAt?: string;
}

// Blog Service
class BlogService {
  // Lấy danh sách bài viết
  async getBlogPosts(params?: { category?: string; tag?: string }): Promise<BlogPost[]> {
    return apiService.get<BlogPost[]>(ENDPOINTS.BLOG_POSTS, {
      params: params as Record<string, string>,
    });
  }
  
  // Lấy chi tiết bài viết
  async getBlogPostById(id: string): Promise<BlogPost> {
    return apiService.get<BlogPost>(ENDPOINTS.BLOG_POST_BY_ID(id));
  }
  
  // Lấy bình luận của bài viết
  async getPostComments(postId: string): Promise<Comment[]> {
    return apiService.get<Comment[]>(`${ENDPOINTS.BLOG_POST_BY_ID(postId)}/comments`);
  }
  
  // Thêm bình luận vào bài viết
  async addComment(postId: string, content: string): Promise<Comment> {
    return apiService.post<Comment>(
      `${ENDPOINTS.BLOG_POST_BY_ID(postId)}/comments`, 
      {
        body: { content },
        requiresAuth: true
      }
    );
  }
}

export const blogService = new BlogService();
