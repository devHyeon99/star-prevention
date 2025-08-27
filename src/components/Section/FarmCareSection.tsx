'use client';

import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Clipboard, FileText, SprayCan, Repeat } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

// 농장관리 섹션 컴포넌트
const FarmCareSection = () => {
  const farmImages = [
    { src: '/images/farmcare/farmcare01.jpg', alt: '농장관리 이미지 1' },
    { src: '/images/farmcare/farmcare02.jpg', alt: '농장관리 이미지 2' },
    { src: '/images/farmcare/farmcare03.jpg', alt: '농장관리 이미지 3' },
    { src: '/images/farmcare/farmcare04.jpg', alt: '농장관리 이미지 4' },
    { src: '/images/farmcare/farmcare05.jpg', alt: '농장관리 이미지 5' },
    { src: '/images/farmcare/farmcare06.jpg', alt: '농장관리 이미지 6' },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className='flex justify-center items-center py-12'>
      <div className='container'>
        {/* 데스크톱: 2단 레이아웃, 모바일: 1단 레이아웃을 위한 Flexbox 컨테이너 */}
        <div className='flex flex-col md:flex-row md:gap-12'>
          {/* --- 왼쪽: 텍스트 콘텐츠 --- */}
          <div className='md:w-1/2'>
            <h2 className='mb-2 text-center text-3xl font-bold leading-tight md:text-left lg:text-5xl'>
              농장관리
            </h2>
            <p className='mb-4 text-center text-lg text-muted-foreground md:text-left md:text-2xl'>
              스타방역공사는 양돈농장 방역에 특화되어 있습니다.
              <br />
              쥐, 바퀴벌레 모든 해충의 완벽한 박멸을{' '}
              <br className='md:hidden' />
              목표로 하고 있습니다.
            </p>

            <h3 className='text-center font-medium text-blue-400 md:text-left text-xl md:text-2xl'>
              농장 방역은 다음과 같이 진행돼요!
            </h3>
            <p className='text-center md:text-left text-muted-foreground text-lg md:text-xl mb-4 md:mb-2'>
              정확한 진단부터 철저한 사후관리까지
              <br className='md:hidden' />
              4단계 시스템으로 운영됩니다.
            </p>

            <div className='border border-border rounded-md p-4 shadow mx-4 md:mx-0'>
              <div className='grid grid-cols-2 gap-8'>
                {/* 절차 1 */}
                <div className='text-center'>
                  <div className='flex items-center justify-center size-16 bg-blue-100 text-blue-600 rounded-full mx-auto mb-4'>
                    <Clipboard className='size-8' />
                  </div>
                  <h3 className='text-xl md:text-2xl font-semibold mb-2'>
                    STEP 1. <br /> 현장 진단
                  </h3>
                  <p className='mx-4 text-muted-foreground text-sm md:text-xl'>
                    전문가가 직접 농장을 방문하여 해충 문제, 시설 구조 및
                    오염원을 정밀하게 진단합니다.
                  </p>
                </div>
                {/* 절차 2 */}
                <div className='text-center'>
                  <div className='flex items-center justify-center size-16 bg-blue-100 text-blue-600 rounded-full mx-auto mb-4'>
                    <FileText className='size-8' />
                  </div>
                  <h3 className='text-xl md:text-2xl font-semibold mb-2'>
                    STEP 2. <br /> 맞춤 계획 수립
                  </h3>
                  <p className='mx-4 text-muted-foreground text-sm md:text-xl'>
                    진단 결과를 바탕으로 농장 환경에 최적화된 방역 주기, 약품,
                    작업 방식을 설계합니다.
                  </p>
                </div>
                {/* 절차 3 */}
                <div className='text-center'>
                  <div className='flex items-center justify-center size-16 bg-blue-100 text-blue-600 rounded-full mx-auto mb-4'>
                    <SprayCan className='size-8' />
                  </div>
                  <h3 className='text-xl md:text-2xl font-semibold mb-2'>
                    STEP 3. <br /> 전문 방역 실시
                  </h3>
                  <p className='mx-4 text-muted-foreground text-sm md:text-xl'>
                    숙련된 방역팀이 계획에 따라 안전 수칙을 준수하며 꼼꼼하게
                    방역 작업을 진행합니다.
                  </p>
                </div>
                {/* 절차 4 */}
                <div className='text-center'>
                  <div className='flex items-center justify-center size-16 bg-blue-100 text-blue-600 rounded-full mx-auto mb-4'>
                    <Repeat className='size-8' />
                  </div>
                  <h3 className='text-xl md:text-2xl font-semibold mb-2'>
                    STEP 4. <br /> 사후 관리
                  </h3>
                  <p className='mx-4 text-muted-foreground text-sm md:text-xl'>
                    정기적인 관리를 통해 방역 효과를 점검하고 해충 재발을 원천
                    차단합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- 오른쪽: 데스크톱용 이미지 그리드 --- */}
          <div className='hidden md:grid md:w-1/2 grid-cols-2 gap-4'>
            {/* 데스크톱에서는 3개 이미지를 더 다채롭게 배치할 수 있습니다. 예를 들어 1개는 크고 2개는 작게. */}
            {/* 아래는 간단한 3행 1열 그리드 예시입니다. */}
            {farmImages.map((image, index) => (
              <div key={index} className='relative h-60'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className='rounded-lg object-cover'
                  sizes='(max-width: 768px) 0, 50vw' // md 이상에서만 보이므로 50vw
                />
              </div>
            ))}
          </div>
        </div>

        {/* --- 모바일용: 캐러셀 슬라이더 --- */}
        {/* 이 부분은 데스크톱 레이아웃 flexbox 바깥에 위치하여 독립적으로 제어됩니다. */}
        <Carousel
          className='md:hidden mt-8' // 모바일에서 위 콘텐츠와의 간격을 위해 mt-8 추가
          plugins={[plugin.current]}
          opts={{ loop: true }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {farmImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className='relative aspect-square'>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className='object-cover'
                    sizes='100vw'
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default FarmCareSection;
