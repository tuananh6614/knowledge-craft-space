
import { apiService } from './api.service';
import { ENDPOINTS } from '@/config/api';

// Định nghĩa kiểu dữ liệu
export interface Resource {
  id: string;
  title: string;
  description: string;
  type: "PDF" | "Video" | "Audio" | "Package" | "Gói";
  isPremium: boolean;
  size?: string;
  url?: string;
  createdAt?: string;
  updatedAt?: string;
}

// Resource Service
class ResourceService {
  // Lấy danh sách tài nguyên
  async getResources(params?: { type?: string; isPremium?: boolean }): Promise<Resource[]> {
    return apiService.get<Resource[]>(ENDPOINTS.RESOURCES, {
      params: params as Record<string, string>,
    });
  }
  
  // Lấy chi tiết tài nguyên
  async getResourceById(id: string): Promise<Resource> {
    return apiService.get<Resource>(ENDPOINTS.RESOURCE_BY_ID(id), {
      requiresAuth: true, // Yêu cầu xác thực
    });
  }
  
  // Tải xuống tài nguyên
  async downloadResource(id: string): Promise<{ downloadUrl: string }> {
    return apiService.get<{ downloadUrl: string }>(
      `${ENDPOINTS.RESOURCE_BY_ID(id)}/download`,
      { requiresAuth: true }
    );
  }
}

export const resourceService = new ResourceService();
