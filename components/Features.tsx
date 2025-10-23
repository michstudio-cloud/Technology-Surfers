
import React from 'react';

const Features: React.FC = () => {
    return (
        <section className="py-32 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 section-reveal">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Construido para los <span className="gradient-text">rebeldes de la realidad</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Tres pilares fundamentales que transformarán tu forma de hacer negocios
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="glass p-8 rounded-3xl hover-lift section-reveal">
                        <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Fácil de Implementar</h3>
                        <p className="text-gray-400">
                            No necesitas ser un experto en tecnología. Nuestro sistema está diseñado para que cualquiera pueda implementar IA en solo 24 horas.
                        </p>
                    </div>
                    
                    <div className="glass p-8 rounded-3xl hover-lift section-reveal" style={{ transitionDelay: '0.2s' }}>
                        <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">IA de Última Generación</h3>
                        <p className="text-gray-400">
                            Accede a las herramientas de IA más avanzadas del mercado, todas integradas en una sola plataforma fácil de usar.
                        </p>
                    </div>
                    
                    <div className="glass p-8 rounded-3xl hover-lift section-reveal" style={{ transitionDelay: '0.4s' }}>
                        <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Rentabilidad Garantizada</h3>
                        <p className="text-gray-400">
                            Múltiples flujos de ingresos: desde $500 hasta $15,000 por cliente, más comisiones recurrentes del 30%.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
