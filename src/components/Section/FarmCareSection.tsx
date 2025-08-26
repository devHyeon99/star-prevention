'use client';

import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

// 농장관리 섹션 컴포넌트
const FarmCareSection = () => {
  const farmImages = [
    { src: '/images/farmcare/farm-care-01.jpg', alt: '농장관리 이미지 1' },
    { src: '/images/farmcare/farm-care-02.jpg', alt: '농장관리 이미지 2' },
    { src: '/images/farmcare/farm-care-03.jpg', alt: '농장관리 이미지 3' },
    { src: '/images/farmcare/farm-care-04.jpg', alt: '농장관리 이미지 4' },
    { src: '/images/farmcare/farm-care-05.jpg', alt: '농장관리 이미지 5' },
    { src: '/images/farmcare/farm-care-06.jpg', alt: '농장관리 이미지 6' },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className='flex justify-center items-center py-12'>
      <div className='container'>
        <h2 className='mb-3 text-center text-3xl font-bold leading-tight md:text-left lg:text-5xl'>
          농장관리
        </h2>
        <p className='mb-8 text-center text-lg text-muted-foreground md:text-left md:text-2xl'>
          스타방역공사는 양돈농장 방역에 특화되어 있으며{' '}
          <br className='md:hidden' />
          쥐, 바퀴벌레 모든 해충의 완벽한 박멸을 <br className='md:hidden' />
          목표로 하고 있습니다.
        </p>

        {/* --- 모바일용: 캐러셀 슬라이더 --- */}
        <Carousel
          className='md:hidden w-full max-w-sm mx-auto'
          plugins={[plugin.current]}
          opts={{ loop: true }}
        >
          <CarouselContent>
            {farmImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className='relative aspect-square md:aspect-[4/3]'>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className='rounded-lg object-cover'
                    sizes='(max-width: 768px) 100vw, 50vw'
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* --- 데스크톱용: 3개 이미지 그리드 --- */}
        <div className='hidden md:grid md:grid-cols-3 gap-4'>
          {farmImages.map((image, index) => (
            <div key={index} className='relative h-80'>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className='rounded-lg object-cover'
                sizes='33vw'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FarmCareSection;
