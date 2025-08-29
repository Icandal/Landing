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
        <section ref={ref} className='Page'>
            <Wrapper>
                <Card_big />
            </Wrapper>
        </section>
    )
});