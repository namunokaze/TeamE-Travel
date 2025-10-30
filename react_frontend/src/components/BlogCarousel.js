// src/components/BlogCarousel.js

import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/main.css';

// Dữ liệu tĩnh cho các bài Blog
const BLOG_DATA = [
    { key: 'blog_post_1', image: '/images/tra-tran-BQc-oQLkss4-unsplash.jpg' },
    { key: 'blog_post_2', image: '/images/nicholas-ng-klk0Cm4FdCg-unsplash.jpg' },
    { key: 'blog_post_3', image: '/images/andrei-r-popescu-OzjVydUZ1gY-unsplash.jpg' },
    { key: 'blog_post_4', image: '/images/ravi-sharma-Q-Hj5JyLxZ0-unsplash.jpg' },
    { key: 'blog_post_5', image: '/images/lucas-mendes-qC6m_-U-UCM-unsplash.jpg' },
    { key: 'blog_post_6', image: '/images/zongnan-bao-6ITSrEbSujY-unsplash.jpg' },
    { key: 'blog_post_7', image: '/images/andrea-ferrario-vmOQ1rJ9CVQ-unsplash.jpg' },
    { key: 'blog_post_8', image: '/images/alexander-psiuk-8Efdx9QY77Y-unsplash.jpg' },
];
// Nhân đôi dữ liệu để mô phỏng infinite scroll (cần 3 lần total cho hiệu ứng tốt nhất)
const INFINITE_BLOG_DATA = [...BLOG_DATA, ...BLOG_DATA, ...BLOG_DATA]; 
const SLIDE_WIDTH = 360; // Chiều rộng mỗi card + gap (Đảm bảo khớp với CSS)

function BlogCarousel() {
    const { t } = useTranslation();
    const blogTrackRef = useRef(null);

    // Sử dụng useEffect để thiết lập vị trí scroll ban đầu (giữa)
    useEffect(() => {
        if (blogTrackRef.current) {
            // Đặt scroll ban đầu vào nhóm BLOG_DATA thứ hai
            const initialScrollPosition = BLOG_DATA.length * SLIDE_WIDTH;
            blogTrackRef.current.scrollLeft = initialScrollPosition;
        }
    }, []);

    const handleScroll = (direction) => {
        const track = blogTrackRef.current;
        if (!track) return;

        // Tính toán vị trí scroll mới
        const scrollAmount = direction === 'left' ? -SLIDE_WIDTH : SLIDE_WIDTH;
        const newScrollLeft = track.scrollLeft + scrollAmount;

        // Cuộn mượt mà bằng JavaScript
        track.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth'
        });
        
        // Logic để "nhảy" về vị trí giữa (Infinite scroll simulation)
        setTimeout(() => {
            const numOriginal = BLOG_DATA.length;
            const totalWidth = numOriginal * SLIDE_WIDTH * 3;
            const scrollMax = totalWidth - track.clientWidth;
            
            // Giả định: nếu cuộn hết về đầu, nhảy sang nhóm giữa
            if (track.scrollLeft < SLIDE_WIDTH) {
                track.scrollLeft = numOriginal * SLIDE_WIDTH;
            } 
            // Giả định: nếu cuộn hết về cuối, nhảy về nhóm giữa
            else if (track.scrollLeft > (totalWidth - SLIDE_WIDTH * 2)) {
                track.scrollLeft = numOriginal * SLIDE_WIDTH;
            }
        }, 500); // Đợi transition kết thúc
    };

    return (
        <section className="travel-blog">
            <h2>{t('blog_title')}</h2>
            <p>{t('blog_desc')}</p>

            <div className="carousel-wrapper">
                <button className="carousel-btn left" onClick={() => handleScroll('left')}>&#10094;</button>
                
                {/* Sử dụng ref để thao tác scrollLeft, cần CSS overflow-x: scroll */}
                <div className="blog-posts" ref={blogTrackRef}> 
                    {INFINITE_BLOG_DATA.map((post, index) => (
                         <article
                            className="blog-post"
                            // Sử dụng style inline cho background image
                            style={{ backgroundImage: `url(${post.image})` }}
                            key={index} // Dùng index vì có duplicate items
                        >
                            <h3>{t(`${post.key}_title`)}</h3>
                            <p>{t(`${post.key}_desc`)}</p>
                            <a href="#">{t('read_more')} →</a>
                        </article>
                    ))}
                </div>
                
                <button className="carousel-btn right" onClick={() => handleScroll('right')}>&#10095;</button>
            </div>
        </section>
    );
}

export default BlogCarousel;