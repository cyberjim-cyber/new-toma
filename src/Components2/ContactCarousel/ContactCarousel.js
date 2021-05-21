import React from 'react';
import './ContactCarousel.css';
import logo from '../../images/toma-logo.png';
import { Link } from 'react-router-dom';

const ContactCarousel = () => {
    return (
        <div className="main-about">
        <div className="about-banner">
            <div className="logo">
               <Link to="/"> <img className="about-img" src={logo} alt=""/></Link>
            </div>
        </div>
        <div className="over-text">
            <h2>CONTACT US</h2>
            <p>HOME /CONTACT</p>
        </div>
    </div>
    );
};

export default ContactCarousel;