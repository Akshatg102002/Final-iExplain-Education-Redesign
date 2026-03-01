
import React from 'react';
import { AWARDS_ACHIEVEMENTS } from '../home_content.ts';

const AwardsAchievements: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            Recognition
          </span>
          <h2 className="text-3xl lg:text-5xl font-black text-brand-blue dark:text-white mb-6 tracking-tight">
            Awards & <span className="text-brand-gold">Achievements</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Our dedication to excellence has been recognized by leading organizations in the education sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {AWARDS_ACHIEVEMENTS.map((award) => (
            <div
              key={award.id}
              className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold text-4xl mb-6">
                <i className={award.icon}></i>
              </div>
              <h3 className="text-xl font-bold text-brand-blue dark:text-white mb-2">{award.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-widest">
                {award.organization}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsAchievements;
