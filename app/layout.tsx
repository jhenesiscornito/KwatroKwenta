import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from '@next/font/google';
import Head from 'next/head';
import { AuthProvider } from "./providers";

const poppins = Poppins ({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Kwenta",
  description: "A Self Finance Tracking System",
  icons: {
    icon: "/favicon.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <body className="antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
