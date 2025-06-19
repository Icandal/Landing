import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ScrollButton = styled.button`
  position: fixed;
  bottom: 95px;
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
  animation: ${fadeIn} 0.3s ease;
  z-index: 1000;
  opacity: ${({ $visible }) => ($visible ? '1' : '0')};
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};

  &:hover {
    background-color: lightgrey;
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  }
`;

export const Arrow_up = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ScrollButton 
      onClick={scrollToTop}
      aria-label="Scroll to top"
      $visible={isVisible}
    >
      <FaArrowUp />
    </ScrollButton>
  );
};