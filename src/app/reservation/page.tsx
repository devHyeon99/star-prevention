import Image from 'next/image';
import { Phone, Clock, Mail } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';

// 예약방법 페이지
const ReservationPage = () => {
  return (
    <main>
      {/* --- 1. 히어로 섹션 --- */}
      <section className='relative h-[400px] w-full flex items-center justify-center text-center text-white'>
        <div className='absolute inset-0 bg-black/60 z-10' />
        <Image
          src='/images/reservation-bg.jpg'
          alt='상담원이 고객과 통화하는 모습'
          fill
          className='object-cover'
          priority
        />
        <div className='relative z-20 container px-4'>
          <h1 className='text-4xl md:text-6xl font-extrabold tracking-tight'>
            상담 안내
          </h1>
          <p className='mt-4 text-lg md:text-xl max-w-3xl mx-auto'>
            전문가의 도움이 필요하신가요?
            <br />
            상담 전화를 통해 농장관리 솔루션을 제안받을 수 있습니다.
          </p>
        </div>
      </section>

      {/* --- 2. 예약 절차 안내 섹션 --- */}
      <section className='flex justify-center py-16 md:py-24'>
        <div className='container'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold'>서비스 예약 절차</h2>
            <p className='mt-3 text-muted-foreground md:text-xl'>
              문의 접수부터 사후 관리까지, 체계적인 프로세스로 진행됩니다.
            </p>
          </div>
          <div className='grid md:grid-cols-4 gap-8 text-center'>
            <div className='flex flex-col items-center'>
              <div className='text-4xl font-bold text-blue-600/30 mb-2'>01</div>
              <h3 className='text-xl md:text-2xl font-semibold mb-2'>
                상담 신청
              </h3>
              <p className='text-muted-foreground text-sm md:text-xl'>
                온라인 또는 유선을 통해 문의를 접수합니다.
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='text-4xl font-bold text-blue-600/30 mb-2'>02</div>
              <h3 className='text-xl md:text-2xl font-semibold mb-2'>
                현장 진단
              </h3>
              <p className='text-muted-foreground text-sm md:text-xl'>
                전문가가 방문하여 문제점을 정밀 분석합니다.
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='text-4xl font-bold text-blue-600/30 mb-2'>03</div>
              <h3 className='text-xl md:text-2xl font-semibold mb-2'>
                맞춤 견적
              </h3>
              <p className='text-muted-foreground text-sm md:text-xl'>
                진단 결과에 따른 최적의 솔루션과 견적을 제안합니다.
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='text-4xl font-bold text-blue-600/30 mb-2'>04</div>
              <h3 className='text-xl md:text-2xl font-semibold mb-2'>
                서비스 진행
              </h3>
              <p className='text-muted-foreground text-sm md:text-xl'>
                계약 후, 계획에 따라 전문 방역 서비스를 실시합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. 문의 폼 및 연락처 정보 섹션 --- */}
      <section className='flex justify-center py-16 md:py-24 bg-muted/40 mx-4'>
        <Card className='flex-1 md:max-w-150'>
          <CardContent className='pt-6'>
            <h3 className='text-2xl font-semibold mb-6'>유선 상담 안내</h3>
            <div className='space-y-4 text-lg'>
              <div className='flex items-center'>
                <Phone className='size-6 mr-4 text-blue-600' />
                <a href='tel:1544-2604' className='hover:underline'>
                  1544-2604
                </a>
              </div>
              <div className='flex items-center'>
                <Mail className='size-6 mr-4 text-blue-600' />
                <a href='mailto:rhtnxo@naver.com' className='hover:underline'>
                  rhtnxo@naver.com
                </a>
              </div>
              <div className='flex items-start'>
                <Clock className='size-6 mr-4 mt-1 text-blue-600' />
                <div>
                  <p>평일: 09:00 - 18:00</p>
                  <p className='text-sm text-muted-foreground'>
                    (주말 및 공휴일 휴무)
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* --- 4. 자주 묻는 질문(FAQ) 섹션 --- */}
      <section className='py-16 md:py-24 mx-4'>
        <div className='container max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold'>자주 묻는 질문</h2>
          </div>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-1'>
              <AccordionTrigger className='md:text-2xl'>
                견적 비용이 발생하나요?
              </AccordionTrigger>
              <AccordionContent className='md:text-xl text-muted-foreground'>
                아니요, 전문가의 현장 방문 진단 및 견적 제시는 무료로
                진행됩니다. 부담 없이 상담을 신청해주세요.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger className='md:text-2xl'>
                사용하는 약품은 가축에게 안전한가요?
              </AccordionTrigger>
              <AccordionContent className='md:text-xl text-muted-foreground'>
                네, 저희 스타방역공사는 식약처의 정식 승인을 받은 안전한
                약품만을 사용하며, 가축과 인체에 미치는 영향을 최우선으로
                고려하여 작업합니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger className='md:text-2xl'>
                방역 작업 시간은 얼마나 걸리나요?
              </AccordionTrigger>
              <AccordionContent className='md:text-xl text-muted-foreground'>
                농장의 규모와 문제의 심각성에 따라 상이합니다. 현장 진단 후
                정확한 예상 소요 시간을 안내해 드립니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4'>
              <AccordionTrigger className='md:text-2xl'>
                주말에도 서비스가 가능한가요?
              </AccordionTrigger>
              <AccordionContent className='md:text-xl text-muted-foreground'>
                네, 고객님의 일정에 최대한 맞춰드리기 위해 사전 협의를 통해 주말
                및 공휴일 작업도 가능합니다.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </main>
  );
};

export default ReservationPage;
