'use client';
import {
  IntroContainer,
  MainTitle,
  SummaryText,
  ImageLooping,
  Description,
} from './style';

const IntroSection = () => {
  return (
    <IntroContainer>
      <div className='inner'>
        <SummaryText>
          감각으로 경험
          <ImageLooping />을 채우다
        </SummaryText>
        <MainTitle>WIN ON VALUE</MainTitle>
        <Description>
          사용자 경험을 가치 중심으로 설계하며, 더 나은 결과로 이어지는 여정을
          추구합니다.
        </Description>
      </div>
    </IntroContainer>
  );
};

export default IntroSection;
