import React, { useState, useEffect } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Sobre', href: '#about' },
  { label: 'Fundador', href: '#founder' },
  { label: 'Serviços', href: '#services' },
  { label: 'Processo', href: '#process' },
  { label: 'Cases', href: '#cases' },
  { label: 'Contato', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D0628]/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
            {/* Fallback Icon if image fails, but simulating logo logic */}
           <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(138,43,226,0.5)]">
              <TrendingUp className="text-white w-6 h-6" />
           </div>
           <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:text-primary transition-colors">
             Insight2Growth
           </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors hover:shadow-[0_0_10px_rgba(138,43,226,0.3)]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5521972474550"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-purple-600 transition-all hover:scale-105 shadow-[0_0_15px_rgba(138,43,226,0.5)]"
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0D0628]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-medium text-gray-200 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
             href="https://wa.me/5521972474550"
             className="mt-4 px-6 py-3 bg-primary text-center text-white rounded-xl font-semibold"
             onClick={() => setIsOpen(false)}
          >
            Fale Conosco
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;