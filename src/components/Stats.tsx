import { Award, Users, Wrench, Shield } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Award,
      value: '2021',
      label: 'Año de Fundación',
    },
    {
      icon: Users,
      value: 'Equipo',
      label: 'Profesional Capacitado',
    },
    {
      icon: Wrench,
      value: '4 Áreas',
      label: 'Servicios Especializados',
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Compromiso con Seguridad',
    },
  ];

  return (
    <section className="bg-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
