
import { Destination, Office, Blog, Testimonial, College, CollegeDetailData, ProgramDetailData, MBBSDetailData, StudyIndiaDetailData, Service, EntranceExamData } from './types';

export const LOGO_URL = "https://www.iexplaineducation.com/wp-content/uploads/2023/04/Logo-2-scaled-e1684926432756-768x307.jpg";
export const HERO_IMG_URL = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200";

// ... [Keep existing exports like PRIVACY_POLICY_CONTENT, TERMS_CONTENT, OFFICE_ADDRESSES, FOOTER_COLLEGES, COLLEGE_DETAILS, ABOUT_US_CONTENT, CORE_VALUES_FULL, TEAM_MEMBERS, INDIA_COURSES_DETAILED, STUDENT_SERVICES_DATA, COUNTRY_DETAILS] ...
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
    { country: 'Russia', names: ['Kazan Federal University', 'Bashkir State Medical University', 'Orenburg State Medical University', 'Crimea Federal University', 'First Moscow State Medical University'] },
    { country: 'Georgia', names: ['Tbilisi State Medical University', 'Batumi Shota Rustaveli State University', 'David Tvildiani Medical University', 'European University Georgia'] },
    { country: 'Philippines', names: ['University of Santo Tomas', 'AMA School of Medicine', 'Our Lady of Fatima University', 'University of the East Ramon Magsaysay'] },
    { country: 'Bangladesh', names: ['Dhaka National Medical College', 'Bangladesh Medical College', 'Jahurul Islam Medical College', 'Holy Family Red Crescent Medical College'] },
    { country: 'Nepal', names: ['Tribhuvan University Institute of Medicine', 'Kathmandu University School of Medical Sciences', 'B.P. Koirala Institute of Health Sciences', 'Patan Academy of Health Sciences'] },
    { country: 'Kazakhstan', names: ['Al-Farabi Kazakh National University', 'Kazakh National Medical University', 'Astana Medical University', 'South Kazakhstan Medical Academy'] },
    { country: 'Uzbekistan', names: ['Tashkent Medical Academy', 'Samarkand State Medical University', 'Bukhara State Medical Institute', 'Andijan State Medical Institute'] }
  ],
  study: [
    { country: 'USA', names: ['Northeastern University', 'Arizona State University', 'New York University', 'University of Texas at Austin', 'University of Southern California'] },
    { country: 'UK', names: ['University of Leeds', 'University of Manchester', 'University of Birmingham', 'University of Warwick', 'Kings College London'] },
    { country: 'Australia', names: ['University of Melbourne', 'Monash University', 'University of Sydney', 'Deakin University', 'RMIT University'] },
    { country: 'Canada', names: ['University of Toronto', 'University of British Columbia', 'McGill University', 'York University', 'Seneca College'] },
    { country: 'Ireland', names: ['Trinity College Dublin', 'University College Dublin', 'Dublin City University', 'University of Limerick'] },
    { country: 'New Zealand', names: ['University of Auckland', 'University of Otago', 'Victoria University of Wellington', 'Auckland University of Technology'] },
    { country: 'Dubai', names: ['University of Birmingham Dubai', 'Middlesex University Dubai', 'Heriot-Watt University Dubai', 'Manipal Academy of Higher Education Dubai'] }
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
allMbbsNames.forEach(name => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  if (!DETAILED_COLLEGES[slug]) DETAILED_COLLEGES[slug] = generatePlaceholder(name, 'MBBS Abroad');
});
allStudyNames.forEach(name => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  if (!DETAILED_COLLEGES[slug]) DETAILED_COLLEGES[slug] = generatePlaceholder(name, 'Study Abroad');
});
export const COLLEGE_DETAILS = DETAILED_COLLEGES;

// About Us Page Content - Add this to your constants.tsx file

export const ABOUT_US_CONTENT = {
  intro: `Welcome to iExplain Education, where we transform dreams into reality. As you explore further, you will uncover the myriad ways in which we distinguish ourselves and positively impact the lives of our students. We are excited to demonstrate our unique qualities and showcase the invaluable assistance we offer to help students thrive.`,

  mainContent: `With our extensive industry experience, we have witnessed the unfortunate reality of admission counselors succumbing to management pressure, prioritizing their favorite universities solely for profit, and disregarding the student's profile. In response, we established our organization with the mission to offer students Authentic insights, Accurate information, and Comprehensive guidance.

Unlike other education consultants, iExplain Education takes a student-centric approach, considering their individual needs, strengths, and weaknesses. The focus is on providing personalized guidance and support to ensure the best possible outcomes for the student's educational journey. This commitment to the student's success sets iExplain Education apart from other consultants who may prioritize financial gain over the student's best interests.`,

  verticals: {
    title: "Our Two Major Verticals",
    items: [
      {
        name: "Study Abroad",
        description: "Guiding students towards undergraduate and postgraduate courses in renowned countries such as the UK, US, Australia, Canada, Ireland, New Zealand, Dubai, and various European nations."
      },
      {
        name: "Medical Education",
        description: "Facilitating medical admissions in India for both undergraduate and postgraduate programs, as well as assisting students in pursuing their MBBS degrees abroad in countries including Russia, China, Georgia, Bangladesh, Nepal, Italy, and many more."
      }
    ]
  },

  services: {
    title: "Comprehensive Support Services",
    description: `At iExplain Education, we offer comprehensive support to students through various channels. We provide free counseling sessions at our head office in Noida, where students and their parents can have in-person discussions. Additionally, we extend our guidance virtually through phone calls and online meetings, ensuring all doubts and queries are addressed.`,
    addOns: [
      "Online coaching at highly affordable prices for GRE, GMAT, IELTS, TOEFL, PTE, and SAT exams",
      "Money exchange services for international students",
      "International SIM cards",
      "Assistance with international accommodations",
      "University selection to enrollment - complete support"
    ]
  },

  vision: {
    title: "Opening Doors to a World of Possibilities: Your Pathway to Success",
    text: `We, at iExplain Education, believe in the power of dreams. Our vision is to fuel your ambitions, inspire your imagination, and provide unwavering support as you take bold steps towards realizing your dreams.

We envision a future where every student receives personalized guidance, enabling them to make informed decisions and pursue the best educational opportunities.

We strive to be a trusted partner, providing comprehensive support, expert advice, and valuable insights to help students navigate the complex landscape of education.

Through our services, we aim to transform lives, shape successful careers, and contribute to the growth and overall development of students.`
  },

  mission: {
    title: "Empowering Minds, Transforming Futures: Our Mission, Your Success",
    points: [
      {
        heading: "Personalized Guidance",
        description: "Our mission is to understand your unique aspirations, strengths, and challenges. We provide personalized guidance, offering tailored solutions that meet your specific needs and goals."
      },
      {
        heading: "Expert Advice",
        description: "Our mission is to be your trusted source of knowledge and expertise. We strive to stay updated with the latest trends and developments in the education landscape, providing you with accurate and relevant information to make informed decisions."
      },
      {
        heading: "Transformative Power",
        description: "Embark on this remarkable journey with us and experience the transformative power of education. Let our mission be the catalyst for your success, and together, we will shape a brighter future filled with endless possibilities."
      }
    ]
  }
};

export const CORE_VALUES_FULL = [
  {
    title: "Integrity",
    desc: "We uphold the highest ethical standards, ensuring transparency, honesty, and fairness in our interactions with students, parents, and educational institutions.",
    icon: "fa-solid fa-shield-check"
  },
  {
    title: "Student-Centered Approach",
    desc: "Our focus is always on the individual student. We prioritize their needs, aspirations, and well-being, tailoring our guidance and support to their unique requirements.",
    icon: "fa-solid fa-user-graduate"
  },
  {
    title: "Trust",
    desc: "Trust is the foundation of our relationships. We work diligently to build and maintain trust with students and their families by delivering on our promises and acting in their best interests.",
    icon: "fa-solid fa-handshake"
  },
  {
    title: "Professionalism",
    desc: "We maintain a high level of professionalism in every aspect of our work. Our counselors are knowledgeable, experienced, and dedicated to providing accurate and up-to-date information.",
    icon: "fa-solid fa-briefcase"
  },
  {
    title: "Collaboration",
    desc: "We believe in the power of collaboration. We work closely with students, parents, and educational institutions to foster partnerships that lead to successful educational journeys.",
    icon: "fa-solid fa-users"
  },
  {
    title: "Long-Term Relationships",
    desc: "We value long-term relationships with our students and their families, supporting them throughout their educational endeavors and celebrating their achievements.",
    icon: "fa-solid fa-heart"
  }
];

export const TEAM_MEMBERS = [
  {
    name: "Sunil Baranwal",
    role: "Director",
    image: "http://www.iexplaineducation.com/wp-content/uploads/2023/06/4.png",
    bio: "Leading iExplain Education with extensive experience in international education consulting and student guidance."
  },
  {
    name: "Sushant Gupta",
    role: "Director",
    image: "http://www.iexplaineducation.com/wp-content/uploads/2023/06/5.png",
    bio: "Dedicated to providing authentic insights and comprehensive support to students pursuing their educational dreams."
  },
  {
    name: "Sakshi Agarwal",
    role: "Director",
    image: "http://www.iexplaineducation.com/wp-content/uploads/2023/06/6.png",
    bio: "Committed to student-centric approach and ensuring personalized guidance for every student's unique journey."
  }
];

// Optional: Stats for About Us page
export const COMPANY_STATS = [
  {
    number: "10+",
    label: "Years of Experience",
    icon: "fa-solid fa-clock"
  },
  {
    number: "5000+",
    label: "Students Guided",
    icon: "fa-solid fa-users"
  },
  {
    number: "15+",
    label: "Countries Covered",
    icon: "fa-solid fa-globe"
  },
  {
    number: "100+",
    label: "Partner Universities",
    icon: "fa-solid fa-university"
  }
];

