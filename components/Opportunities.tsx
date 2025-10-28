
import React from 'react';

const opportunities = [
    { title: "Comisión Mensual", description: "Gana comisiones por empresas que se registren en el software que recomiendas." },
    { title: "Configuración de IA", description: "Cobra $500 - $15,000 por ayudar a una empresa a configurar herramientas de IA." },
    { title: "Gestión Continua", description: "Administra estas herramientas para un negocio y cobra $500 - $5,000/Mes." },
    { title: "Consultoría", description: "Cobra una tarifa de consultoría de $150 - $500/Hora por ayuda ocasional." },
    { title: "Revenue Share", description: "Acuerda recibir entre 5% - 35% de las ventas generadas por lo que construiste." },
    { title: "Propiedad Parcial (Equity)", description: "Obtén propiedad parcial de una empresa por configurar y administrar su sistema de IA." },
    { title: "Programa de Afiliados", description: "Refiere amigos y gana 30% de comisión recurrente mensual." }
];

const Opportunities: React.FC = () => {
    return (
        <section id="ingresos" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 section-reveal">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Monetiza tu Conocimiento en IA:<br/><span className="gradient-text">Múltiples Fuentes de Ingresos</span>
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto">
                        El océano es vasto y las oportunidades son abundantes. Te mostramos cómo monetizar tu know-how como AI Surfer.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {opportunities.map((opp, index) => (
                        <div key={index} className="glass p-8 rounded-3xl hover-lift section-reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                            <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6">
                                <span className="text-white text-3xl font-bold">{index + 1}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{opp.title}</h3>
                            <p>{opp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Opportunities;