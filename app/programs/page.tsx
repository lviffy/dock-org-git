import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import ProgramCard from '@/components/ProgramCard';
import FeaturedConclave from '@/components/FeaturedConclave';
import { programs } from '@/lib/data';

export const metadata: Metadata = { title: 'Our Work' };

export default function ProgramsPage() {
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
            Our Work
          </p>
          <h1 className="text-[2.3rem] md:text-[3.7rem] leading-[1.05] tracking-tight font-heading font-bold max-w-4xl">
            Programs that create lasting change
          </h1>
          <p className="mt-7 max-w-3xl text-[1.03rem] md:text-[1.2rem] leading-8 text-white/80">
            Six focus areas. One goal: stronger, self-reliant communities.
          </p>
        </div>
      </section>

      {/* Featured Project Showcase */}
      <FeaturedConclave />

      <section className="bg-neutral py-14 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Focus Areas"
            title="Where we make a difference"
            subtitle="Each program is designed in partnership with local communities and measured for real-world impact."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

