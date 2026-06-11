import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@/components/icons';

export default function Hero() {
  return (
    <section className="bg-brand-navy text-white">
      <div className="container-site grid min-h-[78vh] items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div className="animate-fade-up">
          <p className="eyebrow bg-white/10 text-brand-orange-light">
            Registered non-profit · 15 years of impact
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl xl:text-6xl">
            Small acts. <span className="text-brand-orange">Big change.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            We partner with communities across India to deliver lasting change in education, healthcare,
            livelihoods and the environment. One village, one family, one child at a time.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/donate" className="btn-primary">
              Donate Now <ArrowRightIcon className="text-base" />
            </Link>
            <Link href="/get-involved" className="btn-outline">Become a Volunteer</Link>
          </div>
          <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/15 pt-6">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-white/60">Donations to programs</dt>
              <dd className="text-2xl font-extrabold text-white">100%</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-white/60">Tax exemption</dt>
              <dd className="text-2xl font-extrabold text-white">80G</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-white/60">Communities served</dt>
              <dd className="text-2xl font-extrabold text-white">120+</dd>
            </div>
          </dl>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative ml-auto h-[480px] w-[400px] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&h=1000&q=80"
              alt="Children smiling at a community learning centre"
              fill
              priority
              className="object-cover"
              sizes="400px"
            />
          </div>
          <div className="absolute -left-4 bottom-10 w-64 rounded-2xl bg-white p-5 shadow-lift">
            <p className="text-sm font-bold text-brand-navy">“Every child deserves a classroom.”</p>
            <p className="mt-1 text-xs text-slate-500">3,000+ students reached through digital classrooms this year.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
