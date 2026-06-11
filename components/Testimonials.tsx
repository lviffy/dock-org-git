import Image from 'next/image';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <section className="bg-brand-sand py-24">
      <div className="container-site">
        <SectionHeading
          eyebrow="Testimonials"
          title="Voices of our community"
          subtitle="Donors, volunteers and community members on what working with us feels like."
        />
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="text-5xl font-extrabold leading-none text-brand-orange/30" aria-hidden="true">“</span>
                <blockquote className="flex-1">
                  <p className="leading-relaxed text-slate-600">{t.quote}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-5">
                  <span className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image src={t.image} alt="" fill className="object-cover" sizes="48px" />
                  </span>
                  <span>
                    <span className="block font-bold text-brand-navy">{t.name}</span>
                    <span className="block text-xs font-medium text-slate-500">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
