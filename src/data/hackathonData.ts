/**
 * HACKRISE ’26 Official Event Data
 * Date: 26 January 2027
 * Duration: 12 Hours
 * Associated with: Orbinex Innovations & MBC : 80
 * Supporting Partner: µLearn MBCCET
 */

export const EVENT_DETAILS = {
  name: "HACKRISE ’26",
  edition: "2026",
  tagline: "Where Ideas Rise, Innovation Begins.",
  dateText: "26 JANUARY 2027",
  targetDateISO: "2027-01-26T08:00:00+05:30",
  duration: "12 Hours",
  type: "Inter-College Hackathon",
  teamSize: "2–3 Members",
  venue: "Mar Baselios Christian College of Engineering and Technology (MBCCET) / Hybrid Hub",
  devpostUrl: "https://hackrise-26.devpost.com/?preview_token=%2Bvo9EkYGB5n1O6Zv25BphSecYLnuR5caHA%2FWIY4DdJg%3D",
  posterImage: "/assets/aistudio/IMG-20261022-WA0004_c2941550.jpg",
  organizers: {
    primary: [
      {
        name: "Orbinex Innovations",
        role: "Associated With",
        tagline: "Pioneering Next-Gen Tech & Startup Incubation",
        type: "Industry & Innovation Partner"
      },
      {
        name: "MBC : 80",
        role: "Associated With",
        tagline: "Wisdom Beyond Walls",
        type: "Host Academic Institution & Legacy"
      }
    ],
    supporting: [
      {
        name: "µLearn MBCCET",
        role: "Supporting Partner",
        tagline: "Empowering Next-Gen Builders via Micro-Learning & Peer Groups",
        type: "Community & Peer Learning Partner"
      }
    ]
  }
};

export interface DomainItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  ideas: string[];
  techStack: string[];
}

