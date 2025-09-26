import styled from 'styled-components';
import { Button } from './ButtonsAndPanels/Button';
import { useState } from 'react';
import { DetailedProductDesc } from './DetailedProductDesc';
import { ShortProductDesc } from './ShortProductDesc';
import Lizzard_first from '../assets/Photos/DESC/Lizzard_raw.png';
import WEBLizzard_first from '../assets/Photos/DESC//WEBP/Lizzard_raw.webp';
import Lizzard_second from '../assets/Photos/DESC/Components_for_work.png';
import WEBLizzard_second from '../assets/Photos/DESC//WEBP/Components_for_work.webp';
import Lizzard_third from '../assets/Photos/DESC/Lizzard_prepared.png';
import WEBLizzard_third from '../assets/Photos/DESC//WEBP/Lizzard_prepared.webp';

const PageTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: rgb(1, 37, 68);
  margin: 2rem 0 1rem 0;
  font-weight: bold;
  line-height: 1.2;
  
  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 1.5rem 0 0.8rem 0;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin: 1rem 0 0.5rem 0;
    padding: 0 0.5rem;
  }
`;

const Wrapper = styled.section`
  border: none;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 8px 0 rgba(1, 37, 68,0.2);
  width: 65vw;
  min-height: ${({ $isOpen }) => ($isOpen ? "450px" : "350px")};
  transition: min-height 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 0 1rem 1rem;

  @media (max-width: 1024px) {
    width: 80vw;
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 90vw;
    padding: 1.2rem;
    min-height: ${({ $isOpen }) => ($isOpen ? "400px" : "300px")};
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    width: 95vw;
    padding: 1rem;
    min-height: ${({ $isOpen }) => ($isOpen ? "350px" : "250px")};
    gap: 0.6rem;
    border-radius: 6px;
  }
`;

const DescImage = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 16px;
  object-fit: cover;
  display: block;
  box-shadow: 0 4px 8px 0 rgba(1, 37, 68,0.2);
  flex-shrink: 0;
  
  @media (max-width: 1024px) {
    width: 9rem;
    height: 9rem;
  }

  @media (max-width: 768px) {
    width: 8rem;
    height: 8rem;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    width: 7rem;
    height: 7rem;
    border-radius: 10px;
  }
`;

const ImageWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;

  @media (max-width: 1440px) {
    gap: 2.5rem;
  }

  @media (max-width: 1200px) {
    gap: 2rem;
  }

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    justify-content: flex-start;
    overflow-x: auto;
    padding: 1rem;
    margin: 0 -1rem;
    scroll-snap-type: x mandatory;
    
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
    padding: 0.5rem;
    margin: 0 -0.5rem;
  }
`;

const ImageContainer = styled.picture`
  display: flex;
  scroll-snap-align: center;
  
  @media (max-width: 768px) {
    &:first-child {
      margin-left: 1rem;
    }
    &:last-child {
      margin-right: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    &:first-child {
      margin-left: 0.5rem;
    }
    &:last-child {
      margin-right: 0.5rem;
    }
  }
`;

const DescriptionContainer = styled.article`
  overflow: hidden;
  max-height: ${({ $isOpen }) => ($isOpen ? "500px" : "0")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  transition: all 0.3s ease;
  width: 100%;

  @media (max-width: 768px) {
    max-height: ${({ $isOpen }) => ($isOpen ? "400px" : "0")};
  }

  @media (max-width: 480px) {
    max-height: ${({ $isOpen }) => ($isOpen ? "350px" : "0")};
  }
`;

const MobileScrollHint = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    text-align: center;
    color: #666;
    font-size: 0.8rem;
    margin-top: 0.5rem;
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 0 0.5rem;
  }
`;

export const Card_big = () => {
  const [isOpen, setOpen] = useState(false);
  const Card_name = 'Процесс создания влажного или сухого биологического препарата сложнее и дольше, чем может показаться. Для того, чтобы запечатлеть в экспонате жизнь и остановить смерть недостаточно спирта или формалина.'

  const handleOpener = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <PageTitle>Как готовятся мои работы?</PageTitle>
      <Wrapper $isOpen={isOpen}>
        <ImageWrapper>
          <ImageContainer>
            <source srcSet={WEBLizzard_first} type='image/webp' />
            <source srcSet={Lizzard_first} type='image/png' />
            <DescImage src={Lizzard_first} alt='Lizzard image' loading="lazy" />
          </ImageContainer>
          <ImageContainer>
            <source srcSet={WEBLizzard_second} type='image/webp' />
            <source srcSet={Lizzard_second} type='image/png' />
            <DescImage src={Lizzard_second} alt='Components for work image' loading="lazy" />
          </ImageContainer>
          <ImageContainer>
            <source srcSet={WEBLizzard_third} type='image/webp' />
            <source srcSet={Lizzard_third} type='image/png' />
            <DescImage src={Lizzard_third} alt='Prepared lizzard image' loading="lazy" />
          </ImageContainer>
        </ImageWrapper>
        <ShortProductDesc Cards_name={Card_name}/>
        <DescriptionContainer $isOpen={isOpen}>
          <DetailedProductDesc />
        </DescriptionContainer>
        <Button onClick={handleOpener}>
          {isOpen ? 'Скрыть' : 'Подробнее'}
        </Button>
      </Wrapper>
    </>
  );
};