'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NosotrosPage() {
  const team = [
    {
      name: "Equipo Creativo",
      role: "Diseño & Desarrollo",
      image: "/images/logo_miky7art.png"
    }
  ];

  const values = [
    {
      icon: "🎨",
      title: "Creatividad",
      description: "Pensamiento innovador en cada proyecto"
    },
    {
      icon: "⚡",
      title: "Calidad",
      description: "Excelencia en cada detalle"
    },
    {
      icon: "❤️",
      title: "Pasión",
      description: "Amor por lo que hacemos"
    },
    {
      icon: "🤝",
      title: "Compromiso",
      description: "Dedicación con nuestros clientes"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a] pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#212121] to-[#0a0a0a] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle, #02ff00 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
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
                Sobre Nosotros
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Nuestra <span className="text-[#02ff00]">Historia</span>
              </h1>
              <p className="text-xl text-gray-400">
                Somos un equipo de diseñadores apasionados con sede en Santo Domingo, República Dominicana,
                dedicados a transformar ideas en arte visual.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Left - Image Grid */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    className="relative h-64 rounded-2xl overflow-hidden border-2 border-[#02ff00]/30"
                  >
                    <Image
                      src="https://miky7art.lat/mikyart/wp-content/uploads/2025/12/a69e59169101179.644715bbb83cc-scaled.jpg"
                      alt="Miky7Art Work"
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="relative h-64 rounded-2xl overflow-hidden border-2 border-[#02ff00]/30 mt-8"
                  >
                    <Image
                      src="https://miky7art.lat/mikyart/wp-content/uploads/2025/12/ycy3-scaled.jpg"
                      alt="Miky7Art Art"
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="relative h-64 rounded-2xl overflow-hidden border-2 border-[#02ff00]/30 -mt-8"
                  >
                    <Image
                      src="https://miky7art.lat/mikyart/wp-content/uploads/2025/12/85-1-2048x1971.jpg"
                      alt="Miky7Art Design"
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    className="relative h-64 rounded-2xl overflow-hidden border-2 border-[#02ff00]/30"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#02ff00]/20 to-transparent flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-[#02ff00] mb-2">5+</div>
                        <div className="text-white font-medium">Años de experiencia</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right - Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-4xl font-bold text-white mb-4">
                    Misión
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    En Miky7Art, nuestra misión es transformar ideas en creaciones visuales que destaquen por su
                    originalidad y calidad. Nos dedicamos a ofrecer soluciones de diseño personalizado, desde
                    ilustraciones y logotipos hasta rediseños vectoriales y edición fotográfica, con el objetivo
                    de ayudar a nuestros clientes a comunicar su mensaje de manera efectiva.
                  </p>
                </div>

                <div>
                  <h2 className="text-4xl font-bold text-white mb-4">
                    Visión
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Ser reconocidos como líderes en diseño gráfico y arte digital en la República Dominicana y
                    el Caribe, creando experiencias visuales únicas que inspiren y conecten con las audiencias
                    de nuestros clientes.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <div className="flex items-center gap-2 bg-[#0a0a0a] px-4 py-2 rounded-full border border-[#02ff00]/20">
                    <div className="w-2 h-2 bg-[#02ff00] rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-white">Santo Domingo, RD</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#0a0a0a] px-4 py-2 rounded-full border border-[#02ff00]/20">
                    <div className="w-2 h-2 bg-[#02ff00] rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-white">100+ Proyectos</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#0a0a0a] px-4 py-2 rounded-full border border-[#02ff00]/20">
                    <div className="w-2 h-2 bg-[#02ff00] rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-white">50+ Clientes</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Values */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Nuestros <span className="text-[#02ff00]">Valores</span>
                </h2>
                <p className="text-gray-400 text-lg">Los principios que guían nuestro trabajo</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="bg-gradient-to-br from-[#212121] to-[#1a1a1a] rounded-2xl p-8 border border-[#02ff00]/20 hover:border-[#02ff00] transition-all duration-300 text-center"
                  >
                    <div className="text-6xl mb-4">{value.icon}</div>
                    <h3 className="text-2xl font-bold text-[#02ff00] mb-3">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-[#212121] to-[#0a0a0a]">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "100+", label: "Proyectos Completados", icon: "📁" },
                { number: "50+", label: "Clientes Satisfechos", icon: "😊" },
                { number: "5+", label: "Años de Experiencia", icon: "⭐" },
                { number: "99%", label: "Satisfacción", icon: "❤️" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <motion.div
                    className="text-5xl md:text-6xl font-bold text-[#02ff00] mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
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
              className="absolute top-0 right-0 w-96 h-96 bg-[#02ff00]/10 rounded-full blur-3xl"
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Listo para trabajar <span className="text-[#02ff00]">juntos</span>?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Estamos ubicados en Santo Domingo, República Dominicana, pero trabajamos con clientes
                de todo el mundo. ¡Contáctanos hoy!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="/contacto"
                  className="px-8 py-4 bg-[#02ff00] text-[#212121] rounded-full font-bold hover:bg-white transition-all duration-300 hover:shadow-2xl hover:shadow-[#02ff00]/50 hover:scale-105"
                >
                  Iniciar Proyecto
                </a>
                <a
                  href="/portafolio"
                  className="px-8 py-4 border-2 border-[#02ff00] text-[#02ff00] rounded-full font-bold hover:bg-[#02ff00] hover:text-[#212121] transition-all duration-300 hover:scale-105"
                >
                  Ver Portafolio
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
