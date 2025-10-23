import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 glass transition-colors duration-300 ${scrolled ? 'bg-black/80' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Logo className="w-10 h-auto" />
                    <span className="text-xl font-bold">TECHNOLOGY SURFERS</span>
                </div>
                <div className="hidden md:flex space-x-8 text-sm">
                    <a href="#inicio" className="transition">Inicio</a>
                    <a href="#herramientas" className="transition">Herramientas</a>
                    <a href="#sistema" className="transition">Sistema</a>
                    <a href="#testimonios" className="transition">Testimonios</a>
                    <a href="#precios" className="transition">Precios</a>
                </div>
                <button className="gradient-bg px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
                    Comenzar Ahora
                </button>
            </div>
        </nav>
    );
};

export default Header;