// src/components/TestimonialsSlider.js

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/main.css';

// Dữ liệu tĩnh cho tất cả 9 đánh giá (Đã sửa lỗi key sang chỉ số)
const TESTIMONIALS_DATA = [
    // index phải khớp với số ở cuối các key i18n của bạn (testimonial_quote_1, testimonial_author_1, ...)
    { index: 1, img: '/images/jake-nackos-IF9TK5Uy-KI-unsplash-min.jpg', altKey: 'alt_sarah_johnson', trustpilot: '/images/trustpilot-seeklogo.png' },
    { index: 2, img: '/images/samuli-jokinen-bvkwfDaGVK4-unsplash-min.jpg', altKey: 'alt_kenji_tanaka', trustpilot: '/images/trustpilot-stars-seeklogo.png' },
    { index: 3, img: '/images/sydney-moore-QaD2Pc2_YWI-unsplash.jpg', altKey: 'alt_Emma_Johnson', trustpilot: '/images/trustpilot-stars-seeklogo.png' },
    { index: 4, img: '/images/evan-wise-S12HmqBjd-8-unsplash.jpg', altKey: 'alt_Chloe_Dubois', trustpilot: '/images/trustpilot-seeklogo.png' },
    { index: 5, img: '/images/ethan-rougon-N82q3z8Dkbs-unsplash-min.jpg', altKey: 'alt_Mateo_Garcia', trustpilot: '/images/trustpilot-seeklogo.png' },
    { index: 6, img: '/images/traian-titilincu-DM8THGJtMHc-unsplash.jpg', altKey: 'alt_Lucas_Novak', trustpilot: '/images/trustpilot-seeklogo.png' },
    { index: 7, img: '/images/olivia-bauso-8qnHYPEKtU0-unsplash-min.jpg', altKey: 'alt_Charlotte_Lefevre', trustpilot: '/images/trustpilot-seeklogo.png' },
    { index: 8, img: '/images/ali-kazal-YsrWdRIt5cs-unsplash-min.jpg', altKey: 'alt_Nina_Eriksson', trustpilot: '/images/trustpilot-seeklogo.png' },
    { index: 9, img: '/images/joelvalve-qYTh0hg-kc8-unsplash.jpg', altKey: 'alt_Grace_Taylor', trustpilot: '/images/trustpilot-seeklogo.png' },
];
const TOTAL_TESTIMONIALS = TESTIMONIALS_DATA.length;

function TestimonialsSlider() {
    const { t } = useTranslation();
    
    // State quản lý chỉ mục slide hiện tại
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        // Chuyển đến slide tiếp theo, quay về 0 nếu ở cuối
        setCurrentIndex(prevIndex => (prevIndex + 1) % TOTAL_TESTIMONIALS);
    };

    const handlePrev = () => {
        // Chuyển đến slide trước, quay về slide cuối nếu ở slide 0
        setCurrentIndex(prevIndex => 
            (prevIndex - 1 + TOTAL_TESTIMONIALS) % TOTAL_TESTIMONIALS
        );
    };

    // Style để áp dụng transform cho track (Đã được đơn giản hóa)
    const trackStyle = {
        // Trượt ngang bằng số lượng card nhân với 100% (chiều rộng mỗi card)
        transform: `translateX(-${currentIndex * 100}%)`,
        transition: 'transform 0.5s ease-in-out',
        // BỔ SUNG QUAN TRỌNG: Thiết lập chiều rộng tổng để chứa tất cả các card
        width: `${TOTAL_TESTIMONIALS * 100}%`
    };
    
    return (
        <section className="testimonials">
            <div className="section-header">
                <h2>{t('testimonials_title')}</h2>
            </div>

            <div className="slider-viewport" id="testimonials-slider">
                <button className="scroll-btn prev" onClick={handlePrev}>‹</button>
                
                {/* LƯU Ý: Đã thêm style cho width và transform */}
                <div className="slider-track" style={trackStyle}>
                    {TESTIMONIALS_DATA.map(data => (
                        <div className="testimonial-card" key={data.index}>
                            {/* Ảnh Avatar */}
                            <img
                                src={data.img}
                                alt={t(data.altKey)}
                                className="testimonial-avatar"
                            />
                            {/* Quote (Đã FIX LỖI KEY) */}
                            <p className="testimonial-quote">
                                "{t(`testimonial_quote_${data.index}`)}" 
                            </p>
                            
                            {/* Logo Trustpilot */}
                            <img
                                src={data.trustpilot}
                                alt="Trustpilot logo"
                                className="trustpilot-logo"
                            />
                            
                            {/* Tác giả, chuyến đi, ngày đăng (Đã FIX LỖI KEY) */}
                            <p className="testimonial-author">
                                {t(`testimonial_author_${data.index}`)}
                            </p>
                            <p className="testimonial-trip">
                                {t(`testimonial_trip_${data.index}`)}
                            </p>
                            <p className="testimonial-date">
                                {t(`testimonial_date_${data.index}`)}
                            </p>
                        </div>
                    ))}
                </div>

                <button className="scroll-btn next" onClick={handleNext}>›</button>
            </div>
        </section>
    );
}

export default TestimonialsSlider;