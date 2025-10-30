// src/components/CallToAction.js

import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/main.css';

function CallToAction() {
    const { t } = useTranslation();

    return (
        <section className="cta-section">
            <div className="container">
                {/* Tiêu đề CTA */}
                <h2>{t('cta_title')}</h2>
                
                {/* Mô tả */}
                <p>
                    {t('cta_desc')}
                </p>
                
                {/* Nút bấm CTA */}
                <button className="cta-button">
                    {t('cta_button')}
                </button>
            </div>
        </section>
    );
}

export default CallToAction;