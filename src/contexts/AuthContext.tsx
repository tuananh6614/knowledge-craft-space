
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { authService } from '@/services/auth.service';

// Định nghĩa kiểu dữ liệu người dùng
interface User {
  id: number;
  username: string; // Đổi từ name sang username theo API mới
  email: string;
  role?: string;
}

// Định nghĩa context
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<void>; // Đổi từ email sang username
  register: (username: string, email: string, password: string) => Promise<void>; // Đổi từ name sang username
  logout: () => void;
}

// Tạo context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Kiểm tra xác thực khi component mount
  useEffect(() => {
    const checkAuth = () => {
      try {
        const currentUser = authService.getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error('Authentication check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Hàm đăng nhập
  const login = async (username: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await authService.login({ username, password });
      const currentUser = authService.getCurrentUser();
      setUser(currentUser);
    } finally {
      setIsLoading(false);
    }
  };

  // Hàm đăng ký
  const register = async (username: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await authService.register({ username, email, password });
      const currentUser = authService.getCurrentUser();
      setUser(currentUser);
    } finally {
      setIsLoading(false);
    }
  };

  // Hàm đăng xuất
  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook để sử dụng context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
