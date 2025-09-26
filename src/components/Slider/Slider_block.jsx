import { useState, useEffect } from 'react';
import styled from 'styled-components';

const BlockContainerWrapper = styled.div`
  position: relative;
  margin: 2rem 4px;
  height: 500px;
  width: ${({ $isActive }) => ($isActive ? '900px' : '50px')};
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  box-shadow: ${({ $hasShadow }) => ($hasShadow ? '0 4px 8px 0 rgba(1, 37, 68,0.2)' : 'none')};
  transition: all 0.3s ease, box-shadow 0.5s ease;
  display: flex;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    height: 400px;
    width: ${({ $isActive }) => ($isActive ? '700px' : '40px')};
  }

  @media (max-width: 768px) {
    height: 350px;
    width: ${({ $isActive }) => ($isActive ? '85vw' : '30px')};
    margin: 1.5rem 3px;
  }

  @media (max-width: 480px) {
    height: 300px;
    width: ${({ $isActive }) => ($isActive ? '90vw' : '20px')};
    margin: 1rem 2px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  display: block;
  transition: all 0.3s ease;
  border-radius: 8px;
  
  // Стили для НЕактивного состояния (свернутый блок)
  ${({ $isActive }) => !$isActive && `
    height: 63vh;
    width: auto;
  `}
  
  // Стили для активного состояния (развернутый блок)
  ${({ $isActive }) => $isActive && `
    width: auto;
    height: 63vh;
    max-width: 100%;
    object-fit: contain;
    object-position: center center;
  `}
  
  ${BlockContainerWrapper}:hover & {
    transform: ${({ $isActive }) => $isActive ? 'scale(1.02)' : 'none'};
  }

  @media (max-width: 1024px) {
    ${({ $isActive }) => $isActive && `
      height: 55vh;
    `}
  }

  @media (max-width: 768px) {
    ${({ $isActive }) => $isActive && `
      height: 50vh;
    `}
  }

  @media (max-width: 480px) {
    ${({ $isActive }) => $isActive && `
      height: 45vh;
    `}
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(247, 250, 121, 1);
  mix-blend-mode: multiply;
  opacity: ${({ $isActive }) => ($isActive ? 0 : 1)};
  transition: opacity 0.3s ease;
  
  ${BlockContainerWrapper}:hover & {
    opacity: 0;
  }

  @media (max-width: 480px) {
    background-color: rgba(247, 250, 121, 1);
  }
`;

export const Slider_block = ({ isActive, onClick, imageRef = null, Alt, webpimageRef}) => {
  const [hasShadow, setHasShadow] = useState(true);

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setTimeout(() => {
        setHasShadow(false);
      }, 1000);
    } else {
      setHasShadow(true);
    }
    return () => clearTimeout(timer);
  }, [isActive]);

  return (
    <BlockContainerWrapper 
      $isActive={isActive} 
      $hasShadow={hasShadow}
      onClick={onClick}>
      <ImageContainer>
        <picture>
          <source srcSet={webpimageRef} type='image/webp' />
          <source srcSet={imageRef} type='image/png' />
          <Image 
            src={imageRef} 
            loading="lazy" 
            alt={Alt}
            $isActive={isActive}
          />
        </picture>
      </ImageContainer>
      <Overlay $isActive={isActive} />
    </BlockContainerWrapper>
  );
};