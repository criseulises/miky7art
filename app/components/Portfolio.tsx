'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('Todos');

  const categories = ['Todos', 'Vectores', 'Fotografías', 'Ilustraciones', 'Portadas'];

  const projects = [
    {
      id: 1,
      title: 'Retrato Artístico',
      category: 'Fotografías',
      image: 'https://miky7art.lat/mikyart/wp-content/uploads/2025/12/a69e59169101179.644715bbb83cc-scaled.jpg',
      description: 'Edición fotográfica profesional con efectos artísticos',
    },
    {
      id: 2,
      title: 'Ilustración Digital',
      category: 'Ilustraciones',
      image: 'https://miky7art.lat/mikyart/wp-content/uploads/2025/12/ycy3-scaled.jpg',
      description: 'Arte digital personalizado con técnicas avanzadas',
    },
    {
      id: 3,
      title: 'Diseño de Portada',
      category: 'Portadas',
      image: 'https://miky7art.lat/mikyart/wp-content/uploads/2025/12/85-1-2048x1971.jpg',
      description: 'Portada creativa para redes sociales',
    },
    {
      id: 4,
      title: 'Logo Vectorial',
      category: 'Vectores',
      image: '/images/logo_miky7art.png',
      description: 'Diseño de identidad corporativa',
    },
    {
      id: 5,
      title: 'Símbolo Minimalista',
      category: 'Vectores',
      image: '/images/just_7logo.png',
      description: 'Logo minimalista y moderno',
    },
    {
      id: 6,
      title: 'Composición Fotográfica',
      category: 'Fotografías',
      image: 'https://miky7art.lat/mikyart/wp-content/uploads/2025/12/a69e59169101179.644715bbb83cc-scaled.jpg',
      description: 'Composición y retoque avanzado',
    },
  ];

  const filteredProjects = activeFilter === 'Todos'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portafolio" className="py-20 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#02ff00 1px, transparent 1px), linear-gradient(90deg, #02ff00 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#02ff00]/10 border border-[#02ff00] rounded-full text-[#02ff00] text-sm font-medium mb-4">
            Portafolio
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Nuestros <span className="text-[#02ff00]">Trabajos</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explora una selección de nuestros proyectos más destacados
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-[#02ff00] text-[#212121] shadow-lg shadow-[#02ff00]/50'
                  : 'bg-[#212121] text-gray-400 hover:text-white border border-[#02ff00]/20 hover:border-[#02ff00]'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-[#212121] border border-[#02ff00]/20 hover:border-[#02ff00] transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#212121] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 bg-[#02ff00] text-[#212121] rounded-full text-xs font-bold">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-[#02ff00]/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <motion.button
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-3 bg-[#02ff00] text-[#212121] rounded-full font-bold hover:bg-white transition-colors duration-300"
                  >
                    Ver Proyecto
                  </motion.button>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#02ff00] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {project.description}
                </p>
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

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#contacto"
            className="inline-block px-8 py-4 bg-transparent border-2 border-[#02ff00] text-[#02ff00] rounded-full font-semibold hover:bg-[#02ff00] hover:text-[#212121] transition-all duration-300 hover:shadow-lg hover:shadow-[#02ff00]/50 hover:scale-105"
          >
            Solicitar Cotización
          </a>
        </motion.div>
      </div>
    </section>
  );
}
