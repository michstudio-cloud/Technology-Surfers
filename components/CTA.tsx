

import React from 'react';

const CTA: React.FC = () => {
    return (
        <section id="precios" className="py-32 px-6 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-0 blur-3xl" style={{ background: 'linear-gradient(to right, rgba(241, 97, 49, 0.1), rgba(255, 140, 66, 0.1))' }}></div>
            </div>
            
            <div className="max-w-5xl mx-auto relative z-10 text-center section-reveal">
                <h2 className="text-4xl md:text-6xl font-bold mb-12 text-shadow">
                    Comienza a Construir tu Futuro con IA + Blockchain<br/>
                    <span className="gradient-text">Únete al Flujo 90/10 Hoy Mismo</span>
                </h2>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    {/* Monthly Plan */}
                    <div className="glass p-8 rounded-3xl border-2 hover-lift w-full max-w-sm" style={{ borderColor: 'rgba(241, 97, 49, 0.5)' }}>
                        <h3 className="text-5xl font-bold mb-2">$3,597.99</h3>
                        <p className="text-gray-400 mb-6">MXN / Mensual</p>
                        <button 
                            className="w-full py-4 rounded-full text-lg font-semibold transition hover:opacity-90 text-black"
                            style={{ background: 'cyan', boxShadow: '0 0 20px cyan' }}
                        >
                            Comenzar
                        </button>
                    </div>

                    <div className="text-2xl font-bold my-4 md:my-0">O</div>

                    {/* Yearly Plan */}
                    <div className="glass p-8 rounded-3xl border-2 hover-lift w-full max-w-sm" style={{ borderColor: 'rgba(241, 97, 49, 0.5)' }}>
                         <h3 className="text-5xl font-bold mb-2">$3,080</h3>
                        <p className="text-gray-400 mb-2">MXN / Mensual</p>
                        <p className="text-sm text-gray-300 mb-6">(Paga Anual y Ahorra 15%)</p>
                        <button 
                            className="w-full py-4 rounded-full text-lg font-semibold transition hover:opacity-90 text-black"
                            style={{ background: 'cyan', boxShadow: '0 0 20px cyan' }}
                        >
                            Comenzar
                        </button>
                    </div>
                </div>

                <p className="mt-12 text-gray-400">
                    Aceptamos pagos con Tarjeta de Crédito/Débito y Bitcoin.
                </p>
            </div>
        </section>
    );
};

export default CTA;