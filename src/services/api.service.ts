
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
      ...(options?.headers || {}),
    };

    if (options?.requiresAuth) {
      const token = this.getAuthToken();
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    }

    return headers;
  }

  // Xử lý response
  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      // Xử lý lỗi từ API
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.message || response.statusText || 'Có lỗi xảy ra';
      throw new Error(errorMessage);
    }

    // Xử lý response không có dữ liệu
    if (response.status === 204) {
      return {} as T;
    }

    return response.json() as Promise<T>;
  }

  // GET request
  async get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    const url = this.createUrl(endpoint, options?.params);
    const headers = this.createHeaders(options);

    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    return this.handleResponse<T>(response);
  }

  // POST request
  async post<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    const url = this.createUrl(endpoint);
    const headers = this.createHeaders(options);

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: options?.body ? JSON.stringify(options.body) : undefined,
    });

    return this.handleResponse<T>(response);
  }

  // PUT request
  async put<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    const url = this.createUrl(endpoint);
    const headers = this.createHeaders(options);

    const response = await fetch(url, {
      method: 'PUT',
      headers,
      body: options?.body ? JSON.stringify(options.body) : undefined,
    });

    return this.handleResponse<T>(response);
  }

  // DELETE request
  async delete<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    const url = this.createUrl(endpoint);
    const headers = this.createHeaders(options);

    const response = await fetch(url, {
      method: 'DELETE',
      headers,
    });

    return this.handleResponse<T>(response);
  }
}

// Export instance với base URL từ config
export const apiService = new ApiService(API_BASE_URL);
