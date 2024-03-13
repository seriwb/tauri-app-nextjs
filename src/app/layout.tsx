import '@/styles/globals.scss';
import React from 'react';
import { Metadata } from 'next';

const TITLE = 'Tauri + Next.js + TS';

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: `%s | ${TITLE}`,
  },
  description: 'This is a sample application.', // TODO
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  const copyright = 'your copyright'; // TODO

  return (
    <html lang='en'>
      <head>
        <meta name='copyright' content={copyright} />
        <link rel='icon' type='image/svg+xml' href='/vite.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>
      <body>{children}</body>
    </html>
  );
}
