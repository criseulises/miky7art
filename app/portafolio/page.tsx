'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import portfolioData from '../data/portfolio.json';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PortafolioPage() {
  // Contar proyectos por categoría
  const getCategoryCount = (category: string) => {
    return portfolioData.projects.filter(project => project.category === category).length;
  };

  // Obtener imagen de preview para cada categoría
  const getCategoryImage = (category: string) => {
    const project = portfolioData.projects.find(p => p.category === category);
    return project?.image || '/images/logo_miky7art.png';
  };

  // Filtrar categorías (sin "Todos")
  const categories = portfolioData.categories.filter(cat => cat !== 'Todos');

  // Descripciones SEO para cada categoría
  const categoryDescriptions: { [key: string]: string } = {
    'Vectores': 'Diseños vectoriales profesionales, logos y gráficos escalables',
    'Fotografías': 'Edición fotográfica profesional y retoque artístico',
    'Ilustraciones': 'Ilustraciones digitales únicas y arte conceptual',
    'Portadas': 'Diseño de portadas creativas para redes sociales y medios digitales'
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a] pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#212121] to-[#0a0a0a] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle, #02ff00 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }} />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 sm:px-5 py-2 sm:py-2.5 bg-[#02ff00]/10 border border-[#02ff00] rounded-full text-[#02ff00] text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                Nuestro Trabajo
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 px-4">
                Portafolio <span className="text-[#02ff00]">Creativo</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 px-4">
                Explora nuestras categorías de diseño. Cada proyecto refleja nuestra pasión por el arte y la atención al detalle.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#0a0a0a]">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            >
              {categories.map((category, index) => (
                <motion.article
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-2xl bg-[#212121] border border-[#02ff00]/20 hover:border-[#02ff00] transition-all duration-300"
                >
                  <Link
                    href={`/portafolio/${category.toLowerCase()}`}
                    aria-label={`Ver ${getCategoryCount(category)} proyectos de ${category}`}
                  >
                    {/* Image Container */}
                    <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                      <Image
                        src={getCategoryImage(category)}
                        alt={`${category} - ${categoryDescriptions[category]}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        priority={index < 2}
                        loading={index < 2 ? 'eager' : 'lazy'}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#212121] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                      {/* Count Badge */}
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                        <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#02ff00] text-[#212121] rounded-full text-xs font-bold">
                          {getCategoryCount(category)} Proyecto{getCategoryCount(category) !== 1 ? 's' : ''}
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
                          <div className="px-4 sm:px-6 py-2 sm:py-3 bg-[#02ff00] text-[#212121] rounded-full font-bold hover:bg-white transition-colors duration-300 text-sm sm:text-base">
                            Ver Proyectos
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6">
                      <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white group-hover:text-[#02ff00] transition-colors duration-300">
                        {category}
                      </h2>
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {categoryDescriptions[category]}
                      </p>
                    </div>

                    {/* Decorative Line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.4 }}
                      className="h-1 bg-gradient-to-r from-[#02ff00] to-transparent"
                    />
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

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
                <a
                  href="/servicios"
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#02ff00] text-[#02ff00] rounded-full font-bold hover:bg-[#02ff00] hover:text-[#212121] transition-all duration-300 hover:scale-105 text-sm sm:text-base text-center"
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
