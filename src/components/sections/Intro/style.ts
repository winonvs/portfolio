import styled, { keyframes } from 'styled-components';

import bgExperienceImage from './images/bg-experience.jpg';

const LayoutSize = {
  inner: '90vw',
};

const moveBackground = keyframes`
  0% {
    background-position: 0 0;
  }
  33% {
    background-position: -7.5vw 0;
  }
  66% {
    background-position: -15vw 0;
  }
  100% {
    background-position: 0 0;
  }
`;

export const IntroContainer = styled.section`
  & .inner {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: ${LayoutSize.inner};
    margin: 0 auto;
    height: 100vh;
  }
`;

export const SummaryText = styled.p`
  font-size: 9vw;
  line-height: 1;
`;

export const ImageLooping = styled.span`
  display: inline-block;
  vertical-align: top;
  width: 7.5vw;
  height: 100%;
  background-image: url(${bgExperienceImage.src});
  background-size: ${7.5 * 3}vw 100%;
  border-radius: 30%;
  animation: ${moveBackground} 3s infinite steps(1) both;
`;

export const MainTitle = styled.h1`
  font-size: 14.7vw;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.07em;
`;

export const Description = styled.p`
  width: fit-content;
  margin-top: 15px;
  margin-left: auto;
  font-size: 2vw;
  line-height: 1;
  }
`;
