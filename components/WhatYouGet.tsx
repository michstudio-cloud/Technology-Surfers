
import React from 'react';

const WhatYouGet: React.FC = () => {
    return (
        <section id="herramientas" className="py-32 px-6" style={{ background: 'linear-gradient(to bottom, #000000, rgba(241, 97, 49, 0.1), #000000)' }}>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 section-reveal">
                    RESUMEN DE LO QUE OBTIENES<br/>
                    <span className="gradient-text">AL COMENZAR HOY</span>
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="glass rounded-3xl overflow-hidden hover-lift section-reveal">
                        <div className="h-64 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(241, 97, 49, 0.3), rgba(255, 140, 66, 0.3))' }}>
                            <svg className="w-32 h-32" style={{ color: '#F16131' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
                            </svg>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-4">Apps de IA Virales</h3>
                            <p className="text-gray-400">Crea contenido viral automáticamente con nuestras herramientas de IA. Clasifica, transcribe y remezcla contenido en segundos.</p>
                        </div>
                    </div>
                    
                    <div className="glass rounded-3xl overflow-hidden hover-lift section-reveal" style={{ transitionDelay: '0.2s' }}>
                        <div className="h-64 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(255, 140, 66, 0.3), rgba(241, 97, 49, 0.3))' }}>
                            <svg className="w-32 h-32" style={{ color: '#FF8C42' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                            </svg>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-4">Gestión de Prospectos con IA</h3>
                            <p className="text-gray-400">Organiza, califica y convierte prospectos automáticamente con bots de IA para DM, SMS y email.</p>
                        </div>
                    </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="glass p-8 rounded-3xl hover-lift section-reveal">
                        <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4">
                            <span className="text-2xl">🎯</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Valor increíble de<br/>$1,585 mensual</h3>
                        <p className="text-gray-400 text-sm">Acceso completo a todas las herramientas y capacitaciones por una fracción del costo.</p>
                    </div>
                    
                    <div className="glass p-8 rounded-3xl hover-lift section-reveal" style={{ transitionDelay: '0.2s' }}>
                        <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4">
                            <span className="text-2xl">⚡</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Generación de bonos<br/>e ingresos</h3>
                        <p className="text-gray-400 text-sm">Programa de afiliados del 30% y múltiples modelos de monetización.</p>
                    </div>
                    
                    <div className="glass p-8 rounded-3xl hover-lift section-reveal" style={{ transitionDelay: '0.4s' }}>
                        <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4">
                            <span className="text-2xl">🚀</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Implementación<br/>en 24 horas</h3>
                        <p className="text-gray-400 text-sm">Sistema listo para usar con soporte personalizado 1 a 1.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatYouGet;
