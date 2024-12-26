import { LayoutSize } from '@/styles/constants/layout';
import styled from 'styled-components';

export const CareerContainer = styled.section`
  max-width: ${LayoutSize.inner};
  margin: 7vw auto;
`;

export const CareerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 8vw;
`;

export const CareerList = styled.div`
  & summary {
    display: flex;
    justify-content: space-between;
    padding: 1em 0;
    border-bottom: 1px solid black;
    font-size: 4vw;

    &::marker {
      display: none;
    }
  }
`;
