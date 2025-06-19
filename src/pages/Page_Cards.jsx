import './Page.css';
import styled from 'styled-components';
import { Card_small } from '../components/Card_small';
import { forwardRef } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
`;

export const Page_Cards = forwardRef((props, ref) => {
    return (
        <section ref={ref} className="Page">
            <Wrapper>
                {[...Array(5)].map((_, index) => (
                    <Card_small
                    key={`card-small-${index}`} />
                ))}  
            </Wrapper>
        </section>
    )
});