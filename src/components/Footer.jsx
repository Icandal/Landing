import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  padding: 0.5rem 0;
  margin-top: 3rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
`;

const FooterSection = styled.section`
  h3 {
    color: #f1c40f;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.8rem;

      a {
        color: #bdc3c7;
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
          color: #f1c40f;
        }
      }
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
            <li>г. Москва, ул. Примерная, 123</li>
            <li>info@example.com</li>
            <li>+7 (123) 456-78-90</li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Социальные сети</h3>
          <p>Подпишитесь на наши соцсети, чтобы быть в курсе новостей.</p>
          <SocialIcons>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </SocialIcons>
        </FooterSection>
      </FooterContent>

      <Copyright>
        &copy; {new Date().getFullYear()} Название компании. Все права защищены.
      </Copyright>
    </FooterContainer>
  );
};