import React from 'react';

interface AboutSectionProps {
  compact?: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ compact = false }) => {

  const ABOUT_US_CONTENT = {
    intro: `Welcome to iExplain Education. With our extensive industry experience, we have witnessed the unfortunate reality of admission counselors succumbing to management pressure, prioritizing their favorite universities solely for profit, and disregarding the student's profile. In response, we established our organization with the mission to offer students Authentic insights, Accurate information, and Comprehensive guidance.

Unlike other education consultants, iExplain Education takes a student-centric approach, considering their individual needs, strengths, and weaknesses. The focus is on providing personalized guidance and support to ensure the best possible outcomes for the student's educational journey.
`,

    vision: {
      title: 'Opening Doors to a World of Possibilities: Your Pathway to Success',
      text: `We believe in the power of dreams. Our vision is to fuel your ambitions, inspire your imagination, and provide unwavering support as you take bold steps towards realizing your dreams.

We envision a future where every student receives personalized guidance, enabling them to make informed decisions and pursue the best educational opportunities.

We strive to be a trusted partner, providing comprehensive support, expert advice, and valuable insights to help students navigate the complex landscape of education.

Through our services, we aim to transform lives, shape successful careers, and contribute to the growth and overall development of students.`
    },

    mission: {
      title: 'Empowering Minds, Transforming Futures: Our Mission, Your Success',
      points: [
        {
          title: 'Personalized Guidance',
          desc: 'Our mission is to understand your unique aspirations, strengths, and challenges. We provide personalized guidance, offering tailored solutions that meet your specific needs and goals.'
        },
        {
          title: 'Expert Advice',
          desc: 'Our mission is to be your trusted source of knowledge and expertise. We stay updated with the latest trends to provide accurate and relevant information for informed decisions.'
        },
        {
          title: 'Your Success',
          desc: 'We aim to be the catalyst for your success, helping you shape a brighter future filled with endless possibilities.'
        }
      ]
    }
  };

  const CORE_VALUES_FULL = [
    { title: 'Integrity', desc: 'We uphold the highest ethical standards, ensuring transparency, honesty, and fairness.' },
    { title: 'Student-Centered Approach', desc: 'We prioritize individual student needs, aspirations, and well-being.' },
    { title: 'Trust', desc: 'We build strong relationships by delivering on promises and acting in students’ best interests.' },
    { title: 'Professionalism', desc: 'We maintain high standards with experienced and knowledgeable counsellors.' },
    { title: 'Collaboration', desc: 'We work closely with students, parents, and institutions for successful journeys.' },
    { title: 'Long-Term Relationships', desc: 'We support students throughout their educational journey and celebrate achievements.' }
  ];

  const TEAM_MEMBERS = [
    { name: 'Sunil Baranwal', role: 'Director', image: 'https://via.placeholder.com/300' },
    { name: 'Sushant Gupta', role: 'Director', image: 'https://via.placeholder.com/300' },
    { name: 'Sakshi Agarwal', role: 'Director', image: 'https://via.placeholder.com/300' }
  ];

  return (
    <div className="bg-white dark:bg-slate-900 font-sans">
      {/* Introduction */}
      <section id="about" className="py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-start">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                Who We Are
              </div>
              <h2 className="text-3xl lg:text-5xl font-black text-brand-blue dark:text-white mb-8 uppercase tracking-tight">
                Transforming Dreams <span className="text-brand-gold">Into Reality</span>
              </h2>
              <div className="prose prose-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed whitespace-pre-line">
                {ABOUT_US_CONTENT.intro}
              </div>
            </div>
            
            <div className="mt-16 lg:mt-0 relative">
               <div className="aspect-[4/5] overflow-hidden rounded-[3rem] bg-gray-100 relative shadow-2xl border-8 border-white dark:border-slate-800">
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
                    alt="iExplain Team" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 to-transparent flex flex-col justify-end p-10">
                    <p className="text-white text-lg font-bold italic">"Authentic insights, Accurate information, and Comprehensive guidance."</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {!compact && (
        <>
          {/* Vision & Mission */}
          <section className="py-12 bg-brand-light dark:bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-slate-700 relative overflow-hidden group">
                  <h3 className="text-2xl font-black text-brand-blue dark:text-white mb-6 uppercase tracking-tight flex flex-col items-center text-center">
                    <i className="fa-solid fa-eye text-brand-gold mb-3 text-2xl"></i>
                    Our Vision
                  </h3>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">{ABOUT_US_CONTENT.vision.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium whitespace-pre-line">
                    {ABOUT_US_CONTENT.vision.text}
                  </p>
                </div>

                <div className="bg-brand-blue p-10 rounded-[2.5rem] shadow-xl border border-brand-blue/50 text-white relative overflow-hidden">
                  <h3 className="text-2xl font-black mb-6 uppercase tracking-tight flex flex-col items-center text-center">
                    <i className="fa-solid fa-bullseye text-brand-gold mb-3 text-2xl"></i>
                    Our Mission
                  </h3>
                  <h4 className="text-lg font-bold mb-6">{ABOUT_US_CONTENT.mission.title}</h4>
                  <div className="space-y-6">
                    {ABOUT_US_CONTENT.mission.points.map((point, idx) => (
                      <div key={idx}>
                        <h5 className="font-black text-brand-gold text-sm uppercase tracking-widest mb-2">{point.title}</h5>
                        <p className="text-white/80 text-sm leading-relaxed">{point.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-black text-brand-blue dark:text-white mb-6 uppercase tracking-tight">Core <span className="text-brand-gold">Values</span></h2>
              <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CORE_VALUES_FULL.map((val, idx) => (
                <div key={idx} className="p-8 bg-white dark:bg-slate-800 rounded-[2rem] border border-gray-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold text-xl mb-6 mx-auto group-hover:bg-brand-gold group-hover:text-white transition-colors">
                    <i className={`fa-solid ${idx % 2 === 0 ? 'fa-star' : 'fa-heart'}`}></i>
                  </div>
                  <h4 className="text-lg font-black text-brand-blue dark:text-white uppercase tracking-tight mb-3 text-center">{val.title}</h4>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 leading-relaxed text-center">{val.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="py-16 bg-gray-50 dark:bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-5xl font-black text-brand-blue dark:text-white mb-6 uppercase tracking-tight">Leadership <span className="text-brand-gold">Team</span></h2>
                <p className="text-gray-500 dark:text-gray-400 font-bold max-w-2xl mx-auto">
                  "Meet Our Dynamic Team of Experts: Driving Success Through Collaboration and Innovation"
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {TEAM_MEMBERS.map((member, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-slate-700 text-center group hover:shadow-2xl transition-all">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-lg mb-6 group-hover:scale-110 transition-transform">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-black text-brand-blue dark:text-white mb-1">{member.name}</h3>
                    <p className="text-brand-gold font-bold text-xs uppercase tracking-widest">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default AboutSection;
