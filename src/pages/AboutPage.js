import React from 'react';

import SectionHeader from '../components/SectionHeader';
import AboutCard from '../components/AboutCard';
import AboutIcon from '../assets/about/AboutIcon';
import WorkIcon from '../assets/about/WorkIcon';
import SchoolIcon from '../assets/about/SchoolIcon';


const BACKGROUND_INFO = 
    <div>
        Besides engineering and design, I am a musician and photographer. I love to play guitar in my free time and try to get outside whenever I can - be that to surf, ski, hike, camp, climb… the list goes on. 
        <br></br><br></br>
        I love challenges and fast-paced environments where I have to learn on the go.
    </div>

const WORK_INFO =
    <div>
        I currently work as a software engineer on the applied machine learning team at 
        <span className="about-companyname"> Oracle NetSuite</span>
    </div>

const EDUCATION_INFO = 
    <div>
        <h4>
            <span>MS Computer Science</span>
            <br></br>
            <span className="about-schoolname">Stanford University ’19</span>
        </h4>

        Concentration in Human Computer Interaction. 
        My capstone project was a cross-platform AR mobile messaging app called Quest.

        <br></br><br></br>
        
        <h4>
            <span>BS Symbolic Systems</span>
            <br></br>
            <span className="about-schoolname">Stanford University ’19</span>
        </h4>

        Concentrations in Artificial Intelligence and Cognitive Science.
        Symbolic Systems is an interdisciplinary major comprised of Computer Science, psychology, philosophy, and linguistics.
    </div>



function AboutPage() {
    return (
        <div className="page-container">
            <SectionHeader title="About Me"/>

            <div className="page-content about-page-content">
                <div className="about-headshot-container">
                    <img className="about-headshot" src={require('../assets/about/about-headshot-ian.jpg')}/>
                </div>

                <div className="about-info-container">
                    <AboutCard icon={<AboutIcon/>} info={BACKGROUND_INFO}/>
                    <AboutCard icon={<WorkIcon/>} info={WORK_INFO}/>
                    <AboutCard icon={<SchoolIcon/>} info={EDUCATION_INFO}/>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;