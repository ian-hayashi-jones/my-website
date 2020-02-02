import React from 'react';

import './pages.scss';
import AnimatedPersonalLogo from '../components/AnimatedPersonalLogo';


function LoadingPage() {
    return (
        <div className="loading-page">
            <div className="page-content">
                <AnimatedPersonalLogo/>
            </div>
        </div>
    )
}

export default LoadingPage;