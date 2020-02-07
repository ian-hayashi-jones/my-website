import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { bool } from 'prop-types';
import { animated, useSpring } from 'react-spring';

const OFFSET_SPACING = -90;
 
const HamburgerMenu = ({ open, setOpen }) => {

    const menuProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { tension: 50 },
    })

    const menuItemProps = useSpring({
        padding: '2rem 0',
        from: { padding: '0rem 0'},
        config: { tension: 50 },
    })

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
        <animated.div style={menuProps} className={open ? "hamburger-menu-open" : "hamburger-menu"}>
            <animated.div className="hamburger-menu-item" style={menuItemProps}>
                <Link to='/home' spy={true} duration={1000} offset={OFFSET_SPACING} smooth={"easeInSine"}
                    onSetActive={() => {setOpen(false)}} onClick={() => {setOpen(false)}} >
                    home
                </Link>
            </animated.div>
            <animated.div className="hamburger-menu-item" style={menuItemProps}>
                <Link to='/about' spy={true} duration={1000} offset={OFFSET_SPACING} smooth={"easeInSine"}
                    onSetActive={() => {setOpen(false)}} onClick={() => {setOpen(false)}}>
                    about
                </Link>
            </animated.div>
            <animated.div className="hamburger-menu-item" style={menuItemProps}>
                <Link to='/experience' spy={true} duration={1000} offset={OFFSET_SPACING} smooth={"easeInSine"}
                    onSetActive={() => {setOpen(false)}} onClick={() => {setOpen(false)}}>
                    experience
                </Link>
            </animated.div>
            <animated.div className="hamburger-menu-item" style={menuItemProps}>
                <Link to='/projects' spy={true} duration={1000} offset={OFFSET_SPACING} smooth={"easeInSine"}
                    onSetActive={() => {setOpen(false)}} onClick={() => {setOpen(false)}}>
                    projects
                </Link>
            </animated.div>
            <animated.div className="hamburger-menu-item" style={menuItemProps}>
                <Link to='/contact' spy={true} duration={1000} offset={OFFSET_SPACING} smooth={"easeInSine"}
                    onSetActive={() => {setOpen(false)}} onClick={() => {setOpen(false)}}>
                    contact
                </Link>
            </animated.div>
        </animated.div>
    )
}

HamburgerMenu.propTypes = {
  open: bool.isRequired,
}

export default HamburgerMenu;
