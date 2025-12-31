'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="nosotros" className="py-20 md:py-32 bg-gradient-to-br from-[#212121] to-[#0a0a0a] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#02ff00]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#02ff00]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-[#02ff00]/10 border border-[#02ff00] rounded-full text-[#02ff00] text-sm font-medium mb-6">
              Sobre Nosotros
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestra <span className="text-[#02ff00]">Pasión</span>
            </h2>

            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Misión</h3>
                <p className="leading-relaxed">
                  En Miky7Art, nuestra misión es transformar ideas en creaciones visuales que destaquen por su originalidad y calidad. Nos dedicamos a ofrecer soluciones de diseño personalizado, desde ilustraciones y logotipos hasta rediseños vectoriales y edición fotográfica, con el objetivo de ayudar a nuestros clientes a comunicar su mensaje de manera efectiva.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Visión</h3>
                <p className="leading-relaxed">
                  Ser reconocidos como líderes en diseño gráfico y arte digital, creando experiencias visuales únicas que inspiren y conecten con las audiencias de nuestros clientes en toda Latinoamérica.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Valores</h3>
                <p className="leading-relaxed">
                  En Miky7Art nos guiamos por valores fundamentales como la <strong className="text-[#02ff00]">creatividad</strong>, la <strong className="text-[#02ff00]">calidad</strong> y la <strong className="text-[#02ff00]">pasión</strong> por el arte. Promovemos la comunicación abierta y efectiva con nuestros clientes, asegurándonos de entender y materializar sus ideas. Además, valoramos la ética, el profesionalismo y la mejora continua en todos nuestros proyectos.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-[#0a0a0a] px-6 py-3 rounded-full border border-[#02ff00]/20">
                <div className="w-2 h-2 bg-[#02ff00] rounded-full animate-pulse" />
                <span className="text-sm font-medium">Creatividad sin límites</span>
              </div>
              <div className="flex items-center gap-3 bg-[#0a0a0a] px-6 py-3 rounded-full border border-[#02ff00]/20">
                <div className="w-2 h-2 bg-[#02ff00] rounded-full animate-pulse" />
                <span className="text-sm font-medium">Calidad garantizada</span>
              </div>
              <div className="flex items-center gap-3 bg-[#0a0a0a] px-6 py-3 rounded-full border border-[#02ff00]/20">
                <div className="w-2 h-2 bg-[#02ff00] rounded-full animate-pulse" />
                <span className="text-sm font-medium">Profesionalismo</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="relative h-64 rounded-2xl overflow-hidden border-2 border-[#02ff00]/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#02ff00]/20 to-transparent" />
                <Image
                  src="/images/logo_miky7art.png"
                  alt="Miky7Art Work"
                  fill
                  className="object-contain p-8"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative h-64 rounded-2xl overflow-hidden border-2 border-[#02ff00]/30 mt-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#02ff00]/20 to-transparent" />
                <Image
                  src="/images/just_7logo.png"
                  alt="Miky7Art Logo"
                  fill
                  className="object-contain p-8"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative h-64 rounded-2xl overflow-hidden border-2 border-[#02ff00]/30 -mt-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#02ff00]/20 to-transparent flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#02ff00] mb-2">5+</div>
                    <div className="text-white font-medium">Años de experiencia</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="relative h-64 rounded-2xl overflow-hidden border-2 border-[#02ff00]/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#02ff00]/20 to-transparent flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#02ff00] mb-2">100+</div>
                    <div className="text-white font-medium">Proyectos completados</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Element */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-8 -right-8 w-32 h-32 bg-[#02ff00]/10 rounded-full blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
