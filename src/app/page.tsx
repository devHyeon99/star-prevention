import IntroduceSection from '@/components/Section/IntroduceSection';
import FarmCareSection from '@/components/Section/FarmCareSection';
import ConsultingSection from '@/components/Section/ConsultingSection';

export default function Home() {
  return (
    <>
      {/* --- 섹션 1: Hero --- */}
      <IntroduceSection />

      {/* --- 섹션 2: 농장관리 --- */}
      <FarmCareSection />

      {/* --- 섹션 3: 컨설팅 --- */}
      <ConsultingSection />
    </>
  );
}
