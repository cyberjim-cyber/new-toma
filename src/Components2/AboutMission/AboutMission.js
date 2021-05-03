import React from 'react';
import './AboutMission.css';
import missionRight from '../../images/other/about_right_shape1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMission = () => {
    AOS.init();
    return (
        <div className="main-mission">
            <div className="second-mission">
                <div className="row">
                    <div data-aos-duration="900" data-aos="fade-up"className="col-md-6 mission-left">
                        <h3>What we do?</h3>
                        <p className="mission-left-p">TCCL believes that global competition, coupled with concerns about climate change, is creating an important new mandate for technology innovation, exceptional customer service and strong policy leadership. We are investing in new technologies, expanding our use of technology for customers and ensuring that our customer service is among the best in the construction industry. For decades, the company has dedicated extensive resources to a continuous development and upgrading of its extensive construction equipment ranging from small Mixture Machine to Heavy Rail Temping Machine covering Foundations, Bridges, Marine-Jetty, Railway Tracking & Bridges, Road building & Heavy Civil Construction, etc.</p>
                    </div>
                    <div data-aos-duration="900" data-aos="fade-up" className="col-md-6">
                        <div >
                        <h2 className="mission-right-h2">Our Mission</h2>
                        <p className="mission-right-p">Serving the clients with commitments, ensuring safety and value-added products, having "leadership with excellence" by upholding and maintaining reputation for quality, integrity and honesty, to the full satisfaction of our valued customers.</p>
                        </div>
                        <div data-aos-duration="900" data-aos="fade-up">
                            <h2 className="mission-right-h2">Our Vision</h2>
                            <p className="mission-right-p">Toma is commited to being a Construction Conglomerate that is to known externally for quality,integrity and commitment with resources and internally for profitability and employee satisfactions</p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div data-aos-duration="900" data-aos="fade-up" className="mission-right-img">
                <img src={missionRight} alt=""/>
            </div>
        </div>
    );
};

export default AboutMission;