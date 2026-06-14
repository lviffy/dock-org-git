'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from '@/components/Logo';

const navLinks = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
  { href: '/programs', key: 'work' },
  { href: '/impact', key: 'impact' },
  { href: '/news', key: 'news' },
];

const translations = {
  en: {
    home: 'Home',
    about: 'About Us',
    work: 'Our Work',
    impact: 'Impact',
    news: 'News & Stories',
    contact: 'Contact',
  },
  te: {
    home: 'హోమ్',
    about: 'మా గురించి',
    work: 'కార్యక్రమాలు',
    impact: 'ప్రభావం',
    news: 'వార్తలు & కథనాలు',
    contact: 'సంప్రదించండి',
  },
} as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'en' | 'te'>('en');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Client-side only language check to avoid hydration mismatch
    const storedLang = localStorage.getItem('civic_lang');
    if (storedLang === 'en' || storedLang === 'te') {
      setLang(storedLang);
    }
  }, []);

  const toggleLang = () => {
    const nextLang = lang === 'en' ? 'te' : 'en';
    setLang(nextLang);
    localStorage.setItem('civic_lang', nextLang);
    // Dispatch a storage event or custom event to notify other components
    window.dispatchEvent(new Event('civic_lang_change'));
  };

  const t = translations[lang];

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'bg-white border-slate-100'
          : 'bg-white border-transparent'
      }`}
      style={scrolled ? { boxShadow: '0 2px 16px -6px rgb(13 21 36 / 0.06)' } : undefined}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex h-[88px] items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Civic Knowledge home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-semibold text-slate-600 transition-colors hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {t[link.key as keyof typeof t]}
            </Link>
          ))}

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary/90"
          >
            {t.contact}
          </Link>
        </nav>

        <div className="flex items-center gap-4 lg:hidden">
          <button
            type="button"
            className="rounded-md p-1 text-secondary"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            onClick={() => setOpen(!open)}
          >
            <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="animate-fade-in border-t border-slate-100 bg-white lg:hidden" aria-label="Mobile navigation">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 font-semibold text-slate-700 transition hover:bg-neutral hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {t[link.key as keyof typeof t]}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 font-bold text-white"
              onClick={() => setOpen(false)}
            >
              {t.contact}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
