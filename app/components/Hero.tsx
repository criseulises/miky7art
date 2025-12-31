'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Ideas', 'Conceptos', 'Visiones', 'Sueños'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#02ff00 1px, transparent 1px),
            linear-gradient(90deg, #02ff00 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }} />
      </div>

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#02ff00]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#02ff00]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left space-y-8"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-5 py-2.5 bg-[#02ff00]/10 border border-[#02ff00]/50 rounded-full text-[#02ff00] text-sm font-semibold backdrop-blur-sm">
                ✨ Diseño Gráfico & Arte Digital
              </span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="block text-white mb-3">
                  Transformamos
                </span>
                <span className="block relative">
                  <motion.span
                    key={currentWord}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block text-[#02ff00] relative"
                  >
                    {words[currentWord]}
                    <motion.span
                      className="absolute -bottom-2 left-0 h-1 bg-[#02ff00]"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </motion.span>
                </span>
                <span className="block text-white mt-3">
                  en <span className="text-[#02ff00]">Arte</span>
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
            >
              Creamos{' '}
              <span className="text-[#02ff00] font-semibold">soluciones visuales únicas</span> que destacan por su
              originalidad y calidad. Desde ilustraciones cautivadoras hasta diseños vectoriales impecables
              y edición fotográfica de nivel profesional.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="/portafolio"
                className="group px-8 py-4 bg-[#02ff00] text-[#212121] rounded-full font-bold hover:bg-white transition-all duration-300 hover:shadow-2xl hover:shadow-[#02ff00]/50 hover:scale-105 flex items-center gap-2"
              >
                Ver Portafolio
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <a
                href="/contacto"
                className="px-8 py-4 border-2 border-[#02ff00] text-[#02ff00] rounded-full font-bold hover:bg-[#02ff00] hover:text-[#212121] transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                Solicitar Cotización
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 pt-8 max-w-lg mx-auto lg:mx-0"
            >
              {[
                { num: '100+', label: 'Proyectos Exitosos' },
                { num: '50+', label: 'Clientes Satisfechos' },
                { num: '5+', label: 'Años de Experiencia' }
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left group">
                  <motion.div
                    className="text-4xl md:text-5xl font-bold text-[#02ff00] mb-2 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.num}
                  </motion.div>
                  <div className="text-xs md:text-sm text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Logo Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex items-center justify-center h-[500px] lg:h-[600px]"
          >
            {/* Rotating Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute w-full h-full border-2 border-[#02ff00]/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
              className="absolute w-5/6 h-5/6 border-2 border-[#02ff00]/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute w-4/6 h-4/6 border border-[#02ff00]/40 rounded-full"
            />

            {/* Center Logo */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                filter: [
                  'drop-shadow(0 0 30px #02ff00)',
                  'drop-shadow(0 0 50px #02ff00)',
                  'drop-shadow(0 0 30px #02ff00)'
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10"
            >
              <Image
                src="/images/just_7logo.png"
                alt="Miky7Art Logo"
                width={350}
                height={350}
                className="w-72 h-72 md:w-80 md:h-80"
                priority
              />
            </motion.div>

            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#02ff00] rounded-full"
                animate={{
                  y: [0, -100, 0],
                  x: [0, Math.random() * 100 - 50, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 10}%`,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-7 h-12 border-2 border-[#02ff00] rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 16, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-3 bg-[#02ff00] rounded-full"
          />
        </div>
        <p className="text-[#02ff00] text-xs mt-2 font-medium">Scroll</p>
      </motion.div>
    </section>
  );
}
