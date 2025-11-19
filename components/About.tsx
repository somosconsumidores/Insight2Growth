import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const features = [
  "Decisões baseadas em Ciência de Dados",
  "Implementação de IA Generativa",
  "Método Científico de Testes (Growth)",
  "Desenvolvimento Ágil (Vibe Coding)",
  "Automação de Processos Complexos"
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-primary">Growth</span> além do "Hack"
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Na Insight2Growth, não acreditamos em "balas de prata". Nossa missão é construir 
              máquinas de crescimento sustentável. Combinamos a criatividade do marketing com o 
              rigor da ciência de dados e a velocidade da nova era de desenvolvimento assistido por IA.
            </p>
            <p className="text-gray-400">
              Nosso diferencial está na integração total entre tecnologia e estratégia. 
              Não somos apenas uma agência, somos o seu braço de tecnologia e growth.
            </p>
            
            <ul className="space-y-3 mt-6">
              {features.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10"></div>
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 relative overflow-hidden group hover:border-primary/50 transition-colors duration-500">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10"></div>
               <h3 className="text-2xl font-bold mb-4">Nosso DNA</h3>
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-black/20 border border-white/5 text-center">
                      <span className="block text-3xl font-bold text-primary mb-1">+17</span>
                      <span className="text-sm text-gray-400">Anos de XP</span>
                  </div>
                  <div className="p-4 rounded-xl bg-black/20 border border-white/5 text-center">
                      <span className="block text-3xl font-bold text-primary mb-1">100%</span>
                      <span className="text-sm text-gray-400">Data Driven</span>
                  </div>
                  <div className="p-4 rounded-xl bg-black/20 border border-white/5 text-center col-span-2">
                      <span className="block text-xl font-bold text-white mb-1">AI First</span>
                      <span className="text-sm text-gray-400">Vibe Coding & N8N</span>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;