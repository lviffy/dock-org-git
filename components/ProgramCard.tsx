import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@/components/icons';
import type { Program } from '@/lib/data';

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-soft">
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
        <h3 className="text-xl font-extrabold tracking-tight text-brand-navy">{program.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{program.summary}</p>
        <Link href="/get-involved" className="btn-ghost mt-5 text-sm">
          Support this cause <ArrowRightIcon className="text-base" />
        </Link>
      </div>
    </article>
  );
}
