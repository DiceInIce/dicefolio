import Head from 'next/head';
import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio',
  description: 'DiceFolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href='./favicon.ico'/>
      </Head>
      <body className={inter.className}>
        <Navbar />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}