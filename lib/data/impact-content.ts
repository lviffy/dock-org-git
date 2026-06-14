export type ImpactMetric = {
  value: string;
  label: string;
};

export type ProjectTrack = {
  title: string;
  detail: string;
};

export type SprintPhase = {
  timeline: string;
  objective: string;
  details: string;
};

export type Project = {
  id: string;
  title: string;
  client: string;
  region: string;
  intro: string;
  context: string;
  challenges: string[];
  commandArchitecture?: string[];
  subConstituencies?: {
    name: string;
    slogan: string;
    strategy: string[];
    diagnostics?: string[];
    executionTracks?: string[];
    outcome: string;
  }[];
  tracks?: ProjectTrack[];
  cadreFramework?: {
    title: string;
    steps: { name: string; desc: string }[];
    outcome: string;
  };
  pillars?: {
    title: string;
    bullets: string[];
  }[];
  sprintPlan?: SprintPhase[];
  adaptation?: string;
  metrics: { label: string; value: string }[];
  finalOutcome: string;
};

export const impactMetrics: ImpactMetric[] = [
  { value: '2+ Crore', label: 'Voters Reached' },
  { value: '32,500+', label: 'Polling Booths Covered' },
  { value: '200+', label: 'Assembly Constituencies' },
  { value: '30+', label: 'Parliamentary Constituencies' },
  { value: '3', label: 'States Covered' },
  { value: '50+', label: 'Campaigns Executed' },
];

export const executionLens = [
  {
    title: 'Intelligence',
    description: 'Data-backed campaign planning tied to constituency realities.',
  },
  {
    title: 'Execution',
    description: 'Clear command systems from war rooms to village-level operations.',
  },
  {
    title: 'Adaptation',
    description: 'Rapid feedback loops and recalibration under real campaign pressure.',
  },
  {
    title: 'Outcomes',
    description: 'Measurable results across large-scale electoral and party-building mandates.',
  },
];

