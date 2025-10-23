
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
            question: "¿Necesito ser un experto en tecnología?",
            answer: "¡Para nada! Nuestro sistema está diseñado específicamente para personas sin conocimientos técnicos. Si puedes enviar un email, puedes usar nuestras herramientas. Además, incluimos una sesión 1-on-1 de onboarding."
        },
        {
            question: "¿Qué pasa si estoy muy ocupado?",
            answer: "Entendemos que estás ocupado, por eso grabamos todas las clases en vivo. Puedes acceder al contenido cuando quieras desde nuestro portal privado. La implementación toma solo horas, no semanas."
        },
        {
            question: "¿Funciona para mi tipo de negocio?",
            answer: "Sí. Todo lo que enseñamos es aplicable a cualquier industria. Ya sea que tengas un negocio establecido o estés comenzando, nuestro sistema de IA se adapta a tus necesidades específicas."
        },
        {
            question: "¿Cuánto cuesta y puedo cancelar?",
            answer: "$194/mes con pago mensual o $166/mes con pago anual (ahorras 15%). Incluye software Convertwave y Remixer. Puedes cancelar en cualquier momento sin compromiso de permanencia."
        }
    ];

    return (
        <section className="py-32 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 section-reveal">
                    Tenemos las <span className="gradient-text">respuestas</span>
                </h2>
                
                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} delay={`${index * 0.1}s`} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
