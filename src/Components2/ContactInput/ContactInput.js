import React from 'react';
import './ContactInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

const ContactInput = () => {
    return (
        <div className="main-input">
            <div className="second-input">
                <div className="row">
                    
                  
                    <div className="col-md-8">
                    <h3>Send us a message</h3>
                        <input placeholder="First Name" className="form-control in" type="text" />
                        <input placeholder="Last Name" className="form-control in" type="text" />
                        <input placeholder="Email" className="form-control in" type="text" />
                        <input placeholder="phone Number" className="form-control in" type="text" />
                        <textarea className="text-in" placeholder="Message" name="" id="" cols="30" rows="10"></textarea>
                        <button className="bu">Submit</button>
                    </div>
               

                    <div className="col-md-4 input-black">
                        <div className="img">
                            <div className="input-black-text">
                                <h5>
                                   
                                    Contact Information</h5>
                                <p>
                                <span><FontAwesomeIcon icon={faMapMarker} /></span>
                                    77/1 KAKRAIL, RAMNA, VIP ROAD, DHAKA-1000</p>
                                <p>
                                <span><FontAwesomeIcon icon={faMapMarker} /></span>
                                    +088 (02) 9339477 / 9339045</p>
                                <p>
                                <span><FontAwesomeIcon icon={faMapMarker} /></span>
                                    +088 (02) 9339416</p>
                                <p>
                                <span><FontAwesomeIcon icon={faMapMarker} /></span>
                                    info@tomagroup.com.bd</p>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ContactInput;