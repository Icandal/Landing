import styled from 'styled-components';
import { Circled_image } from './Circled_image';
import icecreameImage from '../assets/Icecreame.png'

const Wrapper = styled.div`
  border: none;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  min-width: 150px;
  max-width: 250px;
  max-heigth: 250px;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;

${Circled_image} {
  width: 7rem !important;
  height: 7rem !important;
}

&:hover {
transform: scale(1.2);
}
`;




export const Card_small = () => {

  return (
    <Wrapper>
      <Circled_image src={icecreameImage} alt='Icecreame' />
      <p>Sample text</p>
    </Wrapper>
  );
};