'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const services = [
    'Diseño Vectorial',
    'Edición Fotográfica',
    'Ilustración Digital',
    'Diseño de Portadas',
    'Identidad Visual',
    'Motion Graphics',
  ];

  return (
    <footer className="bg-[#212121] border-t border-[#02ff00]/20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#02ff00] to-transparent" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/logo_miky7art.png"
              alt="Miky7Art"
              width={180}
              height={60}
              className="h-12 w-auto mb-6"
            />
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transformamos ideas en creaciones visuales únicas. Diseño gráfico profesional para impulsar tu marca.
            </p>
            <div className="flex gap-4">
              {['📸', '👥', '🎨', '💼'].map((icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 bg-[#0a0a0a] rounded-full border border-[#02ff00]/20 hover:border-[#02ff00] hover:bg-[#02ff00]/10 flex items-center justify-center transition-all duration-300"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#02ff00] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      className="text-[#02ff00]"
                    >
                      →
                    </motion.span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#servicios"
                    className="text-gray-400 hover:text-[#02ff00] transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#02ff00] rounded-full" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#02ff00] text-xl">📧</span>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <a href="mailto:contacto@miky7art.lat" className="text-white hover:text-[#02ff00] transition-colors duration-300">
                    contacto@miky7art.lat
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#02ff00] text-xl">📱</span>
                <div>
                  <div className="text-sm text-gray-400">WhatsApp</div>
                  <a href="https://wa.me/593XXXXXXXXX" className="text-white hover:text-[#02ff00] transition-colors duration-300">
                    +593 XXX XXX XXX
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#02ff00] text-xl">📍</span>
                <div>
                  <div className="text-sm text-gray-400">Ubicación</div>
                  <span className="text-white">Santo Domingo, República Dominicana</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-[#02ff00]/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} <span className="text-[#02ff00] font-semibold">Miky7Art</span>. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#02ff00] transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-[#02ff00] transition-colors duration-300">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-[#02ff00] transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </motion.div>

        {/* Made with Love */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-gray-500 text-xs flex items-center justify-center gap-2">
            Hecho con <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-red-500"
            >
              ❤️
            </motion.span> por Miky7Art
          </p>
        </motion.div>
      </div>

      {/* Floating Element */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-8 right-8 w-16 h-16 opacity-10"
      >
        <Image
          src="/images/just_7logo.png"
          alt="7"
          width={64}
          height={64}
        />
      </motion.div>
    </footer>
  );
}
