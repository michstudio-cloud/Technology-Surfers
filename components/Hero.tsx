
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
                <div className="mb-6 inline-block">
                    <span className="glass px-4 py-2 rounded-full text-sm font-semibold" style={{ color: '#F16131' }}>
                       Technology Surfers — 90/10 Flow
                    </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                    Delega el <span className="gradient-text">90% Tecnología</span><br/>
                   10% Humano<br/>
                    <span className="text-gray-300">100% Haciendo lo que Amas</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto">
                    Surfea la ola tecnológica permitiendo que la Tecnología se haga cargo del 90% del negocio que te agota… para que puedas enfocarte en el 10% que realmente amas y así vivir al 100%. Esto es 90/10, una comunidad que encuentra su propósito y construye la libertad.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="gradient-bg px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition animate-glow">
                        Comienza Tu Prueba Gratuita
                    </button>
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
