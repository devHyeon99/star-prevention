import Image from 'next/image';

// 컨설팅 페이지
const ConsultingPage = () => {
  return (
    <section className='relative h-[460px] w-full flex items-center justify-center text-center text-white'>
      <div className='absolute inset-0 bg-black/60 z-10' />
      <Image
        src='/images/farmcare/farm-care-01.jpg'
        alt='컨설팅 약품 이미지'
        fill
        className='object-cover'
        priority
      />
      <div className='relative z-20 container px-4'>
        <h1 className='text-4xl md:text-6xl font-extrabold tracking-tight'>
          컨설팅
        </h1>
        <p className='mt-4 text-lg md:text-xl max-w-3xl mx-auto'>
          농장에서 자체방역을 원하는 농가는 저희 회사가 특화된 약품을 보내드리고
          있습니다.
        </p>
      </div>
    </section>
  );
};

export default ConsultingPage;
