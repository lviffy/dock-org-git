import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import ProgramCard from '@/components/ProgramCard';
import DonateBanner from '@/components/DonateBanner';
import { programs } from '@/lib/data';

export const metadata: Metadata = { title: 'Our Work' };

export default function ProgramsPage() {
  return (
    <>
      <section className="bg-brand-navy py-20 text-white">
        <div className="container-site max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">Our Work</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Programs that create lasting change</h1>
          <p className="mt-6 text-lg text-white/85">
            Six focus areas. One goal: stronger, self-reliant communities.
          </p>
        </div>
      </section>

      <section className="bg-brand-sand py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Focus Areas"
            title="Where we make a difference"
            subtitle="Each program is designed in partnership with local communities and measured for real-world impact."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
