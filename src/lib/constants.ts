/**
 * Site-wide constants for the Osaka School of Art website.
 *
 * Centralizing all content data here separates concerns between
 * visual presentation (components) and content (data), making
 * future content updates a single-file operation.
 */

import type { NavItem, Program, Instructor, FAQItem } from "@/lib/types";

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Facilities", href: "#facilities" },
  { label: "Programs", href: "#programs" },
  { label: "Tuition", href: "#tuition" },
  { label: "Visa", href: "#visa" },
  { label: "FAQ", href: "#faq" },
];

export const SITE_NAME = "Osaka School of Art";
export const SITE_TAGLINE = "大阪芸術学校";
export const ENROLL_HREF = "#enroll";

// ─── Contact information ──────────────────────────────────────────────────────

export const CONTACT_EMAIL = "osa.culturalvisa@gmail.com";
export const CONTACT_ADDRESS_EN =
  "Arles Tanimachi 4F-W, 6-4-6 Tanimachi, Chuo-ku, Osaka 542-0012";
export const CONTACT_ADDRESS_JP = "〒542-0012 中央区谷町6-4-6 アールズ谷町4階W";

// ─── Programs ─────────────────────────────────────────────────────────────────
// OSA offers three programs assessed by the instructor based on a portfolio
// review. Each student is placed in the appropriate tier on admissions.
// The cultural visa allows up to 4 years — enough time to complete all three.

export const PROGRAMS: Program[] = [
  {
    id: "program-a",
    title: "Program A",
    tagline: "Start from zero. Build a real foundation.",
    description:
      "Designed for those with little to no drawing experience. The course teaches shape, light, value, and composition, then progresses to figure drawing, basic anatomy, and perspective. We finish with line weight and manga panelling. By the end of Program A, you will have the skills of an intermediate artist.",
    duration: "Assessed individually",
    level: "Beginner",
    icon: "✏️",
    accentColor: "border-akane-500",
    topics: [
      "Shape, light, value & composition",
      "Figure drawing & basic anatomy",
      "Perspective & background techniques",
      "Drawing people and environments",
      "Line weight fundamentals",
      "Introduction to manga panelling",
    ],
  },
  {
    id: "program-b",
    title: "Program B",
    tagline: "Master the techniques of a professional mangaka.",
    description:
      "For artists with solid drawing experience who want to reach industry standard. We cover the specific techniques working mangaka use: panelling, text blocks, splash pages, and cover composition. Advanced linework, character design, and clothing design are core components. You will graduate with the skills of a professional mangaka.",
    duration: "Assessed individually",
    level: "Intermediate",
    icon: "🖊️",
    accentColor: "border-cyan-500",
    topics: [
      "Manga panelling & text block layout",
      "Splash pages & cover composition",
      "Advanced linework & inking",
      "Character design & archetypes",
      "Clothing & fashion design",
      "Mangaka mentality & professional workflow",
    ],
  },
  {
    id: "program-c",
    title: "Program C",
    tagline: "Break into the manga industry.",
    description:
      "For artists already at a professional level looking to debut. Program C lets you develop your one-shot manga with full staff support: writing, editing, and advice from a working mangaka. We help you build connections with manga studios and submit your one-shot together. Our goal is publication, or a role as a mangaka's assistant on the path to your debut.",
    duration: "Assessed individually",
    level: "Advanced",
    icon: "🏆",
    accentColor: "border-akane-500",
    topics: [
      "One-shot development & production",
      "Writing & story editing support",
      "Professional mangaka mentorship",
      "Manga studio connections & networking",
      "Publisher submission guidance",
      "Industry debut strategy",
    ],
  },
];

// ─── Faculty ──────────────────────────────────────────────────────────────────
// Sean Ngo is the founder of OSA. Additional faculty will be listed here
// once the school's full teaching team is assembled.

export const INSTRUCTORS: Instructor[] = [
  {
    name: "Sean Ngo",
    title: "Founder & Lead Instructor",
    bio: "Sean is a professional artist and lifelong manga enthusiast who studied fine art at university in San Francisco before relocating to Osaka to bring his vision of an English-language manga school to life.",
    imageSrc:
      "https://static.wixstatic.com/media/e668a5_cbc95f28ff1647d5a89b16248567c729~mv2.jpg",
    highlights: [
      "Fine Art graduate — San Francisco art university",
      "Professional artist with experience in visual development and sequential art",
      "Founded OSA to bring world-class manga education to an international audience",
    ],
  },
];

