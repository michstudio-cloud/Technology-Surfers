
import React from 'react';

const Community: React.FC = () => {
    return (
        <section id="comunidad" className="py-32 px-6 bg-light">
            <div className="max-w-5xl mx-auto text-center">
                <div className="section-reveal">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Tu Red Es Tu <span className="gradient-text">Riqueza</span>
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
            </div>
        </section>
    );
};

export default Community;