export const INDIA_COURSES_DETAILED: Record<string, StudyIndiaDetailData> = {
  "mbbs": {
    "title": "Study MBBS in India for Indian Students : MBBS Fees & MBBS Admission in India",
    "heroImage": "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1600",
    "intro": "MBBS in India is one of the highly preferred courses by medical aspirants worldwide. The strong education structure, sincere professors, and top-hole medical universities in India are paving the way for success. To secure admission for MBBS courses in India, the aspirants are required to appear in NEET. A healthy and peaceful environment in India helps the students to acquire knowledge more quickly. MBBS in India demands a student to get at least 50% in the 10+2 examinations. The duration of MBBS courses in India is 5.5 years. If you are thinking of earning an MBBS degree from a recognized university, India is a great choice. WHO, NMC, and UNESCO approve all the top medical colleges in India.",
    "why": {
      "title": "Why MBBS in India?",
      "points": [
        "Medical universities in India are some of the finest and prominent ones in the world.",
        "There are over 600+ medical universities and colleges in India, including around 200+ private colleges.",
        "There is a total of approximately 1,05,000 MBBS seats available in India.",
        "MBBS in India is ranked higher due to excellence in research and training programs.",
        "Indian medical colleges are known for strong clinical exposure and expertise.",
        "Students get opportunities to attend international seminars and conferences.",
        "The syllabus followed in Indian medical colleges is of global standard.",
        "Students are eligible to practice medicine worldwide after MBBS from India.",
        "Hands-on training on real human bodies is a major advantage."
      ]
    },
    "duration": {
      "title": "Duration of MBBS in India",
      "cards": [
        "MBBS in India has a tenure of 5.5 years including 4.5 years of classroom study and 1 year of compulsory internship.",
        "Postgraduate medical programs generally require 3 additional years.",
        "Diploma medical courses take around 2 years to complete.",
        "Other super-specialization programs have varying durations."
      ]
    },
    "eligibility": {
      "title": "Eligibility Criteria for MBBS in India",
      "points": [
        "Candidate must be at least 17 years old at the time of admission.",
        "Candidate must not exceed 25 years of age.",
        "General category candidates must score at least 50% in Class 12; reserved categories require 40%.",
        "For AIIMS, minimum required marks are 60% (General) and 45% (SC/ST/OBC).",
        "Physics, Chemistry, and Biology must be compulsory subjects in Class 12.",
        "Qualifying NEET is mandatory."
      ]
    },
    "documents": {
      "title": "Documents Required for MBBS in India",
      "subtitle": "Medical candidates must keep the following documents ready:",
      "points": [
        "Valid Class 10 and Class 12 mark sheets.",
        "NEET scorecard.",
        "School transfer certificate and code of conduct certificate.",
        "Medical fitness certificate and health check-up report.",
        "No criminal record certificate.",
        "Caste certificate for SC/ST/OBC candidates.",
        "Parents’ bank statement as proof of financial capability."
      ]
    },
    "process": {
      "title": "Process of Admission for MBBS in India",
      "steps": [
        "Complete Class XII with Physics, Chemistry, and Biology.",
        "Qualify the NEET examination.",
        "Participate in centralized counseling for seat allotment."
      ]
    },
    "economical": {
      "title": "Economical MBBS India",
      "points": [
        "MBBS in India is economical for students who qualify NEET.",
        "Private medical colleges may cost between INR 50–60 Lakhs.",
        "MBBS abroad is often considered more affordable than private colleges in India.",
        "Fee structure for NRI students varies by institution.",
        "International students should consult the Indian Embassy for accurate details.",
        "Health insurance costs INR 5,000–15,000 per year.",
        "Annual medical check-ups may cost INR 20,000–30,000.",
        "Food expenses range between INR 10,000–20,000 annually.",
        "Hostel fees range from INR 70,000 to INR 1,00,000 per year."
      ]
    },
    "advantages": {
      "title": "Advantages of MBBS in India",
      "points": [
        "India ranks among the top medical education destinations globally.",
        "Students gain exposure to tropical and rare diseases.",
        "Internships provide real-life clinical experience.",
        "Every state has government-funded medical universities.",
        "Indian MBBS degree is globally accepted.",
        "No IELTS or TOEFL required.",
        "High demand for doctors due to large population.",
        "Access to modern medical technologies.",
        "Excellent opportunities for postgraduate and specialization studies."
      ]
    },
    "international": {
      "title": "MBBS in India for International Applicants",
      "points": [
        "Reserved seats are available for NRI and international students.",
        "NRI students can apply to both private and government institutions.",
        "Admissions can be facilitated through diplomatic consultants.",
        "Indian Embassy provides official admission guidance.",
        "Entrance exams may not be mandatory in certain cases.",
        "Dedicated NRI quota seats are available.",
        "Seat allocation is merit-based.",
        "Fee structures vary for NRI students."
      ]
    },
    "dates": {
      "title": "Imperative Dates for MBBS in India",
      "points": [
        "NEET is the mandatory entrance examination.",
        "Applications generally open in June and July.",
        "Academic session begins in September or October."
      ]
    },
    "govt": {
      "title": "Why Pick Govt. Medical Universities in India?",
      "points": [
        "Government colleges charge significantly lower fees.",
        "Admission is based strictly on NEET merit.",
        "High-quality medical education is ensured.",
        "Faculty members are experienced and highly qualified."
      ]
    },
    "explore": {
      "title": "Explore Beautiful India",
      "points": [
        "Delhi is the capital of India.",
        "Hindi is the official language.",
        "Over 80% of the population speaks English.",
        "Currency used is Indian Rupee (INR).",
        "India shares borders with China, Pakistan, Nepal, Myanmar, Afghanistan, and Bhutan.",
        "Climate includes tropical monsoon and wet-dry regions.",
        "Population is approximately 133.92 crores.",
        "India has the world’s largest postal network with over 1,55,015 post offices.",
        "Kumbh Mela is the world’s largest human gathering.",
        "Taj Mahal is one of the Seven Wonders of the World.",
        "India is globally famous for spices, food, cricket, and culture."
      ]
    }
  },
  "md_ms": {
    "title": "Study MD | MS in India for Indian Students",
    "heroImage": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1600",
    "intro": "MD | MS in India is one of the most prominent and respected career options for medical graduates. Postgraduate medical education in India offers career stability, social recognition, and immense professional satisfaction. MD focuses on non-surgical medical treatment, while MS emphasizes surgical expertise. Admissions are conducted through the national-level NEET-PG examination.",

    "why": {
      "title": "Why Choose MD | MS in India?",
      "points": [
        "High career stability and long-term professional growth.",
        "Strong social recognition and respect for specialist doctors.",
        "Advanced clinical exposure with real-life patient handling.",
        "Globally accepted postgraduate medical degrees.",
        "Wide range of specializations in both medical and surgical fields."
      ]
    },

    "duration": {
      "title": "Duration of MD | MS in India",
      "cards": [
        "MD course duration is 3 years with intensive clinical training.",
        "MS course duration is 3 years with hands-on surgical training.",
        "Both courses require full-time hospital-based learning.",
        "Duration remains the same across government and private institutions."
      ]
    },

    "eligibility": {
      "title": "Eligibility Criteria for MD | MS in India",
      "points": [
        "Candidates must hold an MBBS degree with minimum 50% marks.",
        "MBBS degree must be from an MCI-recognized medical institution.",
        "Completion of one-year compulsory internship is mandatory.",
        "Candidates must have provisional or permanent registration with MCI or State Medical Council.",
        "Admission is based on All India Rank in NEET-PG."
      ]
    },

    "documents": {
      "title": "Documents Required for MD | MS in India",
      "subtitle": "Candidates must keep the following documents ready at the time of admission:",
      "points": [
        "MBBS degree certificate and mark sheets.",
        "NEET-PG scorecard.",
        "Permanent or provisional MCI/State Medical Council registration certificate.",
        "Internship completion certificate.",
        "Valid ID proof and passport-size photographs."
      ]
    },

    "process": {
      "title": "Admission Process for MD | MS in India",
      "steps": [
        "Complete MBBS from an MCI-recognized medical college.",
        "Qualify the NEET-PG entrance examination.",
        "Participate in Central or State-level NEET-PG counselling.",
        "Seat allotment based on All India Rank and preference.",
        "Report to the allotted college for document verification and admission."
      ]
    },

    "economical": {
      "title": "Cost of Studying MD | MS in India",
      "points": [
        "Government colleges offer highly subsidized fee structures.",
        "Private and deemed universities have higher tuition fees.",
        "Fees vary depending on specialization and institution.",
        "Living costs in India are affordable compared to many countries.",
        "Scholarships and reserved quotas may reduce financial burden."
      ]
    },

    "advantages": {
      "title": "Advantages of MD | MS in India",
      "points": [
        "Extensive clinical exposure in high patient-load hospitals.",
        "Training under experienced and highly qualified professors.",
        "Wide choice of medical and surgical specializations.",
        "Strong postgraduate and super-specialization opportunities.",
        "Indian MD/MS degrees are respected globally."
      ]
    },

    "international": {
      "title": "MD | MS in India for Foreign Medical Graduates",
      "points": [
        "Foreign medical graduates must qualify the FMGE conducted by NBE.",
        "Candidates must be Indian citizens or OCI cardholders.",
        "MCI/State Medical Council registration is mandatory.",
        "Internship must be completed on or before the prescribed date.",
        "FMGE pass certificate is required during admission."
      ]
    },

    "dates": {
      "title": "Important Dates for MD | MS in India",
      "points": [
        "NEET-PG examination is usually conducted in January.",
        "Counselling process begins after NEET-PG result declaration.",
        "Academic session generally starts between April and May."
      ]
    },

    "govt": {
      "title": "Why Choose Government Medical Colleges for MD | MS?",
      "points": [
        "Very low tuition fees compared to private institutions.",
        "High-quality education with extensive clinical exposure.",
        "Admissions based purely on merit through NEET-PG.",
        "Better patient inflow for hands-on training."
      ]
    },

    "explore": {
      "title": "Explore Beautiful India",
      "points": [
        "Delhi is the capital of India.",
        "The official language is Hindi.",
        "More than 80% of India's population speaks English.",
        "The currency of India is Indian Rupee (INR).",
        "India shares borders with China, Pakistan, Nepal, Myanmar, Afghanistan, and Bhutan.",
        "India experiences tropical monsoon and tropical wet-dry climate.",
        "The population of India is approximately 133.92 crores.",
        "India has the largest postal network with over 1,55,015 post offices.",
        "India hosts the world's largest religious gathering, the Kumbh Mela."
      ]
    }
  },
  "btech": {
    "title": "Study B.Tech in India for Indian Students",
    "heroImage": "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1600",
    "intro": "B.Tech in India, also known as Bachelor of Technology, is a four-year professional undergraduate program that provides practical and theoretical knowledge of engineering and technology. The course is divided into 8 semesters and offers multiple specializations. B.Tech graduates find opportunities not only in core engineering roles but also as consultants, researchers, managers, and subject matter experts.",

    "why": {
      "title": "Who Should Pursue a B.Tech Course?",
      "points": [
        "Students aspiring to build a career in technology or engineering fields.",
        "Candidates interested in practical and application-based learning.",
        "Aspirants who want to specialize in a specific engineering domain.",
        "Students aiming for diverse career options beyond traditional engineering roles.",
        "Individuals seeking strong technical and problem-solving skills."
      ]
    },

    "duration": {
      "title": "Duration of B.Tech in India",
      "cards": [
        "B.Tech is a 4-year undergraduate program.",
        "The course is divided into 8 semesters.",
        "Each semester focuses on core and specialization subjects.",
        "Includes theoretical learning, practical labs, and projects."
      ]
    },

    "eligibility": {
      "title": "Eligibility Criteria for B.Tech in India",
      "points": [
        "Candidates must have passed 10+2 from a recognized board.",
        "Physics, Chemistry, and Mathematics must be core subjects.",
        "A minimum aggregate of 60% marks in PCM subjects is required.",
        "Candidates must qualify relevant entrance examinations.",
        "Eligibility criteria may vary slightly across universities."
      ]
    },

    "documents": {
      "title": "Documents Required for B.Tech Admission",
      "subtitle": "Applicants must keep the following documents ready during admission:",
      "points": [
        "Class 10 and Class 12 mark sheets.",
        "Entrance exam scorecard (JEE Main, BITSAT, or university-specific exams).",
        "School leaving or transfer certificate.",
        "Identity proof and passport-size photographs.",
        "Category certificate (if applicable)."
      ]
    },

    "process": {
      "title": "Admission Process for B.Tech in India",
      "steps": [
        "Complete 10+2 with Physics, Chemistry, and Mathematics.",
        "Appear for national or state-level entrance examinations.",
        "Participate in counseling processes such as JoSAA or state counseling.",
        "Choose college and specialization based on rank and preference.",
        "Complete document verification and confirm admission."
      ]
    },

    "economical": {
      "title": "Cost of Studying B.Tech in India",
      "points": [
        "Government engineering colleges offer affordable fee structures.",
        "Private colleges have higher tuition fees depending on reputation.",
        "Fees vary based on specialization and institution.",
        "Living costs are reasonable compared to many foreign countries.",
        "Scholarships and education loans are widely available."
      ]
    },

    "advantages": {
      "title": "Advantages of Studying B.Tech in India",
      "points": [
        "Wide availability of engineering colleges across the country.",
        "Strong focus on practical and industry-oriented education.",
        "Multiple specializations to choose from.",
        "Good placement opportunities in top companies.",
        "Exposure to research, innovation, and entrepreneurship."
      ]
    },

    "international": {
      "title": "B.Tech in India for International Students",
      "points": [
        "International students can apply to select Indian universities.",
        "Admission criteria may differ for foreign nationals.",
        "Some institutions offer direct admission without entrance exams.",
        "Fees for international students may vary.",
        "Indian engineering degrees are globally recognized."
      ]
    },

    "dates": {
      "title": "Important Dates for B.Tech in India",
      "points": [
        "Entrance exams are generally conducted between January and April.",
        "Counseling processes usually begin after exam results.",
        "Academic sessions typically start between July and August."
      ]
    },

    "govt": {
      "title": "Why Choose Government Engineering Colleges in India?",
      "points": [
        "Low tuition fees compared to private colleges.",
        "Admissions based on national-level merit exams like JEE Main.",
        "High academic standards and experienced faculty.",
        "Strong alumni network and placement support."
      ]
    },

    "explore": {
      "title": "Explore Beautiful India",
      "points": [
        "Delhi is the capital of India.",
        "The official language is Hindi.",
        "More than 80% of India's population speaks English.",
        "The currency of India is Indian Rupee (INR).",
        "India shares borders with China, Pakistan, Nepal, Myanmar, Afghanistan, and Bhutan.",
        "India has a tropical monsoon and wet-dry climate.",
        "The population of India is approximately 133.92 crores.",
        "India has the largest postal network with over 1,55,015 post offices.",
        "India is known for its diversity, technology hubs, and education ecosystem."
      ]
    }
  },
  "mba": {
    "title": "Study MBA in India for Indian Students",
    "heroImage": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1600",
    "intro": "The Master of Business Administration (MBA) is one of the most sought-after postgraduate programs worldwide. With a large number of reputed MBA colleges, India has become a prime destination for management education. Whether you are a fresh graduate, a working professional looking to switch roles, or an aspiring entrepreneur, an MBA in India equips you with strong managerial, leadership, and strategic skills.",

    "why": {
      "title": "Scope of MBA Study in India",
      "points": [
        "The scope of MBA in India is growing rapidly every year.",
        "MBA is a highly job-oriented and preferred professional program.",
        "Graduates get excellent job opportunities across industries.",
        "Students can work as executives, managers, and senior leaders.",
        "MBA professionals can work in government and private sectors.",
        "Opportunities are available across industries, companies, and organizations."
      ]
    },

    "duration": {
      "title": "Duration of MBA in India",
      "cards": [
        "MBA is generally a 2-year postgraduate program.",
        "The course is divided into 4 semesters.",
        "Some institutes offer 1-year executive MBA programs.",
        "Includes classroom learning, case studies, and internships."
      ]
    },

    "eligibility": {
      "title": "Eligibility Criteria for MBA Admission in India",
      "points": [
        "Candidates must have completed graduation from a recognized university.",
        "Applicants must have secured qualifying marks in their bachelor’s degree.",
        "Candidates should score well in entrance exams like CAT, GMAT, GRE, XAT, or MAT.",
        "Some top B-schools require 2–5 years of work experience.",
        "Eligibility criteria may vary from college to college."
      ]
    },

    "documents": {
      "title": "Documents Required for MBA Admission",
      "subtitle": "Applicants must keep the following documents ready:",
      "points": [
        "Graduation mark sheets and degree certificate.",
        "Entrance exam scorecard (CAT/GMAT/GRE/XAT/MAT, etc.).",
        "Work experience certificates (if applicable).",
        "Identity proof and passport-size photographs.",
        "Statement of Purpose (SOP) and resume (if required)."
      ]
    },

    "process": {
      "title": "Admission Process for MBA in India",
      "steps": [
        "Complete graduation from a recognized university.",
        "Appear for national or institute-level MBA entrance exams.",
        "Shortlisted candidates attend group discussion and personal interview.",
        "Final selection based on entrance score, academics, and experience.",
        "Confirm admission after document verification."
      ]
    },

    "economical": {
      "title": "Cost of Studying MBA in India",
      "points": [
        "MBA fees vary depending on the institute and program type.",
        "Government and public universities offer lower fee structures.",
        "Top private B-schools have higher tuition fees.",
        "Education loans and scholarships are widely available.",
        "Living expenses depend on the city and lifestyle."
      ]
    },

    "advantages": {
      "title": "Advantages of Studying MBA in India",
      "points": [
        "Better job opportunities and leadership roles.",
        "Faster career growth compared to general graduates.",
        "Exposure to real-world business challenges.",
        "Strong corporate and alumni network.",
        "Higher salary packages from reputed B-schools."
      ]
    },

    "international": {
      "title": "MBA in India for International Students",
      "points": [
        "International students can apply to selected Indian B-schools.",
        "Some institutes accept GMAT or GRE scores.",
        "Eligibility and fee structure may differ for foreign nationals.",
        "Indian MBA degrees are recognized globally.",
        "Students gain exposure to emerging markets and industries."
      ]
    },

    "dates": {
      "title": "Important Dates for MBA Admission in India",
      "points": [
        "MBA entrance exams are conducted between November and February.",
        "Application and shortlisting processes follow exam results.",
        "Academic sessions usually begin between June and August."
      ]
    },

    "govt": {
      "title": "Why Choose Government MBA Colleges in India?",
      "points": [
        "Affordable fee structure compared to private institutes.",
        "High academic standards and experienced faculty.",
        "Admissions based on national-level merit exams.",
        "Good placement opportunities in public and private sectors."
      ]
    },

    "explore": {
      "title": "Explore Beautiful India",
      "points": [
        "Delhi is the capital of India.",
        "The official language is Hindi.",
        "More than 80% of India's population speaks English.",
        "The currency of India is Indian Rupee (INR).",
        "India shares borders with China, Pakistan, Nepal, Myanmar, Afghanistan, and Bhutan.",
        "India has a tropical monsoon and wet-dry climate.",
        "The population of India is approximately 133.92 crores.",
        "India has the largest postal network with over 1,55,015 post offices.",
        "India is a major global hub for education, business, and innovation."
      ]
    }
  }

};

