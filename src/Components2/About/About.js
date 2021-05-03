import React from 'react';
import AboutBegin from '../AboutBegin/AboutBegin';
import AboutBuilding from '../AboutBuilding/AboutBuilding';
import AboutCarousel from '../AboutCarousel/AboutCarousel';
import AboutMission from '../AboutMission/AboutMission';
import AboutSkill from '../AboutSkill/AboutSkill';
import Footer from '../Footer/Footer';

import Suscribe from '../Suscribe/Suscribe';

const About = () => {
    return (
        <div>
            <AboutCarousel/>
            <AboutBegin/>
            <AboutMission/>
            <AboutBuilding/>
            <AboutSkill/>
           <Suscribe/>
           <Footer/>

        </div>
    );
};

export default About;