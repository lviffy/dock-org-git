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
  metadataBase: new URL('https://docknowledge.org'),
  title: {
    default: 'Democratic Organization for Civic Knowledge (DOCK)',
    template: '%s | DOCK',
  },
  description:
    'Democratic Organization for Civic Knowledge (DOCK) exists to strengthen structural understanding in public life. Build Leaders. Decode Governance. Strengthen Democracy.',
  keywords: ['DOCK', 'Democratic Organization for Civic Knowledge', 'governance', 'public policy', 'democracy', 'civic research', 'political leadership', 'legislative procedure', 'fiscal process', 'administrative architecture', 'India', 'Puducherry'],
  openGraph: {
    type: 'website',
    siteName: 'DOCK',
    title: 'Democratic Organization for Civic Knowledge (DOCK)',
    description:
      'Democratic Organization for Civic Knowledge (DOCK) exists to strengthen structural understanding in public life. Build Leaders. Decode Governance. Strengthen Democracy.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Democratic Organization for Civic Knowledge (DOCK)',
    description: 'Democratic Organization for Civic Knowledge (DOCK) exists to strengthen structural understanding in public life. Build Leaders. Decode Governance. Strengthen Democracy.',
  },
  icons: {
    icon: [{ url: '/civic-knowledge-jpg-transparent.webp', type: 'image/webp' }],
    shortcut: '/civic-knowledge-jpg-transparent.webp',
    apple: '/civic-knowledge-jpg-transparent.webp',
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