export const STUDENT_SERVICES_DATA: Service[] = [
  {
    id: "career-counselling",
    title: "Career Counselling",
    desc: "Personalized career guidance to help you choose the right academic and professional path.",
    icon: "fa-solid fa-comments",
    fullDesc:
      "Choosing the right career path can be overwhelming with so many options available today. Our expert career counsellors evaluate your interests, skills, qualifications, and personality to guide you toward the best-fit career plan. We provide unbiased advice that eliminates confusion and helps you make informed decisions with clarity and confidence."
  },
  {
    id: "test-preparation",
    title: "Test Preparation",
    desc: "Expert coaching to help you achieve top scores in competitive exams.",
    icon: "fa-solid fa-graduation-cap",
    fullDesc:
      "Our highly experienced tutors, with over two decades of expertise, have helped thousands of students achieve excellence in standardized tests. We use effective, interactive, and engaging methodologies to make learning easy and enjoyable. Enroll with us and confidently achieve the scores you are aiming for."
  },
  {
    id: "course-country-selection",
    title: "Course, Country & University Selection",
    desc: "Guidance to select the ideal course, university, and destination based on your goals.",
    icon: "fa-solid fa-earth-americas",
    fullDesc:
      "We help you choose the ideal course, university, and country that align perfectly with your academic background, career aspirations, and financial preferences. Our experts analyze rankings, opportunities, and long-term prospects to ensure you make the right choice for your future."
  },
  {
    id: "admission-guidance",
    title: "Admission Guidance",
    desc: "Complete assistance with applications, SOPs, resumes, and university follow-ups.",
    icon: "fa-solid fa-file-signature",
    fullDesc:
      "Selecting the right institution is crucial for your success. Our admission experts guide you through the entire application process, including preparing resumes, statements of purpose, portfolios, and required documentation. We provide detailed information about university rankings and opportunities and maintain regular follow-ups to ensure timely admission decisions."
  },
  {
    id: "scholarships",
    title: "Scholarships & Financial Aid",
    desc: "Support in securing scholarships, bursaries, and tuition fee waivers.",
    icon: "fa-solid fa-award",
    fullDesc:
      "We help students secure financial aid through scholarships, tuition fee bursaries, and application fee waivers. Our structured approach ensures your academic achievements and extracurricular strengths are effectively highlighted. With our strong university network and step-by-step guidance, we maximize your chances of receiving financial assistance."
  },
  {
    id: "education-loan",
    title: "Education Loan Assistance",
    desc: "Guidance to secure education loans from leading banks and institutions.",
    icon: "fa-solid fa-building-columns",
    fullDesc:
      "We assist students in connecting with public and private sector banks that provide education loans for higher studies abroad. From documentation to approval processes, our experts guide you at every step to ensure a smooth and hassle-free loan sanction process."
  },
  {
    id: "visa-processing",
    title: "Visa Processing",
    desc: "End-to-end visa documentation and interview preparation support.",
    icon: "fa-solid fa-passport",
    fullDesc:
      "Our skilled visa experts help you prepare and present your visa application documents accurately to Embassies and High Commissions. We ensure proper documentation, interview preparation, and timely submission to achieve a successful visa outcome with minimal delays."
  }
];

export const COUNTRY_DETAILS: any = {}; // Placeholder if needed

export const BLOG_POSTS: Blog[] = [
  {
    id: "1",
    title: "Top 5 Countries for MBBS Abroad in 2025",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    date: "Jan 15, 2025",
    category: "MBBS Abroad",
    author: "Admin",
    content: `
      <p>Choosing the right destination for your MBBS degree is a crucial decision that shapes your future medical career. In 2025, several countries have emerged as top choices for Indian students due to their affordable fees, high-quality education, and NMC recognition. Here is a curated list of the top 5 countries to consider.</p>
      
      <h3>1. Russia</h3>
      <p>Russia remains the undisputed leader for medical education abroad. With universities like Kazan Federal University and First Moscow State Medical University, it offers world-class infrastructure at a fraction of the cost of Indian private colleges. The medium of instruction is English, and degrees are recognized globally by WHO and NMC.</p>
      <blockquote>"Russia offers a blend of theoretical knowledge and extensive clinical exposure, making it a prime choice for aspiring doctors."</blockquote>

      <h3>2. Georgia</h3>
      <p>Georgia has rapidly climbed the ranks to become a favorite. Known for its safety and European standard of living, colleges like Tbilisi State Medical University provide education that is 100% in English. The climate is pleasant, and the community is welcoming to Indian students.</p>

      <h3>3. Kazakhstan</h3>
      <p>For students looking for the most budget-friendly options without compromising on quality, Kazakhstan is the answer. Universities here have a 5-year course duration, similar to India, which is a significant advantage.</p>

      <h3>4. Philippines</h3>
      <p>The Philippines follows the American curriculum, which is excellent for students aiming to crack the USMLE. The disease patterns are similar to India, providing relevant clinical experience.</p>

      <h3>5. Bangladesh</h3>
      <p>With a culture, food, and climate almost identical to India, Bangladesh offers a home away from home. The syllabus is also very similar to the NMC curriculum, leading to high FMGE passing rates.</p>

      <h3>Conclusion</h3>
      <p>Each of these countries has its unique advantages. Your choice should depend on your budget, career goals, and preference for climate and culture. Contact iExplain Education today for a personalized counseling session to help you decide.</p>
    `,
    readTime: "5 min"
  },
  {
    id: "2",
    title: "How to Crack NEET 2025: Expert Tips",
    img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=800",
    date: "Jan 10, 2025",
    category: "Entrance Exams",
    author: "Dr. Sharma",
    content: `
      <p>The National Eligibility cum Entrance Test (NEET) is the gateway to medical colleges in India. With competition increasing every year, cracking NEET 2025 requires not just hard work, but smart work. Here are expert tips to guide your preparation.</p>

      <h3>1. Master the NCERT</h3>
      <p>The NCERT textbooks are your bible. 80-90% of the biology questions and a significant portion of chemistry and physics questions come directly from NCERT. Ensure you read every line, summary, and diagram.</p>

      <h3>2. Strategic Time Management</h3>
      <p>Create a timetable that allocates time for all three subjects. Don't neglect Physics; it is often the rank decider. Practice solving questions within a time limit to improve your speed and accuracy.</p>

      <h3>3. Mock Tests and Analysis</h3>
      <p>Taking mock tests is crucial, but analyzing them is even more important. Identify your weak areas after every test and work on them. Understand why you got a question wrong – was it a conceptual error or a silly mistake?</p>

      <h3>4. Health is Wealth</h3>
      <p>A burnt-out mind cannot retain information. Ensure you get 7 hours of sleep, eat healthy, and take short breaks. A calm mind performs significantly better in exams.</p>

      <p>Remember, consistency is key. Stay focused, stay positive, and you will achieve your dream of becoming a doctor.</p>
    `,
    readTime: "4 min"
  },
  {
    id: "3",
    title: "Study in UK Without IELTS",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800",
    date: "Jan 05, 2025",
    category: "Study Abroad",
    author: "Admin",
    content: `
      <p>Dreaming of studying in the United Kingdom but worried about the IELTS exam? Good news! Many prestigious UK universities accept students without IELTS scores based on their Class 12th English marks or other criteria. Let's explore how.</p>

      <h3>Alternative Criteria</h3>
      <p>Universities often waive the IELTS requirement if you have scored over 70-75% in English in your Class 12th board exams (CBSE/ICSE). Some universities may also conduct their own internal English test or a video interview to assess your proficiency.</p>

      <h3>Top Universities Accepting MOI</h3>
      <p>Medium of Instruction (MOI) letters from your previous institution stating that your education was in English can also work. Some universities accepting alternatives include:</p>
      <ul>
        <li>University of Bristol</li>
        <li>University of Warwick</li>
        <li>Sheffield Hallam University</li>
        <li>University of Greenwich</li>
        <li>Swansea University</li>
      </ul>

      <h3>Benefits of Studying in UK</h3>
      <p>The UK offers 1-year Master's programs, which saves you time and money. Additionally, the 2-year Post-Study Work (PSW) visa allows you to stay and work in the UK after graduation, providing excellent career exposure.</p>

      <p>Don't let language tests be a barrier. Contact iExplain Education to assess your profile and apply to the best UK universities today.</p>
    `,
    readTime: "6 min"
  }
];

export const SCHOLARSHIP_COUNTRIES = [
  "UK", "Australia", "Canada", "New Zealand", "Poland", "Singapore", "Ireland"
];

// ... [Keep the rest of the file unchanged: SCHOLARSHIP_DATA, STUDY_ABROAD_DETAILED, MBBS_ABROAD_DETAILED, EXAMS_DETAILED, MEGA_MENU_DATA, DESTINATIONS, STATS, TESTIMONIALS, INDIA_COURSES, ROADMAP_STEPS, POPULAR_COLLEGES, COUNTRY_ICONS, KNOW_YOUR_DESTINATIONS] ...
export const SCHOLARSHIP_DATA: Record<string, ProgramDetailData> = {};
SCHOLARSHIP_COUNTRIES.forEach(c => {
  SCHOLARSHIP_DATA[c.toLowerCase().replace(/ /g, '-')] = {
    title: `Scholarships in ${c}`,
    tagline: "Fund Your Dream Education",
    heroImage: "https://images.unsplash.com/photo-1621640786029-22ad870a7676?auto=format&fit=crop&q=80&w=1600",
    content: `<h3>Scholarship Opportunities in ${c}</h3><p>Discover a wide range of scholarships available for international students in ${c}. From government-funded programs to university-specific grants, we help you find the financial aid you deserve.</p><ul><li>Merit-based Scholarships</li><li>Need-based Grants</li><li>Research Fellowships</li></ul><p>Contact our counselors to get a personalized list of scholarships you are eligible for.</p>`
  };
});

