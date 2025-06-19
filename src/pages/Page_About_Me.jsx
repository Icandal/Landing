import { forwardRef } from 'react';
import { AboutMe } from '../components/AboutMe';
import './Page.css';

export const Page_About_Me = forwardRef((props, ref) => {
    return (
        <section className='Page' ref={ref}>
            <AboutMe />
        </section>
    );
});

Page_About_Me.displayName = 'Page_About_Me';