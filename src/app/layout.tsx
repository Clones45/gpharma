import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Grely’s Pharma Enterprise Inc. - Trusted Healthcare & Wellness',
  description: 'Providing accessible, high-quality pharmaceutical products, medical supplies, and advanced wellness solutions across Davao del Sur and beyond.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased text-slate-800 bg-white">
        <Navbar />
        <main className="min-h-screen pt-[80px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