export const DOMAINS: DomainItem[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    shortDesc: "Build intelligent solutions using AI and ML.",
    fullDesc: "Harness generative models, predictive analytics, vision algorithms, and NLP to build practical intelligent systems solving real human pain points.",
    iconName: "BrainCircuit",
    ideas: [
      "Autonomous campus assistive agent for multilingual students",
      "Real-time diagnostic co-pilot for remote community health clinics",
      "Adaptive automated assessment and feedback engine for educators"
    ],
    techStack: ["Python", "TensorFlow", "PyTorch", "Gemini API", "FastAPI", "Transformers"]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    shortDesc: "Solve security challenges and build secure systems.",
    fullDesc: "Architect bulletproof security defenses, offensive tooling, identity verification mechanisms, and decentralized privacy safeguards.",
    iconName: "ShieldAlert",
    ideas: [
      "Zero-trust credential leak scanner for developer CI/CD workflows",
      "Phishing & deepfake audio detection telemetry for banking apps",
      "Encrypted peer-to-peer data locker with verifiable tamper logs"
    ],
    techStack: ["Rust", "Go", "Wireshark", "OpenSSL", "Linux Kernels", "Cryptography"]
  },
  {
    id: "web-app",
    title: "Web & App Development",
    shortDesc: "Create useful and innovative digital experiences.",
    fullDesc: "Craft blistering fast, responsive, and empathetic web/mobile applications that delight users and streamline complex physical processes.",
    iconName: "Smartphone",
    ideas: [
      "Smart micro-logistics platform for emergency response coordination",
      "Offline-first progressive web app for field survey teams",
      "Collaborative skill-swapping marketplace for college campuses"
    ],
    techStack: ["React", "TypeScript", "Next.js", "React Native", "Flutter", "Tailwind CSS"]
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    shortDesc: "Explore scalable infrastructure, automation and deployment.",
    fullDesc: "Engineer modern continuous deployment pipelines, serverless architectures, cost observability monitors, and resilient distributed microservices.",
    iconName: "CloudCog",
    ideas: [
      "Automated ephemeral preview environments for pull requests",
      "Green cloud compute scheduler optimizing server carbon footprint",
      "Fault-injection resilience testing bot for production clusters"
    ],
    techStack: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "AWS", "Google Cloud"]
  },
  {
    id: "emerging-tech",
    title: "Emerging Technologies",
    shortDesc: "Experiment with new technologies and future-focused ideas.",
    fullDesc: "Push the boundaries of spatial computing, Web3 decentralization, smart IoT embedded hardware, and augmented human-machine interfaces.",
    iconName: "Layers",
    ideas: [
      "Smart IoT energy meter with real-time anomaly detection",
      "Decentralized verifiable credential passport for university degrees",
      "WebXR hands-free training simulator for surgical instruments"
    ],
    techStack: ["WebSockets", "Three.js", "Solidity", "ESP32", "WebXR", "MQTT"]
  },
  {
    id: "open-innovation",
    title: "Open Innovation",
    shortDesc: "Build something unique that solves a meaningful problem.",
    fullDesc: "No domain boundaries. Take any overlooked real-world crisis, local community friction, or unconventional ambition and engineer an audacious solution.",
    iconName: "Sparkles",
    ideas: [
      "AgriTech weather resilience and market-rate forecast for small farmers",
      "Assistive civic grievance tracker with transparent escalation",
      "Next-generation open educational tooling for neurodivergent learners"
    ],
    techStack: ["Any Tech Stack", "Hardware + Software", "APIs", "Open Source"]
  }
];

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: "01",
    title: "REGISTER",
    description: "Register individually or as a team.",
    detail: "Submit your team roster on our official Devpost portal. Cross-college teammate pairings are 100% encouraged."
  },
  {
    step: "02",
    title: "FORM YOUR TEAM",
    description: "Build your team and prepare your idea.",
    detail: "Assemble 2 to 3 members with complementary superpowers (frontend, backend, design, pitch) and review track problem domains."
  },
  {
    step: "03",
    title: "START HACKING",
    description: "Begin developing your solution.",
    detail: "Hacking kickoff begins at 08:00 AM on 26 January 2027. Initialize your repositories and start building your core architecture."
  },
  {
    step: "04",
    title: "BUILD & INNOVATE",
    description: "Use technology to transform your idea into a working prototype.",
    detail: "Turn wireframes into functional code. Tap into experienced industry mentors during scheduled checkpoint sessions."
  },
  {
    step: "05",
    title: "SUBMIT",
    description: "Submit your project before the deadline.",
    detail: "Package your GitHub repo, live working URL or APK, architecture summary, and 2-minute demo video onto Devpost by 07:00 PM."
  },
  {
    step: "06",
    title: "DEMO & PRESENT",
    description: "Present your solution to the judges.",
    detail: "Deliver a crisp, high-impact 3-minute pitch followed by 2 minutes of Q&A with our panel of engineering leaders and founders."
  },
  {
    step: "07",
    title: "WIN & RISE",
    description: "Get recognized and compete for prizes.",
    detail: "Celebrate your sprint! Top teams take home trophies, cash awards, certificates, and incubator fast-track interviews."
  }
];

