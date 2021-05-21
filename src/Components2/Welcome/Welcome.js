import React from 'react';
import './Welcome.css';
import left from '../../images/left-im1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const Welcome = () => {
    AOS.init();
    return (
        <div className="row main-welcome">
            <div className="col-md-6 col-sm-12" >
                <img className="lef   " src={left} data-aos-duration="900" data-aos="fade-up" alt=""/>
                <h2 className="img-welcome">Welcome to Toma Group</h2>
            </div>
            <div className="col-md-5 col-sm-12 wel-right">
            <h2>Toma</h2>
            <p className="wel-p">We are Toma Construction & Co. Ltd. (TCCL) the flag ship company of Toma Group has been the leading company of the conglomerate since its inception.

        We have come a long way from our inception during 1996, through lot of changes in the political, socio-economical arena of both national and global, gathered a lot of experience through tasking on challenging project and eventually mastered ourselves, seasoned our company to meet more challenges ahead and making this country proud of us.</p>
        <div className="butto">
          <Link className="lin" to="/about">Show more</Link>
        </div>
            </div>
            
            
        </div>
    );
};

export default Welcome;