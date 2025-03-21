
# Backend Learning Platform API

Backend API xây dựng bằng Node.js, Express và MySQL cho nền tảng học tập trực tuyến.

## Cài đặt

1. Đảm bảo bạn đã cài đặt Node.js và npm.
2. Đảm bảo bạn đã cài đặt và cấu hình MySQL (XAMPP).
3. Clone repository này và chạy:

```bash
npm install
```

4. Tạo file .env (sử dụng .env.example làm mẫu).
5. Khởi tạo cơ sở dữ liệu:
   - Vào phpMyAdmin hoặc MySQL Workbench
   - Tạo database có tên `learning_platform`
   - Import file `database.sql` để tạo các bảng và dữ liệu mẫu

## Chạy server

```bash
# Chạy trong môi trường development
npm run dev

# Chạy trong môi trường production
npm start
```

## API Endpoints

### Authentication

- `POST /api/users/register` - Đăng ký người dùng mới
- `POST /api/users/login` - Đăng nhập

### Courses

- `GET /api/courses` - Lấy danh sách khóa học
- `GET /api/courses/:id` - Lấy thông tin chi tiết khóa học

### Resources

- `GET /api/resources` - Lấy danh sách tài nguyên học tập
- `GET /api/resources/:id` - Lấy thông tin chi tiết tài nguyên

### Blog

- `GET /api/blog` - Lấy danh sách bài viết blog
- `GET /api/blog/:id` - Lấy thông tin chi tiết bài viết

## Cấu trúc cơ sở dữ liệu

Xem file `database.sql` để biết chi tiết về cấu trúc cơ sở dữ liệu.
