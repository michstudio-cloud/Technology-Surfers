
import React from 'react';

const Testimonials: React.FC = () => {
    return (
        <section id="testimonios" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="section-reveal">
                    <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
                        No confíes en nosotros,<br/>
                        <span className="gradient-text">confía en los Technology Surfers</span>
                    </h2>
                    <p className="text-xl text-gray-400 text-center mb-20">Escucha de nuestros clientes que ya están domando la ola tecnológica</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass p-8 rounded-3xl section-reveal">
                        <div className="flex items-start mb-6">
                            <div className="w-16 h-16 bg-gray-700 rounded-full mr-4 bg-cover" style={{backgroundImage: 'url(https://picsum.photos/id/1005/100/100)'}}></div>
                            <div>
                                <h4 className="font-bold text-lg">Carlos Martínez</h4>
                                <p className="text-gray-400 text-sm">Fundador, Tech Accelerator</p>
                            </div>
                        </div>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            "En 6 semanas pasé de no saber nada de IA a generar <span className="font-bold" style={{ color: '#F16131' }}>$24,000 en ingresos</span> implementando el sistema para 3 clientes. Este método realmente funciona."
                        </p>
                        <div className="flex text-yellow-400">
                            ★★★★★
                        </div>
                    </div>
                    
                    <div className="glass p-8 rounded-3xl section-reveal" style={{ transitionDelay: '0.2s' }}>
                        <div className="flex items-start mb-6">
                            <div className="w-16 h-16 bg-gray-700 rounded-full mr-4 bg-cover" style={{backgroundImage: 'url(https://picsum.photos/id/1027/100/100)'}}></div>
                            <div>
                                <h4 className="font-bold text-lg">María González</h4>
                                <p className="text-gray-400 text-sm">CEO, Digital Solutions</p>
                            </div>
                        </div>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            "Pasaba <span className="font-bold" style={{ color: '#F16131' }}>40+ horas semanales</span> en tareas repetitivas. Ahora la IA se encarga del 90% y me enfoco en estrategia. Mi productividad aumentó 10x."
                        </p>
                        <div className="flex text-yellow-400">
                            ★★★★★
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
