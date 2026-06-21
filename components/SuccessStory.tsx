import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { successStory } from '@/lib/data';

export default function SuccessStory() {
  return (
    <section className="bg-primary py-20 md:py-28 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.32em] text-tertiary mb-4 flex items-center gap-2.5">
            <span className="inline-block w-6 h-[1.5px] bg-tertiary opacity-80" />
            Featured Initiative
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight">{successStory.title}</h2>
          <blockquote className="mt-8 border-l-4 border-tertiary pl-6">
            <p className="text-xl font-heading font-light italic leading-relaxed text-white/90">
              &ldquo;{successStory.quote}&rdquo;
            </p>
            <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              {successStory.name} · {successStory.location}
            </footer>
          </blockquote>
          <p className="mt-8 leading-relaxed text-white/75">{successStory.body}</p>
          <div className="mt-9">
            <Link
              href="/programs#conclave"
              className="inline-flex items-center gap-3 bg-tertiary text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wide hover:bg-tertiary/90 transition-colors shadow-sm group"
            >
              Explore Conclave Details
              <span className="flex items-center justify-center bg-secondary text-white rounded-full w-5 h-5 group-hover:scale-110 transition-transform">
                <ArrowRight className="w-3 h-3 stroke-[2.5]" />
              </span>
            </Link>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative ml-auto h-[520px] w-[420px] overflow-hidden rounded-3xl border border-white/15">
            <Image
              src={successStory.image}
              alt={successStory.title}
              fill
              className="object-cover"
              sizes="420px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
