import styled from "styled-components";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: rgb(1, 37, 68);
  color: white;
  padding: 0.5rem 0;
  margin-top: 3rem;
  position: relative;
  z-index: 2; 
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
  align-items: start;
`;

const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;

  h3 {
    color: #f1c40f;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    min-height: 3rem;  
    display: flex;
    align-items: flex-end; 
    padding-bottom: 0.5rem;
  }

  p, ul {
    margin-top: 0;
    flex-grow: 1;
  }

  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 0.8rem;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: #ecf0f1;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #f1c40f;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #34495e;
  color: #bdc3c7;
  font-size: 0.9rem;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>О компании</h3>
          <p>Мы создаем качественные продукты с xxx года, помогая нашим клиентам достигать успеха.</p>
        </FooterSection>

        <FooterSection>
          <h3>Контакты</h3>
          <ul>
            <li>г. Нижний Новгород</li>
            <li>info@example.com</li>
            <li>+7 (964) 835-30-90</li>
          </ul>
        </FooterSection>
{/* 
        <FooterSection>
          <h3>Социальные сети</h3>
          <p>Подпишитесь на наши соцсети, чтобы быть в курсе новостей.</p>
          <SocialIcons>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </SocialIcons>
        </FooterSection> */}
      </FooterContent>

      <Copyright>
        &copy; {new Date().getFullYear()} Название компании. Все права защищены.
      </Copyright>
    </FooterContainer>
  );
};