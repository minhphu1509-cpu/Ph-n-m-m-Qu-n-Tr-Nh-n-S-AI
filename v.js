document.addEventListener('alpine:init', () => {
    Alpine.store('site', {
        config: {},
        isLoaded: false,
        init() {
            const stored = localStorage.getItem('siteConfig');
            if (stored) {
                this.config = JSON.parse(stored);
            } else {
                this.config = this.getDefaultConfig();
                localStorage.setItem('siteConfig', JSON.stringify(this.config));
            }
            this.isLoaded = true;
        },
        save() {
            localStorage.setItem('siteConfig', JSON.stringify(this.config));
            alert('Đã lưu thay đổi thành công!');
        },
        updatePassword(newPass) {
            this.config.admin.password = newPass;
            this.save();
        },
        getDefaultConfig() {
            return {
                admin: {
                    password: 'Phu@1976'
                },
                general: {
                    siteName: 'DMP AI',
                    logoText: 'DMP AI',
                    logoUrl: 'https://placehold.co/150x50/1890ff/ffffff?text=DMP+AI',
                    contact: {
                        phone: '+84 766 771 509',
                        email: 'dmpaidev@gmail.com',
                        address: 'Toà nhà 2A Nguyễn Thị Minh Khai, Tp HCM',
                        zalo: 'https://zalo.me/0766771509',
                        facebook: 'https://www.facebook.com/profile.php?id=61585771779201',
                        youtube: 'https://youtube.com/@DMPAIDev',
                        tiktok: 'https://www.tiktok.com/@dpmaidev'
                    }
                },
                hero: {
                    headline: 'Giải Pháp Quản Trị Nhân Sự Tổng Thể 4.0',
                    subheadline: 'Tự động hóa chấm công, tính lương và quản lý nhân sự với công nghệ AI tiên tiến. Tối ưu vận hành, đột phá hiệu suất cho doanh nghiệp.',
                    ctaText: 'Dùng thử miễn phí',
                    ctaLink: '#contact',
                    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
                },
                stats: [
                    { number: '1000+', label: 'Doanh nghiệp tin dùng' },
                    { number: '40%', label: 'Tiết kiệm thời gian' },
                    { number: '99.9%', label: 'Độ chính xác lương' },
                    { number: '24/7', label: 'Hỗ trợ kỹ thuật' }
                ],
                features: [
                    { title: 'Quản lý Hồ sơ', desc: 'Lưu trữ hồ sơ nhân sự tập trung, bảo mật và dễ dàng tra cứu.', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
                    { title: 'Chấm công AI', desc: 'Nhận diện khuôn mặt FaceID, GPS chính xác, loại bỏ chấm công hộ.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                    { title: 'Tính lương Tự động', desc: 'Tự động tổng hợp công, phép, thưởng phạt để tính lương trong vài giây.', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                    { title: 'Đánh giá KPI', desc: 'Thiết lập và theo dõi KPI minh bạch, thúc đẩy hiệu suất nhân viên.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z' }
                ],
                pricing: [
                    { name: 'Standard', price: '499.000đ', period: '/tháng', features: ['Tối đa 20 nhân sự', 'Chấm công GPS', 'Tính lương cơ bản'], recommended: false },
                    { name: 'Professional', price: '999.000đ', period: '/tháng', features: ['Tối đa 50 nhân sự', 'Chấm công FaceID', 'Quản lý KPI', 'Báo cáo nâng cao'], recommended: true },
                    { name: 'Enterprise', price: 'Liên hệ', period: '', features: ['Không giới hạn nhân sự', 'API tích hợp ERP', 'Triển khai On-Premise', 'Hỗ trợ 1:1'], recommended: false }
                ],
                testimonials: [
                    { name: 'Nguyễn Văn A', role: 'CEO TechGroup', content: 'DMP AI giúp chúng tôi giảm 50% thời gian xử lý bảng lương hàng tháng.', avatar: 'https://i.pravatar.cc/150?u=1' },
                    { name: 'Trần Thị B', role: 'HR Manager GlobalCorp', content: 'Giao diện Ant Design rất thân thiện, dễ sử dụng cho cả nhân viên không rành công nghệ.', avatar: 'https://i.pravatar.cc/150?u=2' },
                    { name: 'Lê Hoàng C', role: 'Founder StartupX', content: 'Tính năng chấm công AI cực kỳ chính xác, giải quyết triệt để vấn đề đi muộn về sớm.', avatar: 'https://i.pravatar.cc/150?u=3' }
                ]
            };
        }
    });
});