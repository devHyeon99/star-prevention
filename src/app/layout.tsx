import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const pretendard = localFont({
  src: '../assets/fonts/PretendardStdVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://star-prevention.vercel.app'),
  title: {
    default: '스타 방역 공사 | 양돈농장방역 소독 청주방역',
    template: '%s | 스타 방역 공사',
  },
  description:
    '스타 방역공사는 양돈농장 전문 방역회사로 농장관리 및 소독 서비스를 제공합니다.',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  keywords: [
    '방역',
    '양돈농장',
    '농장 소독',
    '축산 방역',
    '방역 서비스',
    '스타 방역 공사',
  ],
  applicationName: '스타 방역 공사',
  authors: [
    { name: '스타 방역 공사', url: 'https://star-prevention.vercel.app' },
  ],
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  creator: '스타 방역 공사',
  publisher: '스타 방역 공사',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: '스타 방역 공사',
    description: '양돈농장 전문 방역회사, 농장관리 및 소독 서비스 제공',
    url: 'https://star-prevention.vercel.app',
    siteName: '스타 방역 공사',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '스타 방역 공사 대표 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '스타 방역 공사',
    description: '양돈농장 전문 방역회사, 농장관리 및 소독 서비스 제공',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://star-prevention.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={pretendard.className}>
      <body className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
