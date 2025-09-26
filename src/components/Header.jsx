import styled from "styled-components";

const HeaderEl = styled.header`
  margin: 1rem auto;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(1, 37, 68,0.2);
  padding: 2rem;
  width: 85vw;
  color:  rgb(1, 37, 68);;
  // background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 244, 96, 0.51));
  font-size: 1.4rem;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

const Wrapper = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Header = () => {
    return (
      <HeaderEl>
        <Wrapper>
          Мастерская таксидермии Жанны
        </Wrapper>
      </HeaderEl>
    )
}