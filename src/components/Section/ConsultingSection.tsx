'use client';

import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

// 컨설팅 섹션 컴포넌트
const ConsultingSection = () => {
  const farmImages = [
    { src: '/images/consulting-01.jpg', alt: '컨설팅 약품 이미지 1' },
    { src: '/images/farm-care-02.jpg', alt: '농장관리 이미지 2' },
    { src: '/images/farm-care-03.jpg', alt: '농장관리 이미지 3' },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className='flex justify-center items-center pb-12'>
      <div className='container'>
        <h2 className='mb-3 text-center text-3xl font-bold leading-tight md:text-left lg:text-4xl'>
          컨설팅
        </h2>
        <p className='mb-8 text-center text-lg text-muted-foreground md:text-left'>
          자체 방역을 원하는 농가는 특화된 약품을 보내드립니다. 작업 방법 및
          모든 제반 사항을 제공하고 있습니다.
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

export default ConsultingSection;
