import styled from 'styled-components';
import { useEffect, useRef } from 'react';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(128, 128, 128, 0.2);
  z-index: 1005;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const EnlargedImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 3px solid white;
  cursor: default;
  
  /* Добавляем анимацию появления */
  animation: scaleUp 0.3s ease-out;
  
  @keyframes scaleUp {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const PushUp = ({ imgRef, onClose }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (imageRef.current && !imageRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <Overlay onClick={onClose}>
      <EnlargedImage
        ref={imageRef}
        src={imgRef}
        onClick={(e) => e.stopPropagation()} //Выключил всплытие функции к Overlay
        alt="Увеличенное изображение"
      />
    </Overlay>
  );
};