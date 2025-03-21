
import { API_BASE_URL } from '@/config/api';

// Kiểu dữ liệu cho các options của request
type RequestOptions = {
  headers?: HeadersInit;
  params?: Record<string, string>;
  body?: any;
  requiresAuth?: boolean;
};

// Service API chung
class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  // Lấy token từ localStorage
  private getAuthToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  // Xử lý URL với query params
  private createUrl(endpoint: string, params?: Record<string, string>): string {
    const url = new URL(`${this.baseUrl}${endpoint}`);
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }
    
    return url.toString();
  }

  // Xử lý headers cho request
  private createHeaders(options?: RequestOptions): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...(options?.headers || {}),
    };

    if (options?.requiresAuth !== false) {
      const token = this.getAuthToken();
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    }

    return headers;
  }

  // Xử lý response
  private async handleResponse<T>(response: Response): Promise<T> {
    // Trả về lỗi chi tiết từ máy chủ
    if (!response.ok) {
      let errorMessage = '';
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorData.message || response.statusText || 'Có lỗi xảy ra';
        throw new Error(errorMessage);
      } catch (e) {
        if (e instanceof Error) {
          throw e;
        } else {
          errorMessage = `Lỗi máy chủ: ${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        }
      }
    }

    // Xử lý response không có dữ liệu
    if (response.status === 204) {
      return {} as T;
    }

    return response.json() as Promise<T>;
  }

  // GET request
  async get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    try {
      const url = this.createUrl(endpoint, options?.params);
      const headers = this.createHeaders(options);

      const response = await fetch(url, {
        method: 'GET',
        headers,
      });

      return this.handleResponse<T>(response);
    } catch (error) {
      console.error(`GET request to ${endpoint} failed:`, error);
      throw error;
    }
  }

  // POST request
  async post<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    try {
      const url = this.createUrl(endpoint);
      const headers = this.createHeaders(options);

      console.log('POST request to:', url);
      console.log('Request body:', options?.body);

      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: options?.body ? JSON.stringify(options.body) : undefined,
      });

      return this.handleResponse<T>(response);
    } catch (error) {
      console.error(`POST request to ${endpoint} failed:`, error);
      throw error;
    }
  }

  // PUT request
  async put<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    try {
      const url = this.createUrl(endpoint);
      const headers = this.createHeaders(options);

      const response = await fetch(url, {
        method: 'PUT',
        headers,
        body: options?.body ? JSON.stringify(options.body) : undefined,
      });

      return this.handleResponse<T>(response);
    } catch (error) {
      console.error(`PUT request to ${endpoint} failed:`, error);
      throw error;
    }
  }

  // DELETE request
  async delete<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    try {
      const url = this.createUrl(endpoint);
      const headers = this.createHeaders(options);

      const response = await fetch(url, {
        method: 'DELETE',
        headers,
      });

      return this.handleResponse<T>(response);
    } catch (error) {
      console.error(`DELETE request to ${endpoint} failed:`, error);
      throw error;
    }
  }
}

// Export instance với base URL từ config
export const apiService = new ApiService(API_BASE_URL);
