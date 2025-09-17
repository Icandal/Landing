import styled from "styled-components";
import { Slider_block } from "./Slider_block";
import { useState, useEffect, useRef, useCallback } from "react";
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
    height: auto;
    gap: 12px;
    overflow-y: visible;
    justify-content: flex-start;
    padding: 0.5rem;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    margin: auto 0.25rem;
    gap: 10px;
    padding: 0.25rem;
  }

  @media (max-width: 360px) {
    gap: 8px;
  }
`;

const MobileImage = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
    img {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 16px;
    }
  }

  @media (max-width: 480px) {
    border-radius: 12px;
    
    img {
      border-radius: 12px;
    }
  }

  @media (max-width: 360px) {
    border-radius: 10px;
    
    img {
      border-radius: 10px;
    }
  }
`;

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
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
      <Wrapper>
        {isMobile ? (
          slides.map((slide, index) => (
            <MobileImage key={index}>
              <picture>
                <source srcSet={slide.webp} type="image/webp" />
                <img src={slide.img} alt={slide.alt} />
              </picture>
            </MobileImage>
          ))
        ) : (
          slides.map((slide, index) => (
            <Slider_block
              key={index}
              isActive={activeIndex === index}
              onClick={() => handleClick(index)}
              webpimageRef={slide.webp}
              imageRef={slide.img}
              Alt={slide.alt}
            />
          ))
        )}
      </Wrapper>
    </>
  );
};