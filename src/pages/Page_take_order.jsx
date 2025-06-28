import { forwardRef } from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

// Стилизованные компоненты
const MessengerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: none;
  max-width: 320px;
  margin: 0 auto;
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
  gap: 12px;
  padding: 14px 24px;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  color: white;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 100%;
  box-sizing: border-box;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
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

const ButtonText = styled.span`
  font-size: 16px;
  margin-left: 8px;
`;

const IconWrapper = styled.span`
  font-size: 22px;
`;

const BlockTitle = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: #666;
  text-align: center;
`;

export const Page_take_order = forwardRef((props, ref) => {
  // Номера телефонов или ссылки для редиректа
  const phoneNumber = "79991234567"; // Замените на реальный номер
  const telegramUsername = "username"; // Замените на реальный username
  
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const telegramUrl = `https://t.me/${telegramUsername}`;
  
  const message = encodeURIComponent("Здравствуйте, я хочу записаться!");

  return (
    <section ref={ref} className="Page">
      <MessengerWrapper>
        <MessengerBlock>
          <BlockTitle>Написать в WhatsApp</BlockTitle>
          <WhatsAppButton 
            href={`${whatsappUrl}?text=${message}`} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <IconWrapper>
              <FaWhatsapp />
            </IconWrapper>
            <ButtonText>Записаться</ButtonText>
          </WhatsAppButton>
        </MessengerBlock>

        <MessengerBlock>
          <BlockTitle>Написать в Telegram</BlockTitle>
          <TelegramButton 
            href={`${telegramUrl}?start=${message}`} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <IconWrapper>
              <FaTelegram />
            </IconWrapper>
            <ButtonText>Записаться</ButtonText>
          </TelegramButton>
        </MessengerBlock>
      </MessengerWrapper>
    </section>
  );
});