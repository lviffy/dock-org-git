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
    image: '/structural-gap.webp',
  },
  {
    slug: 'governance-simulations',
    title: 'Governance Simulation Series',
    summary:
      'A high-intensity replication of legislative and fiscal processes where participants draft proposals, undergo committee scrutiny, and allocate budgets.',
    image: '/puducherry-outlook-conclave-2026.webp',
  },
  {
    slug: 'civic-fellowship',
    title: 'Civic Leadership Fellowship',
    summary:
      'An annual, limited-cohort program focused on governance immersion, institutional negotiation, crisis simulation, and structured policy drafting.',
    image: '/student-delegation.webp',
  },
  {
    slug: 'policy-roundtables',
    title: 'Policy Roundtables & Research Briefs',
    summary:
      'Curated thematic dialogues producing documented, publicly archived briefs and working notes.',
    image: '/keynote-panel.webp',
  },
  {
    slug: 'institutional-advisory',
    title: 'Institutional Advisory Engagement',
    summary:
      'Ongoing collaboration with administrators, academics, and governance practitioners to ensure seriousness and grounded perspective.',
    image: '/hero-photo.webp',
  },
];

export const stories: Story[] = [
  {
    slug: 'youth-policy-debate-2026',
    title: 'Puducherry Youth Policy Debate 2026 Launched Jointly by DOCK and MVIT',
    date: '2026-03-15',
    excerpt:
      'A campus forum on governance, law, and democratic dialogue brings together engineering students to debate digital rights, public policy, and regional governance.',
    image: '/student-delegation.webp',
    category: 'Events',
  },
  {
    slug: 'puducherry-outlook-conclave-success',
    title: 'Puducherry Outlook Conclave 2026: Setting a New Civic Dialogue Standard',
    date: '2026-02-06',
    excerpt:
      'Featuring Dr. Kiran Bedi and G. Theva Neethi Dhas, the conclave successfully engaged over 500 students in constructive policy and administration dialogues.',
    image: '/puducherry-outlook-conclave-2026.webp',
    category: 'Conclave',
  },
  {
    slug: 'political-shake-up-puducherry-hans-india',
    title: 'Political Shake-Up in Puducherry: LJK and Dock Alliance Sets Precedent',
    date: '2026-04-12',
    excerpt:
      'Coverage on the Puducherry political realignment and the LJK-Dock consulting alliance model for structured campaigns.',
    image: '/keynote-panel.webp',
    category: 'News Report',
    externalUrl: 'https://www.thehansindia.com/politics/political-shake-up-in-puducherry-ljk-and-dock-consulting-alliance-sets-a-new-precedent-1057542',
  },
  {
    slug: 'six-month-surge-dravidan-times',
    title: 'Six-Month Surge Shapes New Puducherry Alliance',
    date: '2026-03-25',
    excerpt:
      'A report on six-month momentum and the operational campaign framework behind the Puducherry alliance.',
    image: '/structural-gap.webp',
    category: 'News Report',
    externalUrl: 'https://dravidantimes.com/national-news/six-month-surge-shapes-new-puducherry-alliance/29866/',
  },
  {
    slug: 'code-cadre-control-the-week',
    title: 'Code, Cadre and Control: Inside the System Powering Puducherry’s Rise',
    date: '2026-03-21',
    excerpt:
      'Business-wire update discussing systems, discipline, and organisational mechanics behind the new political surge.',
    image: '/hero-photo.webp',
    category: 'Wire Feed',
    externalUrl: 'https://www.theweek.in/wire-updates/business/2026/03/21/code-cadre-and-control-inside-the-system-powering-puducherry%E2%80%99s-newest-political-rise.html',
  },
  {
    slug: 'jagan-party-building-advisor-great-andhra',
    title: 'Is Jagan Right in Appointing Mohan as Party-Building Advisor?',
    date: '2024-11-05',
    excerpt:
      'Commentary discussing advisor appointment decisions and organisational strategy in Andhra politics.',
    image: '/Jose-Charles-Martin.webp',
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
  image: '/puducherry-outlook-conclave-2026.webp',
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'The debate simulation was an eye-opener. It was not about theatrical rhetoric, but about understanding legislative procedures, administrative design, and budget allocation in practice.',
    name: 'Student Participant',
    role: 'MVIT Puducherry',
    image: '/dock-logo.webp',
  },
  {
    quote:
      'DOCK successfully created a platform for constructive dialogue connecting policymakers directly with young citizens, fostering active civic responsibility.',
    name: 'Dr. Kiran Bedi, IPS (Retd.)',
    role: 'Former Lieutenant Governor of Puducherry',
    image: '/kiran-bedi-pfp.webp',
  },
];

export const partners = [
  'MVIT', 'Latchiya Jananayaga Katchi (LJK)', 'Regus', 'Puducherry Civic Forums', 'Manakula Vinayagar Institute of Technology',
];
