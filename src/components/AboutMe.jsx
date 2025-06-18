import { Circled_image } from './Circled_image';
import styled from "styled-components";
import icecreameImage from '../assets/Icecreame.png';

const Wrapper = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  font-size: 20px;
  border: none;
  border-radius: 8px;
  padding: 5rem;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  min-width: 20rem;
  min-height: 10rem;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const StyledCircledImage = styled(Circled_image)`
  margin-bottom: -75px;
  z-index: 2;
`;

export const AboutMe = () => {
    return (
        <Wrapper>
        <StyledCircledImage src={icecreameImage} alt='Icecreame'/>
        <Container>
            Some text
        </Container>
        </Wrapper>
    )
}