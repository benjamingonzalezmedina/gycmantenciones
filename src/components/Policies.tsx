import { FileText, Shield, Leaf, Users, Target, Lock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Policies() {
  const { ref, isVisible } = useScrollAnimation();

  const policies = [
    {
      icon: Shield,
      title: 'Política de Seguridad y Salud Ocupacional',
      points: [
        'Cero accidentes como objetivo principal',
        'Capacitación continua en prevención de riesgos',
        'Equipos de protección personal certificados',
        'Procedimientos seguros de trabajo (PST)',
        'Inspecciones regulares de seguridad',
      ],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: Award,
      title: 'Política de Calidad',
      points: [
        'Cumplimiento de estándares ISO 9001',
        'Control de calidad en cada etapa del proyecto',
        'Satisfacción del cliente como prioridad',
        'Auditorías internas y externas',
        'Mejora continua de procesos',
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Leaf,
      title: 'Política Medioambiental',
      points: [
        'Minimización de impacto ambiental',
        'Gestión responsable de residuos',
        'Uso eficiente de recursos naturales',
        'Cumplimiento normativa ambiental vigente',
        'Promoción de prácticas sostenibles',
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Users,
      title: 'Política de Recursos Humanos',
      points: [
        'Igualdad de oportunidades laborales',
        'Desarrollo profesional continuo',
        'Ambiente laboral respetuoso',
        'Reconocimiento al desempeño',
        'Balance vida personal-laboral',
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Lock,
      title: 'Política de Confidencialidad',
      points: [
        'Protección de información sensible',
        'Cumplimiento Ley de Protección de Datos',
        'Acuerdos de confidencialidad con clientes',
        'Sistemas seguros de almacenamiento',
        'Capacitación en seguridad de la información',
      ],
      color: 'from-slate-500 to-slate-600',
      bgColor: 'bg-slate-50',
    },
    {
      icon: Target,
      title: 'Política de Ética y Compliance',
      points: [
        'Código de ética corporativo',
        'Cero tolerancia a la corrupción',
        'Transparencia en operaciones',
        'Canal de denuncias confidencial',
        'Cumplimiento normativa legal vigente',
      ],
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50',
    },
  ];

  return (
    <section id="politicas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mb-4 shadow-lg">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Políticas Corporativas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Marcos de referencia que definen nuestro compromiso con la excelencia operacional
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {policies.map((policy, index) => {
            const Icon = policy.icon;
            return (
              <PolicyCard
                key={index}
                icon={Icon}
                title={policy.title}
                points={policy.points}
                color={policy.color}
                bgColor={policy.bgColor}
                delay={index * 100}
              />
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">
              Compromiso con la Responsabilidad Corporativa
            </h3>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              En GYC Mantención, entendemos que nuestras políticas no son solo documentos,
              sino compromisos vivos que guían cada decisión y acción. Nos sometemos a
              auditorías periódicas y revisamos constantemente nuestros procedimientos para
              asegurar el más alto nivel de cumplimiento y responsabilidad.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <p className="text-white font-semibold">Auditorías Externas</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <p className="text-white font-semibold">Revisión Anual</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <p className="text-white font-semibold">Mejora Continua</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PolicyCard({
  icon: Icon,
  title,
  points,
  color,
  bgColor,
  delay
}: {
  icon: React.ElementType;
  title: string;
  points: string[];
  color: string;
  bgColor: string;
  delay: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`${bgColor} p-6 border-b-4 bg-gradient-to-r ${color}`}>
        <div className="flex items-center">
          <div className="bg-white p-3 rounded-xl shadow-lg mr-4">
            <Icon className={`w-8 h-8 bg-gradient-to-br ${color} bg-clip-text text-transparent`} strokeWidth={2} />
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <ul className="space-y-3">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CheckCircle({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  );
}

function Award({ className, strokeWidth }: { className: string; strokeWidth: number }) {
  return (
    <svg className={className} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" stroke="currentColor">
      <path d="M12 15l-3 6-3-6H3l3-6V3h12v6l3 6h-3l-3 6-3-6z"></path>
    </svg>
  );
}
