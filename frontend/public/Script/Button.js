// ===== Destination Track (Auto chạy, Hover dừng) =====
const destinationTrack = document.querySelector('.destination-track');

if (destinationTrack) {
  destinationTrack.addEventListener('mouseover', (e) => {
    if (e.target.closest('.destination-card-elegant')) {
      destinationTrack.style.animationPlayState = 'paused';
    }
  });

  destinationTrack.addEventListener('mouseout', (e) => {
    if (!e.relatedTarget || !destinationTrack.contains(e.relatedTarget)) {
      destinationTrack.style.animationPlayState = 'running';
    }
  });
}

// ===== Testimonials Slider (Click chuyển slide) =====
const testimonialsTrack = document.getElementById('testimonials-track');
const testimonialsCards = testimonialsTrack?.children;
const totalTestimonials = testimonialsCards?.length || 0;
let currentTestimonialIndex = 0;

const nextBtn = document.querySelector('.scroll-btn.next');
const prevBtn = document.querySelector('.scroll-btn.prev');

if (nextBtn && prevBtn && testimonialsTrack) {
  nextBtn.addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % totalTestimonials;
    testimonialsTrack.style.transform = `translateX(-${currentTestimonialIndex * 100}%)`;
  });

  prevBtn.addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + totalTestimonials) % totalTestimonials;
    testimonialsTrack.style.transform = `translateX(-${currentTestimonialIndex * 100}%)`;
  });
}

// ===== Blog Carousel (Click lướt trái phải) =====
const blogTrack = document.querySelector('.blog-posts');
const blogBtnLeft = document.querySelector('.carousel-btn.left');
const blogBtnRight = document.querySelector('.carousel-btn.right');

if (blogTrack && blogBtnLeft && blogBtnRight) {
  const slideWidth = 360; // width mỗi card + gap, chỉnh cho đúng

  // Clone các bài blog để tạo infinite scroll (ít nhất 2 lần)
  const blogCards = Array.from(blogTrack.children);
  blogCards.forEach(card => {
    const clone = card.cloneNode(true);
    blogTrack.appendChild(clone);
  });

  let position = 0;
  const totalWidth = blogTrack.scrollWidth;
  const halfWidth = totalWidth / 2;

  // Hàm cập nhật vị trí, reset khi vượt giới hạn (infinite)
  function updatePosition(newPos) {
    if (newPos < -halfWidth) {
      // Nếu dịch quá hết nửa bên phải, reset về đầu
      position = newPos + halfWidth;
    } else if (newPos > 0) {
      // Nếu dịch sang phải vượt quá đầu, reset về giữa
      position = newPos - halfWidth;
    } else {
      position = newPos;
    }
    blogTrack.style.transform = `translateX(${position}px)`;
  }

  blogBtnLeft.addEventListener('click', () => {
    updatePosition(position + slideWidth);
  });

  blogBtnRight.addEventListener('click', () => {
    updatePosition(position - slideWidth);
  });
}

