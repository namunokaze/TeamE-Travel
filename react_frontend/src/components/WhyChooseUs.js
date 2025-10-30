// src/components/WhyChooseUs.js

import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/main.css';

// Dữ liệu tĩnh cho 3 thẻ lý do
const REASONS_DATA = [
    { 
        titleKey: 'reason_tailor_made', 
        descKey: 'reason_tailor_made_desc', 
        icon: '/images/SitReadingDoodle.png', 
        altKey: 'alt_tailor_made' 
    },
    { 
        titleKey: 'reason_authentic', 
        descKey: 'reason_authentic_desc', 
        icon: '/images/RollerSkatingDoodle.png', 
        altKey: 'alt_authentic' 
    },
    { 
        titleKey: 'reason_support', 
        descKey: 'reason_support_desc', 
        icon: '/images/LovingDoodle.png', 
        altKey: 'alt_support' 
    },
];
// Đảm bảo tất cả các hình ảnh (.png) này nằm trong thư mục public/images.

function WhyChooseUs() {
    const { t } = useTranslation();

    return (
        <section className="why-choose-us">
            {/* Tiêu đề chính */}
            <h2>{t('why_book_with_us')}</h2>
            
            <div className="reasons">
                {/* Render 3 thẻ lý do bằng cách lặp lại dữ liệu (map) */}
                {REASONS_DATA.map((reason) => (
                    <div className="reason-card" key={reason.titleKey}>
                        <img
                            src={reason.icon}
                            alt={t(reason.altKey)} 
                            className="reason-icon"
                        />
                        <h3>{t(reason.titleKey)}</h3>
                        <p>
                            {t(reason.descKey)}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WhyChooseUs;