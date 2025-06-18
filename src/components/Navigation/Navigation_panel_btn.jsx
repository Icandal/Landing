import { FaBars, FaXmark } from 'react-icons/fa6';
import styled from 'styled-components';

const NavButton = styled.button`
  position: fixed;
  top: 30px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: black;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    background-color: lightgrey;
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  }
`;

export const Navigation_btn = ({ onClick, isVisible }) => {

  return (
    <NavButton onClick={onClick}>
      {!isVisible ? <FaBars /> : <FaXmark />}
    </NavButton>
  );
}