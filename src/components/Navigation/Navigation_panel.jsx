import styled from "styled-components";
import { Navigation_btn } from "./Navigation_panel_btn";
import { useState } from "react";
import { Nav_to_home } from "./Navigate_to_home";
import { Nav_to_about } from "./Navigate_to_about";
import { Nav_to_descs } from "./Navigate_to_descs";
import { Nav_to_cards } from "./Navigate_to_cards";
import { Nav_to_slider } from "./Navigate_to_slider";
import { Nav_to_order } from "./Navigate_to_order";

const Container = styled.div`
  position: fixed;
  right: 0.4rem;
  bottom: 30vh;
  border-radius: 16px;
  width: 4rem;
  height: auto;
  max-height: 70vh;
  border: none;
  box-shadow: 0 4px 8px 0 rgba(1, 37, 68, 0.2);
  z-index: 1001;
  overflow: hidden;
  opacity: ${({ $isVisible }) => ($isVisible ? "1" : "0")};
  transform: ${({ $isVisible }) => ($isVisible ? "translateX(0)" : "translateX(100%)")};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  background-color: rgba(245, 247, 166, 1);
  gap: 0.5rem;
  padding: 0.5rem 0;

  @media (max-width: 768px) {
    width: 3.5rem;
    bottom: 30vh;
  }

  @media (max-width: 480px) {
    width: 3rem;
    bottom: 30vh;
    border-radius: 12px;
  }
`;

export const Navigation_panel = ({ homeRef, aboutRef, descsRef, cardsRef, sliderRef, orderRef}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    setIsVisible(false);
  };

  return (
    <nav>
      <Navigation_btn onClick={handleToggle} isVisible={isVisible}/>
      <Container $isVisible={isVisible}>
        <Nav_to_home onClick={() => handleScroll(homeRef)} />
        <Nav_to_about onClick={() => handleScroll(aboutRef)} />
        <Nav_to_descs onClick={() => handleScroll(descsRef)} />
        <Nav_to_cards onClick={() => handleScroll(cardsRef)} />
        <Nav_to_slider onClick={() => handleScroll(sliderRef)} />
        <Nav_to_order onClick={() => handleScroll(orderRef)} />
      </Container>
    </nav>
  );
};