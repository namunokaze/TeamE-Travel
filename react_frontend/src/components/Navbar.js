// src/components/Navbar.js - Đã sửa lỗi cú pháp và loại bỏ nút Home

import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/main.css';

// Dữ liệu tĩnh cho các liên kết điều hướng và ngôn ngữ
const DESTINATION_LINKS = [
    { key: 'dest_africa', path: '/destinations/africa' },
    { key: 'dest_europe', path: '/destinations/europe' },
    { key: 'dest_thailand', path: '/destinations/asia' },
];
const TOUR_LINKS = [
    { key: 'tours_group', path: '/tours/group' },
    { key: 'tours_private', path: '/tours/private' },
];
const LANGUAGES = [
    { code: 'en', labelKey: 'lang_english', flag: 'https://flagcdn.com/w20/gb.png' },
    { code: 'vn', labelKey: 'lang_vietnamese', flag: 'https://flagcdn.com/w20/vn.png' },
    { code: 'jp', labelKey: 'lang_japanese', flag: 'https://flagcdn.com/w20/jp.png' },
];
const AVATAR_ICON = '/images/man_4179639.png'; 

function Navbar() {
  const { t, i18n } = useTranslation();

  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const langSwitcherRef = useRef(null); 
  const [activeNavDropdown, setActiveNavDropdown] = useState(null); 
  
  // Logic Tự Động Đóng Dropdown Ngôn ngữ khi click ra ngoài
  useEffect(() => {
    function handleClickOutside(event) {
      if (langSwitcherRef.current && !langSwitcherRef.current.contains(event.target)) {
        setIsLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const currentLang = LANGUAGES.find(lang => lang.code === i18n.language) || LANGUAGES.find(lang => lang.code === 'en');

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsLangDropdownOpen(false); 
  };
  
  const handleNavToggle = (dropdownName) => {
    setActiveNavDropdown(activeNavDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <header>
      <nav>
        {/* LOGO/TÊN THƯƠNG HIỆU: Vị trí sát trái */}
        <div className="logo site-logo">
            <a href="/">
                {/* FIX KÍCH THƯỚC/FONT: Sử dụng class logo-text đã được định nghĩa CSS */}
                <span className="logo-text">{t('page_title')}</span>
            </a>
        </div>
        
        {/* Nav Links: Bỏ nút Home, chỉ còn các mục điều hướng khác */}
        <ul className="nav-links">
          {/* LOẠI BỎ: Nút Home */}
          
          {/* Dropdown: Destinations */}
          <li 
            className={`dropdown ${activeNavDropdown === 'destinations' ? 'active' : ''}`}
            onMouseEnter={() => setActiveNavDropdown('destinations')}
            onMouseLeave={() => setActiveNavDropdown(null)}
          >
            <a href="#" onClick={(e) => { e.preventDefault(); handleNavToggle('destinations'); }}>
                {t('nav_destinations')}
            </a>
            <ul className="dropdown-menu">
                {DESTINATION_LINKS.map(item => (
                    <li key={item.key}><a href={item.path}>{t(item.key)}</a></li>
                ))}
            </ul>
          </li>
          
          {/* Dropdown: Tours */}
          <li 
            className={`dropdown ${activeNavDropdown === 'tours' ? 'active' : ''}`}
            onMouseEnter={() => setActiveNavDropdown('tours')}
            onMouseLeave={() => setActiveNavDropdown(null)}
          >
            <a href="#" onClick={(e) => { e.preventDefault(); handleNavToggle('tours'); }}>
                {t('nav_tours')}
            </a>
            <ul className="dropdown-menu">
                {TOUR_LINKS.map(item => (
                    <li key={item.key}><a href={item.path}>{t(item.key)}</a></li>
                ))}
            </ul>
          </li>
          
          {/* Các Link Tĩnh Khác */}
          <li><a href="#">{t('nav_about')}</a></li>
          <li><a href="#">{t('nav_contact')}</a></li>
        </ul>

        {/* User Actions: Vị trí sát phải (giữ nguyên) */}
        <div className="user-actions">
          {/* User profile / Login */}
          <div className="user-profile">
            <a href="#">
              <img className="profile-avatar" src={AVATAR_ICON} alt={t('user_login')} />
              <span className="profile-name">{t('user_login')}</span>
            </a>
          </div>

          {/* LANGUAGE SWITCHER */}
          <div className="language-switcher" ref={langSwitcherRef}>
            <button 
                className={`current-lang ${isLangDropdownOpen ? 'open' : ''}`}
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
            >
                <img src={currentLang.flag} alt={`${currentLang.code} flag`} className="language-icon" id="current-lang-icon" />
                <span id="current-lang-text">{t(currentLang.labelKey)}</span> 
                <span>▼</span>
            </button>
            
            {isLangDropdownOpen && ( 
                <ul className="language-dropdown">
                    {LANGUAGES.map((lang) => (
                        <li key={lang.code}>
                            <button 
                                className={`lang-btn ${i18n.language === lang.code ? 'active' : ''}`}
                                onClick={() => changeLanguage(lang.code)}
                            >
                                <img src={lang.flag} alt={`${lang.code} flag`} />
                                <span>{t(lang.labelKey)}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;