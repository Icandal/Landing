import { forwardRef } from 'react';
import { Slider } from '../components/Slider/Slider';
import './Page.css';

export const Page_Slider = forwardRef((props, ref) => {

    return ( 
        <section ref={ref} className='Page'>
         <Slider />
        </section>
    )
});