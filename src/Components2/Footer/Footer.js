import React from 'react';
import './Footer.css';
import footer from '../../images/footer_shape.png';
import logo2 from '../../images/toma-logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    AOS.init();
    return (
        <div className="footer">
            <div className="row">
                <div data-aos-duration="900" data-aos="fade-up"  className="col-md-5">
                    <img className="footer-left" src={footer} alt=""/>
                    <div className="footer-logo">
                   <a href="#"> <img  src={logo2} alt=""/></a>
                   <p>Copyright © 2018 Toma Group</p>
                   <p>Under Construction by TG IT</p></div>

                </div>
                    <div className="col-md-2 footer-link">
                        <h6>QUICK LINKS</h6>
                        <ul className="footer-ul">
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Business</a></li>
                            <li><a href="#">Recent News</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Carrers</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 footer-link">
                        <p>CONTACT DETAILS</p>
                        <p>77/1 KAKRAIL, RAMNA, VIP ROAD, DHAKA-1000</p>
                        <p>TEL: +88 (02) 9339477 / 9339045</p>
                        <p>FAX: +88 (02) 9339416</p>
                        <div className="ico">
                            <a href="#"><FontAwesomeIcon icon={'faebook'} /></a>
                            <a href="#"><FontAwesomeIcon icon="instgram" /></a>
                            <a href="#"><FontAwesomeIcon icon="linkedin" /></a>
                        </div>
                    </div>
                    <div className="col-md-2 footer-link">
                        <h4>Yours</h4><br/>
                        <h3>Constructer</h3>
                        <h2>Partner</h2>
                    </div>
            </div>
        </div>
    );
};

export default Footer;