import React from 'react';
import { animated, useSpring } from 'react-spring';
import './socials.scss';

import AboutIcon from '../assets/about/AboutIcon';
import WorkIcon from '../assets/about/WorkIcon';
import SchoolIcon from '../assets/about/SchoolIcon';

import EmailIcon from '../assets/socials-sidebar/EmailIcon';
import GithubIcon from '../assets/socials-sidebar/GithubIcon';
import LinkedInIcon from '../assets/socials-sidebar/LinkInIcon';
import InstagramIcon from '../assets/socials-sidebar/InstagramIcon';



const line = "M42,938.492065 L42,1024";
const MARGIN_BOTTOM = '20px';

function Socials() {
    const topItemProps = useSpring({
        opacity: 1,
        marginBottom: MARGIN_BOTTOM,
        from: { opacity: 0, marginBottom: '0px'},
        config: { tension: 50 },
        delay: 1400
    })

    const midItemProps = useSpring({
        opacity: 1,
        marginBottom: MARGIN_BOTTOM,
        from: { opacity: 0, marginBottom: '0px'},
        config: { tension: 50 },
        delay: 1200
    })

    const botItemProps = useSpring({
        opacity: 1,
        marginBottom: MARGIN_BOTTOM,
        from: { opacity: 0, marginBottom: '0px'},
        config: { tension: 50 },
        delay: 1000
    })


    const lineProps = useSpring({
        strokeDasharray: 100,
        strokeDashoffset: 0,
        opacity: 1,
        from: { opacity: 0, strokeDashoffset: -100 },
        config: { tension: 50 },
    })




    return (
        <div className="socials-sidebar">
            <a className="socials-sidebar-item" href="mailto:ianjones@alumni.stanford.edu" target="_blank">
                <animated.div style={topItemProps}>
                    <EmailIcon/>
                </animated.div>
            </a>

            <a className="socials-sidebar-item" href="https://www.linkedin.com/in/ian-hayashi-jones/" target="_blank">
                <animated.div style={topItemProps}>
                    <LinkedInIcon/>
                </animated.div>
            </a>
            
            <a className="socials-sidebar-item" href="https://github.com/ianjones763/" target="_blank">
                <animated.div style={midItemProps}>
                    <GithubIcon/>
                </animated.div>
            </a>
            
            <a className="socials-sidebar-item" href="https://www.instagram.com/ianjones.photo/" target="_blank">
                <animated.div style={botItemProps}>
                    <InstagramIcon/>
                </animated.div>
            </a>

            <svg className="socials-sidebar-line" width="2px" height="86px" viewBox="0 0 2 86">
                <g transform="translate(-41.000000, -938.000000)" stroke="#C7D8E8" stroke-width="2">
                    <animated.path
                        style={lineProps}
                        className="animated-line"
                        strokeDashoffset={lineProps.strokeDashoffset}
                        strokeDasharray={lineProps.strokeDasharray}
                        d={line}/>
                </g>
            </svg>
        </div>
    )
}

export default Socials;