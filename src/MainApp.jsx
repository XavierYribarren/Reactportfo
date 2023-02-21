import './App.css';
import React, { startTransition, useState } from 'react';

import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import Face from './Components/Face';
import RingLoader from "react-spinners/RingLoader"
import CarApp from './Components/carshow/CarApp';

function MainApp() {
  const [loaded, setLoaded] = useState(false);



  return (
    <div className='main'>
      <div
        className={loaded === true ? 'loadingScreen-hidden' : 'loadingScreen'} 
      >

<RingLoader
className='circleLoader'
  color="#d636d5"
  size={100}
/>
      </div>
      
      <div className={loaded === true ? 'App' : 'App-hidden'}>
        <NavBar />

     
    
    
        <div className='banner-face'>
          <Face setLoader={setLoaded} />
          <Banner />
        </div>
        <div className='else'>
          <Skills />
          <Projects />
          {/* <CarApp/> */}
          <Contact />
          <Footer />
        </div>
      
      </div>
    </div>
  );
}

export default MainApp;