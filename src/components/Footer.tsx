import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">GYC Mantención SPA</h3>
            <p className="text-gray-400 leading-relaxed">
              Soluciones técnicas de calidad en mantenimiento industrial y montaje mecánico.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors">Mantenimiento Mecánico Industrial</li>
              <li className="hover:text-white transition-colors">Servicios Eléctricos</li>
              <li className="hover:text-white transition-colors">Obras Civiles</li>
              <li className="hover:text-white transition-colors">Estructuras Metálicas</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#certificaciones" className="hover:text-white transition-colors">
                  Certificaciones
                </a>
              </li>
              <li>
                <a href="#politicas" className="hover:text-white transition-colors">
                  Políticas
                </a>
              </li>
              <li>
                <a href="#postulaciones" className="hover:text-white transition-colors">
                  Trabaja con Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Santa Barbara, Biobío, Chile</li>
              <li>
                <a href="tel:+56996919657" className="hover:text-white transition-colors">
                  +56 9 9691 9657
                </a>
              </li>
              <li>
                <a href="mailto:contacto@gycmantencion.cl" className="hover:text-white transition-colors">
                  contacto@gycmantencion.cl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mb-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Shield className="w-5 h-5 text-amber-400" />
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                Canal de Denuncias Confidencial:{' '}
                <a
                  href="mailto:denuncias@gycmantencion.cl"
                  className="text-amber-400 hover:text-amber-300 font-semibold transition-colors"
                >
                  denuncias@gycmantencion.cl
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} GYC Mantención SPA. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
