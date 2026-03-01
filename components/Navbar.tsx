
import React, { useState, useEffect, useRef } from 'react';
import { LOGO_URL, MEGA_MENU_DATA, OFFICE_ADDRESSES } from '../constants.tsx';
import * as Flags from 'country-flag-icons/react/3x2';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  logoUrl?: string;
}

const FlagIcon: React.FC<{ code?: string }> = ({ code }) => {
  if (!code) return null;
  const Flag = (Flags as any)[code];
  return Flag ? <Flag className="w-6 h-auto rounded-sm shadow-sm" /> : null;
};

// Helper for distance calculation
function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}

const TopBar: React.FC = () => {
  const [showFindUs, setShowFindUs] = useState(false);
  const [offices, setOffices] = useState(OFFICE_ADDRESSES);
  const [locating, setLocating] = useState(false);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowFindUs(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLocateMe = () => {
    setLocating(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });

          // Sort offices by distance
          const sorted = [...OFFICE_ADDRESSES].map(office => {
            const dist = getDistanceFromLatLonInKm(latitude, longitude, office.lat, office.lng);
            return { ...office, distance: dist };
          }).sort((a, b) => a.distance - b.distance);

          setOffices(sorted);
          setLocating(false);
        },
        (error) => {
          console.error("Error locating user", error);
          alert("Could not access location. Please enable permissions.");
          setLocating(false);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
      setLocating(false);
    }
  };

  return (
    <div className="bg-[#01304a] py-2 border-b border-white/5 block relative z-[201]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 items-center text-white text-[10px] font-bold h-full">
        {/* Left Side: Locate Office */}
        <div className="flex items-center justify-start relative" ref={dropdownRef}>
            <button 
              onClick={() => setShowFindUs(!showFindUs)} 
              className="flex items-center space-x-2 hover:text-brand-gold transition-colors tracking-widest uppercase bg-transparent p-0 rounded-lg whitespace-nowrap"
            >
              <Flags.IN className="w-3.5 h-auto rounded-sm" />
              <span>Locate Office</span>
              <i className={`fa-solid fa-chevron-down text-[7px] transition-transform ${showFindUs ? 'rotate-180' : ''}`}></i>
            </button>
            
            {showFindUs && (
              <div className="absolute top-full left-0 mt-3 w-64 bg-white text-brand-blue rounded-xl shadow-2xl overflow-hidden z-[300] border border-gray-100 animate-fade-in text-left">
                <div className="p-3 bg-gray-50 border-b border-gray-100">
                  <button 
                    onClick={handleLocateMe}
                    disabled={locating}
                    className="w-full flex items-center justify-center space-x-2 bg-brand-blue text-white py-2 rounded-lg text-[9px] uppercase tracking-widest hover:bg-brand-gold transition-colors disabled:opacity-70"
                  >
                    {locating ? <i className="fa-solid fa-spinner fa-spin"></i> : <i className="fa-solid fa-location-crosshairs"></i>}
                    <span>{locating ? 'Locating...' : 'Use My Location'}</span>
                  </button>
                </div>
                <div className="max-h-60 overflow-y-auto">
                  {offices.map((off: any) => (
                    <a key={off.slug} href={`#/office/${off.slug}`} onClick={() => setShowFindUs(false)} className="block px-4 py-3 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors border-b border-gray-50 last:border-0">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue">{off.city}</span>
                        {off.distance && <span className="text-[8px] font-bold text-gray-400">{(off.distance).toFixed(1)} km</span>}
                      </div>
                      <p className="text-[9px] text-gray-500 mt-0.5 truncate">{off.address}</p>
                    </a>
                  ))}
                </div>
              </div>
            )}
        </div>
        
        {/* Right Side: Socials & Phone */}
        <div className="flex items-center justify-end space-x-4">
          {/* Social Icons */}
          <div className="flex items-center space-x-3 text-white/80">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors hover:scale-110"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors hover:scale-110"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors hover:scale-110"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors hover:scale-110"><i className="fa-brands fa-youtube"></i></a>
          </div>

          <div className="h-3 w-px bg-white/10 hidden sm:block"></div>

          {/* Phone Link - Icon Only on Mobile, Full on Desktop */}
          <a href="tel:+919773847799" className="flex items-center space-x-2 hover:text-brand-gold transition-colors shrink-0">
            <i className="fa-solid fa-phone text-brand-gold text-[10px]"></i>
            <span className="tracking-widest hidden sm:inline">+91 97738 47799</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme, logoUrl }) => {
  const [activeTab, setActiveTab] = useState<keyof typeof MEGA_MENU_DATA>("STUDY ABROAD");
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsMegaOpen(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = window.setTimeout(() => setIsMegaOpen(false), 200);
  };

  const sidebarIcons: Record<string, string> = {
    "STUDY ABROAD": "fa-solid fa-earth-americas",
    "MBBS ABROAD": "fa-solid fa-stethoscope",
    "STUDY IN INDIA": "fa-solid fa-building-columns",
    "ENTRANCE EXAMS": "fa-solid fa-file-signature"
  };

  return (
    <div className="sticky top-0 z-[200] w-full bg-white dark:bg-slate-900 shadow-sm border-b border-gray-100 dark:border-slate-800">
      <TopBar />
      <nav className="relative h-20 w-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-between">
          <div className="flex-shrink-0 cursor-pointer w-[140px] md:w-[180px]" onClick={() => window.location.hash = '/'}>
            <img src={logoUrl || LOGO_URL} alt="iExplain" className="h-10 md:h-12 w-auto dark:brightness-110" />
          </div>

          <div className="hidden lg:flex flex-grow justify-center h-full items-center space-x-8 xl:space-x-10">
            {['HOME', 'ABOUT', 'PROGRAMS', 'SERVICES', 'BLOGS', 'CONTACT'].map(name => (
              <div key={name} className="h-20 flex items-center" 
                onMouseEnter={name === 'PROGRAMS' ? handleMouseEnter : undefined} 
                onMouseLeave={name === 'PROGRAMS' ? handleMouseLeave : undefined}>
                <a href={name === 'PROGRAMS' ? undefined : name === 'HOME' ? '#' : `#/${name.toLowerCase()}`} 
                  className={`text-[11px] font-bold tracking-[0.15em] transition-all py-2 border-b-2 border-transparent hover:border-brand-gold ${name === 'PROGRAMS' && isMegaOpen ? 'text-brand-gold border-brand-gold' : 'text-brand-blue dark:text-white hover:text-brand-gold'}`}>
                  {name} {name === 'PROGRAMS' && <i className="fa-solid fa-chevron-down ml-1.5 text-[8px]"></i>}
                </a>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4 w-auto lg:w-[180px] justify-end flex-shrink-0">
            <button onClick={toggleTheme} className="w-9 h-9 rounded-full bg-gray-50 dark:bg-slate-800 flex items-center justify-center text-brand-blue dark:text-brand-gold border border-gray-100 dark:border-slate-700">
              <i className={`fa-solid ${isDarkMode ? 'fa-sun text-sm' : 'fa-moon text-sm'}`}></i>
            </button>
            <a href="#contact" className="hidden sm:inline-block px-5 py-2.5 bg-brand-blue text-white rounded-xl font-bold text-[10px] tracking-widest uppercase hover:bg-brand-gold transition-all shadow-md active:scale-95">APPLY NOW</a>
            <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 text-brand-blue dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
              <i className="fa-solid fa-bars text-xl"></i>
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu */}
        {isMegaOpen && (
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="absolute top-full inset-x-0 w-full flex justify-center z-[300]">
            <div className="w-[95%] max-w-5xl bg-white dark:bg-slate-900 shadow-[0_30px_80px_-10px_rgba(0,0,0,0.25)] border border-gray-100 dark:border-slate-800 rounded-[2rem] mt-3 overflow-hidden animate-fade-in flex flex-col">
              <div className="flex h-[360px]">
                <div className="w-64 bg-slate-50/60 dark:bg-slate-800/40 p-5 border-r border-gray-100 dark:border-slate-800 flex flex-col">
                  <div className="space-y-1">
                    {Object.keys(MEGA_MENU_DATA).map(tab => (
                      <button key={tab} onMouseEnter={() => setActiveTab(tab as any)} className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl font-black text-[9px] uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-white dark:bg-slate-700 text-brand-gold shadow-md ring-1 ring-gray-100 dark:ring-slate-600 translate-x-1' : 'text-gray-400 hover:text-brand-blue hover:bg-white/50 dark:hover:bg-slate-800'}`}>
                        <div className="flex items-center space-x-3"><i className={`${sidebarIcons[tab]} text-xs opacity-70`}></i><span>{tab}</span></div>
                        <i className="fa-solid fa-chevron-right text-[7px]"></i>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex-grow p-8 grid grid-cols-3 gap-4 overflow-y-auto no-scrollbar">
                  {MEGA_MENU_DATA[activeTab].map((item: any, i) => (
                    <a key={i} href={item.link} onClick={() => setIsMegaOpen(false)} className="flex items-center p-4 rounded-2xl border border-gray-50 dark:border-slate-800 bg-white dark:bg-slate-800 hover:border-brand-gold/30 hover:shadow-xl transition-all group">
                      <div className="mr-4 shrink-0 transition-transform group-hover:scale-110">{item.code ? <FlagIcon code={item.code} /> : <i className={`${item.icon} text-brand-gold text-lg`}></i>}</div>
                      <div className="flex flex-col"><h4 className="font-bold text-[13px] text-brand-blue dark:text-white group-hover:text-brand-gold transition-colors leading-tight">{item.name}</h4><span className="text-[8px] font-black uppercase text-gray-400 tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Explore Country</span></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[400] bg-white dark:bg-slate-900 overflow-y-auto lg:hidden animate-fade-in">
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
               <div className="w-[140px]">
                 <img src={logoUrl || LOGO_URL} alt="Logo" className="w-full h-auto dark:brightness-110" />
               </div>
               <button onClick={() => setIsMobileMenuOpen(false)} className="w-12 h-12 rounded-full bg-gray-50 dark:bg-slate-800 flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors">
                 <i className="fa-solid fa-xmark text-xl"></i>
               </button>
            </div>
            
            <div className="space-y-2">
              {['HOME', 'ABOUT', 'SERVICES', 'BLOGS', 'CONTACT'].map(item => (
                <a 
                  key={item}
                  href={item === 'HOME' ? '#' : `#/${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-4 text-2xl font-black text-brand-blue dark:text-white uppercase tracking-tight border-b border-gray-50 dark:border-slate-800 hover:text-brand-gold transition-colors"
                >
                  {item}
                </a>
              ))}
              
              <div className="pt-8 pb-10">
                 <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Educational Programs</p>
                 <div className="space-y-6">
                   {Object.keys(MEGA_MENU_DATA).map(key => (
                     <div key={key}>
                       <p className="font-black text-brand-gold text-sm uppercase tracking-widest mb-3 flex items-center">
                         <i className={`${sidebarIcons[key]} mr-2`}></i> {key}
                       </p>
                       <div className="pl-6 space-y-3 border-l-2 border-gray-100 dark:border-slate-800">
                         {MEGA_MENU_DATA[key as keyof typeof MEGA_MENU_DATA].slice(0, 5).map((subItem: any, i: number) => (
                           <a key={i} href={subItem.link} onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-brand-blue dark:hover:text-white transition-colors">
                             {subItem.name}
                           </a>
                         ))}
                       </div>
                     </div>
                   ))}
                 </div>
              </div>

              <div className="pb-8">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full py-5 bg-brand-blue text-white text-center rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-brand-blue/20">
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
