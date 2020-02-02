import React from 'react';
import { Link } from 'react-scroll';
import { animated } from 'react-spring';


function NavbarLink({link, name, setNavbarMenuOpen, props}) {
    function closeMenu() {
        setNavbarMenuOpen(false)
    }

    return (
        <animated.div style={props}>
            <Link to={link} spy={true} smooth={true} duration={1000} offset={-120} smooth={"easeInSine"} 
                  onSetActive={closeMenu} onSetInactive={closeMenu} activeClass="active-navlink" className="navbar-link">
                {name}
            </Link>
        </animated.div>
    )
}

export default NavbarLink;