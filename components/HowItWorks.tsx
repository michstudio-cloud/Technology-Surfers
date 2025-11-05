

import React from 'react';

const HowItWorks: React.FC = () => {
    return (
        <section id="sistema" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 section-reveal">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Cómo Funciona Nuestro Sistema: <br /> El <span className="gradient-text">Flujo Magnético de Clientes</span>
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center section-reveal">
                        <div className="w-24 h-24 gradient-bg rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 border-4 border-black animate-float">1</div>
                        <h3 className="text-2xl font-bold mb-4">PASO 1: GENERACIÓN DE PROSPECTOS CON IA + BLOCKCHAIN</h3>
                        <p className="text-gray-400">Una vez que el sistema arranca, los prospectos comienzan a fluir automáticamente a tus DMs. Aprende a configurarlo con anuncios pagados y tráfico orgánico usando IA + Blockchain.</p>
                    </div>
                    <div className="text-center section-reveal" style={{ transitionDelay: '0.2s' }}>
                        <div className="w-24 h-24 gradient-bg rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 border-4 border-black animate-float" style={{animationDelay: '2s'}}>2</div>
                        <h3 className="text-2xl font-bold mb-4">PASO 2: NUTRICIÓN Y SEGUIMIENTO AUTOMATIZADO</h3>
                        <p className="text-gray-400">Cuando un prospecto solicita la oferta, el sistema responde y hace seguimiento automáticamente para que tomen acción.</p>
                    </div>
                    <div className="text-center section-reveal" style={{ transitionDelay: '0.4s' }}>
                        <div className="w-24 h-24 gradient-bg rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 border-4 border-black animate-float" style={{animationDelay: '4s'}}>3</div>
                        <h3 className="text-2xl font-bold mb-4">PASO 3: CONVERSIÓN Y CIERRE DE VENTAS</h3>
                        <p className="text-gray-400">El proceso automatizado crea un flujo constante de prospectos agendando llamadas o comprando un producto sin intervención manual.</p>
                    </div>
                </div>
                 <div className="text-center glass p-10 rounded-3xl mt-24 section-reveal">
                    <h3 className="text-2xl font-bold mb-4 gradient-text">El Resultado: Un Flujo Constante de Clientes</h3>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                        Un Modelo Probado y Consistente de Conversión de Prospectos Aprovechando IA + Blockchain. Nunca te preocupes de dónde vendrán los próximos prospectos y experimenta un aumento de ganancias con menos esfuerzo.
                    </p>
                    <div className="mt-8">
                        <a href="#precios" className="gradient-bg px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition inline-block">
                            Obtén Tu Flujo de Clientes
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;