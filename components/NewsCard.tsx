import Image from 'next/image';
import type { Story } from '@/lib/data';

export default function NewsCard({ story }: { story: Story }) {
  const date = new Date(story.date).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-soft">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={story.image}
          alt={story.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <span className="absolute left-4 top-4 rounded-full bg-brand-orange px-3.5 py-1 text-xs font-bold text-brand-navy">
          {story.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <time dateTime={story.date} className="text-xs font-bold uppercase tracking-wider text-slate-400">{date}</time>
        <h3 className="mt-2 text-lg font-extrabold leading-snug tracking-tight text-brand-navy transition-colors group-hover:text-brand-orange-dark">
          {story.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{story.excerpt}</p>
      </div>
    </article>
  );
}
