import { StudyAbroadDetailData } from './types.ts';

export const STUDY_ABROAD_DETAILED: Record<string, StudyAbroadDetailData> = {
  usa: {
    title: "Study in USA",

    heroImage: "https://socialfoundationindia.org/wp-content/uploads/2026/03/study-in-usa.jpg.jpeg",
    heroImageMobile: "https://socialfoundationindia.org/wp-content/uploads/2026/03/usa-2.jpg",

    intro: {
      text: "Study in USA is one of the most popular choices for international students who want to pursue higher education abroad. Every year thousands of students choose to study in USA because of the world-class universities, advanced education system, and global career opportunities. When students decide to study in USA, they gain access to some of the best academic institutions in the world.<br /><br />Universities in the United States offer modern learning methods, practical training, and research-based education. Choosing to study in USA allows students to explore diverse academic programs and gain knowledge that is recognized worldwide. Another major reason why students prefer to study in USA is the flexible education system.<br /><br />Students who study in USA can choose their courses according to their interests and career goals. This flexibility helps them build strong academic foundations and professional skills. International exposure is another advantage when students study in USA, creating a multicultural learning environment.<br /><br />This experience improves communication skills and global networking opportunities. For students planning to build successful international careers, choosing to study in USA is a smart decision.",
      image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/study-in-uk.jpg"
    },

    whyStudy: [
      "High academic standards with globally recognized degrees.",
      "Many research opportunities compared to other countries.",
      "Modern campus facilities and experienced faculty with industry connections.",
      "Wide range of courses across engineering, business, computer science, health sciences, data science, and more.",
      "Diverse multicultural campus environment with students from around the world.",
      "Flexible education system allowing students to choose courses based on interests and career goals."
    ],

    qualifications: [
      {
        name: "Bachelor's Degree",
        duration: "4 Years",
        description: "The bachelor's degree is an undergraduate course, and the duration of the course is generally four years."
      },
      {
        name: "Master's Degree",
        duration: "1 – 2 Years",
        description: "The duration of the master's degree course is generally one to two years."
      },
      {
        name: "PhD or Doctoral Degree",
        duration: "3 – 6 Years",
        description: "The duration of the doctoral degree course is generally three to six years. Many research-oriented students prefer to study in the USA for their doctoral programs, as the universities offer the best scholarships and research facilities."
      }
    ],

    courseStreams: [
      {
        stream: "Engineering",
        courses: ["Computer Science", "Cyber Security", "Mechanical", "Civil", "Electrical", "AI", "Data Science"],
        careers: ["Software Engineer/Developer", "Data Scientist/AI Engineer", "Cyber Security Analyst", "Mechanical/Civil/Electrical Engineer"]
      },
      {
        stream: "Medical",
        courses: ["BS", "BDS", "Nursing", "Pharmacy", "Biotechnology"],
        careers: ["Doctor/Medical Practitioner", "Dentist", "Registered Nurse", "Pharmacist"]
      },
      {
        stream: "Business & Management",
        courses: ["BBA", "MBA", "Marketing", "International Business", "Human Resource"],
        careers: ["Business Manager", "Marketing Manager", "HR Manager", "Business Development Manager"]
      },
      {
        stream: "Commerce & Finance",
        courses: ["B.Com", "Accounting", "CMA", "Banking", "Finance", "CA"],
        careers: ["Chartered Accountant (CA)", "Financial Analyst", "Banking Officer", "Finance Manager"]
      },
      {
        stream: "Arts & Humanities",
        courses: ["BA", "Psychology", "Sociology", "Political Science", "Journalism"],
        careers: ["Psychologist/Counselor", "Journalist", "Civil Services Officer", "Public Relations Specialist"]
      },
      {
        stream: "Law",
        courses: ["BA LLB", "LLB", "Corporate Law", "International Law"],
        careers: ["Lawyer/Advocate", "Corporate Lawyer", "Legal Advisor", "Judge/Legal Consultant"]
      }
    ],

    topUniversities: [
      {
        name: "Harvard University",
        location: "Massachusetts",
        description: "Business, Law"
      },
      {
        name: "Stanford University",
        location: "California",
        description: "Engineering"
      },
      {
        name: "MIT",
        location: "Massachusetts",
        description: "Technology"
      },
      {
        name: "Columbia University",
        location: "New York",
        description: "Finance"
      },
      {
        name: "University of California",
        location: "California",
        description: "Computer Science"
      }
    ],

    partTimeWork: {
      hoursPerWeek: "20 hours per week during academic session",
      details: [
        "International students with F1 visa can work 20 hours per week during academic session.",
        "Full-time work allowed during holiday season.",
        "Common jobs include library, cafeteria, and office positions.",
        "Working while studying helps gain experience and manage expenses."
      ]
    },

    postStudyWork: {
      program: "Optional Practical Training (OPT)",
      duration: "12 months (24-month extension for STEM = 36 months total)",
      description: "OPT allows students to work in USA for 12 months after graduation. STEM program students can get 24-month extension, enabling 3 years total work experience."
    },

    documentsRequired: [
      "Academic Transcripts (Educational records)",
      "Passport (Identity proof)",
      "SOP (Study plan explanation)",
      "Letters of Recommendation (Academic references)",
      "English Test Score (Proof of language skills)",
      "Resume (Academic and work background)"
    ],

    intakes: [
      {
        intake: "Fall Intake",
        months: "Aug - Sep",
        details: "Most popular intake"
      },
      {
        intake: "Spring Intake",
        months: "Jan - Feb",
        details: "Second major intake"
      },
      {
        intake: "Summer Intake",
        months: "May - Jun",
        details: "Limited courses available"
      }
    ],

    cost: {
      tuitionFees: "Undergraduate: $20,000 - $50,000 per year | Graduate: $25,000 - $70,000 per year",
      livingExpenses: "$10,000 - $20,000 per year",
      additionalCosts: "Accommodation, food, transportation, and other daily costs vary by city and lifestyle."
    },

    whyChooseUs: [
      "Personalized career counseling based on academic background and goals.",
      "University & course selection matching profile, budget, and career plans.",
      "Complete application support from shortlisting to submission.",
      "Visa guidance, documentation, and interview preparation.",
      "End-to-end support from first counseling session to departure."
    ],

    lifeAndCareer: {
      description: "Studying in USA opens doors to global career opportunities in technology, finance, healthcare, engineering, business management, and data science. Graduates gain international exposure, practical skills, and employer-preferred training.",
      points: [
        "Work experience through OPT and STEM OPT extensions.",
        "Build global professional networks and confidence.",
        "High demand for USA graduates worldwide due to innovative training.",
        "Access to top industries and real-world work experience."
      ]
    },

    faqs: [
      {
        question: "Why should I study in USA?",
        answer: "Students choose to study in USA because of high-quality education, globally recognized degrees, and strong career opportunities."
      },
      {
        question: "How much does it cost to study in USA?",
        answer: "The cost to study in USA ranges between $20,000 - $70,000 per year depending on the program."
      },
      {
        question: "Can international students work while they study in USA?",
        answer: "Yes, students on F-1 visa can work 20 hours per week during academic sessions."
      },
      {
        question: "What exams are required to study in USA?",
        answer: "IELTS, TOEFL, GRE, or GMAT depending on the program."
      },
      {
        question: "Are scholarships available to study in USA?",
        answer: "Yes, many universities provide scholarships to international students."
      }
    ]
  },
  uk: {
    title: "Study in UK",

    heroImage: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Study-in-uk.jpg",
    heroImageMobile: "https://socialfoundationindia.org/wp-content/uploads/2026/03/UK-2.jpg",

    intro: {
      text: "The United Kingdom is one of the most popular destinations for international students who wish to pursue the best education abroad. Every year, thousands of students decide to pursue their education in the UK due to the presence of the world's top-ranked universities and excellent research facilities and career prospects.<br><br>The United Kingdom has earned a reputation for being flexible, innovative, and excellent in the education sector. By pursuing their higher education in the UK, students are given the opportunity to learn in a new and modern environment and from the most experienced faculty members in the industry.<br><br>Another major reason why the United Kingdom is the most popular destination for students who wish to pursue their higher education is the presence of numerous universities and courses. From business and engineering to medicine and technology, students are given the option of pursuing any course from the top-ranked universities in the world.<br><br>Studying in the United Kingdom also provides students with international exposure and excellent job opportunities after completing their courses.",
      image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/study-in-uk.jpg"
    },

    whyStudy: [
      "World-class universities offering high-quality education and globally recognized degrees.",
      "Shorter course duration compared to other countries.",
      "Advanced research opportunities with modern laboratories and innovation programs.",
      "Multicultural environment with students from different countries.",
      "Global career opportunities in multinational companies.",
      "High-quality education system monitored by strict standards."
    ],

    qualifications: [
      {
        name: "Bachelor's Degree",
        duration: "3 Years",
        description: "Bachelor’s courses in UK generally take three years to complete."
      },
      {
        name: "Master's Degree",
        duration: "1 Year",
        description: "Master’s courses in UK usually take only one year."
      },
      {
        name: "PhD or Doctoral Degree",
        duration: "3+ Years",
        description: "Doctoral programs typically take three or more years depending on research."
      }
    ],

    courseStreams: [
      {
        stream: "Engineering",
        courses: ["Computer Science", "Cyber Security", "Mechanical", "Civil", "Electrical", "AI", "Data Science"],
        careers: ["Software Engineer / Developer", "Data Scientist / AI Engineer", "Cyber Security Analyst", "Mechanical / Civil / Electrical Engineer"]
      },
      {
        stream: "Medical",
        courses: ["BS", "BDS", "Nursing", "Pharmacy", "Biotechnology"],
        careers: ["Doctor / Medical Practitioner", "Dentist", "Registered Nurse", "Pharmacist"]
      },
      {
        stream: "Business & Management",
        courses: ["BBA", "MBA", "Marketing", "International Business", "Human Resource"],
        careers: ["Business Manager", "Marketing Manager", "HR Manager", "Business Development Manager"]
      },
      {
        stream: "Commerce & Finance",
        courses: ["B.Com", "Accounting", "CMA", "Banking", "Finance", "CA"],
        careers: ["Chartered Accountant (CA)", "Financial Analyst", "Banking Officer", "Finance Manager"]
      },
      {
        stream: "Arts & Humanities",
        courses: ["BA", "Psychology", "Sociology", "Political Science", "Journalism"],
        careers: ["Psychologist / Counselor", "Journalist", "Civil Services Officer", "Public Relations Specialist"]
      },
      {
        stream: "Law",
        courses: ["BA LLB", "LLB", "Corporate Law", "International Law"],
        careers: ["Lawyer / Advocate", "Corporate Lawyer", "Legal Advisor", "Judge / Legal Consultant"]
      }
    ],

    topUniversities: [
      {
        name: "University of Oxford",
        location: "Oxford",
        description: "Law, Medicine, Business, Philosophy"
      },
      {
        name: "University of Cambridge",
        location: "Cambridge",
        description: "Engineering, Mathematics, Science"
      },
      {
        name: "Imperial College London",
        location: "London",
        description: "Engineering, Medicine, Technology"
      },
      {
        name: "London School of Economics and Political Science",
        location: "London",
        description: "Economics, Finance, Social Sciences"
      },
      {
        name: "University College London",
        location: "London",
        description: "Architecture, Medicine, Engineering"
      },
      {
        name: "University of Edinburgh",
        location: "Edinburgh",
        description: "Computer Science, Business, Law"
      },
      {
        name: "King's College London",
        location: "London",
        description: "Medicine, Law, Humanities"
      },
      {
        name: "University of Manchester",
        location: "Manchester",
        description: "Business, Engineering, Data Science"
      }
    ],

    partTimeWork: {
      hoursPerWeek: "20 hours per week during term time",
      details: [
        "International students can work up to 20 hours per week during term time.",
        "Full-time work allowed during university holidays.",
        "Students can work in retail outlets, restaurants, cafes, universities, and offices.",
        "Common roles include library assistants, research assistants, and student ambassadors.",
        "Helps students gain experience, build networks, and manage living expenses."
      ]
    },

    postStudyWork: {
      program: "Graduate Route Visa",
      duration: "1.5 years (UG/PG) | 3 years (PhD)",
      description: "Allows international students to stay and work in the UK after completing their degree."
    },

    documentsRequired: [
      "Valid Passport",
      "Academic Transcripts",
      "English Language Test Score (IELTS/TOEFL/PTE)",
      "Statement of Purpose (SOP)",
      "Letters of Recommendation (LOR)",
      "Confirmation of Acceptance for Studies (CAS)"
    ],

    intakes: [
      {
        intake: "September Intake",
        months: "Sep",
        details: "Main intake with maximum courses"
      },
      {
        intake: "January Intake",
        months: "Jan",
        details: "Second major intake"
      },
      {
        intake: "May Intake",
        months: "May",
        details: "Limited courses available"
      }
    ],

    cost: {
      tuitionFees: "Undergraduate: £10,500 – £22,000 | Postgraduate: £10,500 – £22,000 | PhD: £17,000 – £22,000 | MBA: £11,000 – £20,000",
      livingExpenses: "Varies by city and lifestyle",
      additionalCosts: "Accommodation, food, transport, and personal expenses"
    },

    whyChooseUs: [
      "Personalized career counseling based on academic background and goals.",
      "University & course selection matching profile, budget, and career plans.",
      "Complete application support from shortlisting to submission.",
      "Visa guidance, documentation, and interview preparation.",
      "End-to-end support from counseling to departure."
    ],

    lifeAndCareer: {
      description: "After completing their education, students gain access to excellent career opportunities and international exposure. A UK degree is highly respected worldwide, helping graduates secure jobs in global companies across industries.",
      points: [
        "Graduate Route Visa allows post-study work opportunities.",
        "Access to industries like finance, technology, healthcare, engineering, and business.",
        "Work opportunities in major cities like London, Manchester, and Edinburgh.",
        "Exposure to global job markets and multicultural environments.",
        "High quality of life and international career growth."
      ]
    },

    faqs: [
      {
        question: "What are the basic requirements to study in the UK?",
        answer: "Students require academic transcripts, a valid passport, English test scores, SOP, financial documents, and CAS."
      },
      {
        question: "Can international students work while studying in the UK?",
        answer: "Yes, students can work 20 hours per week during term time and full-time during holidays."
      },
      {
        question: "Is IELTS necessary to study in the UK?",
        answer: "Not always. Some universities may accept interviews instead depending on student profile."
      },
      {
        question: "What are the main intakes in the UK?",
        answer: "September (main), January (secondary), and May (limited intake)."
      },
      {
        question: "Can students stay in the UK after studies?",
        answer: "Yes, through the Graduate Route Visa allowing 1.5–3 years of work."
      },
      {
        question: "Is the UK good for international students?",
        answer: "Yes, due to its globally recognized universities and excellent education system."
      }
    ]
  },
  australia: {
    title: "Study in Australia",

    heroImage: "https://socialfoundationindia.org/wp-content/uploads/2026/03/STUDY-IN-AUSTRALIA.jpg",
    heroImageMobile: "https://socialfoundationindia.org/wp-content/uploads/2026/03/AUSTRALIA-2.jpg",

    intro: {
      text: "Studying in Australia has become one of the most popular choices for international students who want a world-class education, global career opportunities, and a vibrant lifestyle. Australia is known for its high-quality universities, advanced research facilities, and welcoming multicultural environment that attracts students from every part of the world.<br><br>Every year, thousands of students choose to study in Australia because of its strong academic reputation, modern teaching methods, and globally recognised degrees. Australian universities focus on both theoretical knowledge and practical learning, helping students develop the skills required for successful careers in a competitive global job market. Students can choose from a wide range of programs including business, engineering, information technology, healthcare, hospitality, finance, and many other professional fields.<br><br>In addition to academic excellence, Australia offers a high quality of life and a safe environment for international students. Popular student cities such as Sydney, Melbourne, Brisbane, and Perth provide modern infrastructure, excellent public transportation, and a vibrant cultural lifestyle.<br><br>Another major advantage of studying in Australia is the opportunity for students to gain practical experience while completing their education. International students are allowed to work part-time during their studies, which helps them manage living expenses and gain valuable professional experience. After graduation, many students can also apply for post-study work opportunities that allow them to stay and work in Australia for a certain period.",
      image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/study-in-australia.jpg"
    },
    whyStudy: [
      "Degrees and qualifications offered in Australian universities are recognised all over the world.",
      "Multicultural environment allowing students to interact with people from different parts of the world.",
      "Opportunity to gain experience from the Australian workforce.",
      "Cities like Sydney, Melbourne, Brisbane, and Perth are among the best places to live in the world."
    ],

    qualifications: [
      {
        name: "Bachelor's Degree",
        duration: "3 – 4 Years",
        description: "Undergraduate programs in Australia generally take three to four years depending on the course."
      },
      {
        name: "Master's Degree",
        duration: "1 – 2 Years",
        description: "Postgraduate programs typically take one to two years to complete."
      },
      {
        name: "PhD or Doctoral Degree",
        duration: "3 – 4 Years",
        description: "Doctoral programs usually take three to four years depending on the research."
      }
    ],

    courseStreams: [
      {
        stream: "Engineering",
        courses: ["Computer Science", "Cyber Security", "Mechanical", "Civil", "Electrical", "AI", "Data Science"],
        careers: ["Software Engineer / Developer", "Data Scientist / AI Engineer", "Cyber Security Analyst", "Mechanical / Civil / Electrical Engineer"]
      },
      {
        stream: "Medical",
        courses: ["BS", "BDS", "Nursing", "Pharmacy", "Biotechnology"],
        careers: ["Doctor / Medical Practitioner", "Dentist", "Registered Nurse", "Pharmacist"]
      },
      {
        stream: "Business & Management",
        courses: ["BBA", "MBA", "Marketing", "International Business", "Human Resource"],
        careers: ["Business Manager", "Marketing Manager", "HR Manager", "Business Development Manager"]
      },
      {
        stream: "Commerce & Finance",
        courses: ["B.Com", "Accounting", "CMA", "Banking", "Finance", "CA"],
        careers: ["Chartered Accountant (CA)", "Financial Analyst", "Banking Officer", "Finance Manager"]
      },
      {
        stream: "Arts & Humanities",
        courses: ["BA", "Psychology", "Sociology", "Political Science", "Journalism"],
        careers: ["Psychologist / Counselor", "Journalist", "Civil Services Officer", "Public Relations Specialist"]
      },
      {
        stream: "Law",
        courses: ["BA LLB", "LLB", "Corporate Law", "International Law"],
        careers: ["Lawyer / Advocate", "Corporate Lawyer", "Legal Advisor", "Judge / Legal Consultant"]
      }
    ],

    topUniversities: [
      {
        name: "University of Melbourne",
        location: "Melbourne",
        description: "Business, Medicine, Engineering"
      },
      {
        name: "University of Sydney",
        location: "Sydney",
        description: "Law, Medicine, Business"
      },
      {
        name: "Australian National University",
        location: "Canberra",
        description: "Political Science, Economics"
      },
      {
        name: "University of Queensland",
        location: "Brisbane",
        description: "Science, Engineering"
      },
      {
        name: "Monash University",
        location: "Melbourne",
        description: "Pharmacy, Business, IT"
      },
      {
        name: "University of Western Australia",
        location: "Perth",
        description: "Engineering, Mining, Business"
      }
    ],

    partTimeWork: {
      hoursPerWeek: "48 hours per fortnight during academic sessions",
      details: [
        "International students can work up to 48 hours per fortnight during academic sessions.",
        "Full-time work allowed during university holidays.",
        "Jobs available in retail, restaurants, cafes, supermarkets, delivery services, and administrative roles.",
        "On-campus roles include library assistants, research assistants, and campus support staff.",
        "Helps students manage expenses, gain experience, and build professional networks."
      ]
    },

    postStudyWork: {
      program: "Temporary Graduate Visa (Subclass 485)",
      duration: "Depends on qualification level",
      description: "Allows graduates to stay and work in Australia after completing their studies."
    },

    documentsRequired: [
      "Valid Passport",
      "Academic Transcripts",
      "English Language Test Score (IELTS / TOEFL / PTE)",
      "Statement of Purpose (SOP)",
      "Letters of Recommendation (LOR)",
      "Confirmation of Enrolment (CoE)"
    ],

    intakes: [
      {
        intake: "February Intake",
        months: "Feb",
        details: "Main intake"
      },
      {
        intake: "July Intake",
        months: "Jul",
        details: "Second major intake"
      },
      {
        intake: "November Intake",
        months: "Nov",
        details: "Limited courses available"
      }
    ],

    cost: {
      tuitionFees: "Undergraduate: AUD 35,000 – AUD 50,000 | Postgraduate: AUD 35,000 – AUD 50,000 | PhD: AUD 25,000 – AUD 50,000 | MBA: AUD 35,000 – AUD 60,000",
      livingExpenses: "AUD 2,000 – AUD 3,000 per month",
      additionalCosts: "Accommodation, food, transportation, and personal expenses. Visa requirement: AUD 29,710 proof"
    },

    whyChooseUs: [
      "Personalized career counseling based on academic background and goals.",
      "University & course selection matching profile, budget, and career plans.",
      "Complete application support from shortlisting to submission.",
      "Visa guidance, documentation, and interview preparation.",
      "End-to-end support from counseling to departure."
    ],

    lifeAndCareer: {
      description: "After finishing their education, students gain access to a variety of job opportunities and international experience. A degree from Australian universities is globally recognized, helping graduates secure jobs in multinational companies.",
      points: [
        "Temporary Graduate Visa (Subclass 485) allows post-study work.",
        "Opportunities in IT, engineering, healthcare, business, finance, hospitality, and construction.",
        "Major job hubs include Sydney, Melbourne, and Brisbane.",
        "High quality of life with safety, healthcare, and modern infrastructure.",
        "Exposure to global job markets and multicultural environment."
      ]
    },

    faqs: [
      {
        question: "What are the basic requirements to study in Australia?",
        answer: "Students need academic transcripts, passport, English test scores, SOP, financial documents, and Confirmation of Enrolment (CoE)."
      },
      {
        question: "Can international students work while studying in Australia?",
        answer: "Yes, students can work 48 hours per fortnight during academic sessions and full-time during holidays."
      },
      {
        question: "What are the major intakes in Australia?",
        answer: "February (main), July (second), and November (limited intake)."
      },
      {
        question: "Is Australia a good destination for international students?",
        answer: "Yes, due to globally recognized universities, high quality of life, and strong career opportunities."
      },
      {
        question: "Is IELTS necessary to study in Australia?",
        answer: "Not always. Some universities may accept interviews depending on the student profile."
      },
      {
        question: "What are the popular courses in Australia?",
        answer: "Business, IT, engineering, healthcare, accounting, hospitality, and data science are popular choices."
      }
    ]
  },
  canada: {
    title: "Study in Canada",

    heroImage: "https://socialfoundationindia.org/wp-content/uploads/2026/03/study-in-canada.jpg",
    heroImageMobile: "https://socialfoundationindia.org/wp-content/uploads/2026/03/500-by-500-study-in-canada-.jpg",

    intro: {
      text: "Studying in Canada has become one of the most popular choices for international students who want high-quality education, global career opportunities, and a safe learning environment. Canada is known for its world-class universities, multicultural society, and student-friendly immigration policies, making it an ideal destination for students from around the world.<br><br>Every year, thousands of students choose Canada to pursue undergraduate, postgraduate, and professional programs in various fields. Canadian institutions focus on practical learning, research, and industry-oriented education, which helps students develop strong professional skills and prepare for global careers.<br><br>Another major advantage of studying in Canada is the opportunity for post-study work and potential immigration pathways. The education system in Canada is regulated by the Government of Canada, ensuring high academic standards and globally recognized degrees.",
      image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/study-in-canada.jpg"
    },

    whyStudy: [
      "Globally recognized education with degrees valued worldwide.",
      "High-quality education system regulated by the Government of Canada.",
      "Affordable tuition fees compared to other countries like USA and UK.",
      "Safe and welcoming environment with high quality of life.",
      "Part-time work opportunities during studies.",
      "Post-study work opportunities through Post-Graduation Work Permit (PGWP)."
    ],

    qualifications: [
      {
        name: "Bachelor's Degree",
        duration: "3 – 4 Years",
        description: "Undergraduate programs in Canada typically take three to four years."
      },
      {
        name: "Master's Degree",
        duration: "1 – 2 Years",
        description: "Postgraduate programs usually take one to two years to complete."
      },
      {
        name: "PhD or Doctoral Degree",
        duration: "3 – 5 Years",
        description: "Doctoral programs generally take three to five years depending on research."
      }
    ],

    courseStreams: [
      {
        stream: "Engineering",
        courses: ["Computer Science", "Cyber Security", "Mechanical", "Civil", "Electrical", "AI", "Data Science"],
        careers: ["Software Engineer / Developer", "Data Scientist / AI Engineer", "Cyber Security Analyst", "Mechanical / Civil / Electrical Engineer"]
      },
      {
        stream: "Medical",
        courses: ["BS", "BDS", "Nursing", "Pharmacy", "Biotechnology"],
        careers: ["Doctor / Medical Practitioner", "Dentist", "Registered Nurse", "Pharmacist"]
      },
      {
        stream: "Business & Management",
        courses: ["BBA", "MBA", "Marketing", "International Business", "Human Resource"],
        careers: ["Business Manager", "Marketing Manager", "HR Manager", "Business Development Manager"]
      },
      {
        stream: "Commerce & Finance",
        courses: ["B.Com", "Accounting", "CMA", "Banking", "Finance", "CA"],
        careers: ["Chartered Accountant (CA)", "Financial Analyst", "Banking Officer", "Finance Manager"]
      },
      {
        stream: "Arts & Humanities",
        courses: ["BA", "Psychology", "Sociology", "Political Science", "Journalism"],
        careers: ["Psychologist / Counselor", "Journalist", "Civil Services Officer", "Public Relations Specialist"]
      },
      {
        stream: "Law",
        courses: ["BA LLB", "LLB", "Corporate Law", "International Law"],
        careers: ["Lawyer / Advocate", "Corporate Lawyer", "Legal Advisor", "Judge / Legal Consultant"]
      }
    ],

    topUniversities: [
      {
        name: "University of Toronto",
        location: "Toronto",
        description: ""
      },
      {
        name: "University of British Columbia",
        location: "Vancouver",
        description: ""
      },
      {
        name: "McGill University",
        location: "Montreal",
        description: ""
      },
      {
        name: "University of Alberta",
        location: "Edmonton",
        description: ""
      },
      {
        name: "University of Waterloo",
        location: "Waterloo",
        description: ""
      },
      {
        name: "Western University",
        location: "London, Ontario",
        description: ""
      },
      {
        name: "McMaster University",
        location: "Hamilton",
        description: ""
      }
    ],

    partTimeWork: {
      hoursPerWeek: "20 hours per week during academic sessions",
      details: [
        "International students can work up to 20 hours per week during academic sessions.",
        "Full-time work allowed during scheduled breaks such as summer or winter holidays.",
        "Helps students gain professional experience and manage expenses.",
        "Provides exposure to Canadian work environment."
      ]
    },

    postStudyWork: {
      program: "Post-Graduation Work Permit (PGWP)",
      duration: "Depends on program duration",
      description: "Allows international students to stay and work in Canada after completing their studies."
    },

    documentsRequired: [
      "Academic Transcripts",
      "Valid Passport",
      "English Language Test Score (IELTS / TOEFL / PTE)",
      "Statement of Purpose (SOP)",
      "Offer Letter from University",
      "Passport Size Photographs",
      "Study Permit / Student Visa Documents"
    ],

    intakes: [
      {
        intake: "Fall Intake",
        months: "September",
        details: "Main intake with maximum courses"
      },
      {
        intake: "Winter Intake",
        months: "January",
        details: "Second major intake"
      },
      {
        intake: "Summer Intake",
        months: "May",
        details: "Limited courses available"
      }
    ],

    cost: {
      tuitionFees: "Undergraduate: CAD 25,000 – 45,000+ | Postgraduate: CAD 18,000 – 38,000 | MBA: CAD 35,000 – 75,000",
      livingExpenses: "Varies by city and lifestyle",
      additionalCosts: "Accommodation, food, transport, and personal expenses"
    },

    whyChooseUs: [
      "Expert career counseling based on academic background and goals.",
      "University selection assistance based on profile and career objectives.",
      "Complete admission support from application to communication.",
      "Visa guidance and documentation support."
    ],

    lifeAndCareer: {
      description: "After completing education in Canada, students gain access to strong career opportunities and high quality of life. Canada offers a diverse job market and globally recognized education.",
      points: [
        "Post-Graduation Work Permit (PGWP) for work experience.",
        "Global career opportunities in multiple industries.",
        "High quality of life with healthcare and safe environment.",
        "Popular cities include Toronto, Vancouver, and Montreal."
      ]
    },

    faqs: [
      {
        question: "Why is Canada a popular destination for international students?",
        answer: "Because of high-quality education, globally recognized universities, safe environment, and strong career opportunities."
      },
      {
        question: "Can international students work while studying in Canada?",
        answer: "Yes, up to 20 hours per week during academic sessions and full-time during breaks."
      },
      {
        question: "What is the Post-Graduation Work Permit (PGWP)?",
        answer: "It allows students to stay and work in Canada after completing studies."
      },
      {
        question: "Is IELTS required to study in Canada?",
        answer: "Most universities require IELTS score around 6.0–7.0, but alternatives may be accepted."
      },
      {
        question: "How long does it take to get a student visa for Canada?",
        answer: "Usually 4 to 8 weeks depending on the application."
      },
      {
        question: "Can students stay in Canada after graduation?",
        answer: "Yes, through PGWP."
      },
      {
        question: "Are scholarships available in Canada?",
        answer: "Yes, many universities offer scholarships and financial aid."
      }
    ]
  },
  ireland: {
    title: "Study in Ireland",

    heroImage: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Study-in-IRELAND.jpg",
    heroImageMobile: "https://socialfoundationindia.org/wp-content/uploads/2026/03/STUDY-IN-IRELAND-2.jpg",

    intro: {
      text: "Ireland has become one of the fastest-growing study destinations for international students who want to pursue high-quality education in Europe. Known for its world-class universities, welcoming culture, and strong economy, Ireland offers students an excellent academic environment combined with exciting career opportunities.<br><br>Recently, thousands of Indian students have opted for higher education in Ireland due to its globally recognized qualifications, English-speaking population, and excellent post-study work opportunities. The country's educational institutions are dedicated to creating an innovative, research-oriented, and practical learning environment for students, which is extremely beneficial for gaining recognition in the global job market.<br><br>Ireland is home to some of the world's leading technology hubs, pharmaceutical industries, and multinational companies. Companies like Google, Apple, Facebook, and Microsoft have their European headquarters in Ireland, offering excellent internship and job opportunities for students after completing their studies.<br><br>Another significant advantage of studying in Ireland is the Post Study Work Visa, which enables international students to stay and work in the country after completing their studies. Considering its safe environment, education system, and career prospects, Ireland is one of the best options for students planning to study abroad.",
      image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&q=80&w=800"
    },

    whyStudy: [
      "Globally recognized universities with strong academic reputation.",
      "English-speaking country for easy adaptation.",
      "Presence of multinational companies like Google, Apple, and Microsoft.",
      "Post-study work visa opportunities.",
      "Safe, friendly, and welcoming environment.",
      "Strong focus on research, innovation, and industry exposure."
    ],

    qualifications: [
      {
        name: "Certificate Courses",
        duration: "6 Months – 1 Year",
        description: "Short-term programs providing practical skills in specific fields."
      },
      {
        name: "Diploma Programs",
        duration: "1 – 2 Years",
        description: "Career-oriented programs with industry-relevant training."
      },
      {
        name: "Bachelor's Degree",
        duration: "3 – 4 Years",
        description: "Undergraduate programs offering in-depth academic knowledge."
      },
      {
        name: "Master's Degree",
        duration: "1 – 2 Years",
        description: "Postgraduate programs focused on specialization and career growth."
      },
      {
        name: "PhD or Doctoral Degree",
        duration: "3 – 4 Years",
        description: "Advanced research-based programs for academic and research careers."
      }
    ],

    courseStreams: [
      {
        stream: "Engineering",
        courses: ["Computer Science", "Cyber Security", "Mechanical", "Civil", "Electrical", "AI", "Data Science"],
        careers: ["Software Engineer / Developer", "Data Scientist / AI Engineer", "Cyber Security Analyst", "Mechanical / Civil / Electrical Engineer"]
      },
      {
        stream: "Medical",
        courses: ["MBBS", "BDS", "Nursing", "Pharmacy", "Biotechnology"],
        careers: ["Doctor / Medical Practitioner", "Dentist", "Registered Nurse", "Pharmacist"]
      },
      {
        stream: "Business & Management",
        courses: ["BBA", "MBA", "Marketing", "International Business", "Human Resource"],
        careers: ["Business Manager", "Marketing Manager", "HR Manager", "Business Development Manager"]
      },
      {
        stream: "Commerce & Finance",
        courses: ["B.Com", "Accounting", "Finance", "Banking", "CA"],
        careers: ["Chartered Accountant (CA)", "Financial Analyst", "Banking Officer", "Finance Manager"]
      },
      {
        stream: "Arts & Humanities",
        courses: ["BA", "Psychology", "Sociology", "Political Science", "Journalism"],
        careers: ["Psychologist / Counselor", "Journalist", "Civil Services Officer", "Public Relations Specialist"]
      },
      {
        stream: "Law",
        courses: ["BA LLB", "LLB", "Corporate Law", "International Law"],
        careers: ["Lawyer / Advocate", "Corporate Lawyer", "Legal Advisor", "Judge / Legal Consultant"]
      }
    ],

    topUniversities: [
      { name: "Trinity College Dublin", location: "Dublin", description: "" },
      { name: "University College Dublin", location: "Dublin", description: "" },
      { name: "University College Cork", location: "Cork", description: "" },
      { name: "University of Galway", location: "Galway", description: "" },
      { name: "University of Limerick", location: "Limerick", description: "" },
      { name: "Dublin City University", location: "Dublin", description: "" }
    ],

    partTimeWork: {
      hoursPerWeek: "20 hours per week during academic sessions",
      details: [
        "Students can work up to 20 hours per week during academic sessions.",
        "Up to 40 hours per week during holidays.",
        "Helps manage living expenses.",
        "Provides international work experience and skill development."
      ]
    },

    postStudyWork: {
      program: "Post Study Work Visa",
      duration: "Up to 2 Years",
      description: "Allows international students to stay and work in Ireland after completing their studies."
    },

    documentsRequired: [
      "Academic Transcripts",
      "Valid Passport",
      "English Language Test Score (IELTS / TOEFL / PTE)",
      "Statement of Purpose (SOP)",
      "Offer Letter from University",
      "Passport Size Photographs",
      "Student Visa Documents"
    ],

    intakes: [
      {
        intake: "September Intake",
        months: "September",
        details: "Main intake with maximum courses available"
      },
      {
        intake: "January Intake",
        months: "January",
        details: "Secondary intake with limited courses"
      }
    ],

    cost: {
      tuitionFees: "Undergraduate: €10,000 – €26,000 | Postgraduate: €12,000 – €30,000 | Medicine: €35,000 – €55,000",
      livingExpenses: "Approx. €7,000 – €12,000 per year",
      additionalCosts: "Accommodation, food, transport, and personal expenses"
    },

    whyChooseUs: [
      "Expert counseling for course and university selection.",
      "Complete admission and application support.",
      "Visa guidance and documentation assistance.",
      "Scholarship and financial guidance."
    ],

    lifeAndCareer: {
      description: "Ireland offers strong career opportunities after graduation due to its growing economy and presence of global companies.",
      points: [
        "Post-study work visa up to 2 years.",
        "Opportunities in IT, finance, pharma, and healthcare sectors.",
        "Home to European headquarters of major tech companies.",
        "Access to European job market."
      ]
    },

    faqs: [
      {
        question: "Is Ireland a good destination for international students?",
        answer: "Yes, Ireland offers high-quality education, global exposure, and strong career opportunities."
      },
      {
        question: "Can international students work while studying in Ireland?",
        answer: "Yes, students can work up to 20 hours per week during study and 40 hours during holidays."
      },
      {
        question: "What are the popular courses in Ireland?",
        answer: "Computer Science, Data Science, Business, Engineering, and Pharmaceutical Sciences."
      },
      {
        question: "What are post-study work options in Ireland?",
        answer: "Students can stay up to 2 years after graduation under the post-study work visa."
      },
      {
        question: "Is IELTS required for Ireland?",
        answer: "Most universities require IELTS score of 6.0–6.5 or equivalent."
      },
      {
        question: "Is Ireland safe for Indian students?",
        answer: "Yes, Ireland is one of the safest and most welcoming countries in Europe."
      }
    ]
  },
  newZealand: {
    title: "Study in New Zealand",

    heroImage: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Study-in-NEWZELAND.jpg",
    heroImageMobile: "https://socialfoundationindia.org/wp-content/uploads/2026/03/STUDY-IN-NEWZEALAND-2.jpg",

    intro: {
      text: "New Zealand has become one of the most preferred study destinations for international students who are looking for high-quality education, globally recognized degrees, and excellent lifestyle opportunities. Known for its modern education system, safe environment, and innovative teaching methods, New Zealand provides students with a strong academic foundation along with practical skills required for global careers.<br><br>Universities in the country use a British-based education system, which provides globally recognized education with high academic standards. The country's education system places a strong emphasis on research, innovation, and practical learning, which allows students to gain practical work experience during their studies. This is highly beneficial for students, as they can acquire skills that are highly sought after by employers around the globe.<br><br>Another major advantage of pursuing higher education in New Zealand is the country's culture, which is highly favorable for international students. The country provides a high standard of living, a perfect balance of work and leisure, and a welcoming society for students from around the world.<br><br>New Zealand provides strong career prospects after completing the course. Some programs are developed in association with industries, allowing students to gain industry exposure through internships. There are also provisions for international students to work after completing their studies, helping them gain valuable international experience.<br><br>Auckland and Wellington are popular student destinations, offering quality education, vibrant culture, and good job opportunities.",
      image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&q=80&w=800"
    }
    ,
    whyStudy: [
      "Globally recognized education system with high academic standards.",
      "Safe, friendly, and welcoming environment.",
      "Strong focus on practical learning and research.",
      "Post-study work opportunities available.",
      "Multicultural society with high quality of life.",
      "Excellent career prospects across industries."
    ],

    qualifications: [
      {
        name: "Certificate Programs",
        duration: "6 Months – 1 Year",
        description: "Short-term courses providing fundamental knowledge and practical skills."
      },
      {
        name: "Diploma Programs",
        duration: "1 – 2 Years",
        description: "Career-oriented programs focusing on specialized skills."
      },
      {
        name: "Bachelor's Degree",
        duration: "3 – 4 Years",
        description: "Undergraduate programs with in-depth academic and professional training."
      },
      {
        name: "Postgraduate Diploma",
        duration: "1 Year",
        description: "Advanced programs after bachelor's degree for specialization."
      },
      {
        name: "Master's Degree",
        duration: "1 – 2 Years",
        description: "Postgraduate programs focusing on advanced knowledge."
      },
      {
        name: "PhD or Doctoral Degree",
        duration: "3 – 4 Years",
        description: "Research-based programs for academic and scientific careers."
      }
    ],

    courseStreams: [
      {
        stream: "Engineering",
        courses: ["Computer Science", "Cyber Security", "Mechanical", "Civil", "Electrical", "AI", "Data Science"],
        careers: ["Software Engineer / Developer", "Data Scientist / AI Engineer", "Cyber Security Analyst", "Mechanical / Civil / Electrical Engineer"]
      },
      {
        stream: "Medical",
        courses: ["BS", "BDS", "Nursing", "Pharmacy", "Biotechnology"],
        careers: ["Doctor / Medical Practitioner", "Dentist", "Registered Nurse", "Pharmacist"]
      },
      {
        stream: "Business & Management",
        courses: ["BBA", "MBA", "Marketing", "International Business", "Human Resource"],
        careers: ["Business Manager", "Marketing Manager", "HR Manager", "Business Development Manager"]
      },
      {
        stream: "Commerce & Finance",
        courses: ["B.Com", "Accounting", "CMA", "Banking", "Finance", "CA"],
        careers: ["Chartered Accountant (CA)", "Financial Analyst", "Banking Officer", "Finance Manager"]
      },
      {
        stream: "Arts & Humanities",
        courses: ["BA", "Psychology", "Sociology", "Political Science", "Journalism"],
        careers: ["Psychologist / Counselor", "Journalist", "Civil Services Officer", "Public Relations Specialist"]
      },
      {
        stream: "Law",
        courses: ["BA LLB", "LLB", "Corporate Law", "International Law"],
        careers: ["Lawyer / Advocate", "Corporate Lawyer", "Legal Advisor", "Judge / Legal Consultant"]
      }
    ],

    topUniversities: [
      { name: "University of Auckland", location: "Auckland", description: "" },
      { name: "University of Otago", location: "Dunedin", description: "" },
      { name: "Victoria University of Wellington", location: "Wellington", description: "" },
      { name: "University of Canterbury", location: "Christchurch", description: "" },
      { name: "University of Waikato", location: "Hamilton", description: "" },
      { name: "Massey University", location: "Palmerston North", description: "" },
      { name: "Auckland University of Technology", location: "Auckland", description: "" }
    ],

    partTimeWork: {
      hoursPerWeek: "20 hours per week during academic sessions",
      details: [
        "Students can work up to 20 hours per week during academic sessions.",
        "Up to 40 hours per week during semester breaks.",
        "Helps manage living expenses.",
        "Provides real-world work experience and skill development."
      ]
    },

    postStudyWork: {
      program: "Post-Study Work Visa",
      duration: "1 – 3 Years",
      description: "Allows graduates to stay and work in New Zealand after completing their studies."
    },

    documentsRequired: [
      "Academic Transcripts",
      "Valid Passport",
      "English Language Test Score (IELTS / TOEFL / PTE)",
      "Statement of Purpose (SOP)",
      "Offer Letter from University",
      "Passport Size Photographs",
      "Student Visa Documents"
    ],

    intakes: [
      {
        intake: "February Intake",
        months: "February",
        details: "Main intake with maximum course availability"
      },
      {
        intake: "July Intake",
        months: "July",
        details: "Secondary intake with limited courses"
      }
    ],

    cost: {
      tuitionFees: "Undergraduate: NZD 30,000 – 55,000 | Postgraduate: NZD 26,000 – 50,000 | PhD: NZD 6,500 – 9,500",
      livingExpenses: "Approx. NZD 15,000 – 20,000 per year",
      additionalCosts: "Accommodation, food, transport, and personal expenses"
    },

    whyChooseUs: [
      "Personalized career counseling and guidance.",
      "University and course selection assistance.",
      "Complete admission and documentation support.",
      "Visa guidance and pre-departure assistance."
    ],

    lifeAndCareer: {
      description: "New Zealand offers excellent career opportunities and a high standard of living for international students after graduation.",
      points: [
        "Post-study work visa up to 3 years.",
        "Growing job market in IT, engineering, healthcare, and tourism.",
        "International work experience opportunities.",
        "High quality of life and work-life balance."
      ]
    },

    faqs: [
      {
        question: "Why should I choose New Zealand for higher studies?",
        answer: "It offers globally recognized education, safe environment, and strong career opportunities."
      },
      {
        question: "Can international students work while studying?",
        answer: "Yes, up to 20 hours per week during studies and full-time during breaks."
      },
      {
        question: "What are popular courses in New Zealand?",
        answer: "Engineering, IT, Business, Healthcare, Hospitality, and Arts."
      },
      {
        question: "Is post-study work visa available?",
        answer: "Yes, students can stay for 1–3 years after graduation."
      },
      {
        question: "Are scholarships available?",
        answer: "Yes, universities and government offer various scholarships."
      },
      {
        question: "How long does student visa processing take?",
        answer: "Usually 4 to 8 weeks."
      }
    ]
  },
  europe: {
    title: "Study in Europe",

    heroImage: "https://socialfoundationindia.org/wp-content/uploads/2026/03/STUDY-IN-EUROPE.jpg",
    heroImageMobile: "https://socialfoundationindia.org/wp-content/uploads/2026/03/EUROPE-2.jpg",

    intro: {
      text: "Studying in Europe has become one of the most attractive options for international students who are looking for high-quality education, global exposure, and affordable tuition fees. Europe is home to some of the world’s oldest and most prestigious universities, offering a wide range of programs across various disciplines. Countries like Germany, Italy, France, Malta, the Netherlands, and Poland have gained popularity among Indian students due to their strong education systems, modern infrastructure, and career opportunities.<br><br>One of the major benefits of pursuing education in Europe is the diversity it provides. Every country in Europe has a different culture, language, and educational system. European universities stress the importance of research and innovation in their curriculum, helping students develop academic and professional skills of the highest standard. Also, most European countries offer their educational programs in English, making it easier for international students to adapt and not worry about language difficulties. Additionally, countries like Germany offer free education in public universities, making it a more affordable option compared to the USA and UK.<br><br>Europe also offers great travel opportunities, as students can travel across countries with just one visa called the Schengen visa. This helps students become more global citizens and understand the world better. In addition, the qualifications obtained in Europe are recognized worldwide, giving students access to international job opportunities.<br><br>The opportunity for post-study work is another major benefit for students, allowing them to gain international work experience after completing their studies.",
      image: ""
    },

    whyStudy: [
      "World-class universities with global recognition.",
      "Affordable or low tuition fees in many countries.",
      "Wide range of English-taught programs.",
      "Strong focus on research and practical learning.",
      "Opportunity to travel across multiple countries with a Schengen visa.",
      "Post-study work opportunities in several European countries."
    ],

    qualifications: [
      {
        name: "Bachelor’s Degree",
        duration: "3 – 4 Years",
        description: "Undergraduate programs in various academic fields."
      },
      {
        name: "Master’s Degree",
        duration: "1 – 2 Years",
        description: "Specialized postgraduate programs for advanced knowledge."
      },
      {
        name: "Doctorate (PhD)",
        duration: "3 – 5 Years",
        description: "Research-based advanced studies for academic or research careers."
      },
      {
        name: "Diploma Courses",
        duration: "1 – 2 Years",
        description: "Skill-based and career-focused programs."
      },
      {
        name: "Certificate Courses",
        duration: "6 Months – 1 Year",
        description: "Short-term professional courses."
      }
    ],

    courseStreams: [
      {
        stream: "Engineering & Technology",
        courses: ["Mechanical Engineering", "Civil Engineering", "Computer Science", "Data Science", "Artificial Intelligence"],
        careers: ["Software Engineer", "Data Scientist", "Mechanical Engineer", "Civil Engineer", "Research Engineer"]
      },
      {
        stream: "Business & Management",
        courses: ["Business Management", "MBA", "International Business", "Marketing", "Finance"],
        careers: ["Business Manager", "Marketing Manager", "Financial Analyst", "Business Consultant"]
      },
      {
        stream: "Healthcare & Medicine",
        courses: ["Medicine", "Nursing", "Pharmacy", "Biotechnology"],
        careers: ["Doctor", "Registered Nurse", "Pharmacist", "Medical Researcher"]
      },
      {
        stream: "Arts & Humanities",
        courses: ["Psychology", "Sociology", "Journalism", "Political Science"],
        careers: ["Journalist", "Counselor", "Public Relations Specialist", "Research Analyst"]
      },
      {
        stream: "Hospitality & Tourism",
        courses: ["Hospitality Management", "Tourism Management"],
        careers: ["Hotel Manager", "Tourism Consultant", "Event Manager"]
      }
    ],

    topUniversities: [
      { name: "Technical University of Munich", location: "Munich, Germany", description: "" },
      { name: "Ludwig Maximilian University of Munich", location: "Munich, Germany", description: "" },
      { name: "Heidelberg University", location: "Heidelberg, Germany", description: "" },
      { name: "University of Bologna", location: "Bologna, Italy", description: "" },
      { name: "Sorbonne University", location: "Paris, France", description: "" },
      { name: "University of Amsterdam", location: "Amsterdam, Netherlands", description: "" },
      { name: "University of Warsaw", location: "Warsaw, Poland", description: "" }
    ],

    partTimeWork: {
      hoursPerWeek: "20 hours per week during academic sessions",
      details: [
        "Students can work up to 20 hours per week during academic sessions.",
        "Full-time work during holidays depending on country rules.",
        "Helps students manage living expenses.",
        "Provides international work experience and skill development."
      ]
    },

    postStudyWork: {
      program: "Post-Study Work Visa",
      duration: "1 – 2 Years (varies by country)",
      description: "Many European countries such as Germany, France, and the Netherlands allow international graduates to stay after completing their studies to search for jobs and gain international work experience."
    },

    documentsRequired: [
      "Academic Certificates (10th, 12th, Graduation)",
      "Valid Passport",
      "Statement of Purpose (SOP)",
      "Letters of Recommendation (LOR)",
      "English Language Test Score (IELTS / TOEFL / PTE)",
      "Offer Letter from University",
      "Financial Proof (Bank Statement or Sponsor Letter)",
      "Student Visa Application Form",
      "Medical Certificate (if required)",
      "Accommodation Proof",
      "Visa Fee Payment Receipt"
    ],

    intakes: [
      {
        intake: "Fall Intake",
        months: "September / October",
        details: "Main intake with maximum courses and university options available"
      },
      {
        intake: "Spring Intake",
        months: "January / February",
        details: "Secondary intake with limited courses"
      },
      {
        intake: "Summer Intake",
        months: "May / June",
        details: "Few universities and selected programs available"
      }
    ],

    cost: {
      tuitionFees: "Germany: €0 – €6,000 | France: €2,850 – €3,800 | Italy: €900 – €4,000 | Netherlands: €7,000 – €18,000 | Poland: €2,000 – €4,500",
      livingExpenses: "Approx. €700 – €1,500 per month depending on country",
      additionalCosts: "Accommodation, food, transportation, insurance, and personal expenses"
    },

    whyChooseUs: [
      "Personalized career counseling and guidance.",
      "University and course selection assistance.",
      "Complete admission and documentation support.",
      "Visa guidance and pre-departure assistance."
    ],

    lifeAndCareer: {
      description: "Europe offers strong career opportunities, high living standards, and global exposure for international graduates.",
      points: [
        "Post-study work opportunities in several countries.",
        "Growing job markets in engineering, IT, healthcare, finance, and business.",
        "Multicultural work environment with international exposure.",
        "High quality of life with excellent infrastructure and public services."
      ]
    },

    faqs: [
      {
        question: "Is Europe a good destination for Indian students?",
        answer: "Yes, Europe offers affordable education, globally recognized degrees, and excellent career opportunities."
      },
      {
        question: "Do I need IELTS or TOEFL to study in Europe?",
        answer: "Most universities require IELTS or TOEFL, although some may waive it if previous education was in English."
      },
      {
        question: "Which is the cheapest country to study in Europe?",
        answer: "Germany is one of the most affordable countries as many public universities offer low or no tuition fees."
      },
      {
        question: "Can international students work while studying in Europe?",
        answer: "Yes, most countries allow students to work up to 20 hours per week during their studies."
      },
      {
        question: "What are popular courses in Europe?",
        answer: "Engineering, Business Management, Data Science, Medicine, Hospitality, and Arts."
      },
      {
        question: "What are the post-study work opportunities in Europe?",
        answer: "Many countries offer post-study work permits ranging from 1 to 2 years."
      }
    ]
  }
};
