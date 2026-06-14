import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Program } from '@/lib/data';

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(79,124,172,0.20),0_4px_16px_-4px_rgba(79,124,172,0.10)] hover:-translate-y-1">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-7">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">
          Focus Area
        </p>
        <h3 className="text-xl font-heading font-bold tracking-tight text-secondary">{program.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{program.summary}</p>
        <Link
          href="/programs"
          className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-primary hover:text-secondary transition-colors"
        >
          Learn more <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
