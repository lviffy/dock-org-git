import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { ArrowRightIcon, BriefcaseIcon, FirstAidIcon, GraduationCapIcon, LeafIcon } from '@/components/icons';

const roles = [
  { Icon: GraduationCapIcon, title: 'Teach & Mentor', text: 'Lead classes or mentor students at our learning centres.' },
  { Icon: FirstAidIcon, title: 'Health Camps', text: 'Support doctors and outreach teams during mobile camps.' },
  { Icon: LeafIcon, title: 'Green Drives', text: 'Join plantation, clean-up and water conservation drives.' },
  { Icon: BriefcaseIcon, title: 'Skill Sharing', text: 'Offer design, tech, legal or finance skills pro bono.' },
];

export default function VolunteerCTA() {
  return (
    <section className="py-24">
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Volunteer With Us</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
              Give time. <span className="text-brand-orange-dark">Gain purpose.</span>
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-slate-600">
              800+ volunteers power our work every month. Whether you have two hours or two days a week,
              there is a role with your name on it.
            </p>
            <Link href="/get-involved" className="btn-primary mt-8">
              Join as a Volunteer <ArrowRightIcon className="text-base" />
            </Link>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {roles.map((role, i) => (
              <Reveal key={role.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 transition-colors duration-300 hover:border-brand-orange/50">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange/10 text-xl text-brand-orange-dark">
                    <role.Icon />
                  </span>
                  <h3 className="mt-4 font-bold text-brand-navy">{role.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600">{role.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
