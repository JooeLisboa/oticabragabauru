import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ótica Braga | Elegância, presença e visão',
  description:
    'Landing page premium da Ótica Braga com atendimento acolhedor, modelos sofisticados e presença de marca.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