export const STUDY_ABROAD_DETAILED: Record<string, ProgramDetailData> = {
  "usa": {
    title: "Study In USA",
    tagline: "The world's leading destination for higher education.",
    heroImage: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=1600",
    content: `
      <h3>About USA</h3>
      <p>The USA is a vast country, and every state is unique in its culture, climate, history, economy and more. It is one of the best destinations in the whole world, for higher education in the fields of science, technology and management. No other country extends its arms as widely as the US, to welcome international students. It has been third largest country in size and population apart from that it is one of the strongest economies of the world. It continues to host an increasing number of students and scholars from around the world. U.S. offers various options to choose from according to your academic and cultural preferences, it is important to introspect and make an informed decision before taking the plunge. Studying abroad doesn't just give you tangible degrees and certificates; it is an experience that helps you evolve once you set out of your comfort zone. Study in USA not only broadens student's educational experience, but Cultural opportunities as well.</p>
    `,
    "faqs": [
      {
        "question": "Why should I study in the USA?",
        "answer": "The USA offers globally recognized education, independent quality assurance, academic excellence, diverse courses, advanced research opportunities, strong career prospects, multicultural exposure, and exciting campus life."
      },
      {
        "question": "How is the quality of education ensured in the USA?",
        "answer": "Educational quality is maintained through independent accrediting bodies recognized by the US Department of Education and the Council for Higher Education Accreditation (CHEA), rather than direct government control."
      },
      {
        "question": "What makes US universities academically excellent?",
        "answer": "The USA has the highest number of world-ranked universities, known globally for high academic standards, innovative teaching methods, and a wide range of quality programs."
      },
      {
        "question": "What types of courses are available in the USA?",
        "answer": "US institutions offer a wide variety of programs including undergraduate, graduate, master’s, research, and job-oriented courses across fields like engineering, business, biotechnology, design, science, and technology."
      },
      {
        "question": "Are research and training opportunities available for international students?",
        "answer": "Yes, US universities—especially large research institutions—provide advanced research facilities and opportunities to work closely with leading professors and scholars."
      },
      {
        "question": "What career opportunities are available for international students in the USA?",
        "answer": "An American degree opens doors to global career opportunities. International students can work on-campus up to 20 hours per week and gain real-world experience through internships and extracurricular activities."
      },
      {
        "question": "Is the cost of living and education high in the USA?",
        "answer": "While the cost of living and education is relatively high, many universities offer financial aid, scholarships, and teaching or research assistantships to support international students."
      },
      {
        "question": "What is campus life like in the USA?",
        "answer": "US campuses offer vibrant student life with cultural and non-cultural activities, providing an inclusive and exciting environment for international students."
      },
      {
        "question": "How diverse is the society in the USA?",
        "answer": "The USA is a multicultural society with people from all over the world, allowing students to experience diverse cultures, languages, and beliefs."
      },
      {
        "question": "How does the USA education system work?",
        "answer": "The US education system is decentralized and flexible, offering associate, bachelor’s, master’s, and doctoral degrees through public and private universities, community colleges, liberal arts colleges, technical institutes, and Ivy League institutions."
      },
      {
        "question": "What study options are available in the USA?",
        "answer": "Students can choose from over 3,500 accredited institutions including public and private universities, technical institutes, Ivy League schools, liberal arts colleges, and community colleges."
      },
      {
        "question": "What accommodation options are available for international students?",
        "answer": "International students can choose on-campus housing, off-campus accommodation, or homestays depending on their budget and lifestyle preferences."
      },
      {
        "question": "What are the intake periods in the USA?",
        "answer": "The major intake is Fall, with many universities also offering Spring intakes and limited Summer or Winter intakes."
      },
      {
        "question": "What is the process for obtaining a US student visa?",
        "answer": "Students must receive an acceptance letter from a US institution and then apply for a student visa by meeting academic, financial, language, and documentation requirements, including an interview in most cases."
      },
      {
        "question": "What documents should I prepare before leaving for the USA?",
        "answer": "Students should carry important documents such as passport, visa, offer letter, enrollment confirmation, academic certificates, financial records, health insurance, accommodation details, and necessary medications."
      }
    ]
  },
  // Placeholder for others to avoid crash
  "uk": {
    title: "Study in UK",
    content: "The United Kingdom is one of the world’s top study destinations, known for its high-quality education and globally recognized qualifications. The UK offers a modern learning environment, flexible education system, and shorter course durations. Students benefit from strong academic standards, excellent research facilities, and multicultural exposure. Studying in the UK opens doors to global career opportunities while providing a rich cultural experience.",
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1600",
    faqs: [
      {
        question: "Why study in the UK?",
        answer: "The UK offers internationally accepted degrees, high academic standards, research excellence, multicultural exposure, and strong career opportunities."
      },
      {
        question: "How is the quality of education maintained in the UK?",
        answer: "The Quality Assurance Agency (QAA) monitors teaching standards and facilities, while research quality is reviewed through national assessment frameworks."
      },
      {
        question: "What courses can I study in the UK?",
        answer: "UK universities offer a wide range of courses including engineering, business, science, health, law, arts, management, technology, and social sciences."
      },
      {
        question: "What are the study options in the UK?",
        answer: "The UK typically offers 3-year undergraduate degrees, 1-year master’s programs, foundation courses, and English language programs."
      },
      {
        question: "What accommodation options are available for international students?",
        answer: "Students can choose from on-campus university halls, off-campus private accommodation, or homestays with UK families."
      },
      {
        question: "What are the main intakes in the UK?",
        answer: "The primary intake is September, with limited January intakes available at some universities."
      },
      {
        question: "What English language test is required?",
        answer: "IELTS is the most commonly accepted English language test, though requirements vary by course and university."
      },
      {
        question: "What should I prepare before leaving for the UK?",
        answer: "Students should carry a valid passport and visa, financial documents, medical insurance, offer letter, prescriptions, and required academic records."
      }
    ]
  },
  "ireland": {
    title: "Study in Ireland",
    content: "Ireland is one of Europe’s fastest-growing economies and a popular destination for international students. It is an English-speaking country known for high-quality education, strong research output, and global industry connections. Ireland hosts European headquarters of leading multinational companies, offering excellent career prospects. With a young population, rich cultural heritage, and safe living environment, Ireland provides an ideal balance of education and lifestyle for students.",
    heroImage: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&q=80&w=1600",
    faqs: [
      {
        "question": "Why study in Ireland?",
        "answer": "Ireland offers globally recognized education, strong research opportunities, industry exposure through multinational companies, post-study work options, and a friendly, safe environment."
      },
      {
        "question": "Are Irish qualifications internationally recognized?",
        "answer": "Yes, Irish universities and institutions offer qualifications accredited under the National Framework of Qualifications (NFQ), which are recognized worldwide."
      },
      {
        "question": "What courses are available in Ireland?",
        "answer": "Ireland offers a wide range of programs in engineering, science, technology, medicine, health, business, law, humanities, languages, psychology, and more."
      },
      {
        "question": "What is the Ireland education system like?",
        "answer": "The Irish education system includes primary, secondary, and third-level education, offering certificates, diplomas, degrees, and postgraduate programs with strong quality assurance."
      },
      {
        "question": "What are the study options in Ireland?",
        "answer": "Students can pursue degree, diploma, and certificate programs at universities, technical institutes, and colleges of education across more than 5,000 programs."
      },
      {
        "question": "What accommodation options are available for international students?",
        "answer": "Students can choose from on-campus housing, off-campus private rentals, or homestays, depending on their budget and preferences."
      },
      {
        "question": "What is the cost of living like in Ireland?",
        "answer": "Ireland offers a competitive cost of living for students, supported by part-time work opportunities and scholarships."
      },
      {
        "question": "Can international students work while studying in Ireland?",
        "answer": "Yes, international students are allowed to work part-time during their studies, gaining valuable work experience."
      },
      {
        "question": "What post-study work options are available in Ireland?",
        "answer": "Ireland offers post-study work visas that allow graduates to seek employment and apply for work permits or green cards."
      },
      {
        "question": "What are the intakes in Ireland?",
        "answer": "The main intake is in September, with a limited February intake available at some universities and colleges."
      },
      {
        "question": "What documents are required for an Ireland student visa?",
        "answer": "Students need an offer letter, proof of funds, passport, language proficiency, health insurance, academic documents, and other supporting materials."
      },
      {
        "question": "What should I prepare before leaving for Ireland?",
        "answer": "Students should carry their passport and visa, offer letter, accommodation details, health insurance, financial records, prescriptions, and important contact information."
      }
    ]
  },
  "canada": {
    title: "Study in Canada",
    content: "Canada is one of the world’s most preferred study destinations, known for high-quality education, affordability, and an excellent standard of living. With globally recognized qualifications and strong academic standards, Canada offers outstanding learning opportunities. The country is highly multicultural, safe, and welcoming to international students. Strong industry links, co-op programs, and post-study work options make Canada ideal for long-term career growth.",
    heroImage: "https://plus.unsplash.com/premium_photo-1694475481348-7cbe417be129?q=80&w=870",
    faqs: [
      {
        "question": "Why study in Canada?",
        "answer": "Canada offers world-recognized education, affordable tuition, a safe environment, multicultural exposure, and excellent career and immigration opportunities."
      },
      {
        "question": "Are Canadian qualifications internationally recognized?",
        "answer": "Yes, Canadian degrees, diplomas, and certificates are globally recognized and equivalent to those from the USA and Commonwealth countries."
      },
      {
        "question": "What is the Canadian education system like?",
        "answer": "Canada has a decentralized education system managed by provinces, offering bachelor’s, master’s, doctoral, diploma, and certificate programs with strong research focus."
      },
      {
        "question": "What study options are available in Canada?",
        "answer": "Students can study at universities, colleges, community colleges, and technical institutes across fields such as engineering, business, health, IT, sciences, arts, and technology."
      },
      {
        "question": "What are co-op programs in Canada?",
        "answer": "Co-op programs combine academic studies with paid work experience, allowing students to gain real-world industry exposure while earning their degree."
      },
      {
        "question": "Can international students work while studying in Canada?",
        "answer": "Yes, international students can work part-time during their studies, helping them gain experience and support living expenses."
      },
      {
        "question": "What post-study work options are available in Canada?",
        "answer": "Graduates may apply for a Post-Graduation Work Permit (PGWP), allowing them to work in Canada for up to three years."
      },
      {
        "question": "What accommodation options are available in Canada?",
        "answer": "Students can choose on-campus housing, off-campus private rentals, or homestay options with Canadian families."
      },
      {
        "question": "What are the main intakes in Canada?",
        "answer": "The major intake is in September, followed by a January intake. Some institutions also offer a limited May intake."
      },
      {
        "question": "What documents are required for a Canadian student visa?",
        "answer": "Students need an offer letter, proof of funds, valid passport, language proficiency proof, medical documents, photographs, and a completed study permit application."
      },
      {
        "question": "What should I prepare before leaving for Canada?",
        "answer": "Students should ensure they have their passport and visa, insurance, financial documents, prescriptions, copies of paperwork, baggage details, and appropriate clothing for Canada’s climate."
      }
    ]
  },
  "australia": {
    title: "Study in Australia",
    content: "Australia is one of the world’s top study destinations, known for its globally recognized education system and high standard of living. It is home to several top-ranked universities and offers a wide range of academic programs. With advanced research facilities, strong quality assurance, and a welcoming environment, Australia provides excellent opportunities for international students. Its multicultural society and post-study work options make it an attractive choice for global careers.",
    heroImage: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1033&auto=format&fit=crop",
    faqs: [
      {
        "question": "Why study in Australia?",
        "answer": "Australia offers world-recognized qualifications, advanced research facilities, high academic standards, multicultural exposure, and strong career opportunities."
      },
      {
        "question": "Are Australian degrees internationally recognized?",
        "answer": "Yes, Australian qualifications are globally recognized and regulated under the Australian Qualifications Framework (AQF)."
      },
      {
        "question": "How is education quality maintained in Australia?",
        "answer": "The Australian government ensures quality through TEQSA and the Australian Qualifications Framework (AQF)."
      },
      {
        "question": "What courses can I study in Australia?",
        "answer": "Australia offers degrees, diplomas, and certificates across fields such as engineering, business, health, IT, sciences, arts, and social sciences."
      },
      {
        "question": "What are the study options in Australia?",
        "answer": "Students can study at universities, vocational education providers, and English language training institutions."
      },
      {
        "question": "Can international students work while studying in Australia?",
        "answer": "Yes, international students can work up to 40 hours per fortnight during their studies."
      },
      {
        "question": "What accommodation options are available in Australia?",
        "answer": "Students can choose from on-campus housing, off-campus rentals, or homestay options with Australian families."
      },
      {
        "question": "What are the main intakes in Australia?",
        "answer": "The main intakes are in February/March and July, with some universities offering additional intakes in September or November."
      },
      {
        "question": "What are the visa requirements for international students in Australia?",
        "answer": "Students must meet academic and English language requirements, show proof of funds, obtain Overseas Student Health Cover (OSHC), and receive a Confirmation of Enrolment (CoE)."
      },
      {
        "question": "What should I prepare before leaving for Australia?",
        "answer": "Students should carry their passport and visa, offer letter, CoE, insurance documents, academic records, financial receipts, prescriptions, and be aware of baggage allowances and climate conditions."
      }
    ]
  },
  "dubai": {
    title: "Study in Dubai",
    content: "Dubai is a rapidly growing global education hub and a top choice for international students, especially from India. Known for its safety, tax-free income, and modern lifestyle, Dubai offers globally recognized education through international university campuses. With flexible visa policies, strong industry presence, and excellent career opportunities, Dubai combines quality education with a dynamic multicultural environment.",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=870&auto=format&fit=crop",
    faqs: [
      {
        "question": "Why study in Dubai?",
        "answer": "Dubai offers globally recognized education, flexible visa policies, tax-free salaries, strong career opportunities, and a safe, multicultural environment."
      },
      {
        "question": "Are universities in Dubai internationally recognized?",
        "answer": "Yes, many universities in Dubai are accredited by the UAE Ministry of Higher Education and also by international accrediting bodies. Several global universities operate branch campuses in Dubai."
      },
      {
        "question": "What are the popular courses to study in Dubai?",
        "answer": "Popular courses include Business Management, Tourism and Hospitality, Aerospace Engineering, Civil Engineering, Construction Management, and Architecture."
      },
      {
        "question": "How is the education system in Dubai structured?",
        "answer": "Dubai’s education system includes basic education, K–12 schooling, and higher education with public and private universities, technical institutes, and international institutions."
      },
      {
        "question": "What are the eligibility requirements to study in Dubai?",
        "answer": "Eligibility varies by university, but generally includes academic qualifications, English proficiency, completed application forms, and subject-specific requirements where applicable."
      },
      {
        "question": "What English language tests are accepted in Dubai?",
        "answer": "Universities in Dubai commonly accept IELTS, TOEFL (iBT or paper-based), PTE Academic, and in some cases EmSAT or GMAT depending on the program."
      },
      {
        "question": "Can international students work while studying in Dubai?",
        "answer": "Yes, Dubai allows international students to work part-time with approved employers under flexible visa regulations."
      },
      {
        "question": "What scholarship options are available in Dubai?",
        "answer": "Dubai offers various scholarships for international students, including merit-based and country-specific scholarships, particularly for Indian students."
      },
      {
        "question": "What career opportunities are available after studying in Dubai?",
        "answer": "Dubai offers abundant career opportunities across industries such as business, technology, construction, aviation, healthcare, and research, with the benefit of tax-free income."
      },
      {
        "question": "What is the step-by-step admission process to study in Dubai?",
        "answer": "The process includes researching universities, preparing academic and personal documents, meeting language requirements, submitting online applications, and paying applicable fees."
      }
    ]
  },
  "newZealand": {
    title: "Study in New Zealand",
    content: "New Zealand is a top study destination known for its breathtaking landscapes, safe environment, and high-quality education system. With globally recognized qualifications and English as the primary language, it offers an excellent learning experience for international students. The country combines academic excellence with a balanced lifestyle and strong post-study work opportunities. Its multicultural society and affordable education make New Zealand an ideal choice for students worldwide.",
    heroImage: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=871&auto=format&fit=crop",
    faqs: [
      {
        "question": "Why study in New Zealand?",
        "answer": "New Zealand offers globally recognized education, strong quality assurance, affordable living costs, excellent work opportunities, and a friendly multicultural environment."
      },
      {
        "question": "How is education quality maintained in New Zealand?",
        "answer": "Education quality is ensured by independent bodies such as the New Zealand Qualifications Authority (NZQA), CUAP, and the Academic Quality Agency for New Zealand Universities."
      },
      {
        "question": "What courses are popular in New Zealand?",
        "answer": "Popular courses include Information Technology, Hospitality and Tourism, Business, Accounting, Engineering, Science, Arts, Design, and Culinary Studies."
      },
      {
        "question": "What study options are available in New Zealand?",
        "answer": "Students can pursue certificates, diplomas, undergraduate, postgraduate, and doctoral programs at universities, polytechnics, and private training establishments."
      },
      {
        "question": "Can international students work while studying in New Zealand?",
        "answer": "Yes, students can work up to 20 hours per week during semesters and up to 40 hours during vacations."
      },
      {
        "question": "What post-study work options are available in New Zealand?",
        "answer": "Graduates may receive a post-study work visa, allowing them to seek employment and potentially apply for permanent residency."
      },
      {
        "question": "What accommodation options are available in New Zealand?",
        "answer": "Students can choose on-campus housing, off-campus rentals, or homestay options with local Kiwi families."
      },
      {
        "question": "What are the main intakes in New Zealand?",
        "answer": "The main intakes are in February and July, with some institutions also offering a September intake."
      },
      {
        "question": "What are the visa requirements for international students in New Zealand?",
        "answer": "Students need an offer letter, proof of funds, medical certificates, police clearance, accommodation proof, health insurance, and a valid passport."
      },
      {
        "question": "What should I prepare before leaving for New Zealand?",
        "answer": "Students should carry their passport and visa, insurance, academic documents, medications, luggage details, and pack according to New Zealand’s climate."
      }
    ]
  },
  "europe": {
    title: "Study in Europe",
    content: "Europe is one of the most popular study destinations in the world, offering world-class education, rich cultural diversity, and excellent career prospects. Home to many top-ranked universities, Europe provides a wide range of programs taught in English. With low or no tuition fees in several countries, strong research opportunities, and easy travel across nations, Europe offers an unmatched international study experience.",
    heroImage: "https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?q=80&w=870&auto=format&fit=crop",
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

export const MBBS_ABROAD_DETAILED: Record<string, MBBSDetailData> = {
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
  "georgia": {
    title: "MBBS in Georgia",
    heroImage: "https://images.unsplash.com/photo-1549466785-f5c1771646cc?q=80&w=774&auto=format&fit=crop",
    intro: {
      text: "Georgia is the 6th safest country in the world and a premium destination for Indian medical students. With 25 NMC-approved medical universities, Georgia provides world-class medical education at affordable costs, a multicultural environment, and international exposure.",
      image: "https://images.unsplash.com/photo-1568632102228-b7d3e77459c3?q=80&w=871&auto=format&fit=crop"
    },
    highlights: [
      { title: "Duration", value: "5.8 - 6 Years" },
      { title: "Medium", value: "English" },
      { title: "Climatic Conditions", value: "Short & mild winters, Long & hot summers" },
      { title: "Admission Criteria", value: "Minimum 50% in 10+2, NEET qualified" }
    ],
    topUniversities: [
      "BAU International University",
      "Grigol Robakidze University",
      "Batumi Shota Rustaveli University",
      "New Vision University"
    ],
    facts: {
      intro: "Georgia Facts",
      list: [
        "Located at the intersection of West Asia and East Europe",
        "Former Soviet republic, independence in 1991",
        "Government-funded universities ensure low tuition",
        "English-taught programs recognized by NMC, WHO, FAIMER, ECFMG",
        "Affordable living and accommodation (≈ $300/month)"
      ]
    },
    documents: [
      { icon: "fa-solid fa-passport", label: "Valid Passport" },
      { icon: "fa-solid fa-file-lines", label: "Class X and XII Certificates and Mark Sheets" },
      { icon: "fa-solid fa-chart-column", label: "NEET Scorecard" },
      { icon: "fa-solid fa-certificate", label: "Birth Certificate" },
      { icon: "fa-solid fa-building-columns", label: "Bank Statement" },
      { icon: "fa-solid fa-image", label: "Passport-size Photographs" },
      { icon: "fa-solid fa-notes-medical", label: "Medical Test Reports (Covid & HIV)" }
    ],

    advantages: [
      "Affordable tuition fees (4000-8000 USD for 6 years)",
      "Approved by NMC/MCI, WHO, FAIMER, UNESCO, Georgian Ministry of Education",
      "English medium instruction, USMLE preparation",
      "Eligible for internships and further studies in Europe",
      "Warm, accepting people and a safe environment",
      "Compact course duration, saving time compared to US/UK"
    ],
    studentLife: {
      intro: "Life for MBBS students in Georgia",
      list: [
        "Different climate and lifestyle compared to India; cleaner air and less congestion",
        "Accommodation mostly off-campus but affordable and well-furnished",
        "Universities have student societies, cultural fests, sporting facilities",
        "Cafeterias offer a variety of cuisines; Indian food may be limited",
        "Pharmacies are accessible even without prescriptions",
        "Languages: Georgian, English, and Russian spoken widely",
        "Students must prepare for multiple climatic zones when traveling or exploring"
      ]
    }
  },
  "kazakhstan": {
    "title": "MBBS in Kazakhstan",
    "heroImage": "https://images.unsplash.com/photo-1549877452-9c387954fbc2?q=80&w=1200&auto=format&fit=crop",
    "intro": {
      "text": "Kazakhstan has become one of the most preferred destinations for Indian students to study MBBS abroad. The country is known for quality medical education, NMC-approved universities, and highly affordable tuition fees, making it a perfect choice for aspiring medical students.",
      "image": "https://images.unsplash.com/photo-1666975823342-3b755b3784d4?q=80&w=870&auto=format&fit=crop"
    },
    "highlights": [
      { "title": "Duration", "value": "5 - 6 Years" },
      { "title": "Medium", "value": "English" },
      { "title": "Climatic Conditions", "value": "Very hot summers & extremely cold winters" },
      { "title": "Admission Criteria", "value": "10+2 qualified & NEET (Merit-based)" }
    ],
    "topUniversities": [
      "Kokshetau State University",
      "Al-Farabi Kazakh National University",
      "Kazakh National Medical University",
      "Kazakh Medical University of Continuing Education",
      "International Medical School",
      "Semey State Medical University"
    ],
    "facts": {
      "intro": "Kazakhstan Facts",
      "list": [
        "Central Asian country with borders shared with Russia, China, Kyrgyzstan, Uzbekistan, and Turkmenistan",
        "Former Soviet republic, gained independence in 1991",
        "9th largest landlocked country in the world",
        "Four times larger than the size of Texas",
        "Almaty is the largest city in Kazakhstan",
        "Home to the world's first and largest spaceport – Baikonur Cosmodrome",
        "National drink is fermented horse milk",
        "Houses the world’s tallest chimney at Ekibastuz GRES-2 (420 meters)"
      ]
    },
    "documents": [
      { "icon": "fa-solid fa-file-lines", "label": "Class X and XII Certificates and Mark Sheets" },
      { "icon": "fa-solid fa-passport", "label": "Valid Passport" },
      { "icon": "fa-solid fa-image", "label": "Passport-size Photographs (as per university)" },
      { "icon": "fa-solid fa-chart-column", "label": "NEET Scorecard" },
      { "icon": "fa-solid fa-building-columns", "label": "Bank Statement" },
      { "icon": "fa-solid fa-notes-medical", "label": "Medical Test Reports (Covid & HIV)" }
    ],
    "advantages": [
      "Highly affordable tuition fees compared to India and other countries",
      "Simple and fast admission process",
      "NMC-approved medical universities with global recognition",
      "One of the safest countries for Indian students",
      "High literacy rate of 99.8% with quality education standards",
      "Low-cost accommodation and daily living expenses",
      "World-class infrastructure with modern labs and libraries",
      "Availability of both vegetarian and non-vegetarian food options",
      "Continental climate suitable for Indian students",
      "Advanced medical facilities and modern hospitals"
    ],
    "studentLife": {
      "intro": "Life for MBBS students in Kazakhstan",
      "list": [
        "Multicultural society with students from many countries",
        "University hostels with good security and basic amenities",
        "Affordable food, transport, and daily necessities",
        "Indian food options available in major cities",
        "Exposure to modern hospitals with advanced medical equipment",
        "Safe campus life with supportive university administration",
        "Opportunity to explore diverse landscapes including mountains, steppes, and deserts"
      ]
    }
  },
  "philippines": {
    "title": "MBBS in Philippines",
    "heroImage": "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=774&auto=format&fit=crop",
    "intro": {
      "text": "MBBS in the Philippines follows an internationally recognized MD program aligned with NMC guidelines. With WHO, NMC, and FAIMER-approved universities, affordable tuition fees, and English-medium education, the Philippines attracts thousands of Indian students every year.",
      "image": "https://images.unsplash.com/photo-1529686342540-1b43aec0df75?q=80&w=870&auto=format&fit=crop"
    },
    "highlights": [
      { "title": "Duration", "value": "5.5 Years (4.5 MD + 1 Year Internship)" },
      { "title": "Medium", "value": "English" },
      { "title": "Climatic Conditions", "value": "Monsoonal (Wet-Dry Tropical Climate)" },
      { "title": "Admission Criteria", "value": "Minimum 50% in PCB & NEET Qualified" }
    ],
    "topUniversities": [
      "Bicol Christian College of Medicine",
      "Our Lady of Fatima University",
      "University of Perpetual Help System Dalta",
      "AMA School of Medicine",
      "Emilio Aguinaldo College",
      "Davao Medical School Foundation"
    ],
    "facts": {
      "intro": "Philippines Facts",
      "list": [
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
    "documents": [
      { "icon": "fa-solid fa-file-lines", "label": "Class X and XII Certificates and Mark Sheets" },
      { "icon": "fa-solid fa-chart-column", "label": "NEET Scorecard" },
      { "icon": "fa-solid fa-passport", "label": "Valid Passport" },
      { "icon": "fa-solid fa-shield-halved", "label": "Police Clearance Certificate" },
      { "icon": "fa-solid fa-graduation-cap", "label": "Graduation Certificate (if applicable)" },
      { "icon": "fa-solid fa-notes-medical", "label": "Medical Test Reports (Covid & HIV)" },
      { "icon": "fa-solid fa-image", "label": "Passport-size Photographs (2x2)" },
      { "icon": "fa-solid fa-building-columns", "label": "Bank Statement" }
    ],
    "advantages": [
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
    "studentLife": {
      "intro": "Life for MBBS students in the Philippines",
      "list": [
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
    "title": "MBBS in Bangladesh",
    "heroImage": "https://plus.unsplash.com/premium_photo-1697729609380-5cfe9494a7c1?q=80&w=870&auto=format&fit=crop",
    "intro": {
      "text": "MBBS in Bangladesh is one of the most preferred choices for Indian students due to its close proximity, similar education system, and affordable tuition fees. The country is home to several NMC and WHO-approved government and private medical colleges offering quality medical education.",
      "image": "https://images.unsplash.com/photo-1604993497451-eed6eb271a9c?q=80&w=774&auto=format&fit=crop"
    },
    "highlights": [
      { "title": "Duration", "value": "5.5 Years" },
      { "title": "Medium", "value": "English" },
      { "title": "Climatic Conditions", "value": "Humid and Warm Climate" },
      { "title": "Admission Criteria", "value": "10+2 qualified & NEET (Merit-based)" }
    ],
    "topUniversities": [
      "US-Bangla Medical College",
      "Monno Medical College & Hospital",
      "Marks Medical College",
      "Bangladesh Medical College",
      "Barind Medical College",
      "Dhaka National Medical College"
    ],
    "facts": {
      "intro": "Bangladesh Facts",
      "list": [
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
    "documents": [
      { "icon": "fa-solid fa-file-lines", "label": "Class X and XII Mark Sheets" },
      { "icon": "fa-solid fa-certificate", "label": "Birth Certificate" },
      { "icon": "fa-solid fa-passport", "label": "Valid Passport" },
      { "icon": "fa-solid fa-image", "label": "Passport-size Photographs (8 copies)" },
      { "icon": "fa-solid fa-notes-medical", "label": "Medical Certificate" },
      { "icon": "fa-solid fa-envelope-open-text", "label": "University Invitation Letter" }
    ],
    "advantages": [
      "One of the closest and friendliest neighboring countries of India",
      "NMC-recognized medical colleges allowing practice in India",
      "Good FMGE passing percentage (around 58.57% and improving)",
      "Cuisine very similar to Indian food",
      "Low travel time and cost due to close distance",
      "English-medium MBBS program aligned with Indian education system",
      "Affordable tuition fees compared to other foreign destinations",
      "Similar climate makes adaptation easy for Indian students"
    ],
    "studentLife": {
      "intro": "Life for MBBS students in Bangladesh",
      "list": [
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
  "uzbekistan": {
    "title": "MBBS in Uzbekistan",
    "heroImage": "https://images.unsplash.com/photo-1733586092622-1b3201e802a5?q=80&w=725&auto=format&fit=crop",
    "intro": {
      "text": "MBBS in Uzbekistan has emerged as an ideal option for Indian students due to its high-quality medical education, affordable fees, and English-medium instruction. The country offers globally recognized medical degrees with strong clinical exposure and modern infrastructure.",
      "image": "https://images.unsplash.com/photo-1673446840855-1c82bafdb67d?q=80&w=863&auto=format&fit=crop"
    },
    "highlights": [
      { "title": "Duration", "value": "6 Years (5 + 1 Year Internship)" },
      { "title": "Medium", "value": "English" },
      { "title": "Climatic Conditions", "value": "Continental Climate" },
      { "title": "Admission Criteria", "value": "Minimum 50% in PCB & NEET Qualified" }
    ],
    "topUniversities": [
      "Andijan State Medical Institute",
      "Bukhara State Medical Institute",
      "Tashkent State Dental Institute",
      "Samarkand State Medical Institute"
    ],
    "facts": {
      "intro": "Uzbekistan Facts",
      "list": [
        "Central Asian country with a strong focus on medical education",
        "Medical universities recognized by NMC and WHO",
        "Government has heavily invested in medical education since 1992",
        "Tuition fees are significantly lower than Indian private medical colleges",
        "English is the primary medium of instruction for MBBS",
        "Universities follow international medical education standards",
        "Modern hospitals and well-maintained medical facilities",
        "Strong emphasis on diagnostics, regional pathology, and patient care"
      ]
    },
    "documents": [
      { "icon": "fa-solid fa-file-lines", "label": "Class X and XII Mark Sheets" },
      { "icon": "fa-solid fa-certificate", "label": "Birth Certificate" },
      { "icon": "fa-solid fa-passport", "label": "Valid Passport" },
      { "icon": "fa-solid fa-image", "label": "Passport-size Photographs (8 copies)" },
      { "icon": "fa-solid fa-notes-medical", "label": "Medical Certificate" },
      { "icon": "fa-solid fa-envelope-open-text", "label": "University Invitation Letter" }
    ]
    ,
    "advantages": [
      "Reliable and high-quality medical education at low cost",
      "Many government-funded medical universities",
      "NMC and WHO-recognized medical colleges",
      "English-medium teaching throughout the course",
      "Strong focus on scientific and clinical training",
      "Low cost of living and daily expenses",
      "Direct and non-stop flights available from India",
      "Safe hostels and well-furnished apartments for students",
      "Indian mess and authentic Indian food available",
      "Opportunities for part-time work through universities"
    ],
    "studentLife": {
      "intro": "Life for MBBS students in Uzbekistan",
      "list": [
        "Friendly and welcoming environment for Indian students",
        "Large presence of Indian and international students",
        "Globally accepted medical degrees",
        "Internship included within the course structure",
        "Highly experienced faculty and professors",
        "Affordable lifestyle with good living standards",
        "Safe campuses with modern facilities",
        "Strong academic ecosystem with over 7,000 Indian students enrolled"
      ]
    }
  },
  "nepal": {
    "title": "MBBS in Nepal",
    "heroImage": "https://plus.unsplash.com/premium_photo-1688645554172-d3aef5f837ce?q=80&w=876&auto=format&fit=crop",
    "intro": {
      "text": "Nepal is one of the most preferred destinations for Indian students to pursue MBBS due to its proximity, similar education system, and hassle-free admission process. With NMC and WHO-approved medical colleges, Nepal offers quality medical education at an affordable cost.",
      "image": "https://images.unsplash.com/photo-1611516491426-03025e6043c8?q=80&w=1033&auto=format&fit=crop"
    },
    "highlights": [
      { "title": "Duration", "value": "6 Years" },
      { "title": "Medium", "value": "English" },
      { "title": "Climatic Conditions", "value": "Subtropical Lowlands & Cold Mountain Climate" },
      { "title": "Admission Criteria", "value": "10+2 qualified & NEET (Merit-based)" }
    ],
    "topUniversities": [
      "Kathmandu Medical College",
      "College of Medical Sciences",
      "National Medical College",
      "Nepalgunj Medical College",
      "Universal College of Medical Science (UCMS)",
      "B.P. Koirala Institute of Health Sciences"
    ],
    "facts": {
      "intro": "Nepal Facts",
      "list": [
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
    "documents": [
      { "icon": "fa-solid fa-file-lines", "label": "Class X and XII Mark Sheets" },
      { "icon": "fa-solid fa-envelope-open-text", "label": "University Invitation Letter" },
      { "icon": "fa-solid fa-chart-column", "label": "NEET Scorecard" },
      { "icon": "fa-solid fa-building-columns", "label": "Bank Statement" },
      { "icon": "fa-solid fa-notes-medical", "label": "Medical Test Reports (Covid & HIV)" },
      { "icon": "fa-solid fa-image", "label": "Passport-size Photographs" }
    ],
    "advantages": [
      "Simple and hassle-free admission process",
      "No visa required for Indian students",
      "Good FMGE passing percentage (around 37.13% and improving)",
      "Nepalese cuisine is similar to Indian food",
      "Low travel time and cost due to close proximity",
      "Favorable climate for Indian students",
      "MBBS curriculum similar to India",
      "Affordable tuition fees compared to private Indian colleges"
    ],
    "studentLife": {
      "intro": "Life for MBBS students in Nepal",
      "list": [
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
  }
};


export const EXAMS_DETAILED: Record<string, EntranceExamData> = {
  "jee-main": {
    "title": "JEE (Joint Entrance Examination)",
    "heroImage": "https://careermantra.org/front_assets/images/jee-main-2024.jpg",
    "intro": "The JEE (Joint Entrance Examination) is a national-level engineering entrance exam conducted by the National Testing Agency (NTA). In 2024, the exam is conducted in four sessions and serves as the gateway to prestigious institutions such as IITs, NITs, and Central Funded Technical Institutes (CFTIs). JEE is considered one of the most challenging entrance examinations in India and is conducted in two stages: JEE Main and JEE Advanced.",
    "examParts": [
      "JEE Main",
      "JEE Advanced"
    ],
    "additionalNote": "Institutes like IISERs, Rajiv Gandhi Institute of Petroleum Technology, and the Indian Institute of Science consider JEE Advanced scores for admission, though they are not part of central IIT-JEE Advanced counselling.",
    "eligibility": {
      "title": "JEE Exam Eligibility",
      "points": [
        "Candidates who have passed Class XII or equivalent in the current or previous year are eligible for JEE Main.",
        "Candidates appearing for their Class XII or equivalent examination in the current year are also eligible.",
        "Candidates can appear for JEE Advanced for a maximum of two consecutive years.",
        "Diploma holders are eligible to apply for JEE Advanced for admission to IITs only."
      ]
    },
    "syllabus": {
      "maths": [
        "Sets, Relations & Functions",
        "Matrices & Determinants",
        "Permutations & Combinations",
        "Complex Numbers & Quadratic Equations",
        "Binomial Theorem & Mathematical Induction",
        "Limits, Continuity & Differentiability",
        "Sequences & Series",
        "Differential Equations",
        "Integral Calculus",
        "Three Dimensional Geometry",
        "Co-ordinate Geometry",
        "Statistics & Probability",
        "Vector Algebra",
        "Mathematical Reasoning",
        "Trigonometry"
      ],
      "physics": {
        "sectionA": [
          "Physics & Measurement",
          "Kinematics",
          "Laws of Motion",
          "Work, Energy & Power",
          "Rotational Motion",
          "Gravitation",
          "Properties of Solids & Liquids",
          "Thermodynamics",
          "Kinetic Theory of Gases",
          "Oscillations & Waves",
          "Electrostatics",
          "Current Electricity",
          "Magnetic Effects of Current & Magnetism",
          "Electromagnetic Induction & Alternating Currents",
          "Electromagnetic Waves",
          "Optics",
          "Dual Nature of Matter & Radiation",
          "Atoms & Nuclei",
          "Electronic Devices",
          "Communication Systems"
        ],
        "sectionB": [
          "Vernier callipers – measurement of diameter and depth",
          "Screw gauge – thickness/diameter of wire or sheet",
          "Simple pendulum – energy dissipation experiment",
          "Metre scale – mass by principle of moments",
          "Young’s modulus of elasticity",
          "Surface tension by capillary rise",
          "Coefficient of viscosity by terminal velocity",
          "Cooling curve experiment",
          "Speed of sound using resonance tube",
          "Specific heat capacity by method of mixtures",
          "Resistivity using meter bridge",
          "Resistance using Ohm’s law",
          "Potentiometer experiments",
          "Galvanometer resistance and figure of merit",
          "Focal length of mirrors and lenses",
          "Deviation vs incidence angle for prism",
          "Refractive index of glass slab",
          "PN junction diode characteristics",
          "Zener diode characteristics",
          "Transistor characteristics",
          "Identification of electronic components",
          "Use of multimeter for electronic testing"
        ]
      },
      "chemistry": {
        "physical": [
          "Some Basic Concepts in Chemistry",
          "States of Matter",
          "Atomic Structure",
          "Chemical Bonding & Molecular Structure",
          "Thermodynamics",
          "Equilibrium",
          "Redox Reactions & Electrochemistry",
          "Chemical Kinetics",
          "Surface Chemistry"
        ],
        "inorganic": [
          "Classification of Elements & Periodicity",
          "General Principles of Metallurgy",
          "Hydrogen",
          "s-Block Elements",
          "p-Block Elements",
          "d- and f-Block Elements",
          "Coordination Compounds",
          "Environmental Chemistry"
        ],
        "organic": [
          "Some Basic Principles of Organic Chemistry",
          "Hydrocarbons",
          "Organic Compounds Containing Halogens",
          "Organic Compounds Containing Oxygen",
          "Organic Compounds Containing Nitrogen",
          "Polymers",
          "Biomolecules",
          "Chemistry in Everyday Life",
          "Principles Related to Practical Chemistry",
          "Purification & Characterization of Organic Compounds"
        ]
      }
    },
    "preparationTips": [
      "Select the right study material for preparation.",
      "Create a structured study plan with time for each subject.",
      "Study consistently on a daily basis.",
      "Focus on conceptual understanding and problem-solving.",
      "Revise topics regularly.",
      "Practice numerical problems extensively."
    ]
  },
  "neet-ug": {
    "title": "NEET UG (National Eligibility cum Entrance Test)",
    "heroImage": "https://th-i.thgim.com/public/incoming/e3wtdx/article69538104.ece/alternates/LANDSCAPE_1200/VSP05_NEET%20UG%202025%205.JPG",
    "intro": "NEET (UG) is one of the toughest medical entrance examinations conducted in India. It is conducted by the National Testing Agency (NTA) for admission to undergraduate medical courses such as MBBS, BDS, AYUSH, and Veterinary programs in India and abroad. Qualifying NEET is mandatory as per Government of India regulations.",
    "examParts": [
      "Physics",
      "Chemistry",
      "Biology (Botany & Zoology)"
    ],
    "additionalNote": "NEET UG is conducted once a year in Pen and Paper mode. There is no upper age limit and candidates can attempt the exam multiple times.",
    "eligibility": {
      "title": "NEET UG Eligibility Criteria",
      "points": [
        "NEET is mandatory for Indian and Overseas candidates seeking admission to medical universities in India.",
        "Minimum age limit is 17 years as on 31st December of the year of admission.",
        "There is no upper age limit for appearing in NEET UG.",
        "Candidates appearing or who have appeared in Class 12 are eligible to apply.",
        "Admission is confirmed only after passing the qualifying examination.",
        "Candidates who have passed B.Sc. with any two subjects among Physics, Chemistry, Biology/Biotechnology are eligible.",
        "Candidates who have passed the first year of a three-year degree course with Physics, Chemistry, and Biology are eligible.",
        "Foreign Nationals, OCI, NRI, and PIO candidates are eligible under the 15% All India Quota seats.",
        "There is no restriction on the number of attempts for NEET."
      ]
    },
    "syllabus": {
      "physics": {
        "sectionA": [
          "Physics and Measurement",
          "Kinematics",
          "Laws of Motion",
          "Work, Energy and Power",
          "Rotational Motion",
          "Gravitation",
          "Properties of Solids and Liquids",
          "Thermodynamics",
          "Kinetic Theory of Gases",
          "Oscillations and Waves",
          "Electrostatics",
          "Current Electricity",
          "Magnetic Effects of Current and Magnetism",
          "Electromagnetic Induction and Alternating Currents",
          "Optics",
          "Dual Nature of Matter and Radiation",
          "Atoms and Nuclei",
          "Electronic Devices"
        ],
        "sectionB": []
      },
      "chemistry": {
        "physical": [
          "Some Basic Concepts in Chemistry",
          "States of Matter",
          "Atomic Structure",
          "Chemical Bonding and Molecular Structure",
          "Thermodynamics",
          "Equilibrium",
          "Redox Reactions",
          "Electrochemistry",
          "Chemical Kinetics",
          "Surface Chemistry",
          "Solutions"
        ],
        "inorganic": [
          "Classification of Elements and Periodicity in Properties",
          "General Principles and Processes of Isolation of Metals",
          "Hydrogen",
          "s-Block Elements",
          "p-Block Elements",
          "d- and f-Block Elements",
          "Coordination Compounds",
          "Environmental Chemistry"
        ],
        "organic": [
          "Some Basic Principles of Organic Chemistry",
          "Hydrocarbons",
          "Organic Compounds Containing Halogens",
          "Organic Compounds Containing Oxygen",
          "Organic Compounds Containing Nitrogen",
          "Biomolecules",
          "Polymers",
          "Chemistry in Everyday Life",
          "Purification and Characterisation of Organic Compounds"
        ]
      }
    },
    "preparationTips": [
      "Understand the complete NEET syllabus based on Class 11 and 12 NCERT curriculum.",
      "Create a realistic study plan covering Physics, Chemistry, and Biology daily.",
      "Focus more on NCERT textbooks, especially for Biology and Chemistry.",
      "Practice numerical problems regularly for Physics and Physical Chemistry.",
      "Revise topics consistently and strengthen weak areas.",
      "Solve previous years’ question papers and take mock tests."
    ]
  },
  "neet-pg": {
    "title": "NEET PG (National Eligibility cum Entrance Test - Postgraduate)",
    "heroImage": "https://img.mathrubhumi.com/view/acePublic/alias/contentid/1kxvj2dyg9zs7fiv4lp/1/neet-pg-2-jpg.webp?f=3%3A2&q=0.75&w=900",
    "intro": "The NEET PG is a qualifying and ranking examination in India for students who wish to study various postgraduate Doctor of Medicine (MD), Master of Surgery (MS), and diploma courses. It is conducted by the National Board of Examinations (NBE).",
    "examParts": [
      "Part A: Pre-Clinical",
      "Part B: Para-Clinical",
      "Part C: Clinical"
    ],
    "additionalNote": "The exam consists of 200 multiple-choice questions (MCQs) to be solved in 3.5 hours. Each correct answer is awarded +4 marks, while each incorrect answer attracts a negative marking of -1 mark.",
    "eligibility": {
      "title": "NEET PG Eligibility Criteria",
      "points": [
        "Candidates must possess a recognized MBBS degree or provisional MBBS pass certificate.",
        "Candidates must hold a permanent or provisional registration certificate of MBBS qualification issued by the MCI or State Medical Council.",
        "Candidates must have completed their one-year compulsory rotatory internship on or before August 15th of the admission year.",
        "Foreign Medical Graduates must have qualified the FMGE (Screening Test)."
      ]
    },
    "syllabus": {
      "maths": [
        "Anatomy: General Anatomy, Neuroanatomy, Embryology, Histology, Osteology",
        "Physiology: General Physiology, Nerve-Muscle, Blood, Cardio-Vascular, Respiratory, Gastrointestinal, Renal, Endocrine",
        "Biochemistry: Biomolecules, Enzymes, Metabolic Pathways, Molecular Biology, Clinical Biochemistry"
      ],
      "physics": {
        "sectionA": [
          "Pathology: Cell Injury, Inflammation, Neoplasia, Hematology, Systemic Pathology",
          "Pharmacology: General Pharm, ANS, CNS, CVS, Antimicrobials, Chemotherapy",
          "Microbiology: Bacteriology, Virology, Mycology, Parasitology, Immunology"
        ],
        "sectionB": [
          "Forensic Medicine: Medical Jurisprudence, Autopsy, Toxicology, Sexual Offenses",
          "Social & Preventive Medicine (SPM): Epidemiology, Health Programs, Communicable Diseases, Biostatistics"
        ]
      },
      "chemistry": {
        "physical": [
          "General Medicine: Cardiology, Respiratory, Nephrology, Neurology, Endocrinology, Infectious Diseases",
          "Dermatology: Infections, Eczema, Psoriasis, STDs, Leprosy",
          "Psychiatry: Schizophrenia, Mood Disorders, Anxiety, Substance Abuse",
          "Radiology: X-ray, CT, MRI Basics, Radiotherapy"
        ],
        "inorganic": [
          "General Surgery: Wounds, GI Surgery, Urology, Neurosurgery, Trauma & Critical Care",
          "Orthopedics: Fractures, Dislocations, Bone Tumors, Sports Injuries",
          "ENT: Diseases of Ear, Nose, Throat, Head & Neck Surgery",
          "Ophthalmology: Cataract, Glaucoma, Retina, Refractive Errors",
          "Anaesthesia: General & Regional Anaesthesia, CPR, Critical Care"
        ],
        "organic": [
          "Obstetrics: Antenatal Care, Labor Complications, High-Risk Pregnancy",
          "Gynaecology: Menstrual Disorders, Fibroids, Infertility, Gynae-Oncology",
          "Pediatrics: Neonatology, Growth & Development, Nutrition, Pediatric Infections"
        ]
      }
    },
    "preparationTips": [
      "Focus heavily on high-yield clinical subjects like Medicine, Surgery, and OBG.",
      "Integrate Para-clinical subjects (Pathology, Pharmacology) with Clinical subjects.",
      "Practice image-based questions regularly as their weightage has increased.",
      "Solve previous year question papers (PYQs) to understand the exam pattern.",
      "Take full-length mock tests to manage time effectively."
    ]
  },
  "gre": {
    "title": "GRE (Graduate Record Examinations)",
    "heroImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9peFCs6sC5SH1KtVFdcvIdIAVUOKDhoVIww&s",
    "intro": "The Graduate Record Examinations (GRE) is ...",
    "examParts": [
      "Analytical Writing",
      "Verbal Reasoning",
      "Quantitative Reasoning",
      "Unscored/Research Section"
    ],
    "additionalNote": "The overall testing time for the computer-delivered GRE revised General Test is about three hours and 45 minutes. ...",
    "syllabus": {
      "maths": [
        "Arithmetic: Integers, Divisibility, Prime Numbers, Remainders, Arithmetic Operations",
        "Algebra: Operations with Exponents, Factoring, Linear Equations, Quadratic Equations, Inequalities",
        "Geometry: Parallel and Perpendicular Lines, Circles, Triangles, Quadrilaterals, Polygons, 3D Figures",
        "Data Analysis: Basic Statistics (Mean, Median, Mode), Standard Deviation, Probability, Permutations, Combinations"
      ],
      "physics": {
        "sectionA": [
          "Text Completion: Interpreting meaning from incomplete sentences using vocabulary and context",
          "Sentence Equivalence: Selecting two answer choices that complete a sentence and produce the same meaning"
        ],
        "sectionB": [
          "Reading Comprehension: Understanding multiple-paragraph passages, identifying main ideas, drawing inferences",
          "Critical Reasoning: Analyzing logical arguments, identifying assumptions, strengthening/weakening arguments"
        ]
      },
      "chemistry": {
        "physical": [
          "Analytical Writing Section: Articulate complex ideas clearly and effectively, support ideas with relevant reasons and examples"
        ],
        "inorganic": [
          "Analyze an Issue Task: Constructing an argument to support or oppose a specific claim"
        ],
        "organic": [
          "Analyze an Argument Task: Critiquing the logical soundness of a provided argument"
        ]
      }
    },
    "eligibility": {
      "title": "GRE Eligibility",
      "points": [
        "Anyone applying to graduate programs in the United States requiring GRE scores.",
        "Typically, a bachelor's degree or equivalent is required."
      ]
    },
    "preparationTips": [
      "Familiarize yourself with the test format.",
      "Practice analytical writing.",
      "Improve vocabulary for verbal reasoning.",
      "Revise fundamental math concepts for quantitative reasoning.",
      "Take timed practice tests to manage time effectively."
    ]
  },
  "gmat": {
    "title": "GMAT (Graduate Management Admission Test)",
    "heroImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VTXIHULvpU5gqObIvotScSMeteRMsMye_A&s",
    "intro": "The Graduate Management Admission Test is a computer based test contemplated to assess certain reading skills, verbal, quantitative, and analytical writing in written English for use in admission to a graduate management program, like MBA. The GMAT does not determine trade knowledge or skill, nor does it measure agility. According to the Graduate Management Admission Council (GMAC), the GMAT assesses elucidative writing and problem-solving competencies, while also marking data sufficiency, logic, and critical reasoning expertise that it consider to be indispensable to real-world business and management success. Graduate Management Admission Council registered the trademark GMAT under it. More than 2000 universities and institutions around the globe offering 5900+ courses use the GMAT exam as part of the admission criteria for their programs. B-schools use the test as a criterion for admission into a wide range of graduate or diploma management programs, such as Master of International Business, Masters of Financial Reporting and Master of Accountancy programs. 112 countries administer and have standardized test centers to conduct the GMAT exam. According to GMAC enumeration, it has unceasingly performed validity studies to statistically verify that the exam predicts success in business school programs. In the Kaplan Test Prep survey, the GMAT is still elite choice for MBA aspirants even though the increasing acceptability of GRE scores.",
    "examParts": [
      "Analytical Writing Assessment",
      "Integrated Reasoning",
      "Quantitative Reasoning",
      "Verbal Reasoning"
    ],
    "additionalNote": "The GMAT is a computer adaptive test with a total testing time of approximately 3.5 hours. It assesses skills crucial for business and management success including data sufficiency, logic, critical reasoning, and problem-solving. Test centers are available in 112 countries worldwide.",
    "syllabus": {
      "maths": [
        "Arithmetic: Number properties, Fractions, Decimals, Percentages",
        "Algebra: Equations, Inequalities, Functions",
        "Geometry: Lines, Angles, Triangles, Circles, Coordinate Geometry",
        "Data Analysis: Statistics, Probability, Sets"
      ],
      "physics": {
        "sectionA": [
          "Critical Reasoning: Evaluating arguments, Assumptions, Strengthening and weakening arguments",
          "Reading Comprehension: Understanding passages, Drawing inferences, Summarizing"
        ],
        "sectionB": [
          "Sentence Correction: Grammar, Syntax, Effective expression"
        ]
      },
      "chemistry": {
        "physical": [
          "Analytical Writing Assessment: Writing clear, concise, and well-structured essays"
        ],
        "inorganic": [
          "Integrated Reasoning: Multi-source reasoning, Graphics interpretation, Two-part analysis"
        ],
        "organic": [
          "Problem Solving: Quantitative questions testing reasoning and quantitative skills"
        ]
      }
    },
    "eligibility": {
      "title": "GMAT Eligibility",
      "points": [
        "Anyone seeking admission to graduate management programs like MBA.",
        "There is no specific educational qualification restriction; candidates from diverse backgrounds can apply.",
        "Test takers must comply with GMAC's test policies and regulations."
      ]
    },
    "preparationTips": [
      "Understand the computer adaptive test format and practice accordingly.",
      "Develop strong quantitative and verbal reasoning skills.",
      "Practice integrated reasoning and analytical writing tasks.",
      "Use official GMAT prep materials and take timed practice tests.",
      "Focus on accuracy and pacing to maximize your score."
    ]
  },
  "ielts": {
    "title": "IELTS (International English Language Testing System)",
    "heroImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo1BlIjbIWZAx11rGqnVz4_ospAbo1ZY95kA&s",
    "intro": "IELTS is the International English Language Testing System which tests English proficiency across the globe. IELTS is jointly owned by British Council, IDP Australia and Cambridge English Language Assessment through more than 1000 locations across 140 countries. IELTS is the world's most popular test of English for higher education and global migration. This continues the important role which IELTS has long played in language testing for study and immigration in the UK and other countries, including Australia, Canada and New Zealand. IELTS tests the four language skills – listening, reading, writing and speaking. IELTS is a secure, valid and reliable test of real-life ability to communicate in English for education, immigration and professional accreditation. Candidates can sit an IELTS test in over 1,000 centres and locations around the world. This global test has the highest levels of quality control. Conducting 1.4 million tests globally. Candidates can choose from two types of IELTS tests: Academic, General Training, or UKVI Approved depending on whether they want to study, work or migrate. Both modules are made up of four parts – Listening, Reading, Writing, and Speaking. IELTS results are graded on the unique IELTS 9-band scale.",
    "examParts": [
      "Listening",
      "Reading",
      "Writing",
      "Speaking"
    ],
    "additionalNote": "IELTS has two formats: Academic IELTS for students and professionals seeking higher education or professional practice in English-speaking countries, and General Training for those pursuing non-academic training, work experience, or immigration. The test lasts approximately 3 hours and results are valid for 2 years. Scores are accepted worldwide including countries like UK, Australia, Canada, New Zealand, USA, and many more.",
    "syllabus": {
      "maths": [],
      "physics": {
        "sectionA": [
          "Listening: Understanding spoken English in various contexts",
          "Reading: Comprehension of written texts from different genres"
        ],
        "sectionB": [
          "Writing: Producing written texts in academic or general contexts",
          "Speaking: Engaging in spoken English conversations on various topics"
        ]
      },
      "chemistry": {
        "physical": [],
        "inorganic": [],
        "organic": []
      }
    },
    "eligibility": {
      "title": "IELTS Eligibility",
      "points": [
        "Anyone needing to prove English language proficiency for study, work, or migration.",
        "No specific age or academic qualification restrictions.",
        "Candidates must register and choose the test type (Academic, General Training, or UKVI) based on their purpose."
      ]
    },
    "preparationTips": [
      "Practice all four language skills regularly: listening, reading, writing, and speaking.",
      "Familiarize yourself with the IELTS test format and timing.",
      "Take mock tests to improve time management and test confidence.",
      "Improve your vocabulary and grammar accuracy.",
      "Engage in English conversations to boost speaking skills."
    ]
  },
  "pte": {
    "title": "PTE Academics (Pearson Test of English Academics)",
    "heroImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeaKErWqOKiu4fGYMfR_G1r8KRjuhChcSARA&s",
    "intro": "PTE Academics– Pearson test of English Academics is an advanced computer based test which is taken as a proof of English proficiency of the candidates who are aspiring for higher studies abroad as well as for immigration purposes (Australia). The Pearson Test of English Academic (PTE Academic) is a computer-based English language proficiency test designed for non-native English speakers who wish to study, work, or migrate to English-speaking countries. It is recognized by thousands of educational institutions and governments for education and migration purposes.",
    "examParts": [
      "Speaking & Writing",
      "Reading",
      "Listening"
    ],
    "additionalNote": "The exam lasts approximately 3 hours with a 10-minute break after the Reading section. It includes 70 to 91 tasks across 20 different task types. Scores are reported as an Overall Score (range 10 to 90), Communicative Skill Scores (speaking, writing, listening, reading), and Enabling Skill Scores (grammar, oral fluency, pronunciation, spelling, vocabulary, written discourse).",
    "syllabus": {
      "maths": [],
      "physics": {
        "sectionA": [
          "Speaking & Writing: 77-93 minutes, 38-47 questions",
          "Reading: 32-41 minutes, 15-20 questions"
        ],
        "sectionB": [
          "Break: 10 minutes",
          "Listening: 45-57 minutes, 17-25 questions"
        ]
      },
      "chemistry": {
        "physical": [],
        "inorganic": [],
        "organic": []
      }
    },
    "eligibility": {
      "title": "PTE Academic Eligibility",
      "points": [
        "Non-native English speakers aspiring to study, work or migrate to English-speaking countries.",
        "Recognized by educational institutions and governments worldwide.",
        "No specific age or academic qualifications required."
      ]
    },
    "preparationTips": [
      "Practice all sections thoroughly: speaking, writing, reading, and listening.",
      "Familiarize yourself with the test format and question types.",
      "Use official PTE practice materials and take timed mock tests.",
      "Work on improving pronunciation, grammar, and vocabulary.",
      "Manage your time effectively during the exam."
    ]
  },
  "sat": {
    "title": "SAT (Scholastic Assessment Test)",
    "heroImage": "https://daily.jstor.org/wp-content/uploads/2016/01/SAT_1050x700.jpg",
    "intro": "The SAT is a standardized test extensively used for college admissions in the United States of America. It was introduced in 1926, since then its name and scoring pattern has changed multiple times, originally called the Scholastic Aptitude Test, then Scholastic Assessment Test, later the SAT Reasoning Test, and now simply the SAT. The SAT is owned and governed by the College Board, a nonprofit private organization in the USA, and developed and administered by the Educational Testing Service on its behalf. The test is intended to determine a student's readiness for college. SAT is categorized into two types: the general SAT, which evaluates knowledge gained during schooling, and the SAT Subject Tests, which assess expertise in specific streams such as Humanities, Biology, Physics, English Literature, and Mathematics. The new SAT pattern, revised in 2016, takes about 3 hours and 50 minutes to complete. Scores range from 400 to 1600, combining results from two sections each scored out of 800: Critical Reading and Mathematics.",
    "examParts": [
      "Critical Reading",
      "Mathematics",
      "SAT Subject Tests"
    ],
    "additionalNote": "The SAT Subject Tests evaluate student expertise in specific subjects and are used by some universities as part of the admissions process. The general SAT is the primary test assessing readiness for college.",
    "syllabus": {
      "maths": [
        "Algebra: Linear equations, inequalities, functions",
        "Geometry: Properties of shapes, coordinate geometry",
        "Statistics and Probability",
        "Advanced Math: Trigonometry, complex numbers"
      ],
      "physics": {
        "sectionA": [
          "Critical Reading: Sentence completion, passage-based reading comprehension",
          "Writing and Language: Grammar, usage, and rhetorical skills"
        ],
        "sectionB": [
          "SAT Subject Tests: Specific subjects like Biology, Physics, English Literature"
        ]
      },
      "chemistry": {
        "physical": [],
        "inorganic": [],
        "organic": []
      }
    },
    "eligibility": {
      "title": "SAT Eligibility",
      "points": [
        "High school students planning to apply for undergraduate college admission.",
        "No specific age limit or nationality restrictions.",
        "Open to anyone wishing to demonstrate college readiness."
      ]
    },
    "preparationTips": [
      "Practice with official SAT practice tests.",
      "Focus on time management for each section.",
      "Strengthen skills in critical reading, math, and writing.",
      "Review concepts in Algebra, Geometry, and advanced math.",
      "Take timed practice sessions to simulate exam conditions."
    ]
  },
  "toefl": {
    "title": "TOEFL (Test of English as a Foreign Language)",
    "heroImage": "https://leapscholar.com/blog/wp-content/uploads/2022/11/Shutterstock_508251865-min-1024x576.png",
    "intro": "TOEFL, formally known as 'Test of English as a Foreign Language', is an English proficiency test for non-native English speakers who want to study overseas in English-speaking countries. First administered in 1964, TOEFL is the most widely respected English-language test in the world, recognized by more than 9,000 colleges, universities, and agencies across 130+ countries, including Australia, Canada, the UK, and the USA. It is administered by Educational Testing Services (ETS) and is typically taken as an Internet-Based Test (iBT) at various locations worldwide, including India. TOEFL scores are often used as a benchmark for awarding scholarships and are mandatory for various government agencies, licensing bodies, businesses, and institutions. TOEFL scores are valid for 2 years.",
    "examParts": [
      "Reading",
      "Listening",
      "Speaking",
      "Writing"
    ],
    "additionalNote": "TOEFL assesses proficiency in academic English and is required by universities and institutions for admission, scholarship eligibility, and professional purposes. The test format includes tasks for reading comprehension, listening, speaking, and writing, simulating real academic environments.",
    "syllabus": {
      "maths": [],
      "physics": {
        "sectionA": [
          "Reading: Comprehension of academic passages and identifying main ideas, details, and inferences",
          "Listening: Understanding conversations and lectures, summarizing key points"
        ],
        "sectionB": [
          "Speaking: Responding to questions and tasks in spoken English, presenting ideas clearly",
          "Writing: Writing essays and summaries based on reading and listening tasks"
        ]
      },
      "chemistry": {
        "physical": [],
        "inorganic": [],
        "organic": []
      }
    },
    "eligibility": {
      "title": "TOEFL Eligibility",
      "points": [
        "Non-native English speakers seeking admission to universities or institutions in English-speaking countries.",
        "No specific age or academic qualifications are required.",
        "Candidates must register with ETS and select a test date and location."
      ]
    },
    "preparationTips": [
      "Practice reading, listening, speaking, and writing tasks regularly.",
      "Familiarize yourself with the TOEFL test format and timing.",
      "Use official TOEFL practice materials for mock tests.",
      "Improve academic vocabulary and grammar.",
      "Simulate real test conditions to build confidence and manage time effectively."
    ]
  }
};

export const MEGA_MENU_DATA = {
  "STUDY ABROAD": [
    { name: "USA", link: "#/study-abroad/usa", code: "US" },
    { name: "UK", link: "#/study-abroad/uk", code: "GB" },
    { name: "Canada", link: "#/study-abroad/canada", code: "CA" },
    { name: "Australia", link: "#/study-abroad/australia", code: "AU" },
    { name: "Ireland", link: "#/study-abroad/ireland", code: "IE" },
    { name: "New Zealand", link: "#/study-abroad/newZealand", code: "NZ" },
    { name: "Dubai", link: "#/study-abroad/dubai", code: "AE" },
    { name: "Europe", link: "#/study-abroad/europe", code: "EU" }
  ],
  "MBBS ABROAD": [
    { name: "Russia", link: "#/mbbs-abroad/russia", code: "RU" },
    { name: "Georgia", link: "#/mbbs-abroad/georgia", code: "GE" },
    { name: "Kazakhstan", link: "#/mbbs-abroad/kazakhstan", code: "KZ" },
    { name: "Philippines", link: "#/mbbs-abroad/philippines", code: "PH" },
    { name: "Bangladesh", link: "#/mbbs-abroad/bangladesh", code: "BD" },
    { name: "Uzbekistan", link: "#/mbbs-abroad/uzbekistan", code: "UZ" },
    { name: "Nepal", link: "#/mbbs-abroad/nepal", code: "NP" }
  ],
  "STUDY IN INDIA": [
    {
      "name": "MBBS",
      "link": "#/study-india/mbbs",
      "icon": "fa-solid fa-user-doctor"
    },
    {
      "name": "MD/MS",
      "link": "#/study-india/md_ms",
      "icon": "fa-solid fa-stethoscope"
    },
    {
      "name": "B.Tech",
      "link": "#/study-india/btech",
      "icon": "fa-solid fa-gears"
    },
    {
      "name": "MBA",
      "link": "#/study-india/mba",
      "icon": "fa-solid fa-briefcase"
    }
  ],
  "ENTRANCE EXAMS": [
    { "name": "GRE", "link": "#/exams/gre", "icon": "fa-solid fa-graduation-cap" },
    { "name": "GMAT", "link": "#/exams/gmat", "icon": "fa-solid fa-briefcase" },
    { "name": "NEET UG", "link": "#/exams/neet-ug", "icon": "fa-solid fa-stethoscope" },
    { "name": "NEET PG", "link": "#/exams/neet-pg", "icon": "fa-solid fa-stethoscope" },
    { "name": "JEE Main", "link": "#/exams/jee-main", "icon": "fa-solid fa-calculator" },
    { "name": "PTE Academic", "link": "#/exams/pte", "icon": "fa-solid fa-language" },
    { "name": "IELTS", "link": "#/exams/ielts", "icon": "fa-solid fa-globe" },
    { "name": "SAT", "link": "#/exams/sat", "icon": "fa-solid fa-school" },
    { "name": "TOEFL", "link": "#/exams/toefl", "icon": "fa-solid fa-book-open" }
  ]

};

export const DESTINATIONS: Destination[] = [
  {
    id: "usa",
    name: "USA",
    slug: "usa",
    image: "https://images.unsplash.com/photo-1508433957232-3107f5fd5995?auto=format&fit=crop&q=80&w=800",
    description: "Home to Ivy League universities and diverse culture.",
    popularCourses: ["Engineering", "Business"]
  },
  {
    id: "uk",
    name: "UK",
    slug: "uk",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800",
    description: "World-class education with a rich history.",
    popularCourses: ["Law", "Medicine"]
  },
  {
    id: "canada",
    name: "Canada",
    slug: "canada",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80&w=800",
    description: "Welcoming environment and post-study work rights.",
    popularCourses: ["IT", "Nursing"]
  },
  {
    id: "australia",
    name: "Australia",
    slug: "australia",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=800",
    description: "High quality of life and top-ranked universities.",
    popularCourses: ["Marine Biology", "Accounting"]
  }
];

export const STATS = [
  { label: "Years of Experience", value: "15+" },
  { label: "Students Counseled", value: "10,000+" },
  { label: "University Partners", value: "500+" },
  { label: "Visa Success Rate", value: "99%" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Aditi Rao",
    univ: "Kazan Federal University",
    text: "iExplain made my dream of studying MBBS in Russia a reality. Their team guided me at every step.",
    avatar: "https://ui-avatars.com/api/?name=Aditi+Rao&background=random"
  },
  {
    id: "2",
    name: "Rohan Mehta",
    univ: "University of Leeds",
    text: "Professional and transparent. They helped me with my UK visa when I was losing hope.",
    avatar: "https://ui-avatars.com/api/?name=Rohan+Mehta&background=random"
  },
  {
    id: "3",
    name: "Sneha Gupta",
    univ: "Tbilisi State Medical University",
    text: "Best consultants for Georgia. They took care of everything from admission to accommodation.",
    avatar: "https://ui-avatars.com/api/?name=Sneha+Gupta&background=random"
  }
];

export const INDIA_COURSES = [
  { id: "mbbs", title: "MBBS", desc: "Top Govt & Private Colleges", icon: "fa-solid fa-user-doctor" },
  { id: "engineering", title: "Engineering", desc: "B.Tech in CS, IT, ECE", icon: "fa-solid fa-microchip" },
  { id: "management", title: "Management", desc: "MBA, BBA, PGDM", icon: "fa-solid fa-chart-pie" },
  { id: "law", title: "Law", desc: "LLB, BA LLB", icon: "fa-solid fa-scale-balanced" }
];

export const ROADMAP_STEPS = [
  { step: "01", title: "Counseling", desc: "Free profile evaluation", icon: "fa-solid fa-comments" },
  { step: "02", title: "Selection", desc: "University shortlisting", icon: "fa-solid fa-building-columns" },
  { step: "03", title: "Admission", desc: "Application & Offer Letter", icon: "fa-solid fa-file-circle-check" },
  { step: "04", title: "Visa", desc: "Visa filing & Interview", icon: "fa-brands fa-cc-visa" },
  { step: "05", title: "Departure", desc: "Flight & Forex", icon: "fa-solid fa-plane-departure" }
];

export const POPULAR_COLLEGES: College[] = [
  // --- MBBS ABROAD ---
  // Russia
  { name: "Kazan Federal University", country: "Russia", category: "MBBS Abroad", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600" },
  { name: "Bashkir State Medical University", country: "Russia", category: "MBBS Abroad", image: "https://www.ruseducation.in/wp-content/uploads/2022/01/Bashkir-State-Medical-University.webp" },
  { name: "Orenburg State Medical University", country: "Russia", category: "MBBS Abroad", image: "https://images.unsplash.com/photo-1559135197-8a45ea74d367?auto=format&fit=crop&q=80&w=600" },
  { name: "Crimea Federal University", country: "Russia", category: "MBBS Abroad", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJuVumuwTMTGSGfSzzLKYgVzkA8k-kJHb_w&s" },
  { name: "First Moscow State Medical University", country: "Russia", category: "MBBS Abroad", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600" },
  // Georgia
  { name: "Tbilisi State Medical University", country: "Georgia", category: "MBBS Abroad", image: "https://images.shiksha.com/mediadata/images/1702625100phpu2Kbnu.jpeg" },
  { name: "Batumi Shota Rustaveli State University", country: "Georgia", category: "MBBS Abroad", image: "https://images.unsplash.com/photo-1559135197-8a45ea74d367?auto=format&fit=crop&q=80&w=600" },
  { name: "David Tvildiani Medical University", country: "Georgia", category: "MBBS Abroad", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5z5QqOOgc6KWCqeUoBFkNNRqY64riK5QDQ&s" },
  { name: "European University Georgia", country: "Georgia", category: "MBBS Abroad", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600" },
  // Philippines
  { name: "University of Santo Tomas", country: "Philippines", category: "MBBS Abroad", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600" },
  { name: "AMA School of Medicine", country: "Philippines", category: "MBBS Abroad", image: "https://images.unsplash.com/photo-1559135197-8a45ea74d367?auto=format&fit=crop&q=80&w=600" },
  { name: "Our Lady of Fatima University", country: "Philippines", category: "MBBS Abroad", image: "https://www.careerplus.org.in/philippines-medical-college/our-lady-of-fatima-university.jpg " },
  { name: "University of the East Ramon Magsaysay", country: "Philippines", category: "MBBS Abroad", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600" },
  // Bangladesh
  { name: "Dhaka National Medical College", country: "Bangladesh", category: "MBBS Abroad", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600" },
  { name: "Bangladesh Medical College", country: "Bangladesh", category: "MBBS Abroad", image: "https://images.unsplash.com/photo-1559135197-8a45ea74d367?auto=format&fit=crop&q=80&w=600" },
  { name: "Jahurul Islam Medical College", country: "Bangladesh", category: "MBBS Abroad", image: "https://images.unsplash.com/photo-1559135197-8a45ea74d367?auto=format&fit=crop&q=80&w=600" },
  { name: "Holy Family Red Crescent Medical College", country: "Bangladesh", category: "MBBS Abroad", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600" },
  // Nepal
  { name: "Tribhuvan University Institute of Medicine", country: "Nepal", category: "MBBS Abroad", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600" },
  { name: "Kathmandu University School of Medical Sciences", country: "Nepal", category: "MBBS Abroad", image: "https://images.unsplash.com/photo-1559135197-8a45ea74d367?auto=format&fit=crop&q=80&w=600" },
  { name: "B.P. Koirala Institute of Health Sciences", country: "Nepal", category: "MBBS Abroad", image: "https://images.unsplash.com/photo-1592280771800-bcf9de2312b4?auto=format&fit=crop&q=80&w=600" },
  { name: "Patan Academy of Health Sciences", country: "Nepal", category: "MBBS Abroad", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600" },
  // Kazakhstan
  { name: "Al-Farabi Kazakh National University", country: "Kazakhstan", category: "MBBS Abroad", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600" },
  { name: "Kazakh National Medical University", country: "Kazakhstan", category: "MBBS Abroad", image: "https://images.unsplash.com/photo-1559135197-8a45ea74d367?auto=format&fit=crop&q=80&w=600" },
  { name: "Astana Medical University", country: "Kazakhstan", category: "MBBS Abroad", image: "https://images.unsplash.com/photo-1592280771800-bcf9de2312b4?auto=format&fit=crop&q=80&w=600" },
  { name: "South Kazakhstan Medical Academy", country: "Kazakhstan", category: "MBBS Abroad", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600" },
  // Uzbekistan
  { name: "Tashkent Medical Academy", country: "Uzbekistan", category: "MBBS Abroad", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600" },
  { name: "Samarkand State Medical University", country: "Uzbekistan", category: "MBBS Abroad", image: "https://images.unsplash.com/photo-1559135197-8a45ea74d367?auto=format&fit=crop&q=80&w=600" },
  { name: "Bukhara State Medical Institute", country: "Uzbekistan", category: "MBBS Abroad", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600" },
  { name: "Andijan State Medical Institute", country: "Uzbekistan", category: "MBBS Abroad", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600" },

  // --- STUDY ABROAD ---
  // USA
  { name: "Northeastern University", country: "USA", category: "Study Abroad", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600" },
  { name: "Arizona State University", country: "USA", category: "Study Abroad", image: "https://images.unsplash.com/photo-1559135197-8a45ea74d367?auto=format&fit=crop&q=80&w=600" },
  { name: "New York University", country: "USA", category: "Study Abroad", image: "https://uniplusglobal.com/media/university_images/New_York_University_439e3d1807.webp" },
  { name: "University of Texas at Austin", country: "USA", category: "Study Abroad", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600" },
  { name: "University of Southern California", country: "USA", category: "Study Abroad", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600" },
  // UK
  { name: "University of Leeds", country: "UK", category: "Study Abroad", image: "https://images.unsplash.com/photo-1559135197-8a45ea74d367?auto=format&fit=crop&q=80&w=600" },
  { name: "University of Manchester", country: "UK", category: "Study Abroad", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNInPUr5vU0dho3EQhK8ws6nP7kccU4TMzHQ&s" },
  { name: "University of Birmingham", country: "UK", category: "Study Abroad", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600" },
  { name: "University of Warwick", country: "UK", category: "Study Abroad", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600" },
  { name: "Kings College London", country: "UK", category: "Study Abroad", image: "https://images.unsplash.com/photo-1559135197-8a45ea74d367?auto=format&fit=crop&q=80&w=600" },
  // Australia
  { name: "University of Melbourne", country: "Australia", category: "Study Abroad", image: "https://www.unimelb.edu.au/__data/assets/image/0012/3798804/video.jpg" },
  { name: "Monash University", country: "Australia", category: "Study Abroad", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600" },
  { name: "University of Sydney", country: "Australia", category: "Study Abroad", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600" },
  { name: "Deakin University", country: "Australia", category: "Study Abroad", image: "https://images.unsplash.com/photo-1559135197-8a45ea74d367?auto=format&fit=crop&q=80&w=600" },
  { name: "RMIT University", country: "Australia", category: "Study Abroad", image: "https://www.rmit.edu.au/content/dam/rmit/rmit-images/marketing-only/about-sub-mastheads/City-Campus-Masthead-1920x960.jpg" },
  // Canada
  { name: "University of Toronto", country: "Canada", category: "Study Abroad", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600" },
  { name: "University of British Columbia", country: "Canada", category: "Study Abroad", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600" },
  { name: "McGill University", country: "Canada", category: "Study Abroad", image: "https://images.unsplash.com/photo-1559135197-8a45ea74d367?auto=format&fit=crop&q=80&w=600" },
  { name: "York University", country: "Canada", category: "Study Abroad", image: "https://images.unsplash.com/photo-1592280771800-bcf9de2312b4?auto=format&fit=crop&q=80&w=600" },
  { name: "Seneca College", country: "Canada", category: "Study Abroad", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600" },
  // Ireland
  { name: "Trinity College Dublin", country: "Ireland", category: "Study Abroad", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600" },
  { name: "University College Dublin", country: "Ireland", category: "Study Abroad", image: "https://images.unsplash.com/photo-1559135197-8a45ea74d367?auto=format&fit=crop&q=80&w=600" },
  { name: "Dublin City University", country: "Ireland", category: "Study Abroad", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcuIEI_sMygRQdUyGTXaSuq46og1TDBOVFOw&s" },
  { name: "University of Limerick", country: "Ireland", category: "Study Abroad", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600" },
  // New Zealand
  { name: "University of Auckland", country: "New Zealand", category: "Study Abroad", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600" },
  { name: "University of Otago", country: "New Zealand", category: "Study Abroad", image: "https://images.unsplash.com/photo-1559135197-8a45ea74d367?auto=format&fit=crop&q=80&w=600" },
  { name: "Victoria University of Wellington", country: "New Zealand", category: "Study Abroad", image: "https://www.ilwindia.com/wp-content/uploads/2019/08/Victoria-University-of-Wellington-New-Zealand.jpg" },
  { name: "Auckland University of Technology", country: "New Zealand", category: "Study Abroad", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600" },
  // Dubai
  { name: "University of Birmingham Dubai", country: "Dubai", category: "Study Abroad", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600" },
  { name: "Middlesex University Dubai", country: "Dubai", category: "Study Abroad", image: "https://images.unsplash.com/photo-1559135197-8a45ea74d367?auto=format&fit=crop&q=80&w=600" },
  { name: "Heriot-Watt University Dubai", country: "Dubai", category: "Study Abroad", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2UPd23SmEbM0JSG0O36KbCG5p6oXxnO6dcA&s" },
  { name: "Manipal Academy of Higher Education Dubai", country: "Dubai", category: "Study Abroad", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600" }
];

export const COUNTRY_ICONS = [
  // MBBS Abroad Countries
  { name: "Russia", icon: "fa-solid fa-flag" },
  { name: "Georgia", icon: "fa-solid fa-earth-europe" },
  { name: "Philippines", icon: "fa-solid fa-volcano" },
  { name: "Bangladesh", icon: "fa-solid fa-mosque" },
  { name: "Nepal", icon: "fa-solid fa-mountain" },
  { name: "Kazakhstan", icon: "fa-solid fa-horse" },
  { name: "Uzbekistan", icon: "fa-solid fa-archway" },

  // Study Abroad Countries
  // Study Abroad Countries
  { name: "USA", icon: "fa-solid fa-flag-usa" },
  { name: "UK", icon: "fa-solid fa-sterling-sign" },
  { name: "Canada", icon: "fa-solid fa-leaf" },

  // FIXED
  { name: "Australia", icon: "fa-solid fa-earth-oceania" },
  { name: "Ireland", icon: "fa-solid fa-clover" },
  { name: "New Zealand", icon: "fa-solid fa-mountain-sun" },

  { name: "Dubai", icon: "fa-solid fa-building-columns" },
  { name: "Europe", icon: "fa-solid fa-euro-sign" }

];

export const KNOW_YOUR_DESTINATIONS = [
  {
    name: "Russia",
    path: "/mbbs-abroad/russia",
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Georgia",
    path: "/mbbs-abroad/georgia",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "USA",
    path: "/study-abroad/usa",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "UK",
    path: "/study-abroad/uk",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Canada",
    path: "/study-abroad/canada",
    image: "https://plus.unsplash.com/premium_photo-1673241100156-2e04fca1a4af?q=80&w=870&auto=format&fit=crop"
  },
  {
    name: "Australia",
    path: "/study-abroad/australia",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Philippines",
    path: "/mbbs-abroad/philippines",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Uzbekistan",
    path: "/mbbs-abroad/uzbekistan",
    image: "https://images.unsplash.com/photo-1673446840855-1c82bafdb67d?q=80&w=863&auto=format&fit=crop"
  },
  {
    name: "Dubai",
    path: "/study-abroad/dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600"
  }
];
