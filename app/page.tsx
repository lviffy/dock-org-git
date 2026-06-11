import Link from 'next/link';
import Hero from '@/components/Hero';
import ImpactStats from '@/components/ImpactStats';
import MissionVision from '@/components/MissionVision';
import ProgramCard from '@/components/ProgramCard';
import SuccessStory from '@/components/SuccessStory';
import DonationWidget from '@/components/DonationWidget';
import Testimonials from '@/components/Testimonials';
import VolunteerCTA from '@/components/VolunteerCTA';
import PartnerStrip from '@/components/PartnerStrip';
import NewsCard from '@/components/NewsCard';
import DonateBanner from '@/components/DonateBanner';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { ArrowRightIcon, CheckIcon } from '@/components/icons';
import { programs, stories } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <MissionVision />

      {/* Programs */}
      <section className="bg-brand-sand py-24">
        <div className="container-site">
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
            <Link href="/programs" className="btn-primary">
              Explore All Programs <ArrowRightIcon className="text-base" />
            </Link>
          </div>
        </div>
      </section>

      <SuccessStory />

      {/* Donation */}
      <section className="py-24">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Donate</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
              Generosity that <span className="text-brand-orange-dark">goes further</span>
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-slate-600">
              100% of your donation funds programs on the ground. Administrative costs are covered
              separately by institutional grants, so your generosity reaches the people who need it most.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'Audited annual reports, published openly',
                'Quarterly impact updates for every donor',
                '80G tax exemption on all donations',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <CheckIcon className="mt-0.5 shrink-0 text-lg text-brand-orange-dark" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150}>
            <DonationWidget />
          </Reveal>
        </div>
      </section>

      <Testimonials />
      <VolunteerCTA />
      <PartnerStrip />

      {/* News */}
      <section className="bg-brand-sand py-24">
        <div className="container-site">
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
            <Link href="/news" className="btn-ghost">
              View all news &amp; stories <ArrowRightIcon className="text-base" />
            </Link>
          </div>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
