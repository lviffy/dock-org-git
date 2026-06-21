'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const translations = {
  en: {
    eyebrow: 'Think · Engage · Lead',
    titleMain: 'Build Leaders. Decode Governance. ',
    titleItalic: 'Strengthen Democracy.',
    description: "Democratic Organization for Civic Knowledge (DOCK) exists to strengthen structural understanding in public life. We work through disciplined, repeatable institutional interventions prioritizing clarity over rhetoric.",
    exploreBtn: 'Explore Our Work',
    contactBtn: 'Get in Touch',
    statCommunities: 'Voters Reached',
    statLives: 'Campaigns Executed',
    statYears: 'Booths Covered',
  },
  te: {
    eyebrow: 'ఆలోచించండి · భాగస్వామ్యం వహించండి · నడిపించండి',
    titleMain: 'నాయకులను నిర్మించండి. పాలనను డీకోడ్ చేయండి. ',
    titleItalic: 'ప్రజాస్వామ్యాన్ని బలోపేతం చేయండి.',
    description: 'ప్రజా జీవితంలో నిర్మాణాత్మక అవగాహనను బలోపేతం చేయడానికి డెమోక్రటిక్ ఆర్గనైజేషన్ ఫర్ సివిక్ నాలెడ్జ్ (DOCK) పనిచేస్తుంది. మేము వాక్చాతుర్యం కంటే స్పష్టతకు ప్రాధాన్యత ఇస్తూ క్రమశిక్షణతో కూడిన పద్ధతుల ద్వారా పని చేస్తాము.',
    exploreBtn: 'కార్యక్రమాలను చూడండి',
    contactBtn: 'సంప్రదించండి',
    statCommunities: 'ఓటర్లకు చేరువయ్యాము',
    statLives: 'క్యాంపెయిన్లు',
    statYears: 'పోలింగ్ బూతులు',
  },
};

export default function Hero() {
  const [lang, setLang] = useState<'en' | 'te'>('en');

  useEffect(() => {
    const syncLang = () => {
      const storedLang = localStorage.getItem('civic_lang');
      if (storedLang === 'en' || storedLang === 'te') {
        setLang(storedLang);
      }
    };
    syncLang();
    window.addEventListener('civic_lang_change', syncLang);
    return () => window.removeEventListener('civic_lang_change', syncLang);
  }, []);

  const t = translations[lang];

  return (
    <section className="relative overflow-hidden bg-primary text-white">
      {/* Soft white radial highlight to add depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          background:
            'radial-gradient(60% 50% at 80% 20%, rgba(46,91,154,0.55) 0%, rgba(2,6,54,0) 60%)',
        }}
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid min-h-[78vh] items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.32em] text-tertiary mb-4 flex items-center gap-2.5">
            <span className="inline-block w-6 h-[1.5px] bg-tertiary opacity-80" />
            {t.eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-heading font-bold leading-[1.05] tracking-tight text-white break-words">
            {t.titleMain} <br />
            <span className="text-tertiary italic drop-shadow-sm">{t.titleItalic}</span>
          </h1>
          <p className="mt-8 max-w-xl text-[15px] leading-[1.75] text-white/80">
            {t.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/programs"
              className="inline-flex items-center gap-3 bg-tertiary text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wide hover:bg-tertiary/90 transition-colors shadow-sm group"
            >
              {t.exploreBtn}
              <span className="flex items-center justify-center bg-secondary text-white rounded-full w-5 h-5 group-hover:scale-110 transition-transform">
                <ArrowRight className="w-3 h-3 stroke-[2.5]" />
              </span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-between gap-8 border border-white/25 rounded-full pl-6 pr-4 py-2.5 text-xs font-medium text-white hover:bg-white/10 transition-colors"
            >
              {t.contactBtn}
              <span className="bg-white/10 p-1.5 rounded-full">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>

          <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/15 pt-6">
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-widest text-white/55">{t.statCommunities}</dt>
              <dd className="mt-1 text-2xl font-heading font-bold text-white">2 Cr+</dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-widest text-white/55">{t.statLives}</dt>
              <dd className="mt-1 text-2xl font-heading font-bold text-white">50+</dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-widest text-white/55">{t.statYears}</dt>
              <dd className="mt-1 text-2xl font-heading font-bold text-white">32,500+</dd>
            </div>
          </dl>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative ml-auto h-[480px] w-[400px] overflow-hidden rounded-3xl border border-white/15">
            <Image
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&h=1000&q=80"
              alt="Governance debate and panel"
              fill
              priority
              className="object-cover"
              sizes="400px"
            />
          </div>
          <div className="absolute -left-4 bottom-10 w-64 rounded-2xl bg-secondary p-5 shadow-[0_20px_60px_rgba(2,6,54,0.45)]">
            <p className="text-sm font-heading font-bold text-white">"Democracy runs on structure."</p>
            <p className="mt-1 text-xs text-white/80">Strengthening understanding of legislative and fiscal design across campuses.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
