import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ótica Braga | Cartão Premium',
  description: 'Cartão interativo premium da Ótica Braga para bio do Instagram.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
