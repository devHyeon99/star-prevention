import Image from 'next/image';
import { ShieldCheck, Leaf, ClipboardCheck, FileCheck } from 'lucide-react';

// 회사 메인 페이지
const Home = () => {
  return (
    <main>
      {/* --- 1. 메인 배너 섹션 --- */}
      <section className='relative h-[400px] w-full flex items-center justify-center text-center text-white'>
        <div className='absolute inset-0 bg-black/60 z-10' />
        <Image
          src='/images/farmcarebg.jpg'
          alt='방역 배경 이미지'
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, 50vw'
          priority
        />
        <div className='relative z-20 container px-2'>
          <h1 className='text-4xl md:text-6xl font-extrabold tracking-tight'>
            스마트한 방역과 소독으로 <br className='md:hidden' /> 농장 경쟁력 UP
          </h1>
          <p className='mt-4 text-lg md:text-3xl max-w-3xl mx-auto text-shadow-lg font-medium'>
            농장의 쥐, 바퀴벌레, 해충 저희가 해결합니다.
          </p>
        </div>
      </section>

      {/* --- 2. 인사말 섹션 --- */}
      <section className='flex justify-center py-16 md:py-24'>
        <div className='container grid md:grid-cols-2 gap-12 items-center'>
          <div className='order-2 md:order-1'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center md:text-left'>
              방역 전문 솔루션으로 질병 예방
            </h2>
            <p className='px-4 md:px-0 text-muted-foreground leading-relaxed text-center md:text-left md:text-xl'>
              안녕하십니까, 스타방역공사를 방문해 주셔서 감사합니다.
              <br />
              저희 스타방역공사는 양돈농장 전문방역회사로 주로 농장 관리 및 소독
              서비스를 제공하고 있습니다.
            </p>
            <p className='px-4 md:px-0 mt-4 text-muted-foreground leading-relaxed text-center md:text-left md:text-xl'>
              환경 친화적인 소독방역 시스템을 사용하여 농장 및 시설의 안전하고
              청결한 환경을 유지하는데 중점을 두고 있습니다. 수년간의 경험과
              믿음 그리고 신뢰로 약속 드립니다.
            </p>
            <p className='mt-4 text-muted-foreground leading-relaxed text-center md:text-left md:text-xl'>
              - 스타방역공사 직원일동 -
            </p>
          </div>
          <div className='relative w-full h-80 md:h-96 rounded-lg overflow-hidden order-1 md:order-2'>
            <Image
              src='/images/introduce-bg02.jpg'
              alt='악수하는 비즈니스 파트너'
              fill
              sizes='(max-width: 768px) 100vw, 50vw'
              className='object-cover'
            />
          </div>
        </div>
      </section>

      {/* --- 3. 핵심 강점 섹션 --- */}
      <section className='flex justify-center py-16 md:py-24 bg-muted/60'>
        <div className='container'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold'>
              스타방역공사의 경쟁력
            </h2>
            <p className='px-3 mt-3 text-muted-foreground md:text-xl'>
              환경 친화적인 소독방역 시스템을 사용하여 농장및 시설의 안전하고
              청결한 환경을 유지하는데 중점을 두고 있습니다.
            </p>
          </div>
          <div className='grid md:grid-cols-4 gap-8'>
            {/* 강점 1 */}
            <div className='text-center mx-6 p-6 bg-background rounded-lg shadow-sm'>
              <ShieldCheck className='mx-auto size-12 text-blue-600 mb-4' />
              <h3 className='text-xl font-semibold mb-2'>전문 방역 시스템</h3>
              <p className='text-muted-foreground text-sm md:text-lg'>
                스타방역공사는 양돈농장 방역에 특화되어 있으며 쥐 바퀴벌레
                모든해충을 완벽한 박멸을 목표로 하고 있습니다.
              </p>
            </div>
            {/* 강점 2 */}
            <div className='text-center mx-6 p-6 bg-background rounded-lg shadow-sm'>
              <Leaf className='mx-auto size-12 text-green-600 mb-4' />
              <h3 className='text-xl font-semibold mb-2'>컨설팅</h3>
              <p className='text-muted-foreground text-sm md:text-lg'>
                농장에서 자체방역을 원하는 농가는 저희회사가 특화된 약품을
                보내드리고 있습니다.
              </p>
            </div>
            {/* 강점 3 */}
            <div className='text-center mx-6 p-6 bg-background rounded-lg shadow-sm'>
              <ClipboardCheck className='mx-auto size-12 text-gray-600 mb-4' />
              <h3 className='text-xl font-semibold mb-2'>철저한 사후 관리</h3>
              <p className='text-muted-foreground text-sm md:text-lg'>
                일회성 방역에 그치지 않고 주기적으로 월 1~2회 농장관리를
                해드립니다.
              </p>
            </div>
            <div className='text-center mx-6 p-6 bg-background rounded-lg shadow-sm'>
              <FileCheck className='mx-auto size-12 text-amber-500 mb-4' />
              <h3 className='text-xl font-semibold mb-2'>방역 소득 증명서</h3>
              <p className='text-muted-foreground text-sm md:text-lg'>
                방역 소득 증명서를 제공해드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. 오시는 길 섹션 --- */}
      <section className='flex justify-center py-16 md:py-24'>
        <div className='container'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold'>오시는 길</h2>
          </div>
          <div className='grid md:grid-cols-2 gap-8'>
            {/* TODO: 카카오맵 또는 구글맵 API를 사용하여 실제 지도를 여기에 삽입하세요. */}
            <div className='w-full px-4'>
              <a
                href='https://map.kakao.com/?urlX=610116.000000001&amp;urlY=875302.9999999981&amp;itemId=804828764&amp;q=%EC%8A%A4%ED%83%80%EB%B0%A9%EC%97%AD%EA%B3%B5%EC%82%AC&amp;srcid=804828764&amp;map_type=TYPE_MAP&amp;from=roughmap'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  className='map rounded-lg border'
                  src='http://t1.daumcdn.net/roughmap/imgmap/31410f76e062b5c4e62b94a65c171f622766064918749c47f05b5ede000be2b9'
                  alt='스타방역공사 지도'
                  width={600}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                  unoptimized
                />
              </a>
            </div>
            <div className='flex flex-col justify-start ml-4'>
              <p className='text-lg'>
                <strong className='w-20 inline-block'>주소</strong>충북 청주시
                청원구 대성로 254번길 21
              </p>
              <p className='text-lg mt-2'>
                <strong className='w-20 inline-block'>대표전화</strong>
                <a href='tel:1544-2604' className='hover:underline'>
                  1544-2604
                </a>
              </p>
              <p className='text-lg mt-2'>
                <strong className='w-20 inline-block'>이메일</strong>
                <a href='mailto:rhtnxo77@naver.com' className='hover:underline'>
                  rhtnxo77@naver.com
                </a>
              </p>
              <p className='text-lg mt-2'>
                <strong className='w-20 inline-block'>상담시간</strong>
                09:00 - 18:00
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
