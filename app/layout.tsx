import type { Metadata } from 'next';
import { Inter, Montserrat, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dockfoundation.org'),
  title: {
    default: 'Dock Foundation | Small Acts. Big Change.',
    template: '%s | Dock Foundation',
  },
  description:
    'Dock Foundation is a non-profit organization working in education, healthcare, livelihoods, women empowerment and environment across India.',
  keywords: ['NGO', 'non-profit', 'education', 'healthcare', 'India', 'foundation'],
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
    description: 'Empowering communities across India through education, healthcare, livelihoods and environment programs.',
  },
  icons: {
    icon: [{ url: '/CIVIC-KNOWLEDGE.png', type: 'image/png' }],
    shortcut: '/CIVIC-KNOWLEDGE.png',
    apple: '/CIVIC-KNOWLEDGE.png',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${playfair.variable} scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-white font-sans text-secondary selection:bg-primary selection:text-white"
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
