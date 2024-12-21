'use client';
import { EffectCoverflow } from 'swiper/modules';
import {
  SkillContainer,
  StyledSwiper,
  SkillName,
  SkillStacks,
  SkillDescription,
} from './style';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';

type SkillItem = {
  id: string;
  stacks: string;
  description: string;
};

const SKILL_LIST: SkillItem[] = [
  {
    id: 'Core Technologies',
    stacks: 'HTML, CSS, JS, TS',
    description:
      '웹 표준을 준수하며 최신 CSS 기술을 활용합니다. 이벤트 처리에 능숙하고, 타입 선언으로 오류를 사전에 방지합니다.',
  },
  {
    id: 'Frameworks',
    stacks: 'Next, React',
    description:
      '프레임워크의 사용으로 코드를 모듈화하고 재활용합니다. React의 컴포넌트 기반 개발 방식을 사용합니다.',
  },
  {
    id: 'Package Management',
    stacks: 'Yarn',
    description:
      ' Yarn을 통해 의존성 관리 및 패키지 설치를 효율적으로 처리합니다. 빠른 설치 속도와 yarn.lock을 통한 일관된 의존성 환경을 유지하여, 프로젝트의 안정성과 협업 효율성을 높입니다.',
  },
  {
    id: 'Libraries',
    stacks: 'GSAP, Swiper',
    description:
      '인터랙션 관련 라이브러리 사용에 능숙하여 보다 감각적인 웹 구현이 가능합니다. GSAP를 활용한 애니메이션 최적화와 Swiper를 이용한 모바일 환경 최적화된 슬라이드 구현에 능합니다.',
  },
  {
    id: 'Version Control',
    stacks: 'Git, Bitbucket',
    description:
      '형상관리를 통해 안정적으로 코드를 통합하며, 코드 리뷰를 통해 더 나은 개발을 진행합니다. Git flow를 활용한 브랜치 전략을 이해합니다.',
  },
  {
    id: 'Collaboration Tools',
    stacks: 'Jira, Confluence, Teams',
    description:
      '협업 도구를 통해 팀 내 정보를 원활히 공유하고 효율적으로 소통합니다. Jira를 활용한 프로젝트 관리 및 스프린트 계획을 능숙하게 처리하며, Confluence를 통해 문서화 작업을 효율적으로 진행합니다.',
  },
  {
    id: 'Design Tools',
    stacks: 'Figma',
    description: '디자인 시안을 구현하기 위한 디자인 툴을 활용할 수 있습니다.',
  },
];

const SkillSection = () => {
  return (
    <SkillContainer>
      <div className='inner'>
        <StyledSwiper
          loop={true}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
          }}
          pagination={true}
          modules={[EffectCoverflow]}
        >
          {SKILL_LIST.map(({ id, stacks, description }) => {
            return (
              <SwiperSlide key={id}>
                <SkillName>{id}</SkillName>
                <SkillStacks>{stacks}</SkillStacks>
                <SkillDescription>{description}</SkillDescription>
              </SwiperSlide>
            );
          })}
        </StyledSwiper>
      </div>
    </SkillContainer>
  );
};

export default SkillSection;
