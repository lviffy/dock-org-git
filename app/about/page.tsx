import Image from 'next/image';
import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import { ShieldCheck, Compass, Sparkles, BookOpen, Layers } from 'lucide-react';

export const metadata: Metadata = { title: 'About Us' };

const commitments = [
  {
    title: 'Institutional Clarity',
    text: 'Ensuring public life is process-driven rather than personality-driven, focusing on administrative design.',
    Icon: ShieldCheck,
  },
  {
    title: 'Democratic Integrity',
    text: 'Preserving procedural democracy and structural rules of governance at all levels.',
    Icon: Compass,
  },
  {
    title: 'Merit-Based Leadership',
    text: 'Fostering leaders with a deep understanding of legislative, administrative, and fiscal systems.',
    Icon: Sparkles,
  },
  {
    title: 'Structural Thinking',
    text: 'Prioritizing legislative procedure, administrative design, fiscal architecture, and constitutional limitation.',
    Icon: Layers,
  },
  {
    title: 'Credibility Before Scale',
    text: 'Prioritizing depth, serious research, and process replication over visibility or rapid growth.',
    Icon: BookOpen,
  },
];

export default function AboutPage() {
  return (
    <>
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
            Organizational Profile
          </p>
          <h1 className="text-[2.3rem] md:text-[3.7rem] leading-[1.05] tracking-tight font-heading font-bold max-w-4xl">
            Who we are
          </h1>
          <p className="mt-7 max-w-3xl text-[1.03rem] md:text-[1.2rem] leading-8 text-white/80">
            Democratic Organization for Civic Knowledge (DOCK) exists to strengthen structural understanding in public life. We operate as a Civic Research Institute, a Governance Intelligence Initiative, and a Political Leadership development platform.
          </p>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section className="py-14 md:py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative h-80 lg:h-[420px] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=900&h=700&q=80"
              alt="Civic dialogue and public administration meeting"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="h-[3px] w-[3px] rounded-full bg-primary/70" />
                <span className="h-[1px] w-8 bg-gradient-to-r from-primary/70 to-transparent" />
              </div>
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.32em] text-primary/80">
                Philosophy
              </p>
            </div>
            <h2 className="text-[1.8rem] md:text-[2.4rem] leading-[1.1] tracking-tight font-medium text-[#121722]">
              The Structural Gap
            </h2>
            <p className="mt-6 text-[1rem] leading-8 text-[#445166]">
              Democracy does not run or endure on sentiment. It operates through structure: legislative procedure, administrative design, fiscal architecture, and constitutional limitation.
            </p>
            <p className="mt-4 text-[1rem] leading-8 text-[#445166]">
              Across campuses, civil society, and party ecosystems, engagement is rising— but structured understanding of legislative design, fiscal process, and administrative architecture remains uneven. When discourse detaches from structure, accountability becomes personality-driven rather than process-driven.
            </p>
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="bg-slate-50 py-14 md:py-20 lg:py-28 border-y border-[#E4E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-12 items-end pb-10 md:pb-12 border-b border-[#E4E8F0] lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-primary/60 mb-4">
                Our Commitments
              </p>
              <h2 className="text-[2rem] md:text-[2.8rem] leading-[1.08] tracking-tight font-medium text-[#0D1524]">
                What guides DOCK
              </h2>
            </div>
            <p className="text-[1.05rem] md:text-[1.12rem] leading-8 text-[#445166] max-w-2xl">
              We hold ourselves to disciplined, rigorous benchmarks, putting credibility and structural clarity before scale. Growth remains calibrated.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.map((item) => (
              <div
                key={item.title}
                className="group bg-white border border-[#E4E8F0] rounded-2xl p-7 flex flex-col justify-between hover:shadow-md transition-shadow duration-300 min-h-[220px]"
              >
                <div className="w-11 h-11 rounded-xl bg-[#F0F4FF] border border-[#D8E0F0] flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <item.Icon className="h-5 w-5 text-primary" strokeWidth={1.6} />
                </div>
                <div className="mt-5">
                  <h3 className="text-[1.15rem] font-bold tracking-tight text-[#0D1524] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.9rem] leading-[1.7] text-[#445166]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Theory of Change Section */}
      <section className="py-14 md:py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-[11px] font-bold tracking-[0.24em] uppercase text-primary mb-3">
              Impact Engine
            </p>
            <h2 className="text-[2rem] md:text-[2.8rem] leading-[1.1] tracking-tight font-bold text-secondary">
              Theory of Change
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Our framework for transforming public discourse and civic participation.
            </p>
          </div>

          <div className="bg-primary text-white rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-lg border border-primary">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-15"
              style={{
                background:
                  'radial-gradient(100% 100% at 90% 10%, rgba(0,123,255,1) 0%, rgba(2,6,54,0) 80%)',
              }}
            />
            
            <div className="relative z-10 grid gap-10 md:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold leading-tight border-b border-white/20 pb-5">
                  Democratic systems weaken when public discourse detaches from institutional mechanics.
                </h3>
                <p className="mt-6 text-sm text-white/80 leading-relaxed">
                  If institutional knowledge is accessible, if civic dialogue precedes reaction, and if young leaders understand fiscal and legislative design — then advocacy aligns with constitutional structures, and accountability becomes process-based rather than personality-driven.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 md:p-8 space-y-4 border border-white/10">
                <p className="text-sm font-semibold text-tertiary">Our ultimate goal is not visibility. It is a cultural shift.</p>
                <p className="text-xs text-white/80 leading-relaxed">
                  DOCK invests in a generation that values structure as much as outcome, strengthening public discourse and building long-term institutional resilience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
