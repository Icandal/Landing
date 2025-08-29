import styled from 'styled-components';
import { Circled_image } from './Circled_image';

const Wrapper_inactive = styled.section`
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  flex-shrink: 0;

  ${Circled_image} {
    width: 7rem !important;
    height: 7rem !important;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: scale(1.2);
    ${Circled_image} {
      box-shadow: 0 4px 8px 0 rgb(246, 254, 8);
    }
  }

  // Мобильная версия
  @media (max-width: 768px) {
    margin: 0.4rem;
    
    ${Circled_image} {
      width: 5.5rem !important;
      height: 5.5rem !important;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  // Маленькие мобильные устройства
  @media (max-width: 480px) {
    margin: 0.3rem;
    
    ${Circled_image} {
      width: 4.5rem !important;
      height: 4.5rem !important;
    }

    &:hover {
      transform: scale(1.05);
    }
  }

  // Очень маленькие экраны
  @media (max-width: 360px) {
    
    ${Circled_image} {
      width: 3rem !important;
      height: 3rem !important;
    }
  }
`;

export const Card_small = ({ imageRef, Cards_name, index, WebPImage, isActive }) => {

  return (
    <Wrapper_inactive className={isActive ? 'active' : ''}>
      <picture>
        <source srcSet={WebPImage} type='image/webp' />
        <source srcSet={imageRef} type='image/png' />
        <Circled_image 
          src={imageRef} 
          alt={Cards_name} 
          loading="lazy" 
          style={isActive ? { 
            boxShadow: '0 4px 12px 0 rgba(246, 254, 8, 0.8)',
            border: '2px solid rgb(246, 254, 8)'
          } : {}}
        />
      </picture>
    </Wrapper_inactive>
  );
};