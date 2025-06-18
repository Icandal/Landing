import './Page.css';
import styled from 'styled-components';
import { Card_big } from '../components/Card_big';
import { forwardRef } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
`;

export const Page_Descs = forwardRef((props, ref) => {

    return (
        <div ref={ref} className='Page'>
            <Wrapper>
                {[...Array(3)].map((_, index) => (
                    <Card_big
                    key={`card-big-${index}`} />
                    ))}  
            </Wrapper>
        </div>
    )
});