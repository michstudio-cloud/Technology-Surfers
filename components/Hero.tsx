import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
                <div className="mb-6 inline-block">
                    <span className="glass px-4 py-2 rounded-full text-sm font-semibold" style={{ color: '#F16131' }}>
                        🚀 Únete a más de 1,000,000+ Technology Surfers
                    </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-shadow leading-tight">
                    Conviértete en<br/>
                    <span className="gradient-text">90% IA</span>,<br/>
                    <span className="text-gray-300">10% HUMANO</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
                    Construido para los rebeldes de la realidad. Surfea la ola tecnológica y deja que la IA se encargue del 90% que te agota.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <button className="gradient-bg px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition animate-glow">
                        Comienza Tu Prueba Gratuita
                    </button>
                    <button className="glass px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition">
                        Ver Demo en Vivo
                    </button>
                </div>
                
                <div className="relative mx-auto w-64 h-64 md:w-96 md:h-96 animate-float">
                    <div className="absolute inset-0 gradient-bg opacity-20 blur-3xl rounded-full"></div>
                    <div className="relative glass rounded-3xl h-full flex items-center justify-center">
                        <svg className="w-48 h-48" style={{ color: '#F16131' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: '#F16131' }}>
                    <div className="w-1 h-3 rounded-full mt-2" style={{ backgroundColor: '#F16131' }}></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;