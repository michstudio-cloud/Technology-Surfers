
import React from 'react';

interface FAQItemProps {
    question: string;
    answer: string;
    delay: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, delay }) => (
    <details className="glass rounded-2xl p-6 group section-reveal" style={{ transitionDelay: delay }}>
        <summary className="text-xl font-bold cursor-pointer list-none flex justify-between items-center">
            {question}
            <span className="group-open:rotate-180 transition-transform" style={{ color: '#F16131' }}>▼</span>
        </summary>
        <p className="mt-4 text-gray-400 leading-relaxed">
            {answer}
        </p>
    </details>
);

const FAQ: React.FC = () => {
    const faqs = [
        {
            question: "¿Necesito ser bueno con la tecnología para usar esto?",
            answer: "¡No! Este programa está hecho para personas que no son buenas con la tecnología. Si sabes enviar un email, podrás aplicar todo. ¡Incluso hacemos una videollamada individual de una hora contigo para asegurarnos de que quedes completamente configurado!"
        },
        {
            question: "¿Qué pasa si estoy demasiado ocupado para las clases en vivo?",
            answer: "Entendemos. Por eso grabamos todas nuestras lecciones en vivo y las almacenamos en nuestra bóveda privada. Si no puedes asistir, solo tienes que iniciar sesión en tu portal y ver la capacitación cuando quieras."
        },
        {
            question: "¿Viene con software o tengo que comprarlo por separado?",
            answer: "¡Sí, viene incluido! Tu membresía incluye nuestro software de gestión empresarial Convertwave y nuestro software de IA de redes sociales virales Remixer. Es tu CRM, constructor de embudos, gestor de conversaciones y mucho más."
        },
        {
            question: "¿Puedo agregar mi equipo a la comunidad?",
            answer: "¡Lo recomendamos! Tenemos muchas empresas que quieren que su equipo se mantenga al día con la IA. Puedes usar tu enlace de referencia para que se registren, cubrir el costo y ganar tu comisión mensual por referirlos."
        },
        {
            question: "¿Funciona para mi tipo de negocio?",
            answer: "Sí. Todo lo que aprenderás es aplicable a cada negocio que existe. Aprenderás herramientas y habilidades para hacer crecer tu negocio usando los sistemas de IA más efectivos mientras trabajas menos."
        },
        {
            question: "¿Cuánto cuesta y cómo puedo pagar?",
            answer: "El precio es de $194/Mes (pago mensual) o $166/Mes (pago anual, ahorras 15%). Puedes usar cualquier tarjeta de crédito o débito. Puedes cancelar tu membresía en cualquier momento."
        }
    ];

    return (
        <section className="py-32 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 section-reveal">
                    Preguntas <span className="gradient-text">Frecuentes</span>
                </h2>
                
                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} delay={`${index * 0.1}s`} />
                    ))}
                </div>

                <div className="mt-20 text-center section-reveal">
                     <h3 className="text-2xl font-bold mb-6">¿Listo para surfear la ola de la IA?</h3>
                    <a href="#precios" className="gradient-bg px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition inline-block">
                        Comenzar Ahora
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;