import Link from 'next/link';
import { HeartIcon } from '@/components/icons';

export default function DonateBanner() {
  return (
    <section className="bg-brand-navy">
      <div className="container-site flex flex-col items-center gap-6 py-20 text-center">
        <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Your contribution can change a life <span className="text-brand-orange">today</span>
        </h2>
        <p className="max-w-xl leading-relaxed text-white/80">
          Every donation, big or small, helps us reach one more child, one more family, one more community.
        </p>
        <Link href="/donate" className="btn-primary">
          Donate Now <HeartIcon className="text-base" />
        </Link>
      </div>
    </section>
  );
}
