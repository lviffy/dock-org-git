export type Program = {
  slug: string;
  title: string;
  summary: string;
  image: string;
};

export type Story = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

export const stats = [
  { value: 120, suffix: '+', label: 'Communities reached' },
  { value: 45000, suffix: '+', label: 'Lives impacted' },
  { value: 800, suffix: '+', label: 'Active volunteers' },
  { value: 15, suffix: '', label: 'Years of service' },
];

export const programs: Program[] = [
  {
    slug: 'education',
    title: 'Education for Every Child',
    summary:
      'Bridging the learning gap with community schools, digital classrooms, scholarships and teacher training in underserved regions.',
    // Children raising hands in a classroom
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&h=600&q=80',
  },
  {
    slug: 'healthcare',
    title: 'Health & Wellbeing',
    summary:
      'Mobile health camps, maternal care, nutrition support and preventive health awareness for remote and low-income communities.',
    // Doctor reviewing patient information
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&h=600&q=80',
  },
  {
    slug: 'livelihood',
    title: 'Livelihood & Skilling',
    summary:
      'Vocational training, women-led self-help groups and micro-entrepreneurship support that build sustainable incomes.',
    // Team collaborating around a table
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&h=600&q=80',
  },
  {
    slug: 'environment',
    title: 'Environment & Climate Action',
    summary:
      'Tree plantation drives, water conservation, clean-energy adoption and climate-resilience education for villages.',
    // Hands planting a seedling
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&h=600&q=80',
  },
  {
    slug: 'women-empowerment',
    title: 'Women Empowerment',
    summary:
      'Leadership programs, financial literacy and legal-rights awareness enabling women to lead change in their communities.',
    // Confident woman professional
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&h=600&q=80',
  },
  {
    slug: 'disaster-relief',
    title: 'Disaster Relief & Response',
    summary:
      'Rapid-response relief kits, shelter support and long-term rehabilitation for families affected by disasters.',
    // Volunteers packing donation/relief boxes
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&h=600&q=80',
  },
];

export const stories: Story[] = [
  {
    slug: 'digital-classrooms-launch',
    title: '25 new digital classrooms launched across rural districts',
    date: '2026-05-28',
    excerpt:
      'Our digital learning initiative now brings interactive education to more than 3,000 students in remote villages.',
    // Student learning with a laptop
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&h=500&q=80',
    category: 'Education',
  },
  {
    slug: 'health-camp-milestone',
    title: 'Mobile health camps cross 10,000 free consultations',
    date: '2026-05-12',
    excerpt:
      'A milestone for community health: free check-ups, medicines and referrals delivered at the doorstep of families in need.',
    // Doctor with stethoscope during consultation
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&h=500&q=80',
    category: 'Healthcare',
  },
  {
    slug: 'women-shg-success',
    title: 'Self-help groups help 500 women start micro-businesses',
    date: '2026-04-22',
    excerpt:
      'From tailoring units to organic farming collectives, women entrepreneurs are rewriting the story of their villages.',
    // Smiling woman entrepreneur
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&h=500&q=80',
    category: 'Livelihood',
  },
  {
    slug: 'green-drive',
    title: '1 lakh saplings planted in the Green Future drive',
    date: '2026-04-05',
    excerpt:
      'Volunteers, schools and local panchayats joined hands for one of our largest community plantation campaigns yet.',
    // Lush green forest canopy
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&h=500&q=80',
    category: 'Environment',
  },
];

export const successStory = {
  title: 'From dropout to district topper',
  quote:
    'I thought my education ended in grade 6. The community learning centre gave me a second chance, and today I dream of becoming a teacher myself.',
  name: 'Meera, 16',
  location: 'Rural Maharashtra',
  body:
    'When her family migrated for seasonal work, Meera dropped out of school. Through our bridge-education program and a scholarship, she rejoined mainstream school, topped her district board exams, and now mentors 20 younger girls in her village.',
  // Young student reading a book
  image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&h=1100&q=80',
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Transparent, grounded and genuinely community-first. Every rupee we contributed came back to us as a measurable, documented outcome.',
    name: 'Ananya Rao',
    role: 'CSR Head, Corporate Partner',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=120&h=120&q=80',
  },
  {
    quote:
      'Volunteering with the foundation changed how I see my own city. The team makes it incredibly easy to contribute meaningfully.',
    name: 'Kabir Singh',
    role: 'Volunteer since 2022',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&h=120&q=80',
  },
  {
    quote:
      'The health camp in our village was the first time many elders got a proper check-up in years. They came back every month, as promised.',
    name: 'Lakshmi Devi',
    role: 'Community Member, Telangana',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
  },
];

export const partners = [
  'WHO', 'UNESCO', 'UNICEF', 'Smile Foundation', 'Oxfam', 'Save the Children', 'CARE', 'ActionAid', 'World Vision', 'Plan International',
];

export const donationTiers = [
  {
    amount: 500,
    title: 'Supporter',
    description: 'Provides school supplies for one child for a month.',
  },
  {
    amount: 1500,
    title: 'Champion',
    description: 'Funds a health check-up camp consultation for five families.',
  },
  {
    amount: 5000,
    title: 'Changemaker',
    description: 'Sponsors vocational training for one woman entrepreneur.',
  },
  {
    amount: 10000,
    title: 'Guardian',
    description: 'Supports a digital classroom for an entire village school.',
  },
];
