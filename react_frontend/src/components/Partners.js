// src/components/Partners.js

import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/main.css';

// Dữ liệu tĩnh cho các logo đối tác
const PARTNERS_DATA = [
    { name: 'Trustpilot', logo: '/images/trustpilot-seeklogo1.png' },
    { name: 'Booking.com', logo: '/images/booking-com-seeklogo.png' },
    { name: 'Tripadvisor', logo: '/images/tripadvisor-seeklogo.png' },
    { name: 'Expedia', logo: '/images/expedia-seeklogo.png' },
    { name: 'Klook', logo: '/images/klook-seeklogo.png' },
    { name: 'Skyscanner', logo: '/images/skyscanner-seeklogo.png' },
    { name: 'Google', logo: '/images/google-2015-new-seeklogo.png' },
    { name: 'Airbnb', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg' },
];
// Đảm bảo tất cả các hình ảnh logo (trừ Airbnb) nằm trong thư mục public/images.

function Partners() {
    const { t } = useTranslation();

    return (
        <section className="partners-section">
            <div className="container">
                {/* Tiêu đề được dịch */}
                <p>{t('partners_trusted')}</p>
                
                <div className="partners-logos">
                    {/* Render danh sách logo đối tác bằng map */}
                    {PARTNERS_DATA.map((partner) => (
                        <img
                            src={partner.logo}
                            alt={t(`alt_${partner.name.toLowerCase()}_logo`)} // Giả định key i18n alt
                            className="partner-logo"
                            key={partner.name}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Partners;