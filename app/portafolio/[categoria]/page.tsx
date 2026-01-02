'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import portfolioData from '../../data/portfolio.json';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CategoriaPage() {
  const params = useParams();
  const categoria = decodeURIComponent(params.categoria as string);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Capitalizar primera letra
  const categoryName = categoria.charAt(0).toUpperCase() + categoria.slice(1);

  // Filtrar proyectos por categoría
  const filteredProjects = portfolioData.projects.filter(
    project => project.category.toLowerCase() === categoria.toLowerCase()
  );

  // Prevenir scroll cuando el modal está abierto
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);


  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a] pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#212121] to-[#0a0a0a] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle, #02ff00 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }} />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl mx-auto"
            >
              <Link
                href="/portafolio"
                className="inline-flex items-center gap-2 mb-6 sm:mb-8 text-sm sm:text-base text-gray-400 hover:text-[#02ff00] transition-colors duration-300"
              >
                <span>←</span>
                <span>Volver a Categorías</span>
              </Link>
              <div className="mb-6 sm:mb-8">
                <span className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-[#02ff00]/10 border border-[#02ff00] rounded-full text-[#02ff00] text-sm sm:text-base font-semibold">
                  {categoryName}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight">
                {categoryName} <span className="text-[#02ff00] block sm:inline mt-2 sm:mt-0">Destacados</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400">
                {filteredProjects.length} proyecto{filteredProjects.length !== 1 ? 's' : ''} en esta categoría
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid - Tamaño Uniforme */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#0a0a0a]">
          <div className="container mx-auto px-4 sm:px-6">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-12 sm:py-20">
                <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 px-4">
                  No hay proyectos en esta categoría aún.
                </p>
                <Link
                  href="/portafolio"
                  className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[#02ff00] text-[#212121] rounded-full font-bold hover:bg-white transition-all duration-300 text-sm sm:text-base"
                >
                  Ver Todas las Categorías
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group relative overflow-hidden rounded-2xl bg-[#212121] border border-[#02ff00]/20 hover:border-[#02ff00] transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Image Container - Altura uniforme */}
                    <div className="relative h-72 sm:h-80 md:h-96 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`${project.title} - ${project.description}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        loading={index < 4 ? 'eager' : 'lazy'}
                        priority={index < 4}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#212121] via-[#212121]/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                      {/* Year Badge */}
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                        <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#212121]/80 backdrop-blur-sm text-[#02ff00] rounded-full text-xs font-bold border border-[#02ff00]/30">
                          {project.year}
                        </span>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-[#02ff00]/0 group-hover:bg-[#02ff00]/10 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="px-4 sm:px-6 py-2 sm:py-3 bg-[#02ff00] text-[#212121] rounded-full font-bold hover:bg-white transition-colors duration-300 text-sm sm:text-base transform scale-90 group-hover:scale-100">
                          Ver Detalles
                        </div>
                      </div>

                      {/* Title Overlay - Siempre visible en la parte inferior */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                        <h2 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 line-clamp-2 group-hover:text-[#02ff00] transition-colors duration-300">
                          {project.title}
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-300 line-clamp-1">
                          {project.client}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Modal/Popup - Layout Horizontal */}
        {isClient && (
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/95 z-50 overflow-y-auto"
                onClick={() => setSelectedProject(null)}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
              >
                <div className="min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-6 flex items-center justify-center">
                  <div className="container mx-auto max-w-6xl" onClick={(e) => e.stopPropagation()}>
                    {/* Close Button */}
                    <motion.button
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      onClick={() => setSelectedProject(null)}
                      className="fixed top-4 sm:top-8 right-4 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-[#02ff00] text-[#212121] rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold hover:bg-white transition-all duration-300 hover:scale-110 z-50 shadow-lg"
                      aria-label="Cerrar modal"
                    >
                      ✕
                    </motion.button>

                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gradient-to-br from-[#212121] to-[#1a1a1a] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#02ff00]/30 max-h-[90vh]"
                    >
                      {/* Layout Horizontal: Imagen | Detalles */}
                      <div className="flex flex-col lg:flex-row max-h-[90vh]">
                        {/* Imagen - Izquierda (scrollable si es muy larga) */}
                        <div className="relative w-full lg:w-1/2 flex-shrink-0 bg-[#0a0a0a] overflow-y-auto">
                          <div className="relative w-full min-h-[300px] sm:min-h-[400px]">
                            <Image
                              src={selectedProject.image}
                              alt={`${selectedProject.title} - ${selectedProject.description}`}
                              width={800}
                              height={800}
                              sizes="(max-width: 1024px) 100vw, 50vw"
                              className="w-full h-auto object-contain"
                              priority
                              style={{ maxHeight: 'none' }}
                            />
                          </div>

                          {/* Badges en la imagen */}
                          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex flex-wrap gap-2 sm:gap-3 z-10">
                            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#02ff00] text-[#212121] rounded-full text-xs sm:text-sm font-bold">
                              {selectedProject.category}
                            </span>
                            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-xs sm:text-sm font-semibold border border-white/20">
                              {selectedProject.year}
                            </span>
                          </div>
                        </div>

                        {/* Detalles - Derecha (scrollable) */}
                        <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center overflow-y-auto">
                          <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-4 sm:space-y-6"
                          >
                            <div>
                              <h2 id="modal-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                                {selectedProject.title}
                              </h2>

                              <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                                {selectedProject.description}
                              </p>
                            </div>

                            {/* Info Boxes */}
                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                              <div className="bg-[#0a0a0a] rounded-xl p-3 sm:p-4 border border-[#02ff00]/10">
                                <div className="text-xs text-gray-500 mb-1">Cliente</div>
                                <div className="text-sm sm:text-base font-semibold text-white truncate">{selectedProject.client}</div>
                              </div>
                              <div className="bg-[#0a0a0a] rounded-xl p-3 sm:p-4 border border-[#02ff00]/10">
                                <div className="text-xs text-gray-500 mb-1">Año</div>
                                <div className="text-sm sm:text-base font-semibold text-[#02ff00]">{selectedProject.year}</div>
                              </div>
                            </div>

                            {/* Services Tags */}
                            {selectedProject.services && selectedProject.services.length > 0 && (
                              <div>
                                <div className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">Servicios</div>
                                <div className="flex flex-wrap gap-2">
                                  {selectedProject.services.map((service: string, index: number) => (
                                    <span
                                      key={index}
                                      className="px-2 sm:px-3 py-1 sm:py-1.5 bg-[#02ff00]/10 text-[#02ff00] rounded-full text-xs border border-[#02ff00]/20"
                                    >
                                      {service}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
                              <a
                                href="/contacto"
                                className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#02ff00] text-[#212121] rounded-full font-bold hover:bg-white transition-all duration-300 hover:shadow-xl hover:shadow-[#02ff00]/50 hover:scale-105 text-xs sm:text-sm text-center"
                              >
                                Solicitar Proyecto Similar
                              </a>
                              <button
                                onClick={() => setSelectedProject(null)}
                                className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-[#02ff00]/30 text-gray-400 rounded-full font-bold hover:border-[#02ff00] hover:text-white transition-all duration-300 text-xs sm:text-sm text-center"
                              >
                                Cerrar
                              </button>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#212121] to-[#0a0a0a] relative overflow-hidden">
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
              className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#02ff00]/10 rounded-full blur-3xl"
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
                ¿Listo para tu <span className="text-[#02ff00]">Próximo Proyecto</span>?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 px-4">
                Trabajemos juntos para crear algo increíble. Contáctanos y recibe una cotización personalizada.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <a
                  href="/contacto"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-[#02ff00] text-[#212121] rounded-full font-bold hover:bg-white transition-all duration-300 hover:shadow-2xl hover:shadow-[#02ff00]/50 hover:scale-105 text-sm sm:text-base text-center"
                >
                  Solicitar Cotización Gratis
                </a>
                <Link
                  href="/portafolio"
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#02ff00] text-[#02ff00] rounded-full font-bold hover:bg-[#02ff00] hover:text-[#212121] transition-all duration-300 hover:scale-105 text-sm sm:text-base text-center"
                >
                  Ver Todas las Categorías
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
