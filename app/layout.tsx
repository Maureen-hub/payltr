import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PayLTR - Cashflow-as-a-Service voor Nederlandse ondernemers',
  description: 'Flexibele BNPL-oplossingen voor MKB. Verbeter je cashflow met slimme betalingstermijnen, geïntegreerd met je bank en kredietbeoordeling.',
  keywords: ['BNPL', 'cashflow', 'financing', 'SME', 'Netherlands', 'fintech'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}