import { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaArrowDown } from 'react-icons/fa';

const fillBar = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.8; }
  50% { opacity: 0.3; }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: relative;
`;

const CenteredContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  text-align: center;
`;

const WelcomeText = styled.div`
  color: #333;
  font-size: 2rem;
  font-family: 'Arial', sans-serif;
  line-height: 1.5;
  text-align: center;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
`;

const Cursor = styled.span`
  opacity: 1;
`;

const ProgressBarContainer = styled.div`
  width: 200px;
  height: 10px;
  background: #e0e0e0;
  border-radius: 5px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #4cc9f0, #4361ee);
  border-radius: 5px;
  width: ${props => props.fillWidth}%;
  ${props => props.filling && css`
    animation: ${fillBar} 1.5s forwards;
  `}
  ${props => props.completed && css`
    animation: ${pulseGlow} 1.5s infinite ease-in-out;
  `}
`;

const ArrowButton = styled.button`
  margin-top: 30px;
  background: transparent;
  border: none;
  color: #4361ee;
  font-size: 24px;
  cursor: pointer;
  animation: 
    ${fadeIn} 0.5s ease-out forwards,
    ${bounce} 2s infinite 0.5s;
  transition: all 0.3s ease;
  padding: 15px;
  border-radius: 50%;
  opacity: 0;
  filter: drop-shadow(0 4px 8px rgba(67, 97, 238, 0.2));
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  
  &:hover {
    color: #3a56d4;
    transform: scale(1.1);
    filter: drop-shadow(0 6px 12px rgba(67, 97, 238, 0.3));
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.3);
  }

  svg {
    display: block;
  }
`;

export const WelcomeAnimation = () => {
  const [text, setText] = useState('');
  const [phase, setPhase] = useState(0);
  const [progress, setProgress] = useState(0);
  const pageRef = useRef(null);
  const fullText = "Добро пожаловать! Здесь вы сможете ознакомиться с нашим продуктом и найти контакты для связи с нами! Мы подготовили несколько карточек для вас, начнем?";

  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (phase === 0) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.substring(0, text.length + 1));
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        setPhase(1);
      }
    } else if (phase === 1) {
      if (progress < 100) {
        const interval = setInterval(() => {
          setProgress(prev => Math.min(prev + 2, 100));
        }, 30);
        return () => clearInterval(interval);
      } else {
        setTimeout(() => {
          setPhase(2);
        }, 500);
      }
    }
  }, [text, phase, progress]);

  return (
    <PageContainer ref={pageRef}>
      <CenteredContent>
        <WelcomeText>
          {text}
          <Cursor>|</Cursor>
        </WelcomeText>
        
        {(phase === 1 || phase === 2) && (
          <>
            <ProgressBarContainer>
              <ProgressBarFill 
                filling={phase === 1}
                completed={phase === 2}
                fillWidth={progress}
              />
            </ProgressBarContainer>
            {phase === 2 && (
              <ArrowButton onClick={scrollDown} aria-label="Scroll down">
                <FaArrowDown />
              </ArrowButton>
            )}
          </>
        )}
      </CenteredContent>
    </PageContainer>
  );
};