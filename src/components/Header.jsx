import styled from "styled-components";

const HeaderEl = styled.header`
  margin: 1rem auto;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 2rem;
  width: 85vw;
  color: black;
  background-color: white;
  font-size: 1.2rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Header = () => {
    return (
      <HeaderEl>
        <Wrapper>
          Название вашей компании
        </Wrapper>
      </HeaderEl>
    )
}