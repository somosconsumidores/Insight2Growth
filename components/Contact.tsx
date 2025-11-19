import React from 'react';
import { MessageSquare, Mail, MapPin, Smartphone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-primary/5 -z-10"></div>
      
      <div className="container mx-auto max-w-4xl">
        <div className="bg-[#0D0628]/80 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">Vamos Conversar?</h2>
            <p className="text-gray-300">
              Transforme a trajetória do seu negócio com estratégias baseadas em dados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">Canais Diretos</h3>
                
                <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary">
                        <Smartphone />
                    </div>
                    <a href="https://wa.me/5521972474550" className="text-lg">(21) 97247-4550</a>
                </div>
                
                 <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary">
                        <Mail />
                    </div>
                    <span className="text-lg">contato@insight2growth.com</span>
                </div>
                
                <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-primary/20 to-purple-900/20 border border-primary/20">
                    <p className="text-sm text-gray-300 italic">
                        "O melhor momento para plantar uma árvore foi há 20 anos. O segundo melhor momento é agora."
                    </p>
                </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Nome</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Mensagem</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-3 bg-primary hover:bg-purple-600 text-white font-bold rounded-lg shadow-[0_0_15px_rgba(138,43,226,0.4)] hover:shadow-[0_0_25px_rgba(138,43,226,0.6)] transition-all transform hover:scale-[1.02]"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;