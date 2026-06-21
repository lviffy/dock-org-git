'use client';

import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import ProgramCard from '@/components/ProgramCard';
import FeaturedConclave from '@/components/FeaturedConclave';
import { programs } from '@/lib/data';
import { 
  Award, 
  ShieldCheck, 
  Tv,
  FileText,
  Users,
  Calendar,
  MapPin,
  MessageSquare,
  Trophy
} from 'lucide-react';

const motions = {
  governance: [
    { 
      title: 'Who Really Governs Puducherry?', 
      alt: 'Governance in Puducherry: Constructive or Destructive?',
      insight: 'Debated the administrative balance between the Lt. Governor and the elected legislative assembly.'
    },
    { 
      title: 'Young India, Old Parliament?', 
      alt: 'Youth in parliament: Risk or Opportunity',
      insight: 'Analyzed the age demographics of legislative representation and structural barriers for young leaders.'
    },
    { 
      title: 'Freebies or Fiscal Burden?', 
      alt: 'The Politics of Freebies: Welfare or Vote Buying?',
      insight: 'Investigated the fiscal impact of welfare schemes versus capital expenditure in Union Territories.'
    },
  ],
  technology: [
    { 
      title: 'AI & Privacy: Freedom vs security', 
      alt: 'Technology governance and rights',
      insight: 'Evaluated personal liberties under growing surveillance state measures and algorithmic decision-making.'
    },
  ],
};

const formatRounds = [
  'Opening statements',
  'Team arguments',
  'Rebuttal round',
  'Audience questions',
  'Closing remarks',
];

const evaluationCriteria = [
  'Research depth',
  'Logical clarity',
  'Rebuttal strength',
  'Policy insight',
  'Communication skills',
];

