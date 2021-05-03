import React from 'react';
import './AboutBegin.css';
import leftBegin from '../../images/other/about_left-im1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutBegin = () => {
    AOS.init();
    return (
        <div className="main-begin">
             <div data-aos-duration="900" data-aos="fade-up" className="left-begin-img">
                    <img src={leftBegin} alt=""/>
                </div>
            <div className="second-begin">
               
                <div className="row">
                    <div data-aos-duration="900" data-aos="fade-up"className="col-md-6 left-begin">
                        <h2 className="begin-bold">WE HELP CLIENTS <br/>
                        BUILT WORLD CLASS <br/>
                        CONSTRUCTION PROJECTS</h2>
                    </div>
                    <div data-aos-duration="900" data-aos="fade-up" className="col-md-6">
                        <h2 className="begin-h2">Our <br/>
                        BEGINNING</h2>
                        <p className="begin-p">Toma Construction & Co. Ltd. (TCCL) is one of the leading and reputed construction conglomerates in Bangladesh. Toma Construction & Co. Ltd. is a member of Toma Group. The Company has 25 years of experience and developed into a professional construction team that specializes in Bridges, Flyovers, Foundations, heavy civil construction, Jetty, Roads, Railway Tracks, Food grain Silo and other related infrastructures. Since its inception, the company has completed a good number of remarkable projects of various authorities in Bangladesh. TCCL’s Philosophy remains focused on delivering a safe, quality project in the most productive and efficient manner. The company is operating in more than 30 locations across the country. It has around 6,000 employees and an annual turnover of BDT more than 1000 crore.</p>
                        <div   className="butt">
                        <a className="lik" href="#">GET A QUATE </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBegin;