import styled from 'styled-components';

const BlockContainerWrapper = styled.div`
  position: relative;
  margin: 2rem 4px;
  height: 500px;
  width: ${({ $isActive }) => ($isActive ? '900px' : '50px')};
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(242, 246, 2);
  mix-blend-mode: multiply;
  opacity: ${({ $isActive }) => ($isActive ? 0 : 1)};
  transition: opacity 0.3s ease;
  
  ${BlockContainerWrapper}:hover & {
    opacity: 0;
  }
`;

export const Slider_block = ({ isActive, onClick, imageRef=null }) => {
  return (
    <BlockContainerWrapper $isActive={isActive} onClick={onClick}>
      <Image src={imageRef} />
      <Overlay $isActive={isActive} />
    </BlockContainerWrapper>
  );
};