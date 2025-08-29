import { forwardRef } from 'react';
import './Page.css';
import { WelcomeAnimation } from '../components/Welcome_animation';

export const Page_Home = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="Page Page--no-scroll">
      <WelcomeAnimation />
    </section>
  )
});