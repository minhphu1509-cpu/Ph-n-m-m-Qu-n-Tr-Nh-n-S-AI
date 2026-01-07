const DEFAULT_CONFIG = {
    admin: {
        password: "Phu@1976"
    },
    general: {
        brandName: "DMP AI",
        phone: "+84 766 771 509",
        email: "dmpaidev@gmail.com",
        address: "Toà nhà 2A Nguyễn Thị Minh Khai, Tp HCM",
        copyright: "© 2024 DMP AI. All rights reserved.",
        social: {
            facebook: "https://www.facebook.com/profile.php?id=61585771779201",
            youtube: "https://youtube.com/@DMPAIDev",
            tiktok: "https://www.tiktok.com/@dpmaidev",
            zalo: "https://zalo.me/0766771509"
        }
    },
    hero: {
        title: "Giải Pháp Quản Trị Nhân Sự Toàn Diện 4.0",
        subtitle: "Tối ưu hóa quy trình, nâng cao hiệu suất và xây dựng văn hóa doanh nghiệp vững mạnh với công nghệ AI tiên tiến.",
        ctaText: "Đăng Ký Tư Vấn",
        ctaLink: "#contact",
        image: "https://images.unsplash.com/photo-1551434678-e076c2236034?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    features: [
        {
            icon: "fas fa-users-cog",
            title: "Quản Lý Hồ Sơ",
            desc: "Số hóa toàn bộ hồ sơ nhân sự, tra cứu nhanh chóng, bảo mật tuyệt đối."
        },
        {
            icon: "fas fa-fingerprint",
            title: "Chấm Công AI",
            desc: "Nhận diện khuôn mặt chính xác, tích hợp GPS, loại bỏ sai sót thủ công."
        },
        {
            icon: "fas fa-calculator",
            title: "Tính Lương Tự Động",
            desc: "Xử lý bảng lương phức tạp chỉ trong vài giây, tự động khấu trừ thuế và BHXH."
        },
        {
            icon: "fas fa-chart-line",
            title: "Báo Cáo & KPI",
            desc: "Hệ thống báo cáo trực quan, theo dõi hiệu suất làm việc thời gian thực."
        }
    ],
    about: {
        title: "Về DMP AI",
        content: "DMP AI mang đến giải pháp chuyển đổi số toàn diện cho doanh nghiệp Việt. Chúng tôi kết hợp sức mạnh của Trí tuệ nhân tạo (AI) vào quản trị nhân sự, giúp doanh nghiệp tiết kiệm chi phí, thời gian và tập trung vào phát triển con người.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    pricing: [
        {
            name: "Cơ Bản",
            price: "500.000đ",
            period: "/ tháng",
            features: ["Quản lý 50 nhân sự", "Chấm công cơ bản", "Tính lương tự động", "Hỗ trợ qua Email"]
        },
        {
            name: "Nâng Cao",
            price: "1.500.000đ",
            period: "/ tháng",
            features: ["Quản lý 200 nhân sự", "Chấm công AI FaceID", "Quản lý KPI", "Hỗ trợ 24/7", "App Mobile"]
        },
        {
            name: "Doanh Nghiệp",
            price: "Liên hệ",
            period: "",
            features: ["Không giới hạn nhân sự", "Tùy chỉnh tính năng", "API tích hợp ERP", "Triển khai On-premise"]
        }
    ]
};

function initStore() {
    return {
        config: {},
        isLoaded: false,
        init() {
            const stored = localStorage.getItem('siteConfig');
            if (stored) {
                this.config = JSON.parse(stored);
            } else {
                this.config = DEFAULT_CONFIG;
                localStorage.setItem('siteConfig', JSON.stringify(DEFAULT_CONFIG));
            }
            this.isLoaded = true;
        },
        save() {
            localStorage.setItem('siteConfig', JSON.stringify(this.config));
            alert('Đã lưu thay đổi thành công!');
        }
    }
}