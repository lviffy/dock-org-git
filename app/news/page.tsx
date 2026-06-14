import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import NewsCard from '@/components/NewsCard';
import { stories } from '@/lib/data';

export const metadata: Metadata = { title: 'News & Stories' };

export default function NewsPage() {
  return (
    <>
      <section className="bg-primary py-20 text-white md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold tracking-[0.24em] uppercase text-white/75 mb-6">
            News &amp; Stories
          </p>
          <h1 className="text-[2.3rem] md:text-[3.7rem] leading-[1.04] tracking-tight font-medium">
            Stories of hope and change
          </h1>
          <p className="mt-7 max-w-2xl text-[1.03rem] md:text-[1.2rem] leading-8 text-white/85">
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
