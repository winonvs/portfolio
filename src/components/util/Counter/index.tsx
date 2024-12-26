import useCounter from '@/hooks/useCounter';
import React from 'react';
import styled from 'styled-components';

const CountElement = styled.span`
  display: inline-block;
  vertical-align: top;
`;

type CounterProps = {
  start: number;
  end: number;
  duration?: number;
};

const Counter = ({ start, end, duration = 2000 }: CounterProps) => {
  const count = useCounter({ start, end, duration });

  return <CountElement>{count}</CountElement>;
};

export default Counter;
