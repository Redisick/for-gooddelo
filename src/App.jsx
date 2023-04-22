import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';

import {Nav, Hero, Info, Projects, Form, Feedback, Footer} from "./components";

const App = () => {
  return (
    <div className="primary">
        <Nav />

        <ParallaxProvider>
          <Hero />
        </ParallaxProvider>
        
        <Info />
        <Projects />
        <Feedback />
        <Form />

        <Footer />
    </div>
  )
};

export default App