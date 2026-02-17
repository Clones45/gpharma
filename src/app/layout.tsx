import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.grelyspharma.com'), // Replace with actual domain
  title: {
    default: 'Grely’s Pharma Enterprise Inc. - Trusted Healthcare & Wellness',
    template: '%s | Grely’s Pharma'
  },
  description: 'Grely’s Pharma Enterprise Inc. provides accessible, high-quality pharmaceutical products, medical supplies, and advanced water purification solutions across Davao del Sur and Mindanao.',
  keywords: ['pharmacy', 'medical supplies', 'water purification', 'UltraPure', 'health', 'wellness', 'Digos City', 'Mindanao', 'Grely’s Pharma'],
  authors: [{ name: 'Grely’s Pharma Enterprise Inc.' }],
  creator: 'Grely’s Pharma Enterprise Inc.',
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: 'https://www.grelyspharma.com',
    title: 'Grely’s Pharma Enterprise Inc.',
    description: 'Trusted healthcare and wellness solutions for every Filipino family.',
    siteName: 'Grely’s Pharma',
    images: [
      {
        url: '/assets/logo.png', // Ensure this path is correct relative to public
        width: 1200,
        height: 630,
        alt: 'Grely’s Pharma Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grely’s Pharma',
    description: 'Trusted healthcare and wellness solutions for every Filipino family.',
    images: ['/assets/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased text-slate-800">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
