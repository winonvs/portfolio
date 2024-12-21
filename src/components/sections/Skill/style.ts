import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const SkillContainer = styled.section`
  overflow-x: clip;
`;

export const SkillName = styled.h2`
  font-size: 1.5vw;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.01em;
`;
export const SkillStacks = styled.h3`
  margin: 0.5vw 0 1.5vw;
  font-size: 3vw;
  font-weight: 600;
  letter-spacing: -0.06em;
`;

export const SkillDescription = styled.p`
  width: 50%;
  margin: 0 auto;
  font-size: 1vw;
  line-height: 1.5;
  word-break: keep-all;
`;

export const StyledSwiper = styled(Swiper)`
  overflow: visible;

  & .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50vw;
    aspect-ratio: 16/9;
    background: white;
    text-align: center;
    text-transform: uppercase;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
    border-radius: 50px;

    & .swiper-slide-shadow-left,
    .swiper-slide-shadow-right {
      display: none;
    }
  }
`;
