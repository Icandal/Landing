import styled from "styled-components";
import { Circled_image } from "./Circled_image";

const Wrapper_active_text = styled.article`
  font-size: 24px;
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.5;
  padding: 1.5rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 2rem 1.5rem;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding: 1rem;
    line-height: 1.4;
  }
`;

const CardTitle = styled.h2`
  font-size: 2rem;
  text-align: justify;
  margin: 1rem 0;
  font-weight: bold;
  line-height: 1.2;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  //   padding: 0 1rem;
   }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    // padding: 0 0.5rem;
  }
`;

const PriceSection = styled.div`
  font-size: 1.8rem;
  text-align: justify;
  font-weight: bold;
  color:  rgb(1, 37, 68);
  margin: 1rem 0;
  padding: 0 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    padding: 0 0.5rem;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
`;

const FixedCircleImage = styled(Circled_image)`
  width: 200px !important;
  height: 200px !important;
  object-fit: cover !important;
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    width: 150px !important;
    height: 150px !important;
  }

  @media (max-width: 480px) {
    width: 120px !important;
    height: 120px !important;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
`;

export const Active_card_small = ({ imageRef, Cards_name, ACTIVE_CARD_TEXT, price, WebPImage }) => {
  return ( 
    <CardContainer>
      <ImageContainer>
        <picture>
          <source srcSet={WebPImage} type='image/webp'/>
          <source srcSet={imageRef} type='image/png'/>
          <FixedCircleImage src={imageRef} loading="lazy" alt={Cards_name} />
        </picture>
      </ImageContainer>
      <CardTitle>{Cards_name}</CardTitle>
      <PriceSection>
        Цена: {price}
      </PriceSection>
      <Wrapper_active_text>
        {ACTIVE_CARD_TEXT}
      </Wrapper_active_text>
    </CardContainer>
  );
};