import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Dirección',
      content: 'Baquedano 847, Santa Barbara, Biobío, Chile',
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+56 9 9691 9657',
      link: 'tel:+56996919657',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contacto@gycmantencion.cl',
      link: 'mailto:contacto@gycmantencion.cl',
    },
    {
      icon: Clock,
      title: 'Horario',
      content: 'Lunes a Viernes: 8:00 - 18:00',
    },
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-white/90">
            Estamos listos para brindarle la mejor solución a sus necesidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const content = info.link ? (
              <a
                href={info.link}
                className="text-white/90 hover:text-white transition-colors"
              >
                {info.content}
              </a>
            ) : (
              <p className="text-white/90">{info.content}</p>
            );

            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                {content}
              </div>
            );
          })}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            Proceso de Trabajo
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-900 font-bold mr-4">
                1
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Consulta y Cotización</h4>
                <p className="text-white/80">
                  Contáctanos para recibir una cotización sin costo
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-900 font-bold mr-4">
                2
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Selección de Servicio</h4>
                <p className="text-white/80">
                  Definimos juntos la mejor solución para tu proyecto
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-900 font-bold mr-4">
                3
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Ejecución del Proyecto</h4>
                <p className="text-white/80">
                  Realizamos el trabajo con los más altos estándares de calidad
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
