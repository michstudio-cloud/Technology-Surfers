
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
                        El Proceso 90/10: <span className="gradient-text">Surfeando la Ola</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        El éxito no es luchar contra la marea, es entender el océano y usar su energía. Te guiamos para que la IA se convierta en tu mejor tabla.
                    </p>
                </div>
                
                <div className="max-w-3xl mx-auto">
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/10 rounded-full"></div>
                        {steps.map((step, index) => (
                            <div key={index} className="relative mb-12 flex items-center section-reveal">
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                                    <p className="text-lg text-gray-300">{step}</p>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 gradient-bg rounded-full flex items-center justify-center font-bold text-black z-10">
                                    {index + 1}
                                </div>
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12 text-left' : 'pr-12 text-right'}`}>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
