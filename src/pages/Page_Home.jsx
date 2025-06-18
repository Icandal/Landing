import { forwardRef } from 'react';
import './Page.css';

export const Page_Home = forwardRef((props, ref) => {

    return (
        <div ref={ref} className='Page'>
         Some animation here
        </div>
    )
});