
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import WhatYouGet from './components/WhatYouGet';
import Advantages from './components/Advantages';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        const elements = document.querySelectorAll('.section-reveal');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Header />
            <main>
                <Hero />
                <Features />
                <WhatYouGet />
                <Advantages />
                <Testimonials />
                <Stats />
                <FAQ />
                <CTA />
            </main>
            <Footer />
        </>
    );
};

export default App;
