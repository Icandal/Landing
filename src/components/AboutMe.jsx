import { Circled_image } from './Circled_image';
import styled from "styled-components";
import MyPhoto from '../assets/Photos/My_photo.png';
import MyWebPhoto from '../assets/Photos/WEBP/My_photo.webp'

const Wrapper = styled.section`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin: 1.5rem;
  }

  @media (max-width: 480px) {
    margin: 1rem;
  }
`;

const Container = styled.article`
  font-size: 24px;
  border: none;
  border-radius: 8px;
  padding: 5rem;
  box-shadow: 0 4px 8px 0 rgba(1, 37, 68, 0.2);
  max-width: 30rem;
  min-width: 20rem;
  min-height: 10rem;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 4rem 3rem;
    max-width: 25rem;
    min-width: 15rem;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding: 3.5rem 2rem;
    max-width: 100%;
    min-width: unset;
    width: 90%;
    margin: 0.5rem auto;
    line-height: 1.4;
  }
`;

const StyledCircledImage = styled(Circled_image)`
  margin-bottom: -75px;
  z-index: 3;

  @media (max-width: 768px) {
    margin-bottom: -60px;
    width: 120px;
    height: 120px;
  }

  @media (max-width: 480px) {
    margin-bottom: -50px;
    width: 100px;
    height: 100px;
  }
`;

export const AboutMe = () => {
  const My_Desc = 'Да-да! Именно это вы могли видеть в кунсткамере Петербурга или в музее Дарвина в Москве. Как и в любом другом антропологическом, зоологическом или биоэкологическом центре - в местах, где любят, ценят и исследуют Жизнь!'

  return (
    <Wrapper>
      <picture>
      <source srcSet={MyWebPhoto} type='image/webp' />
      <source srcSet={MyPhoto} type='inage/png' />
      <StyledCircledImage src={MyPhoto} loading='lazy' alt='My photo'/>
      </picture>
      <Container>
        {My_Desc}
      </Container>
    </Wrapper>
  )
}