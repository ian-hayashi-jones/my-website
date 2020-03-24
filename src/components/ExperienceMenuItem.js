import React from 'react';

import GuildLogo from '../assets/experience/GuildLogo';
import UDLogo from '../assets/experience/UDLogo';
import OracleNetSuiteLogo from '../assets/experience/OracleNetSuiteLogo';
import NvidiaLogo from '../assets/experience/NvidiaLogo';
import StanfordEngineeringLogo from '../assets/experience/StanfordEngineeringLogo';
import ToyotaLogo from '../assets/experience/ToyotaLogo'

function ExperienceMenuItem({company, highlight}) {
    let companyLogo = {};
    switch(company) {
        case 'Guild':
            companyLogo = <GuildLogo highlight={highlight}/>;
            break;
        case 'Utility Design':
            companyLogo = <UDLogo highlight={highlight}/>;
            break;
        case 'Oracle NetSuite':
            companyLogo = <OracleNetSuiteLogo highlight={highlight}/>;
            break;
        case 'NVIDIA':
            companyLogo = <NvidiaLogo highlight={highlight}/>;
            break;
        case 'Stanford University School of Engineering':
            companyLogo = <StanfordEngineeringLogo highlight={highlight}/>;
            break;
        case 'Toyota InfoTech Labs':
            companyLogo = <ToyotaLogo highlight={highlight}/>;
            break;
        default:
            break;
    }

    return (
        <div className={highlight ? "experience-menu-logo-container experience-menu-logo-container-highlight" : "experience-menu-logo-container"}>
            {companyLogo}
        </div>
    )
}

export default ExperienceMenuItem;