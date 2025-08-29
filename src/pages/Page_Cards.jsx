import './Page.css';
import styled, { keyframes } from 'styled-components';
import { Card_small } from '../components/Card_small';
import { forwardRef, useState } from 'react';
import icecreameImage from '../assets/Icecreame.png';
import iceCreameImageWP from '../assets/Icecreame.webp'
import { Active_card_small } from '../components/Active_card_small';
import Scorp from '../assets/Sliders_assets/image.png';
import WEBScorp from '../assets/Sliders_assets/WEBP/image.webp';
import Ursus from '../assets/Sliders_assets/Ursus.png';
import WEBUrsus from '../assets/Sliders_assets/WEBP/Ursus.webp';
import Vulpes from '../assets/Sliders_assets/Vulpes_bottles.png';
import WEBVulpes from '../assets/Sliders_assets/WEBP/Vulpes_bottles.webp';
import Vulpes_cor from '../assets/Sliders_assets/Vulpes_heart.png';
import WEBVulpes_cor from '../assets/Sliders_assets/WEBP/Vulpes_heart.webp';
import Turtle from '../assets/Sliders_assets/Turtle.png';
import WEBTurtle from '../assets/Sliders_assets/WEBP/Turtle.webp';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: rgb(1, 37, 68);
  margin: 0.5rem 1rem;
  font-weight: bold;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 1.5rem 0 0.5rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin: 1rem 0 0.5rem 0;
  }
`;

const Wrapper_active = styled.section`
  margin: 1rem auto;
  width: 90vw;
  min-height: 70vh;
  height: auto;
  box-shadow: 0 2px 4px rgba(1, 37, 68, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: auto;
  text-align: center;
  padding: 1rem;

  @media (min-width: 768px) {
    width: 75vw;
    min-height: 65vh;
    margin: 2rem auto;
    box-shadow: 0 4px 8px rgba(1, 37, 68, 0.2);
    padding: 1.5rem;
  }

  @media (min-width: 1024px) {
    width: 60vw; 
    min-height: 60vh;
    max-height: 80vh;
  }

  @media (min-width: 1440px) {
    width: 55vw;
    min-height: 55vh;
  }
`;

const FadeContainer = styled.div`
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  box-sizing: border-box;
  overflow-y: auto;
`;

const PageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const MainContent = styled.div`
  width: 100%;
  
  @media (min-width: 768px) {
    width: 70%;
  }
`;

const Sidebar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-left: 1rem;
  
  @media (min-width: 768px) {
    width: 28%;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 0;
    padding-top: 0.5rem;
  }
`;

const CardWrapper = styled.div`
  cursor: pointer;
  transition: transform 0.2s ease;
  width: 150px;

  &:active {
    transform: scale(0.98);
  }

  @media (min-width: 768px) {
    width: 100%;
    max-width: 200px;
    
    &:hover {
      transform: scale(1.03);
    }
    
    // Уменьшаем размер неактивных карточек
    ${props => !props.$isActive && `
      transform: scale(0.85);
      margin-left: auto;
      
      &:hover {
        transform: scale(0.9);
      }
    `}
  }

  @media (max-width: 767px) {
    // На мобильных уменьшаем неактивные карточки
    ${props => !props.$isActive && `
      transform: scale(0.8);
    `}
  }
`;

export const Page_Cards = forwardRef((props, ref) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [fadeKey, setFadeKey] = useState(0);
    
    const cardsData = [
        { id: 0, title: "Черный азиатский скорпион", description: "Прозрачная шкатулка с откидным верхом позволяет рассмотреть экспонат со всех сторон и даже достать его себе на ладонь", price: "5000 ₽", image: Scorp, WebPImage: WEBScorp },
        { id: 1, title: "Голова и лапа красноухой черепахи", description: "Животное погибло в результате сильной черепно-мозговой травмы от зубов крокодила, с которым много лет жила вполне мирно. Рану хорошо видно.", price: "4000 ₽", image: Turtle, WebPImage: WEBTurtle },
        { id: 2, title: "Лисье сердце", description: "Очень атмосферный предмет интерьера. Может стать украшением вашего кабинета или книжной полки.", price: "6000 ₽", image: Vulpes_cor, WebPImage: WEBVulpes_cor },
        { id: 3, title: "Аорта, почка и печень обыкновенной рыжей лисицы", description: "Собери своего Франкенштейна.", price: "3500 ₽", image: Vulpes, WebPImage: WEBVulpes },
        { id: 4, title: "Семенник бурого медведя", description: "Коллекционная редкость. Реальный семенник мишутки, был кастрирован по необходимости.", price: "25000 ₽", image: Ursus, WebPImage: WEBUrsus }
    ];

    const handleCardClick = (index) => {
        if (index !== activeIndex) {
            setFadeKey(prev => prev + 1);
            setTimeout(() => setActiveIndex(index), 10);
        }
    };

    return (
      <>
      <PageTitle>Что вы можете заказать сейчас?</PageTitle>
        <section ref={ref} className="Page" style={{ position: 'relative', padding: '0.5rem', minHeight: '100vh' }}>
          <PageContainer>
            <MainContent>
              <Wrapper_active>
                  <FadeContainer key={fadeKey}>
                      <Active_card_small 
                          imageRef={cardsData[activeIndex].image} 
                          Cards_name={cardsData[activeIndex].title} 
                          ACTIVE_CARD_TEXT={cardsData[activeIndex].description}
                          price={cardsData[activeIndex].price}
                          WebPImage={cardsData[activeIndex].WebPImage}
                      />
                  </FadeContainer>
              </Wrapper_active>
            </MainContent>
            
            <Sidebar>
                {cardsData.map((card, index) => (
                    <CardWrapper 
                        key={card.id}
                        onClick={() => handleCardClick(index)}
                        $isActive={activeIndex === index}
                    >
                        <Card_small 
                            imageRef={card.image} 
                            Cards_name={card.title} 
                            isActive={activeIndex === index}
                            WebPImage={card.WebPImage}
                            price={card.price}
                        />
                    </CardWrapper>
                ))}
            </Sidebar>
          </PageContainer>
        </section>
      </>
    );
});