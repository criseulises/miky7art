'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes integrar con un servicio de email o formulario
    console.log('Form submitted:', formData);
    alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', service: '', message: '' });
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
      value: 'contacto@miky7art.lat',
      link: 'mailto:contacto@miky7art.lat',
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      value: '+593 XXX XXX XXX',
      link: 'https://wa.me/593XXXXXXXXX',
    },
    {
      icon: '📍',
      title: 'Ubicación',
      value: 'Ecuador, Latinoamérica',
      link: '#',
    },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: '📸', url: '#' },
    { name: 'Facebook', icon: '👥', url: '#' },
    { name: 'Behance', icon: '🎨', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
  ];

  return (
    <section id="contacto" className="py-20 md:py-32 bg-gradient-to-br from-[#0a0a0a] via-[#212121] to-[#0a0a0a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#02ff00]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#02ff00]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#02ff00]/10 border border-[#02ff00] rounded-full text-[#02ff00] text-sm font-medium mb-4">
            Contacto
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Hablemos de tu <span className="text-[#02ff00]">Proyecto</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            ¿Tienes una idea en mente? Estamos listos para hacerla realidad
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-[#212121] rounded-xl border border-[#02ff00]/20 hover:border-[#02ff00] transition-all duration-300 group"
                  >
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{info.title}</div>
                      <div className="font-semibold text-white group-hover:text-[#02ff00] transition-colors duration-300">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Síguenos</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-[#212121] rounded-full border border-[#02ff00]/20 hover:border-[#02ff00] hover:bg-[#02ff00]/10 flex items-center justify-center text-2xl transition-all duration-300"
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-br from-[#02ff00]/10 to-transparent p-8 rounded-2xl border border-[#02ff00]/30"
            >
              <h4 className="text-xl font-bold mb-3">¿Listo para empezar?</h4>
              <p className="text-gray-400 mb-4">
                Contáctanos hoy y recibe una cotización gratuita para tu proyecto
              </p>
              <div className="flex items-center gap-2 text-[#02ff00] font-semibold">
                <span>Respuesta en 24 horas</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#212121] border border-[#02ff00]/20 rounded-xl focus:border-[#02ff00] focus:outline-none focus:ring-2 focus:ring-[#02ff00]/20 transition-all duration-300 text-white"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#212121] border border-[#02ff00]/20 rounded-xl focus:border-[#02ff00] focus:outline-none focus:ring-2 focus:ring-[#02ff00]/20 transition-all duration-300 text-white"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Servicio de Interés *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#212121] border border-[#02ff00]/20 rounded-xl focus:border-[#02ff00] focus:outline-none focus:ring-2 focus:ring-[#02ff00]/20 transition-all duration-300 text-white"
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
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#212121] border border-[#02ff00]/20 rounded-xl focus:border-[#02ff00] focus:outline-none focus:ring-2 focus:ring-[#02ff00]/20 transition-all duration-300 text-white resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-[#02ff00] text-[#212121] rounded-xl font-bold hover:bg-[#01cc00] transition-all duration-300 shadow-lg shadow-[#02ff00]/30 hover:shadow-[#02ff00]/50"
              >
                Enviar Mensaje
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
