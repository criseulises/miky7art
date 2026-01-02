'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import servicesData from '../data/services.json';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ServiciosPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % servicesData.services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + servicesData.services.length) % servicesData.services.length);
  };

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
                Nuestros Servicios
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Soluciones <span className="text-[#02ff00]">Creativas</span>
              </h1>
              <p className="text-xl text-gray-400">
                Ofrecemos servicios de diseño gráfico profesional adaptados a tus necesidades.
                Desde logotipos hasta campañas visuales completas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Carousel */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="container mx-auto px-6">
            <div className="relative">
              {/* Main Carousel */}
              <div className="relative h-[600px] overflow-hidden rounded-3xl">
                {servicesData.services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={false}
                    animate={{
                      opacity: currentSlide === index ? 1 : 0,
                      x: currentSlide === index ? 0 : currentSlide > index ? -100 : 100,
                      scale: currentSlide === index ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 ${currentSlide === index ? 'z-10' : 'z-0'}`}
                  >
                    <div className="grid lg:grid-cols-2 gap-12 h-full items-center bg-gradient-to-br from-[#212121] to-[#1a1a1a] rounded-3xl p-12 border border-[#02ff00]/20">
                      {/* Left - Image */}
                      <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden group">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#212121] to-transparent opacity-60" />
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="flex items-center gap-4">
                            <span className="text-6xl">{service.icon}</span>
                            <div>
                              <div className="text-sm text-[#02ff00] font-semibold">Servicio Premium</div>
                              <div className="text-2xl font-bold text-white">{service.title}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right - Info */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-4xl font-bold text-white mb-4">{service.title}</h3>
                          <p className="text-lg text-gray-300 leading-relaxed">{service.description}</p>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-xl font-bold text-[#02ff00]">¿Qué incluye?</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center gap-3 text-gray-300"
                              >
                                <span className="w-2 h-2 bg-[#02ff00] rounded-full" />
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center gap-6 pt-6 border-t border-[#02ff00]/20">
                          <div>
                            <div className="text-sm text-gray-400">Precio desde</div>
                            <div className="text-3xl font-bold text-[#02ff00]">{service.pricing}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-400">Tiempo de entrega</div>
                            <div className="text-xl font-bold text-white">{service.deliveryTime}</div>
                          </div>
                        </div>

                        <a
                          href="/contacto"
                          className="inline-block px-8 py-4 bg-[#02ff00] text-[#212121] rounded-full font-bold hover:bg-white transition-all duration-300 hover:shadow-2xl hover:shadow-[#02ff00]/50 hover:scale-105"
                        >
                          Solicitar Este Servicio →
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#02ff00] text-[#212121] rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#02ff00] text-[#212121] rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg"
              >
                →
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-3 mt-8">
                {servicesData.services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      currentSlide === index
                        ? 'w-12 h-3 bg-[#02ff00]'
                        : 'w-3 h-3 bg-gray-600 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gradient-to-br from-[#0a0a0a] to-[#212121]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Todos Nuestros <span className="text-[#02ff00]">Servicios</span>
              </h2>
              <p className="text-gray-400 text-lg">Explora todo lo que podemos hacer por ti</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicesData.services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative bg-[#212121] rounded-2xl p-8 border border-[#02ff00]/20 hover:border-[#02ff00] transition-all duration-300 cursor-pointer"
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#02ff00] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="text-[#02ff00] font-bold">{service.pricing}</div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    className="h-1 bg-[#02ff00] mt-6 rounded-full"
                  />
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
                ¿No encuentras lo que <span className="text-[#02ff00]">buscas</span>?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Contáctanos y cuéntanos tu proyecto. Creamos soluciones personalizadas para cada cliente.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="/contacto"
                  className="px-8 py-4 bg-[#02ff00] text-[#212121] rounded-full font-bold hover:bg-white transition-all duration-300 hover:shadow-2xl hover:shadow-[#02ff00]/50 hover:scale-105"
                >
                  Solicitar Cotización Personalizada
                </a>
                <a
                  href="/portafolio"
                  className="px-8 py-4 border-2 border-[#02ff00] text-[#02ff00] rounded-full font-bold hover:bg-[#02ff00] hover:text-[#212121] transition-all duration-300 hover:scale-105"
                >
                  Ver Trabajos Anteriores
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
