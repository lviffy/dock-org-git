import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { ArrowRightIcon, CheckIcon } from '@/components/icons';

export default function MissionVision() {
  return (
    <section className="py-24">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="relative h-[420px] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&h=700&q=80"
                alt="Volunteers working with a village community"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-brand-orange px-7 py-5 text-brand-navy sm:-right-6">
              <p className="text-3xl font-extrabold">15+</p>
              <p className="text-xs font-semibold uppercase tracking-wider">Years of trust</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="eyebrow">Mission &amp; Vision</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
            Communities don&apos;t need saviors. <br className="hidden sm:block" />
            They need <span className="text-brand-orange-dark">partners</span>.
          </h2>
          <p className="mt-6 leading-relaxed text-slate-600">
            <strong className="text-brand-navy">Our mission</strong> is to empower underserved communities
            through quality education, accessible healthcare, dignified livelihoods and a healthy environment.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            <strong className="text-brand-navy">Our vision</strong> is a world where every person, regardless
            of where they are born, has the opportunity to live a healthy, educated and self-reliant life.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {['Community-led programs', 'Radical transparency', 'Measured outcomes', 'Sustainable change'].map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-xl bg-brand-sand px-4 py-3 text-sm font-semibold text-brand-navy">
                <CheckIcon className="shrink-0 text-base text-brand-orange-dark" />
                {item}
              </li>
            ))}
          </ul>
          <Link href="/about" className="btn-ghost mt-8">
            Learn more about us <ArrowRightIcon className="text-base" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
