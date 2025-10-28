
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
                <div className="mb-6 inline-block">
                    <span className="glass px-4 py-2 rounded-full text-sm font-semibold" style={{ color: '#F16131' }}>
                        La ola de Technology Surfers: El flujo 90/10
                    </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-shadow leading-tight">
                    Delega el <span className="gradient-text">90% a la IA</span><br/>
                    Usa el 10% en tu<br/>
                    <span className="text-gray-300">POTENCIAL CREATIVO</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto">
                    Surfea la ola de la IA permitiendo que la IA se haga cargo del 90% del negocio que te agota... para que puedas enfocarte 100% en lo que amas.<br/>
                    Esto es 90/10... Un método, una comunidad y nuestro camino hacia la libertad.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="gradient-bg px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition animate-glow">
                        Comienza Tu Prueba Gratuita
                    </button>
                    <button className="glass px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition">
                        Ver Demo en Vivo
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
