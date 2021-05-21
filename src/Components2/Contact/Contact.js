import React from 'react';
import ContactCarousel from '../ContactCarousel/ContactCarousel';
import ContactInput from '../ContactInput/ContactInput';
import ContactTouch from '../ContactTouch/ContactTouch';
import Footer from '../Footer/Footer';
import Suscribe from '../Suscribe/Suscribe';

const Contact = () => {
    return (
        <div>
          <ContactCarousel/>
          <ContactTouch/>
          <ContactInput/>


          <Suscribe/>
          <Footer/>
        </div>
    );
};

export default Contact;