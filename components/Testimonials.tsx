
import React from 'react';

const testimonials = [
    { name: "Just Grow Podcast", avatarName: "JGP", text: "Como puedes escuchar, esto FUNCIONA. Comienza tu prueba gratuita para comenzar a revender este sistema...", bgColor: "F16131" },
    { name: "Home Service Accelerator", avatarName: "HSA", text: "Úsalo para ti mismo. Tú estableces tu precio. Conserva el 100% de la ganancia.", bgColor: "FF8C42" },
    { name: "Book Publishing Academy", avatarName: "BPA", text: "El sistema de ganancias con IA es una revelación. Nos ha permitido automatizar y escalar como nunca antes.", bgColor: "F16131" },
    { name: "AZE & Community Launch", avatarName: "AZE", text: "Increíble. La comunidad y las herramientas son de primer nivel. Altamente recomendado.", bgColor: "FF8C42" },
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonios" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="section-reveal text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Lo que Dicen Nuestros Miembros: <span className="gradient-text">Voces de la Tribu</span>
                    </h2>
                    <p className="text-xl mb-12 max-w-2xl mx-auto">¿TE PREGUNTAS SI LA METODOLOGÍA 90/10 FUNCIONA PARA TU NEGOCIO Y TUS CLIENTES?</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div className="glass p-8 rounded-3xl section-reveal" style={{ transitionDelay: `${index * 0.1}s` }} key={index}>
                            <div className="flex items-center mb-6">
                                <div className="w-16 h-16 rounded-full mr-4 bg-cover bg-center flex-shrink-0" style={{backgroundImage: `url(https://ui-avatars.com/api/?name=${testimonial.avatarName}&background=${testimonial.bgColor}&color=fff&size=128)`}}></div>
                                <div>
                                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                                    <p className="text-sm">Fundador</p>
                                </div>
                            </div>
                            <blockquote className="mb-4 leading-relaxed italic">
                                "{testimonial.text}"
                            </blockquote>
                            <div className="flex text-yellow-500">
                                ★★★★★
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12 section-reveal">
                    <p className="text-2xl font-bold">Únete a la Tribu de <span className="gradient-text">Surfers de la Tecnología.</span></p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;