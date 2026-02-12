import React, { useState, useEffect } from 'react';
import { POPULAR_COLLEGES, COUNTRY_ICONS } from '../constants.tsx';
import { 
  db, 
  collection, 
  getDocs, 
  query 
} from '../firebase.ts';

const PopularColleges: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'MBBS Abroad' | 'Study Abroad'>('MBBS Abroad');
  const [selectedCountry, setSelectedCountry] = useState('Russia');
  const [colleges, setColleges] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchColleges = async () => {
      setLoading(true);
      try {
        const q = query(collection(db, 'colleges'));
        const querySnapshot = await getDocs(q);
        const fetched = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() as any }));
        
        if (fetched.length > 0) {
          setColleges(fetched);
        } else {
          // Fallback
          const saved = JSON.parse(localStorage.getItem('iexplain_colleges') || '[]');
          setColleges(saved.length > 0 ? saved : POPULAR_COLLEGES);
        }
      } catch (error) {
        console.error("Colleges fetch error:", error);
        const saved = JSON.parse(localStorage.getItem('iexplain_colleges') || '[]');
        setColleges(saved.length > 0 ? saved : POPULAR_COLLEGES);
      } finally {
        setLoading(false);
      }
    };
    fetchColleges();
  }, []);

  // Get countries that have colleges for the current tab
  const availableCountries = React.useMemo(() => {
    const countriesWithColleges = new Set(
      colleges
        .filter(c => c.category === activeTab)
        .map(c => c.country)
    );
    
    return COUNTRY_ICONS.filter(country => countriesWithColleges.has(country.name));
  }, [colleges, activeTab]);

  // Auto-select first available country when tab changes
  useEffect(() => {
    if (availableCountries.length > 0) {
      // Check if current selected country is available in new tab
      const isCurrentCountryAvailable = availableCountries.some(c => c.name === selectedCountry);
      
      if (!isCurrentCountryAvailable) {
        // Select first available country
        setSelectedCountry(availableCountries[0].name);
      }
    }
  }, [activeTab, availableCountries]);

  const filteredColleges = colleges.filter(c => 
    c.category === activeTab && c.country === selectedCountry
  );

  return (
    <section className="py-16 bg-white dark:bg-slate-900 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-black text-brand-blue dark:text-white mb-6 tracking-tight">
            Popular <span className="text-brand-gold">Colleges</span>
          </h2>
          <div className="w-16 h-1 bg-brand-gold mb-8 mx-auto rounded-full"></div>
          
          {/* Main Tabs */}
          <div className="flex justify-center space-x-12 border-b border-gray-100 dark:border-slate-800 pb-4">
            {(['MBBS Abroad', 'Study Abroad'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-lg font-bold pb-4 relative transition-colors ${
                  activeTab === tab 
                  ? 'text-brand-gold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-gold' 
                  : 'text-gray-400 hover:text-brand-blue dark:hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Country Selector Slider */}
        <div className="relative mb-12">
          <div className="flex items-center justify-center space-x-8 overflow-x-auto no-scrollbar pb-6 px-4">
            {availableCountries.map((country) => (
              <button
                key={country.name}
                onClick={() => setSelectedCountry(country.name)}
                className={`flex flex-col items-center shrink-0 group transition-all ${
                  selectedCountry === country.name ? 'scale-110' : 'opacity-60 grayscale hover:opacity-100 hover:grayscale-0'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-3 transition-colors ${
                  selectedCountry === country.name ? 'bg-brand-gold text-white shadow-xl shadow-brand-gold/20' : 'bg-gray-100 dark:bg-slate-800 text-brand-blue dark:text-white'
                }`}>
                  <i className={country.icon}></i>
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest ${
                  selectedCountry === country.name ? 'text-brand-gold' : 'text-gray-500'
                }`}>
                  {country.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Colleges Grid */}
        {loading ? (
          <div className="flex justify-center py-20"><i className="fa-solid fa-spinner fa-spin text-4xl text-brand-gold"></i></div>
        ) : filteredColleges.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center animate-fade-in">
            {filteredColleges.map((college, i) => (
              <div key={i} className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 dark:border-slate-700 flex flex-col mx-auto w-full max-w-[300px]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={college.image} alt={college.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-5 text-center bg-gray-50 dark:bg-slate-800/50 border-t border-gray-100 dark:border-slate-700 mt-auto min-h-[80px] flex items-center justify-center">
                  <h3 className="text-sm font-bold text-brand-blue dark:text-white line-clamp-2">{college.name}</h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 dark:bg-slate-800/30 rounded-3xl border border-dashed border-gray-200 dark:border-slate-700">
            <i className="fa-solid fa-building-circle-exclamation text-4xl text-gray-300 mb-4"></i>
            <p className="text-gray-400 font-bold uppercase tracking-widest">No colleges found for this selection</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularColleges;