import Link from 'next/link';
import Hero from '@/components/Hero';
import ImpactStats from '@/components/ImpactStats';
import MissionVision from '@/components/MissionVision';
import HowWeWork from '@/components/HowWeWork';
import ProgramCard from '@/components/ProgramCard';
import SuccessStory from '@/components/SuccessStory';
import Testimonials from '@/components/Testimonials';
import PartnerStrip from '@/components/PartnerStrip';
import NewsCard from '@/components/NewsCard';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { ArrowRight } from 'lucide-react';
import { programs, stories } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <MissionVision />
      <HowWeWork />

      <section className="bg-white py-14 md:py-20 lg:py-28 border-t border-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Work"
            title="Causes we champion"
            subtitle="From classrooms to clinics, from farms to forests, our programs are designed with communities, for communities."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.slice(0, 3).map((program, i) => (
              <Reveal key={program.slug} delay={i * 120}>
                <ProgramCard program={program} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/programs"
              className="inline-flex items-center gap-3 bg-primary text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wide hover:bg-primary/90 transition-colors shadow-sm group"
            >
              Explore All Programs
              <span className="flex items-center justify-center bg-white text-primary rounded-full w-5 h-5 group-hover:scale-110 transition-transform">
                <ArrowRight className="w-3 h-3 stroke-[2.5]" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <SuccessStory />

      <Testimonials />
      <PartnerStrip />

      <section className="bg-white py-14 md:py-20 lg:py-28 border-t border-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="News & Stories"
            title="Latest from the field"
            subtitle="Real stories of resilience, hope and change from the communities we serve."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stories.map((story, i) => (
              <Reveal key={story.slug} delay={i * 100} className="h-full">
                <NewsCard story={story} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-3 rounded-full border border-slate-200 px-5 py-2.5 text-[11px] font-bold tracking-[0.14em] uppercase text-secondary transition-colors duration-300 hover:border-primary hover:text-primary group"
            >
              View all news &amp; stories
              <span className="flex items-center justify-center bg-primary/10 text-primary rounded-full w-5 h-5 group-hover:scale-110 transition-transform">
                <ArrowRight className="w-3 h-3 stroke-[2.5]" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
