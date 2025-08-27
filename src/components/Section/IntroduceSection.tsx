'use client';

import React from 'react';
import Image from 'next/image';

const IntroduceSection = () => {
  return (
    <section
      className='relative flex justify-center items-center min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] bg-cover bg-center'
      style={{ backgroundImage: `url('/images/bg.jpg')` }}
    >
      <div className='absolute inset-0 bg-black opacity-75'></div>

      <div className='flex flex-col md:flex-row items-center gap-10 container z-10 text-white px-4 sm:px-6 lg:px-8'>
        <div className='w-40 md:w-50'>
          <Image
            src='/og-image.jpg'
            alt='스타방역공사 멤버스존 이미지'
            width={200}
            height={150}
            className='rounded-xl shadow-lg w-full h-auto'
            priority
          />
        </div>

        <div className='flex flex-col items-center space-y-4 md:items-start'>
          <h1
            className='text-center text-3xl font-bold leading-tight tracking-tighter md:text-left lg:text-5xl xl:text-6xl'
            style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}
          >
            최고의 방역 솔루션
            <br />
            <span className='text-blue-400'>스타방역공사</span>가 함께합니다.
          </h1>
          <p
            className='text-center text-lg text-gray-200 md:text-left md:text-2xl'
            style={{ textShadow: '1px 1px 6px rgba(0, 0, 0, 0.8)' }}
          >
            스타 방역공사는 양돈농장 전문 방역회사입니다.
            <br />
            주로 농장관리 및 소독 서비스를 제공합니다.
            <br />
            <br />
            <span className='font-bold text-lg md:text-2xl text-red-400'>
              문의 전화 : 1544-2604
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroduceSection;
