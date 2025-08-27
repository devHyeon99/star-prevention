import Image from 'next/image';

const galleryImages = [
  { src: '/images/gallery/gallery-01.jpg', alt: '방역 이미지 1' },
  {
    src: '/images/farmcare/farmcare01.jpg',
    alt: '방역 이미지 2',
  },
  { src: '/images/gallery/gallery-03.jpg', alt: '방역 이미지 3' },
  { src: '/images/gallery/gallery-04.jpg', alt: '방역 이미지 4' },
  { src: '/images/gallery/gallery-05.jpg', alt: '방역 이미지 5' },
  {
    src: '/images/gallery/gallery-06.jpg',
    alt: '방역 이미지 6',
  },
  { src: '/images/gallery/gallery-07.jpg', alt: '방역 이미지 7' },
  {
    src: '/images/farmcare/farmcare02.jpg',
    alt: '방역 이미지 8',
  },
  {
    src: '/images/farmcare/farmcare03.jpg',
    alt: '방역 이미지 9',
  },
  {
    src: '/images/farmcare/farmcare04.jpg',
    alt: '방역 이미지 10',
  },
  {
    src: '/images/farmcare/farmcare05.jpg',
    alt: '방역 이미지 11',
  },
  {
    src: '/images/farmcare/farmcare06.jpg',
    alt: '방역 이미지 11',
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
          <p className='mt-4 text-lg md:text-3xl mx-auto text-shadow-lg font-medium'>
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
