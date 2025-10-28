
import React from 'react';

const toolCategories = [
    {
        title: "IA DE CONTENIDO SOCIAL",
        features: [
            "Clasificador de Contenido Viral con IA",
            "Transcriptor de Video con IA",
            "Remezclador de Guiones con IA"
        ]
    },
    {
        title: "AUTOMATIZACIÓN CON IA",
        features: [
            "Aplicaciones de Tareas con IA",
            "Organizador de Prospectos con IA",
            "Calificador de Prospectos con IA"
        ]
    },
    {
        title: "COMUNICACIÓN CON IA",
        features: [
            "IA de Voz",
            "Bots de IA para DM de Redes Sociales",
            "Bots de IA para SMS/Email"
        ]
    },
    {
        title: "IA PARA SITIOS WEB",
        features: [
            "Constructor Automático de Embudos con IA",
            "Generador de Imágenes Web con IA",
            "Redactor Publicitario con IA"
        ]
    },
    {
        title: "IA PARA RESEÑAS",
        features: [
            "Respondedor de Reseñas con IA",
            "Clasificador de Reseñas con IA",
            "Gestión de Reseñas con IA"
        ]
    },
    {
        title: "AGENTES DE IA",
        features: [
            "Agentes Ilimitados",
            "Gestión de Tareas",
            "Operaciones con IA"
        ]
    }
];

const membershipIncludes = [
    { title: "PORTAL DE CAPACITACIÓN", description: "Ingresa a nuestro portal con currículos de capacitación y repeticiones de clases en vivo." },
    { title: "COMUNIDAD PRIVADA EN LÍNEA", description: "Surfea la ola de la IA con una comunidad de apoyo que te inspirará y motivará." },
    { title: "CLASES EN VIVO", description: "Experimenta nuestras clases en vivo semanales con los principales expertos en IA del mundo." },
    { title: "SOFTWARE CONVERTWAVE Y REMIXER", description: "Tu membresía incluye nuestro software todo en uno para gestionar tu negocio con IA." }
];

const valuePackage = [
    { item: "Currículo de Capacitación y Herramientas de IA", value: "$197/Mes" },
    { item: "Sistema de Ganancias con IA (Negocio Listo)", value: "$5,000" },
    { item: "Software Convertwave", value: "$97/Mes" },
    { item: "Software Remixer", value: "$97/Mes" },
    { item: "Comunidad Privada de Capacitación", value: "$297/Mes" },
    { item: "3+ Clases de Capacitación en Vivo Semanales", value: "$497/Mes" },
    { item: "Llamada Individual de Incorporación", value: "$97" },
    { item: "Plantillas de Propuestas y Ventas", value: "$394" },
    { item: "Programa de Sistemas Avanzados de IA", value: "$997" },
];

const WhatYouGet: React.FC = () => {
    return (
        <section id="oferta" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 section-reveal">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Todo lo que Obtienes: <span className="gradient-text">Tu Pasaporte a la Tribu del Flujo</span>
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto">
                        Todo lo que necesitas para tu viaje, en un solo lugar.
                    </p>
                </div>
                
                <div className="mb-24 section-reveal">
                    <h3 className="text-3xl font-bold text-center mb-12">Herramientas de IA Incluidas en Tu Plan</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {toolCategories.map((category, index) => (
                            <div key={index} className="glass p-8 rounded-3xl shadow-lg hover-lift">
                                <h4 className="text-xl font-bold mb-6 text-center">{category.title}</h4>
                                <ul className="space-y-4">
                                    {category.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center">
                                            <svg className="w-6 h-6 mr-3 flex-shrink-0" style={{ color: '#F16131' }} fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-24">
                     <h3 className="text-3xl font-bold text-center mb-12 section-reveal">Más Allá del Software: <span className="gradient-text">Beneficios de la Membresía</span></h3>
                     <div className="grid md:grid-cols-2 gap-8">
                        {membershipIncludes.map((item, index) => (
                            <div key={index} className="glass p-8 rounded-3xl hover-lift section-reveal" style={{transitionDelay: `${index * 0.1}s`}}>
                                <h4 className="font-bold text-xl mb-3 gradient-text">{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        ))}
                     </div>
                </div>

                <div>
                    <h3 className="text-3xl font-bold text-center mb-12 section-reveal">El Valor Real del Paquete: <span className="gradient-text">Lo que Ganas</span></h3>
                    <div className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto section-reveal">
                        <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                            {valuePackage.map((item, index) => (
                                <li key={index} className="flex justify-between border-b border-gray-300 py-3">
                                    <span className="font-medium">{item.item}</span>
                                    <span className="font-bold gradient-text">{item.value} USD</span>
                                </li>
                            ))}
                             <li className="col-span-2 text-center pt-6">
                                <p className="text-lg">Programa de Afiliados del Acelerador de Ganancias AI Surfer (<span className="font-bold">Ganancias Ilimitadas</span>)</p>
                             </li>
                        </ul>
                        <div className="mt-12 text-center border-t border-white/10 pt-8">
                            <p className="text-xl text-gray-400">Valor total que recibes: <span className="font-bold text-white line-through">$7,673 USD</span> en valor.</p>
                            <h4 className="text-3xl md:text-4xl font-bold mt-4">
                                Obtén Acceso Completo Hoy Por <span className="gradient-text">Una Fracción Del Costo</span>
                            </h4>
                            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                                Todo lo que ves arriba está incluido en tu membresía. Sin tarifas ocultas, sin compras adicionales. Un solo precio para desbloquear todo tu potencial.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhatYouGet;