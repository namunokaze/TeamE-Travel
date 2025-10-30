// src/components/Footer.js

import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/main.css';

// Dữ liệu tĩnh cho các icon mạng xã hội
const SOCIAL_LINKS = [
    { name: 'Facebook', icon: '/images/facebook.png', url: '#' },
    { name: 'Instagram', icon: '/images/instagram.png', url: '#' },
    { name: 'Twitter', icon: '/images/twitter.png', url: '#' },
    { name: 'Telegram', icon: '/images/telegram.png', url: '#' },
];
// Đảm bảo tất cả các icon này nằm trong thư mục public/images.

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="site-footer">
            <div className="footer-container">
                {/* Cột 1: About Us */}
                <div className="footer-column">
                    <h3>{t('footer_about_title')}</h3>
                    <p>
                        {t('footer_about_desc')}
                    </p>
                </div>

                {/* Cột 2: Contact */}
                <div className="footer-column">
                    <h3>{t('footer_contact_title')}</h3>
                    <p>Email: shimadetravel@gmail.com</p>
                    <p>Phone: +81 090 7507 7030</p>
                    <p>{t('footer_address')}</p>
                </div>

                {/* Cột 3: Follow Us */}
                <div className="footer-column">
                    <h3>{t('footer_follow_us')}</h3>
                    <div className="social-links">
                        {SOCIAL_LINKS.map((link) => (
                            <a 
                                href={link.url} 
                                target="_blank" 
                                aria-label={link.name}
                                rel="noopener noreferrer"
                                key={link.name}
                            >
                                {/* Sử dụng đường dẫn tuyệt đối cho icon */}
                                <img src={link.icon} alt={link.name} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 ShimadeTravel. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;