

import React from 'react';

const withUs = [
    "Aprender cómo aprovechar y monetizar las últimas herramientas de IA y blockchain.",
    "Vender tu producto y servir más rápido mientras ahorras más tiempo en la operación.",
    "Mantenerte actualizado con las últimas tendencias en IA y blockchain, y comunidad sólida.",
    "Volverte 10x más productivo y eficiente con la metodología 90/10."
];

const withoutUs = [
    "Hacer todo de la misma manera antigua.",
    "Dejar que otros se beneficien de la IA + Blockchain mientras tú te lo pierdes.",
    "Perder tiempo en tareas manuales y repetitivas.",
    "Ver cómo tus competidores se adelantan."
];

const whyJoinWithUs = [
    "Ser parte del 1% superior de empresas que usan IA + Blockchain.",
    "Descubrir la forma rápida y fácil de escalar con IA + Blockchain.",
    "Disparar tus ganancias mientras ahorras más tiempo.",
    "Mantenerte adelante de tu competencia aplicando IA + Blockchain antes que ellos.",
    "Obtener acceso exclusivo a los principales propietarios de empresas de IA + Blockchain.",
    "Conectar con otros dueños de negocios que son parte de la familia 90/10."
];

const whyJoinWithoutUs = [
    "Permanecer en el mismo lugar en el que estás actualmente.",
    "Intentar navegar la IA + Blockchain por tu cuenta, abrumado y perdido.",
    "Perderte conexiones clave con los principales líderes de IA + Blockchain.",
    "Hacer las cosas de la misma manera antigua.",
    "Ver cómo tus competidores usan IA + Blockchain más rápido que tú.",
    "Perderte una ola de oportunidad única en la vida."
];

const Advantages: React.FC = () => {
    return (
        <section id="comparativa" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 section-reveal">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Tu Negocio con IA + Blockchain vs. Sin IA + Blockchain: <span className="gradient-text">Una Decisión Clara</span>
                    </h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 mb-24">
                    <div className="glass p-10 rounded-3xl section-reveal">
                        <h3 className="text-3xl font-bold mb-6 gradient-text">CON TECHNOLOGY SURFERS:</h3>
                        <ul className="space-y-4 text-gray-300">
                            {withUs.map((item, index) => (
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
                           {withoutUs.map((item, index) => (
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

                <div className="text-center mb-20 section-reveal">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        ¿Por Qué Unirte a Nuestra Tribu? <br/>El <span className="gradient-text">Compromiso con tu Ola</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="glass p-10 rounded-3xl section-reveal">
                        <h3 className="text-3xl font-bold mb-6 gradient-text">LIBERTAD Y FLUJO:</h3>
                        <ul className="space-y-4 text-gray-300">
                            {whyJoinWithUs.map((item, index) => (
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
                        <h3 className="text-3xl font-bold mb-6 text-gray-400">ESTANCAMIENTO:</h3>
                        <ul className="space-y-4 text-gray-400">
                           {whyJoinWithoutUs.map((item, index) => (
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

                <div className="mt-20 text-center section-reveal">
                    <a href="#precios" className="gradient-bg px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition inline-block animate-glow">
                        Elige el Flujo. Elige la Libertad.
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Advantages;