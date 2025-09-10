// ========================================
// DỮ LIỆU THƯ VIỆN ẢNH - ALBUM KỶ NIỆM
// Dành riêng cho bé gái Dương Trần Minh Khuê
// ========================================

// Cấu trúc dữ liệu ảnh cho từng danh mục thôi nôi
const galleryData = {
    // Danh mục: Tất cả ảnh
    all: [
        // Ảnh sẽ được tự động thêm từ tất cả các danh mục
    ],

    // Danh mục: Chào Đời
    birth: [
        {
            id: "birth_001",
            src: "assets/thumbs/birth/IMG_7285.JPG",
            alt: "Bé Khuê chào đời",
            title: "👶 Ngày Con Chào Đời 👶",
            description: "Khoảnh khắc thiêng liêng nhất trong đời ba - khi con cất tiếng khóc đầu tiên",
            icon: "fas fa-baby",
            date: "2024-09-11",
            category: "birth"
        },
        { id: "birth_IMG_7344", src: "assets/images/birth/IMG_7344.JPG", alt: "IMG_7344", title: "Khoảnh Khắc Đầu Tiên", description: "Ba ghi lại khoảnh khắc đáng nhớ khi con chào đời", icon: "fas fa-baby", date: "2024-09-11", category: "birth" },
        { id: "birth_IMG_7343", src: "assets/images/birth/IMG_7343.JPG", alt: "IMG_7343", title: "Ngày Con Chào Đời", description: "Ba ghi lại khoảnh khắc thiêng liêng khi con chào đời", icon: "fas fa-baby", date: "2024-09-11", category: "birth" },
        { id: "birth_IMG_7340", src: "assets/images/birth/IMG_7340.JPG", alt: "IMG_7340", title: "Ngày Con Chào Đời", description: "Ba ghi lại khoảnh khắc thiêng liêng khi con chào đời", icon: "fas fa-baby", date: "2024-09-11", category: "birth" },
        { id: "birth_IMG_7338", src: "assets/images/birth/IMG_7338.JPG", alt: "IMG_7338", title: "Ngày Con Chào Đời", description: "Ba ghi lại khoảnh khắc thiêng liêng khi con chào đời", icon: "fas fa-baby", date: "2024-09-11", category: "birth" },
        { id: "birth_IMG_7335", src: "assets/images/birth/IMG_7335.JPG", alt: "IMG_7335", title: "Ngày Con Chào Đời", description: "Ba ghi lại khoảnh khắc thiêng liêng khi con chào đời", icon: "fas fa-baby", date: "2024-09-11", category: "birth" },
        { id: "birth_IMG_7331", src: "assets/images/birth/IMG_7331.JPG", alt: "IMG_7331", title: "Ngày Con Chào Đời", description: "Ba ghi lại khoảnh khắc thiêng liêng khi con chào đời", icon: "fas fa-baby", date: "2024-09-11", category: "birth" },
       { id: "birth_IMG_7254", src: "assets/images/birth/IMG_7254.JPG", alt: "IMG_7254", title: "Ngày Con Chào Đời", description: "Ba ghi lại khoảnh khắc thiêng liêng khi con chào đời", icon: "fas fa-baby", date: "2024-09-11", category: "birth" },
        { id: "birth_IMG_7253", src: "assets/images/birth/IMG_7253.JPG", alt: "IMG_7253", title: "Ngày Con Chào Đời", description: "Ba ghi lại khoảnh khắc thiêng liêng khi con chào đời", icon: "fas fa-baby", date: "2024-09-11", category: "birth" },
        { id: "birth_IMG_7249", src: "assets/images/birth/IMG_7249.JPG", alt: "IMG_7249", title: "Ngày Con Chào Đời", description: "Ba ghi lại khoảnh khắc thiêng liêng khi con chào đời", icon: "fas fa-baby", date: "2024-09-11", category: "birth" },
        { id: "birth_IMG_7245", src: "assets/images/birth/IMG_7245.JPG", alt: "IMG_7245", title: "Ngày Con Chào Đời", description: "Ba ghi lại khoảnh khắc thiêng liêng khi con chào đời", icon: "fas fa-baby", date: "2024-09-11", category: "birth" }
    ],

    // Danh mục: Đầy Tháng
    monthly: [
        {
            id: "monthly_001",
            src: "assets/images/monthly/beauty_1728613156659.JPG",
            alt: "Lễ đầy tháng của bé Khuê",
            title: "🎊 Lễ Đầy Tháng Của Con 🎊",
            description: "Con tròn 1 tháng tuổi - ba mẹ tổ chức lễ đầy tháng đầu tiên cho con",
            icon: "fas fa-calendar-check",
            date: "2024-10-11",
            category: "monthly"
        },
        {
            id: "monthly_IMG_7414",
            src: "assets/images/monthly/IMG_7414.JPG",
            alt: "IMG_7414",
            title: "Con Đáng Yêu",
            description: "Ba chụp lại khoảnh khắc đáng yêu của con",
            icon: "fas fa-image",
            date: "2024-10-11",
            category: "monthly"
        },
        {
            id: "monthly_IMG_7416",
            src: "assets/images/monthly/IMG_7416.JPG",
            alt: "IMG_7416",
            title: "Con Đáng Yêu",
            description: "Ba chụp lại khoảnh khắc đáng yêu của con",
            icon: "fas fa-image",
            date: "2024-10-11",
            category: "monthly"
        },
        {
            id: "monthly_IMG_8345",
            src: "assets/images/monthly/IMG_8345.JPG",
            alt: "IMG_8345",
            title: "Con Đáng Yêu",
            description: "Ba chụp lại khoảnh khắc đáng yêu của con",
            icon: "fas fa-image",
            date: "2024-10-11",
            category: "monthly"
        },
        {
            id: "monthly_beauty_1728612899915",
            src: "assets/images/monthly/beauty_1728612899915.JPG",
            alt: "beauty_1728612899915",
            title: "Con Đáng Yêu",
            description: "Ba chụp lại khoảnh khắc đáng yêu của con",
            icon: "fas fa-image",
            date: "2024-10-11",
            category: "monthly"
        },
        {
            id: "monthly_beauty_1728613156659",
            src: "assets/images/monthly/beauty_1728613156659.JPG",
            alt: "beauty_1728613156659",
            title: "Con Đáng Yêu",
            description: "Ba chụp lại khoảnh khắc đáng yêu của con",
            icon: "fas fa-image",
            date: "2024-10-11",
            category: "monthly"
        },
        {
            id: "monthly_beauty_1728621403491",
            src: "assets/images/monthly/beauty_1728621403491.JPG",
            alt: "beauty_1728621403491",
            title: "Con Đáng Yêu",
            description: "Ba chụp lại khoảnh khắc đáng yêu của con",
            icon: "fas fa-image",
            date: "2024-10-11",
            category: "monthly"
        },
        { id: "monthly_IMG_8289", src: "assets/images/monthly/IMG_8289.JPG", alt: "IMG_8289", title: "Lễ Đầy Tháng Của Con", description: "Ba ghi lại lễ đầy tháng của con", icon: "fas fa-calendar-check", date: "2024-10-11", category: "monthly" },
        { id: "monthly_IMG_8343", src: "assets/images/monthly/IMG_8343.JPG", alt: "IMG_8343", title: "Lễ Đầy Tháng Của Con", description: "Ba ghi lại lễ đầy tháng của con", icon: "fas fa-calendar-check", date: "2024-10-11", category: "monthly" },
        { id: "monthly_IMG_8332", src: "assets/images/monthly/IMG_8332.JPG", alt: "IMG_8332", title: "Lễ Đầy Tháng Của Con", description: "Ba ghi lại lễ đầy tháng của con", icon: "fas fa-calendar-check", date: "2024-10-11", category: "monthly" },
        { id: "monthly_IMG_8450", src: "assets/images/monthly/IMG_8450.JPG", alt: "IMG_8450", title: "Lễ Đầy Tháng Của Con", description: "Ba ghi lại lễ đầy tháng của con", icon: "fas fa-calendar-check", date: "2024-10-11", category: "monthly" },
        { id: "monthly_IMG_8448", src: "assets/images/monthly/IMG_8448.JPG", alt: "IMG_8448", title: "Lễ Đầy Tháng Của Con", description: "Ba ghi lại lễ đầy tháng của con", icon: "fas fa-calendar-check", date: "2024-10-11", category: "monthly" },
        { id: "monthly_IMG_8445", src: "assets/images/monthly/IMG_8445.JPG", alt: "IMG_8445", title: "Lễ Đầy Tháng Của Con", description: "Ba ghi lại lễ đầy tháng của con", icon: "fas fa-calendar-check", date: "2024-10-11", category: "monthly" },
        { id: "monthly_IMG_8444", src: "assets/images/monthly/IMG_8444.JPG", alt: "IMG_8444", title: "Lễ Đầy Tháng Của Con", description: "Ba ghi lại lễ đầy tháng của con", icon: "fas fa-calendar-check", date: "2024-10-11", category: "monthly" },
        { id: "monthly_IMG_8089", src: "assets/images/monthly/IMG_8089.JPG", alt: "IMG_8089", title: "Lễ Đầy Tháng Của Con", description: "Ba ghi lại lễ đầy tháng của con", icon: "fas fa-calendar-check", date: "2024-10-11", category: "monthly" },
        { id: "monthly_IMG_7886", src: "assets/images/monthly/IMG_7886.JPG", alt: "IMG_7886", title: "Lễ Đầy Tháng Của Con", description: "Ba ghi lại lễ đầy tháng của con", icon: "fas fa-calendar-check", date: "2024-10-11", category: "monthly" },
        { id: "monthly_IMG_7883", src: "assets/images/monthly/IMG_7883.JPG", alt: "IMG_7883", title: "Lễ Đầy Tháng Của Con", description: "Ba ghi lại lễ đầy tháng của con", icon: "fas fa-calendar-check", date: "2024-10-11", category: "monthly" },
        { id: "monthly_IMG_7882", src: "assets/images/monthly/IMG_7882.JPG", alt: "IMG_7882", title: "Lễ Đầy Tháng Của Con", description: "Ba ghi lại lễ đầy tháng của con", icon: "fas fa-calendar-check", date: "2024-10-11", category: "monthly" },
        { id: "monthly_IMG_7881", src: "assets/images/monthly/IMG_7881.JPG", alt: "IMG_7881", title: "Lễ Đầy Tháng Của Con", description: "Ba ghi lại lễ đầy tháng của con", icon: "fas fa-calendar-check", date: "2024-10-11", category: "monthly" },
        { id: "monthly_IMG_7777", src: "assets/images/monthly/IMG_7777.JPG", alt: "IMG_7777", title: "Lễ Đầy Tháng Của Con", description: "Ba ghi lại lễ đầy tháng của con", icon: "fas fa-calendar-check", date: "2024-10-11", category: "monthly" },
        { id: "monthly_IMG_7775", src: "assets/images/monthly/IMG_7775.JPG", alt: "IMG_7775", title: "Lễ Đầy Tháng Của Con", description: "Ba ghi lại lễ đầy tháng của con", icon: "fas fa-calendar-check", date: "2024-10-11", category: "monthly" },
        { id: "monthly_IMG_7695", src: "assets/images/monthly/IMG_7695.JPG", alt: "IMG_7695", title: "Lễ Đầy Tháng Của Con", description: "Ba ghi lại lễ đầy tháng của con", icon: "fas fa-calendar-check", date: "2024-10-11", category: "monthly" }
    ],

    // Danh mục: Thôi Nôi
    "thoi-noi": [
        { id: "thoi-noi_VDAL9530", src: "assets/images/thoi-noi/VDAL9530.JPG", alt: "VDAL9530", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9522", src: "assets/images/thoi-noi/VDAL9522.JPG", alt: "VDAL9522", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9502", src: "assets/images/thoi-noi/VDAL9502.JPG", alt: "VDAL9502", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9484", src: "assets/images/thoi-noi/VDAL9484.JPG", alt: "VDAL9484", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9468", src: "assets/images/thoi-noi/VDAL9468.JPG", alt: "VDAL9468", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9398", src: "assets/images/thoi-noi/VDAL9398.JPG", alt: "VDAL9398", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9387", src: "assets/images/thoi-noi/VDAL9387.JPG", alt: "VDAL9387", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9371", src: "assets/images/thoi-noi/VDAL9371.JPG", alt: "VDAL9371", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9369", src: "assets/images/thoi-noi/VDAL9369.JPG", alt: "VDAL9369", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9358", src: "assets/images/thoi-noi/VDAL9358.JPG", alt: "VDAL9358", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9353", src: "assets/images/thoi-noi/VDAL9353.JPG", alt: "VDAL9353", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9346", src: "assets/images/thoi-noi/VDAL9346.JPG", alt: "VDAL9346", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9335", src: "assets/images/thoi-noi/VDAL9335.JPG", alt: "VDAL9335", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9322", src: "assets/images/thoi-noi/VDAL9322.JPG", alt: "VDAL9322", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9314", src: "assets/images/thoi-noi/VDAL9314.JPG", alt: "VDAL9314", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9231", src: "assets/images/thoi-noi/VDAL9231.JPG", alt: "VDAL9231", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9214", src: "assets/images/thoi-noi/VDAL9214.JPG", alt: "VDAL9214", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9189", src: "assets/images/thoi-noi/VDAL9189.JPG", alt: "VDAL9189", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9176", src: "assets/images/thoi-noi/VDAL9176.JPG", alt: "VDAL9176", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9149", src: "assets/images/thoi-noi/VDAL9149.JPG", alt: "VDAL9149", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9133", src: "assets/images/thoi-noi/VDAL9133.JPG", alt: "VDAL9133", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9114", src: "assets/images/thoi-noi/VDAL9114.JPG", alt: "VDAL9114", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9104", src: "assets/images/thoi-noi/VDAL9104.JPG", alt: "VDAL9104", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9096", src: "assets/images/thoi-noi/VDAL9096.JPG", alt: "VDAL9096", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_SAMM7373", src: "assets/images/thoi-noi/SAMM7373.JPG", alt: "SAMM7373", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_SAMM7371", src: "assets/images/thoi-noi/SAMM7371.JPG", alt: "SAMM7371", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_SAMM7343", src: "assets/images/thoi-noi/SAMM7343.JPG", alt: "SAMM7343", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_SAMM7339", src: "assets/images/thoi-noi/SAMM7339.JPG", alt: "SAMM7339", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_SAMM7336", src: "assets/images/thoi-noi/SAMM7336.JPG", alt: "SAMM7336", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_SAMM7323", src: "assets/images/thoi-noi/SAMM7323.JPG", alt: "SAMM7323", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_SAMM7310", src: "assets/images/thoi-noi/SAMM7310.JPG", alt: "SAMM7310", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_SAMM7307", src: "assets/images/thoi-noi/SAMM7307.JPG", alt: "SAMM7307", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_SAMM7300", src: "assets/images/thoi-noi/SAMM7300.JPG", alt: "SAMM7300", title: "Lễ Thôi Nôi Của Con", description: "Ba ghi lại lễ thôi nôi tròn 1 tuổi của con", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" }
    ],
};

// Hàm tạo danh sách tất cả ảnh
function getAllImages() {
    const allImages = [];
    Object.keys(galleryData).forEach(category => {
        if (category !== 'all') {
            allImages.push(...galleryData[category]);
        }
    });
    return allImages;
}

// Cập nhật danh sách "Tất cả"
galleryData.all = getAllImages();

// Hàm lấy ảnh theo danh mục
function getImagesByCategory(category) {
    if (category === 'all') {
        return getAllImages();
    }
    return galleryData[category] || [];
}

// Hàm thêm ảnh mới vào danh mục
function addImageToCategory(category, imageData) {
    if (!galleryData[category]) {
        galleryData[category] = [];
    }
    
    // Tạo ID tự động nếu không có
    if (!imageData.id) {
        const timestamp = Date.now();
        imageData.id = `${category}_${timestamp}`;
    }
    
    // Thêm category vào imageData
    imageData.category = category;
    
    // Thêm ảnh vào danh mục
    galleryData[category].push(imageData);
    
    // Cập nhật danh sách "Tất cả"
    galleryData.all = getAllImages();
    
    return imageData;
}

// Hàm xóa ảnh theo ID
function removeImageById(imageId) {
    Object.keys(galleryData).forEach(category => {
        if (category !== 'all') {
            galleryData[category] = galleryData[category].filter(img => img.id !== imageId);
        }
    });
    
    // Cập nhật danh sách "Tất cả"
    galleryData.all = getAllImages();
}

// Hàm tìm kiếm ảnh theo từ khóa
function searchImages(keyword) {
    const results = [];
    const searchTerm = keyword.toLowerCase();
    
    Object.keys(galleryData).forEach(category => {
        if (category !== 'all') {
            galleryData[category].forEach(img => {
                if (img.title.toLowerCase().includes(searchTerm) || 
                    img.description.toLowerCase().includes(searchTerm) ||
                    img.alt.toLowerCase().includes(searchTerm)) {
                    results.push(img);
                }
            });
        }
    });
    
    return results;
}

// Hàm lấy thống kê ảnh
function getImageStats() {
    const stats = {};
    Object.keys(galleryData).forEach(category => {
        if (category !== 'all') {
            stats[category] = galleryData[category].length;
        }
    });
    stats.total = getAllImages().length;
    return stats;
}

// Export các hàm và dữ liệu
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        galleryData,
        getAllImages,
        getImagesByCategory,
        addImageToCategory,
        removeImageById,
        searchImages,
        getImageStats
    };
} else {
    // Browser environment
    window.galleryData = galleryData;
    window.getAllImages = getAllImages;
    window.getImagesByCategory = getImagesByCategory;
    window.addImageToCategory = addImageToCategory;
    window.removeImageById = removeImageById;
    window.searchImages = searchImages;
    window.getImageStats = getImageStats;
}

// Log thông tin khởi tạo
console.log('📸 Gallery Data đã được khởi tạo thành công!');
console.log('📊 Thống kê ảnh:', getImageStats());
console.log('💡 Sử dụng các hàm: getImagesByCategory(), addImageToCategory(), searchImages()');
