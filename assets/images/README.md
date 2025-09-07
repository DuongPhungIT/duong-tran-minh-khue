# 📸 Thư Mục Hình Ảnh

## 🎯 **Mục Đích**
Thư mục này chứa tất cả hình ảnh của album thôi nôi bé Khuê.

## 📁 **Cấu Trúc Thư Mục Đề Xuất**

```
assets/images/
├── birth/           # Ảnh chào đời
│   ├── birth_001.jpg
│   ├── birth_002.jpg
│   └── ...
├── monthly/         # Ảnh đầy tháng
│   ├── monthly_001.jpg
│   ├── monthly_002.jpg
│   └── ...
├── activities/      # Ảnh hoạt động
│   ├── activities_001.jpg
│   ├── activities_002.jpg
│   └── ...
├── thoi-noi/       # Ảnh thôi nôi
│   ├── thoi-noi_001.jpg
│   ├── thoi-noi_002.jpg
│   └── ...
├── family/          # Ảnh gia đình
│   ├── family_001.jpg
│   ├── family_002.jpg
│   └── ...
└── common/          # Ảnh chung
    ├── logo.png
    ├── background.jpg
    └── ...
```

## 🖼️ **Quy Tắc Đặt Tên**

### **Format: `category_sequence.jpg`**
- **birth_001.jpg** - Ảnh chào đời số 1
- **monthly_002.jpg** - Ảnh đầy tháng số 2
- **activities_003.jpg** - Ảnh hoạt động số 3

### **Kích Thước Đề Xuất**
- **Ảnh chính:** 800x600px hoặc 1200x800px
- **Ảnh thumbnail:** 400x300px
- **Ảnh hero:** 1920x1080px

## 🔧 **Cách Sử Dụng**

### **1. Thêm Ảnh Mới**
1. Đặt ảnh vào thư mục phù hợp
2. Đặt tên theo quy tắc: `category_sequence.jpg`
3. Cập nhật `gallery-data.js` với thông tin ảnh mới

### **2. Cập Nhật Gallery Data**
```javascript
// Trong assets/js/gallery-data.js
birth: [
    {
        id: "birth_003",
        src: "assets/images/birth/birth_003.jpg", // Đường dẫn mới
        alt: "Mô tả ảnh",
        title: "Tiêu đề ảnh",
        description: "Mô tả chi tiết",
        icon: "fas fa-baby",
        date: "2024-09-11",
        category: "birth"
    }
]
```

## 📱 **Tối Ưu Hóa**

### **WebP Format**
- Sử dụng định dạng WebP để giảm kích thước file
- Giữ JPG làm fallback cho trình duyệt cũ

### **Lazy Loading**
- Ảnh sẽ được tải khi cần thiết
- Cải thiện tốc độ tải trang

### **Responsive Images**
- Sử dụng `srcset` cho các kích thước khác nhau
- Tối ưu cho mobile và desktop

## 🚫 **Lưu Ý**

- **Không đặt ảnh trực tiếp vào thư mục gốc**
- **Luôn sử dụng đường dẫn tương đối từ `assets/images/`**
- **Kiểm tra kích thước file trước khi upload**
- **Sử dụng tên file có ý nghĩa và dễ hiểu**

---

*"Mỗi bức ảnh là một khoảnh khắc quý giá của bé Khuê"* 🌸
