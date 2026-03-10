
import { Destination, Office, Blog, Testimonial, College, CollegeDetailData, ProgramDetailData, MBBSDetailData, StudyIndiaDetailData, Service } from './types';
export { MBBS_ABROAD_DETAILED } from './mbbs_data.ts';
export { STUDY_ABROAD_DETAILED } from './studyAbroad_Data.ts';

export const LOGO_URL = "https://www.iexplaineducation.com/wp-content/uploads/2023/04/Logo-2-scaled-e1684926432756-768x307.jpg";
export const HERO_IMG_URL = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200";

export const PRIVACY_POLICY_CONTENT = `
<h3>1. Introduction</h3>
<p>Welcome to iExplain Education. We value your privacy and are committed to protecting your personal data. This privacy policy explains how we handle your personal information when you visit our website or use our services.</p>
<p>We collect basic information such as name, email, and phone number when you fill out forms on our site. This is used solely to provide counseling services.</p>
`;

export const TERMS_CONTENT = `
<h3>1. Acceptance of Terms</h3>
<p>By accessing and using the iExplain Education website and services, you agree to be bound by these Terms and Conditions.</p>
<p>All content provided is for informational purposes. We strive for accuracy but cannot guarantee admission as it depends on university criteria.</p>
`;

export const OFFICE_ADDRESSES: Office[] = [
  { 
    state: "Uttar Pradesh", 
    city: "Noida (HQ)", 
    slug: "noida-hq",
    address: "#301, World Trade Tower (WTT), Sector 16, Noida - 201301", 
    phone: "+91 97738 47799", 
    lat: 28.5708, 
    lng: 77.3260,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.957388755013!2d77.3235652755026!3d28.571068875701777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce50742d4a53d%3A0xc682914104085489!2sWave%20Silver%20Tower!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  { state: "Uttarakhand", city: "Dehradun", slug: "dehradun", address: "3rd Floor, Puspa Tower, 52 Subhash Road, Dehradun", phone: "+91 97738 47799", lat: 30.3165, lng: 78.0322 },
  { state: "Maharashtra", city: "Pune", slug: "pune", address: "601, Karan Victoria, Shivaji Nagar, Pune - 411005", phone: "+91 97738 47799", lat: 18.5204, lng: 73.8567 },
  { state: "Rajasthan", city: "Kota", slug: "kota", address: "Pratham Residency, New Jawahar Nagar, Kota, Rajasthan", phone: "+91 97738 47799", lat: 25.2138, lng: 75.8648 },
  { state: "Bihar", city: "Patna", slug: "patna", address: "3rd Floor, Sudama Bhawan, Hira Panna Lane, Boring Road, Patna", phone: "+91 97738 47799", lat: 25.5941, lng: 85.1376 }
];

export const FOOTER_COLLEGES = {
  mbbs: [
    { country: 'Russia', code: 'RU', names: ['Kazan Federal University', 'Bashkir State Medical University', 'Orenburg State Medical University', 'Crimea Federal University', 'First Moscow State Medical University'] },
    { country: 'Georgia', code: 'GE', names: ['Tbilisi State Medical University', 'Batumi Shota Rustaveli State University', 'David Tvildiani Medical University', 'European University Georgia'] },
    { country: 'Kazakhstan', code: 'KZ', names: ['Al-Farabi Kazakh National University', 'Kazakh National Medical University', 'Astana Medical University', 'South Kazakhstan Medical Academy'] },
    { country: 'Kyrgyzstan', code: 'KG', names: ['Osh State University', 'Jalal-Abad State University', 'International School of Medicine', 'Asian Medical Institute'] },
    { country: 'Uzbekistan', code: 'UZ', names: ['Tashkent Medical Academy', 'Samarkand State Medical University', 'Bukhara State Medical Institute', 'Andijan State Medical Institute'] },
    { country: 'China', code: 'CN', names: ['Nanjing Medical University', 'Jilin University', 'China Medical University', 'Dalian Medical University'] },
    { country: 'Nepal', code: 'NP', names: ['Tribhuvan University', 'Kathmandu University', 'B.P. Koirala Institute', 'Patan Academy of Health Sciences'] },
    { country: 'Bangladesh', code: 'BD', names: ['Dhaka National Medical College', 'Bangladesh Medical College', 'Jahurul Islam Medical College', 'Holy Family Red Crescent Medical College'] },
    { country: 'Romania', code: 'RO', names: ['Carol Davila University', 'Grigore T. Popa University', 'Iuliu Hatieganu University', 'Ovidius University'] },
    { country: 'Serbia', code: 'RS', names: ['University of Belgrade', 'University of Novi Sad', 'University of Nis', 'University of Kragujevac'] }
  ],
  study: [
    { country: 'Ireland', code: 'IE', names: ['Trinity College Dublin', 'University College Dublin', 'Dublin City University', 'University of Limerick'] },
    { country: 'USA', code: 'US', names: ['Northeastern University', 'Arizona State University', 'New York University', 'University of Texas at Austin'] },
    { country: 'UK', code: 'GB', names: ['University of Leeds', 'University of Manchester', 'University of Birmingham', 'University of Warwick'] },
    { country: 'Australia', code: 'AU', names: ['University of Melbourne', 'Monash University', 'University of Sydney', 'Deakin University'] },
    { country: 'New Zealand', code: 'NZ', names: ['University of Auckland', 'University of Otago', 'Victoria University of Wellington', 'Auckland University of Technology'] },
    { country: 'Canada', code: 'CA', names: ['University of Toronto', 'University of British Columbia', 'McGill University', 'York University'] },
    { country: 'UAE', code: 'AE', names: ['University of Birmingham Dubai', 'Middlesex University Dubai', 'Heriot-Watt University Dubai', 'Manipal Academy Dubai'] },
    { country: 'Europe Top Destinations', code: 'EU', names: ['Germany', 'Italy', 'France', 'Malta', 'Netherlands', 'Poland'] }
  ],
  mbbs_india: [
    { country: 'North India', code: 'IN', names: ['Uttar Pradesh', 'Haryana', 'Delhi', 'Uttarakhand', 'Himachal Pradesh'] },
    { country: 'Central & West India', code: 'IN', names: ['Rajasthan', 'Maharashtra', 'Madhya Pradesh'] },
    { country: 'East & South India', code: 'IN', names: ['Bihar', 'Karnataka'] }
  ]
};

const generatePlaceholder = (name: string, type: string) => ({
  name, location: 'Global Campus', type: 'Public/Private', established: '1900s',
  image: 'https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&q=80&w=1200',
  intro: `${name} is a premier institution known for its academic excellence.`,
  highlights: ['World Class Infrastructure', 'Global Recognition'],
  eligibility: ['10+2 with 50% Marks', 'Valid Passport'],
  admissionProcess: ['Submit Application', 'Document Verification'],
  documents: ['Passport', 'Transcripts'],
  fees: { structure: [{ label: 'Tuition Fee', value: 'Contact for details' }], note: 'Fees subject to change.' },
  courses: [type === 'MBBS Abroad' ? 'MBBS' : 'Undergraduate Programs'],
  studentLife: ['Sports Complex', 'Library'],
  placements: ['Global Career Opportunities'],
  gallery: []
});

const DETAILED_COLLEGES: Record<string, CollegeDetailData> = {
  "kazan-federal-university": {
    name: "Kazan Federal University",
    location: "Kazan, Russia",
    type: "Public Federal University",
    established: "1804",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200",
    intro: "Kazan Federal University (KFU) is one of the oldest universities in Russia...",
    highlights: ["2nd Oldest University in Russia", "WHO & NMC Recognized"],
    eligibility: ["Minimum 50% marks in PCB", "NEET Qualified"],
    admissionProcess: ["Application", "Admission Letter"],
    documents: ["10th & 12th Marksheets", "Passport"],
    fees: { structure: [{ label: "Tuition Fee", value: "468,000 RUB" }], note: "Exchange rate fluctuates." },
    courses: ["MBBS"],
    studentLife: ["Hostels", "Sports"],
    placements: ["FMGE/NExT eligible"],
    gallery: ["https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600"]
  },
  "northeastern-university": {
    name: "Northeastern University",
    location: "Boston, Massachusetts, USA",
    type: "Private Research University",
    established: "1898",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=1200",
    intro: "Northeastern University is a top-tier private research university...",
    highlights: ["#1 in Co-op", "Tier 1 Research"],
    eligibility: ["High School Diploma", "GPA 3.0+"],
    admissionProcess: ["Common App", "Fee Payment"],
    documents: ["Transcripts", "SOP"],
    fees: { structure: [{ label: "Tuition", value: "$60,000/year" }], note: "Varies by program" },
    courses: ["CS", "Business"],
    studentLife: ["300+ Orgs"],
    placements: ["High Employability"],
    gallery: ["https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=600"]
  }
};

const allMbbsNames = FOOTER_COLLEGES.mbbs.flatMap(c => c.names);
const allStudyNames = FOOTER_COLLEGES.study.flatMap(c => c.names);
const allIndiaNames = FOOTER_COLLEGES.mbbs_india.flatMap(c => c.names);

allMbbsNames.forEach(name => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  if (!DETAILED_COLLEGES[slug]) DETAILED_COLLEGES[slug] = generatePlaceholder(name, 'MBBS Abroad');
});
allStudyNames.forEach(name => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  if (!DETAILED_COLLEGES[slug]) DETAILED_COLLEGES[slug] = generatePlaceholder(name, 'Study Abroad');
});
allIndiaNames.forEach(name => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  if (!DETAILED_COLLEGES[slug]) DETAILED_COLLEGES[slug] = generatePlaceholder(name, 'MBBS India');
});

