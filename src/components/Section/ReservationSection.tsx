'use client';

import React from 'react';

// 예약 섹션 컴포넌트
const ReservationSection = () => {
  return (
    <section className='flex justify-center items-center pb-12'>
      <div className='container'>
        <h2 className='mb-3 text-center text-3xl font-bold leading-tight md:text-left lg:text-4xl'>
          예약방법
        </h2>
        <p className='mb-8 text-center text-lg text-muted-foreground md:text-left'>
          여기에 문의 양식이나 연락처 정보가 들어갑니다.
        </p>
      </div>
    </section>
  );
};

export default ReservationSection;
