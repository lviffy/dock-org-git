import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import NewsCard from '@/components/NewsCard';
import { stories } from '@/lib/data';

export const metadata: Metadata = { title: 'News & Stories' };

export default function NewsPage() {
  return (
    <>
      <section className="bg-brand-navy py-20 text-white">
        <div className="container-site max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">News &amp; Stories</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Stories of hope and change</h1>
          <p className="mt-6 text-lg text-white/85">
            Updates from the field, milestones from our programs and the voices of the communities we serve.
          </p>
        </div>
      </section>

      <section className="bg-brand-sand py-20">
        <div className="container-site">
          <SectionHeading eyebrow="Latest Updates" title="From the field" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stories.map((story) => (
              <NewsCard key={story.slug} story={story} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
