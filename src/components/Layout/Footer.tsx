const businessInfo = [
  { label: '사업자등록번호', value: '611-31-00110' },
  { label: '대표', value: '고수태' },
  { label: '주소', value: '충북 청주시 청원구 대성로 254번길 21' },
];

const contactInfo = [
  { label: '대표전화', value: '1544-2604', href: 'tel:1544-2604' },
  { label: 'TEL', value: '(043) 260-2640', href: 'tel:043-260-2640' },
  { label: 'FAX', value: '(043) 235-2640', href: 'tel:043-235-2640' },
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
          <div className='md:grid md:grid-cols-2 gap-8'>
            {/* --- 왼쪽 정보 (사업자 정보) --- */}
            <div className='mb-8 md:mb-0'>
              <h3 className='text-lg font-semibold mb-4 border-b border-gray-700 pb-2'>
                사업자 정보
              </h3>
              <dl className='text-sm text-gray-300 space-y-2'>
                {/* businessInfo 배열을 map으로 순회하여 동적으로 렌더링 */}
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

            {/* --- 오른쪽 정보 (연락처) --- */}
            <div>
              <h3 className='text-lg font-semibold mb-4 border-b border-gray-700 pb-2'>
                고객센터
              </h3>
              <dl className='text-sm text-gray-300 space-y-2'>
                {/* contactInfo 배열을 map으로 순회하여 동적으로 렌더링 */}
                {contactInfo.map((item) => (
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
              </dl>
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
