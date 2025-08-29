import styled from 'styled-components';
import { Button } from './Button';
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
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 1.5rem 0 0.5rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin: 1rem 0 0.5rem 0;
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
`;

const DescImage = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 16px;
  object-fit: cover;
  display: block;
  box-shadow: 0 4px 8px 0 rgba(1, 37, 68,0.2);
`;

const ImageWrapper = styled.section`
display: flex;
flex-direction: row;
align-items: center;
gap: 10rem;
`;

const DescriptionContainer = styled.article`
  overflow: hidden;
  max-height: ${({ $isOpen }) => ($isOpen ? "500px" : "0")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  transition: all 0.3s ease;
`;

export const Card_big = () => {
  const [isOpen, setOpen] = useState(false);
  const Card_name = 'Процесс создания влажного или сухого биологического препарата сложнее и дольше, чем может показаться. Для того, чтобы запечатлеть в экспонате жизнь и остановить смерть недостаточно спирта или формалина.'

  const handleOpener = () => {
    setOpen(!isOpen);
  };

  return (
    <>
    <PageTitle>Как это делается?</PageTitle>
    <Wrapper>
      <ImageWrapper>
      <picture>
      <source srcSet={WEBLizzard_first} type='imgae/webp' />
      <source srcSet={Lizzard_first} type='imgae/png' />
      <DescImage src={Lizzard_first} alt='Lizzard image' loading="lazy" />``
      </picture>
      <picture>
      <source srcSet={WEBLizzard_second} type='imgae/webp' />
      <source srcSet={Lizzard_second} type='imgae/png' />
      <DescImage src={Lizzard_second} alt='Components for work image' loading="lazy" />
      </picture>
      <picture>
      <source srcSet={WEBLizzard_third} type='imgae/webp' />
      <source srcSet={Lizzard_third} type='imgae/png' />
      <DescImage src={Lizzard_third} alt='Prepared lizzard image' loading="lazy" />
      </picture>
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