export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  tag: string;
  phase: "morning" | "afternoon" | "evening";
}

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    time: "08:00 AM",
    title: "Opening & Briefing",
    description: "Welcome address, hackathon rules briefing, domain overviews, and platform access checks.",
    tag: "Kickoff",
    phase: "morning"
  },
  {
    time: "09:00 AM",
    title: "Problem Statement Release",
    description: "Detailed challenge statements revealed across all 6 tracks. Repo initialization.",
    tag: "Tracks Live",
    phase: "morning"
  },
  {
    time: "09:30 AM",
    title: "Ideation & Architecture Freeze",
    description: "Teams finalize their technical stack, scope boundaries, and API architecture with teammates.",
    tag: "Planning",
    phase: "morning"
  },
  {
    time: "10:30 AM",
    title: "Development Kickoff",
    description: "Sprint 1 commences! Rapid prototyping of MVP core logic, database schema, and interface.",
    tag: "Sprint 1",
    phase: "morning"
  },
  {
    time: "01:30 PM",
    title: "Mentoring Checkpoint 1 & Lunch",
    description: "1-on-1 desk check-ins with industry mentors to unblock architecture roadblocks and calibrate scope.",
    tag: "Review",
    phase: "afternoon"
  },
  {
    time: "03:00 PM",
    title: "Sprint 2: Core Engineering & Polish",
    description: "Intense coding sprint. Integrating backend services, refining UI polish, and squashing bugs.",
    tag: "Sprint 2",
    phase: "afternoon"
  },
  {
    time: "05:30 PM",
    title: "Mentoring Checkpoint 2 & Pitch Dry Run",
    description: "Final mentor review. Practice demo presentation and ensure test data is loaded smoothly.",
    tag: "Rehearsal",
    phase: "afternoon"
  },
  {
    time: "07:00 PM",
    title: "Project Submission Cutoff",
    description: "Hard stop! All code commits, Devpost project pages, live demo links, and slide decks locked.",
    tag: "Deadline",
    phase: "evening"
  },
  {
    time: "07:30 PM",
    title: "Evaluation & Final Demo Round",
    description: "Top selected finalist teams deliver live presentations to the judging panel with live Q&A.",
    tag: "Pitching",
    phase: "evening"
  },
  {
    time: "08:30 PM",
    title: "Results & Recognition Ceremony",
    description: "Announcement of winners, runners-up, category accolades, certificates, and closing keynote.",
    tag: "Grand Finale",
    phase: "evening"
  }
];

export interface SubmissionRequirementItem {
  id: string;
  name: string;
  description: string;
  required: boolean;
  format: string;
}

export const SUBMISSION_REQUIREMENTS: SubmissionRequirementItem[] = [
  {
    id: "team",
    name: "Team Details",
    description: "Names, emails, college affiliations, and Devpost usernames of all 2–3 team members.",
    required: true,
    format: "Devpost Team Form"
  },
  {
    id: "problem",
    name: "Problem Statement",
    description: "A clear articulation of the real-world problem being addressed and target users.",
    required: true,
    format: "Text (100–300 words)"
  },
  {
    id: "description",
    name: "Project Description",
    description: "Comprehensive summary of how your solution works, architectural highlights, and novelty.",
    required: true,
    format: "Markdown on Devpost"
  },
  {
    id: "prototype",
    name: "Working Prototype",
    description: "A functioning, testable application or simulated prototype demonstrating core flows.",
    required: true,
    format: "Working MVP"
  },
  {
    id: "code",
    name: "Source Code",
    description: "Public GitHub/GitLab repository with clean commit history, README, and setup instructions.",
    required: true,
    format: "Public Git URL"
  },
  {
    id: "presentation",
    name: "Presentation Deck",
    description: "A concise 5–7 slide pitch deck covering problem, architecture, impact, and roadmap.",
    required: true,
    format: "PDF / Canva / Google Slides"
  },
  {
    id: "demo",
    name: "Demo / Video Walkthrough",
    description: "A live 3-minute stage demo or an unlisted 2-minute video walkthrough showing the prototype in action.",
    required: true,
    format: "Live Pitch / Video Link"
  },
  {
    id: "tech",
    name: "Technologies Used",
    description: "List of all frameworks, libraries, APIs, hardware components, and cloud services utilized.",
    required: true,
    format: "Tags / Tech Roster"
  }
];

export interface JudgingCriterion {
  id: string;
  title: string;
  weight: string;
  description: string;
  focusQuestions: string[];
}

