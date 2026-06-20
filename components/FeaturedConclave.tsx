'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Mic, 
  BookOpen, 
  Award, 
  ArrowRight, 
  FileDown, 
  ShieldCheck, 
  GraduationCap, 
  Briefcase, 
  Lightbulb, 
  CheckCircle2, 
  ChevronRight 
} from 'lucide-react';
import Reveal from './Reveal';

const stats = [
  { value: '500+', label: 'Student Participants', sub: 'From leading institutions', icon: Users },
  { value: '3', label: 'Distinguished Speakers', sub: 'Leaders & administrators', icon: Mic },
  { value: '2', label: 'Deep Knowledge Sessions', sub: 'Focused on governance & growth', icon: BookOpen },
  { value: 'Feb 5, 2026', label: 'Conclave Date', sub: 'Anandha Inn, Puducherry', icon: Calendar },
];

const themes = [
  {
    title: 'Governance & Accountability',
    subtitle: 'Transparent, citizen-focused administration',
    description: 'Exploring Puducherry\'s unique administrative structure, financial realities, and the importance of transparent, citizen-focused governance.',
    icon: ShieldCheck,
    color: 'text-blue-600 bg-blue-50 border-blue-100',
    hoverColor: 'hover:border-blue-300 hover:shadow-blue-50/50',
    bullets: [
      'Analysis of Union Territory administrative frameworks',
      'Discussion on fiscal responsibility and public spending',
      'Promoting citizen-first digital governance initiatives'
    ]
  },
  {
    title: 'Education & Healthcare',
    subtitle: 'Strengthening community foundations',
    description: 'Discussing innovative approaches to strengthen educational opportunities, healthcare accessibility, and community well-being.',
    icon: GraduationCap,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    hoverColor: 'hover:border-emerald-300 hover:shadow-emerald-50/50',
    bullets: [
      'Enhancing school infrastructure and digital learning resources',
      'Improving primary healthcare outreach to underserved regions',
      'Integrating mental health and student well-being programs'
    ]
  },
  {
    title: 'Economic Development',
    subtitle: 'Sustainable local growth roadmaps',
    description: 'Identifying growth opportunities through tourism, entrepreneurship, skill development, technology, and business-friendly policies.',
    icon: Briefcase,
    color: 'text-amber-600 bg-amber-50 border-amber-100',
    hoverColor: 'hover:border-amber-300 hover:shadow-amber-50/50',
    bullets: [
      'Harnessing coastal tourism and heritage branding',
      'Fostering youth entrepreneurship through local incubators',
      'Aligning vocational skilling with industry demands'
    ]
  },
  {
    title: 'Youth Empowerment',
    subtitle: 'Fostering future civic leaders',
    description: 'Encouraging young people to become active contributors to Puducherry\'s future through leadership, innovation, and civic participation.',
    icon: Lightbulb,
    color: 'text-purple-600 bg-purple-50 border-purple-100',
    hoverColor: 'hover:border-purple-300 hover:shadow-purple-50/50',
    bullets: [
      'Creating permanent student civic panels and forums',
      'Empowering youth leaders with policymaking knowledge',
      'Supporting student-led social impact projects'
    ]
  },
];

const speakers = [
  {
    name: 'Dr. Kiran Bedi',
    role: 'Former Lieutenant Governor of Puducherry',
    bio: 'Shared critical insights on governance, public administration, fiscal responsibility, entrepreneurship, and the role of youth in driving meaningful civic change.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=450&q=80',
  },
  {
    name: 'Shri G. Theva Neethi Dhas, IAS (Retd.)',
    role: 'Former Secretary to the Lieutenant Governor of Puducherry',
    bio: 'Presented an in-depth analysis of Puducherry\'s historical evolution, constitutional framework, and specific administrative challenges as a Union Territory.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=450&q=80',
  },
  {
    name: 'Shri Jose Charles Martin',
    role: 'President, Latchiya Jananayaga Katchi',
    bio: 'Outlined a progressive vision for Puducherry\'s future, highlighting core priorities across infrastructure, job creation, public services, and youth skill development.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=450&q=80',
  },
];

const outcomes = [
  'Forged a constructive dialogue channel connecting policymakers directly with young citizens.',
  'Identified and prioritized key development pillars for Puducherry\'s long-term sustainability.',
  'Activated interest in civic awareness and democratic responsibility among 500+ student attendees.',
  'Created a framework for youth-led community and entrepreneurship policy briefs.',
];

