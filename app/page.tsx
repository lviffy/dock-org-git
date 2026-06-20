import Link from 'next/link';
import Image from 'next/image';
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

      {/* Featured Case Study Highlight */}
      <section className="bg-[#FAFBFD] border-t border-b border-slate-100 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold uppercase tracking-[0.32em] text-tertiary mb-4">
                <span className="inline-block w-6 h-[1.5px] bg-tertiary opacity-80" />
                Featured Case Study
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary leading-tight tracking-tight">
                Crafting a New Political Movement
              </h2>
              <p className="mt-2 text-md font-heading font-medium text-primary">
                Puducherry Campaign · Jose Charles Martin
              </p>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">
                How Dock Consulting built a new political party and movement in Puducherry from the ground up, using data-guided sentiment capture, structured state-to-booth organisation building, a 6-pillar citizen manifesto, and high-impact campaigns to achieve rapid public acceptance.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-b border-slate-200/60 py-6">
                <div>
                  <p className="text-2xl font-extrabold text-primary">Double-Digit</p>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Vote Share in 2 Months</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-primary">Pre-Election</p>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Alliance Invitation</p>
                </div>
              </div>
              
              <div className="mt-8">
                <Link
                  href="/impact#puducherry-movement"
                  className="inline-flex items-center gap-3 bg-primary text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wide hover:bg-primary/95 transition-all shadow-sm group"
                >
                  Explore Full Case Study
                  <span className="flex items-center justify-center bg-white/10 text-white rounded-full w-5 h-5 group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                  </span>
                </Link>
              </div>
            </div>
            
            <div className="relative h-64 md:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-md border border-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=800&h=550&q=80"
                alt="Puducherry political movement case study"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20 lg:py-28">
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

      {/* <Testimonials /> */}
      <PartnerStrip />

      <section className="bg-white py-14 md:py-20 lg:py-28 border-t border-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="News & Stories"
            title="Latest from the field"
            subtitle="Real stories of resilience, hope and change from the communities we serve."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
