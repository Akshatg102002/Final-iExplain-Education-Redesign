
import React, { useState, useEffect } from 'react';
import { db, collection, addDoc, serverTimestamp } from '../firebase.ts';

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

const ContactForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('Study Abroad');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    course: '',
    targetCountry: ''
  });

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
        source: 'Website Contact Form'
      });

      // Local fallback sync
      const existingLeads = JSON.parse(localStorage.getItem('iexplain_leads') || '[]');
      localStorage.setItem('iexplain_leads', JSON.stringify([{...formData, timestamp: new Date().toISOString()}, ...existingLeads]));

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', city: '', course: '', targetCountry: '' });
      }, 5000);
    } catch (error) {
      console.error("Error saving lead:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {submitted ? (
        <div className="text-center py-10 animate-fade-in">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fa-solid fa-check text-3xl"></i>
          </div>
          <h3 className="text-2xl font-bold text-brand-blue dark:text-white mb-2">Application Received!</h3>
          <p className="text-gray-500 text-base font-medium">An expert advisor will contact you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h3 className="text-3xl font-black text-brand-blue dark:text-white mb-2">Book Free Consultation</h3>
            <p className="text-gray-500 font-medium text-base mb-6">Select your preference and get expert guidance.</p>
            
            {/* Tabs */}
            <div className="flex bg-gray-100 dark:bg-slate-700 p-1 rounded-xl w-fit mb-6 overflow-x-auto max-w-full">
               {TABS.map(tab => (
                 <button
                   key={tab}
                   type="button"
                   onClick={() => setActiveTab(tab)}
                   className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                     activeTab === tab 
                     ? 'bg-white dark:bg-slate-600 text-brand-blue dark:text-white shadow-sm' 
                     : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'
                   }`}
                 >
                   {tab}
                 </button>
               ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="md:col-span-2">
              <input 
                type="text" 
                required 
                disabled={loading}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-6 py-4 rounded-xl border border-gray-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all font-medium text-sm" 
                placeholder="Full Name" 
              />
            </div>
            
            <input 
              type="email" 
              required 
              disabled={loading}
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-6 py-4 rounded-xl border border-gray-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all font-medium text-sm" 
              placeholder="Email Address" 
            />
            
            <input 
              type="tel" 
              required 
              disabled={loading}
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-6 py-4 rounded-xl border border-gray-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all font-medium text-sm" 
              placeholder="Phone Number" 
            />

            {/* City - Only for Study In India */}
            {activeTab === 'Study In India' && (
              <select 
                  value={formData.city}
                  onChange={e => setFormData({...formData, city: e.target.value})}
                  required
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all font-medium text-sm appearance-none"
              >
                  <option value="" disabled>Select City</option>
                  {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            )}

            <select 
                value={formData.course}
                onChange={e => setFormData({...formData, course: e.target.value})}
                required
                className="w-full px-6 py-4 rounded-xl border border-gray-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all font-medium text-sm appearance-none"
            >
                <option value="" disabled>Select Course</option>
                {COURSES[activeTab].map(c => <option key={c} value={c}>{c}</option>)}
            </select>

            <div className="md:col-span-2">
              <select 
                value={formData.targetCountry}
                disabled={loading || activeTab === 'Study In India'}
                onChange={(e) => setFormData({...formData, targetCountry: e.target.value})}
                className="w-full px-6 py-4 rounded-xl border border-gray-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all appearance-none font-medium text-sm disabled:opacity-70 disabled:bg-gray-100 dark:disabled:bg-slate-800"
              >
                {COUNTRIES[activeTab].map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-5 bg-brand-gold text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-xl shadow-brand-gold/20 flex items-center justify-center disabled:bg-gray-400"
          >
            {loading ? <i className="fa-solid fa-spinner fa-spin mr-2"></i> : null}
            {loading ? 'Processing...' : 'Submit Application'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
