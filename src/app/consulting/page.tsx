import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://xn--ob0b810abmds9bg9f8ou.kr'),
  title: '컨설팅',
  description:
    '스타 방역 공사의 컨설팅 페이지입니다. 농장에서 자체방역을 원하는 농가는 저희 회사가 특화된 약품을 보내드리고 있습니다.',
  keywords: [
    '스타 방역 공사',
    '컨설팅',
    '양돈농장 방역',
    '농장 소독',
    '청주 방역 업체',
    '약품 제공',
  ],
  openGraph: {
    title: '컨설팅',
    description:
      '스타 방역공사는 다년간의 현장 경험과 전문 지식을 바탕으로 가장 효과적이고 신뢰할 수 있는 방역 솔루션을 제공합니다.',
    url: 'https://xn--ob0b810abmds9bg9f8ou.kr/consulting',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '스타 방역 공사 대표 이미지',
      },
    ],
  },
  alternates: {
    canonical: 'https://xn--ob0b810abmds9bg9f8ou.kr/consulting',
  },
};

// 컨설팅 페이지
const ConsultingPage = () => {
  return (
    <section className='relative h-[460px] w-full flex items-center justify-center text-center text-white'>
      <div className='absolute inset-0 bg-black/20 z-10' />
      <Image
        src='/images/consulting-bg.jpg'
        alt='컨설팅 약품 이미지'
        fill
        className='object-cover object-bottom'
        priority
      />
      <div className='relative z-20 container px-4'>
        <h1 className='text-4xl md:text-6xl font-extrabold tracking-tight'>
          컨설팅
        </h1>
        <p className='mt-4 text-lg md:text-3xl mx-auto text-shadow-lg font-medium'>
          농장에서 자체방역을 원하는 농가는 저희 회사가 특화된 약품을 보내드리고
          있습니다.
        </p>
      </div>
    </section>
  );
};

export default ConsultingPage;
