
import React from 'react';

const Community: React.FC = () => {
    return (
        <section id="comunidad" className="py-32 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <div className="section-reveal">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Únete a la Comunidad de IA: <span className="gradient-text">Tu Red es tu Mayor Activo</span>
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto mb-12">
                        ¡Rodéate de los expertos líderes en IA del mundo que están vendiendo IA mientras se mantienen adelante de la competencia y comparten todos sus secretos contigo!
                    </p>
                </div>
                <div className="glass p-12 rounded-3xl section-reveal">
                    <h3 className="text-2xl md:text-4xl font-bold mb-6">
                        <span className="gradient-text">NO DEJES QUE TUS COMPETIDORES SE ADELANTEN</span>
                    </h3>
                    <p className="text-xl max-w-4xl mx-auto">
                        La IA no es ningún secreto. Todos saben sobre ella. Lo único que impide a tus competidores usarla es su falta de experiencia. Aprovecha esto ahora.
                    </p>
                </div>
                 <div className="mt-16 text-center section-reveal">
                    <a href="#precios" className="gradient-bg px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition inline-block">
                        Únete a la Tribu del Flujo
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Community;