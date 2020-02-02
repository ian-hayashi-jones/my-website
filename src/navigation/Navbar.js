import React, { useState } from 'react'; 
import { Link } from 'react-scroll';
import { useSpring, animated } from 'react-spring';
import './navbar.scss';

import NavbarLink from '../navigation/NavbarLink';
import PersonalLogo from '../assets/PersonalLogo';

import myResume from '../assets/ianjones-resume.pdf';

function Navbar() {

  const [navbarMenuOpen, setNavbarMenuOpen] = useState(false);

    const menuProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { tension: 50 }
    })

    const linkProps = useSpring({
        margin: '20px',
        from: { margin: '0px' },
        config: { tension: 50 }
    })

  return (
    <animated.div style={menuProps} className={navbarMenuOpen ? "navbar menu-open" : "navbar"}>
      {/* header is logo + hamburger menu icon */}
      <div className="navbar-header">
        <div className="personal-logo" onClick={() => setNavbarMenuOpen(false)}>
          <Link to="/home" spy={true} smooth={true} duration={500} offset={-280}>
            <PersonalLogo/>
          </Link>
        </div>
        <div onClick={() => setNavbarMenuOpen(!navbarMenuOpen)} className={navbarMenuOpen ? "navbar-menu-icon navbar-menu-icon-open" : "navbar-menu-icon"}/>
      </div>
      
      {/* navbar-menu is links to pages */}
      <div className={navbarMenuOpen ? "navbar-menu navbar-menu-open" : "navbar-menu"}>
        <NavbarLink link="/about" name="about" setNavbarMenuOpen={setNavbarMenuOpen} props={linkProps}/>
        <NavbarLink link="/experience" name="experience" setNavbarMenuOpen={setNavbarMenuOpen} props={linkProps}/>
        <NavbarLink link="/projects" name="projects" setNavbarMenuOpen={setNavbarMenuOpen} props={linkProps}/>
        <NavbarLink link="/contact" name="contact" setNavbarMenuOpen={setNavbarMenuOpen} props={linkProps}/>

        <animated.div style={linkProps}>
          <a className="navbar-link outline" href={myResume} download>resume</a>
        </animated.div>
      </div>
 
    </animated.div>
  );
}

export default Navbar;