// src/components/Destination.js

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/main.css';

// Dữ liệu tĩnh cho Traveler Favorites Slider
const DESTINATIONS_DATA = [
    { key: 'dest_rome', image: '/images/caleb-miller-0Bs3et8FYyg-unsplash.jpg' },
    { key: 'dest_shimane', image: '/images/sunny-young-Wo4tvcNL8JY-unsplash.jpg' },
    { key: 'dest_hoian', image: '/images/charge-the-globe-MeEopamZ8_s-unsplash.jpg' },
    { key: 'dest_phuket', image: '/images/humphrey-m-TejFa7VW5e4-unsplash.jpg' },
    { key: 'dest_kyoto', image: '/images/cosmin-georgian-gd3ysFyrsTQ-unsplash.jpg' },
    { key: 'dest_paris', image: '/images/chris-karidis-nnzkZNYWHaU-unsplash.jpg' },
    { key: 'dest_bali', image: '/images/alexa-west-OOTEpsO2eV0-unsplash.jpg' },
    // **LƯU Ý:** Nhân đôi dữ liệu để tạo hiệu ứng infinite scroll CSS animation
    ...[
        { key: 'dest_rome', image: '/images/caleb-miller-0Bs3et8FYyg-unsplash.jpg' },
        { key: 'dest_shimane', image: '/images/sunny-young-Wo4tvcNL8JY-unsplash.jpg' },
        { key: 'dest_hoian', image: '/images/charge-the-globe-MeEopamZ8_s-unsplash.jpg' },
    ]
];

// Dữ liệu tĩnh cho Feature Hover Section
const FEATURES_DATA = [
    { key: 'feature_adventure', descKey: 'feature_adventure_desc', imageKey: 'adventure', defaultImage: '/images/s-asah-xBQ_MhGmQVw-unsplash.jpg' },
    { key: 'feature_luxury', descKey: 'feature_luxury_desc', imageKey: 'luxury', defaultImage: '/images/hassan-nizam-Y3Hbh7wB8CI-unsplash.jpg' },
    { key: 'feature_culture', descKey: 'feature_culture_desc', imageKey: 'culture', defaultImage: '/images/bruce-tang-5mnDe1cmfpo-unsplash.jpg' },
    { key: 'feature_culinary', descKey: 'feature_culinary_desc', imageKey: 'culinary', defaultImage: '/images/woody-kelly-F6NRL1MH7Uw-unsplash.jpg' },
    { key: 'feature_wellness', descKey: 'feature_wellness_desc', imageKey: 'wellness', defaultImage: '/images/hailey-tong-424XaoTlfxs-unsplash.jpg' },
    { key: 'feature_volunteer', descKey: 'feature_volunteer_desc', imageKey: 'volunteer', defaultImage: '/images/ocg-saving-the-ocean-bWAArZ5M4Ag-unsplash.jpg' },
];

function Destination() {
    const { t } = useTranslation();
    
    // State cho Slider: true nếu hover vào track
    const [isSliderPaused, setIsSliderPaused] = useState(false);
    
    // State cho Feature Hover: lưu trữ key của mục đang hoạt động
    const [activeFeature, setActiveFeature] = useState(FEATURES_DATA[0].imageKey);

    const currentFeatureImage = FEATURES_DATA.find(f => f.imageKey === activeFeature);

    // Xử lý sự kiện Hover cho Slider
    const handleSliderHover = (isHovering) => {
        setIsSliderPaused(isHovering);
    };

    return (
        <React.Fragment>
            {/* ======================================================= */}
            {/* 1. TRAVELER FAVORITES (Destination Slider) - Logic từ Button.js */}
            {/* ======================================================= */}
            <section className="destinations">
                <h2>{t('traveler_favorites')}</h2>
                <p>{t('traveler_favorites_desc')}</p>

                <div className="slider-viewport destination-slider">
                    {/* Bổ sung nút bấm nếu muốn chức năng click trượt */}
                    <div 
                        className={`destination-track ${isSliderPaused ? 'paused' : ''}`}
                        onMouseEnter={() => handleSliderHover(true)}
                        onMouseLeave={() => handleSliderHover(false)}
                    >
                        {DESTINATIONS_DATA.map((dest, index) => (
                            <a href="#" className="destination-card-elegant" key={index}>
                                <img src={dest.image} alt={t(dest.key)} />
                                <h3>{t(dest.key)}</h3>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ======================================================= */}
            {/* 2. FEATURE HOVER SECTION (Explore Your Way) - Logic từ Suggest.js */}
            {/* ======================================================= */}
            <section className="hover-feature-section">
                <div className="container">
                    <div className="image-panel">
                        {/* Chỉ render hình ảnh đang active */}
                        <img
                            src={currentFeatureImage.defaultImage}
                            data-image={activeFeature}
                            className="feature-image active"
                            alt={t(`alt_${activeFeature}`)} // Giả định có key alt trong JSON
                        />
                    </div>

                    <div className="text-panel">
                        <h2>{t('explore_your_way')}</h2>
                        {FEATURES_DATA.map((feature) => (
                            <a 
                                href="#" 
                                className={`feature-link ${activeFeature === feature.imageKey ? 'active' : ''}`}
                                data-image={feature.imageKey}
                                key={feature.imageKey}
                                onMouseEnter={() => setActiveFeature(feature.imageKey)}
                                onClick={(e) => e.preventDefault()}
                            >
                                <h3>{t(feature.key)}</h3>
                                <p>{t(feature.descKey)}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Destination;