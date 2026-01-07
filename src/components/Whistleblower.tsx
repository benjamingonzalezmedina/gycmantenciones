import { Shield, Lock, Eye, AlertCircle } from 'lucide-react';

export default function Whistleblower() {
  return (
    <section id="denuncias" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-full mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Canal de Denuncias
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Tu voz importa. Reporta de manera segura cualquier irregularidad o preocupación
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              ¿Qué puedes reportar?
            </h3>
            <ul className="space-y-4 text-white/90">
              <li className="flex items-start">
                <AlertCircle className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0 mt-1" />
                <span>Incumplimientos de normas de seguridad</span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0 mt-1" />
                <span>Conductas inapropiadas o acoso laboral</span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0 mt-1" />
                <span>Irregularidades administrativas o financieras</span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0 mt-1" />
                <span>Conflictos de interés</span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0 mt-1" />
                <span>Cualquier situación que atente contra la ética empresarial</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              Nuestro Compromiso
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-amber-500/20 p-2 rounded-lg mr-4">
                  <Lock className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Confidencialidad Total</h4>
                  <p className="text-white/80 text-sm">
                    Tu identidad será protegida en todo momento
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-500/20 p-2 rounded-lg mr-4">
                  <Eye className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Revisión Profesional</h4>
                  <p className="text-white/80 text-sm">
                    Cada reporte es evaluado con seriedad y profesionalismo
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-500/20 p-2 rounded-lg mr-4">
                  <Shield className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Sin Represalias</h4>
                  <p className="text-white/80 text-sm">
                    Protegemos a quienes reportan de buena fe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl shadow-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Canal de Contacto Confidencial
            </h3>
            <p className="text-white/90 mb-6">
              Envía tu reporte de manera segura a nuestro correo exclusivo para denuncias
            </p>

            <a
              href="mailto:denuncias@gycmantencion.cl"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              denuncias@gycmantencion.cl
            </a>

            <div className="mt-6 pt-6 border-t border-white/30">
              <p className="text-white/80 text-sm">
                También puedes reportar situaciones urgentes al teléfono:
              </p>
              <a
                href="tel:+56996919657"
                className="text-white font-semibold text-lg hover:underline"
              >
                +56 9 9691 9657
              </a>
            </div>
          </div>

          <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <p className="text-white/70 text-sm text-center leading-relaxed">
              Este canal está diseñado para proteger la integridad de nuestra organización y el bienestar
              de todos nuestros colaboradores. Tu reporte nos ayuda a mantener los más altos estándares
              de ética y profesionalismo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