export const JUDGING_CRITERIA: JudgingCriterion[] = [
  {
    id: "innovation",
    title: "Innovation & Creativity",
    weight: "20%",
    description: "How original and bold is the concept? Does it tackle a genuine challenge from a fresh, non-obvious angle?",
    focusQuestions: [
      "Is the idea truly distinctive or just a standard clone?",
      "Does it offer creative problem framing and unique value?"
    ]
  },
  {
    id: "technical",
    title: "Technical Implementation",
    weight: "20%",
    description: "Quality of engineering, architectural soundness, effective use of APIs/frameworks, and clean code craftsmanship.",
    focusQuestions: [
      "How complex and robust is the technical execution?",
      "Are best practices, security, and error handling observed?"
    ]
  },
  {
    id: "problem-solving",
    title: "Problem Solving",
    weight: "15%",
    description: "Depth of understanding of the problem domain and how directly the prototype solves the stated friction.",
    focusQuestions: [
      "Does this genuinely solve the target user's pain point?",
      "Is the problem well-defined and researched?"
    ]
  },
  {
    id: "functionality",
    title: "Functionality",
    weight: "15%",
    description: "Does the prototype actually work? Is the core user journey testable during the live judging demo?",
    focusQuestions: [
      "Is the MVP stable during live operation?",
      "Does it perform the primary task without fatal crashes?"
    ]
  },
  {
    id: "impact",
    title: "Impact & Scalability",
    weight: "10%",
    description: "Commercial viability, real-world usefulness, societal benefit, and potential to scale beyond a hackathon project.",
    focusQuestions: [
      "Can this evolve into a real product or startup?",
      "Who will benefit most if this is deployed in production?"
    ]
  },
  {
    id: "ux",
    title: "User Experience",
    weight: "10%",
    description: "Intuitive flow, aesthetic interface execution, accessibility, and frictionless onboarding.",
    focusQuestions: [
      "Is the interface clean, coherent, and easy to navigate?",
      "Is there thoughtful visual hierarchy and responsiveness?"
    ]
  },
  {
    id: "presentation",
    title: "Presentation & Demo",
    weight: "10%",
    description: "Clarity of the pitch, ability to answer technical cross-examination, and storytelling under pressure.",
    focusQuestions: [
      "Did the team explain their tech stack and value clearly?",
      "Were judge Q&A questions answered with precision?"
    ]
  }
];

export interface WhyParticipateItem {
  title: string;
  description: string;
  iconName: string;
  metric: string;
}

export const WHY_PARTICIPATE: WhyParticipateItem[] = [
  {
    title: "Build a Real-World Project",
    description: "Go beyond textbook theory and construct a battle-tested working software or hardware MVP from ground zero.",
    iconName: "Code2",
    metric: "1 Working MVP"
  },
  {
    title: "Learn New Technologies",
    description: "Push yourself to deploy the latest AI frameworks, modern cloud pipelines, and distributed APIs in record time.",
    iconName: "Cpu",
    metric: "Cutting-Edge Stacks"
  },
  {
    title: "Work Under a 12-Hour Challenge",
    description: "Experience the adrenaline rush of intense rapid prototyping that compresses weeks of development into half a day.",
    iconName: "Timer",
    metric: "12-Hour Sprint"
  },
  {
    title: "Collaborate Across Colleges",
    description: "Network, team up, and exchange engineering philosophies with talented students from colleges across the state.",
    iconName: "Users2",
    metric: "Inter-College"
  },
  {
    title: "Meet Developers & Innovators",
    description: "Engage directly with startup founders from Orbinex Innovations, seasoned engineers, and tech mentors.",
    iconName: "Network",
    metric: "Mentor Access"
  },
  {
    title: "Showcase Your Technical Skills",
    description: "Put your code on display in front of industry judges and add a high-impact portfolio highlight to your resume.",
    iconName: "Sparkle",
    metric: "Resume Booster"
  },
  {
    title: "Gain Hackathon Experience",
    description: "Master project pitching, rapid decision-making, and high-velocity teamwork under realistic constraints.",
    iconName: "Award",
    metric: "Real Experience"
  },
  {
    title: "Compete for Recognition & Prizes",
    description: "Earn prestigious certificates, physical trophies, cash prizes, and incubation opportunities for your venture.",
    iconName: "Trophy",
    metric: "Prizes & Medals"
  }
];

export interface PrizeItem {
  id: string;
  tier: string;
  title: string;
  defaultAmount: string;
  perks: string[];
  badge: string;
  highlightColor: string;
}

