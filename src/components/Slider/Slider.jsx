import styled from "styled-components";
import { Slider_block } from "./Slider_block";
import { useState, useEffect, useRef } from "react";

const Wrapper = styled.section`
  margin: auto 5rem;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);
  const totalSlides = 7;

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    resetTimer();
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(goToNextSlide, 8000);
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
      {[...Array(totalSlides)].map((_, index) => (
        <Slider_block
          key={index}
          isActive={activeIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </Wrapper>
  );
};