export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState<'conclave' | 'debate'>('conclave');

  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-primary py-20 text-white md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            background:
              'radial-gradient(60% 50% at 80% 20%, rgba(46,91,154,0.55) 0%, rgba(2,6,54,0) 60%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold tracking-[0.24em] uppercase text-tertiary mb-6">
            Our Work
          </p>
          <h1 className="text-[2.3rem] md:text-[3.7rem] leading-[1.05] tracking-tight font-heading font-bold max-w-4xl">
            Civic Dialogues &amp; Governance Simulations
          </h1>
          <p className="mt-7 max-w-3xl text-[1.03rem] md:text-[1.2rem] leading-8 text-white/80">
            DOCK convenes structured governance and constitutional engagements, prioritizing clarity over rhetoric and building a generation of process-oriented leaders.
          </p>
        </div>
      </section>

      {/* Tab Switcher */}
      <section className="bg-slate-50 border-b border-slate-200/60 sticky top-[88px] z-40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-3 py-4 justify-center items-stretch sm:items-center">
            <button
              onClick={() => setActiveTab('conclave')}
              className={`rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 border flex items-center justify-center gap-2 ${
                activeTab === 'conclave'
                  ? 'bg-primary border-primary text-white shadow-sm'
                  : 'bg-white border-slate-200 text-secondary hover:border-primary/50'
              }`}
            >
              <Users className="h-3.5 w-3.5" />
              Puducherry Outlook Conclave
            </button>
            <button
              onClick={() => setActiveTab('debate')}
              className={`rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 border flex items-center justify-center gap-2 ${
                activeTab === 'debate'
                  ? 'bg-primary border-primary text-white shadow-sm'
                  : 'bg-white border-slate-200 text-secondary hover:border-primary/50'
              }`}
            >
              <FileText className="h-3.5 w-3.5" />
              Puducherry Youth Policy Debate
            </button>
          </div>
        </div>
      </section>

      {/* Conditional Content rendering based on Active Tab */}
      {activeTab === 'conclave' ? (
        <FeaturedConclave />
      ) : (
        <section className="py-16 md:py-24 bg-white animate-fade-in">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-bold text-emerald-600 border border-emerald-100 uppercase">
                Completed Case Study
              </span>
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-slate-400" />
                26 March 2026
              </span>
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-slate-400" />
                Auditorium, MVIT Puducherry
              </span>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
              <div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary leading-tight tracking-tight">
                  Puducherry Youth Policy Debate
                </h2>
                <p className="mt-3 text-lg md:text-xl font-heading font-medium text-primary">
                  Theme: Where Technology, Ideas and Policy Meet
                </p>
                
                <div className="mt-8 border-t border-slate-100 pt-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">About the Forum</h3>
                  <p className="text-slate-600 leading-relaxed text-[0.95rem]">
                    The Puducherry Youth Policy Debate was a structured platform where students engaged with real-world issues at the intersection of technology, governance, and public policy. As innovation increasingly shapes governance, digital infrastructure, and economic development, students played an important role in understanding how technology influences policy and society. This debate encouraged participants to explore these issues through evidence-based arguments, structured dialogue, and critical thinking.
                  </p>
                  <p className="text-xs text-slate-400 mt-4">
                    Jointly conducted by the Democratic Organization for Civic Knowledge (DOCK) and Manakula Vinayagar Institute of Technology (MVIT).
                  </p>
                </div>

                {/* Debate Motions */}
                <div className="mt-10 border-t border-slate-100 pt-8">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Debate Motions &amp; Participant Insights</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-slate-100 bg-[#FAFBFD] p-6">
                      <h4 className="flex items-center gap-2.5 text-sm font-bold text-secondary uppercase tracking-wider mb-4">
                        <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                        Governance &amp; Politics
                      </h4>
                      <ul className="space-y-4">
                        {motions.governance.map((motion, idx) => (
                          <li key={idx} className="border-b border-slate-100/60 pb-3 last:border-0 last:pb-0">
                            <p className="text-sm font-semibold text-secondary">{motion.title}</p>
                            <p className="text-xs text-slate-400 mt-1">{motion.alt}</p>
                            <p className="text-[11px] leading-relaxed text-slate-500 mt-2 bg-white/80 p-2 rounded border border-slate-100/50 italic">
                              &ldquo;{motion.insight}&rdquo;
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-slate-100 bg-[#FAFBFD] p-6 h-fit">
                      <h4 className="flex items-center gap-2.5 text-sm font-bold text-secondary uppercase tracking-wider mb-4">
                        <Tv className="h-4 w-4 text-primary shrink-0" />
                        Technology &amp; Rights
                      </h4>
                      <ul className="space-y-4">
                        {motions.technology.map((motion, idx) => (
                          <li key={idx}>
                            <p className="text-sm font-semibold text-secondary">{motion.title}</p>
                            <p className="text-xs text-slate-400 mt-1">{motion.alt}</p>
                            <p className="text-[11px] leading-relaxed text-slate-500 mt-2 bg-white/80 p-2 rounded border border-slate-100/50 italic">
                              &ldquo;{motion.insight}&rdquo;
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Showcase Results & Testimonial */}
              <div className="space-y-8 lg:sticky lg:top-28">
                <div className="rounded-3xl border border-slate-100 bg-[#FAFBFD] p-6 md:p-8 space-y-6">
                  {/* Results Header */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-1.5">
                      <Trophy className="h-3.5 w-3.5 text-primary" />
                      Debate Results &amp; Recognition
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm flex items-center gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
                          <Trophy className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase">Session 1 Award</p>
                          <p className="text-sm font-bold text-secondary mt-0.5">Best Speaker (Session 1)</p>
                          <p className="text-xs text-slate-500">Awarded ₹2,000 prize for outstanding arguments on Governance &amp; Politics</p>
                        </div>
                      </div>

                      <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm flex items-center gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
                          <Trophy className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase">Session 2 Award</p>
                          <p className="text-sm font-bold text-secondary mt-0.5">Best Speaker (Session 2)</p>
                          <p className="text-xs text-slate-500">Awarded ₹2,000 prize for outstanding arguments on Technology &amp; Rights</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Participation Badge */}
                  <div className="border-t border-slate-100 pt-6">
                    <div className="rounded-xl bg-slate-50 p-4 border border-slate-100 flex items-start gap-2.5">
                      <Award className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                      <p className="text-[11px] leading-relaxed text-slate-500">
                        A <span className="font-semibold text-secondary">Certificate of Participation</span> was awarded to all student debaters from MVIT in recognition of outstanding articulation, critical thinking, and persuasive public speaking.
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <div className="border-t border-slate-100 pt-6">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-1.5">
                      <MessageSquare className="h-3.5 w-3.5 text-primary" />
                      Participant Feedback
                    </h3>
                    <blockquote className="rounded-2xl bg-white border border-slate-100 p-5 shadow-sm space-y-3 relative">
                      <span className="absolute right-4 top-2 text-3xl font-serif text-slate-200 leading-none select-none">&ldquo;</span>
                      <p className="text-xs leading-relaxed text-slate-600 italic">
                        The debate simulation was an eye-opener. It was not about theatrical rhetoric, but about understanding legislative procedures, administrative design, and budget allocation in practice.
                      </p>
                      <div className="flex items-center gap-2.5 pt-2 border-t border-slate-50">
                        <div className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-primary font-heading">
                          SP
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-secondary leading-none">Student Participant</p>
                          <p className="text-[9px] text-slate-400 mt-0.5">MVIT Puducherry</p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* DOCK Core Interventions */}
      <section className="bg-white py-16 md:py-24 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Framework"
            title="DOCK Operating Interventions"
            subtitle="Repeatable, disciplined institutional interventions designed to bridge the structural gap in public life."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
            {programs.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
