import React from 'react';
import './AboutCarousel.css';
import logo from '../../images/toma-logo.png';
import { Link } from 'react-router-dom';
const AboutCarousel = () => {
    return (
        <div className="main-about">
            <div className="about-banner">
                <div className="logo">
                   <Link to="/"> <img className="about-img" src={logo} alt=""/></Link>
                </div>
            </div>
            <div className="over-text">
                <h2>ABOUT US</h2>
                <p>HOME /COMPANY OVERVIEW</p>
            </div>
        </div>
    );
};

export default AboutCarousel;