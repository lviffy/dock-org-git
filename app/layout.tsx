import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://dockfoundation.org'),
  title: {
    default: 'Dock Foundation | Small Acts. Big Change.',
    template: '%s | Dock Foundation',
  },
  description:
    'Dock Foundation is a non-profit organization working in education, healthcare, livelihoods, women empowerment and environment across India. 100% of donations go to programs.',
  keywords: ['NGO', 'non-profit', 'donate', 'volunteer', 'education', 'healthcare', 'India'],
  openGraph: {
    type: 'website',
    siteName: 'Dock Foundation',
    title: 'Dock Foundation | Small Acts. Big Change.',
    description:
      'Empowering communities across India through education, healthcare, livelihoods and environment programs.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dock Foundation | Small Acts. Big Change.',
    description: 'Empowering communities across India. Donate or volunteer today.',
  },
  icons: {
    icon: [{ url: '/dock-logo.webp', type: 'image/webp' }],
    shortcut: '/dock-logo.webp',
    apple: '/dock-logo.webp',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-brand-orange focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
