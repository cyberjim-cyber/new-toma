import React from 'react';
import './Suscribe.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Suscribe = () => {
    AOS.init();
    return (
        <div className="main-suscribe">
            <div data-aos-duration="900" data-aos="fade-down" className="suscribe-div">
            <h2 className="sus-h2">NEWSLETTER SUBSCRIBE</h2>
            <input className="form-control input" placeholder="Your mail address" type="text"/>
            <div className="subscribe-button">
                <button className="but">Subscribe</button>
            </div>
            </div>
        </div>
    );
};

export default Suscribe;