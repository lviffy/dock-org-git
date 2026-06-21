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
              className="group relative flex shrink-0 w-[82vw] snap-start flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 min-h-[290px] transition-all duration-300"
            >
              <span className="absolute right-5 top-4 text-5xl font-heading font-black tracking-tight text-slate-100/70 select-none pointer-events-none">
                {step.n}
              </span>
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-slate-600">
                  <step.Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">Method {step.n}</p>
                <h3 className="mt-1.5 text-[1rem] font-heading font-bold leading-snug tracking-tight text-secondary">{step.title}</h3>
                <p className="mt-3 text-[0.82rem] leading-[1.65] text-slate-600">{step.body}</p>
              </div>
              <ul className="mt-4 space-y-2 border-t border-slate-100/80 pt-3.5">
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

        {/* sm+: grid */}
        <div className="hidden sm:grid mt-12 gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {steps.map((step) => (
            <div
              key={step.n}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:border-slate-200/80 hover:shadow-[0_20px_50px_rgba(13,21,36,0.06)] min-h-[380px]"
            >
              {/* Watermark Step Number */}
              <span className="absolute right-6 top-5 text-6xl font-heading font-black tracking-tight text-slate-100/70 group-hover:text-primary/10 transition-colors duration-500 select-none pointer-events-none">
                {step.n}
              </span>

              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-slate-600 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                  <step.Icon className="h-5.5 w-5.5" strokeWidth={1.5} />
                </div>

                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">
                  Method {step.n}
                </p>
                <h3 className="mt-1.5 text-[1.1rem] font-heading font-bold leading-snug tracking-tight text-secondary">
                  {step.title}
                </h3>
                <p className="mt-3.5 text-[0.85rem] leading-[1.65] text-slate-600">{step.body}</p>
              </div>

              <ul className="mt-6 space-y-2 border-t border-slate-100/80 pt-4">
                {step.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[0.78rem] leading-normal text-slate-600">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-[0.95rem] leading-7 text-slate-600 max-w-xl">
            Want to see our interventions in action? Read details of the{' '}
            <Link href="/programs" className="text-primary font-semibold hover:underline">
              Puducherry Youth Policy Debate 2026
            </Link>{' '}
            or the Conclave.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-primary text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wide hover:bg-primary/90 transition-colors shadow-sm group"
          >
            Connect With Us
            <span className="flex items-center justify-center bg-white text-primary rounded-full w-5 h-5 group-hover:scale-110 transition-transform">
              <ArrowRight className="w-3 h-3 stroke-[2.5]" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
