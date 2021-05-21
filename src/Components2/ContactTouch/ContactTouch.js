import React from 'react';
import './ContactTouch.css';
import left from '../../images/Contact/contact_page_shape1.png';


const ContactTouch = () => {
    return (
        <div className="main-touch">
            <div className="row">

                <div className="col-md-4">
                <div className="left-img">
                <img src={left} alt="" />
                </div>
                </div>

                <div className="col-md-5">

                <div className="second-touch">
                <div className="touch-text">
                    <h2>Get in Touch</h2>
                    <p>We’re ready to answer any questions you might have about existing coverage, a new policy, or any other help you need. You can call us at +088 (02) 9339477 / 9339045 Or, fill out our information form below and one of our agents will be in touch as soon as possible.</p>
                </div>
            </div>
                </div>
            </div>

            <div className="right-touch">
             
            </div>
      
           
        </div>
    );
};

export default ContactTouch;