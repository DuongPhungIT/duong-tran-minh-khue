# 🚀 Thư Mục JavaScript

## 🎯 **Mục Đích**
Thư mục này chứa tất cả các file JavaScript của album thôi nôi bé Khuê.

## 📁 **Cấu Trúc File**

```
assets/js/
├── script.js           # File JavaScript chính
├── gallery-data.js     # Dữ liệu gallery và helper functions
└── README.md          # Hướng dẫn này
```

## 🔧 **Chi Tiết Từng File**

### **1. script.js**
File JavaScript chính xử lý tất cả tương tác và animation của website.

#### **Chức Năng Chính:**
- **Navigation**: Xử lý menu mobile, scroll effects
- **Gallery**: Filtering, lightbox, statistics
- **Animations**: AOS animations, counters, scroll effects
- **Event Handling**: Click, scroll, touch events

#### **Các Function Quan Trọng:**
```javascript
// Khởi tạo website
function initWebsite()

// Xử lý gallery
function renderGallery(category)
function updateGalleryStats()
function openLightbox(image)

// Xử lý mobile menu
function toggleMobileMenu()
function closeMobileMenu()

// Xử lý scroll effects
function handleScroll()
function animateCounters()
```

### **2. gallery-data.js**
File chứa dữ liệu ảnh và các helper functions để quản lý gallery.

#### **Cấu Trúc Dữ Liệu:**
```javascript
const galleryData = {
    birth: [...],        // Ảnh chào đời
    monthly: [...],      // Ảnh đầy tháng
    activities: [...],   // Ảnh hoạt động
    "thoi-noi": [...],   // Ảnh thôi nôi
    family: [...]        // Ảnh gia đình
}
```

#### **Helper Functions:**
```javascript
// Lấy tất cả ảnh
getAllImages()

// Lấy ảnh theo danh mục
getImagesByCategory(category)

// Thêm ảnh mới
addImageToCategory(category, imageData)

// Xóa ảnh
removeImageById(imageId)

// Tìm kiếm ảnh
searchImages(query)

// Lấy thống kê
getImageStats()
```

## 🚀 **Cách Sử Dụng**

### **1. Thêm Ảnh Mới**
```javascript
// Trong gallery-data.js
addImageToCategory('birth', {
    id: "birth_003",
    src: "assets/images/birth/birth_003.jpg",
    alt: "Mô tả ảnh",
    title: "Tiêu đề ảnh",
    description: "Mô tả chi tiết",
    icon: "fas fa-baby",
    date: "2024-09-11",
    category: "birth"
});
```

### **2. Tạo Danh Mục Mới**
```javascript
// Thêm danh mục mới vào galleryData
const newCategory = "special-moments";
galleryData[newCategory] = [
    // Ảnh của danh mục mới
];

// Cập nhật HTML để hiển thị danh mục mới
// Cập nhật JavaScript để xử lý filter mới
```

### **3. Tùy Chỉnh Animation**
```javascript
// Trong script.js, thay đổi AOS settings
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
});
```

## 📱 **Tối Ưu Hóa**

### **Performance**
- Sử dụng `debounce` cho scroll events
- Lazy loading cho ảnh
- Minify code khi deploy

### **Mobile First**
- Touch events cho mobile
- Responsive design
- Mobile menu optimization

### **Accessibility**
- Keyboard navigation
- Screen reader support
- Focus management

## 🔍 **Debugging**

### **Console Logs**
```javascript
// Kiểm tra gallery data
console.log('Gallery Data:', galleryData);

// Kiểm tra filter
console.log('Current Filter:', currentFilter);

// Kiểm tra statistics
console.log('Image Stats:', getImageStats());
```

### **Common Issues**
1. **Ảnh không hiển thị**: Kiểm tra đường dẫn trong `gallery-data.js`
2. **Filter không hoạt động**: Kiểm tra category names
3. **Mobile menu không đóng**: Kiểm tra event listeners

## 🚫 **Lưu Ý**

- **Không xóa file `script.js`** - đây là file chính
- **Luôn backup `gallery-data.js`** trước khi chỉnh sửa
- **Kiểm tra console** để debug lỗi
- **Test trên mobile** để đảm bảo responsive

## 🔄 **Cập Nhật**

### **Khi Thêm Ảnh Mới:**
1. Cập nhật `gallery-data.js`
2. Kiểm tra đường dẫn ảnh
3. Test filter và lightbox

### **Khi Thay Đổi Layout:**
1. Cập nhật HTML structure
2. Cập nhật CSS selectors
3. Test tất cả chức năng

---

*"Code sạch sẽ, website đẹp mắt"* 💻✨
