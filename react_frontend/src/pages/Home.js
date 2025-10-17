import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Destination from '../components/Destination';
import '../styles/main.css';

// Nếu bạn muốn load script language.js
import '../scripts/Language.js';

function Home() {
  useEffect(() => {
    // Bất cứ script nào cần DOM loaded có thể để ở đây nếu cần
  }, []);

  return (
    <div>
      <Navbar />
      {/* Hero, Destinations, Features… sẽ thêm sau */}
    </div>
  );
}

export default Home;