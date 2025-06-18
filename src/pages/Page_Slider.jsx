import { forwardRef } from 'react';
import { Slider } from '../components/Slider/Slider';
import './Page.css';

export const Page_Slider = forwardRef((props, ref) => {

    return ( 
        <div ref={ref} className='Page'>
         <Slider />
        </div>
    )
});