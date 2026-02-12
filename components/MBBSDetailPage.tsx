
import React from 'react';
import { MBBSDetailData } from '../types.ts';
import ContactForm from './ContactForm.tsx';

interface MBBSDetailPageProps {
  data: MBBSDetailData;
}

const MBBSDetailPage: React.FC<MBBSDetailPageProps> = ({ data }) => {
  if (!data) return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8 animate-fade-in bg-white dark:bg-slate-900">
      <div className="w-24 h-24 bg-brand-light dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 animate-pulse">
        <i className="fa-solid fa-user-doctor text-4xl text-brand-gold"></i>
      </div>
      <h2 className="text-3xl font-black text-brand-blue dark:text-white mb-4">Program Details Updating</h2>
      <p className="text-gray-500 font-medium max-w-md">We are currently curating the comprehensive guide for this program.</p>
      <button onClick={() => window.location.hash = '#/contact'} className="mt-8 px-8 py-4 bg-brand-blue text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-brand-gold transition-all">Contact Us</button>
    </div>
  );

  return (
    <div className="bg-white dark:bg-slate-900 pb-20 animate-fade-in font-sans">
      {/* Hero Banner */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={data.heroImage} className="w-full h-full object-cover" alt={data.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 mt-32 animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-lg">{data.title}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
           <div className="lg:w-1/2 relative">
              <h2 className="text-3xl font-black text-brand-blue dark:text-white mb-6 text-center lg:text-left">{data.title}</h2>
              <div 
                className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 font-medium leading-loose whitespace-pre-line text-justify"
                dangerouslySetInnerHTML={{ __html: data.intro.text }}
              />
              {/* WhatsApp Float for this section */}
              <a href="https://wa.me/919773847799" target="_blank" rel="noreferrer" className="absolute -left-16 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 transition-transform hidden xl:flex">
                 <i className="fa-brands fa-whatsapp"></i>
              </a>
           </div>
           <div className="lg:w-1/2">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 rotate-2 hover:rotate-0 transition-transform duration-500">
                 <img src={data.intro.image} alt="Intro" className="w-full h-auto" />
              </div>
           </div>
        </div>

        {/* Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {data.highlights.map((highlight, idx) => (
             <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-slate-700 text-center hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-lg font-black text-brand-blue dark:text-white mb-3 uppercase tracking-tight">{highlight.title}</h3>
                <div className="w-12 h-1 bg-brand-gold mx-auto mb-4 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">{highlight.value}</p>
             </div>
           ))}
        </div>

        {/* Top Universities */}
        <div className="bg-[#022c4a] rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
           <h2 className="text-3xl font-black text-center mb-12 relative z-10">
             {data.title} - Top Ranked Universities 2025
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 relative z-10">
              {data.topUniversities.map((uni, idx) => (
                <div key={idx} className="flex items-center space-x-3 py-2 border-b border-white/10 last:border-0">
                   <div className="w-2 h-2 bg-brand-gold rounded-full flex-shrink-0"></div>
                   <span className="text-sm font-bold text-white/90 hover:text-brand-gold transition-colors cursor-pointer">{uni}</span>
                </div>
              ))}
           </div>
        </div>

        {/* Facts */}
        <div>
           <h2 className="text-3xl font-black text-brand-blue dark:text-white mb-8 text-center">Facts About Country</h2>
           <p className="text-center max-w-3xl mx-auto text-gray-600 dark:text-gray-400 font-medium mb-10">{data.facts.intro}</p>
           <div className="bg-[#fcf8ed] dark:bg-slate-800/50 p-10 rounded-[2.5rem] border border-brand-gold/20">
              <ul className="space-y-4">
                 {data.facts.list.map((fact, idx) => (
                   <li key={idx} className="flex items-start">
                      <i className="fa-solid fa-angles-right text-brand-gold mt-1 mr-4 text-xs"></i>
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm leading-relaxed">{fact}</span>
                   </li>
                 ))}
              </ul>
           </div>
        </div>

        {/* Documents Required */}
        <div>
           <h2 className="text-3xl font-black text-brand-blue dark:text-white mb-12 text-center">Documents Required</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {data.documents.map((doc, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 flex flex-col items-center text-center hover:shadow-xl transition-shadow group">
                   <div className="w-16 h-16 mb-4 flex items-center justify-center text-3xl text-brand-gold group-hover:scale-110 transition-transform">
                      <i className={doc.icon}></i>
                   </div>
                   <p className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">{doc.label}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Advantages */}
        <div>
           <h2 className="text-3xl font-black text-brand-blue dark:text-white mb-10 text-center">Advantages of Study {data.title}</h2>
           <div className="space-y-4">
              {data.advantages.map((adv, idx) => (
                <div key={idx} className="flex items-center p-5 bg-white dark:bg-slate-800 border-l-4 border-brand-gold rounded-r-xl shadow-sm hover:translate-x-2 transition-transform">
                   <i className="fa-solid fa-arrow-right text-brand-gold mr-4"></i>
                   <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{adv}</span>
                </div>
              ))}
           </div>
        </div>

        {/* Student Life */}
        <div className="pb-10">
           <h2 className="text-3xl font-black text-brand-blue dark:text-white mb-6 text-center">Student Life</h2>
           <p className="text-center max-w-3xl mx-auto text-gray-600 dark:text-gray-400 font-medium mb-10">{data.studentLife.intro}</p>
           <ul className="space-y-5">
              {data.studentLife.list.map((item, idx) => (
                <li key={idx} className="flex items-start pb-5 border-b border-gray-100 dark:border-slate-800 last:border-0 last:pb-0">
                   <div className="bg-brand-gold/10 w-8 h-8 rounded-lg flex items-center justify-center text-brand-gold mr-4 shrink-0">
                      <i className="fa-solid fa-pen-fancy text-xs"></i>
                   </div>
                   <span className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed text-sm">{item}</span>
                </li>
              ))}
           </ul>
        </div>

        {/* Inline Contact Form */}
        <div className="bg-brand-blue p-8 md:p-12 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-black mb-4">Start Your Journey Today</h3>
                <p className="text-white/80 font-medium mb-8">Get expert counseling for {data.title} and secure your seat in top government universities.</p>
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-white"><i className="fa-solid fa-phone"></i></div>
                      <div><p className="text-[10px] font-bold uppercase tracking-widest text-white/60">Call Us</p><p className="font-bold">+91 97738 47799</p></div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-white"><i className="fa-solid fa-envelope"></i></div>
                      <div><p className="text-[10px] font-bold uppercase tracking-widest text-white/60">Email Us</p><p className="font-bold">info@iexplaineducation.in</p></div>
                    </div>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                  <ContactForm />
              </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default MBBSDetailPage;
