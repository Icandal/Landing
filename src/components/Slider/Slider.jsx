import styled from "styled-components";
import { Slider_block } from "./Slider_block";
import { useState, useEffect, useRef } from "react";
import Scorp from '../../assets/Sliders_assets/image.png';
import Skull from '../../assets/Sliders_assets/Skull.png';

const Wrapper = styled.section`
  margin: auto 5rem;
  display: flex;
  justify-content: center;
  gap: 10px;
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
    timerRef.current = setTimeout(goToNextSlide, 5000);
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
          imageRef={Scorp}
        />
        <Slider_block
          key={1}
          isActive={activeIndex === 1}
          onClick={() => handleClick(1)}
          imageRef={Skull}
        />
        <Slider_block
          key={2}
          isActive={activeIndex === 2}
          onClick={() => handleClick(2)}
        />
        <Slider_block
          key={3}
          isActive={activeIndex === 3}
          onClick={() => handleClick(3)}
        />
        <Slider_block
          key={4}
          isActive={activeIndex === 4}
          onClick={() => handleClick(4)}
        />
        <Slider_block
          key={5}
          isActive={activeIndex === 5}
          onClick={() => handleClick(5)}
        />
        <Slider_block
          key={6}
          isActive={activeIndex === 6}
          onClick={() => handleClick(6)}
        />
    </Wrapper>
  );
};