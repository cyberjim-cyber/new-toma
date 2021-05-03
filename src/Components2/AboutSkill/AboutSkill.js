import React from 'react';
import './AboutSkill.css';
import rightImg from '../../images/other/about_right_shape2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBuilding, faChartLine, faCoffee, faHome, faLightbulb, faUsers } from '@fortawesome/free-solid-svg-icons';

const AboutSkill = () => {
    AOS.init();
    return (
        <div className="main-skill">
            <div className="second-skill">
            <div data-aos-duration="900" data-aos="fade-up" className="top-skill">
                <h2>SKILLS AND EXPERIENCES</h2>
                <p>Our aim is to enhance experiences by inspiring standard of living and by giving a sense of security. We’re not here to give just a property, we’re here to help create memories; the imprints of life that last generations.</p>
            </div>
            <div data-aos-duration="900" data-aos="fade-up" className="row first-row">
                <div  className="col-md-4 skill-col">
                    <div className="font-div">
                    <FontAwesomeIcon  className="font-icon" icon={faHome} />
                    </div>
                    <h3>House Smart</h3>
                    <p>Our aim is to enhance experiences by inspiring standard of living and by giving a sense of security. We’re not</p>
                </div>
                <div className="col-md-4 skill-col">
                <div className="font-div">
                    <FontAwesomeIcon className="font-icon" icon={faChartLine} />
                    </div>
                    <h3>Analysis</h3>
                    <p>In tortor neque, faucibus a sem vulputate, tristique faucibus velit. Etiam porttitor eget leo non maximus.</p>
                </div>
                <div className="col-md-4 skill-col">
                <div className="font-div">
                    <FontAwesomeIcon className="font-icon" icon={faLightbulb} />
                    </div>
                    <h3>Concept</h3>
                    <p>In tortor neque, faucibus a sem vulputate, tristique faucibus velit. Etiam porttitor eget leo non maximus.</p>
                </div>
                </div>

                <div data-aos-duration="900" data-aos="fade-up" className="row second-row">
                    <div className="col-md-4 skill-col">
                    <div className="font-div">
                    <FontAwesomeIcon className="font-icon" icon={faBook} />
                    </div>
                        <h3>Planning</h3>
                        <p>Our aim is to enhance experiences by inspiring standard of living and by giving a sense of security. We’re not</p>
                    </div>
                    <div className="col-md-4 skill-col ">
                    <div className="font-div">
                    <FontAwesomeIcon className="font-icon" icon={faUsers} />
                    </div>
                        <h3>Team work</h3>
                        <p>Our aim is to enhance experiences by inspiring standard of living and by giving a sense of security. We’re not</p>
                    </div>
                    <div className="col-md-4 skill-col">
                    <div className="font-div">
                    <FontAwesomeIcon className="font-icon" icon={faBuilding} />
                    </div>
                        <h3>Building Renovation</h3>
                        <p>Our aim is to enhance experiences by inspiring standard of living and by giving a sense of security. We’re no</p>
                    </div>

                </div>
            </div>
            <div data-aos-duration="900" data-aos="fade-up" className="right-img">
                <img src={rightImg} alt=""/>
            </div>
        </div>
    );
};

export default AboutSkill;