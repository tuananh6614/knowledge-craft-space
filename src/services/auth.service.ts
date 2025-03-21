
import { apiService } from './api.service';
import { ENDPOINTS } from '@/config/api';

// Định nghĩa kiểu dữ liệu
export interface LoginRequest {
  username: string;  // Thay đổi từ email sang username theo API mới
  password: string;
}

export interface RegisterRequest {
  username: string;  // Thay đổi từ name sang username theo API mới
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user?: {
    id: number;
    username: string;
    email: string;
    role?: string;
  };
}

// Auth Service
class AuthService {
  // Đăng nhập
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    try {
      const response = await apiService.post<{ token: string }>(ENDPOINTS.LOGIN, {
        body: credentials,
      });
      
      // Lưu token vào localStorage
      if (response && response.token) {
        localStorage.setItem('auth_token', response.token);
        
        // Giả định thông tin người dùng từ token JWT (frontend không nhận được user từ API)
        // Thông tin người dùng có thể được lấy từ API riêng biệt hoặc decode từ token
        const user = this.getUserFromToken(response.token);
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        }
      }
      
      return response;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }
  
  // Decode JWT token để lấy thông tin user (phương pháp đơn giản)
  private getUserFromToken(token: string): AuthResponse['user'] | null {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64).split('').map(c => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join('')
      );
      
      const payload = JSON.parse(jsonPayload);
      return {
        id: payload.userId || payload.id || 0,
        username: payload.username || payload.name || 'User', // Mặc định nếu không có trong token
        email: payload.email || '',
        role: payload.role,
      };
    } catch (e) {
      console.error('Error decoding token:', e);
      return null;
    }
  }
  
  // Đăng ký
  async register(userData: RegisterRequest): Promise<AuthResponse> {
    try {
      const response = await apiService.post<{ token: string }>(ENDPOINTS.REGISTER, {
        body: userData,
      });
      
      // Nếu API trả về token trực tiếp sau khi đăng ký
      if (response && response.token) {
        localStorage.setItem('auth_token', response.token);
        
        const user = this.getUserFromToken(response.token);
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        }
        
        return response;
      }
      
      // Nếu API không trả về token, tự động đăng nhập
      return this.login({
        username: userData.username,
        password: userData.password
      });
    } catch (error) {
      console.error('Register error:', error);
      throw error;
    }
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
