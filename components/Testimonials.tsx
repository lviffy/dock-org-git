import Image from 'next/image';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <section className="bg-white py-14 md:py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold uppercase tracking-[0.32em] text-primary">
            <span className="inline-block w-6 h-[1.5px] bg-primary/70" />
            Testimonials
          </p>
          <h2 className="mt-4 text-3xl font-heading font-bold tracking-tight text-secondary sm:text-4xl">
            Voices of our community
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Partners and community members on what working with us feels like.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-15px_rgba(79,124,172,0.20),0_4px_16px_-4px_rgba(79,124,172,0.10)]"
            >
              <span className="text-5xl font-extrabold leading-none text-primary/40" aria-hidden="true">&ldquo;</span>
              <blockquote className="flex-1">
                <p className="leading-relaxed text-slate-700">{t.quote}</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-5">
                <span className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image src={t.image} alt="" fill className="object-cover" sizes="48px" />
                </span>
                <span>
                  <span className="block font-bold text-secondary">{t.name}</span>
                  <span className="block text-xs font-medium text-slate-500">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
