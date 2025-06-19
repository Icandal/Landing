import { forwardRef } from 'react';
import './Page.css';

export const Page_Home = forwardRef((props, ref) => {

    return (
        <section ref={ref} className='Page'>
         Some video here
        </section>
    )
});