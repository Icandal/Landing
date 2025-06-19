import styled from 'styled-components';
import { Button } from './Button';
import { useState } from 'react';
import { DetailedProductDesc } from './DetailedProductDesc';
import { ShortProductDesc } from './ShortProductDesc';
import { Circled_image } from './Circled_image';
import icecreameImage from '../assets/Icecreame.png';

const Wrapper = styled.section`
  border: none;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  width: 250px;
  min-height: ${({ $isOpen }) => ($isOpen ? "450px" : "350px")};
  transition: min-height 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const DescriptionContainer = styled.article`
  overflow: hidden;
  max-height: ${({ $isOpen }) => ($isOpen ? "500px" : "0")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  transition: all 0.3s ease;
`;

export const Card_big = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpener = () => {
    setOpen(!isOpen);
  };

  return (
    <Wrapper>
      <Circled_image src={icecreameImage} alt='Icecreame' />
      <ShortProductDesc />
      <DescriptionContainer $isOpen={isOpen}>
        <DetailedProductDesc />
      </DescriptionContainer>
      <Button onClick={handleOpener}>
        {isOpen ? 'Скрыть' : 'Развернуть'}
      </Button>
    </Wrapper>
  );
};