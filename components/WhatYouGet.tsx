
import React from 'react';

const toolCategories = [
    {
        title: "IA + BLOCKCHAIN DE CONTENIDO SOCIAL",
        features: [
            "Clasificador de Contenido Viral con IA + Blockchain",
            "Transcriptor de Video con IA + Blockchain",
            "Remezclador de Guiones con IA + Blockchain"
        ]
    },
    {
        title: "AUTOMATIZACIÓN CON IA + BLOCKCHAIN",
        features: [
            "Aplicaciones de Tareas con IA + Blockchain",
            "Organizador de Prospectos con IA + Blockchain",
            "Calificador de Prospectos con IA + Blockchain"
        ]
    },
    {
        title: "COMUNICACIÓN CON IA + BLOCKCHAIN",
        features: [
            "IA + Blockchain de Voz",
            "Bots de IA + Blockchain para DM de Redes Sociales",
            "Bots de IA + Blockchain para SMS/Email"
        ]
    },
    {
        title: "IA + BLOCKCHAIN PARA SITIOS WEB",
        features: [
            "Constructor Automático de Embudos con IA + Blockchain",
            "Generador de Imágenes Web con IA + Blockchain",
            "Redactor Publicitario con IA + Blockchain"
        ]
    },
    {
        title: "IA + BLOCKCHAIN PARA RESEÑAS",
        features: [
            "Respondedor de Reseñas con IA + Blockchain",
            "Clasificador de Reseñas con IA + Blockchain",
            "Gestión de Reseñas con IA + Blockchain"
        ]
    },
    {
        title: "AGENTES DE IA + BLOCKCHAIN",
        features: [
            "Agentes Ilimitados",
            "Gestión de Tareas",
            "Operaciones con IA + Blockchain"
        ]
    }
];

const membershipIncludes = [
    { title: "Portal y Oficinas de Capacitación", description: "Ingresa a nuestro portal con currículos de capacitación y repeticiones de clases en vivo." },
    { title: "WORKSHOPS y Masterminds en VIVO", description: "Surfea la ola de la IA con una comunidad de apoyo que te inspirará y motivará." },
    { title: "Comunidad Virtual y Local", description: "Experimenta nuestras clases en vivo semanales con los principales expertos en IA del mundo." },
    { title: "Software Propietario", description: "Tu membresía incluye nuestro software todo en uno para gestionar tu negocio con IA." }
];

const valuePackage = [
    { item: "Comunidad de Aprendizaje Virtual y Local + Herramientas de IA y Blockchain", value: "$4,000 MXN / Mes" },
    { item: "Sistema de Ganancias con IA + Blockchain (Negocio Listo)", value: "$5,000 MXN" },
    { item: "Software Propietario Para ventas, sistemas y marketing.", value: "$2,000 MXN / Mes" },
    { item: "Comunidad Privada de Capacitación", value: "$6,000 MXN / Mes" },
    { item: "Sesión de bienvenida y onboarding", value: "$4,000 MXN / Mes" },
    { item: "Sistema de ganancias con IA + Blockchain", value: "$9,700 MXN" },
    { item: "Workshops presenciales  y virtuales semanales", value: "$4,000 MXN" },
    { item: "Agencia de Automatización", value: "$9,700 MXN" },
    { item: "Invitación a eventos SurfersVIP.", value: "priceless" },
];

const WhatYouGet: React.FC = () => {
    return (
        <section id="oferta" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 section-reveal">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Todo lo que Obtienes: <span className="gradient-text">Tu Pasaporte a la tribu surfer de la tecnología</span>
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto">
                        Todo lo que necesitas para tu viaje, en un solo lugar.
                    </p>
                </div>
                
                <div className="mb-24 section-reveal">
                    <h3 className="text-3xl font-bold text-center mb-12">Herramientas de IA + Blockchain incluidas en tu plan y mucho más…</h3>
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
                        <ul className="grid grid-cols-1 gap-y-4">
                            {valuePackage.map((item, index) => (
                                <li key={index} className="flex justify-between border-b border-gray-300 py-3">
                                    <span className="font-medium">{item.item}</span>
                                    <span className="font-bold gradient-text">{item.value}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-12 text-center border-t border-white/10 pt-8">
                            <p className="text-xl text-gray-400">Oferta De la Comunidad Technology Surfers <span className="font-bold text-white line-through">$7,673 MXN</span> en valor.</p>
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