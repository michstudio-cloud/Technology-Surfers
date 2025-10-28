import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface HeaderProps {
    theme: string;
    setTheme: (theme: string) => void;
}

const Header: React.FC<HeaderProps> = ({ theme, setTheme }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <nav className={`fixed top-0 w-full z-50 glass transition-all duration-300 ${scrolled ? (theme === 'light' ? 'bg-white/80' : 'bg-black/80') : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Logo className="w-10 h-auto" />
                    <span className="text-xl font-bold">{/* TECHNOLOGY SURFERS */}</span>
                </div>
                <div className="hidden md:flex space-x-8 text-sm">
                    <a href="#inicio" className="transition">Inicio</a>
                    <a href="#proceso" className="transition">El Proceso</a>
                    <a href="#oferta" className="transition">Lo que Obtienes</a>
                    <a href="#testimonios" className="transition">Testimonios</a>
                    <a href="#equipo" className="transition">Equipo</a>
                    <a href="#precios" className="transition">Comenzar</a>
                </div>
                <div className="flex items-center">
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="p-2 rounded-full transition-colors hover:bg-white/20"
                    >
                        {theme === 'dark' ? (
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        ) : (
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        )}
                    </button>
                    <button className="gradient-bg px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition ml-4">
                        Comenzar Ahora
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Header;