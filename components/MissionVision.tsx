import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Compass, Sparkles, ShieldCheck } from 'lucide-react';

const visionPoints = [
  {
    title: 'Community-Led',
    description: 'Programs designed with the people they serve, not for them — listening first, then acting.',
    Icon: Compass,
  },
  {
    title: 'Measured Outcomes',
    description: 'Every initiative is built around clear metrics, transparent reporting and long-term accountability.',
    Icon: Sparkles,
  },
  {
    title: 'Lasting Trust',
    description: 'A foundation-first approach that keeps partnerships grounded in dignity and mutual respect.',
    Icon: ShieldCheck,
  },
];

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-10 md:gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)] lg:items-start">
          <div className="max-w-3xl pt-1 lg:pt-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="h-[3px] w-[3px] rounded-full bg-primary" />
                <span className="h-[1px] w-8 bg-gradient-to-r from-primary to-transparent" />
              </div>
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.35em] text-primary">Mission &amp; Vision</p>
            </div>

            <h3 className="font-heading text-[1.6rem] leading-[1.18] tracking-tight text-secondary sm:text-[2.2rem] md:text-[3.25rem]">
              Communities don&apos;t need saviors. <br />
              They need <span className="italic text-primary font-light">partners</span>.
            </h3>

            <p className="mt-6 max-w-2xl text-[0.95rem] md:text-[1.05rem] leading-[1.75] md:leading-[1.8] text-secondary/70">
              Our mission is to empower underserved communities through quality education, accessible
              healthcare, dignified livelihoods and a healthy environment. Our vision is a world where every
              person, regardless of where they are born, has the opportunity to live a healthy, educated and
              self-reliant life.
            </p>

            <div className="mt-8 md:mt-14 rounded-t-[2rem] md:rounded-t-[3rem] rounded-b-[1rem] border border-slate-100 bg-neutral/40 p-5 sm:p-6 md:p-10 relative overflow-hidden group hover:border-primary/30 transition-colors duration-700">
              <div className="absolute top-0 right-0 w-32 h-32 -mr-12 -mt-12 rounded-full border border-primary/15 group-hover:scale-[1.8] transition-transform duration-1000 ease-in-out" />
              <div className="absolute top-0 right-0 w-44 h-44 -mr-16 -mt-16 rounded-full border border-primary/10 group-hover:scale-[1.8] transition-transform duration-1000 delay-75 ease-in-out" />
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-primary">Why This Matters</p>
              <p className="mt-3 md:mt-4 max-w-2xl text-[0.92rem] md:text-[1rem] leading-[1.7] md:leading-[1.8] text-secondary/75">
                When communities lead, change sticks. Every program we run is shaped alongside the people
                it serves — schools, clinics, livelihoods and ecosystems built to outlast us.
              </p>
            </div>
          </div>

          <div className="relative mt-4 md:mt-8 lg:mt-auto lg:self-end p-2 rounded-t-[7rem] sm:rounded-t-[9rem] md:rounded-t-[12rem] rounded-b-[1.25rem] md:rounded-b-[2rem] border border-slate-100 bg-white shadow-[0_12px_40px_rgba(13,21,36,0.04)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
            <div className="absolute top-[-3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rotate-45 bg-primary/50"></div>

            <div className="rounded-t-[6.5rem] sm:rounded-t-[8rem] md:rounded-t-[11.5rem] rounded-b-[1rem] md:rounded-b-[1.5rem] border border-slate-50 px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 md:pt-32 pb-6 sm:pb-8 md:pb-10 h-full bg-neutral/30">
              <div className="space-y-6 sm:space-y-8 md:space-y-10">
                {visionPoints.map((point) => (
                  <div
                    key={point.title}
                    className="group flex gap-3.5 sm:gap-4 md:gap-5 border-b border-slate-100 pb-6 sm:pb-7 md:pb-10 last:border-0 last:pb-0"
                  >
                    <div className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-white text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/[0.06]">
                      <point.Icon className="h-4 w-4 md:h-5 md:w-5 stroke-[1.5]" />
                    </div>
                    <div>
                      <h4 className="font-heading text-[1.05rem] sm:text-[1.15rem] md:text-[1.25rem] font-normal tracking-wide text-secondary group-hover:text-primary transition-colors duration-300">{point.title}</h4>
                      <p className="mt-1.5 sm:mt-2 text-[0.9rem] md:text-[0.95rem] leading-[1.6] md:leading-[1.7] text-secondary/65">{point.description}</p>
                    </div>
                  </div>
                ))}
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-primary hover:text-secondary transition-colors"
                >
                  Learn more about us <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
