'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: 'Vectores',
      description: 'Diseños vectoriales escalables y profesionales para logotipos, ilustraciones y gráficos.',
      icon: '✏️',
      gradient: 'from-[#02ff00]/20 to-[#02ff00]/5',
    },
    {
      title: 'Fotografías',
      description: 'Edición fotográfica profesional, retoque y composición para resultados impactantes.',
      icon: '📸',
      gradient: 'from-[#02ff00]/20 to-[#02ff00]/5',
    },
    {
      title: 'Ilustraciones',
      description: 'Arte digital único y personalizado que da vida a tus ideas más creativas.',
      icon: '🎨',
      gradient: 'from-[#02ff00]/20 to-[#02ff00]/5',
    },
    {
      title: 'Portadas',
      description: 'Diseño de portadas llamativas para redes sociales, libros, álbumes y más.',
      icon: '🖼️',
      gradient: 'from-[#02ff00]/20 to-[#02ff00]/5',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="servicios" className="py-20 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #02ff00 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
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
            Servicios
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Soluciones <span className="text-[#02ff00]">Creativas</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ofrecemos diseño personalizado desde ilustraciones y logotipos hasta rediseños vectoriales y edición fotográfica
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative bg-[#212121] border border-[#02ff00]/20 rounded-2xl p-8 h-full hover:border-[#02ff00] transition-all duration-300">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl mb-6 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#02ff00] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  className="h-1 bg-[#02ff00] mt-6 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#212121] via-[#02ff00]/10 to-[#212121] rounded-2xl p-8 md:p-12 border border-[#02ff00]/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Necesitas algo más?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              También ofrecemos servicios de motion graphics, animación 3D, identidad visual y gestión de redes sociales
            </p>
            <a
              href="#contacto"
              className="inline-block px-8 py-4 bg-[#02ff00] text-[#212121] rounded-full font-semibold hover:bg-[#01cc00] transition-all duration-300 hover:shadow-lg hover:shadow-[#02ff00]/50 hover:scale-105"
            >
              Consultar Servicios
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
