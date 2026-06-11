import Image from 'next/image';
import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import DonateBanner from '@/components/DonateBanner';

export const metadata: Metadata = { title: 'About Us' };

const values = [
  { title: 'Integrity', text: 'We are transparent and accountable to the communities and donors we serve.' },
  { title: 'Compassion', text: 'We lead with empathy, dignity and respect in everything we do.' },
  { title: 'Collaboration', text: 'We co-create solutions with communities, governments and partners.' },
  { title: 'Sustainability', text: 'We build programs that outlast us, owned and led by the community.' },
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
      <section className="bg-brand-navy py-20 text-white">
        <div className="container-site max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">About Us</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Who we are</h1>
          <p className="mt-6 text-lg text-white/85">
            Dock Foundation is a registered non-profit organization committed to building equitable,
            resilient communities. For over 15 years, we have worked at the grassroots, listening first,
            then acting alongside the people we serve.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div className="relative h-80 overflow-hidden rounded-xl lg:h-[420px]">
            <Image src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=900&h=700&q=80" alt="Volunteers working with a community" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-brand-navy">Our Mission &amp; Vision</h2>
            <p className="mt-4 text-slate-600">
              <strong className="text-brand-navy">Mission:</strong> To empower underserved communities through
              quality education, accessible healthcare, dignified livelihoods and a healthy environment.
            </p>
            <p className="mt-4 text-slate-600">
              <strong className="text-brand-navy">Vision:</strong> A world where every person, regardless of
              where they are born, has the opportunity to live a healthy, educated and self-reliant life.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-sand py-20">
        <div className="container-site">
          <SectionHeading eyebrow="Our Values" title="What guides us" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-xl bg-white p-6 shadow-md">
                <h3 className="text-lg font-bold text-brand-orange-dark">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <SectionHeading eyebrow="Our Team" title="People behind the mission" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full">
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="160px" />
                </div>
                <h3 className="mt-4 font-bold text-brand-navy">{member.name}</h3>
                <p className="text-sm text-slate-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