export const projects: Project[] = [
  {
    id: 'telangana-parliamentary',
    title: 'Telangana Parliamentary Campaigns',
    client: 'Eatala Rajender & DK Aruna',
    region: 'Telangana',
    intro: 'Dock Consulting played a strategic role in high-visibility constituencies in Telangana that were directly linked to the sitting Chief Minister, including his parliamentary seat and home assembly.',
    context: 'Campaign architecture combined constituency-specific manifesto planning, household outreach, volunteer mobilisation, and election war-room coordination tailored to each constituency\'s political context.',
    challenges: [
      'High-visibility constituencies directly linked to the sitting Chief Minister',
      'Need for constituency-specific strategy instead of one generic campaign line',
      'Simultaneous mobilisation across parliamentary and assembly influence zones',
      'Requirement for disciplined war-room reviews and volunteer command',
    ],
    commandArchitecture: [
      'Malkajgiri campaign built on a 7-point manifesto and household outreach',
      'Mahabubnagar campaign built on assembly-specific manifestos and community meetings',
      'Election war-room operations with 140+ division-level meetings',
      'Large-scale volunteer mobilisation across targeted voter clusters',
    ],
    subConstituencies: [
      {
        name: 'Constituency 1 — Malkajgiri Parliament',
        slogan: 'Modi Guarantee - Eatala Surety',
        strategy: [
          '7-point manifesto tailored for local issues',
          'Household outreach with direct voter contact',
          '10,000+ volunteers coordinated',
          'Election war-room with 140+ division meetings',
        ],
        diagnostics: [
          'Household outreach data informed local issue prioritisation',
          'Division-level campaign reviews sustained message and execution discipline',
        ],
        executionTracks: [
          '7-point manifesto communication',
          '10,000+ volunteer mobilisation',
          'Election war-room command and review cycles',
        ],
        outcome: 'Delivered a 3.9 lakh+ winning majority with disciplined booth conversion.',
      },
      {
        name: 'Constituency 2 — Mahabubnagar Parliament',
        slogan: 'Arunama Hami - Modi Guarantee',
        strategy: [
          'Assembly-specific manifesto development',
          'Community-specific listening meetings',
          'Hyper-local issue messaging',
          'Structured door-to-door and village-level presence',
        ],
        diagnostics: [
          'Community-specific meetings refined local message fit',
          'Hyper-local issues shaped constituency communication',
        ],
        executionTracks: [
          'Assembly-specific manifesto rollout',
          'Structured door-to-door outreach',
          'Village-level campaign presence',
        ],
        outcome: 'Secured a decisive victory in a highly competitive political environment.',
      },
    ],
    metrics: [
      { label: 'Volunteers Mobilised (Malkajgiri)', value: '10,000+' },
      { label: 'Division Meetings Coordinated', value: '140+' },
      { label: ' constituencies targeted', value: 'Constituency-specific strategy' },
    ],
    finalOutcome: 'Won Malkajgiri with 3.9 lakh+ majority and secured a decisive victory in Mahabubnagar.',
  },
  {
    id: 'ysrcp-revival',
    title: 'YSRCP Organisational Revival',
    client: 'Y. S. Jagan Mohan Reddy',
    region: 'Andhra Pradesh',
    intro: 'A post-2024 institution-building programme focused on governance systems, cadre restructuring, and sustained organisational performance beyond elections.',
    context: 'Shifting from election time campaigns to long-term institution building: structural renewal, cadre motivation, and leadership clarity.',
    challenges: [
      'Post-2024 structural renewal and cadre motivation requirements',
      'Shifting party focus from temporary campaign mode to permanent institution-building',
      'Enabling clean administration and clear decision-making frameworks',
    ],
    tracks: [
      {
        title: 'Large-Scale Citizen Engagement',
        detail: '1 Crore+ signature campaign against Medical College Privatisation, driving statewide traction.',
      },
      {
        title: 'Governance Framework',
        detail: '110-Page Governance Document. Introduced SOPs (Standard Operating Procedures), accountability systems, and clear decision-making across 4 administrative tiers.',
      },
      {
        title: 'Campaign Feedback System',
        detail: 'Implemented a structured system to capture ground-level campaign and cadre feedback and convert insights into course corrections.',
      },
      {
        title: 'Continuous Monitoring Framework',
        detail: 'Implemented a continuous monitoring framework to track organisational performance and cadre activity, with periodic reviews to strengthen weak areas.',
      },
    ],
    cadreFramework: {
      title: 'Cadre and Leadership Restructuring — 3A+E Framework',
      steps: [
        { name: 'Appoint', desc: 'Strategic appointment of leaders' },
        { name: 'Activate', desc: 'Dedicated HRD wing, conducting training sessions for cadre' },
        { name: 'Elevate', desc: 'Promoting high-performing members to higher levels' },
        { name: 'Assess', desc: 'OKR (Objectives and Key Results)-based systems for measurable outcomes' },
      ],
      outcome: 'Replaced 30% of 500K position holders using new performance and inclusivity benchmarks, and inducted 1.5L+ new leaders.',
    },
    metrics: [
      { label: 'Youth Participation Increase', value: '+35%' },
      { label: 'Women\'s Representation Increase', value: '+25%' },
      { label: 'Organisational Vacancies', value: 'No Vacancies (Village to State Level)' },
    ],
    finalOutcome: 'Complete organisational structure built with zero vacancies, 1.5L+ new leaders inducted, and significantly increased youth and women participation.',
  },
  {
    id: 'graduate-mlc',
    title: 'Graduate MLC Election',
    client: 'Anji Reddy',
    region: 'North Telangana',
    intro: 'A rapid 30-day turnaround campaign that converted low name recognition into a decisive victory under extreme time pressure against established opponents.',
    context: 'The baseline challenge was severe: less than one month to execute, spanning 13 districts and 3 lakh+ registered graduate voters, with candidate name visibility below 20%.',
    challenges: [
      'Extremely short timeline (under 1 month)',
      'Large geographic and demographic scale (13 districts, 3 lakh+ voters)',
      'Low baseline candidate visibility (<20%)',
    ],
    pillars: [
      {
        title: 'Tech and AI Outreach',
        bullets: [
          'AI-personalised video messages reached 3 lakh+ voters directly',
          'WhatsApp ecosystem reached 75,000+ active members',
        ],
      },
      {
        title: 'Narrative and Content',
        bullets: [
          'Personal storytelling and issue-based messaging tailored to graduates',
          '3 lakh+ booklets and manifestos distributed physically',
        ],
      },
      {
        title: 'Ground Mobilisation',
        bullets: [
          '2,500+ booth-level volunteers activated across all districts',
          'Covered 1 lakh+ target graduate households',
        ],
      },
    ],
    sprintPlan: [
      {
        timeline: 'Days 1-7',
        objective: 'Recognition Lift & Message Anchoring',
        details: 'Candidate story narrative launched across digital channels and field forums to lift baseline visibility.',
      },
      {
        timeline: 'Days 8-18',
        objective: 'Scale Persuasion Channels',
        details: 'Mass video messaging campaigns, booklet distribution, and volunteer acceleration across all 13 districts.',
      },
      {
        timeline: 'Days 19-30',
        objective: 'Convert Support to Turnout',
        details: 'Booth-level mobilisation, war-room escalation, and target household conversion to drive high turnout.',
      },
    ],
    adaptation: 'Real-time surveys and rapid strategy recalibration guided daily sprint execution.',
    metrics: [
      { label: 'AI Video Message Reach', value: '3 Lakh+ Voters' },
      { label: 'WhatsApp Ecosystem Members', value: '75,000+' },
      { label: 'Active Booth Volunteers', value: '2,500+' },
      { label: 'Households Covered', value: '1 Lakh+' },
    ],
    finalOutcome: 'Achieved a decisive victory in 30 days against established opponents by converting early support into active voter turnout.',
  },
  {
    id: 'puducherry-movement',
    title: 'Crafting a New Political Movement',
    client: 'Jose Charles Martin',
    region: 'Puducherry',
    intro: 'Building a new political party and movement in Puducherry from the ground up, using data and field feedback to guide every stage from sentiment capture to launch and structured growth.',
    context: 'Every stage, from sentiment capture to campaign execution, was guided by data and field feedback, ensuring decisions were grounded in real voter insights.',
    challenges: [
      'Establishing a brand new political organization with no baseline presence',
      'Designing citizen-centric messaging that resonates across culturally distinct regions',
      'Rapidly building structured cadre from state level to booth level',
    ],
    tracks: [
      {
        title: 'Phase 1: People\'s Connect',
        detail: 'Before launch, local mandrams were strengthened and new ones were set up across Puducherry, building direct citizen engagement and trust. Outcome: Built a movement rooted in real public concerns.',
      },
      {
        title: 'Phase 2: Ideology and Early Party Building',
        detail: 'Public sentiments gathered through mandrams were translated into the party\'s core ideology. Early party-building efforts identified key local leaders and established a task force for leadership induction. Outcome: Early ideological and leadership base established.',
      },
      {
        title: 'Phase 3: Iconic Party Launch',
        detail: 'A first-of-its-kind political launch in the sea reflected Puducherry\'s emotional and cultural connection with the coast, creating strong public buzz across Puducherry, Karaikal, Yanam, and Mahe. Outcome: Positioned the party as fresh, symbolic, and distinct.',
      },
      {
        title: 'Phase 4: Structured Organization Building',
        detail: 'A structured organisation-building model was implemented from state level to booth level, with SOPs, leadership modules, and performance review systems. Outcome: Added role-based accountability and operational discipline.',
      },
      {
        title: 'Phase 5: Issue-Based Public Campaigns',
        detail: 'Issue-based public campaigns were undertaken to keep the organisation active and visible. A high-impact anti-drug campaign at the Chief Minister\'s residence drew statewide attention. Outcome: Positioned the party as action-oriented and socially responsible.',
      },
      {
        title: 'Phase 6: Citizen-Centric Manifesto and Declarations',
        detail: 'A 6-pillar manifesto was created from field insights and consultations, then shared through six focused declarations for key voter groups. Outcome: Reached all major voter segments with focused communication.',
      },
      {
        title: 'Phase 7: Rising Public Acceptance',
        detail: 'Consistent engagement led to rapid public acceptance. Surveys indicated double-digit vote share within two months of launch. Outcome: Marked a rare early breakthrough for a new political party.',
      },
      {
        title: 'Phase 8: Alliance Invitation',
        detail: 'Within two months of party formation, and before contesting any election, the party received an alliance invitation from a central-party-led alliance. Outcome: First such early alliance signal for a newly formed party in the region.',
      },
    ],
    commandArchitecture: [
      'Structured political party architecture from state to booth level',
      'Defined SOPs, training modules, and regular performance reviews',
      'Comprehensive wing structure including a dedicated AI and digital function',
    ],
    metrics: [
      { label: 'Public Acceptance (Vote Share)', value: 'Double-Digit in 2 Months' },
      { label: 'Alliance Signal Timing', value: 'Within 2 Months of Formation' },
      { label: 'Manifesto Pillars Developed', value: '6 Key Pillars' },
    ],
    finalOutcome: 'A data-guided, process-led movement that achieved rapid public acceptance and secured a major alliance invitation before its first election contest.',
  },
];
