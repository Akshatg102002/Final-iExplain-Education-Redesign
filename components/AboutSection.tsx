import React from 'react';
import { ABOUT_US_CONTENT, CORE_VALUES_FULL, TEAM_MEMBERS } from '../constants.tsx';

interface AboutSectionProps {
  compact?: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ compact = false }) => {
  
  // Compact version for homepage
  if (compact) {
    return (
      <section className="py-20 bg-gray-50 dark:bg-slate-900 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              About Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-brand-blue dark:text-white mb-6 tracking-tight">
              Transforming Dreams into <span className="text-brand-gold">Reality</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-medium max-w-3xl mx-auto leading-relaxed">
              {ABOUT_US_CONTENT.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {ABOUT_US_CONTENT.verticals.items.map((vertical, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-slate-700">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6">
                  <i className={`fa-solid ${idx === 0 ? 'fa-plane-departure' : 'fa-user-doctor'} text-2xl text-brand-gold`}></i>
                </div>
                <h3 className="text-xl font-black text-brand-blue dark:text-white mb-4">{vertical.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium leading-relaxed">{vertical.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="#/about" 
              className="inline-flex items-center px-8 py-4 bg-brand-blue text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-gold transition-all shadow-lg hover:shadow-xl"
            >
              Learn More About Us <i className="fa-solid fa-arrow-right ml-3"></i>
            </a>
          </div>
        </div>
      </section>
    );
  }

  // Full About Us page
  return (
    <div className="bg-white dark:bg-slate-900 font-sans">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-brand-blue to-brand-blue/80 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
              About <span className="text-brand-gold">iExplain Education</span>
            </h1>
            <p className="text-xl text-white/90 font-medium leading-relaxed">
              {ABOUT_US_CONTENT.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-800 p-10 md:p-16 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-slate-700 mb-16">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {ABOUT_US_CONTENT.mainContent.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-gray-600 dark:text-gray-300 font-medium leading-loose mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Verticals */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-black text-brand-blue dark:text-white text-center mb-12">
            {ABOUT_US_CONTENT.verticals.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ABOUT_US_CONTENT.verticals.items.map((vertical, idx) => (
              <div 
                key={idx} 
                className="group bg-gradient-to-br from-brand-blue to-brand-blue/90 text-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-brand-gold/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <i className={`fa-solid ${idx === 0 ? 'fa-plane-departure' : 'fa-user-doctor'} text-3xl text-brand-gold`}></i>
                  </div>
                  <h3 className="text-2xl font-black mb-4">{vertical.name}</h3>
                  <p className="text-white/90 font-medium leading-relaxed text-lg">{vertical.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="bg-gray-50 dark:bg-slate-800/50 p-10 md:p-16 rounded-[2.5rem] border border-gray-100 dark:border-slate-700 mb-20">
          <h2 className="text-3xl lg:text-4xl font-black text-brand-blue dark:text-white text-center mb-8">
            {ABOUT_US_CONTENT.services.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 font-medium leading-loose text-lg text-center max-w-4xl mx-auto mb-12">
            {ABOUT_US_CONTENT.services.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_US_CONTENT.services.addOns.map((service, idx) => (
              <div 
                key={idx} 
                className="flex items-start bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 bg-brand-gold/10 rounded-xl flex items-center justify-center mr-4 shrink-0">
                  <i className="fa-solid fa-check text-brand-gold text-lg"></i>
                </div>
                <p className="text-gray-700 dark:text-gray-200 font-bold text-sm">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Vision */}
            <div className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-slate-700">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center mr-4">
                  <i className="fa-solid fa-eye text-2xl text-brand-gold"></i>
                </div>
                <h3 className="text-2xl font-black text-brand-blue dark:text-white">Our Vision</h3>
              </div>
              <h4 className="text-xl font-bold text-brand-gold mb-6 leading-snug">
                {ABOUT_US_CONTENT.vision.title}
              </h4>
              {ABOUT_US_CONTENT.vision.text.split('\n\n').map((para, idx) => (
                <p key={idx} className="text-gray-600 dark:text-gray-300 font-medium leading-relaxed mb-4">
                  {para}
                </p>
              ))}
            </div>

            {/* Mission */}
            <div className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-slate-700">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center mr-4">
                  <i className="fa-solid fa-bullseye text-2xl text-brand-gold"></i>
                </div>
                <h3 className="text-2xl font-black text-brand-blue dark:text-white">Our Mission</h3>
              </div>
              <h4 className="text-xl font-bold text-brand-gold mb-6 leading-snug">
                {ABOUT_US_CONTENT.mission.title}
              </h4>
              <div className="space-y-6">
                {ABOUT_US_CONTENT.mission.points.map((point, idx) => (
                  <div key={idx}>
                    <h5 className="text-lg font-black text-brand-blue dark:text-white mb-2">
                      {point.heading}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-brand-blue dark:text-white mb-6">
              Our Core <span className="text-brand-gold">Values</span>
            </h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_VALUES_FULL.map((value, idx) => (
              <div 
                key={idx} 
                className="group bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all"
              >
                <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:scale-110 transition-all">
                  <i className={`${value.icon} text-2xl text-brand-gold group-hover:text-white transition-colors`}></i>
                </div>
                <h3 className="text-xl font-black text-brand-blue dark:text-white mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-blue/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-6">
              Meet Our <span className="text-brand-gold">Leadership Team</span>
            </h2>
            <p className="text-xl text-white/90 font-medium max-w-2xl mx-auto">
              Driving Success Through Collaboration and Innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <div 
                key={idx} 
                className="group bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2rem] hover:bg-white/20 transition-all text-center"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-brand-gold/30 group-hover:border-brand-gold transition-all">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-black mb-2">{member.name}</h3>
                <p className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4">{member.role}</p>
                <p className="text-white/80 font-medium leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-brand-blue dark:text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-medium mb-8">
            Get in touch with our expert counselors today and take the first step towards your dream education.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#/contact" 
              className="px-8 py-4 bg-brand-blue text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-gold transition-all shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
            <a 
              href="tel:+919773847799" 
              className="px-8 py-4 bg-white dark:bg-slate-800 text-brand-blue dark:text-white border-2 border-brand-blue dark:border-slate-700 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-all"
            >
              <i className="fa-solid fa-phone mr-2"></i> Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;