import { Search, Users, Cpu, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    n: '01',
    Icon: Search,
    title: 'Listen & Research',
    body: 'We start on the ground — surveys, focus groups and ward-level data — to understand the real problem before designing a single intervention.',
    bullets: [
      '1,200+ community conversations a year',
      'Vulnerability and need-mapping at district level',
    ],
  },
  {
    n: '02',
    Icon: Users,
    title: 'Co-Design with Communities',
    body: 'No program is delivered to a community — it is designed with them. Local panchayats, women\'s collectives and youth shape every plan.',
    bullets: [
      'Active village committees in 120+ locations',
      'Women-led self-help groups in every program',
    ],
  },
  {
    n: '03',
    Icon: Cpu,
    title: 'Tech-Enabled Execution',
    body: 'Digital classrooms, mobile health vans, geo-tagged field reports and AI-driven outreach ensure the right help reaches the right family.',
    bullets: [
      'Geo-tagged monitoring for every project',
      'WhatsApp helplines, biometrics & dashboards',
    ],
  },
  {
    n: '04',
    Icon: HeartHandshake,
    title: 'Measure, Learn, Sustain',
    body: 'Outcomes are tracked quarterly, learnings are published and successful models are transitioned to the community for long-term ownership.',
    bullets: [
      'Independent third-party impact audits',
      'Community-owned programs within 3–5 years',
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
                Our Approach
              </p>
            </div>
            <h2 className="font-heading text-[2rem] md:text-[2.8rem] leading-[1.08] tracking-tight font-medium text-secondary">
              How we turn small acts into lasting change.
            </h2>
          </div>
          <p className="text-[1.05rem] md:text-[1.12rem] leading-8 text-slate-700 max-w-2xl">
            Inspired by the rigour of strategic consulting and the patience of grassroots work, our
            four-stage model ensures every rupee, every visit and every partnership produces
            measurable, community-owned impact.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.n}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-7 transition-all duration-300 hover:border-slate-200/80 hover:shadow-[0_20px_50px_rgba(13,21,36,0.06)] min-h-[360px]"
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
                  Step {step.n}
                </p>
                <h3 className="mt-1.5 text-[1.2rem] font-heading font-bold leading-snug tracking-tight text-secondary">
                  {step.title}
                </h3>
                <p className="mt-3.5 text-[0.925rem] leading-[1.75] text-slate-600">{step.body}</p>
              </div>

              <ul className="mt-6 space-y-2.5 border-t border-slate-100/80 pt-5">
                {step.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[0.82rem] leading-normal text-slate-600">
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
            Want to see the model in action? Read the latest{' '}
            <Link href="/impact" className="text-primary font-semibold hover:underline">
              independent impact audit
            </Link>{' '}
            or partner with us on a program.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-primary text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wide hover:bg-primary/90 transition-colors shadow-sm group"
          >
            Partner with us
            <span className="flex items-center justify-center bg-white text-primary rounded-full w-5 h-5 group-hover:scale-110 transition-transform">
              <ArrowRight className="w-3 h-3 stroke-[2.5]" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