export const COLLEGE_DETAILS = DETAILED_COLLEGES;

export const ABOUT_US_CONTENT = { intro: `Welcome to iExplain Education...`, vision: { title: "Opening Doors...", text: "..." }, mission: { title: "Empowering Minds...", points: [] } };
export const CORE_VALUES_FULL = [{ title: "Integrity", desc: "..." }];
export const TEAM_MEMBERS = [{ name: "Sunil Baranwal", role: "Director", image: "https://ui-avatars.com/api/?name=Sunil+Baranwal" }];

export const INDIA_COURSES_DETAILED: Record<string, StudyIndiaDetailData> = {
  "mbbs": {
    title: "Study MBBS in India for Indian Students : MBBS Fees & MBBS Admission in India",
    heroImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1600",
    intro: "MBBS in India is one of the highly preferred courses by medical aspirants worldwide. The strong education structure, sincere professors, and top-hole medical universities in India are paving the way for success. To secure admission for MBBS courses in India, the aspirants are required to appear in NEET. A healthy and peaceful environment in India helps the students to acquire knowledge more quickly. MBBS in India demands a student to get at least 50% in the 10+2 examinations. The duration of MBBS courses in India is 5.5 years. If you are thinking of earning an MBBS degree from a recognized university, India is a great choice. WHO, NMC, and UNESCO approve all the top medical colleges in India.",
    why: {
      title: "Why MBBS in India?",
      points: [
        "Medical universities in India are some of the finest and prominent ones in the world.",
        "There are over 600+ medical universities and colleges in India. Out of these, around 200+ are private colleges.",
        "There is a total of approximately 1,05,000 seats available in India.",
        "MBBS in India is ranked higher due to its excellence in research and training programs.",
        "Indian medical colleges are famous for providing excellent clinical knowledge and expertise.",
        "Students have the advantage of attending international seminars and conferences.",
        "The syllabus followed in Indian medical college is of global standard.",
        "Students are free to practice in any part of the world after MBBS from India.",
        "Students get to practice on actual human bodies."
      ]
    },
    duration: {
      title: "Duration of MBBS in India",
      cards: [
        "MBBS in India has a tenure of 5.5 years. It includes 4.5 years of classroom study, and the last year is for an internship.",
        "For a postgraduate program, you will need a time of 3 years.",
        "Diploma courses take two years to conclude.",
        "Other specialization programs take specific times."
      ]
    },
    eligibility: {
      title: "Eligibility Criteria for MBBS in India",
      points: [
        "The candidate must be of 17 years of age at the time of MBBS admission in India.",
        "The candidate must not exceed the age of 25 years.",
        "The medical candidate needs to score 50% marks in 12th grade for general category students. Reserved category candidates must achieve a minimum of 40%.",
        "For AIIMS, the percentage is 60% and 45% for SC/ST and OBC.",
        "A medical candidate must have the primary subjects in 12th grade should be Physics, Chemistry, and Biology.",
        "NEET is mandatory."
      ]
    },
    documents: {
      title: "Documents Required for MBBS in India",
      subtitle: "Medical candidate must keep all the following documents ready for seeking MBBS admission in India:",
      points: [
        "Medical candidates must possess valid mark sheets of class 10th and class 12th.",
        "NEET scorecard is an essential requirement for getting admission to MBBS India.",
        "Medical candidates must possess a valid school transfer certificate, code of conduct certificate, medical certificate, health check-up certificate, and no criminal record certificate.",
        "The students should have a caste certificate indicating that the medical candidate belongs to SC/ST/OBC.",
        "Medical candidate needs to show parents' bank statement, which indicates that he/she will be able to pay the fees required during admission."
      ]
    },
    process: {
      title: "Process of Admission for MBBS in India",
      steps: [
        "You must complete Class XII with Physics, Chemistry, and Biology.",
        "The student must qualify in NEET for admission in MBBS.",
        "After qualifying for the NEET exam, students must appear for counseling."
      ]
    },
    economical: {
      title: "Economical MBBS India",
      points: [
        "India offers an economical MBBS if the medical student can clear the NEET exam, which is mandatory.",
        "For private medical colleges, the medical candidate must spend at least 50 lakhs to 60 lakhs.",
        "As the set trend, universities abroad offer a more economical program.",
        "For the NRI students, the structure of fees in India may vary.",
        "If the international students want more detailed information, they must contact the Indian Embassy for more accurate and correct information.",
        "Insurance in India will cost you 5,000 INR to 15,000 INR per year.",
        "The medical check-up will cost the student 20,000 INR to 30,000 INR per year.",
        "The cost of food will be around 10,000 INR to 20,000 INR per year.",
        "Hostel fees may differ for various colleges, but it varies from 70,000 INR to 1,00,000 INR annually."
      ]
    },
    advantages: {
      title: "Advantages of MBBS in India",
      points: [
        "India is ranked among the top medical, educational facilities in the world.",
        "During MBBS in India, students get to learn about tropical diseases. They study some of the rare diseases which don't exist in other foreign countries.",
        "At the time of internships during MBBS in India, medical students get to face a real-life experience.",
        "Every state has state-funded medical universities.",
        "The Indian MBBS degree is accepted worldwide.",
        "Exams like IELTS & TOEFL are not required.",
        "India is a populated country, the need for doctor increase by the day.",
        "Students get to experience modern technologies of medical science.",
        "There are excellent postgraduate and specialization opportunities."
      ]
    },
    international: {
      title: "MBBS in India for International Applicants",
      points: [
        "Govt. of India has some reservations of seats for the Non-resident Indian (NRI) students and the students arriving from other countries.",
        "Even NRI medical students can bag admissions in private and govt institutions.",
        "NRI students can apply through the offices of diplomatic consultants, which are available in India.",
        "Indian Embassy can offer more accurate and exact information needed by the NRI students.",
        "In some situations, entrance tests are not required by NRI students.",
        "Reserved NRI quota seats, which offer admission to International students.",
        "In the NRI quota, too, the seats are allotted based on merit and performance.",
        "Fees structure may vary for the NRI students in the medical council-approved colleges."
      ]
    },
    dates: {
      title: "Imperative Dates for MBBS in India",
      points: [
        "NEET Entrance Test: National Eligibility cum Entrance Test.",
        "The medical candidate is free to apply for Indian medical universities in June and July.",
        "The academic year for MBBS in India starts in September or October."
      ]
    },
    govt: {
      title: "Why Pick Govt. Medical Universities in India?",
      points: [
        "Indian Govt. universities charge low fees.",
        "Admissions in Govt. colleges in India are possible by clearing the NEET exam.",
        "The quality of medical education provided in Govt. medical colleges in India is excellent.",
        "The professors teaching in the medical field are knowledgeable and experienced, which gives a plus point to the students studying."
      ]
    },
    explore: {
      title: "Explore Beautiful India",
      points: [
        "Delhi is the capital of India.",
        "The official language is Hindi.",
        "More than 80% of India's population speak English.",
        "The currency of India is Indian Rupee (INR).",
        "India shares its boundary with China, Pakistan, Nepal, Myanmar, Afghanistan, and Bhutan.",
        "In India, the weather is tropical monsoon climate and tropical wet and dry climate.",
        "The population in India is approx. 133.92 crores.",
        "India has the largest postal network across the globe, having more than 1 55,015 post offices.",
        "India is known for organizing the largest gathering of people, Kumbh Mela."
      ]
    }
  }
};

