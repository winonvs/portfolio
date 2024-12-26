import { useState, useEffect } from 'react';

type Counter = {
  start: number;
  end: number;
  duration: number;
};

const useCounter = ({ start, end, duration = 2000 }: Counter) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const increment = (end - start) / (duration / 10);
    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (
        (increment > 0 && current >= end) ||
        (increment < 0 && current <= end)
      ) {
        current = end;
        clearInterval(timer);
      }
      setCount(Math.round(current));
    }, 10);

    return () => clearInterval(timer);
  }, [start, end, duration]);

  return count;
};

export default useCounter;
