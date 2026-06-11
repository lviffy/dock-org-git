import AnimatedCounter from '@/components/AnimatedCounter';
import { stats } from '@/lib/data';

export default function ImpactStats() {
  return (
    <section className="border-b border-slate-100 bg-white" aria-label="Our impact in numbers">
      <div className="container-site grid grid-cols-2 gap-y-10 py-14 text-center lg:grid-cols-4 lg:divide-x lg:divide-slate-100">
        {stats.map((stat) => (
          <div key={stat.label} className="px-4">
            <p className="text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
