import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import NewsCard from '@/components/NewsCard';
import { stories } from '@/lib/data';

export const metadata: Metadata = { title: 'News & Stories' };

export default function NewsPage() {
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
            News &amp; Stories
          </p>
          <h1 className="text-[2.3rem] md:text-[3.7rem] leading-[1.05] tracking-tight font-heading font-bold text-primary max-w-4xl">
            Stories of hope and change
          </h1>
          <p className="mt-7 max-w-3xl text-[1.03rem] md:text-[1.2rem] leading-8 text-slate-600">
            Updates from the field, milestones from our programs and the voices of the communities we serve.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F7FB] border-y border-[#E1E6EF] py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Latest Updates" title="From the field" />
          <div className="mt-14 grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <NewsCard key={story.slug} story={story} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
