import { Heart, Users, Award, TrendingUp, Shield, Handshake } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Values() {
  const { ref, isVisible } = useScrollAnimation();

  const values = [
    {
      icon: Heart,
      title: 'Compromiso',
      description: 'Dedicación total con nuestros clientes y proyectos, asegurando resultados excepcionales',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Shield,
      title: 'Seguridad',
      description: 'Prioridad absoluta en cada operación, protegiendo a nuestro equipo y las instalaciones',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Búsqueda constante de la calidad superior en cada servicio que brindamos',
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: Users,
      title: 'Trabajo en Equipo',
      description: 'Colaboración efectiva para alcanzar objetivos comunes con sinergia profesional',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: TrendingUp,
      title: 'Mejora Continua',
      description: 'Innovación constante en procesos y técnicas para superar expectativas',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Handshake,
      title: 'Integridad',
      description: 'Transparencia y ética en cada decisión y relación comercial que establecemos',
      color: 'from-cyan-500 to-cyan-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Valores Corporativos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Principios fundamentales que guían cada una de nuestras acciones y decisiones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <ValueCard
                key={index}
                icon={Icon}
                title={value.title}
                description={value.description}
                color={value.color}
                delay={index * 100}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  icon: Icon,
  title,
  description,
  color,
  delay
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  delay: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${color} mb-6 shadow-lg`}>
        <Icon className="w-8 h-8 text-white" strokeWidth={2} />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
