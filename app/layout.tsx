import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MSK Investment Services | Comprehensive Investment Solutions',
  description:
    'MSK Investment Services Private Limited provides comprehensive investment solutions tailored to meet the unique needs of our clients — portfolio management, financial planning, retirement planning, and more.',
  keywords: 'MSK, Investment, Investment Services, Financial Planning, Portfolio Management, Chennai',
  authors: [{ name: 'MSK Investment Services' }],
  robots: 'index, follow',
  openGraph: {
    title: 'MSK Investment Services',
    description: 'Comprehensive investment solutions tailored to your unique needs.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/img/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/img/favicon/favicon.ico', rel: 'shortcut icon' },
      { url: '/img/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/img/favicon/apple-touch-icon.png',
  },
  manifest: '/img/favicon/site.webmanifest',
  other: {
    'apple-mobile-web-app-title': 'MSK Investment Services',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans text-[#1a1f2e] bg-white leading-relaxed antialiased">
        {children}
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M4P6KZSHN5"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M4P6KZSHN5');
          `}
        </Script>
      </body>
    </html>
  );
}
