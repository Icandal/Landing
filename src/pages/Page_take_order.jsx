import { forwardRef } from "react";
import styled from "styled-components";
import { FaWhatsapp, FaTelegram, FaVk } from "react-icons/fa";

const PageTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: rgb(1, 37, 68);
  margin: 0 0 2rem 0;
  font-weight: bold;
  line-height: 1.2;
  width: 100%;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 0 0 1.5rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin: 0 0 1rem 0;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MessengerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  // background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(1, 37, 68, 0.1);
  border: none;
  width: 100%;
  min-height: 20vh;
  max-width: 320px;
  margin: 0;

  @media (max-width: 480px) {
    padding: 12px;
    gap: 12px;
  }
`;

const MessengerBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MessengerButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  box-sizing: border-box;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(1, 37, 68, 0.15);
  }

  @media (max-width: 480px) {
    padding: 10px 12px;
    gap: 6px;
  }
`;

const WhatsAppButton = styled(MessengerButton)`
  background-color: #25D366;
  &:hover {
    background-color: #20bd5b;
  }
`;

const TelegramButton = styled(MessengerButton)`
  background-color: #0088CC;
  &:hover {
    background-color: #0077b3;
  }
`;

const VKButton = styled(MessengerButton)`
  background-color: #00699eff;
  &:hover {
    background-color: #006192ff;
  }
`;

const ButtonText = styled.span`
  font-size: 16px;
  margin-left: 4px;

  @media (max-width: 480px) {
    font-size: 14px;
    margin-left: 4px;
  }
`;

const IconWrapper = styled.span`
  font-size: 20px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const BlockTitle = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: #666;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const Page_take_order = forwardRef((props, ref) => {
  const phoneNumber = "89648353090";
  const vkUsername = "id300831771";
  const tgUsername = "p1nk_shark28";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const telegramUrl = `https://t.me/${tgUsername}`;
  const vkUrl = `https://vk.com/${vkUsername}`;
  
  const message = encodeURIComponent("Здравствуйте, я хочу сделать заказ!");

  return (
    <section ref={ref} className="Page">
      <PageContainer>
        <PageTitle>Как сделать заказ?</PageTitle>
        <ButtonsContainer>
          <MessengerWrapper>
            <MessengerBlock>
              <BlockTitle>Написать в WhatsApp</BlockTitle>
              <WhatsAppButton 
                href={`${whatsappUrl}?text=${message}`} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Написать в WhatsApp"
              >
                <IconWrapper>
                  <FaWhatsapp />
                </IconWrapper>
                <ButtonText>Заказать</ButtonText>
              </WhatsAppButton>
            </MessengerBlock>
          </MessengerWrapper>

          <MessengerWrapper>
            <MessengerBlock>
              <BlockTitle>Написать в Telegram</BlockTitle>
              <TelegramButton 
                href={`${telegramUrl}?start=${message}`} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Написать в Telegram"
              >
                <IconWrapper>
                  <FaTelegram />
                </IconWrapper>
                <ButtonText>Заказать</ButtonText>
              </TelegramButton>
            </MessengerBlock>
          </MessengerWrapper>

          <MessengerWrapper>
            <MessengerBlock>
              <BlockTitle>Написать в VK</BlockTitle>
              <VKButton 
                href={`${vkUrl}`} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Написать в VK"
              >
                <IconWrapper>
                  <FaVk />
                </IconWrapper>
                <ButtonText>Заказать</ButtonText>
              </VKButton>
            </MessengerBlock>
          </MessengerWrapper>
        </ButtonsContainer>
      </PageContainer>
    </section>
  );
});