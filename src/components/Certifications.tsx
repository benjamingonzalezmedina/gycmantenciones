import { Award, CheckCircle, FileCheck, ShieldCheck, Zap, HardHat } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Certifications() {
  const { ref, isVisible } = useScrollAnimation();

  const certifications = [
    {
      icon: ShieldCheck,
      title: 'ISO 9001:2015',
      subtitle: 'Sistema de Gestión de Calidad',
      description: 'Certificación en procesos de calidad y mejora continua',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: HardHat,
      title: 'ISO 45001',
      subtitle: 'Seguridad y Salud Ocupacional',
      description: 'Compromiso con la seguridad laboral y prevención de riesgos',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: FileCheck,
      title: 'ISO 14001',
      subtitle: 'Gestión Ambiental',
      description: 'Responsabilidad medioambiental en todas nuestras operaciones',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Zap,
      title: 'SEC Clase A',
      subtitle: 'Superintendencia de Electricidad',
      description: 'Autorización para trabajos eléctricos de alta complejidad',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Award,
      title: 'Registro CCHC',
      subtitle: 'Cámara Chilena de la Construcción',
      description: 'Empresa inscrita y acreditada en obras civiles',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: CheckCircle,
      title: 'Mutual de Seguridad',
      subtitle: 'Adheridos a Mutual',
      description: 'Protección integral para nuestros trabajadores',
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <section id="certificaciones" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mb-4 shadow-lg">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certificaciones y Acreditaciones
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Respaldados por las certificaciones más exigentes de la industria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <CertificationCard
                key={index}
                icon={Icon}
                title={cert.title}
                subtitle={cert.subtitle}
                description={cert.description}
                color={cert.color}
                delay={index * 150}
              />
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Compromiso con la Excelencia
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Nuestras certificaciones garantizan que cada proyecto se ejecuta bajo los más altos
              estándares internacionales de calidad, seguridad y respeto al medio ambiente.
              Invertimos constantemente en capacitación y actualización de nuestras acreditaciones
              para ofrecer un servicio de clase mundial.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-blue-50 px-6 py-3 rounded-full">
                <p className="text-blue-900 font-semibold">Auditorías Anuales</p>
              </div>
              <div className="bg-green-50 px-6 py-3 rounded-full">
                <p className="text-green-900 font-semibold">Mejora Continua</p>
              </div>
              <div className="bg-amber-50 px-6 py-3 rounded-full">
                <p className="text-amber-900 font-semibold">Cumplimiento Normativo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CertificationCard({
  icon: Icon,
  title,
  subtitle,
  description,
  color,
  delay
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  delay: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`h-2 bg-gradient-to-r ${color}`}></div>
      <div className="p-8">
        <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${color} mb-4 shadow-lg`}>
          <Icon className="w-8 h-8 text-white" strokeWidth={2} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 font-medium mb-3">{subtitle}</p>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