export const MEGA_MENU_DATA = {
  "STUDY ABROAD": [
    { name: "USA", link: "/study-abroad/usa", code: "US" },
    { name: "UK", link: "/study-abroad/uk", code: "GB" },
    { name: "Canada", link: "/study-abroad/canada", code: "CA" },
    { name: "Australia", link: "/study-abroad/australia", code: "AU" },
    { name: "New Zealand", link: "/study-abroad/new-zealand", code: "NZ" },
    { name: "Dubai", link: "/study-abroad/dubai", code: "AE" },
    { name: "Europe", link: "/study-abroad/europe", code: "EU" }
  ],
  "MBBS ABROAD": [
    { name: "Eastern Europe", link: "/mbbs-abroad/eastern-europe", code: "EU" },
    { name: "Central Asia", link: "/mbbs-abroad/central-asia", code: "KZ" },
    { name: "Philippines", link: "/mbbs-abroad/philippines", code: "PH" },
    { name: "Bangladesh", link: "/mbbs-abroad/bangladesh", code: "BD" },
    { name: "Nepal", link: "/mbbs-abroad/nepal", code: "NP" },
    { name: "China", link: "/mbbs-abroad/china", code: "CN" },
    { name: "Egypt", link: "/mbbs-abroad/egypt", code: "EG" }
  ],
  "STUDY IN INDIA": [
    { name: "MBBS", link: "/study-india/mbbs", icon: "fa-solid fa-user-doctor" },
    { name: "B.Tech", link: "/study-india/btech", icon: "fa-solid fa-microchip" },
    { name: "MBA", link: "/study-india/mba", icon: "fa-solid fa-briefcase" },
    { name: "BBA", link: "/study-india/bba", icon: "fa-solid fa-chart-line" },
    { name: "PGDM", link: "/study-india/pgdm", icon: "fa-solid fa-graduation-cap" }
  ],
  "ENTRANCE EXAMS": [
    { name: "NEET UG", link: "/exams/neet-ug", icon: "fa-solid fa-file-medical" },
    { name: "JEE Main", link: "/exams/jee-main", icon: "fa-solid fa-calculator" },
    { name: "CAT", link: "/exams/cat", icon: "fa-solid fa-chart-pie" },
    { name: "CLAT", link: "/exams/clat", icon: "fa-solid fa-scale-balanced" },
    { name: "CUET", link: "/exams/cuet", icon: "fa-solid fa-pen-to-square" }
  ]
};

