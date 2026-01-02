'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CtaBanner() {
  return (
    <section className="py-20 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#02ff00]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#02ff00]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Portafolio Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            <Link href="/portafolio">
              <div className="bg-gradient-to-br from-[#212121] to-[#1a1a1a] rounded-3xl p-8 md:p-12 border border-[#02ff00]/20 hover:border-[#02ff00] transition-all duration-300 relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#02ff00]/10 rounded-bl-full" />

                <div className="relative z-10">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    🎨
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-[#02ff00] transition-colors duration-300">
                    Explora Nuestro Portafolio
                  </h3>

                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    Descubre nuestros proyectos más destacados. Diseños vectoriales, ilustraciones, fotografías y portadas que reflejan nuestra creatividad.
                  </p>

                  <div className="flex items-center gap-2 text-[#02ff00] font-semibold text-lg group-hover:gap-4 transition-all duration-300">
                    <span>Ver Proyectos</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>

                {/* Decorative line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#02ff00] to-transparent"
                />
              </div>
            </Link>
          </motion.div>

          {/* Contacto Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            <Link href="/contacto">
              <div className="bg-gradient-to-br from-[#02ff00]/10 via-[#02ff00]/5 to-transparent rounded-3xl p-8 md:p-12 border-2 border-[#02ff00] hover:border-[#02ff00] hover:shadow-2xl hover:shadow-[#02ff00]/20 transition-all duration-300 relative overflow-hidden h-full">
                {/* Decorative corner */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-[#02ff00]/10 rounded-br-full" />

                <div className="relative z-10">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    💬
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    ¿Tienes un <span className="text-[#02ff00]">Proyecto</span>?
                  </h3>

                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    Conversemos sobre tu idea. Recibe una cotización gratuita y personalizada. ¡Respondemos en menos de 24 horas!
                  </p>

                  <div className="inline-flex items-center gap-3 bg-[#02ff00] text-[#212121] px-6 py-3 rounded-full font-bold group-hover:bg-white transition-all duration-300 group-hover:scale-105">
                    <span>Solicitar Cotización</span>
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-xl"
                    >
                      ✓
                    </motion.span>
                  </div>
                </div>

                {/* Pulse effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute top-1/2 right-8 w-32 h-32 bg-[#02ff00] rounded-full blur-2xl"
                />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
