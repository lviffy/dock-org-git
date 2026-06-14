import Image from 'next/image';
import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import { Compass, Sparkles, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = { title: 'About Us' };

const values = [
  { title: 'Integrity', text: 'We are transparent and accountable to the communities we serve.', Icon: ShieldCheck },
  { title: 'Compassion', text: 'We lead with empathy, dignity and respect in everything we do.', Icon: Compass },
  { title: 'Collaboration', text: 'We co-create solutions with communities, governments and partners.', Icon: Sparkles },
  { title: 'Sustainability', text: 'We build programs that outlast us, owned and led by the community.', Icon: Compass },
];


export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary py-20 text-white md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            background:
              'radial-gradient(60% 50% at 80% 20%, rgba(46,91,154,0.55) 0%, rgba(2,6,54,0) 60%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold tracking-[0.24em] uppercase text-tertiary mb-6">
            About Civic Knowledge
          </p>
          <h1 className="text-[2.3rem] md:text-[3.7rem] leading-[1.05] tracking-tight font-heading font-bold max-w-4xl">
            Who we are
          </h1>
          <p className="mt-7 max-w-3xl text-[1.03rem] md:text-[1.2rem] leading-8 text-white/80">
            Civic Knowledge is an NGO-focused digital platform and non-profit organization committed to promoting civic engagement, public policy awareness, and citizen empowerment across India.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative h-80 lg:h-[420px] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=900&h=700&q=80"
              alt="Community members working together"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="h-[3px] w-[3px] rounded-full bg-primary/70" />
                <span className="h-[1px] w-8 bg-gradient-to-r from-primary/70 to-transparent" />
              </div>
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.32em] text-primary/80">
                Mission &amp; Vision
              </p>
            </div>
            <h2 className="text-[1.8rem] md:text-[2.4rem] leading-[1.1] tracking-tight font-medium text-[#121722]">
              Communities don&apos;t need saviors. They need partners.
            </h2>
            <p className="mt-6 text-[1rem] leading-8 text-[#445166]">
              <strong className="text-[#0D1524]">Mission:</strong> To empower underserved communities
              through quality education, accessible healthcare, dignified livelihoods and a healthy
              environment.
            </p>
            <p className="mt-4 text-[1rem] leading-8 text-[#445166]">
              <strong className="text-[#0D1524]">Vision:</strong> A world where every person, regardless
              of where they are born, has the opportunity to live a healthy, educated and self-reliant life.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20 lg:py-28 border-y border-[#E4E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-12 items-end pb-10 md:pb-12 border-b border-[#E4E8F0] lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-primary/60 mb-4">
                Our Values
              </p>
              <h2 className="text-[2rem] md:text-[2.8rem] leading-[1.08] tracking-tight font-medium text-[#0D1524]">
                What guides us
              </h2>
            </div>
            <p className="text-[1.05rem] md:text-[1.12rem] leading-8 text-[#445166] max-w-2xl">
              The principles that shape how we think, listen and execute — built alongside the communities
              we serve and held to the highest standard of transparency and accountability.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group grid md:grid-cols-[48px_1fr] gap-4 md:gap-5 py-8 items-start"
              >
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-[#F0F4FF] border border-[#D8E0F0] flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <value.Icon className="h-5 w-5 md:h-6 md:w-6 text-primary" strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="text-[1.15rem] md:text-[1.35rem] font-semibold tracking-tight text-[#0D1524] leading-snug">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-[0.98rem] md:text-[1.04rem] leading-[1.85] text-[#445166]">
                    {value.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
