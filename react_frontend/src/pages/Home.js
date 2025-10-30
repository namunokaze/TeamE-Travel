// src/pages/Home.js (Finalized Version)

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Destination from '../components/Destination'; // Chứa Traveler Favorites & Feature Hover
import WhyChooseUs from '../components/WhyChooseUs'; 
import TestimonialsSlider from '../components/TestimonialsSlider';
import CallToAction from '../components/CallToAction';
import BlogCarousel from '../components/BlogCarousel';
import Partners from '../components/Partners';
import Footer from '../components/Footer';
import '../css/main.css'; 

function Home() {
    return (
        <div className="wrapper">
            <Navbar />
            
            <main>
                <Hero />
                {/* Destination.js chứa 2 phần: Favorites và Feature Hover */}
                <Destination /> 
                <WhyChooseUs />
                <TestimonialsSlider />
                <CallToAction />
                <BlogCarousel />
                <Partners />
            </main>
            
            <Footer />
        </div>
    );
}

export default Home;