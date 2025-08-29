import styled from 'styled-components';
import { Circled_image } from './Circled_image';

const Wrapper_inactive = styled.section`
  cursor: pointer;
  border: none;
  // box-shadow: 0 4px 8px 0 rgba(1, 37, 68,0.2);
  margin: 1rem auto;

  display: flex;
  flex-fllow: row nowrap;
  flex-direction: row;
  align-items: flex-end;
  transition: all 0.3s ease;

${Circled_image} {
  width: 7rem !important;
  height: 7rem !important;
}

&:hover {
transform: scale(1.2);

${Circled_image}{
box-shadow: 0 4px 8px 0 rgb(246, 254, 8);
}
}
`;

export const Card_small = ({ imageRef, Cards_name, index, WebPImage}) => {

  return (
    <Wrapper_inactive>
      <picture>
      <source srcSet={WebPImage} type='image/webp' />
      <source srcSet={imageRef} type='image/png' />
      <Circled_image src={imageRef} alt={Cards_name} loading="lazy" />
      </picture>
    </Wrapper_inactive>
  );
};