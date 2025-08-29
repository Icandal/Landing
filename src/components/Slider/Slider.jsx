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

  @media (max-width: 1024px) {
    margin: auto 2rem;
    height: 450px;
    gap: 8px;
  }

  @media (max-width: 768px) {
    margin: auto 0.5rem;
    height: 350px;
    gap: 4px;
    overflow-x: auto;
    justify-content: flex-start;
    padding: 0.5rem;
    
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    
    scroll-snap-type: x mandatory;
    scroll-padding: 0 50%;
  }

  @media (max-width: 480px) {
    margin: auto 0.25rem;
    height: 300px;
    gap: 3px;
    padding: 0.25rem;
  }

  @media (max-width: 360px) {
    height: 280px;
    gap: 2px;
  }
`;

const NavigationDots = styled.div`
  display: none;
  justify-content: center;
  gap: 10px;
  margin-top: 1rem;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: flex;
  }

  @media (max-width: 480px) {
    gap: 8px;
    margin-top: 0.5rem;
    padding: 0.25rem;
  }
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.$active ? '#333' : '#ccc'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.$active ? '#333' : '#aaa'};
  }

  @media (max-width: 480px) {
    width: 8px;
    height: 8px;
  }
`;

const SlideCounter = styled.div`
  display: none;
  font-size: 14px;
  color: #666;
  font-weight: 500;
  margin-top: 0.5rem;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef(null);
  const wrapperRef = useRef(null);

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
    
    if (isMobile && wrapperRef.current) {
      const slideElement = wrapperRef.current.children[index];
      if (slideElement) {
        const slideLeft = slideElement.offsetLeft;
        const slideWidth = slideElement.offsetWidth;
        const containerWidth = wrapperRef.current.offsetWidth;
        
        wrapperRef.current.scrollTo({
          left: slideLeft - (containerWidth - slideWidth) / 2,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    if (isMobile && wrapperRef.current) {
      const slideElement = wrapperRef.current.children[activeIndex];
      if (slideElement) {
        const slideLeft = slideElement.offsetLeft;
        const slideWidth = slideElement.offsetWidth;
        const containerWidth = wrapperRef.current.offsetWidth;
        
        wrapperRef.current.scrollTo({
          left: slideLeft - (containerWidth - slideWidth) / 2,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex, isMobile]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const slides = [
    { webp: WEBScorp, img: Scorp, alt: 'Scorpion image' },
    { webp: WEBSkull, img: Skull, alt: 'Skull image' },
    { webp: WEBVulpes, img: Vulpes, alt: 'Image of vulpes heart' },
    { webp: WEBUrsus, img: Ursus, alt: 'Image of ursus testiculs' },
    { webp: WEBLizzard, img: Lizzard, alt: 'Image of lizzard' },
    { webp: WEBSpider, img: Spider, alt: 'Image of spider' },
    { webp: WEBSnake, img: Snake, alt: 'Image of snake' }
  ];

  return (
    <>
      <Wrapper ref={wrapperRef}>
        {slides.map((slide, index) => (
          <Slider_block
            key={index}
            isActive={activeIndex === index}
            onClick={() => handleClick(index)}
            webpimageRef={slide.webp}
            imageRef={slide.img}
            Alt={slide.alt}
          />
        ))}
      </Wrapper>

      {/* Навигационные точки для мобильных */}
      <NavigationDots>
        {slides.map((_, index) => (
          <Dot
            key={index}
            $active={activeIndex === index}
            onClick={() => handleClick(index)}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </NavigationDots>

      <SlideCounter>
        {activeIndex + 1} / {slides.length}
      </SlideCounter>
    </>
  );
};