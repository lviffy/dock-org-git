import { partners } from '@/lib/data';

export default function PartnerStrip() {
  // Duplicate the list for a seamless marquee loop
  const loop = [...partners, ...partners];

  return (
    <section className="border-y border-slate-100 bg-white py-12" aria-label="Partners and sponsors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
          Partners &amp; sponsors · In collaboration with global changemakers
        </p>
      </div>
      <div className="mt-8 overflow-hidden" aria-hidden="true">
        <ul className="flex w-max animate-marquee items-center gap-16 px-8">
          {loop.map((partner, i) => (
            <li
              key={`${partner}-${i}`}
              className="whitespace-nowrap text-xl font-extrabold uppercase tracking-wide text-secondary/35 transition-colors hover:text-primary/80"
            >
              {partner}
            </li>
          ))}
        </ul>
      </div>
      <ul className="sr-only">
        {partners.map((partner) => (
          <li key={partner}>{partner}</li>
        ))}
      </ul>
    </section>
  );
}
