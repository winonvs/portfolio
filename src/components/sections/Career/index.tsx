'use client';
import Counter from '@/components/util/Counter';
import { CareerContainer, CareerTitle, CareerList } from './style';

const CAREER_LIST = [
  {
    company: 'MIDAS IT',
    description: '업무 내용 블라블라',
    date: '2022.04 - 재직중',
  },
  {
    company: 'NETIVE',
    description: '업무 내용 블라블라',
    date: '2018.08 - 2021.11',
  },
];

const CareerSection = () => {
  return (
    <CareerContainer>
      <CareerTitle className='career-title'>
        <h2>CAREER</h2>
        <Counter start={1} end={8} duration={500} />
      </CareerTitle>
      <CareerList className='career-list'>
        {CAREER_LIST.map(({ company, description, date }) => {
          return (
            <details key={company}>
              <summary>
                <h3>{company}</h3>
                <span>{date}</span>
              </summary>
              <p>{description}</p>
            </details>
          );
        })}
      </CareerList>
    </CareerContainer>
  );
};

export default CareerSection;
