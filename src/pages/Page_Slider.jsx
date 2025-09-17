import { forwardRef } from 'react';
import { Slider } from '../components/Slider/Slider';
import './Page.css';
import styled from 'styled-components';

const PageTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color:  rgb(1, 37, 68);
  margin: 2rem 0 1rem 0;
  font-weight: bold;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 1.5rem 0 0.5rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin: 1rem 0 0.5rem 0;
  }
`;

const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Page_Slider = forwardRef((props, ref) => {
  return (
    <>
      <section ref={ref} className="Page Page--no-scroll">
        <ContentContainer>
          <PageTitle>Какие еще работы у меня были?</PageTitle>
          
          <SliderContainer>
            <Slider />
          </SliderContainer>
        </ContentContainer>  
      </section>
    </>
  )
});