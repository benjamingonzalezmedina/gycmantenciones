import { MessageCircle, X, Phone, Mail, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { rateLimiter } from '../utils/rateLimit';

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [rateLimitError, setRateLimitError] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!rateLimiter.check('contact-form')) {
      setRateLimitError(true);
      const remainingTime = Math.ceil(rateLimiter.getTimeUntilReset('contact-form') / 1000);
      setTimeout(() => setRateLimitError(false), 3000);
      return;
    }

    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    const mailtoLink = `mailto:contacto@gycmantencion.cl?subject=Contacto desde web: ${formData.name}&body=Nombre: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATeléfono: ${formData.phone}%0D%0A%0D%0AMensaje:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;

    setSubmitted(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 group"
            aria-label="Abrir contacto rápido"
          >
            <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </button>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-80 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 p-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-white" />
                <h3 className="text-white font-semibold">
                  {showForm ? 'Enviar Mensaje' : 'Contacto Rápido'}
                </h3>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setShowForm(false);
                  setSubmitted(false);
                }}
                className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {showForm ? (
              <div className="p-4">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full mb-3">
                      <Send className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <p className="text-gray-900 dark:text-gray-100 font-semibold">Mensaje enviado</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="Tu email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="Tu teléfono (opcional)"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        required
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                        placeholder="Tu mensaje"
                      />
                    </div>
                    {rateLimitError && (
                      <p className="text-xs text-red-600 dark:text-red-400">
                        Demasiados intentos. Intenta en unos minutos.
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center text-sm disabled:opacity-50"
                    >
                      {isSubmitting ? 'Enviando...' : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Enviar
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="w-full text-gray-600 dark:text-gray-400 text-sm hover:text-gray-900 dark:hover:text-gray-200"
                    >
                      Volver
                    </button>
                  </form>
                )}
              </div>
            ) : (
              <>
                <div className="p-4 space-y-3">
                  <button
                    onClick={() => setShowForm(true)}
                    className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                      <Send className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Enviar mensaje</p>
                      <p className="font-semibold text-gray-900 dark:text-gray-100">Contáctanos</p>
                    </div>
                  </button>

                  <a
                    href="tel:+56996919657"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                      <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Llamar ahora</p>
                      <p className="font-semibold text-gray-900 dark:text-gray-100">+56 9 9691 9657</p>
                    </div>
                  </a>

                  <a
                    href="mailto:contacto@gycmantencion.cl"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                      <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">contacto@gycmantencion.cl</p>
                    </div>
                  </a>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Horario: Lunes a Viernes 8:00 - 18:00
                  </p>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}
