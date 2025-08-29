# 📸 Album Kỷ Niệm - Hành Trình Của Con

Một dự án album đẹp mắt và sinh động để lưu giữ những khoảnh khắc đáng nhớ và kỷ niệm quý giá về con yêu.

## ✨ Tính Năng Nổi Bật

### 🎨 Thiết Kế Hiện Đại
- **Responsive Design**: Tương thích với mọi thiết bị (desktop, tablet, mobile)
- **Gradient Colors**: Sử dụng màu sắc gradient đẹp mắt và hiện đại
- **Smooth Animations**: Các hiệu ứng chuyển động mượt mà và tinh tế
- **Glassmorphism**: Thiết kế trong suốt với hiệu ứng blur hiện đại

### 🚀 Tính Năng Tương Tác
- **Navigation**: Menu điều hướng cố định với hiệu ứng scroll
- **Timeline**: Hiển thị các mốc thời gian quan trọng theo dòng thời gian
- **Photo Gallery**: Thư viện ảnh với bộ lọc và lightbox
- **Memory Cards**: Hiển thị những kỷ niệm đáng nhớ
- **Smooth Scrolling**: Cuộn mượt giữa các section

### 📱 Trải Nghiệm Người Dùng
- **Touch Support**: Hỗ trợ cử chỉ vuốt trên thiết bị di động
- **Keyboard Navigation**: Điều hướng bằng phím mũi tên
- **Scroll Progress**: Thanh tiến trình cuộn trang
- **Back to Top**: Nút quay về đầu trang
- **Loading Animations**: Hiệu ứng tải trang mượt mà

## 🛠️ Công Nghệ Sử Dụng

- **HTML5**: Semantic markup, accessibility
- **CSS3**: Grid, Flexbox, CSS Variables, Animations
- **JavaScript ES6+**: Modern JavaScript features
- **Font Awesome**: Icons đẹp mắt
- **Google Fonts**: Typography chuyên nghiệp

## 📁 Cấu Trúc Dự Án

```
album-ky-niem/
├── index.html          # Trang chính
├── styles.css          # File CSS chính
├── script.js           # File JavaScript
└── README.md           # Hướng dẫn sử dụng
```

## 🚀 Cách Sử Dụng

### 1. Khởi Chạy Dự Án
```bash
# Mở file index.html trong trình duyệt
# Hoặc sử dụng live server
```

### 2. Tùy Chỉnh Nội Dung
- **Thay đổi ảnh**: Cập nhật đường dẫn ảnh trong HTML
- **Chỉnh sửa text**: Thay đổi nội dung theo ý muốn
- **Tùy chỉnh màu sắc**: Sửa đổi CSS variables trong `:root`

### 3. Thêm Ảnh Mới
```html
<div class="gallery-item" data-category="family">
    <img src="đường-dẫn-ảnh-của-bạn.jpg" alt="Mô tả ảnh">
    <div class="gallery-overlay">
        <h3>Tiêu đề ảnh</h3>
        <p>Mô tả chi tiết</p>
        <i class="fas fa-heart"></i>
    </div>
</div>
```

## 🎯 Các Section Chính

### 🏠 Hero Section
- Tiêu đề chính với gradient text
- Thống kê số liệu với animation
- Ảnh nổi bật với hiệu ứng float
- Nút call-to-action

### ⏰ Timeline Section
- Hiển thị các mốc thời gian quan trọng
- Layout dạng timeline với markers
- Ảnh minh họa cho từng mốc

### 🖼️ Gallery Section
- Bộ lọc theo danh mục
- Grid layout responsive
- Lightbox khi click vào ảnh
- Hiệu ứng hover đẹp mắt

### 💝 Memories Section
- Cards hiển thị kỷ niệm
- Icons minh họa
- Ngày tháng ghi nhớ
- Hiệu ứng hover 3D

### ℹ️ About Section
- Thông tin về con yêu
- Thống kê thú vị
- Stack ảnh với hiệu ứng xoay

## 🎨 Tùy Chỉnh Giao Diện

### Màu Sắc
```css
:root {
    --primary-color: #ff6b6b;      /* Màu chính */
    --secondary-color: #4ecdc4;    /* Màu phụ */
    --accent-color: #ffe66d;       /* Màu nhấn */
    --text-primary: #2d3436;       /* Màu chữ chính */
    --text-secondary: #636e72;     /* Màu chữ phụ */
}
```

### Typography
- **Inter**: Font chính cho nội dung
- **Dancing Script**: Font đặc biệt cho tiêu đề

### Responsive Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🔧 Tính Năng Nâng Cao

### Performance Optimization
- **Lazy Loading**: Ảnh được tải khi cần thiết
- **Throttled Scroll**: Tối ưu hiệu suất scroll
- **Intersection Observer**: Animation khi scroll

### Accessibility
- **Semantic HTML**: Cấu trúc HTML có ý nghĩa
- **Keyboard Navigation**: Điều hướng bằng bàn phím
- **Screen Reader Support**: Hỗ trợ người khiếm thị

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Fallbacks**: Graceful degradation cho trình duyệt cũ

## 📱 Mobile-First Design

- **Touch Gestures**: Vuốt để điều hướng
- **Responsive Images**: Ảnh tự động điều chỉnh kích thước
- **Mobile Menu**: Menu hamburger cho thiết bị di động
- **Touch-Friendly**: Kích thước button phù hợp với touch

## 🚀 Deployment

### GitHub Pages
```bash
# Push code lên GitHub
# Enable GitHub Pages trong repository settings
```

### Netlify
```bash
# Kéo thả thư mục dự án vào Netlify
# Hoặc kết nối với GitHub repository
```

### Vercel
```bash
# Import project từ GitHub
# Tự động deploy khi có thay đổi
```

## 🤝 Đóng Góp

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

Dự án này được phát hành dưới giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.

## 💝 Lời Cảm Ơn

Cảm ơn bạn đã sử dụng dự án Album Kỷ Niệm này. Hy vọng nó sẽ giúp bạn lưu giữ những khoảnh khắc đáng nhớ và kỷ niệm quý giá về con yêu một cách đẹp mắt và ý nghĩa.

---

**Made with ❤️ for precious memories**

Nếu bạn thấy dự án này hữu ích, hãy để lại một ⭐ star trên GitHub!
