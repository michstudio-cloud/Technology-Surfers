
import React, { useEffect, useState } from 'react';
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
import Process from './components/Process';
import HowItWorks from './components/HowItWorks';
import Opportunities from './components/Opportunities';
import Team from './components/Team';
import Community from './components/Community';

const App: React.FC = () => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'dark';
        }
        return 'dark';
    });

    useEffect(() => {
        if (theme === 'light') {
            document.documentElement.classList.add('light');
        } else {
            document.documentElement.classList.remove('light');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

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
            <Header theme={theme} setTheme={setTheme} />
            <main>
                <Hero />
                <Stats />
                <Features />
                <Process />
                <WhatYouGet />
                <HowItWorks />
                <Opportunities />
                <Advantages />
                <Testimonials />
                <Team />
                <Community />
                <FAQ />
                <CTA />
            </main>
            <Footer />
        </>
    );
};

export default App;