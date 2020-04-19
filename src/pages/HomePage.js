import React from 'react';
import { useSpring, animated } from 'react-spring';

import './pages.scss';

const ANIMATION_DELAY = 400;
const ANIMATION_MARGIN = 200; 
const MARGIN_TOP = '10px';

function HomePage() {

    const firstLineProps = useSpring({
        opacity: 1,
        marginTop: MARGIN_TOP,
        from: { opacity: 0, marginTop: '0px' },
        config: { tension: 50 },
        delay: ANIMATION_DELAY
    })

    const secondLineProps = useSpring({
        opacity: 1,
        marginTop: MARGIN_TOP,
        from: { opacity: 0, marginTop: '0px' },
        config: { tension: 50 },
        delay: ANIMATION_DELAY + ANIMATION_MARGIN
    })

    const thirdLineProps = useSpring({
        opacity: 1,
        marginTop: MARGIN_TOP,
        from: { opacity: 0, marginTop: '0px' },
        config: { tension: 50 },
        delay: ANIMATION_DELAY + (2 * ANIMATION_MARGIN)
    })

    const fourthLineProps = useSpring({
        opacity: 1,
        marginTop: '30px',
        from: { opacity: 0, marginTop: '0px' },
        config: { tension: 50 },
        delay: ANIMATION_DELAY + (3 * ANIMATION_MARGIN)
    })


    return (
        <div className="page-container">
            <div className="page-content home-full-page">
                <animated.div style={firstLineProps} className="home-line">
                    How's it going? My name is
                </animated.div>
                <animated.div style={secondLineProps} className="home-line home-line-highlight">
                    IAN HAYASHI JONES
                </animated.div>
                <animated.div style={thirdLineProps} className="home-line home-line-sub-highlight">
                    I like to design and code things.
                </animated.div>
                <animated.div style={fourthLineProps} className="home-line home-line-summary">
                    I'm a software engineer living in San Francisco. I like to work across all levels of the stack, and have a wide background in
                    topics from machine learning to front end web development.
                    <br/>
                    Welcome to my website :)
                </animated.div>
            </div>
        </div>
    )
}

export default HomePage;
