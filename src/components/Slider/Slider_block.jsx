import styled from 'styled-components';

const Block = styled.div`
  margin: 2rem 4px;
  height: 500px;
  width: ${({ $isActive }) => ($isActive ? '900px' : '50px')};
  background-color: ${({ $isActive }) => ($isActive ? 'darkgrey' : 'grey')};
  border: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: ${({ $isActive }) => ($isActive ? 'darkgrey' : '#a0a0a0')};
  }
`;

export const Slider_block = ({ isActive, onClick }) => {
  return <Block $isActive={isActive} onClick={onClick} />;
};