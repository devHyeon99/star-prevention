'use client';

import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';

const IntroduceSection = () => {
  const images = [
    '/images/star-bg-01.jpg',
    '/images/star-bg-02.jpg',
    '/images/star-bg-03.jpg',
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className='flex justify-center items-center py-12 md:py-24'>
      <div className='container grid items-center gap-8 md:grid-cols-2 md:justify-center'>
        {/* 소개글 (왼쪽) */}
        <div className='flex flex-col items-center space-y-3 md:items-start'>
          <h1 className='text-center text-3xl font-bold leading-tight md:text-left lg:text-5xl'>
            최고의 방역 솔루션,
            <br />
            <span className='text-blue-600'>스타방역공사</span>가 함께합니다.
          </h1>
          <p className='text-center text-lg text-muted-foreground md:text-left'>
            스타 방역공사는 양돈농장 전문 방역회사입니다.
            <br className='md:hidden' />
            주로 농장관리 및 소독 서비스를 제공합니다.
          </p>
        </div>

        {/* 이미지 슬라이더 (오른쪽) */}
        <div className='flex justify-center'>
          <Carousel
            className='w-full h-full max-w-sm md:max-w-none mx-auto'
            plugins={[plugin.current]}
            opts={{ loop: true }}
          >
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index}>
                  <div className='relative aspect-square md:aspect-[4/3]'>
                    <Image
                      src={src}
                      alt={`배경 슬라이드 ${index + 1}`}
                      fill
                      className='object-cover rounded-lg'
                      sizes='(max-width: 768px) 100vw, 50vw'
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default IntroduceSection;
