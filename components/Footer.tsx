import Link from 'next/link';
import Logo from '@/components/Logo';

const socials = [
  { label: 'Twitter / X', href: '#', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { label: 'Facebook', href: '#', icon: 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647z' },
  { label: 'Instagram', href: '#', icon: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z' },
  { label: 'LinkedIn', href: '#', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy-dark text-white">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo onDark />
          <p className="mt-5 text-sm leading-relaxed text-white/65">
            Working alongside communities to create lasting change in education, health, livelihood and the environment.
          </p>
          <ul className="mt-6 flex gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 hover:bg-brand-orange hover:text-brand-navy"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={social.icon} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Quick links">
          <h2 className="text-sm font-extrabold uppercase tracking-widest text-brand-orange">Quick Links</h2>
          <ul className="mt-5 space-y-2.5 text-sm text-white/75">
            <li><Link href="/about" className="transition hover:text-brand-orange">About Us</Link></li>
            <li><Link href="/programs" className="transition hover:text-brand-orange">Our Work</Link></li>
            <li><Link href="/news" className="transition hover:text-brand-orange">News &amp; Stories</Link></li>
            <li><Link href="/get-involved" className="transition hover:text-brand-orange">Get Involved</Link></li>
            <li><Link href="/donate" className="transition hover:text-brand-orange">Donate</Link></li>
            <li><Link href="/contact" className="transition hover:text-brand-orange">Contact</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-widest text-brand-orange">Contact</h2>
          <ul className="mt-5 space-y-2.5 text-sm text-white/75">
            <li>Regus, Level 4, Kothari Centrum, Kondapur, Hyderabad 500084, India</li>
            <li><a href="tel:+911234567890" className="transition hover:text-brand-orange">+91 12345 67890</a></li>
            <li><a href="mailto:contactus@dockconsulting.in" className="transition hover:text-brand-orange">contactus@dockconsulting.in</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-widest text-brand-orange">Newsletter</h2>
          <p className="mt-5 text-sm text-white/65">Get monthly impact updates straight to your inbox.</p>
          <form className="mt-5 flex gap-2" aria-label="Newsletter signup">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your email"
              className="w-full rounded-full border-0 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/45 focus:ring-2 focus:ring-brand-orange"
            />
            <button type="submit" className="rounded-full bg-brand-orange px-5 py-2.5 text-sm font-bold text-brand-navy transition-colors hover:bg-brand-orange-dark">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="container-site text-center text-xs text-white/55">
          © {new Date().getFullYear()} Dock Foundation. All rights reserved. · Registered non-profit organization · 80G certified
        </p>
      </div>
    </footer>
  );
}
