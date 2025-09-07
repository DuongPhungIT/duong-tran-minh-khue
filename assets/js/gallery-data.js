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
            src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=300&fit=crop",
            alt: "Bé Khuê chào đời",
            title: "🌸 Chào Đời 🌸",
            description: "Khoảnh khắc thiêng liêng khi bé Khuê cất tiếng khóc đầu tiên",
            icon: "fas fa-baby",
            date: "2024-09-11",
            category: "birth"
        },
        {
            id: "birth_002",
            src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
            alt: "Bé Khuê lần đầu gặp ba mẹ",
            title: "👨‍👩‍👧 Lần Đầu Gặp Ba Mẹ",
            description: "Khoảnh khắc xúc động khi bé Khuê lần đầu được ba mẹ ôm vào lòng",
            icon: "fas fa-heart",
            date: "2024-09-11",
            category: "birth"
        }
    ],

    // Danh mục: Đầy Tháng
    monthly: [
        {
            id: "monthly_001",
            src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
            alt: "Lễ đầy tháng của bé Khuê",
            title: "🎉 Lễ Đầy Tháng 🎉",
            description: "Bé Khuê tròn 1 tháng tuổi, được tổ chức lễ đầy tháng đầu tiên",
            icon: "fas fa-calendar-check",
            date: "2024-10-11",
            category: "monthly"
        },
        {
            id: "monthly_002",
            src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
            alt: "Bé Khuê mặc quần áo đẹp",
            title: "👗 Quần Áo Đẹp",
            description: "Bé Khuê mặc bộ quần áo đẹp nhất trong lễ đầy tháng",
            icon: "fas fa-tshirt",
            date: "2024-10-11",
            category: "monthly"
        },
        {
            id: "monthly_IMG_7414",
            src: "assets/images/monthly/IMG_7414.JPG",
            alt: "IMG_7414",
            title: "Khoảnh Khắc Đáng Yêu",
            description: "Ảnh từ thư mục monthly",
            icon: "fas fa-image",
            date: "2024-10-11",
            category: "monthly"
        },
        {
            id: "monthly_IMG_7416",
            src: "assets/images/monthly/IMG_7416.JPG",
            alt: "IMG_7416",
            title: "Khoảnh Khắc Đáng Yêu",
            description: "Ảnh từ thư mục monthly",
            icon: "fas fa-image",
            date: "2024-10-11",
            category: "monthly"
        },
        {
            id: "monthly_IMG_8345",
            src: "assets/images/monthly/IMG_8345.JPG",
            alt: "IMG_8345",
            title: "Khoảnh Khắc Đáng Yêu",
            description: "Ảnh từ thư mục monthly",
            icon: "fas fa-image",
            date: "2024-10-11",
            category: "monthly"
        },
        {
            id: "monthly_beauty_1728612899915",
            src: "assets/images/monthly/beauty_1728612899915.JPG",
            alt: "beauty_1728612899915",
            title: "Khoảnh Khắc Đáng Yêu",
            description: "Ảnh từ thư mục monthly",
            icon: "fas fa-image",
            date: "2024-10-11",
            category: "monthly"
        },
        {
            id: "monthly_beauty_1728613156659",
            src: "assets/images/monthly/beauty_1728613156659.JPG",
            alt: "beauty_1728613156659",
            title: "Khoảnh Khắc Đáng Yêu",
            description: "Ảnh từ thư mục monthly",
            icon: "fas fa-image",
            date: "2024-10-11",
            category: "monthly"
        },
        {
            id: "monthly_beauty_1728621403491",
            src: "assets/images/monthly/beauty_1728621403491.JPG",
            alt: "beauty_1728621403491",
            title: "Khoảnh Khắc Đáng Yêu",
            description: "Ảnh từ thư mục monthly",
            icon: "fas fa-image",
            date: "2024-10-11",
            category: "monthly"
        }
    ],

    // Danh mục: Hoạt Động
    activities: [
        {
            id: "activities_001",
            src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
            alt: "Nụ cười đầu tiên của bé Khuê",
            title: "🌟 Nụ Cười Đầu Tiên",
            description: "Bé Khuê bắt đầu biết cười, nụ cười trong sáng và hồn nhiên",
            icon: "fas fa-smile",
            date: "2024-10-15",
            category: "activities"
        },
        {
            id: "activities_002",
            src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
            alt: "Bé Khuê biết cầm nắm",
            title: "🤲 Biết Cầm Nắm",
            description: "Bé Khuê bắt đầu biết cầm nắm đồ vật, khám phá thế giới",
            icon: "fas fa-hand-paper",
            date: "2024-11-01",
            category: "activities"
        },
        {
            id: "activities_003",
            src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=300&fit=crop",
            alt: "Bé Khuê biết bò",
            title: "🦋 Biết Bò",
            description: "Bé Khuê bắt đầu biết bò, khám phá mọi ngóc ngách trong nhà",
            icon: "fas fa-crawling",
            date: "2024-12-01",
            category: "activities"
        }
    ],

    // Danh mục: Thôi Nôi
    "thoi-noi": [
        {
            id: "thoi-noi_001",
            src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
            alt: "Lễ thôi nôi của bé Khuê",
            title: "🎂 Lễ Thôi Nôi 🎂",
            description: "Bé Khuê tròn 1 tuổi, được tổ chức lễ thôi nôi truyền thống",
            icon: "fas fa-birthday-cake",
            date: "2025-09-11",
            category: "thoi-noi"
        },
        {
            id: "thoi-noi_002",
            src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
            alt: "Mâm đồ chơi thôi nôi",
            title: "🎁 Mâm Đồ Chơi",
            description: "Mâm đồ chơi để bé Khuê 'chọn nghề' trong lễ thôi nôi",
            icon: "fas fa-gift",
            date: "2025-09-11",
            category: "thoi-noi"
        },
        { id: "thoi-noi_VDAL9530", src: "assets/images/thoi-noi/VDAL9530.JPG", alt: "VDAL9530", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9522", src: "assets/images/thoi-noi/VDAL9522.JPG", alt: "VDAL9522", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9502", src: "assets/images/thoi-noi/VDAL9502.JPG", alt: "VDAL9502", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9484", src: "assets/images/thoi-noi/VDAL9484.JPG", alt: "VDAL9484", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9468", src: "assets/images/thoi-noi/VDAL9468.JPG", alt: "VDAL9468", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9398", src: "assets/images/thoi-noi/VDAL9398.JPG", alt: "VDAL9398", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9387", src: "assets/images/thoi-noi/VDAL9387.JPG", alt: "VDAL9387", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9371", src: "assets/images/thoi-noi/VDAL9371.JPG", alt: "VDAL9371", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9369", src: "assets/images/thoi-noi/VDAL9369.JPG", alt: "VDAL9369", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9358", src: "assets/images/thoi-noi/VDAL9358.JPG", alt: "VDAL9358", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9353", src: "assets/images/thoi-noi/VDAL9353.JPG", alt: "VDAL9353", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9346", src: "assets/images/thoi-noi/VDAL9346.JPG", alt: "VDAL9346", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9335", src: "assets/images/thoi-noi/VDAL9335.JPG", alt: "VDAL9335", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9322", src: "assets/images/thoi-noi/VDAL9322.JPG", alt: "VDAL9322", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9314", src: "assets/images/thoi-noi/VDAL9314.JPG", alt: "VDAL9314", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9231", src: "assets/images/thoi-noi/VDAL9231.JPG", alt: "VDAL9231", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9214", src: "assets/images/thoi-noi/VDAL9214.JPG", alt: "VDAL9214", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9189", src: "assets/images/thoi-noi/VDAL9189.JPG", alt: "VDAL9189", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9176", src: "assets/images/thoi-noi/VDAL9176.JPG", alt: "VDAL9176", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9149", src: "assets/images/thoi-noi/VDAL9149.JPG", alt: "VDAL9149", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9133", src: "assets/images/thoi-noi/VDAL9133.JPG", alt: "VDAL9133", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9114", src: "assets/images/thoi-noi/VDAL9114.JPG", alt: "VDAL9114", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9104", src: "assets/images/thoi-noi/VDAL9104.JPG", alt: "VDAL9104", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_VDAL9096", src: "assets/images/thoi-noi/VDAL9096.JPG", alt: "VDAL9096", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_SAMM7373", src: "assets/images/thoi-noi/SAMM7373.JPG", alt: "SAMM7373", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_SAMM7371", src: "assets/images/thoi-noi/SAMM7371.JPG", alt: "SAMM7371", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_SAMM7343", src: "assets/images/thoi-noi/SAMM7343.JPG", alt: "SAMM7343", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_SAMM7339", src: "assets/images/thoi-noi/SAMM7339.JPG", alt: "SAMM7339", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_SAMM7336", src: "assets/images/thoi-noi/SAMM7336.JPG", alt: "SAMM7336", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_SAMM7323", src: "assets/images/thoi-noi/SAMM7323.JPG", alt: "SAMM7323", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_SAMM7310", src: "assets/images/thoi-noi/SAMM7310.JPG", alt: "SAMM7310", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_SAMM7307", src: "assets/images/thoi-noi/SAMM7307.JPG", alt: "SAMM7307", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" },
        { id: "thoi-noi_SAMM7300", src: "assets/images/thoi-noi/SAMM7300.JPG", alt: "SAMM7300", title: "Thôi Nôi - Khoảnh Khắc", description: "Ảnh thôi nôi", icon: "fas fa-birthday-cake", date: "2025-09-11", category: "thoi-noi" }
    ],

    // Danh mục: Gia Đình
    family: [
        { id: "family_IMG_8444", src: "assets/images/family/IMG_8444.JPG", alt: "IMG_8444", title: "Gia Đình - Khoảnh Khắc", description: "Ảnh gia đình", icon: "fas fa-heart", date: "2024-09-11", category: "family" },
        { id: "family_IMG_8445", src: "assets/images/family/IMG_8445.JPG", alt: "IMG_8445", title: "Gia Đình - Khoảnh Khắc", description: "Ảnh gia đình", icon: "fas fa-heart", date: "2024-09-11", category: "family" },
        { id: "family_IMG_8448", src: "assets/images/family/IMG_8448.JPG", alt: "IMG_8448", title: "Gia Đình - Khoảnh Khắc", description: "Ảnh gia đình", icon: "fas fa-heart", date: "2024-09-11", category: "family" },
        { id: "family_IMG_8450", src: "assets/images/family/IMG_8450.JPG", alt: "IMG_8450", title: "Gia Đình - Khoảnh Khắc", description: "Ảnh gia đình", icon: "fas fa-heart", date: "2024-09-11", category: "family" },
        { id: "family_IMG_8089", src: "assets/images/family/IMG_8089.JPG", alt: "IMG_8089", title: "Gia Đình - Khoảnh Khắc", description: "Ảnh gia đình", icon: "fas fa-heart", date: "2024-09-11", category: "family" },
        { id: "family_IMG_7886", src: "assets/images/family/IMG_7886.JPG", alt: "IMG_7886", title: "Gia Đình - Khoảnh Khắc", description: "Ảnh gia đình", icon: "fas fa-heart", date: "2024-09-11", category: "family" },
        { id: "family_IMG_7883", src: "assets/images/family/IMG_7883.JPG", alt: "IMG_7883", title: "Gia Đình - Khoảnh Khắc", description: "Ảnh gia đình", icon: "fas fa-heart", date: "2024-09-11", category: "family" },
        { id: "family_IMG_7882", src: "assets/images/family/IMG_7882.JPG", alt: "IMG_7882", title: "Gia Đình - Khoảnh Khắc", description: "Ảnh gia đình", icon: "fas fa-heart", date: "2024-09-11", category: "family" },
        { id: "family_IMG_7881", src: "assets/images/family/IMG_7881.JPG", alt: "IMG_7881", title: "Gia Đình - Khoảnh Khắc", description: "Ảnh gia đình", icon: "fas fa-heart", date: "2024-09-11", category: "family" },
        { id: "family_IMG_7777", src: "assets/images/family/IMG_7777.JPG", alt: "IMG_7777", title: "Gia Đình - Khoảnh Khắc", description: "Ảnh gia đình", icon: "fas fa-heart", date: "2024-09-11", category: "family" },
        { id: "family_IMG_7775", src: "assets/images/family/IMG_7775.JPG", alt: "IMG_7775", title: "Gia Đình - Khoảnh Khắc", description: "Ảnh gia đình", icon: "fas fa-heart", date: "2024-09-11", category: "family" },
        { id: "family_IMG_7695", src: "assets/images/family/IMG_7695.JPG", alt: "IMG_7695", title: "Gia Đình - Khoảnh Khắc", description: "Ảnh gia đình", icon: "fas fa-heart", date: "2024-09-11", category: "family" }
    ],

    // Danh mục: Vui Chơi
    play: [
        {
            id: "play_001",
            src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
            alt: "Giờ chơi",
            title: "Giờ Chơi",
            description: "Niềm vui trong từng hoạt động",
            icon: "fas fa-gamepad",
            date: "2024-01-16",
            category: "play"
        },
        {
            id: "play_002",
            src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
            alt: "Khám phá",
            title: "Khám Phá",
            description: "Thế giới qua đôi mắt con",
            icon: "fas fa-search",
            date: "2024-01-18",
            category: "play"
        },
        {
            id: "play_003",
            src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
            alt: "Chơi với đồ chơi",
            title: "Chơi Với Đồ Chơi",
            description: "Sáng tạo và học hỏi qua đồ chơi",
            icon: "fas fa-puzzle-piece",
            date: "2024-01-22",
            category: "play"
        },
        {
            id: "play_004",
            src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
            alt: "Vẽ tranh",
            title: "Vẽ Tranh",
            description: "Thể hiện trí tưởng tượng qua màu sắc",
            icon: "fas fa-palette",
            date: "2024-01-28",
            category: "play"
        },
        {
            id: "play_005",
            src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
            alt: "Đọc sách",
            title: "Đọc Sách",
            description: "Khám phá thế giới qua những trang sách",
            icon: "fas fa-book",
            date: "2024-02-05",
            category: "play"
        }
    ],

    // Danh mục: Cột Mốc
    milestone: [
        {
            id: "milestone_001",
            src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=300&fit=crop",
            alt: "Cột mốc quan trọng",
            title: "Cột Mốc Quan Trọng",
            description: "Những bước tiến đáng tự hào",
            icon: "fas fa-star",
            date: "2024-01-17",
            category: "milestone"
        },
        {
            id: "milestone_002",
            src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=300&fit=crop",
            alt: "Thành tựu",
            title: "Thành Tựu",
            description: "Những thành công nhỏ bé",
            icon: "fas fa-trophy",
            date: "2024-01-19",
            category: "milestone"
        },
        {
            id: "milestone_003",
            src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=300&fit=crop",
            alt: "Học đi",
            title: "Học Đi",
            description: "Bước đi đầu tiên của con",
            icon: "fas fa-walking",
            date: "2024-01-24",
            category: "milestone"
        },
        {
            id: "milestone_004",
            src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=300&fit=crop",
            alt: "Nói từ đầu tiên",
            title: "Nói Từ Đầu Tiên",
            description: "Tiếng nói đầu tiên của con",
            icon: "fas fa-comment",
            date: "2024-01-30",
            category: "milestone"
        }
    ],

    // Danh mục: Sinh Nhật
    birthday: [
        {
            id: "birthday_001",
            src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=300&fit=crop",
            alt: "Sinh nhật lần 1",
            title: "Sinh Nhật Lần 1",
            description: "Ngày con tròn 1 tuổi",
            icon: "fas fa-birthday-cake",
            date: "2024-01-10",
            category: "birthday"
        },
        {
            id: "birthday_002",
            src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=300&fit=crop",
            alt: "Sinh nhật lần 2",
            title: "Sinh Nhật Lần 2",
            description: "Ngày con tròn 2 tuổi",
            icon: "fas fa-birthday-cake",
            date: "2024-01-10",
            category: "birthday"
        }
    ],

    // Danh mục: Du Lịch
    travel: [
        {
            id: "travel_001",
            src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
            alt: "Chuyến du lịch đầu tiên",
            title: "Chuyến Du Lịch Đầu Tiên",
            description: "Khám phá thế giới bên ngoài",
            icon: "fas fa-plane",
            date: "2024-01-12",
            category: "travel"
        },
        {
            id: "travel_002",
            src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
            alt: "Đi biển",
            title: "Đi Biển",
            description: "Lần đầu con được nhìn thấy biển",
            icon: "fas fa-water",
            date: "2024-01-14",
            category: "travel"
        }
    ]
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
