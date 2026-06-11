import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import { HeartIcon, MegaphoneIcon, UsersIcon } from '@/components/icons';

export const metadata: Metadata = { title: 'Get Involved' };

const ways = [
  {
    Icon: HeartIcon,
    title: 'Volunteer',
    text: 'Teach, mentor, organize health camps or lend your professional skills. Give your time where it matters most.',
  },
  {
    Icon: UsersIcon,
    title: 'Partner with Us',
    text: 'CSR partnerships, institutional grants and NGO collaborations that scale impact across regions.',
  },
  {
    Icon: MegaphoneIcon,
    title: 'Fundraise',
    text: 'Start a birthday fundraiser, run a marathon for a cause or rally your workplace behind a campaign.',
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <section className="bg-brand-navy py-20 text-white">
        <div className="container-site max-w-3xl">
          <p className="eyebrow bg-white/10 text-brand-orange-light">Get Involved</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Be the change you want to see</h1>
          <p className="mt-5 text-lg text-white/80">
            There are many ways to join our mission. Choose yours.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-site">
          <SectionHeading eyebrow="Ways to Help" title="How you can contribute" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {ways.map(({ Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-8 transition-colors duration-300 hover:border-brand-orange/50">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange/10 text-xl text-brand-orange-dark">
                  <Icon />
                </span>
                <h3 className="mt-4 text-xl font-bold text-brand-navy">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/donate" className="btn-primary">Or Donate Directly</Link>
          </div>
        </div>
      </section>

      <section className="bg-brand-sand py-24">
        <div className="container-site max-w-2xl">
          <SectionHeading
            eyebrow="Volunteer"
            title="Sign up to volunteer"
            subtitle="Fill in your details and our team will reach out within 3 working days."
          />
          <form className="mt-12 grid gap-5 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft sm:p-10" aria-label="Volunteer signup form">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-semibold text-brand-navy">Full name</label>
                <input id="name" name="name" type="text" required placeholder="Your name" className="input-field" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-semibold text-brand-navy">Email</label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" className="input-field" />
              </div>
            </div>
            <div>
              <label htmlFor="interest" className="text-sm font-semibold text-brand-navy">Area of interest</label>
              <select id="interest" name="interest" className="input-field">
                <option>Education</option>
                <option>Healthcare</option>
                <option>Livelihood &amp; Skilling</option>
                <option>Environment</option>
                <option>Women Empowerment</option>
                <option>Disaster Relief</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-semibold text-brand-navy">Tell us about yourself</label>
              <textarea id="message" name="message" rows={4} placeholder="A few lines about you and your availability" className="input-field resize-y" />
            </div>
            <button type="submit" className="btn-primary justify-self-start">Submit Application</button>
          </form>
        </div>
      </section>
    </>
  );
}
