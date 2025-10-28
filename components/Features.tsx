
import React from 'react';

const Features: React.FC = () => {
    return (
        <section id="desafios" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 section-reveal">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Los Desafíos de Implementar IA: <span className="gradient-text">Evita la Revolcada</span>
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto">
                        Sabemos lo emocionante que suena la IA, pero seamos honestos, aprovecharla puede sentirse como una tarea imposible.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    <div className="glass p-8 rounded-3xl hover-lift section-reveal">
                        <h3 className="text-2xl font-bold mb-4">No eres "Técnico"</h3>
                        <p>La IA se siente complicada y confusa, con muchos términos técnicos. Necesitas un experto que simplifique la IA para que puedas entenderla rápidamente.</p>
                    </div>
                    
                    <div className="glass p-8 rounded-3xl hover-lift section-reveal" style={{ transitionDelay: '0.2s' }}>
                        <h3 className="text-2xl font-bold mb-4">Estás Demasiado Ocupado</h3>
                        <p>Tus días ya están llenos. Necesitas que alguien haga que sea fácil implementar IA en horas en lugar de días o semanas.</p>
                    </div>
                    
                    <div className="glass p-8 rounded-3xl hover-lift section-reveal" style={{ transitionDelay: '0.4s' }}>
                        <h3 className="text-2xl font-bold mb-4">Demasiadas Herramientas</h3>
                        <p>Hay demasiadas herramientas de IA ahí fuera. Necesitas ayuda para saber cuáles realmente valen la pena usar sin perder tiempo investigando.</p>
                    </div>
                </div>

                <div className="text-center section-reveal">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Nuestra Solución de IA: <span className="gradient-text">Un Flujo Simple y Potente</span>
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto mb-12">
                        Entendemos estos desafíos. Y estamos aquí para hacer la IA rápida y fácil.
                    </p>
                    <div className="max-w-4xl mx-auto text-left space-y-6">
                        <div className="glass p-6 rounded-2xl flex items-center gap-6">
                            <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                                <span className="text-3xl">🚀</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl mb-1">Estrategia Lista para Usar</h4>
                                <p>Te proporcionamos una estrategia probada y negocio listo para usar que está listo para que generes prospectos y cierres más clientes, en lenguaje simple.</p>
                            </div>
                        </div>
                        <div className="glass p-6 rounded-2xl flex items-center gap-6">
                             <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                                <span className="text-3xl">⚡</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl mb-1">Rápido y Eficiente</h4>
                                <p>El proceso del Sistema de Escala 90/10 está diseñado para ponerte en marcha en horas, no días o semanas. Nosotros manejamos el trabajo pesado.</p>
                            </div>
                        </div>
                         <div className="glass p-6 rounded-2xl flex items-center gap-6">
                             <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                                <span className="text-3xl">🎯</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl mb-1">Todo en un Solo Lugar</h4>
                                <p>No más confusión. Te proporcionamos tu negocio prediseñado y herramientas de IA en un solo lugar. Simplemente conecta y reproduce.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16">
                        <a href="#precios" className="gradient-bg px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition inline-block">
                            Obtén Tu Sistema de IA
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;