import { forwardRef } from 'react';
import './Page.css';
import { WelcomeAnimation } from '../components/Welcome_animation';

export const Page_Home = forwardRef((props, ref) => {

  return (
    <div className="Page">
        <WelcomeAnimation />
    </div>
)});