
import React from 'react';

const Advantages: React.FC = () => {
    return (
        <section id="sistema" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 section-reveal">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Tu red es tu <span className="gradient-text">riqueza</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Rodéate de los expertos líderes en IA del mundo
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="glass p-10 rounded-3xl section-reveal">
                        <h3 className="text-3xl font-bold mb-6 gradient-text">CON TECHNOLOGY SURFERS:</h3>
                        <ul className="space-y-4 text-gray-300">
                            {[
                                "Aprender y monetizar las últimas herramientas de IA",
                                "Vender IA más rápido ahorrando tiempo",
                                "Mantenerte actualizado con tendencias en IA",
                                "Volverte 10x más productivo y eficiente"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{ color: '#F16131' }} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="glass p-10 rounded-3xl section-reveal" style={{ transitionDelay: '0.2s' }}>
                        <h3 className="text-3xl font-bold mb-6 text-gray-400">SIN NOSOTROS:</h3>
                        <ul className="space-y-4 text-gray-400">
                           {[
                                "Hacer todo de la misma manera antigua",
                                "Dejar que otros se beneficien de la IA",
                                "Perder tiempo en tareas manuales",
                                "Ver cómo tus competidores se adelantan"
                           ].map((item, index) => (
                               <li key={index} className="flex items-start">
                                    <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                                    </svg>
                                   {item}
                               </li>
                           ))}
                        </ul>
                    </div>
                </div>
                
                <div className="text-center glass p-12 rounded-3xl section-reveal">
                    <h3 className="text-2xl md:text-4xl font-bold mb-6">
                        <span className="gradient-text">NO DEJES QUE TUS COMPETIDORES SE ADELANTEN</span>
                    </h3>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                        La IA no es ningún secreto. Todos saben sobre ella. Lo único que impide a tus competidores usarla es su falta de experiencia. Aprovecha esto ahora.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Advantages;
