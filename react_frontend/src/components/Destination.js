import React, { useEffect, useRef } from 'react';
import '../styles/main.css';
import '../scripts/Button.js'; // tạm thời dùng script cũ

function Destination() {
  const destinationTrackRef = useRef(null);

  useEffect(() => {
    const destinationTrack = destinationTrackRef.current;
    // Logic hover pause/resume animation từ Button.js có thể dùng ở đây
  }, []);

  return (
    <section className="destinations">
      <h2 data-i18n="destinations_title">Destinations</h2>
      <p data-i18n="destinations_subtitle">Explore our top destinations</p>
      
      <div className="destination-grid-elegant">
        <div className="destination-track" ref={destinationTrackRef}>
          {/* Thêm các destination-card-elegant ở đây */}
          <a href="#" className="destination-card-elegant">
            <img src="/images/destination1.jpg" alt="Destination 1" />
            <h3>Paris</h3>
          </a>
          <a href="#" className="destination-card-elegant">
            <img src="/images/destination2.jpg" alt="Destination 2" />
            <h3>Tokyo</h3>
          </a>
          {/* Add thêm card khác theo mẫu */}
        </div>
      </div>
    </section>
  );
}

export default Destination;