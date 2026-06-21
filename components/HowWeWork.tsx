import { BookOpen, Users, Award, FileText, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    n: '01',
    Icon: BookOpen,
    title: 'Institutional Literacy',
    body: 'Understanding how laws are drafted, committees function, budgets are shaped, and authority is exercised — in practice.',
    bullets: [
      'Focus on real-world mechanics',
      'Bridging gaps in civic knowledge',
    ],
    className: 'sm:col-span-2 lg:col-span-2',
  },
  {
    n: '02',
    Icon: Users,
    title: 'Governance Simulations',
    body: 'A high-intensity replication of legislative and fiscal processes where participants draft proposals, allocate budgets, and navigate review.',
    bullets: [
      'Process replication, not theater',
      'Hands-on legislative drafting',
    ],
    className: 'sm:col-span-1 lg:col-span-1',
  },
  {
    n: '03',
    Icon: Award,
    title: 'Civic Leadership Fellowship',
    body: 'An annual, limited-cohort program focused on governance immersion, institutional negotiation, crisis simulation, and policy drafting.',
    bullets: [
      'High-impact cohort structure',
      'Depth and rigor over scale',
    ],
    className: 'sm:col-span-1 lg:col-span-1',
  },
  {
    n: '04',
    Icon: FileText,
    title: 'Roundtables & Briefs',
    body: 'Curated thematic dialogues producing documented, publicly archived briefs and working notes on critical policy issues.',
    bullets: [
      'Documented working notes',
      'Publicly accessible archives',
    ],
    className: 'sm:col-span-2 lg:col-span-2',
  },
  {
    n: '05',
    Icon: Briefcase,
    title: 'Institutional Advisory',
    body: 'Ongoing collaboration with administrators, academics, and practitioners to ensure seriousness and grounded perspective.',
    bullets: [
      'Academic & practical alignment',
      'Action-oriented output review',
    ],
    className: 'sm:col-span-1 lg:col-span-1',
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-white py-14 md:py-20 lg:py-28 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] items-end pb-10 md:pb-12 border-b border-slate-100">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex items-center gap-1">
                <span className="h-[3px] w-[3px] rounded-full bg-primary" />
                <span className="h-[1px] w-8 bg-gradient-to-r from-primary to-transparent" />
              </div>
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.32em] text-primary">
                How We Operate
              </p>
            </div>
            <h2 className="font-heading text-[2rem] md:text-[2.8rem] leading-[1.08] tracking-tight font-medium text-secondary">
              Repeatable, disciplined institutional interventions.
            </h2>
          </div>
          <p className="text-[1.05rem] md:text-[1.12rem] leading-8 text-slate-700 max-w-2xl">
            We focus on process replication, constitutional clarity, and structural literacy. Every initiative we undertake generates documented output and aims for a long-term cultural shift in public life.
          </p>
        </div>

        {/* Mobile: horizontal snap-scroll carousel */}
        <div
          className="mt-10 -mx-4 px-4 flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 sm:hidden"
          aria-label="Our methods — swipe to explore"
        >
          {steps.map((step) => (
            <div
              key={step.n}
              className="group relative flex shrink-0 w-[82vw] snap-start flex-col justify-between rounded-2xl border border-slate-200/60 bg-slate-100/80 p-5 min-h-[260px] transition-all duration-300"
            >
              <span className="absolute right-5 top-4 text-5xl font-heading font-black tracking-tight text-slate-300/40 select-none pointer-events-none">
                {step.n}
              </span>
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-slate-200/50 text-slate-600">
                  <step.Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">Method {step.n}</p>
                <h3 className="mt-1.5 text-[1rem] font-heading font-bold leading-snug tracking-tight text-secondary">{step.title}</h3>
                <p className="mt-3 text-[0.82rem] leading-[1.65] text-slate-600">{step.body}</p>
              </div>
              <ul className="mt-4 space-y-2 border-t border-slate-200/60 pt-3.5">
                {step.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[0.75rem] leading-normal text-slate-600">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-2 text-center text-[10px] text-slate-400 uppercase tracking-wider sm:hidden">
          Swipe to explore all methods →
        </p>

        {/* sm+: Bento Grid */}
        <div className="hidden sm:grid mt-12 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => {
            const isWide = step.className.includes('lg:col-span-2');
            return (
              <div
                key={step.n}
                className={`group relative flex flex-col justify-between rounded-2xl border border-slate-200/60 bg-slate-100/80 p-6 transition-all duration-300 hover:border-slate-350 hover:shadow-[0_20px_50px_rgba(13,21,36,0.06)] min-h-[320px] ${step.className}`}
              >
                {/* Watermark Step Number */}
                <span className="absolute right-6 top-5 text-6xl font-heading font-black tracking-tight text-slate-300/40 group-hover:text-primary/10 transition-colors duration-500 select-none pointer-events-none">
                  {step.n}
                </span>

                <div className={`flex flex-col justify-between h-full ${isWide ? 'lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center' : ''}`}>
                  <div className={`flex flex-col justify-between h-full ${isWide ? 'lg:col-span-7' : ''}`}>
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-slate-200/50 text-slate-600 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                        <step.Icon className="h-5.5 w-5.5" strokeWidth={1.5} />
                      </div>

                      <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">
                        Method {step.n}
                      </p>
                      <h3 className="mt-1.5 text-[1.15rem] font-heading font-bold leading-snug tracking-tight text-secondary">
                        {step.title}
                      </h3>
                      <p className="mt-3.5 text-[0.88rem] leading-[1.65] text-slate-600">{step.body}</p>
                    </div>

                    {!isWide && (
                      <ul className="mt-6 space-y-2 border-t border-slate-200/60 pt-4">
                        {step.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-[0.78rem] leading-normal text-slate-600">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {isWide && (
                    <div className="lg:col-span-5 flex flex-col justify-center h-full border-t border-slate-200/60 pt-4 mt-6 lg:border-t-0 lg:pt-0 lg:mt-0 lg:border-l lg:border-slate-200/60 lg:pl-6">
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-3.5">
                        Key Focus Areas
                      </p>
                      <ul className="space-y-3">
                        {step.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2.5 text-[0.8rem] leading-relaxed text-slate-600">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Bento CTA Card */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-primary/10 bg-gradient-to-br from-secondary to-slate-900 p-8 text-white transition-all duration-300 hover:shadow-[0_20px_50px_rgba(13,21,36,0.15)] min-h-[320px] sm:col-span-1 lg:col-span-2 overflow-hidden">
            {/* Background decorative pattern */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4">
              <div className="w-72 h-72 rounded-full bg-primary filter blur-3xl"></div>
            </div>

            <div className="flex flex-col justify-between h-full z-10">
              <div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                  Collaborate
                </span>
                <h3 className="mt-5 text-[1.8rem] font-heading font-medium leading-[1.15] tracking-tight">
                  Ready to see our <br />
                  interventions in action?
                </h3>
                <p className="mt-4 text-[0.9rem] leading-relaxed text-slate-300 max-w-md">
                  Explore full event details, program outcomes, and documents from the Puducherry Youth Policy Debate 2026.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/95 text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-colors group/btn"
                >
                  Explore Programs
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-colors backdrop-blur-sm"
                >
                  Connect With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

