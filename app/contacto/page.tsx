'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo en las próximas 24 horas.');
    setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'contacto@miky7art.com',
      link: 'mailto:contacto@miky7art.com',
      description: 'Respuesta en 24 horas'
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      value: '+1 (809) XXX-XXXX',
      link: 'https://wa.me/1809XXXXXXX',
      description: 'Lun - Vie: 9AM - 6PM'
    },
    {
      icon: '📍',
      title: 'Ubicación',
      value: 'Santo Domingo, República Dominicana',
      link: '#',
      description: 'Trabajamos en todo el Caribe'
    },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: '📸', url: '#', color: 'from-purple-500 to-pink-500' },
    { name: 'Facebook', icon: '👥', url: '#', color: 'from-blue-500 to-blue-600' },
    { name: 'Behance', icon: '🎨', url: '#', color: 'from-blue-400 to-blue-500' },
    { name: 'LinkedIn', icon: '💼', url: '#', color: 'from-blue-600 to-blue-700' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a] pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#212121] to-[#0a0a0a] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(#02ff00 1px, transparent 1px), linear-gradient(90deg, #02ff00 1px, transparent 1px)`,
              backgroundSize: '100px 100px',
            }} />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-5 py-2.5 bg-[#02ff00]/10 border border-[#02ff00] rounded-full text-[#02ff00] text-sm font-semibold mb-6">
                Contáctanos
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Hablemos de tu <span className="text-[#02ff00]">Proyecto</span>
              </h1>
              <p className="text-xl text-gray-400">
                ¿Tienes una idea en mente? Estamos listos para hacerla realidad.
                Contáctanos y recibe una cotización gratuita.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Left - Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Información de Contacto</h2>
                  <p className="text-gray-400 mb-8">
                    Estamos ubicados en Santo Domingo, República Dominicana, pero trabajamos
                    con clientes de todo el mundo.
                  </p>

                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <motion.a
                        key={info.title}
                        href={info.link}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        whileHover={{ x: 10, scale: 1.02 }}
                        className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#212121] to-[#1a1a1a] rounded-2xl border border-[#02ff00]/20 hover:border-[#02ff00] transition-all duration-300 group"
                      >
                        <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-gray-400 mb-1">{info.title}</div>
                          <div className="font-bold text-white group-hover:text-[#02ff00] transition-colors duration-300 text-lg mb-1">
                            {info.value}
                          </div>
                          <div className="text-xs text-gray-500">{info.description}</div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-white">Síguenos</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className={`flex items-center gap-3 p-4 bg-gradient-to-r ${social.color} rounded-xl text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300`}
                      >
                        <span className="text-2xl">{social.icon}</span>
                        <span>{social.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* CTA Box */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="bg-gradient-to-br from-[#02ff00]/10 via-[#02ff00]/5 to-transparent p-8 rounded-2xl border border-[#02ff00]/30"
                >
                  <h4 className="text-2xl font-bold mb-3 text-white">¿Listo para empezar?</h4>
                  <p className="text-gray-300 mb-4">
                    Contáctanos hoy y recibe una cotización gratuita para tu proyecto.
                    ¡Respondemos en menos de 24 horas!
                  </p>
                  <div className="flex items-center gap-2 text-[#02ff00] font-semibold text-lg">
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ✓
                    </motion.span>
                    <span>Respuesta garantizada en 24 horas</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-[#212121] to-[#1a1a1a] p-8 md:p-10 rounded-3xl border border-[#02ff00]/20"
              >
                <h3 className="text-2xl font-bold mb-6 text-white">Solicitar Cotización</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#02ff00]/20 rounded-xl focus:border-[#02ff00] focus:outline-none focus:ring-2 focus:ring-[#02ff00]/20 transition-all duration-300 text-white placeholder-gray-500"
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-300">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#02ff00]/20 rounded-xl focus:border-[#02ff00] focus:outline-none focus:ring-2 focus:ring-[#02ff00]/20 transition-all duration-300 text-white placeholder-gray-500"
                        placeholder="+1 (809) XXX-XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#02ff00]/20 rounded-xl focus:border-[#02ff00] focus:outline-none focus:ring-2 focus:ring-[#02ff00]/20 transition-all duration-300 text-white placeholder-gray-500"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold mb-2 text-gray-300">
                        Servicio de Interés *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#02ff00]/20 rounded-xl focus:border-[#02ff00] focus:outline-none focus:ring-2 focus:ring-[#02ff00]/20 transition-all duration-300 text-white"
                      >
                        <option value="">Selecciona un servicio</option>
                        <option value="vectores">Diseño Vectorial</option>
                        <option value="fotografia">Edición Fotográfica</option>
                        <option value="ilustracion">Ilustración Digital</option>
                        <option value="portadas">Diseño de Portadas</option>
                        <option value="identidad">Identidad Visual</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold mb-2 text-gray-300">
                        Presupuesto Estimado
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#02ff00]/20 rounded-xl focus:border-[#02ff00] focus:outline-none focus:ring-2 focus:ring-[#02ff00]/20 transition-all duration-300 text-white"
                      >
                        <option value="">Selecciona un rango</option>
                        <option value="50-100">$50 - $100</option>
                        <option value="100-250">$100 - $250</option>
                        <option value="250-500">$250 - $500</option>
                        <option value="500+">$500+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                      Cuéntanos sobre tu proyecto *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#02ff00]/20 rounded-xl focus:border-[#02ff00] focus:outline-none focus:ring-2 focus:ring-[#02ff00]/20 transition-all duration-300 text-white resize-none placeholder-gray-500"
                      placeholder="Describe tu proyecto, objetivos y cualquier detalle relevante..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-[#02ff00] text-[#212121] rounded-xl font-bold text-lg hover:bg-white transition-all duration-300 shadow-lg shadow-[#02ff00]/30 hover:shadow-[#02ff00]/50 flex items-center justify-center gap-2"
                  >
                    Enviar Solicitud
                    <span className="text-2xl">→</span>
                  </motion.button>

                  <p className="text-xs text-gray-500 text-center">
                    Al enviar este formulario, aceptas que nos pondremos en contacto contigo para discutir tu proyecto.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section (Optional) */}
        <section className="py-20 bg-gradient-to-br from-[#212121] to-[#0a0a0a]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Nuestra <span className="text-[#02ff00]">Ubicación</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Basados en Santo Domingo, República Dominicana 🇩🇴
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[#02ff00]/10 to-transparent p-12 rounded-3xl border border-[#02ff00]/30 text-center">
                <div className="text-7xl mb-6">📍</div>
                <h3 className="text-3xl font-bold text-white mb-4">Santo Domingo, RD</h3>
                <p className="text-gray-300 text-lg">
                  Trabajamos de manera remota con clientes de toda República Dominicana,
                  el Caribe y Latinoamérica.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
