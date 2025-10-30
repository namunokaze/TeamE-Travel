// src/components/Hero.js

import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/main.css';

// KHUYẾN NGHỊ: Nếu video quá lớn, hãy đặt tệp này vào thư mục public/images.
// Đường dẫn: /images/Timeline 1.mp4 sẽ truy cập tệp từ thư mục public.

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      {/* Thêm playsInline cho tính tương thích di động */}
      <video className="hero-video" autoPlay muted loop playsInline>
        <source 
          // Giữ nguyên đường dẫn, giả định tệp nằm ở public/images/
          src="/images/Timeline 1.mp4" 
          type="video/mp4" 
        />
        {/* Văn bản dự phòng (được dịch) */}
        {t('video_unsupported_text')} 
      </video>
      
      <div className="hero-content">
        {/* Tích hợp i18n */}
        <h1>{t('hero_title')}</h1>
        <p>{t('hero_subtitle')}</p>

        <form className="hero-search-form">
          {/* Tích hợp i18n cho placeholder */}
          <input 
            type="text" 
            placeholder={t('search_placeholder')} 
          />
          {/* Tích hợp i18n cho nút */}
          <button type="submit">{t('search_button')}</button>
        </form>
      </div>
    </section>
  );
}

export default Hero;