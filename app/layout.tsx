import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider';
import { CustomCursor } from '@/components/custom-cursor';
import { GlobalBackground } from '@/components/global-background';
import { NoiseOverlay } from '@/components/noise-overlay';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Opsel Lanka — Experience Tomorrow. Today.',
  description: 'Sri Lanka\'s Premium Mobile Destination. Latest smartphones, repairs, trade-ins, and accessories in Malabe.',
  keywords: ['Opsel Lanka', 'smartphones Sri Lanka', 'iPhone Sri Lanka', 'Samsung Sri Lanka', 'phone repair Malabe', 'Nothing Phone Sri Lanka'],
  openGraph: {
    title: 'Opsel Lanka — Experience Tomorrow. Today.',
    description: 'Sri Lanka\'s Premium Mobile Destination.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">
        <SmoothScrollProvider>
          <GlobalBackground />
          <CustomCursor />
          <NoiseOverlay />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
