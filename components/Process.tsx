
import React from 'react';

const Process: React.FC = () => {
    const steps = [
        "Aprovechar la IA como constructor de visión para definir la dirección y las metas de un negocio.",
        "Identificar puntos débiles en un negocio que la IA puede asumir.",
        "Instalar soluciones simples de IA en las brechas que has descubierto.",
        "Desplegar IA en marketing y procesos operacionales para comenzar a escalar.",
        "Aprovechar reportes continuos de IA y retroalimentación para mantenerse al día."
    ];

    return (
        <section id="proceso" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 section-reveal">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        La metodología 90/10: <span className="gradient-text">Surfeando la Ola Tecnológica de IA y Blockchain.</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        El éxito no es luchar contra la marea, es entender el océano y usar su energía. Te guiamos para que la IA se convierta en tu mejor tabla.
                    </p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* The Wooden Post */}
                        <div 
                            className="absolute left-1/2 top-0 h-full w-3 md:w-4 -translate-x-1/2 rounded-full"
                            style={{ background: 'linear-gradient(to right, #6b4f34, #8a6c4a, #6b4f34)' }}
                            aria-hidden="true"
                        ></div>

                        {/* The Signs */}
                        <div className="relative flex flex-col items-center gap-y-12 py-4">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`w-full flex section-reveal ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                                >
                                    <div className="w-11/12 md:w-5/12">
                                        <div
                                            className={`p-6 rounded-lg shadow-2xl hover-lift transform transition-transform duration-300
                                                ${index % 2 === 0 ? 'md:-rotate-3 hover:rotate-0' : 'md:rotate-3 hover:rotate-0'}`
                                            }
                                            style={{ 
                                                backgroundColor: '#a07d58', // A nice wood color
                                                border: '2px solid #6b4f34'
                                            }}
                                        >
                                            <h3 className="text-xl font-bold text-yellow-100 mb-2 text-shadow">
                                                PASO {index + 1}
                                            </h3>
                                            <p className="text-white text-shadow">
                                                {step}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-20 text-center section-reveal">
                    <a href="#precios" className="gradient-bg px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition inline-block">
                        Comienza a Automatizar Ahora
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Process;
