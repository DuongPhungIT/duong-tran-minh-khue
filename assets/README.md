# 📁 Thư Mục Assets

## 🎯 **Tổng Quan**
Thư mục `assets` chứa tất cả tài nguyên cần thiết cho album thôi nôi bé Khuê, được tổ chức một cách có hệ thống và dễ quản lý.

## 📂 **Cấu Trúc Thư Mục**

```
assets/
├── js/                    # JavaScript files
│   ├── script.js         # File JS chính
│   ├── gallery-data.js   # Dữ liệu gallery
│   └── README.md         # Hướng dẫn JS
├── images/                # Hình ảnh
│   ├── birth/            # Ảnh chào đời
│   ├── monthly/          # Ảnh đầy tháng
│   ├── activities/       # Ảnh hoạt động
│   ├── thoi-noi/         # Ảnh thôi nôi
│   ├── family/           # Ảnh gia đình
│   ├── common/           # Ảnh chung
│   └── README.md         # Hướng dẫn images
└── README.md              # File này
```

## 🚀 **Lợi Ích Của Cấu Trúc Này**

### **1. Tổ Chức Rõ Ràng**
- **JavaScript** tách biệt với HTML/CSS
- **Hình ảnh** được phân loại theo danh mục
- **Dễ dàng tìm kiếm** và quản lý

### **2. Bảo Trì Dễ Dàng**
- **Cập nhật code** không ảnh hưởng đến ảnh
- **Thay đổi ảnh** không ảnh hưởng đến code
- **Backup và restore** từng phần riêng biệt

### **3. Hiệu Suất Tốt Hơn**
- **Lazy loading** cho ảnh
- **Minification** cho JavaScript
- **Caching** hiệu quả hơn

### **4. Phát Triển Team**
- **Frontend devs** làm việc với JS/CSS
- **Designers** quản lý ảnh
- **Không xung đột** khi làm việc song song

## 🔧 **Cách Sử Dụng**

### **1. Thêm Ảnh Mới**
```bash
# Tạo thư mục nếu chưa có
mkdir -p assets/images/birth

# Copy ảnh vào thư mục phù hợp
cp new-birth-photo.jpg assets/images/birth/birth_003.jpg

# Cập nhật gallery-data.js
# Thêm thông tin ảnh mới
```

### **2. Cập Nhật JavaScript**
```bash
# Chỉnh sửa file JS
nano assets/js/script.js

# Test thay đổi
# Commit thay đổi
```

### **3. Tạo Danh Mục Mới**
```bash
# Tạo thư mục ảnh mới
mkdir -p assets/images/new-category

# Cập nhật gallery-data.js
# Thêm danh mục mới
# Cập nhật HTML filter buttons
```

## 📱 **Tối Ưu Hóa**

### **Hình Ảnh**
- **WebP format** cho hiệu suất tốt nhất
- **Responsive images** với srcset
- **Lazy loading** để tăng tốc độ

### **JavaScript**
- **Minification** khi deploy
- **Code splitting** nếu cần
- **Tree shaking** để loại bỏ code không dùng

### **CSS (nếu có)**
- **Critical CSS** inline
- **Non-critical CSS** async load
- **CSS variables** để dễ customize

## 🚫 **Quy Tắc Quan Trọng**

### **1. Đường Dẫn**
- **Luôn sử dụng đường dẫn tương đối** từ thư mục gốc
- **Không sử dụng đường dẫn tuyệt đối** (trừ khi cần thiết)
- **Kiểm tra đường dẫn** sau khi di chuyển file

### **2. Tên File**
- **Sử dụng tiếng Anh** cho tên file
- **Không có dấu cách**, thay bằng dấu gạch ngang
- **Sử dụng lowercase** cho tên file

### **3. Cấu Trúc**
- **Không tạo file trực tiếp** trong thư mục gốc
- **Luôn đặt file** vào thư mục con phù hợp
- **Giữ cấu trúc** nhất quán

## 🔄 **Workflow Phát Triển**

### **1. Thêm Tính Năng Mới**
```bash
# 1. Cập nhật JavaScript
nano assets/js/script.js

# 2. Thêm ảnh nếu cần
mkdir -p assets/images/new-feature
cp new-images/* assets/images/new-feature/

# 3. Cập nhật gallery data
nano assets/js/gallery-data.js

# 4. Test và commit
git add .
git commit -m "Add new feature"
```

### **2. Cập Nhật Ảnh**
```bash
# 1. Backup ảnh cũ
cp assets/images/category/old-image.jpg backup/

# 2. Thay thế ảnh mới
cp new-image.jpg assets/images/category/old-image.jpg

# 3. Kiểm tra hiển thị
# 4. Commit thay đổi
```

### **3. Refactor Code**
```bash
# 1. Tạo branch mới
git checkout -b refactor-assets

# 2. Di chuyển và tổ chức lại
# 3. Cập nhật đường dẫn
# 4. Test toàn bộ
# 5. Merge về main
```

## 📊 **Monitoring và Maintenance**

### **1. Kiểm Tra Định Kỳ**
- **File size** của ảnh
- **JavaScript bundle size**
- **Loading performance**
- **Broken links**

### **2. Cleanup**
- **Xóa ảnh không dùng**
- **Loại bỏ code dead**
- **Tối ưu hóa ảnh**
- **Compress JavaScript**

### **3. Backup**
- **Backup định kỳ** toàn bộ assets
- **Version control** cho code
- **Archive** cho ảnh cũ

## 🌟 **Best Practices**

### **1. Performance**
- **Optimize images** trước khi upload
- **Use CDN** cho ảnh nếu có thể
- **Implement caching** strategies

### **2. Accessibility**
- **Alt text** cho tất cả ảnh
- **Semantic HTML** structure
- **Keyboard navigation** support

### **3. SEO**
- **Descriptive filenames**
- **Proper meta tags**
- **Structured data** markup

---

## 🎉 **Kết Luận**

Cấu trúc thư mục `assets` này giúp:
- **Quản lý code** dễ dàng hơn
- **Phát triển** nhanh chóng hơn
- **Bảo trì** đơn giản hơn
- **Hiệu suất** tốt hơn

*"Tổ chức tốt là chìa khóa của thành công"* 🗂️✨
