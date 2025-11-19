import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, BarChart3, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      
      {/* Gradient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-900/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto text-center relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-medium uppercase tracking-wider text-gray-300">
              Inteligência Artificial + Dados + Growth
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Acelere com <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-primary to-pink-500">
               Vibe Coding e IA
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Consultoria de marketing que combina ciência de dados, IA, Vibe Coding,
            Automação e experimentação para escalar negócios com inteligência.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/5521972474550"
              className="group relative px-8 py-4 bg-primary rounded-full text-white font-bold text-lg shadow-[0_0_20px_rgba(138,43,226,0.4)] hover:shadow-[0_0_30px_rgba(138,43,226,0.6)] transition-all hover:scale-105 flex items-center gap-2 overflow-hidden"
            >
              <span className="relative z-10">Fale Conosco</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a href="#cases" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md text-white font-medium transition-all">
              Ver Cases
            </a>
          </div>
        </motion.div>

        {/* Floating Icons (Decorative) */}
        <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-10 top-1/3 hidden lg:block p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
        >
            <Code className="text-blue-400 w-8 h-8" />
        </motion.div>
        <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-10 top-1/4 hidden lg:block p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
        >
            <BarChart3 className="text-green-400 w-8 h-8" />
        </motion.div>
        <motion.div 
             animate={{ y: [0, -15, 0] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
             className="absolute right-20 bottom-0 hidden lg:block p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
        >
            <Cpu className="text-primary w-8 h-8" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;