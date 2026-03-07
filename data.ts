
import { Destination, Office, Blog, Testimonial, College, CollegeDetailData, ProgramDetailData, MBBSDetailData, StudyIndiaDetailData, Service } from './types';

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

export const STUDY_ABROAD_DETAILED = {
  "usa": { title: "Study in USA", heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200", intro: "The USA is a top destination...", universities: [] },
  "uk": { title: "Study in UK", heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1200", intro: "The UK offers world-class education...", universities: [] },
  "europe": {
    title: "Study in Europe",
    heroImage: "https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?q=80&w=870&auto=format&fit=crop",
    intro: "Europe is one of the most popular study destinations in the world, offering world-class education, rich cultural diversity, and excellent career prospects. Home to many top-ranked universities, Europe provides a wide range of programs taught in English. With low or no tuition fees in several countries, strong research opportunities, and easy travel across nations, Europe offers an unmatched international study experience.",
    universities: [],
    faqs: [
      {
        "question": "Why study in Europe?",
        "answer": "Studying in Europe boosts career prospects through international exposure, world-class education, affordable tuition, and strong post-study employment opportunities."
      },
      {
        "question": "Are European degrees internationally recognized?",
        "answer": "Yes, European degrees follow the Bologna Process, ensuring that bachelor’s and master’s degrees are standardized and recognized across Europe and globally."
      },
      {
        "question": "Can I study in English in Europe?",
        "answer": "Yes, thousands of undergraduate and postgraduate programs across Europe are taught entirely in English."
      },
      {
        "question": "What education system is followed in Europe?",
        "answer": "Europe follows the International Standard Classification of Education (ISCED) and the Bologna system, offering bachelor’s, master’s, and doctoral programs with transferable credits through ECTS."
      },
      {
        "question": "What study options are available in Europe?",
        "answer": "Europe offers a wide range of programs across arts, science, engineering, business, medicine, humanities, and research-oriented fields at public and private universities."
      },
      {
        "question": "Is studying in Europe affordable?",
        "answer": "Many European countries offer low or no tuition fees at public universities, along with scholarships and financial support options for international students."
      },
      {
        "question": "What are the living costs for international students in Europe?",
        "answer": "Living costs vary by country, with relatively affordable options available in countries such as Italy, Spain, France, and parts of Northern and Eastern Europe."
      },
      {
        "question": "Can international students travel within Europe?",
        "answer": "Yes, students studying in the Schengen Area can travel freely across 26 European countries with a valid student visa."
      },
      {
        "question": "What visa is required to study in Europe?",
        "answer": "Non-EU students require a student visa issued by the host country, valid for the duration of the study program and renewable annually."
      },
      {
        "question": "What documents are required for a European student visa?",
        "answer": "Applicants must provide an admission letter, academic qualifications, proof of accommodation, health insurance, financial proof, completed application forms, and a valid passport."
      }
    ]
  }
};

export const MBBS_ABROAD_DETAILED = {
  "russia": {
    title: "MBBS in Russia",
    heroImage: "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=1600",
    intro: {
      text: "Being the center of attraction globally, Russia provides extreme exposure for medical aspirants. With affordable tuition, skilled faculty, and advanced infrastructure, MBBS in Russia is one of the most preferred destinations for national and international students.",
      image: "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?q=80&w=870&auto=format&fit=crop"
    },
    highlights: [
      { title: "Duration", value: "6 Years (Including Internships)" },
      { title: "Medium", value: "English" },
      { title: "Admission Criteria", value: "NEET Qualified" },
      { title: "Climatic Conditions", value: "Long cold winters, Brief warm to hot summers" }
    ],
    topUniversities: [
      "Kazan Federal University",
      "Bashkir State Medical University",
      "People's Friendship University of Russia",
      "Altai State Medical University",
      "Far Eastern Federal University",
      "Kabardino Balkarian State University",
      "Chuvash State Medical University",
      "Perm State Medical University",
      "Orenburg State Medical University"
    ],
    facts: {
      intro: "Russia is the largest country in the world by landmass and is extremely diverse in geography and culture. Key highlights include:",
      list: [
        "Covers 11 time zones",
        "Home to Lake Baikal, the world's deepest lake",
        "Government-funded universities, keeping tuition affordable",
        "Easy connectivity via metro or university buses",
        "Degrees recognized by NMC, WHO, FAIMER, and other global bodies",
        "Rich Indian diaspora making adaptation easier"
      ]
    },
    documents: [
      { icon: "fa-solid fa-passport", label: "Passport" },
      { icon: "fa-solid fa-file-lines", label: "Class X and XII Certificates and Mark Sheets" },
      { icon: "fa-solid fa-chart-column", label: "NEET Scorecard" },
      { icon: "fa-solid fa-image", label: "Passport Size Photographs" },
      { icon: "fa-solid fa-notes-medical", label: "Covid & HIV Tests" },
      { icon: "fa-solid fa-shield-halved", label: "Criminal Background Check" }
    ],
    advantages: [
      "Low tuition fees starting around INR 14 Lakh for full course",
      "WHO and NMC recognized degrees",
      "No entrance or capitation fees required",
      "English is the medium of instruction",
      "Eligible for FMGE/NEXT (India), USMLE (USA), PLAB (UK)",
      "Scholarships available for international students",
      "Clinical internships in top medical universities"
    ],
    studentLife: {
      intro: "Life for Indian students in Russia is vibrant and multicultural. Students enjoy academic support, cultural integration, and ample extracurricular opportunities.",
      list: [
        "Indian food widely available in cafeterias",
        "Heated and well-furnished hostels",
        "Extracurricular activities like sports, concerts, cultural fests",
        "Accessible faculty, seminars, and research opportunities",
        "Cold climate requires preparation for snow and low temperatures",
        "Easy public transport via buses, trains, subways, and boats",
        "Bollywood films and Indian cultural events widely appreciated"
      ]
    }
  },
  "eastern-europe": {
    title: "MBBS in Eastern Europe",
    heroImage: "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=1600",
    intro: {
      text: "Eastern Europe is a premier destination for medical education, offering world-class universities in Russia, Georgia, Romania, and Serbia. Known for their high academic standards, affordable tuition, and English-taught programs, these countries attract thousands of international students annually.",
      image: "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?q=80&w=870&auto=format&fit=crop"
    },
    highlights: [
      { title: "Duration", value: "6 Years" },
      { title: "Medium", value: "English" },
      { title: "Recognition", value: "WHO, NMC, ECFMG" },
      { title: "Cost", value: "Affordable" }
    ],
    topUniversities: [
      "Kazan Federal University (Russia)",
      "Tbilisi State Medical University (Georgia)",
      "Carol Davila University (Romania)",
      "University of Belgrade (Serbia)",
      "Bashkir State Medical University (Russia)",
      "European University (Georgia)"
    ],
    facts: {
      intro: "Eastern Europe Facts",
      list: [
        "Home to some of the oldest and most prestigious medical universities",
        "Diverse cultures and rich history",
        "High safety standards for international students",
        "Easy travel within Europe for students in EU countries (Romania)",
        "Strong Indian student community"
      ]
    },
    documents: [
      { icon: "fa-solid fa-passport", label: "Valid Passport" },
      { icon: "fa-solid fa-file-lines", label: "Academic Transcripts" },
      { icon: "fa-solid fa-chart-column", label: "NEET Scorecard" },
      { icon: "fa-solid fa-image", label: "Photos" }
    ],
    advantages: [
      "Globally recognized degrees",
      "English medium instruction",
      "Low cost of living compared to Western Europe",
      "High quality clinical exposure",
      "Pathway to practice in Europe and USA"
    ],
    studentLife: {
      intro: "Student Life in Eastern Europe",
      list: [
        "Vibrant international student community",
        "Affordable hostels and apartments",
        "Rich cultural experiences and travel opportunities",
        "Safe and welcoming environment"
      ]
    }
  },
  "central-asia": {
    title: "MBBS in Central Asia",
    heroImage: "https://images.unsplash.com/photo-1549877452-9c387954fbc2?q=80&w=1200&auto=format&fit=crop",
    intro: {
      text: "Central Asia, comprising Kazakhstan, Kyrgyzstan, and Uzbekistan, has emerged as a top hub for MBBS aspirants. These countries offer high-quality medical education at very affordable costs, with a curriculum similar to India and English as the medium of instruction.",
      image: "https://images.unsplash.com/photo-1666975823342-3b755b3784d4?q=80&w=870&auto=format&fit=crop"
    },
    highlights: [
      { title: "Duration", value: "5-6 Years" },
      { title: "Medium", value: "English" },
      { title: "Recognition", value: "WHO, NMC" },
      { title: "Cost", value: "Very Low" }
    ],
    topUniversities: [
      "Kazakh National Medical University (Kazakhstan)",
      "Osh State University (Kyrgyzstan)",
      "Tashkent Medical Academy (Uzbekistan)",
      "Asian Medical Institute (Kyrgyzstan)",
      "Samarkand State Medical University (Uzbekistan)",
      "Al-Farabi Kazakh National University (Kazakhstan)"
    ],
    facts: {
      intro: "Central Asia Facts",
      list: [
        "Close proximity to India (3-4 hours flight)",
        "Similar culture and food habits",
        "Rapidly developing infrastructure",
        "High safety for Indian students",
        "Large Indian student community"
      ]
    },
    documents: [
      { icon: "fa-solid fa-passport", label: "Valid Passport" },
      { icon: "fa-solid fa-file-lines", label: "Academic Transcripts" },
      { icon: "fa-solid fa-chart-column", label: "NEET Scorecard" },
      { icon: "fa-solid fa-image", label: "Photos" }
    ],
    advantages: [
      "Lowest tuition fees for MBBS abroad",
      "English medium instruction",
      "NMC recognized universities",
      "Easy admission process",
      "Good FMGE coaching availability"
    ],
    studentLife: {
      intro: "Student Life in Central Asia",
      list: [
        "Indian mess facilities available in most hostels",
        "Safe and secure campuses",
        "Affordable living costs",
        "Friendly local population"
      ]
    }
  },
  "philippines": {
    title: "MBBS in Philippines",
    heroImage: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=774&auto=format&fit=crop",
    intro: {
      text: "MBBS in the Philippines follows an internationally recognized MD program aligned with NMC guidelines. With WHO, NMC, and FAIMER-approved universities, affordable tuition fees, and English-medium education, the Philippines attracts thousands of Indian students every year.",
      image: "https://images.unsplash.com/photo-1529686342540-1b43aec0df75?q=80&w=870&auto=format&fit=crop"
    },
    highlights: [
      { title: "Duration", value: "5.5 Years (4.5 MD + 1 Year Internship)" },
      { title: "Medium", value: "English" },
      { title: "Climatic Conditions", value: "Monsoonal (Wet-Dry Tropical Climate)" },
      { title: "Admission Criteria", value: "Minimum 50% in PCB & NEET Qualified" }
    ],
    topUniversities: [
      "Bicol Christian College of Medicine",
      "Our Lady of Fatima University",
      "University of Perpetual Help System Dalta",
      "AMA School of Medicine",
      "Emilio Aguinaldo College",
      "Davao Medical School Foundation"
    ],
    facts: {
      intro: "Philippines Facts",
      list: [
        "Southeast Asian archipelago consisting of more than 7,000 islands",
        "Named after King Philip II of Spain",
        "Former Spanish colony with over 300 years of history",
        "Tropical monsoonal climate with wet and dry seasons",
        "Medical program fees range between INR 19–30 Lakhs",
        "No donation or capitation fees charged by universities",
        "Student visa process is completely online and faster",
        "Visa approval usually received within 15 days",
        "On-campus accommodation included in total fees",
        "Currency is affordable: 1 Philippine Peso ≈ INR 1.5",
        "Strong emphasis on practical learning, labs, seminars, and clinical exposure"
      ]
    },
    documents: [
      { icon: "fa-solid fa-file-lines", label: "Class X and XII Certificates and Mark Sheets" },
      { icon: "fa-solid fa-chart-column", label: "NEET Scorecard" },
      { icon: "fa-solid fa-passport", label: "Valid Passport" },
      { icon: "fa-solid fa-shield-halved", label: "Police Clearance Certificate" },
      { icon: "fa-solid fa-graduation-cap", label: "Graduation Certificate (if applicable)" },
      { icon: "fa-solid fa-notes-medical", label: "Medical Test Reports (Covid & HIV)" },
      { icon: "fa-solid fa-image", label: "Passport-size Photographs (2x2)" },
      { icon: "fa-solid fa-building-columns", label: "Bank Statement" }
    ],
    advantages: [
      "Third largest English-speaking country in the world",
      "No IELTS or TOEFL required for admission",
      "Authentic Indian food available in hostels and canteens",
      "NMC/MCI-approved universities with FMGE eligibility",
      "Tropical climate similar to Indian coastal regions",
      "Easy and fast student visa process",
      "Strong pathway to USMLE and medical practice in the USA",
      "No donation or capitation fees",
      "Affordable tuition fees capped at INR 20–30 Lakhs",
      "Multicultural and non-orthodox society ideal for international students"
    ],
    studentLife: {
      intro: "Life for MBBS students in the Philippines",
      list: [
        "English widely spoken, eliminating communication barriers",
        "Significant reduction in crime rate, ensuring student safety",
        "Monsoonal climate similar to India",
        "Indian cooks available in most university hostels",
        "Home to some of the world’s largest shopping malls",
        "Affordable public transportation",
        "In-house counselors for student mental well-being",
        "Universities located near scenic and peaceful surroundings",
        "Regular cultural events and creative activities for students",
        "Balanced academic and social life with global exposure"
      ]
    }
  },
  "bangladesh": {
    title: "MBBS in Bangladesh",
    heroImage: "https://plus.unsplash.com/premium_photo-1697729609380-5cfe9494a7c1?q=80&w=870&auto=format&fit=crop",
    intro: {
      text: "MBBS in Bangladesh is one of the most preferred choices for Indian students due to its close proximity, similar education system, and affordable tuition fees. The country is home to several NMC and WHO-approved government and private medical colleges offering quality medical education.",
      image: "https://images.unsplash.com/photo-1604993497451-eed6eb271a9c?q=80&w=774&auto=format&fit=crop"
    },
    highlights: [
      { title: "Duration", value: "5.5 Years" },
      { title: "Medium", value: "English" },
      { title: "Climatic Conditions", value: "Humid and Warm Climate" },
      { title: "Admission Criteria", value: "10+2 qualified & NEET (Merit-based)" }
    ],
    topUniversities: [
      "US-Bangla Medical College",
      "Monno Medical College & Hospital",
      "Marks Medical College",
      "Bangladesh Medical College",
      "Barind Medical College",
      "Dhaka National Medical College"
    ],
    facts: {
      intro: "Bangladesh Facts",
      list: [
        "Neighboring country of India and one of the closest MBBS destinations",
        "Medical colleges approved by NMC and WHO",
        "Visa processing time is usually 10–15 working days",
        "Visa is renewable after every 6 months",
        "Affordable tuition fees with world-class facilities",
        "1 Bangladeshi Taka ≈ 0.88 Indian Rupee (subject to change)",
        "MBBS course duration and curriculum similar to India",
        "MBBS session usually starts in mid or end of October",
        "Medical colleges strictly follow NMC gazette guidelines"
      ]
    },
    documents: [
      { icon: "fa-solid fa-file-lines", label: "Class X and XII Mark Sheets" },
      { icon: "fa-solid fa-certificate", label: "Birth Certificate" },
      { icon: "fa-solid fa-passport", label: "Valid Passport" },
      { icon: "fa-solid fa-image", label: "Passport-size Photographs (8 copies)" },
      { icon: "fa-solid fa-notes-medical", label: "Medical Certificate" },
      { icon: "fa-solid fa-envelope-open-text", label: "University Invitation Letter" }
    ],
    advantages: [
      "One of the closest and friendliest neighboring countries of India",
      "NMC-recognized medical colleges allowing practice in India",
      "Good FMGE passing percentage (around 58.57% and improving)",
      "Cuisine very similar to Indian food",
      "Low travel time and cost due to close distance",
      "English-medium MBBS program aligned with Indian education system",
      "Affordable tuition fees compared to other foreign destinations",
      "Similar climate makes adaptation easy for Indian students"
    ],
    studentLife: {
      intro: "Life for MBBS students in Bangladesh",
      list: [
        "Comfortable lifestyle with affordable accommodation options",
        "Hostels available near medical college campuses",
        "Low cost of living for international students",
        "Students can participate in clubs and extracurricular activities",
        "Efficient academic system with organized classroom teaching",
        "Short travel time from India compared to other countries",
        "Safe and student-friendly environment",
        "Facilities and daily essentials available at low cost"
      ]
    }
  },
  "nepal": {
    title: "MBBS in Nepal",
    heroImage: "https://plus.unsplash.com/premium_photo-1688645554172-d3aef5f837ce?q=80&w=876&auto=format&fit=crop",
    intro: {
      text: "Nepal is one of the most preferred destinations for Indian students to pursue MBBS due to its proximity, similar education system, and hassle-free admission process. With NMC and WHO-approved medical colleges, Nepal offers quality medical education at an affordable cost.",
      image: "https://images.unsplash.com/photo-1611516491426-03025e6043c8?q=80&w=1033&auto=format&fit=crop"
    },
    highlights: [
      { title: "Duration", value: "6 Years" },
      { title: "Medium", value: "English" },
      { title: "Climatic Conditions", value: "Subtropical Lowlands & Cold Mountain Climate" },
      { title: "Admission Criteria", value: "10+2 qualified & NEET (Merit-based)" }
    ],
    topUniversities: [
      "Kathmandu Medical College",
      "College of Medical Sciences",
      "National Medical College",
      "Nepalgunj Medical College",
      "Universal College of Medical Science (UCMS)",
      "B.P. Koirala Institute of Health Sciences"
    ],
    facts: {
      intro: "Nepal Facts",
      list: [
        "One of the closest MBBS destinations for Indian students",
        "NMC and WHO-approved medical colleges",
        "No need to cross continents for studying abroad",
        "Nepalese Rupee (NPR) is the official currency",
        "Languages spoken include Nepali and other regional languages",
        "Major religions include Hinduism, Buddhism, Christianity, and Islam",
        "Federal parliamentary republic system of government",
        "Kathmandu is the capital city"
      ]
    },
    documents: [
      { icon: "fa-solid fa-file-lines", label: "Class X and XII Mark Sheets" },
      { icon: "fa-solid fa-envelope-open-text", label: "University Invitation Letter" },
      { icon: "fa-solid fa-chart-column", label: "NEET Scorecard" },
      { icon: "fa-solid fa-building-columns", label: "Bank Statement" },
      { icon: "fa-solid fa-notes-medical", label: "Medical Test Reports (Covid & HIV)" },
      { icon: "fa-solid fa-image", label: "Passport-size Photographs" }
    ],
    advantages: [
      "Simple and hassle-free admission process",
      "No visa required for Indian students",
      "Good FMGE passing percentage (around 37.13% and improving)",
      "Nepalese cuisine is similar to Indian food",
      "Low travel time and cost due to close proximity",
      "Favorable climate for Indian students",
      "MBBS curriculum similar to India",
      "Affordable tuition fees compared to private Indian colleges"
    ],
    studentLife: {
      intro: "Life for MBBS students in Nepal",
      list: [
        "Modern infrastructure with digital laboratories and open theatres",
        "On-campus facilities including libraries, museums, auditoriums, and hostels",
        "Off-campus private apartments available near college campuses",
        "Accommodation cost varies based on location",
        "Access to quality medical treatment for international students",
        "Opportunities to participate in extracurricular activities and sports",
        "Culturally similar environment to India",
        "Comfortable and student-friendly lifestyle"
      ]
    }
  },
  "china": {
    title: "MBBS in China",
    heroImage: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&q=80&w=1600",
    intro: {
      text: "China is a world leader in medical education, offering state-of-the-art infrastructure and top-ranked universities. With English-medium programs and globally recognized degrees, China is a preferred destination for students seeking high-quality education.",
      image: "https://images.unsplash.com/photo-1547981609-4b6bfe6770b0?auto=format&fit=crop&q=80&w=870"
    },
    highlights: [
      { title: "Duration", value: "6 Years" },
      { title: "Medium", value: "English" },
      { title: "Recognition", value: "WHO, NMC, MOE China" },
      { title: "Ranking", value: "Top Global Ranks" }
    ],
    topUniversities: [
      "Nanjing Medical University",
      "Jilin University",
      "China Medical University",
      "Dalian Medical University",
      "Capital Medical University"
    ],
    facts: {
      intro: "China Facts",
      list: [
        "World's second-largest economy",
        "Advanced technology and infrastructure",
        "Rich history and culture",
        "Safe and disciplined society"
      ]
    },
    documents: [
      { icon: "fa-solid fa-passport", label: "Valid Passport" },
      { icon: "fa-solid fa-file-lines", label: "Academic Transcripts" },
      { icon: "fa-solid fa-chart-column", label: "NEET Scorecard" },
      { icon: "fa-solid fa-image", label: "Photos" }
    ],
    advantages: [
      "World-class infrastructure and labs",
      "Top-ranked universities globally",
      "English medium instruction",
      "High patient flow for clinical exposure",
      "Safe and modern living environment"
    ],
    studentLife: {
      intro: "Student Life in China",
      list: [
        "Modern campuses with all amenities",
        "International student communities",
        "Affordable food and travel",
        "Opportunity to learn Mandarin"
      ]
    }
  },
  "egypt": {
    title: "MBBS in Egypt",
    heroImage: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&q=80&w=1600",
    intro: {
      text: "Egypt offers high-quality medical education with a rich history of academic excellence. Known for its clinical exposure and affordable fees, Egypt is becoming a popular choice for international medical students.",
      image: "https://images.unsplash.com/photo-1539650116455-251d93d5ce3d?auto=format&fit=crop&q=80&w=870"
    },
    highlights: [
      { title: "Duration", value: "5+2 Years" },
      { title: "Medium", value: "English" },
      { title: "Recognition", value: "WHO, NMC" },
      { title: "Clinical", value: "High Exposure" }
    ],
    topUniversities: [
      "Cairo University",
      "Ain Shams University",
      "Alexandria University",
      "Mansoura University"
    ],
    facts: {
      intro: "Egypt Facts",
      list: [
        "Cradle of civilization",
        "Located in North Africa",
        "High standard of living at low cost",
        "Warm and welcoming culture"
      ]
    },
    documents: [
      { icon: "fa-solid fa-passport", label: "Valid Passport" },
      { icon: "fa-solid fa-file-lines", label: "Academic Transcripts" },
      { icon: "fa-solid fa-chart-column", label: "NEET Scorecard" },
      { icon: "fa-solid fa-image", label: "Photos" }
    ],
    advantages: [
      "High quality of education",
      "English medium instruction",
      "Affordable tuition fees",
      "Excellent clinical training",
      "Recognized worldwide"
    ],
    studentLife: {
      intro: "Student Life in Egypt",
      list: [
        "Rich cultural heritage to explore",
        "Friendly environment",
        "Affordable accommodation",
        "Good connectivity"
      ]
    }
  }
};

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
