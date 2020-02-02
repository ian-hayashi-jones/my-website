import React from 'react';
import { useSpring, animated } from 'react-spring';


function SectionHeader({title}) {

    const hrProps = useSpring({
        width: '100%',
        from: { width: '0%' },
        config: { friction: 250 }
    })


    return (
        <div className="header-container">
            <div className="header-content">
                <h2 className="header-title">{title}</h2>
                <div className="header-hr">
                    <animated.div style={hrProps}><hr/></animated.div> 
                </div>
            </div>
        </div>
    )
}

export default SectionHeader;