export const STUDENT_SERVICES_DATA = [
  { id: "counseling", title: "Career Counseling", icon: "fa-solid fa-comments", desc: "Expert guidance to choose the right path." },
  { id: "admission", title: "Admission Guidance", icon: "fa-solid fa-university", desc: "Step-by-step assistance for admission." },
  { id: "visa", title: "Visa Assistance", icon: "fa-solid fa-passport", desc: "Hassle-free visa application process." },
  { id: "loan", title: "Education Loan", icon: "fa-solid fa-money-check-dollar", desc: "Financial support for your education." }
];

export const BLOG_POSTS = [
  { id: "1", title: "Top 10 Universities in USA", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600", date: "Oct 10, 2023", excerpt: "Discover the best universities in the USA for international students." },
  { id: "2", title: "MBBS in Russia: A Complete Guide", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600", date: "Sep 25, 2023", excerpt: "Everything you need to know about studying MBBS in Russia." }
];

export const EXAMS_DETAILED = {
  "neet-ug": { title: "NEET UG", heroImage: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=1200", intro: "National Eligibility cum Entrance Test...", syllabus: {} }
};

export const ROADMAP_STEPS = [
  { 
    step: "01",
    title: "Counseling", 
    desc: "Our expert counseling services are designed to guide students who want to pursue MBBS in India, MBBS Abroad, and Study Abroad programs. We provide personalized career guidance based on your academic profile, budget, and future goals.",
    icon: "fa-solid fa-comments"
  },
  { 
    step: "02",
    title: "Choose Your Destination & Course", 
    desc: "Selecting the right destination and course is the foundation of a successful career. At iExplain Education, we help you explore the best countries and programs based on your academic background, career goals, and budget.",
    icon: "fa-solid fa-earth-americas"
  },
  { 
    step: "03",
    title: "University Selection", 
    desc: "Selecting the right university is one of the most important decisions in a student’s academic journey. At iExplain Education, we carefully analyze your academic background, career goals, preferred location, and budget to recommend the most suitable universities.",
    icon: "fa-solid fa-building-columns"
  },
  { 
    step: "04",
    title: "Admission – Application & Offer Letter", 
    desc: "Our team provides complete assistance throughout the admission process. We help students accurately fill out application forms, prepare and verify required documents, and submit applications to the selected universities within deadlines.",
    icon: "fa-solid fa-file-signature"
  },
  { 
    step: "05",
    title: "Visa – Visa Filing & Interview", 
    desc: "We provide complete assistance with the visa process to ensure a smooth transition to your chosen destination. Our team guides you through accurate visa filing, document preparation, financial documentation, and appointment scheduling.",
    icon: "fa-solid fa-passport"
  },
  { 
    step: "06",
    title: "Departure", 
    desc: "We ensure your journey begins smoothly with complete departure assistance. Our team helps you with flight booking guidance to secure the best routes and affordable fares according to your travel schedule. We also assist in arranging foreign exchange (Forex), international SIM cards, and essential travel guidance.",
    icon: "fa-solid fa-plane-departure"
  }
];

export const INDIA_COURSES = [
  { name: "MBBS", slug: "mbbs", image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600" },
  { name: "B.Tech", slug: "btech", image: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&q=80&w=600" },
  { name: "MBA", slug: "mba", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" }
];

export const STATS = [
  { label: "Students Counseled", value: "10,000+" },
  { label: "Partner Universities", value: "500+" },
  { label: "Years of Experience", value: "15+" }
];

export const POPULAR_COLLEGES = [
  { name: "Kazan Federal University", country: "Russia", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600", slug: "kazan-federal-university" },
  { name: "Northeastern University", country: "USA", image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=600", slug: "northeastern-university" },
  { name: "University of Leeds", country: "UK", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=600", slug: "university-of-leeds" }
];

export const COUNTRY_ICONS: Record<string, string> = {
  "Russia": "RU",
  "USA": "US",
  "UK": "GB",
  "Australia": "AU",
  "Canada": "CA",
  "Germany": "DE",
  "Ireland": "IE",
  "New Zealand": "NZ",
  "Dubai": "AE",
  "Uzbekistan": "UZ",
  "Kazakhstan": "KZ",
  "Philippines": "PH",
  "Georgia": "GE",
  "Kyrgyzstan": "KG",
  "Egypt": "EG",
  "Bangladesh": "BD"
};

export const KNOW_YOUR_DESTINATIONS = [
  { name: "USA", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600", slug: "usa" },
  { name: "UK", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=600", slug: "uk" },
  { name: "Canada", image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80&w=600", slug: "canada" },
  { name: "Australia", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=600", slug: "australia" }
];

export const DESTINATIONS = [
  { id: 1, name: "USA", description: "Top universities and diverse culture.", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600", popularCourses: ["Engineering", "Business"] },
  { id: 2, name: "UK", description: "Historic institutions and quality education.", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=600", popularCourses: ["Law", "Medicine"] },
  { id: 3, name: "Canada", description: "Welcoming environment and post-study work.", image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80&w=600", popularCourses: ["IT", "Management"] },
  { id: 4, name: "Australia", description: "High quality of life and education.", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=600", popularCourses: ["Nursing", "Engineering"] }
];

export const TESTIMONIALS = [
  {
    name: "Aditi Sharma",
    univ: "Kazan Federal University",
    text: "iExplain Education helped me choose the right university for my MBBS. The counseling was very detailed and they guided me through the entire admission process.",
    avatar: "https://ui-avatars.com/api/?name=Aditi+Sharma&background=random"
  },
  {
    name: "Rahul Verma",
    univ: "Northeastern University",
    text: "The team at iExplain was incredibly supportive. They helped me with my visa application and even gave me pre-departure briefing which was very useful.",
    avatar: "https://ui-avatars.com/api/?name=Rahul+Verma&background=random"
  },
  {
    name: "Sneha Gupta",
    univ: "University of Leeds",
    text: "I was confused about which country to choose for my masters. iExplain helped me compare different options and I'm very happy with my decision to study in UK.",
    avatar: "https://ui-avatars.com/api/?name=Sneha+Gupta&background=random"
  }
];
