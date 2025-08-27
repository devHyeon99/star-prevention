import type { Metadata } from 'next';
import Image from 'next/image';
import { Clipboard, FileText, SprayCan, Repeat } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const metadata: Metadata = {
  metadataBase: new URL('https://star-prevention.vercel.app'),
  title: '농장관리',
  description:
    '스타 방역 공사의 농장관리 페이지입니다. 주기적으로 월 1~2회 직접 방문해서 농장 관리를 해드립니다.',
  keywords: [
    '스타 방역 공사',
    '농장관리',
    '양돈농장 방역',
    '농장 소독',
    '청주 방역 업체',
    '약품 제공',
  ],
  openGraph: {
    title: '농장관리',
    description:
      '스타 방역공사는 다년간의 현장 경험과 전문 지식을 바탕으로 가장 효과적이고 신뢰할 수 있는 방역 솔루션을 제공합니다.',
    url: 'https://star-prevention.vercel.app/farmcare',
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
    canonical: 'https://star-prevention.vercel.app/farmcare',
  },
};

// 농장관리 페이지
const FarmCarePage = () => {
  return (
    <main>
      {/* --- 1. 히어로 섹션 --- */}
      <section className='relative h-[400px] w-full flex items-center justify-center text-center text-white'>
        <div className='absolute inset-0 bg-black/60 z-10' />
        <Image
          src='/images/farm-care-bg.jpg'
          alt='체계적으로 관리되는 현대식 농장'
          fill
          className='object-cover'
          priority
        />
        <div className='relative z-20 container px-4'>
          <h1 className='text-4xl md:text-6xl font-extrabold tracking-tight'>
            양돈농장 방역 관리
          </h1>
          <p className='mt-4 text-lg md:text-3xl max-w-3xl mx-auto text-shadow-lg font-medium'>
            주기적으로 월 1~2회 직접 방문해서 농장 관리를 해드립니다.
            <br />쥐 퇴치를 통해 사료 절감, 더 큰 수익으로 연결됩니다.
          </p>
        </div>
      </section>

      {/* --- 2. 서비스 절차 섹션 --- */}
      <section className='flex justify-center py-16 md:py-24 bg-muted/40'>
        <div className='container'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold'>
              농장관리 방역 프로세스
            </h2>
            <p className='mt-3 text-muted-foreground md:text-xl'>
              정확한 진단부터 철저한 사후관리까지
              <br /> 4단계 시스템으로 운영됩니다.
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* 절차 1 */}
            <div className='text-center'>
              <div className='flex items-center justify-center size-16 bg-blue-100 text-blue-600 rounded-full mx-auto mb-4'>
                <Clipboard className='size-8' />
              </div>
              <h3 className='text-xl md:text-2xl font-semibold mb-2'>
                1. 현장 진단
              </h3>
              <p className='mx-4 text-muted-foreground text-sm md:text-xl'>
                전문가가 직접 농장을 방문하여 해충 문제, 시설 구조 및 오염원을
                정밀하게 진단합니다.
              </p>
            </div>
            {/* 절차 2 */}
            <div className='text-center'>
              <div className='flex items-center justify-center size-16 bg-blue-100 text-blue-600 rounded-full mx-auto mb-4'>
                <FileText className='size-8' />
              </div>
              <h3 className='text-xl md:text-2xl font-semibold mb-2'>
                2. 맞춤 계획 수립
              </h3>
              <p className='mx-4 text-muted-foreground text-sm md:text-xl'>
                진단 결과를 바탕으로 농장 환경에 최적화된 방역 주기, 약품, 작업
                방식을 설계합니다.
              </p>
            </div>
            {/* 절차 3 */}
            <div className='text-center'>
              <div className='flex items-center justify-center size-16 bg-blue-100 text-blue-600 rounded-full mx-auto mb-4'>
                <SprayCan className='size-8' />
              </div>
              <h3 className='text-xl md:text-2xl font-semibold mb-2'>
                3. 전문 방역 실시
              </h3>
              <p className='mx-4 text-muted-foreground text-sm md:text-xl'>
                숙련된 방역팀이 계획에 따라 안전 수칙을 준수하며 꼼꼼하게 방역
                작업을 진행합니다.
              </p>
            </div>
            {/* 절차 4 */}
            <div className='text-center'>
              <div className='flex items-center justify-center size-16 bg-blue-100 text-blue-600 rounded-full mx-auto mb-4'>
                <Repeat className='size-8' />
              </div>
              <h3 className='text-xl md:text-2xl font-semibold mb-2'>
                4. 사후 관리
              </h3>
              <p className='mx-4 text-muted-foreground text-sm md:text-xl'>
                정기적인 관리를 통해 방역 효과를 점검하고 해충 재발을 원천
                차단합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. 주요 관리 프로그램 섹션 --- */}
      <section className='flex justify-center py-16 md:py-24'>
        <div className='container'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold'>
              주요 관리 프로그램
            </h2>
            <p className='mx-4 mt-3 text-muted-foreground md:text-xl'>
              해충의 종류와 농장 환경에 따라 가장 효과적인 프로그램을
              제공합니다.
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4'>
            <Card>
              <CardHeader>
                <CardTitle className='md:text-2xl'>
                  설치류(쥐) 방제 프로그램
                </CardTitle>
                <CardDescription className='md:text-lg'>
                  농장 내외부 쥐의 서식지 및 침입 경로를 파악하고 맞춤형 방제
                  솔루션을 적용합니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='list-disc list-inside text-muted-foreground space-y-2 md:text-lg'>
                  <li>외부 방어 시스템 구축</li>
                  <li>내부 트랩 및 독먹이집 설치</li>
                  <li>정기적인 서식지 관리</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className='md:text-2xl'>
                  보행해충(바퀴) 방제 프로그램
                </CardTitle>
                <CardDescription className='md:text-lg'>
                  바퀴벌레의 종류와 서식처를 분석하여 잔류분무, 독먹이 시공 등
                  복합적인 방법으로 박멸합니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='list-disc list-inside text-muted-foreground space-y-2 md:text-lg'>
                  <li>주요 서식처 집중 시공</li>
                  <li>성충 및 유충 동시 방제</li>
                  <li>지속적인 모니터링 트랩 설치</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className='md:text-2xl'>
                  종합 소독 및 악취 관리
                </CardTitle>
                <CardDescription className='md:text-lg'>
                  농장 내 유해 바이러스 및 세균을 소독하고, 악취의 원인을 찾아
                  쾌적한 환경을 조성합니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='list-disc list-inside text-muted-foreground space-y-2 md:text-lg'>
                  <li>주기적인 돈사 내외부 소독</li>
                  <li>차량 및 대인 소독 관리</li>
                  <li>악취 저감 솔루션 제공</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FarmCarePage;
