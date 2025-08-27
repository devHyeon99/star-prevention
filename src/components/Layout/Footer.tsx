import Image from 'next/image'; // Image 컴포넌트를 사용하기 위해 import 합니다.

const businessInfo = [
  { label: '사업자등록번호', value: '611-31-00110' },
  { label: '통신판매신고번호', value: '20충북청주2721' },
  { label: '대표', value: '고수태' },
  { label: '주소', value: '충북 청주시 청원구 대성로 254번길 21' },
];

const contactInfo = [
  { label: '대표전화', value: '1544-2604', href: 'tel:1544-2604' },
  { label: 'TEL', value: '(043) 260-2640', href: 'tel:043-260-2640' },
  { label: 'FAX', value: '(043) 235-2640' },
  { label: 'H.P', value: '010-7935-4949', href: 'tel:010-7935-4949' },
  {
    label: 'Email',
    value: 'rhtnxo@naver.com',
    href: 'mailto:rhtnxo@naver.com',
  },
];

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
      <div className='container mx-auto px-4'>
        <address className='not-italic'>
          {/* --- grid-cols-2를 grid-cols-3으로 변경 --- */}
          <div className='md:grid md:grid-cols-3 gap-8'>
            {/* --- 왼쪽 정보 (사업자 정보) --- */}
            <div className='mb-8 md:mb-0'>
              <h3 className='text-lg font-semibold mb-4 border-b border-gray-700 pb-2'>
                사업자 정보
              </h3>
              <dl className='text-sm text-gray-300 space-y-2'>
                {businessInfo.map((item) => (
                  <div className='flex' key={item.label}>
                    <dt className='font-semibold w-28 shrink-0'>
                      {item.label}
                    </dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* --- 가운데 정보 (연락처) --- */}
            <div className='mb-8 md:mb-0'>
              <h3 className='text-lg font-semibold mb-4 border-b border-gray-700 pb-2'>
                고객센터
              </h3>
              <dl className='text-gray-300'>
                <div className='flex items-center mb-4 gap-5'>
                  <dt className='font-semibold w-20 shrink-0 text-xl'>
                    대표전화
                  </dt>
                  <dd className='text-2xl font-bold text-white'>
                    <a href='tel:1544-2604' className='hover:underline'>
                      1544-2604
                    </a>
                  </dd>
                </div>

                <div className='space-y-2 text-sm'>
                  {contactInfo
                    .filter((item) => item.label !== '대표전화')
                    .map((item) => (
                      <div className='flex items-center' key={item.label}>
                        <dt className='font-semibold w-20 shrink-0'>
                          {item.label}
                        </dt>
                        <dd>
                          {item.href ? (
                            <a href={item.href} className='hover:underline'>
                              {item.value}
                            </a>
                          ) : (
                            item.value
                          )}
                        </dd>
                      </div>
                    ))}
                </div>
              </dl>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-4 border-b border-gray-700 pb-2'>
                멤버스존
              </h3>
              <div className='flex flex-col items-center w-30 md:w-30 md:items-start text-center md:text-left'>
                <Image
                  src='/og-image.jpg'
                  alt='스타방역공사 멤버스존 이미지'
                  width={200}
                  height={150}
                  className='rounded-xl shadow-lg w-full h-auto'
                  priority
                />
              </div>
            </div>
          </div>
        </address>
        <div className='text-center text-sm text-gray-500 pt-8 mt-8 border-t border-gray-700'>
          <p>Copyright © 스타방역공사. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
