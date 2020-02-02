import React from 'react';


function AboutCard({icon, info}) {
    return (
        <div className="card">
            <div className="about-card-icon-container">
                {icon}
            </div>
            {info}
        </div>
    )
}

export default AboutCard;