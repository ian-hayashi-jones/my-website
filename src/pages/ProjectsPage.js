import React from 'react';

import SectionHeader from '../components/SectionHeader';
import ProjectItem from '../components/ProjectItem';

import YouTubeIcon from '../assets/projects/YouTubeIcon';
import PaperIcon from '../assets/projects/PaperIcon';
import ItchIcon from '../assets/projects/ItchIcon';
import GithubIcon from '../assets/projects/GithubIcon';

import toyotaImage from '../assets/projects/toyota-project-tile.png';
import avalaunchImage from '../assets/projects/avalaunch-project-tile.png';
import countryMusicImage from '../assets/projects/country-explainer-project-tile.png';
import questImage from '../assets/projects/quest-project-tile.png';
import podmateImage from '../assets/projects/podmate-project-tile.png';
import toyotaPdf from '../assets/projects/toyota-lstm-presentation.pdf';
import countryPdf from '../assets/projects/the-most-country-lyrics-paper.pdf';


const projects = [
    {
        title: 'LSTM neural network',
        subtitle: 'research paper',
        image: toyotaImage,
        url: toyotaPdf,
        info: 'As a deep learning research intern at Toyota InfoTech Labs, I published a paper at IEEE’s Intelligent Vehicles Symposium ’19 in Paris, France. The paper introduces a novel way to predict acceleration behavior or cars with LSTM neural networks.',
        icons: [
                    {icon: <PaperIcon/>,
                     url: 'https://ieeexplore.ieee.org/document/8814063'}
                ],
        layoutLeft: true
    },
    {
        title: 'Avalaunch',
        subtitle: '2D endless runner game',
        image: avalaunchImage,
        url: 'https://ian-hayashi-jones.github.io/avalaunch-site/',
        info: 'Avalaunch is a 2D endless runner video game implemented in Unity. Play as a parachute-skiier yeti riding frantically downhill to avoid an avalanche!',
        icons: [
                    {icon: <YouTubeIcon/>, 
                     url: 'https://www.youtube.com/watch?v=sgA7ot-YvrI'},
                    {icon: <ItchIcon/>,
                     url: 'https://stanfordstudentgames.itch.io/avalaunch'},
                    {icon: <GithubIcon/>, 
                     url: 'https://github.com/ian-hayashi-jones/yeti-avalaunch'}
                ],
        layoutLeft: false
    },
    {
        title: 'The \'Most Country\' Words',
        subtitle: 'interactive website',
        image: countryMusicImage,
        url: 'https://ian-hayashi-jones.github.io/countryMusicLyricsExplainer/',
        info: 'This interactive data visualization website analyzes thousands of songs to determine what words make up the country music genre.',
        icons: [
                    {icon: <GithubIcon/>, 
                     url: 'https://github.com/ian-hayashi-jones/countryMusicLyricsExplainer'},
                    {icon: <PaperIcon/>,
                     url: countryPdf}
                ],
        layoutLeft: true
    },
    {
        title: 'Quest',
        subtitle: 'cross-platform mobile AR app',
        image: questImage,
        url: 'https://ian-hayashi-jones.github.io/quest-site/',
        info: 'Quest is a cross-platform AR mobile messaging app that aims at making mobile messaging more personal. Design scavenger hunts for your partner and have them go on an Augment Reality Quest!',
        icons: [
                    {icon: <GithubIcon/>, 
                     url: 'https://github.com/Matt-F-Wu/quest'}
                ],
        layoutLeft: false
    },
    {
        title: 'PodMate',
        subtitle: 'mobile app design',
        image: podmateImage,
        url: 'https://ian-hayashi-jones.github.io/podmate-site/',
        info: 'PodMate is a design concept for a mobile app that helps Juul users quit. Set a goal, track your progress, and quit vaping!',
        icons: [],
        layoutLeft: true
    }
]


function ProjectsPage() {
    return (
        <div className="page-container">
            <SectionHeader title="Things I've Made"/>
            
            <div className="page-content">
                {projects.map((project, key) => (
                    <ProjectItem 
                        title={project.title}
                        subtitle={project.subtitle}
                        image={project.image}
                        url={project.url}
                        info={project.info}
                        icons={project.icons}
                        layoutLeft={project.layoutLeft}
                        key={key}/>
                ))}
            </div>
        </div>
    )
}

export default ProjectsPage;