export const DEFAULT_PRIZES: PrizeItem[] = [
  {
    id: "winners",
    tier: "1st Place",
    title: "WINNERS",
    defaultAmount: "To Be Announced",
    perks: [
      "Official HACKRISE ’26 Winner Trophy & Medals",
      "Cash Prize Award Pool Allocation",
      "Direct Incubation Mentorship with Orbinex Innovations",
      "Winner Certificates of Achievement for all team members",
      "Exclusive Tech Swag & Partner Cloud Credits"
    ],
    badge: "Champion",
    highlightColor: "red"
  },
  {
    id: "runners-up",
    tier: "2nd Place",
    title: "RUNNERS-UP",
    defaultAmount: "To Be Announced",
    perks: [
      "HACKRISE ’26 Runner-Up Trophy & Medals",
      "Cash Prize Award Pool Allocation",
      "Runner-up Certificates of Merit",
      "1-on-1 Founder Strategy Review",
      "Curated Dev Swag Package"
    ],
    badge: "Finalist",
    highlightColor: "neutral"
  },
  {
    id: "special-recognitions",
    tier: "Track Accolades",
    title: "SPECIAL RECOGNITIONS",
    defaultAmount: "Certificates & Goodies",
    perks: [
      "Best UI / UX Experience Award",
      "Most Audacious Innovation Award",
      "Best All-Freshers Squad Award",
      "Best Open Source Contribution",
      "Special Partner Recognition from µLearn MBCCET"
    ],
    badge: "Spotlight",
    highlightColor: "crimson"
  }
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "registration" | "teams" | "event" | "judging";
}

export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    question: "Who can participate?",
    answer: "Any registered student enrolled in an undergraduate or postgraduate program across recognized colleges, universities, and polytechnics is eligible to participate. Cross-college teams are warmly welcomed!",
    category: "registration"
  },
  {
    id: "faq-2",
    question: "What is the team size?",
    answer: "Teams must consist of 2 to 3 members. Solo participation is not permitted as HACKRISE ’26 emphasizes collaborative engineering, peer problem-solving, and team dynamic.",
    category: "teams"
  },
  {
    id: "faq-3",
    question: "Is this an inter-college event?",
    answer: "Yes, HACKRISE ’26 is a premier inter-college competition! Students from different colleges, engineering departments, and academic years can freely form a squad together.",
    category: "teams"
  },
  {
    id: "faq-4",
    question: "What are the hackathon domains?",
    answer: "The 6 challenge domains are: 1) AI & Machine Learning, 2) Cybersecurity, 3) Web & App Development, 4) Cloud & DevOps, 5) Emerging Technologies (IoT, WebXR, Hardware), and 6) Open Innovation (free problem choice).",
    category: "event"
  },
  {
    id: "faq-5",
    question: "What should teams submit?",
    answer: "By the 07:00 PM deadline, teams must submit on Devpost: Team Details, Problem Statement, Project Description, Source Code link (GitHub/GitLab), a live Working Prototype or testable build, Presentation Pitch Deck, and a Demo Walkthrough.",
    category: "event"
  },
  {
    id: "faq-6",
    question: "How will projects be judged?",
    answer: "Projects will be evaluated across 7 weighted criteria: Innovation & Creativity (20%), Technical Implementation (20%), Problem Solving (15%), Functionality (15%), Impact & Scalability (10%), User Experience (10%), and Presentation & Demo (10%).",
    category: "judging"
  },
  {
    id: "faq-7",
    question: "Is prior hackathon experience required?",
    answer: "Not at all! Whether this is your very first hackathon or your tenth, HACKRISE ’26 is designed to be an accessible, high-learning environment with active mentor support throughout the day.",
    category: "registration"
  },
  {
    id: "faq-8",
    question: "What happens after registration?",
    answer: "Once registered on Devpost, team captains will receive confirmation emails, an invitation to the official participant communication channel, problem brief previews, and instructions for check-in on 26 January 2027.",
    category: "registration"
  }
];
