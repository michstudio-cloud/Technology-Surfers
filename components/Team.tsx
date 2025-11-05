

import React from 'react';

const teamMembers = [
    {
        name: "DALLAS CLOUNCH",
        role: "INSTRUCTOR PRINCIPAL DE SURF DE IA + Blockchain • Fundador de The AI Surfer",
        bio: "De novato en codificación a los 21 a CEO de una próspera empresa de software a los 23, Dallas ha hecho crecer 'The AI Surfer' de 0 a más de 1,000,000+ seguidores aprovechando el poder de la IA + Blockchain, y está dedicado a mostrar el proceso exacto para que cualquiera pueda usar IA + Blockchain para construir un negocio exitoso.",
        avatarName: "Dallas+Clounch",
    },
    {
        name: "MATT PROUD",
        role: "ESTRATEGA EJECUTIVO DE SURF",
        bio: "Ganador del muy codiciado Premio Saaspreneur 6 veces, Matt se ha establecido como uno de los principales desarrolladores de negocios tecnológicos del mundo. Con 15 años de experiencia, es un maestro en crear modelos de negocio eficientes y altamente apalancados.",
        avatarName: "Matt+Proud",
    }
];

const Team: React.FC = () => {
    return (
        <section id="equipo" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 section-reveal">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Conoce a los Fundadores: <br/>Tus <span className="gradient-text">Guías en el Mundo de la IA + Blockchain</span>
                    </h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="glass p-8 rounded-3xl flex flex-col md:flex-row items-center gap-8 section-reveal hover-lift" style={{ transitionDelay: `${index * 0.2}s` }}>
                            <div 
                                className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-cover bg-center flex-shrink-0" 
                                style={{backgroundImage: `url(https://ui-avatars.com/api/?name=${member.avatarName}&background=F16131&color=fff&size=256&bold=true)`}}>
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-bold">{member.name}</h3>
                                <p className="gradient-text font-semibold mb-4">{member.role}</p>
                                <p className="text-gray-400">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;