import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ITS ME DEZINO - 3D Motion Digital Marketing',
  description: 'Innovative 3D motion website for creative digital marketing solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-white">{children}</body>
    </html>
  );
}
