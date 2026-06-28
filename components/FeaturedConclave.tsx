'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Mic, 
  BookOpen, 
  Award, 
  ShieldCheck, 
  Lightbulb, 
  CheckCircle2, 
  Clock,
  User,
  Heart,
  TrendingUp,
  Activity,
  ChevronDown
} from 'lucide-react';
import Reveal from './Reveal';

const stats = [
  { value: '500+', label: 'Student Attendees', sub: 'Pondicherry Univ, MIT, Tagore College', icon: Users },
  { value: '2', label: 'Structured Sessions', sub: 'Governance & future blueprint', icon: BookOpen },
  { value: 'Shri G. Krishnan', label: 'Session Moderator', sub: 'Guided dialogues & Q&As', icon: Mic },
  { value: 'Feb 5, 2026', label: 'Conclave Date', sub: 'Anandha Inn, Puducherry', icon: Calendar },
];

export default function FeaturedConclave() {
  const [session1Open, setSession1Open] = useState(false);
  const [session2Open, setSession2Open] = useState(false);

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
                  Organized by the <strong>Democratic Organization for Civic Knowledge (DOCK)</strong>, the conclave served as a milestone civic dialogue platform, uniting policy experts, administrative leaders, and student delegates to map Puducherry&apos;s development roadmap and empower the next generation of civic change-makers.
                </p>
              </div>

              <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-lg border border-slate-200/60">
                <Image
                  src="/puducherry-outlook-conclave-2026.webp"
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
                        stat.value.length > 15 
                          ? 'text-sm font-semibold' 
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

      {/* SESSION 1 SECTION */}
      <section className="py-12 md:py-16 bg-[#FAFBFD] border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            {/* Accordion Container on mobile, plain layout on desktop */}
            <div className="md:bg-transparent md:border-0 md:shadow-none md:rounded-none md:overflow-visible bg-white border border-slate-200/65 rounded-3xl overflow-hidden shadow-[0_4px_25px_rgba(13,21,36,0.02)]">
              
              {/* Accordion Header (button on mobile, div on desktop) */}
              <div 
                className="md:p-0 md:pb-8 md:flex md:justify-between md:items-center md:border-b md:border-slate-200/60 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
              >
                <div className="space-y-3.5 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600 border border-blue-100 uppercase">
                      Session 1
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-slate-400" />
                      10:30 AM - 12:30 PM
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <User className="h-3.5 w-3.5 text-slate-400" />
                      Moderator: Shri Gopalaswamy Krishnan
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3.5xl font-heading font-bold text-secondary tracking-tight">
                    Present Realities and Governance of Puducherry
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    Unpacking Puducherry&apos;s budget process, central dependency, administrative balance, and constitutional history.
                  </p>
                </div>
                
                {/* Mobile-only toggle button */}
                <button
                  onClick={() => setSession1Open(!session1Open)}
                  className="md:hidden flex items-center justify-between w-full gap-2 text-primary font-bold text-xs uppercase tracking-wider shrink-0 mt-2 focus:outline-none border-t border-slate-100 pt-4"
                  aria-expanded={session1Open}
                >
                  <span>{session1Open ? 'Hide details' : 'Show details'}</span>
                  <div className={`h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-primary transition-transform duration-300 bg-slate-50 ${session1Open ? 'rotate-180' : ''}`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>
              </div>

              {/* Accordion Collapsible Content */}
              <div 
                className={`transition-all duration-300 overflow-hidden md:max-h-none md:opacity-100 md:pt-8 md:bg-transparent md:p-0 ${
                  session1Open ? 'max-h-[2500px] border-t border-slate-100 p-6 bg-slate-50/20' : 'max-h-0'
                }`}
              >
                {/* Audience block */}
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-500 bg-white border border-slate-100 rounded-xl p-4 w-full sm:w-fit mb-8">
                  <span className="text-slate-400">Audience:</span>
                  <span>Students from Pondicherry University, MIT, and Tagore College of Arts and Science (Attendance: ~500)</span>
                </div>

                {/* Session 1 Image Gallery */}
                <div className="grid gap-6 md:grid-cols-2 mb-10">
                  <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm bg-slate-100 group">
                    <Image
                      src="/keynote-panel.webp"
                      alt="Session 1 Panel discussion on governance and finance realities"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-4 flex flex-col justify-end">
                      <p className="text-white text-xs font-bold uppercase tracking-wider text-tertiary">Keynote Panel</p>
                      <p className="text-white/90 text-[11px] mt-0.5">Dr. Kiran Bedi &amp; Shri G. Theva Neethi Dhas discussing UT fiscal balance.</p>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm bg-slate-100 group">
                    <Image
                      src="/student-delegation.webp"
                      alt="Student audience representing Pondicherry University, MIT, and Tagore College"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-4 flex flex-col justify-end">
                      <p className="text-white text-xs font-bold uppercase tracking-wider text-tertiary">Student Delegation</p>
                      <p className="text-white/90 text-[11px] mt-0.5">500+ attendees from Pondicherry University, MIT, and Tagore College.</p>
                    </div>
                  </div>
                </div>

                {/* Speaker Insights for Session 1 */}
                <div className="grid gap-8 lg:grid-cols-2">
                  {/* Speaker 1: Dr Kiran Bedi */}
                  <div className="bg-white border border-slate-200/60 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 border-b border-slate-100 pb-5 mb-6">
                        <div className="relative h-14 w-14 rounded-full overflow-hidden bg-slate-100 border border-slate-200">
                          <Image
                            src="/kiran-bedi-pfp.webp"
                            alt="Dr Kiran Bedi"
                            fill
                            className="object-cover grayscale"
                          />
                        </div>
                        <div>
                          <h4 className="text-lg font-heading font-bold text-secondary">Dr Kiran Bedi</h4>
                          <p className="text-xs font-bold text-primary uppercase tracking-wider mt-0.5">
                            Former Lieutenant Governor of Puducherry
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <blockquote className="border-l-2 border-primary pl-4 italic text-xs md:text-sm text-slate-600 my-4">
                          &ldquo;I am home... schemes without funds will have no money in hand. In the end, they will blame me, saying the Lieutenant Governor blocked them.&rdquo;
                        </blockquote>

                        <h5 className="text-[10px] font-bold text-secondary uppercase tracking-widest mt-6">
                          Key Recommendations &amp; Inputs:
                        </h5>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span><strong>Youth Entrepreneurship:</strong> Encouraged the youth to think differently, build businesses, and create jobs rather than solely seeking them.</span>
                          </li>
                          <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span><strong>Village Adoption Scheme:</strong> Proposed that medical colleges adopt villages to monitor residents&apos; health, prioritizing preventive care and reducing long-term public health costs.</span>
                          </li>
                          <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span><strong>LG&apos;s Legal Role:</strong> Highlighted that the Lieutenant Governor&apos;s role is strictly non-political, focused entirely on adherence to the law and public welfare.</span>
                          </li>
                          <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span><strong>Revenue Reforms:</strong> Advocated raising alcohol taxes to improve public health and increase UT revenue, strongly opposing freebies and tax-lowering initiatives.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Speaker 2: Shri G. Theva Neethi Dhas */}
                  <div className="bg-white border border-slate-200/60 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 border-b border-slate-100 pb-5 mb-6">
                        <div className="relative h-14 w-14 rounded-full overflow-hidden bg-slate-100 border border-slate-200">
                          <Image
                            src="/theva-neethi-dhas.webp"
                            alt="Shri G. Theva Neethi Dhas"
                            fill
                            className="object-cover grayscale"
                          />
                        </div>
                        <div>
                          <h4 className="text-lg font-heading font-bold text-secondary">Shri G. Theva Neethi Dhas, IAS (Retd.)</h4>
                          <p className="text-xs font-bold text-primary uppercase tracking-wider mt-0.5">
                            Former Secretary to the Lieutenant Governor of Puducherry
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h5 className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                          Constitutional &amp; Historical Framework:
                        </h5>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span><strong>Integration History:</strong> Outlined that while India achieved independence in 1947, Puducherry&apos;s path was unique, joining the Union much later.</span>
                          </li>
                          <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span><strong>Kizhoor Referendum (1954):</strong> Discussed the historic referendum in Kizhoor village where French settlements voted democratically to join independent India.</span>
                          </li>
                          <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span><strong>Balance of Powers:</strong> Explained the distinct legal limitations of Puducherry&apos;s Legislative Assembly and the powers of MLAs/Ministers compared to full states.</span>
                          </li>
                          <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span><strong>Fiscal Dependency:</strong> Emphasized that Puducherry lacks full fiscal autonomy, requiring Union Government approvals for budgets and major financial decisions.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SESSION 2 SECTION */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            {/* Accordion Container on mobile, plain layout on desktop */}
            <div className="md:bg-transparent md:border-0 md:shadow-none md:rounded-none md:overflow-visible bg-white border border-slate-200/65 rounded-3xl overflow-hidden shadow-[0_4px_25px_rgba(13,21,36,0.02)]">
              
              {/* Accordion Header (button on mobile, div on desktop) */}
              <div 
                className="md:p-0 md:pb-8 md:flex md:justify-between md:items-center md:border-b md:border-slate-200/60 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
              >
                <div className="space-y-3.5 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-3 py-1 text-xs font-bold text-purple-600 border border-purple-100 uppercase">
                      Session 2
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-slate-400" />
                      2:45 PM - 4:30 PM
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <User className="h-3.5 w-3.5 text-slate-400" />
                      Moderator: Shri Gopalaswamy Krishnan
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-secondary tracking-tight">
                    A Blueprint for Puducherry&apos;s Future
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    Addressing administrative deficits, public service needs, coastal tourism, IT parks, and safety frameworks.
                  </p>
                </div>
                
                {/* Mobile-only toggle button */}
                <button
                  onClick={() => setSession2Open(!session2Open)}
                  className="md:hidden flex items-center justify-between w-full gap-2 text-primary font-bold text-xs uppercase tracking-wider shrink-0 mt-2 focus:outline-none border-t border-slate-100 pt-4"
                  aria-expanded={session2Open}
                >
                  <span>{session2Open ? 'Hide details' : 'Show details'}</span>
                  <div className={`h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-primary transition-transform duration-300 bg-slate-50 ${session2Open ? 'rotate-180' : ''}`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>
              </div>

              {/* Accordion Collapsible Content */}
              <div 
                className={`transition-all duration-300 overflow-hidden md:max-h-none md:opacity-100 md:pt-8 md:bg-transparent md:p-0 ${
                  session2Open ? 'max-h-[2500px] border-t border-slate-100 p-6 bg-slate-50/20' : 'max-h-0'
                }`}
              >
                {/* Session 2 Image Gallery */}
                <div className="grid gap-6 md:grid-cols-2 mb-10">
                  <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm bg-slate-100 group">
                    <Image
                      src="/keynote-panel.webp"
                      alt="Session 2 presentation outlining Puducherry's Future Blueprint"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-4 flex flex-col justify-end">
                      <p className="text-white text-xs font-bold uppercase tracking-wider text-tertiary">Future Blueprint</p>
                      <p className="text-white/90 text-[11px] mt-0.5">Shri Jose Charles Martin presenting the developmental blueprint for the UT.</p>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm bg-slate-100 group">
                    <Image
                      src="/student-delegation.webp"
                      alt="Interactive youth dialogue on infrastructure and jobs"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-4 flex flex-col justify-end">
                      <p className="text-white text-xs font-bold uppercase tracking-wider text-tertiary">Interactive Youth Dialogue</p>
                      <p className="text-white/90 text-[11px] mt-0.5">Student delegates engaging in direct Q&amp;A sessions regarding employment and infrastructure.</p>
                    </div>
                  </div>
                </div>

                {/* Speaker Insights for Session 2 */}
                <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-start">
                  {/* Speaker Card */}
                  <div className="bg-white border border-slate-200/60 rounded-3xl p-6 md:p-8 shadow-sm">
                    <div className="flex items-center gap-4 border-b border-slate-200/60 pb-5 mb-6">
                      <div className="relative h-16 w-16 rounded-full overflow-hidden bg-slate-100 border border-slate-200">
                        <Image
                          src="/jose-charles-martin-pfp.webp"
                          alt="Shri Jose Charles Martin"
                          fill
                          className="object-cover grayscale"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-heading font-bold text-secondary">Shri Jose Charles Martin</h4>
                        <p className="text-xs font-bold text-primary uppercase tracking-wider mt-0.5">
                          President, Latchiya Jananayaga Katchi
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Reflected on his political journey, emphasizing that structural change requires working directly within the system and engaging in institutional politics to address citizen grievances.
                      </p>
                      <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 text-xs text-slate-500 leading-normal italic">
                        &ldquo;Change takes time and requires gradual, disciplined effort.&rdquo;
                      </div>
                    </div>
                  </div>

                  {/* Blueprint Points */}
                  <div className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                        <h5 className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-wider mb-3">
                          <Activity className="h-4 w-4 text-primary" />
                          Governance Deficits
                        </h5>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          Highlighted poor public service delivery, inadequate basic facilities in rural areas, and substandard drainage systems that pose severe risks.
                        </p>
                      </div>

                      <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                        <h5 className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-wider mb-3">
                          <Heart className="h-4 w-4 text-primary" />
                          Social Infrastructure
                        </h5>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          Stressed urgent updates for education, drinking water supply, housing, and healthcare, noting that regional public hospitals require immediate upgrades.
                        </p>
                      </div>

                      <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                        <h5 className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-wider mb-3">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          Economic Expansion
                        </h5>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          Suggested establishing IT parks, boosting coastal tourism, and enhancing the local ease of doing business to increase UT revenues.
                        </p>
                      </div>

                      <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                        <h5 className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-wider mb-3">
                          <Users className="h-4 w-4 text-primary" />
                          Youth &amp; Safety
                        </h5>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          Emphasized vocational skill development and entrepreneurship support to prevent outward migration, alongside strict law-and-order oversight.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Conclave Vision Statement */}
      <section className="py-16 md:py-24 bg-[#FAFBFD] border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="p-8 md:p-12 rounded-3xl bg-white text-slate-800 space-y-6 shadow-md border border-slate-200/80 relative overflow-hidden max-w-4xl mx-auto text-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-100"
                style={{
                  background:
                    'radial-gradient(100% 100% at 50% 50%, rgba(0,123,255,0.05) 0%, rgba(255,255,255,0) 80%)',
                }}
              />
              <div className="text-5xl font-serif text-tertiary/40 leading-none select-none">&ldquo;</div>
              <p className="text-lg md:text-xl leading-relaxed text-slate-700 italic -mt-4 max-w-3xl mx-auto">
                We believe that informed dialogue and collective action are essential for building a stronger, more inclusive, and prosperous Puducherry. The conclave reflects DOCK&apos;s commitment to fostering civic awareness and empowering future generations to participate in shaping society.
              </p>
              <div className="border-t border-slate-100 pt-5 mt-6 w-fit mx-auto">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
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
