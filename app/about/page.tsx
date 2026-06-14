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

const team = [
  { name: 'Asha Verma', role: 'Founder & Director', image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=300&h=300&q=80' },
  { name: 'Rohit Menon', role: 'Head of Programs', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80' },
  { name: 'Sneha Kulkarni', role: 'Community Outreach Lead', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300&q=80' },
  { name: 'Imran Shaikh', role: 'Partnerships & Fundraising', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80' },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary py-20 text-white md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold tracking-[0.24em] uppercase text-white/75 mb-6">
            About Dock Foundation
          </p>
          <h1 className="text-[2.3rem] md:text-[3.7rem] leading-[1.04] tracking-tight font-medium">
            Who we are
          </h1>
          <p className="mt-7 max-w-3xl text-[1.03rem] md:text-[1.2rem] leading-8 text-white/85">
            Dock Foundation is a registered non-profit organization committed to building equitable,
            resilient communities. For over 3 years, we have worked at the grassroots, listening first,
            then acting alongside the people we serve.
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

      <section className="py-14 md:py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Team" title="People behind the mission" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full">
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="160px" />
                </div>
                <h3 className="mt-4 font-bold text-[#0D1524]">{member.name}</h3>
                <p className="text-sm text-slate-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
