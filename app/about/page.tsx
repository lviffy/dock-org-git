import Image from 'next/image';
import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import CommitmentsSection from '@/components/CommitmentsSection';

export const metadata: Metadata = { title: 'About Us' };

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#FAFBFD] py-20 text-slate-800 md:py-28 border-b border-slate-200/60">
        {/* Subtle blue dot grid background pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(var(--color-primary) 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(60% 50% at 80% 20%, rgba(0,123,255,0.06) 0%, rgba(255,255,255,0) 60%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold tracking-[0.24em] uppercase text-tertiary mb-6">
            Organizational Profile
          </p>
          <h1 className="text-[2.3rem] md:text-[3.7rem] leading-[1.05] tracking-tight font-heading font-bold text-primary max-w-4xl">
            Who we are
          </h1>
          <p className="mt-7 max-w-3xl text-[1.03rem] md:text-[1.2rem] leading-8 text-slate-600">
            Democratic Organization for Civic Knowledge (DOCK) exists to strengthen structural understanding in public life. We operate as a Civic Research Institute, a Governance Intelligence Initiative, and a Political Leadership development platform.
          </p>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section className="py-14 md:py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative h-80 lg:h-[420px] overflow-hidden rounded-3xl">
            <Image
              src="/structural-gap.webp"
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
          <CommitmentsSection />
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

          <div className="bg-white text-slate-800 rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-md border border-slate-200/80">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-100"
              style={{
                background:
                  'radial-gradient(100% 100% at 90% 10%, rgba(0,123,255,0.05) 0%, rgba(255,255,255,0) 80%)',
              }}
            />
            
            <div className="relative z-10 grid gap-10 md:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold leading-tight text-primary border-b border-slate-100 pb-5">
                  Democratic systems weaken when public discourse detaches from institutional mechanics.
                </h3>
                <p className="mt-6 text-sm text-slate-600 leading-relaxed">
                  If institutional knowledge is accessible, if civic dialogue precedes reaction, and if young leaders understand fiscal and legislative design — then advocacy aligns with constitutional structures, and accountability becomes process-based rather than personality-driven.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 md:p-8 space-y-4">
                <p className="text-sm font-semibold text-tertiary">Our ultimate goal is not visibility. It is a cultural shift.</p>
                <p className="text-xs text-slate-600 leading-relaxed">
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
