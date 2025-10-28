
import React from 'react';

const opportunities = [
    {
        title: "#1. Referencia de Software",
        description: "Gana una comisión mensual por las empresas que se registren en el software que recomiendes."
    },
    {
        title: "#2. Tarifas de Configuración o Creación",
        description: "Cobra de $500 a $15,000 por ayudar a una empresa a configurar herramientas de IA en su negocio."
    },
    {
        title: "#3. Iguala Mensual",
        description: "Gestiona estas herramientas de IA de forma continua para un negocio y cobra de $500 a $5,000 al mes."
    },
    {
        title: "#4. Consultoría",
        description: "Algunos dueños de negocios solo querrán pedir ayuda de vez en cuando. Cobra una tarifa de consultoría de $150 a $500 por hora."
    },
    {
        title: "#5. Participación en los Beneficios",
        description: "Proporciona IA a una empresa y acuerda recibir entre el 5% y el 35% de todas las ventas generadas por lo que construiste."
    },
    {
        title: "#6. Participación Accionaria (Equity)",
        description: "Obtén participación parcial en una empresa por configurar y gestionar un sistema impulsado por IA para ellos."
    },
];

const Opportunities: React.FC = () => {
    return (
        <section id="ingresos" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 section-reveal">
                    <h2 className="text-4xl md:text-6xl font-bold">
                        7 FORMAS EN LAS QUE APRENDERÁS A COBRAR.
                    </h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {opportunities.map((opp, index) => (
                        <div 
                            key={index} 
                            className="p-6 rounded-2xl section-reveal" 
                            style={{ 
                                backgroundColor: '#ef8c8c',
                                transitionDelay: `${index * 0.1}s` 
                            }}
                        >
                            <h3 className="text-2xl font-bold mb-4 text-black">{opp.title}</h3>
                            <p className="text-gray-800">{opp.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center section-reveal">
                    <h3 className="text-4xl md:text-5xl font-bold mb-4">
                        #7. Gana hasta $456/Año por referido con nuestro programa de afiliados.
                    </h3>
                    <p className="text-2xl font-semibold gradient-text mb-6 tracking-widest">
                        COMIENZA A GENERAR INGRESOS PASIVOS.
                    </p>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                        Refiere amigos a The AI Surfer Profit Accelerator y gana una comisión recurrente mensual del 30%.
                    </p>
                    <a 
                        href="#precios"
                        className="inline-block py-4 px-12 rounded-full text-lg font-semibold transition hover:opacity-90 text-black"
                        style={{ background: 'cyan', boxShadow: '0 0 20px cyan' }}
                    >
                        Comenzar
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Opportunities;
