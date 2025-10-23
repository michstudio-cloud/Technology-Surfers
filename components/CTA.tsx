
import React from 'react';

const CTA: React.FC = () => {
    return (
        <section id="precios" className="py-32 px-6 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-0 blur-3xl" style={{ background: 'linear-gradient(to right, rgba(241, 97, 49, 0.2), rgba(255, 140, 66, 0.2))' }}></div>
            </div>
            
            <div className="max-w-4xl mx-auto relative z-10 text-center section-reveal">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">
                    ¡COMIENZA A SURFEAR LA OLA<br/>
                    <span className="gradient-text">90/10 DE IA HOY!</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12">
                    Únete a más de 1 millón de Technology Surfers que ya están dominando la ola tecnológica
                </p>
                
                <div className="glass rounded-3xl p-12 max-w-2xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        <input 
                            type="email" 
                            placeholder="tu@email.com" 
                            className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 focus:outline-none text-white placeholder-gray-400 transition"
                            style={{borderColor: 'rgba(241, 97, 49, 0.3)'}}
                        />
                        <button className="gradient-bg px-8 py-4 rounded-full font-semibold hover:opacity-90 transition whitespace-nowrap">
                            Comenzar Gratis
                        </button>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
                        <div className="flex items-center">
                            <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            Sin tarjeta de crédito
                        </div>
                        <div className="flex items-center">
                            <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            Cancela cuando quieras
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
