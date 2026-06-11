'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HeartIcon } from '@/components/icons';
import Logo from '@/components/Logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/programs', label: 'Our Work' },
  { href: '/news', label: 'News & Stories' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-100 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-soft backdrop-blur-md' : 'bg-white'
      }`}
    >
      <div className="container-site flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Dock Foundation home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-semibold text-brand-navy/70 transition-colors hover:text-brand-navy after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-brand-orange after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-2.5 text-sm font-bold text-brand-navy transition-colors hover:bg-brand-orange-dark"
          >
            Donate <HeartIcon className="text-sm" />
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-md p-1 text-brand-navy lg:hidden"
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

      {open && (
        <nav className="animate-fade-in border-t border-slate-100 bg-white lg:hidden" aria-label="Mobile navigation">
          <div className="container-site flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 font-semibold text-brand-navy/80 transition hover:bg-brand-sand hover:text-brand-navy"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-4 py-3 font-bold text-brand-navy"
              onClick={() => setOpen(false)}
            >
              Donate <HeartIcon className="text-sm" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
