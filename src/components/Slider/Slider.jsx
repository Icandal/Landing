import styled from "styled-components";
import { Slider_block } from "./Slider_block";
import { useState, useEffect, useRef } from "react";
import Scorp from '../../assets/Sliders_assets/image.png';
import Skull from '../../assets/Sliders_assets/Skull.png';
import Vulpes from '../../assets/Sliders_assets/Vulpes_bottles.png';
import Ursus from '../../assets/Sliders_assets/Ursus.png';
import Lizzard from '../../assets/Sliders_assets/Lizzard.png';
import Spider from '../../assets/Sliders_assets/Spider.png';
import Snake from '../../assets/Sliders_assets/Snake.png';
import WEBScorp from '../../assets/Sliders_assets/WEBP/image.webp';
import WEBSkull from '../../assets/Sliders_assets/WEBP/Skull.webp';
import WEBVulpes from '../../assets/Sliders_assets/WEBP/Vulpes_bottles.webp';
import WEBUrsus from '../../assets/Sliders_assets/WEBP/Ursus.webp';
import WEBLizzard from '../../assets/Sliders_assets/WEBP/Lizzard.webp';
import WEBSpider from '../../assets/Sliders_assets/WEBP/Spider.webp';
import WEBSnake from '../../assets/Sliders_assets/WEBP/Snake.webp';

const Wrapper = styled.section`
  margin: auto 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 550px;

  @media (max-width: 768px) {
    overflow-x: auto;
    height: 400px;
    
    // Скрыть scrollbar
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 7);
    resetTimer();
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(goToNextSlide, 10000);
  };

  const handleClick = (index) => {
    setActiveIndex(index);
    resetTimer();
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <Wrapper>
        <Slider_block
          key={0}
          isActive={activeIndex === 0}
          onClick={() => handleClick(0)}
          webpimageRef={WEBScorp}
          imageRef={Scorp}
          Alt='Scorpion image'
        />
        <Slider_block
          key={1}
          isActive={activeIndex === 1}
          onClick={() => handleClick(1)}
          webpimageRef={WEBSkull}
          imageRef={Skull}
          Alt='Skull image'
        />
        <Slider_block
          key={2}
          isActive={activeIndex === 2}
          onClick={() => handleClick(2)}
          webpimageRef={WEBVulpes}
          imageRef={Vulpes}
          Alt='Image of vulpes heart'
        />
        <Slider_block
          key={3}
          isActive={activeIndex === 3}
          onClick={() => handleClick(3)}
          webpimageRef={WEBUrsus}
          imageRef={Ursus}
          Alt='Image of ursus testiculs'
        />
        <Slider_block
          key={4}
          isActive={activeIndex === 4}
          onClick={() => handleClick(4)}
          webpimageRef={WEBLizzard}
          imageRef={Lizzard}
          Alt='Image of lizzard'
        />
        <Slider_block
          key={5}
          isActive={activeIndex === 5}
          onClick={() => handleClick(5)}
          webpimageRef={WEBSpider}
          imageRef={Spider}
          Alt='Image of spider'
        />
        <Slider_block
          key={6}
          isActive={activeIndex === 6}
          onClick={() => handleClick(6)}
          webpimageRef={WEBSnake}
          imageRef={Snake}
          Alt='Image of snake'
        />
    </Wrapper>
  );
};