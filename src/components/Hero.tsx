export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=2400"
          alt="Mantenimiento Industrial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/60"></div>
      </div>

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Soluciones Técnicas de Calidad
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Mantenimiento industrial y montaje mecánico especializado en el sector hidroeléctrico
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#servicios"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-md hover:bg-gray-100 transition-all duration-200 shadow-lg"
              >
                Nuestros Servicios
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-md border-2 border-white hover:bg-white hover:text-blue-900 transition-all duration-200"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
