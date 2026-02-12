
import React, { useEffect, useState } from 'react';
import { db, collection, addDoc, serverTimestamp } from '../firebase.ts';
import { LOGO_URL } from '../constants.tsx';

interface ContactModalProps {
  onClose: () => void;
}

const CITIES = [
  "New Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad", "Kolkata", "Pune", 
  "Ahmedabad", "Jaipur", "Lucknow", "Patna", "Dehradun", "Kota", "Chandigarh", 
  "Indore", "Bhopal", "Nagpur", "Other"
];

const TABS = ['Study Abroad', 'MBBS Abroad', 'Study In India'] as const;
type TabType = typeof TABS[number];

const COURSES: Record<TabType, string[]> = {
  'Study Abroad': ["MBA/Management", "Engineering (B.Tech/MS)", "Science", "Arts & Humanities", "Medical (Non-MBBS)", "Other"],
  'MBBS Abroad': ["MBBS", "BDS", "Pharmacy", "Nursing"],
  'Study In India': ["MBBS", "B.Tech/Engineering", "MBA/PGDM", "MD/MS", "BBA", "BCA", "Other"]
};

const COUNTRIES: Record<TabType, string[]> = {
  'Study Abroad': ["USA", "UK", "Canada", "Australia", "Germany", "Ireland", "New Zealand", "Dubai", "Singapore"],
  'MBBS Abroad': ["Russia", "Georgia", "Kazakhstan", "Kyrgyzstan", "Uzbekistan", "Philippines", "Bangladesh", "Nepal", "Egypt"],
  'Study In India': ["India"]
};

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<TabType>('Study Abroad');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    course: '',
    targetCountry: ''
  });

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Set default country/course when tab changes
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      course: '',
      targetCountry: COUNTRIES[activeTab][0]
    }));
  }, [activeTab]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, 'leads'), {
        ...formData,
        category: activeTab,
        timestamp: serverTimestamp(),
        source: 'Popup Modal'
      });
      setSubmitted(true);
      setTimeout(() => {
        onClose();
        setSubmitted(false); // Reset if reopened quickly
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={handleOverlayClick}
    >
      <div className="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-slate-700 flex flex-col max-h-[95vh]">
        
        {/* Compact Header */}
        <div className="bg-[#01304A] p-5 flex items-center justify-between shrink-0">
           <div className="flex items-center gap-4">
              <img src="https://www.iexplaineducation.com/wp-content/uploads/2023/04/Logo-2-scaled-e1684926432756-768x307.jpg" alt="Logo" className="h-auto w-20" />
              <div className="h-6 w-px bg-white/20"></div>
              <div>
                 <h2 className="text-lg font-black text-white leading-none mb-1">Unlock Your College Journey</h2>
                 <p className="text-[10px] text-white/70 font-medium uppercase tracking-wider">Free Counselling & Support</p>
              </div>
           </div>
           <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#01304A] transition-all"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center animate-fade-in">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <i className="fa-solid fa-check text-2xl"></i>
              </div>
              <h3 className="text-2xl font-black text-[#01304A] dark:text-white mb-1">Thank You!</h3>
              <p className="text-gray-500 font-medium text-sm">We will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
               
              {/* Tabs */}
              <div className="flex bg-gray-50 dark:bg-slate-800 p-1 rounded-xl w-full">
                  {TABS.map(tab => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-2 rounded-lg text-[11px] font-black uppercase tracking-wide transition-all ${
                        activeTab === tab 
                        ? 'bg-[#01304A] text-white shadow-md' 
                        : 'text-gray-500 hover:text-[#01304A] dark:text-gray-400'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
              </div>

              {/* Inputs Grid - Compact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-sm font-medium focus:ring-1 focus:ring-[#BB962C] focus:border-[#BB962C] outline-none"
                  />
                  
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-sm font-medium focus:ring-1 focus:ring-[#BB962C] focus:border-[#BB962C] outline-none"
                  />
                  
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    required
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-sm font-medium focus:ring-1 focus:ring-[#BB962C] focus:border-[#BB962C] outline-none"
                  />
                  
                  {activeTab === 'Study In India' && (
                    <select 
                      value={formData.city}
                      onChange={e => setFormData({...formData, city: e.target.value})}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-sm font-medium focus:ring-1 focus:ring-[#BB962C] focus:border-[#BB962C] outline-none appearance-none"
                    >
                      <option value="" disabled>Select City</option>
                      {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  )}

                  <select 
                    value={formData.course}
                    onChange={e => setFormData({...formData, course: e.target.value})}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-sm font-medium focus:ring-1 focus:ring-[#BB962C] focus:border-[#BB962C] outline-none appearance-none"
                  >
                    <option value="" disabled>Select Course</option>
                    {COURSES[activeTab].map(c => <option key={c} value={c}>{c}</option>)}
                  </select>

                  <select 
                    value={formData.targetCountry}
                    onChange={e => setFormData({...formData, targetCountry: e.target.value})}
                    required
                    disabled={activeTab === 'Study In India'}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-sm font-medium focus:ring-1 focus:ring-[#BB962C] focus:border-[#BB962C] outline-none appearance-none disabled:opacity-50"
                  >
                    {COUNTRIES[activeTab].map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-3.5 bg-[#BB962C] hover:bg-[#a68525] text-white rounded-xl font-black text-sm uppercase tracking-widest shadow-lg shadow-orange-900/10 transition-all flex items-center justify-center disabled:opacity-70 mt-2"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <i className="fa-solid fa-spinner fa-spin"></i> Processing...
                  </span>
                ) : (
                  "Get Started Now"
                )}
              </button>

              {/* Footer Text */}
              <div className="text-[10px] text-center text-gray-400 dark:text-gray-500 leading-relaxed pt-2">
                By submitting, you agree to our <a href="#/terms-conditions" onClick={onClose} className="underline hover:text-[#01304A] dark:hover:text-white">Terms</a> & <a href="#/privacy-policy" onClick={onClose} className="underline hover:text-[#01304A] dark:hover:text-white">Privacy Policy</a>.
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
