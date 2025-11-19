import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Rocket, PieChart } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Diagnóstico",
    desc: "Análise profunda dos dados atuais e gargalos."
  },
  {
    icon: Compass,
    title: "Estratégia",
    desc: "Planejamento tático com foco em 'low hanging fruits'."
  },
  {
    icon: Rocket,
    title: "Execução",
    desc: "Implementação ágil, automação e Vibe Coding."
  },
  {
    icon: PieChart,
    title: "Métricas",
    desc: "Análise de resultados e otimização contínua."
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 px-6 relative overflow-hidden">
        {/* Decoration Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/40 pointer-events-none"></div>
        
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Como Trabalhamos</h2>
          <p className="text-gray-400">
            Testes rápidos, MVPs e decisões baseadas em evidências.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center relative gap-8">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4"
            >
              <div className="w-20 h-20 rounded-full bg-[#0D0628] border-2 border-primary flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(138,43,226,0.3)]">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400 px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white/5 rounded-xl border border-white/5 backdrop-blur-sm">
                <h4 className="text-lg font-semibold text-white mb-2">Startups</h4>
                <p className="text-sm text-gray-400">Escalabilidade rápida e validação de hipóteses.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/5 backdrop-blur-sm">
                <h4 className="text-lg font-semibold text-white mb-2">ONGs</h4>
                <p className="text-sm text-gray-400">Maximização de impacto com recursos otimizados (Ad Grants).</p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/5 backdrop-blur-sm">
                <h4 className="text-lg font-semibold text-white mb-2">PMEs</h4>
                <p className="text-sm text-gray-400">Transformação digital e automação de vendas.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;