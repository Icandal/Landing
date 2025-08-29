import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ScrollButton = styled.button`
  position: fixed;
  bottom: 80px;
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
  box-shadow: 0 2px 5px rgba(1, 37, 68, 0.3);
  transition: all 0.2s ease;
  animation: ${fadeIn} 0.2s ease;
  z-index: 1000;
  opacity: ${({ $visible }) => ($visible ? '1' : '0')};
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
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
    bottom: 70px;
    right: 8px;
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    bottom: 60px;
    right: 6px;
    font-size: 1rem;
  }
`;

export const Arrow_up = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button earlier on mobile for better UX
      const threshold = window.innerWidth < 768 ? 100 : 150;
      if (window.pageYOffset > threshold) {
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