import Image from 'next/image';

const galleryImages = [
  { src: '/images/gallery/gallery-01.jpg', alt: '깨끗하게 소독된 농장 내부' },
  { src: '/images/gallery/gallery-02.jpg', alt: '방역 장비를 착용한 전문가' },
  { src: '/images/gallery/gallery-03.jpg', alt: '농장 외부에 설치된 쥐덫' },
  { src: '/images/gallery/gallery-04.jpg', alt: '방역 약품을 준비하는 모습' },
  { src: '/images/gallery/gallery-05.jpg', alt: '소독 작업을 진행하는 트럭' },
  {
    src: '/images/gallery/gallery-06.jpg',
    alt: '꼼꼼하게 약품을 도포하는 모습',
  },
  { src: '/images/gallery/gallery-07.jpg', alt: '방역 작업 후 정리된 모습' },
  {
    src: '/images/gallery/gallery-08.jpg',
    alt: '농장주와 상담하는 방역 전문가',
  },
];

// 방역사진 갤러리 페이지
const GalleryPage = () => {
  return (
    <main>
      {/* --- 1. 히어로 섹션 --- */}
      <section className='relative h-[400px] w-full flex items-center justify-center text-center text-white'>
        <div className='absolute inset-0 bg-black/60 z-10' />
        <Image
          src='/images/introduce-bg.jpg'
          alt='방역 작업을 진행하는 전문가의 모습'
          fill
          className='object-cover'
          priority
        />
        <div className='relative z-20 container px-4'>
          <h1 className='text-4xl md:text-6xl font-extrabold tracking-tight'>
            방역 현장 갤러리
          </h1>
          <p className='mt-4 text-lg md:text-xl max-w-3xl mx-auto'>
            스타방역공사의 전문성과 꼼꼼함을 현장 사진으로 직접 확인하세요.
          </p>
        </div>
      </section>

      {/* --- 2. 이미지 갤러리 섹션 --- */}
      <section className='flex justify-center py-16 md:py-24 mx-4 md:mx-0'>
        <div className='container'>
          {/* 모바일 2열, 태블릿 3열, PC 4열의 균일한 그리드 */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {galleryImages.map((image, index) => (
              <div key={index} className='relative aspect-square'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className='rounded-lg object-cover transition-transform duration-300 hover:scale-105'
                  sizes='(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default GalleryPage;
