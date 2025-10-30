// src/index.js (Đã sửa lỗi và bổ sung i18n)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// BỔ SUNG: Import cấu hình i18n của bạn
import './i18n/config';

// XÓA LỖI: Đã loại bỏ import reportWebVitals

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// XÓA LỖI: Đã loại bỏ reportWebVitals()