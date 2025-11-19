import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Database } from 'lucide-react';

const Founder: React.FC = () => {
  return (
    <section id="founder" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl overflow-hidden p-8 md:p-12 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/3 flex-shrink-0">
               <div className="relative w-64 h-64 mx-auto md:w-full md:h-auto md:aspect-square rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_30px_rgba(138,43,226,0.3)] group">
                  <img 
                    src="founder.png" 
                    alt="Foto do Fundador" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; // prevent loop
                        target.src = "https://placehold.co/400x400/100A23/FFFFFF?text=Foto+Fundador";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white font-semibold">CEO & Founder</span>
                  </div>
               </div>
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Conheça o Especialista</h2>
              <h3 className="text-primary text-xl font-medium mb-6">Visionário em Marketing e Tecnologia</h3>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Com mais de <strong className="text-white">17 anos de experiência</strong> em marketing digital e ciência de dados, 
                  nosso fundador combina expertise técnica com visão estratégica para entregar resultados excepcionais.
                </p>
                <p>
                  Especialista em desenvolvimento rápido com <strong className="text-white">IAs de Vibe Coding</strong> (Lovable, Bolt.new, Replit) e 
                  expert em <strong className="text-white">automação N8N workflows</strong> implementados com foco em vendas e relacionamento.
                </p>
                <p>
                  Possui uma combinação única de habilidades técnicas em desenvolvimento full-stack, IA e automação de processos, 
                  sempre com foco em entregas rápidas sem comprometer a qualidade.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-lg bg-primary/20 text-primary text-sm font-semibold border border-primary/30 flex items-center gap-2">
                    <Award size={16}/> 17+ Anos Exp
                </span>
                <span className="px-4 py-2 rounded-lg bg-blue-500/10 text-blue-400 text-sm font-semibold border border-blue-500/30 flex items-center gap-2">
                    <Zap size={16}/> Vibe Coding Expert
                </span>
                 <span className="px-4 py-2 rounded-lg bg-green-500/10 text-green-400 text-sm font-semibold border border-green-500/30 flex items-center gap-2">
                    <Database size={16}/> Data Science
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;