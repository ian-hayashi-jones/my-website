import React, { useState } from 'react';

import SectionHeader from '../components/SectionHeader';
import ExperienceMenuItem from '../components/ExperienceMenuItem';
import ExperienceCard from '../components/ExperienceCard';

import OracleNetSuiteLogo from '../assets/experience/OracleNetSuiteLogo';
import UDLogo from '../assets/experience/UDLogo';
import NvidiaLogo from '../assets/experience/NvidiaLogo';
import StanfordEngineeringLogo from '../assets/experience/StanfordEngineeringLogo';
import ToyotaLogo from '../assets/experience/ToyotaLogo';


const UD_INFO = 
    <div>
        <div className="experience-paragraph">
            Utility Design is a 5-person LA-based startup that creates products to help musicians learn instruments quicker and more efficiently.
        </div>
        <br></br>
        <div className="experience-paragraph">
            I provided technical consultation to create and 
            launch <a href="https://utility.design/products/ud-rep-pedal" target="_blank" rel="noopener noreferrer">UD Rep</a> and <a href="https://utility.design/products/ud-vidami-pedal" target='_blank' rel="noopener noreferrer">UD Vidami</a> guitar 
            pedals, tools to learn guitar through online videos.
        </div>
        <br></br>
        <div className="experience-paragraph">
            I designed and currently maintain the ecommerce website - which has sold hundreds of pedals - and provided design consultation for the physical pedals.
        </div>
    </div>

const ORACLE_NETSUITE_INFO =
    <div>
        <div className="experience-paragraph">
            As a member of the first applied machine learning team at NetSuite, I helped ship the first machine learning tools for our customers.
        </div>
        <br></br>
        <div className="experience-paragraph">
            I applied machine learning algorithms to assist in Supply Chain Management decisions, utilizing massive data sets to deliver accurate predictions.
        </div>
    </div>

const NVIDIA_INFO =
    <div className="experience-paragraph">
        I worked on the Big Data and Deep Learning Cloud Platform team, implementing real-time big-data pipelines 
        for <a href="https://www.nvidia.com/en-us/geforce-now/" target="_blank" rel="noopener noreferrer">NVIDIA GeForce Now</a>, a streaming video game subscription service.
    </div>

const STANFORD_ENGINEERING_INFO =
    <div className="experience-paragraph">
        I was a course assistant for <a href="https://explorecourses.stanford.edu/search?q=CS108" target="_blank" rel="noopener noreferrer">Object-Oriented Systems Design</a>, 
        taught by Dr. Patrick Young at Stanford. In this role, I assisted students with debugging, helped develop OOP best practices, held office hours, and assessed student programming assignments and projects.
    </div>

const TOYOTA_INFO =
    <div>
        <div className="experience-paragraph">
            I was a research intern under Kyungtae Han, exploring novel techniques for autonomous driving and driver assistance with the Digital Twin Project.
        </div>
        <br></br>
        <div className="experience-paragraph">
            I implemented long short-term memory neural networks for predicting vehicle acceleration behavior, and researched experimental deep learning methods for driving.
        </div>
        <br></br>
        <div className="experience-paragraph">
            I <a href="https://ieeexplore.ieee.org/document/8814063" target="_blank" rel="noopener noreferrer">published a paper</a> through IEEE, at the Intelligent Vehicles Symposium ’19 in Paris, France.
        </div>
    </div>

function ExperiencePage() {

    const [currExperience, setCurrExperience] = useState(0);

    const experiences = [
        <ExperienceCard className="experience-utility-design" 
                        logo={<UDLogo/>}
                        company="Utility Design" 
                        website="https://utility.design/"
                        position="Technical and Design Consultant" 
                        dates="2018 - present" 
                        skills="Javascript, HTML, CSS, Sketch, Adobe Suite" 
                        info={UD_INFO}/>,

        <ExperienceCard className="experience-oracle-netsuite" 
                        logo={<OracleNetSuiteLogo/>}
                        company="Oracle NetSuite" 
                        website="https://www.netsuite.com/portal/home.shtml"
                        position="Software Engineer" 
                        dates="2019 - present" 
                        skills="Machine Learning, Java, SQL" 
                        info={ORACLE_NETSUITE_INFO}/>,

        <ExperienceCard className="experience-nvidia" 
                        logo={<NvidiaLogo/>}
                        company="NVIDIA" 
                        website="https://www.nvidia.com/en-us/"
                        position="Software Engineer Intern" 
                        dates="2019" 
                        skills="Apache Spark, Apache Kafka, REST APIs, React, Javascript, HTML, CSS" 
                        info={NVIDIA_INFO}/>,
                    
        <ExperienceCard className="experience-stanford-engineering" 
                        logo={<StanfordEngineeringLogo/>}
                        company="Stanford School of Engineering" 
                        website="https://engineering.stanford.edu/"
                        position="Course Assistant" 
                        dates="2019" 
                        skills="Java, OOP, communication, teaching" 
                        info={STANFORD_ENGINEERING_INFO}/>,

        <ExperienceCard className="experience-toyota" 
                        logo={<ToyotaLogo/>}
                        company="Toyota InfoTech Labs" 
                        website="https://www.tri.global/research/"
                        position="Deep Learning Research Intern" 
                        dates="2018 - 2019" 
                        skills="Deep Learning, Neural Networks, Python, Lua, Torch" 
                        info={TOYOTA_INFO}/>
    ]



    return (
        <div className="page-container">
            <SectionHeader title="Jobs I've Had"/>

            <div className="page-content experience-container">
                <div className="experience-menu-container">
                    <div onClick={() => setCurrExperience(0)}>
                        <ExperienceMenuItem company="Utility Design" highlight={currExperience === 0 ? true : false}/>
                    </div>
                    
                    <div onClick={() => setCurrExperience(1)}>
                        <ExperienceMenuItem company="Oracle NetSuite" highlight={currExperience === 1 ? true : false}/>
                    </div>

                    <div onClick={() => setCurrExperience(2)}>
                        <ExperienceMenuItem company="NVIDIA" highlight={currExperience === 2 ? true : false}/>
                    </div>

                    <div onClick={() => setCurrExperience(3)}>
                        <ExperienceMenuItem company="Stanford University School of Engineering" highlight={currExperience === 3 ? true : false}/>
                    </div>

                    <div onClick={() => setCurrExperience(4)}>
                        <ExperienceMenuItem company="Toyota InfoTech Labs" highlight={currExperience === 4 ? true : false}/>
                    </div>
                </div>

                <div>
                    {experiences[currExperience]}
                </div>
            </div>
        </div>
    )
}

export default ExperiencePage;
