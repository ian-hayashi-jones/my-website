import React from 'react';



function ProjectItemContent({title, subtitle, info, icons, layoutLeft}) {
    return (
        <div className={layoutLeft ? "project-item-content-container left" : "project-item-content-container right"}>
            <h3 className="project-item-title">
                {title}
            </h3>
   
            <h3 className="project-item-subtitle">
                {!layoutLeft && subtitle}
                <span className={layoutLeft ? "project-item-icons left" : "project-item-icons right"}>
                    {icons.map((icon, key) => (
                        <a className="project-item-icon" href={icon.url} target="_blank" rel="noopener noreferrer" key={key}>
                            {icon.icon}
                        </a>
                    ))}
                </span>
                {layoutLeft && subtitle}
            </h3>

            <div className={layoutLeft ? "project-item-info left" : "project-item-info"}>
                {info}
            </div>
        </div>
    )
}

export default ProjectItemContent;