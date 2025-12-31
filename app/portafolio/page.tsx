'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import portfolioData from '../data/portfolio.json';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PortafolioPage() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = activeFilter === 'Todos'
    ? portfolioData.projects
    : portfolioData.projects.filter(project => project.category === activeFilter);

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
                Nuestro Trabajo
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Portafolio <span className="text-[#02ff00]">Creativo</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Explora una selección de nuestros proyectos más destacados. Cada trabajo refleja
                nuestra pasión por el diseño y la atención al detalle.
              </p>
              <a
                href="/contacto"
                className="inline-block px-8 py-4 bg-[#02ff00] text-[#212121] rounded-full font-bold hover:bg-white transition-all duration-300 hover:shadow-2xl hover:shadow-[#02ff00]/50 hover:scale-105"
              >
                Solicitar Proyecto Personalizado
              </a>
            </motion.div>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-12 bg-[#0a0a0a]">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4">
              {portfolioData.categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-[#02ff00] text-[#212121] shadow-lg shadow-[#02ff00]/50 scale-105'
                      : 'bg-[#212121] text-gray-400 hover:text-white border border-[#02ff00]/20 hover:border-[#02ff00]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-[#0a0a0a]">
          <div className="container mx-auto px-6">
            <motion.div
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-2xl bg-[#212121] border border-[#02ff00]/20 hover:border-[#02ff00] transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedProject(project.id)}
                >
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#212121] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-4 py-2 bg-[#02ff00] text-[#212121] rounded-full text-xs font-bold">
                        {project.category}
                      </span>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-[#212121]/80 backdrop-blur-sm text-[#02ff00] rounded-full text-xs font-bold border border-[#02ff00]/30">
                        {project.year}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-[#02ff00]/20 backdrop-blur-sm flex items-center justify-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-center"
                      >
                        <div className="px-6 py-3 bg-[#02ff00] text-[#212121] rounded-full font-bold hover:bg-white transition-colors duration-300">
                          Ver Detalles
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#02ff00] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{project.client}</span>
                      <span className="text-[#02ff00] text-sm font-semibold">→</span>
                    </div>
                  </div>

                  {/* Decorative Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4 }}
                    className="h-1 bg-gradient-to-r from-[#02ff00] to-transparent"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#212121] to-[#0a0a0a] relative overflow-hidden">
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
                ¿Listo para tu <span className="text-[#02ff00]">Próximo Proyecto</span>?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Trabajemos juntos para crear algo increíble. Contáctanos y recibe una cotización personalizada.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="/contacto"
                  className="px-8 py-4 bg-[#02ff00] text-[#212121] rounded-full font-bold hover:bg-white transition-all duration-300 hover:shadow-2xl hover:shadow-[#02ff00]/50 hover:scale-105"
                >
                  Solicitar Cotización Gratis
                </a>
                <a
                  href="/servicios"
                  className="px-8 py-4 border-2 border-[#02ff00] text-[#02ff00] rounded-full font-bold hover:bg-[#02ff00] hover:text-[#212121] transition-all duration-300 hover:scale-105"
                >
                  Ver Todos los Servicios
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
