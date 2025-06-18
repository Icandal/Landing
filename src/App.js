import { useRef } from 'react';

import './App.css';

import { Arrow_up } from './components/Arrow_up';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Page_Home } from './pages/Page_Home';
import { Page_About_Me } from './pages/Page_About_Me';
import { Page_Descs } from './pages/Page_Descs';
import { Page_Cards } from './pages/Page_Cards';
import { Page_Slider } from './pages/Page_Slider';
import { Navigation_panel } from './components/Navigation/Navigation_panel';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const descsRef = useRef(null);
  const cardsRef = useRef(null);
  const sliderRef = useRef(null);

  return (
    <div className="App">
      <Header />
      <Navigation_panel 
        homeRef={homeRef}
        aboutRef={aboutRef}
        descsRef={descsRef}
        cardsRef={cardsRef}
        sliderRef={sliderRef}
      />
      <Page_Home ref={homeRef} />
      <Page_About_Me ref={aboutRef} />
      <Page_Descs ref={descsRef} />
      <Page_Cards ref={cardsRef} />
      <Page_Slider ref={sliderRef} />
      <Arrow_up />
      <Footer />
    </div>
  );
}

export default App;
