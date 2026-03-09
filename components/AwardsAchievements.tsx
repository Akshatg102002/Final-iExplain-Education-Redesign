
import React from 'react';

const AwardsAchievements: React.FC = () => {
  // Placeholder images for certificates - replace with actual certificate URLs
  const certificates = [
    "https://socialfoundationindia.org/wp-content/uploads/2026/03/C3.jpeg",
    "https://socialfoundationindia.org/wp-content/uploads/2026/03/C2.jpeg",
    "https://socialfoundationindia.org/wp-content/uploads/2026/03/C1.jpeg",
    "https://socialfoundationindia.org/wp-content/uploads/2026/03/C4.jpeg"
  ];

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 p-4 rounded-[2rem] shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center"
            >
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 dark:bg-slate-700">
                <img 
                  src={cert} 
                  alt={`Certificate ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsAchievements;
