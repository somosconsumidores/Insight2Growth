import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { CaseStudy } from '../types';

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Somos Consumidores",
    url: "https://somosconsumidores.com.br",
    description: "Portal de defesa do consumidor com alto tráfego orgânico e automação de leads.",
    image: "https://placehold.co/600x400/1a1a2e/FFF?text=Somos+Consumidores"
  },
  {
    id: 2,
    title: "Dívida Zero",
    url: "https://divida-zero.com",
    description: "Plataforma de negociação de dívidas com interface intuitiva e alta conversão.",
    image: "https://placehold.co/600x400/1a1a2e/FFF?text=Divida+Zero"
  },
  {
    id: 3,
    title: "Biblioteca-IA",
    url: "https://biblioteca-ia.com.br",
    description: "Hub de conhecimento sobre Inteligência Artificial com curadoria automatizada.",
    image: "https://placehold.co/600x400/1a1a2e/FFF?text=Biblioteca+IA"
  },
  {
    id: 4,
    title: "BioPeak",
    url: "https://biopeak-ai.com",
    description: "Solução healthtech utilizando IA para análise preditiva de saúde.",
    image: "https://placehold.co/600x400/1a1a2e/FFF?text=BioPeak"
  }
];

const Cases: React.FC = () => {
  return (
    <section id="cases" className="py-20 px-6 bg-gradient-to-b from-[#0D0628] to-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Cases de Sucesso</h2>
          <p className="text-gray-400">Projetos que transformam ideias em realidade digital.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((project) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group block bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md hover:border-primary/50 transition-all shadow-lg"
            >
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={20} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;