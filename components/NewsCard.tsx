import Image from 'next/image';
import type { Story } from '@/lib/data';

export default function NewsCard({ story }: { story: Story }) {
  const date = new Date(story.date).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const CardContent = () => (
    <>
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={story.image}
          alt={story.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <span className="absolute left-4 top-4 rounded-full bg-primary px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
          {story.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <time dateTime={story.date} className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          {date}
        </time>
        <h3 className="mt-2 text-lg font-heading font-bold leading-snug tracking-tight text-secondary transition-colors group-hover:text-primary">
          {story.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{story.excerpt}</p>
      </div>
    </>
  );

  if (story.externalUrl) {
    return (
      <a
        href={story.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(79,124,172,0.20),0_4px_16px_-4px_rgba(79,124,172,0.10)] hover:-translate-y-1 block"
      >
        <CardContent />
      </a>
    );
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(79,124,172,0.20),0_4px_16px_-4px_rgba(79,124,172,0.10)] hover:-translate-y-1">
      <CardContent />
    </article>
  );
}
