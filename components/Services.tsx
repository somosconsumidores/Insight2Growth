import React from 'react';
import { motion } from 'framer-motion';
import { 
  LineChart, 
  Target, 
  HeartHandshake, 
  Globe, 
  Cpu, 
  BarChart2 
} from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Planejamento de Marketing",
    icon: LineChart,
    description: "Estratégias completas alinhadas aos objetivos de negócio para crescimento escalável."
  },
  {
    title: "Gestão de Tráfego Pago",
    icon: Target,
    description: "Otimização de campanhas em Google Ads, Meta Ads e LinkedIn Ads com foco em ROI."
  },
  {
    title: "Google Ad Grants",
    icon: HeartHandshake,
    description: "Consultoria especializada para ONGs obterem e manterem subsídios de publicidade do Google."
  },
  {
    title: "Sites e Landing Pages",
    icon: Globe,
    description: "Desenvolvimento de alta performance focado em conversão e experiência do usuário."
  },
  {
    title: "Micro SaaS e Produtos Digitais",
    icon: Cpu,
    description: "Criação de MVPs e produtos digitais utilizando Vibe Coding para validação rápida."
  },
  {
    title: "Data Analytics e Dashboards",
    icon: BarChart2,
    description: "Implementação de cultura de dados com dashboards intuitivos para tomada de decisão."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-6 bg-[#0D0628]">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Nossas Soluções</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Um ecossistema completo de serviços para levar sua empresa do ponto A ao ponto B, usando o melhor da tecnologia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/5 border border-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-900 to-primary flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(138,43,226,0.6)] transition-shadow">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;