import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { ArrowRightIcon } from '@/components/icons';
import { successStory } from '@/lib/data';

export default function SuccessStory() {
  return (
    <section className="bg-brand-navy py-24 text-white">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow bg-white/10 text-brand-orange-light">Success Story</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">{successStory.title}</h2>
          <blockquote className="mt-8 border-l-4 border-brand-orange pl-6">
            <p className="text-xl font-medium italic leading-relaxed text-white/90">“{successStory.quote}”</p>
            <footer className="mt-4 text-sm font-semibold text-brand-orange-light">
              {successStory.name} · {successStory.location}
            </footer>
          </blockquote>
          <p className="mt-8 leading-relaxed text-white/75">{successStory.body}</p>
          <Link href="/news" className="btn-primary mt-9">
            Read more stories <ArrowRightIcon className="text-base" />
          </Link>
        </Reveal>

        <Reveal delay={150} className="hidden lg:block">
          <div className="relative ml-auto h-[520px] w-[420px] overflow-hidden rounded-3xl">
            <Image src={successStory.image} alt={`Portrait of ${successStory.name}`} fill className="object-cover" sizes="420px" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
