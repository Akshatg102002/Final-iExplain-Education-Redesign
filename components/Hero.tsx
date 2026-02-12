
import React from 'react';
import { HERO_IMG_URL } from '../constants.tsx';

interface HeroProps {
  onStartAI: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartAI }) => {
  return (
    <section className="bg-white dark:bg-slate-900 pt-12 pb-20 lg:pt-24 lg:pb-32 border-b border-gray-100 dark:border-slate-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-light dark:bg-slate-800/20 -skew-x-12 transform translate-x-1/3 z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex lg:items-center lg:gap-24">

          <div className="lg:w-1/2 mb-16 lg:mb-0">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-brand-gold/10 rounded-full mb-8">
              <div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse"></div>
              <span className="text-brand-gold font-black text-[10px] uppercase tracking-[0.3em]">Opening Doors To Success</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-black text-brand-blue dark:text-white leading-[1.1] mb-10 tracking-tight">
              Explore Education <br />
              Beyond <span className="text-brand-gold">Borders.</span>
            </h1>

            <p className="text-lg text-gray-500 dark:text-gray-400 font-medium mb-12 max-w-xl leading-relaxed">
              Fulfill Your Study Abroad Dreams. One Platform Does It All. Connect with World Leading Universities for MBBS, Engineering, and more.
            </p>

            <div className="flex flex-wrap gap-6">
              <a
                href="#/contact"
                className="px-10 py-5 bg-brand-blue text-white rounded-[1.25rem] font-black text-xs uppercase tracking-widest hover:bg-brand-gold transition-all shadow-2xl shadow-brand-blue/30 flex items-center gap-4 group"
              >
                <i className="fa-solid fa-star group-hover:rotate-12 transition-transform duration-300"></i>
                Free Counseling Session
              </a>

            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 aspect-hero overflow-hidden rounded-[3rem] shadow-[0_48px_100px_rgba(2,56,90,0.15)] border-8 border-white dark:border-slate-800 bg-gray-50">
              <img
                src="https://images.unsplash.com/photo-1709054172839-17880c040f22?q=80&w=873&auto=format&fit=crop"
                alt="iExplain Education Success"
                className="w-full h-full object-cover transition-all duration-1000 hover:scale-110"
              />
            </div>
            {/* Float Badge */}
            <div className="absolute -bottom-10 -left-10 bg-brand-gold p-8 rounded-[2.5rem] text-white shadow-2xl z-20 animate-fade-in hidden sm:block">
              <p className="text-5xl font-black mb-1">20+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Global Destinations</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
