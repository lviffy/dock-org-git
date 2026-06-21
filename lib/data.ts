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
  externalUrl?: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

export const stats = [
  { value: 2, suffix: ' Cr+', label: 'Voters Reached' },
  { value: 50, suffix: '+', label: 'Campaigns Executed' },
  { value: 32500, suffix: '+', label: 'Booths Covered' },
  { value: 3, suffix: '', label: 'States Covered' },
];

export const programs: Program[] = [
  {
    slug: 'institutional-literacy',
    title: 'Institutional Literacy',
    summary:
      'Understanding how laws are drafted, committees function, budgets are shaped, and authority is exercised in practice.',
    image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=800&h=600&q=80',
  },
  {
    slug: 'governance-simulations',
    title: 'Governance Simulation Series',
    summary:
      'A high-intensity replication of legislative and fiscal processes where participants draft proposals, undergo committee scrutiny, and allocate budgets.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&h=600&q=80',
  },
  {
    slug: 'civic-fellowship',
    title: 'Civic Leadership Fellowship',
    summary:
      'An annual, limited-cohort program focused on governance immersion, institutional negotiation, crisis simulation, and structured policy drafting.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=600&q=80',
  },
  {
    slug: 'policy-roundtables',
    title: 'Policy Roundtables & Research Briefs',
    summary:
      'Curated thematic dialogues producing documented, publicly archived briefs and working notes.',
    image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=800&h=600&q=80',
  },
  {
    slug: 'institutional-advisory',
    title: 'Institutional Advisory Engagement',
    summary:
      'Ongoing collaboration with administrators, academics, and governance practitioners to ensure seriousness and grounded perspective.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&h=600&q=80',
  },
];

export const stories: Story[] = [
  {
    slug: 'youth-policy-debate-2026',
    title: 'Puducherry Youth Policy Debate 2026 Launched Jointly by DOCK and MVIT',
    date: '2026-03-15',
    excerpt:
      'A campus forum on governance, law, and democratic dialogue brings together engineering students to debate digital rights, public policy, and regional governance.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&h=500&q=80',
    category: 'Events',
  },
  {
    slug: 'puducherry-outlook-conclave-success',
    title: 'Puducherry Outlook Conclave 2026: Setting a New Civic Dialogue Standard',
    date: '2026-02-06',
    excerpt:
      'Featuring Dr. Kiran Bedi and G. Theva Neethi Dhas, the conclave successfully engaged over 500 students in constructive policy and administration dialogues.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&h=500&q=80',
    category: 'Conclave',
  },
  {
    slug: 'political-shake-up-puducherry-hans-india',
    title: 'Political Shake-Up in Puducherry: LJK and Dock Alliance Sets Precedent',
    date: '2026-04-12',
    excerpt:
      'Coverage on the Puducherry political realignment and the LJK-Dock consulting alliance model for structured campaigns.',
    image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=800&h=500&q=80',
    category: 'News Report',
    externalUrl: 'https://www.thehansindia.com/politics/political-shake-up-in-puducherry-ljk-and-dock-consulting-alliance-sets-a-new-precedent-1057542',
  },
  {
    slug: 'six-month-surge-dravidan-times',
    title: 'Six-Month Surge Shapes New Puducherry Alliance',
    date: '2026-03-25',
    excerpt:
      'A report on six-month momentum and the operational campaign framework behind the Puducherry alliance.',
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800&h=500&q=80',
    category: 'News Report',
    externalUrl: 'https://dravidantimes.com/national-news/six-month-surge-shapes-new-puducherry-alliance/29866/',
  },
  {
    slug: 'code-cadre-control-the-week',
    title: 'Code, Cadre and Control: Inside the System Powering Puducherry’s Rise',
    date: '2026-03-21',
    excerpt:
      'Business-wire update discussing systems, discipline, and organisational mechanics behind the new political surge.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&h=500&q=80',
    category: 'Wire Feed',
    externalUrl: 'https://www.theweek.in/wire-updates/business/2026/03/21/code-cadre-and-control-inside-the-system-powering-puducherry%E2%80%99s-newest-political-rise.html',
  },
  {
    slug: 'jagan-party-building-advisor-great-andhra',
    title: 'Is Jagan Right in Appointing Mohan as Party-Building Advisor?',
    date: '2024-11-05',
    excerpt:
      'Commentary discussing advisor appointment decisions and organisational strategy in Andhra politics.',
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=800&h=500&q=80',
    category: 'Opinion & Analysis',
    externalUrl: 'https://www.greatandhra.com/movies/news/is-jagan-right-in-appointing-mohan-as-his-party-building-advisor-154310',
  },
];

export const successStory = {
  title: 'Puducherry Outlook Conclave 2026',
  quote:
    'We believe that informed dialogue and collective action are essential for building a stronger, more inclusive, and prosperous Puducherry. The conclave reflects DOCK\'s commitment to fostering civic awareness.',
  name: 'Democratic Organization for Civic Knowledge',
  location: 'Puducherry',
  body:
    'Organized by DOCK on 5 February 2026, the conclave brought together over 500 student delegates, policy experts, and administrative leaders (including Dr. Kiran Bedi and Shri G. Theva Neethi Dhas) to collaborate on Puducherry\'s development roadmap.',
  image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&h=1100&q=80',
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'The debate simulation was an eye-opener. It was not about theatrical rhetoric, but about understanding legislative procedures, administrative design, and budget allocation in practice.',
    name: 'Student Participant',
    role: 'MVIT Puducherry',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=120&h=120&q=80',
  },
  {
    quote:
      'DOCK successfully created a platform for constructive dialogue connecting policymakers directly with young citizens, fostering active civic responsibility.',
    name: 'Dr. Kiran Bedi, IPS (Retd.)',
    role: 'Former Lieutenant Governor of Puducherry',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80',
  },
];

export const partners = [
  'MVIT', 'Latchiya Jananayaga Katchi (LJK)', 'Regus', 'Puducherry Civic Forums', 'Manakula Vinayagar Institute of Technology',
];
