import type { Metadata } from 'next';
import IntroduceSection from '@/components/Section/IntroduceSection';
import FarmCareSection from '@/components/Section/FarmCareSection';
import ConsultingSection from '@/components/Section/ConsultingSection';

export const metadata: Metadata = {
  metadataBase: new URL('https://star-prevention.vercel.app'),
  title: '회사소개',
  description:
    '스타 방역 공사의 회사소개 페이지입니다. 양돈농장 전문 방역회사로 농장 관리 및 소독 서비스를 제공하며, 고객의 위생과 안전을 최우선으로 생각합니다.',
  keywords: [
    '스타 방역 공사',
    '회사소개',
    '양돈농장 방역',
    '농장 소독',
    '청주 방역 업체',
  ],
  openGraph: {
    title: '회사소개',
    description:
      '스타 방역공사는 다년간의 현장 경험과 전문 지식을 바탕으로 가장 효과적이고 신뢰할 수 있는 방역 솔루션을 제공합니다.',
    url: 'https://star-prevention.vercel.app/company',
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
    canonical: 'https://star-prevention.vercel.app/company',
  },
};

const ComponyPage = () => {
  return (
    <>
      {/* --- 섹션 1: Hero --- */}
      <IntroduceSection />

      {/* --- 섹션 2: 농장관리 --- */}
      <FarmCareSection />

      {/* --- 섹션 3: 컨설팅 --- */}
      <ConsultingSection />
    </>
  );
};

export default ComponyPage;
