
import { apiService } from './api.service';
import { ENDPOINTS } from '@/config/api';

// Định nghĩa kiểu dữ liệu
export interface PaymentRequest {
  courseId?: string;
  resourceId?: string;
  amount: number;
  paymentMethod: 'card' | 'banking' | 'momo' | 'vnpay';
}

export interface PaymentResponse {
  id: string;
  status: 'pending' | 'completed' | 'failed';
  amount: number;
  paymentUrl?: string;
  createdAt: string;
}

// Payment Service
class PaymentService {
  // Tạo thanh toán mới
  async createPayment(paymentData: PaymentRequest): Promise<PaymentResponse> {
    return apiService.post<PaymentResponse>(ENDPOINTS.CREATE_PAYMENT, {
      body: paymentData,
      requiresAuth: true,
    });
  }

  // Kiểm tra trạng thái thanh toán
  async checkPaymentStatus(paymentId: string): Promise<PaymentResponse> {
    return apiService.get<PaymentResponse>(ENDPOINTS.PAYMENT_STATUS(paymentId), {
      requiresAuth: true,
    });
  }

  // Lấy lịch sử thanh toán
  async getPaymentHistory(): Promise<PaymentResponse[]> {
    return apiService.get<PaymentResponse[]>(ENDPOINTS.PAYMENTS, {
      requiresAuth: true,
    });
  }
}

export const paymentService = new PaymentService();
