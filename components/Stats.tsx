
import React from 'react';

const Stats: React.FC = () => {
    return (
        <section className="py-32 px-6" style={{ background: 'linear-gradient(to bottom, rgba(241, 97, 49, 0.1), #000000)' }}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 section-reveal">
                     <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Resultados Comprobados con IA: <span className="gradient-text">Números Que Hacen Olas</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Estos no son solo nuestros números. Somos parte de una comunidad de élite que valida y respalda cada uno de estos logros.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="section-reveal">
                        <h3 className="text-5xl md:text-6xl font-bold gradient-text mb-4">2.5M+</h3>
                        <p className="text-xl text-gray-400">Prospectos en Línea Atraídos</p>
                    </div>
                    <div className="section-reveal" style={{ transitionDelay: '0.2s' }}>
                        <h3 className="text-5xl md:text-6xl font-bold gradient-text mb-4">$25M+</h3>
                        <p className="text-xl text-gray-400">Generados en Ventas</p>
                    </div>
                    <div className="section-reveal" style={{ transitionDelay: '0.4s' }}>
                        <h3 className="text-5xl md:text-6xl font-bold gradient-text mb-4">8,000+</h3>
                        <p className="text-xl text-gray-400">Negocios Servidos</p>
                    </div>
                </div>
                <div className="mt-20 text-center section-reveal">
                    <a href="#precios" className="gradient-bg px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition inline-block animate-glow">
                        Únete al Flujo Ahora
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Stats;