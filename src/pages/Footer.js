import React from 'react';
import { animated, useSpring } from 'react-spring';

import EmailIcon from '../assets/socials-sidebar/EmailIcon';
import GithubIcon from '../assets/socials-sidebar/GithubIcon';
import LinkedInIcon from '../assets/socials-sidebar/LinkInIcon';
import InstagramIcon from '../assets/socials-sidebar/InstagramIcon';


function Footer() {

    const props = useSpring({
        opacity: 1,
        // marginBottom: MARGIN_BOTTOM,
        from: { opacity: 0},
        config: { tension: 50 },
        // delay: 1400
    })

    return (
        <div className="page-container footer">
            <div className="page-content">
                <div className="footer-socials">
                    <a className="footer-socials-item" href="mailto:ianjones@alumni.stanford.edu" target="_blank">
                        <animated.div style={props}>
                            <EmailIcon/>
                        </animated.div>
                    </a>

                    <a className="footer-socials-item" href="https://www.linkedin.com/in/ian-hayashi-jones/" target="_blank">
                        <animated.div style={props}>
                            <LinkedInIcon/>
                        </animated.div>
                    </a>
                    
                    <a className="footer-socials-item" href="https://github.com/ianjones763/" target="_blank">
                        <animated.div style={props}>
                            <GithubIcon/>
                        </animated.div>
                    </a>
                    
                    <a className="footer-socials-item" href="https://www.instagram.com/ianjones.photo/" target="_blank">
                        <animated.div style={props}>
                            <InstagramIcon/>
                        </animated.div>
                    </a>
                </div>
                
                <div>
                    © 2020 Ian Jones
                </div>
            </div>
        </div>
    )
}

export default Footer;