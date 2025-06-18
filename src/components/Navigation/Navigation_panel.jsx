import styled from "styled-components";
import { Navigation_btn } from "./Navigation_panel_btn";
import { useState } from "react";
import { Nav_to_home } from "./Navigate_to_home";
import { Nav_to_about } from "./Navigate_to_about";
import { Nav_to_descs } from "./Navigate_to_descs";
import { Nav_to_cards } from "./Navigate_to_cards";
import { Nav_to_slider } from "./Navigate_to_slider";

const Container = styled.div`
  position: fixed;
  right: 0.4rem;
  bottom: 20vh;
  border-radius: 16px;
  width: 4rem;
  height: 30vw;
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  z-index: 1000;
  overflow: hidden;
  opacity: ${({ $isVisible }) => ($isVisible ? "1" : "0")};
  transform: ${({ $isVisible }) => ($isVisible ? "translateX(0)" : "translateX(100%)")};
  transition: all 0.3s ease;

  display: flex;
  flex-direction: column;

  
`;

export const Navigation_panel = ({ homeRef, aboutRef, descsRef, cardsRef, sliderRef}) => {
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
    <>
      <Navigation_btn onClick={handleToggle} isVisible={isVisible}/>
      <Container $isVisible={isVisible}>
        <Nav_to_home onClick={() => handleScroll(homeRef)} />
        <Nav_to_about onClick={() => handleScroll(aboutRef)} />
        <Nav_to_descs onClick={() => handleScroll(descsRef)} />
        <Nav_to_cards onClick={() => handleScroll(cardsRef)} />
        <Nav_to_slider onClick={() => handleScroll(sliderRef)} />
      </Container>
    </>
  );
};