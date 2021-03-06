import React from 'react';

import ProjectItemContent from './ProjectItemContent';


function ProjectItem({title, subtitle, image, url, info, icons, layoutLeft}) {
    return (
        <div className={layoutLeft ? "project-item-container left" : "project-item-container"}>
            <ProjectItemContent
                title={title}
                subtitle={subtitle}
                info={info}
                icons={icons}
                layoutLeft={layoutLeft}/>
    
            
            <a href={url} target="_blank" rel="noopener noreferrer" className="project-item-image-container">
                <img src={image} alt={title + ": " + subtitle}/>
                <div className="project-item-image-overlay"/>
            </a>
        </div>
    )
}

export default ProjectItem;