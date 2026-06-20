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
  metadataBase: new URL('https://civicknowledge.org'),
  title: {
    default: 'Civic Knowledge | Small Acts. Big Change.',
    template: '%s | Civic Knowledge',
  },
  description:
    'Civic Knowledge is an NGO-focused digital platform that showcases civic engagement initiatives, governance knowledge, public policy awareness, democratic participation, and citizen empowerment programs.',
  keywords: ['NGO', 'non-profit', 'civic engagement', 'governance', 'public policy', 'democracy', 'citizen empowerment', 'India'],
  openGraph: {
    type: 'website',
    siteName: 'Civic Knowledge',
    title: 'Civic Knowledge | Small Acts. Big Change.',
    description:
      'Empowering citizens and showcasing governance and public policy initiatives across India.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Civic Knowledge | Small Acts. Big Change.',
    description: 'Empowering citizens and showcasing governance and public policy initiatives across India.',
  },
  icons: {
    icon: [{ url: '/CIVIC-KNOWLEDGE-jpg-transparent.png', type: 'image/png' }],
    shortcut: '/CIVIC-KNOWLEDGE-jpg-transparent.png',
    apple: '/CIVIC-KNOWLEDGE-jpg-transparent.png',
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
        className="min-h-screen flex flex-col bg-white font-sans text-black selection:bg-primary selection:text-white"
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
