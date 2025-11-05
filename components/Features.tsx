
import React from 'react';

const Features: React.FC = () => {
    return (
        <section id="desafios" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 section-reveal">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Los Desafíos de Implementar IA + Blockchain: <span className="gradient-text">Evita la Revolcada</span>
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto">
                        Sabemos lo emocionante que suena la IA + Blockchain, pero seamos honestos, aprovecharla puede sentirse como una tarea imposible.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    <div className="glass p-8 rounded-3xl hover-lift section-reveal">
                        <h3 className="text-2xl font-bold mb-4">¿No eres Tecnológico?</h3>
                        <p>La IA + Blockchain se siente complicada y confusa, con muchos términos técnicos. Necesitas un experto que simplifique la IA + Blockchain para que puedas entenderla rápidamente.</p>
                    </div>
                    
                    <div className="glass p-8 rounded-3xl hover-lift section-reveal" style={{ transitionDelay: '0.2s' }}>
                        <h3 className="text-2xl font-bold mb-4">No tienes tiempo libre</h3>
                        <p>Tus días ya están llenos. Necesitas que alguien haga que sea fácil implementar IA + Blockchain en horas en lugar de días o semanas.</p>
                    </div>
                    
                    <div className="glass p-8 rounded-3xl hover-lift section-reveal" style={{ transitionDelay: '0.4s' }}>
                        <h3 className="text-2xl font-bold mb-4">Demasiadas Herramientas</h3>
                        <p>Hay demasiadas herramientas de IA + Blockchain ahí fuera. Necesitas ayuda para saber cuáles realmente valen la pena usar sin perder tiempo investigando.</p>
                    </div>
                </div>

                <div className="text-center section-reveal">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Nuestra Solución: <span className="gradient-text">El Flujo Simple</span>
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto mb-12">
                        Entendemos estos desafíos. Y estamos aquí para hacer la tecnología rápida y fácil.
                    </p>
                    <div className="max-w-4xl mx-auto text-left space-y-6">
                        <div className="glass p-6 rounded-2xl flex items-center gap-6">
                            <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                                <span className="text-3xl">🚀</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl mb-1">Estrategia Plug and Play</h4>
                                <p>Te proporcionamos una estrategia probada y negocio listo para que generes más servicio, más prospectos y logres más ventas e impacto, en un lenguaje simple.</p>
                            </div>
                        </div>
                        <div className="glass p-6 rounded-2xl flex items-center gap-6">
                             <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                                <span className="text-3xl">⚡</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl mb-1">Efectivo y Eficiente</h4>
                                <p>La metodología o filosofía 90/10 está diseñada para ponerte en marcha en horas, no días o semanas. Technology Surfers se encarga del trabajo pesado.</p>
                            </div>
                        </div>
                         <div className="glass p-6 rounded-2xl flex items-center gap-6">
                             <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                                <span className="text-3xl">🎯</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl mb-1">Todo en la misma Comunidad</h4>
                                <p>No más confusión. Te proporcionamos tu negocio prediseñado y herramientas de IA + Blockchain en un solo lugar y con una sola comunidad. Simplemente conecta, configura y duplica.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16">
                        <a href="#precios" className="gradient-bg px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition inline-block">
                            Obtén Tu Sistema de IA + Blockchain
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;