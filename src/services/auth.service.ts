
import { apiService } from './api.service';
import { ENDPOINTS } from '@/config/api';

// Định nghĩa kiểu dữ liệu
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    role?: string;
  };
}

// Auth Service
class AuthService {
  // Đăng nhập
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    const response = await apiService.post<AuthResponse>(ENDPOINTS.LOGIN, {
      body: credentials,
    });
    
    // Lưu token vào localStorage
    if (response && response.token) {
      localStorage.setItem('auth_token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
    }
    
    return response;
  }
  
  // Đăng ký
  async register(userData: RegisterRequest): Promise<AuthResponse> {
    const response = await apiService.post<AuthResponse>(ENDPOINTS.REGISTER, {
      body: userData,
    });
    
    // Lưu token vào localStorage
    if (response && response.token) {
      localStorage.setItem('auth_token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
    }
    
    return response;
  }
  
  // Đăng xuất
  logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    // Redirect về trang chủ hoặc đăng nhập có thể được xử lý ở component
  }
  
  // Kiểm tra đã đăng nhập chưa
  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth_token');
  }
  
  // Lấy thông tin người dùng hiện tại
  getCurrentUser(): AuthResponse['user'] | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}

export const authService = new AuthService();
