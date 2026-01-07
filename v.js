document.addEventListener('alpine:init', () => {
    Alpine.store('site', {
        data: {
            general: {
                brandName: 'DMP Dev AI. HR',
                logoUrl: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png',
                adminPassword: 'Phu@1976'
            },
            hero: {
                title: 'Giải Pháp Quản Trị Nhân Sự 4.0 Tích Hợp AI',
                subtitle: 'Tối ưu hóa quy trình tuyển dụng, chấm công và tính lương với công nghệ Trí Tuệ Nhân Tạo tiên tiến nhất từ DMP AI Dev.',
                ctaText: 'Tư Vấn Ngay',
                ctaLink: 'https://zalo.me/0766771509'
            },
            features: [
                { title: 'Chấm Công FaceID AI', desc: 'Nhận diện khuôn mặt chính xác 99.9%, chống gian lận tuyệt đối.', icon: 'fas fa-user-check' },
                { title: 'Tuyển Dụng Tự Động', desc: 'Sàng lọc hàng nghìn CV trong vài giây, gợi ý ứng viên phù hợp nhất.', icon: 'fas fa-search-dollar' },
                { title: 'Phân Tích Hiệu Suất', desc: 'Báo cáo KPI thời gian thực, dự báo xu hướng nhân sự bằng Big Data.', icon: 'fas fa-chart-line' },
                { title: 'Tính Lương 1 Chạm', desc: 'Tự động hóa bảng lương, bảo hiểm và thuế theo luật định mới nhất.', icon: 'fas fa-calculator' }
            ],
            contact: {
                phone: '0766771509',
                email: 'dmpaidev@gmail.com',
                address: 'Toà nhà 2A Nguyễn Thị Minh Khai, Tp HCM, VN',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=2A+Nguyễn+Thị+Minh+Khai,+Tp+HCM'
            },
            social: {
                facebook: 'https://www.facebook.com/profile.php?id=61585771779201',
                youtube: 'https://youtube.com/@DMPAIDev',
                tiktok: 'https://www.tiktok.com/@dpmaidev',
                zalo: 'https://zalo.me/0766771509'
            }
        },
        init() {
            const localConfig = localStorage.getItem('siteConfig');
            if (localConfig) {
                this.data = JSON.parse(localConfig);
            } else {
                localStorage.setItem('siteConfig', JSON.stringify(this.data));
            }
        },
        save() {
            localStorage.setItem('siteConfig', JSON.stringify(this.data));
            alert('Đã lưu cấu hình thành công!');
            window.location.reload();
        },
        updatePassword(newPass) {
            this.data.general.adminPassword = newPass;
            this.save();
        }
    });
});