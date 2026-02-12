
export interface Destination {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  popularCourses: string[];
  code?: string;
}

export interface Service {
  id: string;
  title: string;
  desc: string;
  icon: string;
  fullDesc?: string;
  longDescription?: string;
  image?: string;
  benefits?: string[];
  process?: string[];
}

export interface Office {
  id?: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  lat: number;
  lng: number;
  slug: string;
  mapEmbed?: string;
}

export interface College {
  id?: string;
  name: string;
  country: string;
  category: 'MBBS Abroad' | 'Study Abroad';
  image: string;
  link?: string;
}

export interface CollegeDetailData {
  id?: string; // Firebase ID
  slug?: string;
  country?: string;
  category?: 'MBBS Abroad' | 'Study Abroad';
  name: string;
  location: string;
  type: string; // Public/Private
  established: string;
  image: string; // Banner
  intro: string;
  highlights: string[];
  eligibility: string[];
  admissionProcess: string[];
  documents: string[];
  fees: {
    structure: { label: string; value: string }[];
    note?: string;
  };
  courses: string[];
  studentLife: string[];
  placements: string[];
  gallery?: string[];
}

export interface ProgramDetailData {
  title: string;
  tagline?: string;
  heroImage?: string;
  content: string; 
  faqs?: { question: string; answer: string }[];
  overview?: string;
  about?: string;
}

export interface MBBSDetailData {
  title: string;
  heroImage: string;
  intro: {
    text: string;
    image: string;
  };
  highlights: {
    title: string;
    value: string;
  }[];
  topUniversities: string[];
  facts: {
    intro: string;
    list: string[];
  };
  documents: {
    icon: string; // FontAwesome class
    label: string;
  }[];
  advantages: string[];
  studentLife: {
    intro: string;
    list: string[];
  };
}

export interface StudyIndiaDetailData {
  title: string;
  heroImage: string;
  intro: string;
  why: {
    title: string;
    points: string[];
  };
  duration: {
    title: string;
    cards: string[];
  };
  eligibility: {
    title: string;
    points: string[];
  };
  documents: {
    title: string;
    subtitle: string;
    points: string[];
  };
  process: {
    title: string;
    steps: string[];
  };
  economical: {
    title: string;
    points: string[];
  };
  advantages: {
    title: string;
    points: string[];
  };
  international: {
    title: string;
    points: string[];
  };
  dates: {
    title: string;
    points: string[];
  };
  govt: {
    title: string;
    points: string[];
  };
  explore: {
    title: string;
    points: string[];
  };
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
}

export interface MediaItem {
  id?: string;
  url: string;
  type: 'image' | 'video';
  title: string;
  alt: string;
}

export interface VideoStory {
  id?: string;
  studentName: string;
  university: string;
  videoUrl: string; // MP4 URL or YouTube Embed
  thumbnailUrl: string;
  tagline: string;
}

export interface Blog {
  id: string;
  title: string;
  img: string;
  imgAlt?: string;
  date: string;
  category: string;
  author: string;
  content: string;
  readTime: string;
  metaTitle?: string;
  metaDesc?: string;
  timestamp?: any;
}

export interface SiteSettings {
  id?: string;
  logoUrl: string;
  metaTitle: string;
  metaDesc: string;
  helpline: string;
  email: string;
}

export interface Testimonial {
  id: string;
  name: string;
  univ: string;
  text: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface EntranceExamData {
  title: string;
  heroImage: string;
  intro: string;
  examParts: string[]; // e.g. ["JEE Main", "JEE Advanced"]
  additionalNote?: string;
  eligibility: {
    title: string;
    points: string[];
  };
  syllabus: {
    maths?: string[];
    physics?: {
      sectionA: string[];
      sectionB: string[]; // Experiments
    };
    chemistry?: {
      physical: string[];
      inorganic: string[];
      organic: string[];
    };
    general?: string[]; // Fallback for other exams
  };
  preparationTips: string[];
}

export interface GalleryItem {
  url: string;
  caption: string;
  category: 'Visa Success' | 'University Visit' | 'Event';
}

export type AppView = 'home' | 'about' | 'services' | 'contact' | 'mbbs-abroad' | 'study-abroad' | 'study-india' | 'exams' | 'admin' | 'service-detail' | 'legal' | 'achievements' | 'office-detail' | 'blog-list' | 'blog-detail' | 'college-detail';

export interface RouteState {
  view: AppView;
  subPath?: string;
}
