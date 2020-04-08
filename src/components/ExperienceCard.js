import React from 'react';


function ExperienceCard({company, website, position, dates, skills, info}) {
    return (
        <div className="experience-card-info-container">
            <div>
                <h3 className="header"> 
                    <span>
                        {position}
                    </span>
                    <br className="experience-position-br"/>
                    <span className="experience-company">
                        <a href={website} target="_blank" rel="noopener noreferrer">
                            {" @ " + company}
                        </a>
                    </span>
                    <div className="experience-dates">
                        {dates}
                    </div>
                </h3>

                <div className="experience-card-info">
                    {info}
                </div>
                <br></br>

                <span className="experience-skills">Skills: </span>{skills}

            </div>
        </div>
    )
}

export default ExperienceCard;