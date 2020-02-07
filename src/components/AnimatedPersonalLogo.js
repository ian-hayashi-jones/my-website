import React, { useRef } from 'react';
import { useSpring, animated, useChain } from 'react-spring';


// Logo vector paths
const ijPath = "M18.40625,30.9448205 L18.40625,15.9885128 L22.4013125,15.3589744 L22.4013125,21.9691282 C22.6694388,21.8816919 23.0135291,21.7986286 23.4335938,21.7199359 C23.8536584,21.6412432 24.2603105,21.6018974 24.6535625,21.6018974 C25.7975682,21.6018974 26.7494025,21.7549087 27.5090938,22.0609359 C28.268785,22.3669631 28.876529,22.7997664 29.3323438,23.359359 C29.7881585,23.9189515 30.1099053,24.5834577 30.2975938,25.3528974 C30.4852822,26.1223372 30.579125,26.9792004 30.579125,27.9235128 L30.26875,34.1576923 C30.26875,35.9779487 29.81375,37.3212821 28.90375,38.195641 C27.99375,39.07 26.6775,39.5071795 24.963125,39.5071795 C24.71125,39.5071795 24.345625,39.4833333 23.85,39.4276923 C23.354375,39.3720513 22.899375,39.2846154 22.46875,39.1415385 L23.005,35.97 C23.273125,36.0574359 23.525,36.1210256 23.744375,36.1528205 C23.96375,36.1846154 24.2103822,36.2084615 24.589375,36.2084615 C25.215,36.2084615 25.65375,36.0176923 25.8975,35.6520513 C26.14125,35.2864103 26.279375,34.7538462 26.279375,34.054359 C26.279375,34.0538291 26.3809375,32.1675983 26.5840625,28.3956667 C26.5840625,27.1365834 26.4187204,26.2447462 26.0880313,25.7201282 C25.7573421,25.1955102 25.1451295,24.9332051 24.251375,24.9332051 C23.8938732,24.9332051 23.5587203,24.9638074 23.2459063,25.0250128 C22.9330922,25.0862183 22.6515638,25.1517945 22.4013125,25.2217436 L22.4013125,30.9448205 L18.40625,30.9448205 Z"
const iDotPath = "M22.772625,11.3083077 C22.772625,12.0252856 22.5357836,12.5892415 22.0620938,13.0001923 C21.5884039,13.4111431 21.0298157,13.6166154 20.3863125,13.6166154 C19.7428093,13.6166154 19.1842211,13.4111431 18.7105313,13.0001923 C18.2368414,12.5892415 18,12.0252856 18,11.3083077 C18,10.5913297 18.2368414,10.0273738 18.7105313,9.61642308 C19.1842211,9.2054723 19.7428093,9 20.3863125,9 C21.0298157,9 21.5884039,9.2054723 22.0620938,9.61642308 C22.5357836,10.0273738 22.772625,10.5913297 22.772625,11.3083077 Z"
const jDotPath = "M30.897625,17.6672821 C30.897625,18.38426 30.6607836,18.9482159 30.1870938,19.3591667 C29.7134039,19.7701174 29.1548157,19.9755897 28.5113125,19.9755897 C27.8678093,19.9755897 27.3092211,19.7701174 26.8355313,19.3591667 C26.3618414,18.9482159 26.125,18.38426 26.125,17.6672821 C26.125,16.9503041 26.3618414,16.3863482 26.8355313,15.9753974 C27.3092211,15.5644467 27.8678093,15.3589744 28.5113125,15.3589744 C29.1548157,15.3589744 29.7134039,15.5644467 30.1870938,15.9753974 C30.6607836,16.3863482 30.897625,16.9503041 30.897625,17.6672821 Z"
const circlePath = "M24.25,46.5 C11.9616643,46.5 2,36.5383357 2,24.25 C2,11.9616643 11.9616643,2 24.25,2 C36.5383357,2 46.5,11.9616643 46.5,24.25 C46.5,36.5383357 36.5383357,46.5 24.25,46.5 Z M24.25,45 C35.7099086,45 45,35.7099086 45,24.25 C45,12.7900914 35.7099086,3.5 24.25,3.5 C12.7900914,3.5 3.5,12.7900914 3.5,24.25 C3.5,35.7099086 12.7900914,45 24.25,45 Z"


export default function AnimatedPersonalLogo () {
    const fillRef = useRef();
    const fadeOutRef = useRef();

    // Spring animation hooks
    const ijProps = useSpring({
        strokeDasharray: 200,
        strokeDashoffset: 0,
        from: { strokeDashoffset: 200 },
        config: { friction: 300, tension: 100 }
    })

    const circleProps = useSpring({
        strokeDasharray: 300,
        strokeDashoffset: 0,
        from: { strokeDashoffset: 300},
        config: { friction: 300, tension: 110 }
    })

    const dotProps = useSpring({
        strokeDasharray: 50,
        strokeDashoffset: 0,
        from: { strokeDashoffset: 50 },
        config: { friction: 500, tension: 100 }
    })

    const fillProps = useSpring({
        ref: fillRef,
        opacity: 1,
        from: { opacity: 0 },
        delay: 2100
    })

    const fadeOutProps = useSpring({
        ref: fadeOutRef,
        opacity: 0,
        from: { opacity: 1 }
    })

    // Fade out logo after it gets filled
    useChain([fillRef, fadeOutRef])

    return (
        <animated.div style={fadeOutProps}>
            <svg viewBox="0 0 48 48" width="300">
                <animated.path
                    style={dotProps}
                    className="animated-logo-outline"
                    strokeDashoffset={dotProps.strokeDashoffset}
                    strokeDasharray={dotProps.strokeDasharray}
                    d={iDotPath}/>
                <animated.path
                    style={fillProps}
                    className="animated-logo-fill"
                    d={iDotPath}/>

                <animated.path
                    style={dotProps}
                    className="animated-logo-outline"
                    strokeDashoffset={dotProps.strokeDashoffset}
                    strokeDasharray={dotProps.strokeDasharray}
                    d={jDotPath}/>
                <animated.path
                    style={fillProps}
                    className="animated-logo-fill"
                    d={jDotPath}/>


                <animated.path
                    style={ijProps}
                    className="animated-logo-outline"
                    strokeDashoffset={ijProps.strokeDashoffset}
                    strokeDasharray={ijProps.strokeDasharray}
                    d={ijPath}/>
                <animated.path
                    style={fillProps}
                    className="animated-logo-fill"
                    d={ijPath}/>
                
                <animated.path
                    style={circleProps}
                    className="animated-logo-outline"
                    strokeDashoffset={circleProps.strokeDashoffset}
                    strokeDasharray={circleProps.strokeDasharray}
                    d={circlePath}/>
                <animated.path
                    style={fillProps}
                    className="animated-logo-fill"
                    d={circlePath}/>
            </svg>
        </animated.div>
    )
}