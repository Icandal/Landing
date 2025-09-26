import { FaBars, FaXmark } from 'react-icons/fa6';
import styled from 'styled-components';

const NavButton = styled.button`
  position: fixed;
  top: 20px;
  right: 10px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(245, 247, 166, 1);
  box-shadow: 0 2px 5px rgba(1, 37, 68, 0.3);
  transition: all 0.2s ease;
  z-index: 1000;
  font-size: 1.2rem;

  &:hover {
    background-color: rgb(221, 225, 2);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(1, 37, 68, 0.1);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    top: 15px;
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    top: 10px;
    right: 8px;
    font-size: 1rem;
  }
`;

export const Navigation_btn = ({ onClick, isVisible }) => {
  return (
    <NavButton 
      onClick={onClick}
      aria-label={isVisible ? "Close menu" : "Open menu"}
    >
      {!isVisible ? <FaBars /> : <FaXmark />}
    </NavButton>
  );
}