// ─── Facility images ──────────────────────────────────────────────────────────
// Real photographs of the OSA campus in the Tanimachi district of Osaka.

export const FACILITY_IMAGES = [
  {
    src: "https://static.wixstatic.com/media/e668a5_d7e1b842d99d43e485f33a1f87995d39~mv2.jpg",
    alt: "OSA studio — full classroom view",
    wide: true,
  },
  {
    src: "https://static.wixstatic.com/media/e668a5_d6d598cd8c884f7aa214d3e6cf18a426~mv2.jpg",
    alt: "Private desk booth workspace",
    wide: false,
  },
  {
    src: "https://static.wixstatic.com/media/e668a5_f6491ee56de44a3b9c077ea1241a368b~mv2.jpg",
    alt: "Individual drawing station",
    wide: false,
  },
  {
    src: "https://static.wixstatic.com/media/e668a5_7ea904540c2f492c8b061f52fb3b96b2~mv2.jpg",
    alt: "Studio equipment and tools",
    wide: false,
  },
  {
    src: "https://static.wixstatic.com/media/e668a5_c8822095b8284d3abe82cf628b29c9eb~mv2.jpg",
    alt: "Classroom overview with workstations",
    wide: true,
  },
  {
    src: "https://static.wixstatic.com/media/e668a5_dae1ac1f7b4441c483274f8d227c08b5~mv2.jpg",
    alt: "Studio workspace detail",
    wide: false,
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do I need to speak Japanese to study at OSA?",
    answer:
      "No. All programs are taught entirely in English. We also offer an optional weekly Japanese language course to help enrich your daily life in Osaka, but it is not required for any drawing program.",
  },
  {
    question: "How do I know which program I'll be placed in?",
    answer:
      "Our instructor reviews your portfolio and assesses your current skill level during the application process. You will be placed in Program A (beginner), B (intermediate), or C (professional). The goal is for students to progress through all three programs during their time at OSA.",
  },
  {
    question: "What visa do I need, and how do I get it?",
    answer:
      "Enrolling at OSA makes you eligible for a Japanese Cultural Activities Visa. This visa has one of the fastest approval times in Japan: typically 1 to 3 months of processing time. Our admissions team guides you step by step through the entire application once you have enrolled, at no extra cost.",
  },
  {
    question: "How long can I study on the cultural visa?",
    answer:
      "The cultural visa allows up to 4 years of study. This is enough time to progress from Program A all the way through Program C, and potentially debut as a professional mangaka.",
  },
  {
    question: "What is the tuition cost?",
    answer:
      "Tuition is approximately $6,000 USD per year (€5,000 EUR for EU students). Of this, approximately $1,200 covers legal fees for visa processing; the remainder funds teaching, staff, and facility costs. Immigration will also require you to demonstrate sufficient savings to support yourself in Japan for at least one year.",
  },
  {
    question: "What skill level do I need to apply?",
    answer:
      "We accept artists at every level, from complete beginners with zero drawing experience (Program A) to working professionals looking to break into the manga industry (Program C). Submit a portfolio or a description of your background, and our instructor will recommend the right starting point.",
  },
  {
    question: "What equipment does the school provide?",
    answer:
      "OSA's classroom is fully equipped for both traditional (pen and ink) and digital (iPad with Clip Studio Paint) approaches. Private desk booths ensure you can focus on your work. The facility also has a lounge area, a manga and board game library, and 24-hour keycard access so you can work on your own schedule.",
  },
  {
    question: "Where exactly is OSA located?",
    answer:
      "OSA is located at Arles Tanimachi 4F-W, 6-4-6 Tanimachi, Chuo-ku, Osaka. One minute on foot from Tanimachi 6-chome station, 10 minutes from Shinsaibashi, and one stop from Osaka Castle Park.",
  },
  {
    question: "Is OSA an in-person program?",
    answer:
      "Yes. OSA is a fully in-person school located in Osaka. The immersive experience of studying manga in Japan, surrounded by its culture, language, and creative community, is central to what we offer. The cultural visa pathway also requires in-person enrollment.",
  },
];
