import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { bool } from 'prop-types';


const OFFSET_SPACING = -90;
 
const HamburgerMenu = ({ open, setOpen }) => {

    // Close hamburger menu if 
    function useWindowWidth() {
        const [width, setWidth] = useState(window.innerWidth);
        
        useEffect(() => {
          const handleResize = () => setWidth(window.innerWidth);
          if (width > 767) {
              setOpen(false);
          }
          window.addEventListener('resize', handleResize);
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        });
        return width;
    }
    useWindowWidth();

    
    return (
        <div className={open ? "hamburger-menu-open" : "hamburger-menu"}>
            <Link to='/home' spy={true} smooth={true} duration={1000} offset={OFFSET_SPACING} smooth={"easeInSine"}
                onSetActive={() => {setOpen(false)}} onClick={() => {setOpen(false)}} >
                home
            </Link>
            <Link to='/about' spy={true} smooth={true} duration={1000} offset={OFFSET_SPACING} smooth={"easeInSine"}
                onSetActive={() => {setOpen(false)}} onClick={() => {setOpen(false)}}>
                about
            </Link>
            <Link to='/experience' spy={true} smooth={true} duration={1000} offset={OFFSET_SPACING} smooth={"easeInSine"}
                onSetActive={() => {setOpen(false)}} onClick={() => {setOpen(false)}}>
                experience
            </Link>
            <Link to='/projects' spy={true} smooth={true} duration={1000} offset={OFFSET_SPACING} smooth={"easeInSine"}
                onSetActive={() => {setOpen(false)}} onClick={() => {setOpen(false)}}>
                projects
            </Link>
            <Link to='/contact' spy={true} smooth={true} duration={1000} offset={OFFSET_SPACING} smooth={"easeInSine"}
                onSetActive={() => {setOpen(false)}} onClick={() => {setOpen(false)}}>
                contact
            </Link>
        </div>
    )
}

HamburgerMenu.propTypes = {
  open: bool.isRequired,
}

export default HamburgerMenu;
