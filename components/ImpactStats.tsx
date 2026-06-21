import { Counter } from '@/components/ui/Counter';
import { stats } from '@/lib/data';

export default function ImpactStats() {
  return (
    <section className="border-b border-slate-100 bg-white" aria-label="Our impact in numbers">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 gap-px bg-slate-100 rounded-2xl overflow-hidden lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white px-5 py-8 text-center">
              <p className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