export default function FeaturedConclave() {
  const [activeTheme, setActiveTheme] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTheme((prev) => (prev + 1) % themes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeTheme]);

  return (
    <div id="conclave" className="w-full bg-[#FAFBFD] border-b border-slate-200/60">
      {/* Featured Header & Intro */}
      <section className="pt-16 pb-10 md:pt-20 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-tertiary/10 px-3 py-1 text-xs font-bold text-tertiary">
                <Award className="h-3.5 w-3.5" />
                Featured Case Study
              </span>
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                Puducherry
              </span>
            </div>
            
            <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-[2.2rem] md:text-[3.2rem] leading-[1.1] font-heading font-bold text-primary tracking-tight">
                  Puducherry Outlook Conclave 2026
                </h2>
                <p className="mt-3 text-lg md:text-xl font-heading font-medium text-secondary">
                  Shaping Conversations. Inspiring Change.
                </p>
                <p className="mt-6 text-[1.05rem] leading-8 text-slate-600 max-w-xl">
                  Organized by the <strong>Democratic Organization for Civic Knowledge (DOCK)</strong>, the conclave served as a milestone civic dialogue platform, uniting policy experts, administrative leaders, and student delegates to map Puducherry\'s development roadmap and empower the next generation of civic change-makers.
                </p>
              </div>

              <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-lg border border-slate-200/60">
                <Image
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&h=550&q=80"
                  alt="Students and professionals engaged in active discussion at the conclave"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Metrics Highlights Section */}
      <section className="py-12 bg-white border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="p-5 rounded-2xl bg-white border border-slate-200/60 flex items-start gap-4 shadow-[0_2px_12px_rgba(13,21,36,0.02)]">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-secondary">
                      <Icon className="h-5 w-5 stroke-[1.8]" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <p className={`font-sans font-normal tracking-tight text-primary ${
                        stat.value.length > 8 
                          ? 'text-base font-medium' 
                          : 'text-2xl font-bold'
                      }`}>
                        {stat.value}
                      </p>
                      <p className="text-xs font-semibold text-secondary mt-1 leading-snug">{stat.label}</p>
                      <p className="mt-0.5 text-[10px] text-slate-500 leading-relaxed">{stat.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Discussion Themes Section */}
      <section className="py-16 md:py-24 bg-[#FAFBFD] border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-[11px] font-bold tracking-[0.24em] uppercase text-tertiary mb-3">
                Core Themes
              </p>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
                Key Discussion Tracks
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                The conclave brought diverse perspectives together, focusing on building practical, community-aligned solutions across these four vital domains.
              </p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr] items-stretch">
              {/* Theme Tab Selectors */}
              <div className="flex flex-col gap-2.5 h-full">
                {themes.map((theme, index) => {
                  const Icon = theme.icon;
                  const isActive = activeTheme === index;
                  return (
                    <button
                      key={theme.title}
                      onClick={() => setActiveTheme(index)}
                      className={`text-left p-4.5 rounded-xl border transition-all duration-200 flex items-center gap-4 group flex-1 ${
                        isActive
                          ? 'bg-primary/5 border-primary/30 text-primary font-semibold'
                          : 'bg-white border-slate-200/60 text-slate-600 hover:bg-slate-50 hover:border-slate-350'
                      }`}
                    >
                      <div className={`h-10 w-10 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-200 ${
                        isActive ? 'bg-primary text-white border-primary' : 'bg-slate-50 text-slate-400 border-slate-200'
                      }`}>
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <h4 className={`text-sm font-semibold leading-snug transition-colors ${isActive ? 'text-primary' : 'text-slate-700'}`}>
                          {theme.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-normal font-normal">
                          {theme.subtitle}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Theme details panel */}
              <div className="bg-white border border-slate-200/60 rounded-2xl p-8 md:p-10 shadow-[0_10px_35px_rgba(13,21,36,0.03)] h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="h-[2px] w-6 bg-tertiary" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-tertiary">
                      Detailed Focus
                    </span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-heading font-bold text-secondary">
                    {themes[activeTheme].title}
                  </h4>
                  <p className="mt-4 text-[0.95rem] leading-7 text-slate-600">
                    {themes[activeTheme].description}
                  </p>
                  
                  <div className="mt-8 border-t border-slate-200/60 pt-6">
                    <h5 className="text-[11px] font-bold text-secondary uppercase tracking-widest mb-4">
                      Key Highlights &amp; Action Points
                    </h5>
                    <ul className="space-y-3.5">
                      {themes[activeTheme].bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                          <CheckCircle2 className="h-4.5 w-4.5 text-primary/70 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-[11px] font-bold tracking-[0.24em] uppercase text-tertiary mb-3">
                Expert Leadership
              </p>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
                Distinguished Speakers
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                The conclave featured inspiring keynotes and interactive dialog sessions led by respected voices in administration, policy, and community action.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {speakers.map((speaker) => (
                <article key={speaker.name} className="flex flex-col h-full bg-[#FAFBFD] rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-64 w-full bg-slate-100">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-heading font-bold text-secondary">{speaker.name}</h4>
                      <p className="text-xs font-bold text-primary uppercase tracking-wider mt-1.5 leading-snug">
                        {speaker.role}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-slate-600">
                        {speaker.bio}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Outcomes & Impact Section */}
      <section className="py-16 md:py-24 bg-[#FAFBFD] border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <p className="text-[11px] font-bold tracking-[0.24em] uppercase text-tertiary mb-3">
              Event Results
            </p>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
              Scale &amp; Real-World Outcomes
            </h3>
            <p className="mt-5 text-[1.05rem] leading-8 text-slate-600">
              The Puducherry Outlook Conclave 2026 was structured not as a passive lecture series, but as an active engagement incubator. Over 500 participants actively voiced community problems and co-created policy proposals.
            </p>
            
            <div className="mt-8 bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-[0_2px_12px_rgba(13,21,36,0.02)] space-y-5">
              {outcomes.map((outcome, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-[11px] font-bold text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white mt-0.5">
                    0{idx + 1}
                  </span>
                  <p className="text-sm md:text-[0.95rem] leading-relaxed text-slate-600 font-medium">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="p-8 md:p-10 rounded-2xl bg-primary text-white space-y-6 shadow-sm border border-primary relative overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-15"
                style={{
                  background:
                    'radial-gradient(100% 100% at 90% 10%, rgba(0,123,255,1) 0%, rgba(2,6,54,0) 80%)',
                }}
              />
              <div className="text-4xl font-serif text-tertiary/40 leading-none select-none">&ldquo;</div>
              <p className="text-base md:text-[1.05rem] leading-relaxed text-white/90 italic -mt-4">
                We believe that informed dialogue and collective action are essential for building a stronger, more inclusive, and prosperous Puducherry. The conclave reflects DOCK&apos;s commitment to fostering civic awareness and empowering future generations to participate in shaping society.
              </p>
              <div className="border-t border-white/10 pt-5 mt-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                  Democratic Organization for Civic Knowledge
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
