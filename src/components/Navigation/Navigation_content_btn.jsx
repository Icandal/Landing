import styled from 'styled-components';

export const NavContentBtn = styled.button`
  width: 3rem;
  height: 3rem;
  color: black;
  background-color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: lightgrey;
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  }
`;