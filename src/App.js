import React, { useState } from 'react';
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';

import LoadingPage from './pages/LoadingPage';
import Navbar from './navigation/Navbar';
import HamburgerMenu from './navigation/HamburgerMenu';
import Socials from './components/Socials';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Footer from './pages/Footer';

const LOADING_ANIMATION_TIME = 6000;

function App() {
  // Loading page timing
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, LOADING_ANIMATION_TIME)

  // if (isLoading) {
  //   return (
  //     <LoadingPage/>
  //   )
  // } else {
    return (
      <div className="no-scroll">
        <Navbar/>

        {/* <HamburgerMenu open={open} setOpen={setOpen}/> */}

        <Element name="/home">
          <HomePage/>
        </Element>
        <Element name="/about">
          <Fade>
            <AboutPage/>
          </Fade>
        </Element>
        <Element name="/experience">
          <Fade>
            <ExperiencePage/>
          </Fade>
        </Element>
        <Element name="/projects">
          <Fade>
            <ProjectsPage/>
          </Fade>
        </Element>
        <Element name="/contact">
          <Fade>
            <ContactPage/>
          </Fade>
        </Element>
        
        <Footer/>
        <Socials/>
      </div>
    )
  // }
}

export default App;
