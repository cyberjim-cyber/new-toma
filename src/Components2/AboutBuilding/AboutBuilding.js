import React from 'react';
import './AboutBuilding.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutBuilding = () => {
    AOS.init();
    return (
        <div className="main-building">
          <div data-aos-duration="900" data-aos="fade-up" className="building-text">
          <h2>Core Values</h2>
                    <p>Core Values
                    Our handpicked teams of experienced and qualified Architects, Engineers and Professionals from different arena have been our pride and means for success. Our enriched Human Resource are well sound and seasoned with periodic Training Programs which are main streams of our success story. They are all standing by for catering and Construction Challenges we can have for your business and ventures.</p>
                    </div>
        </div>
    );
};

export default AboutBuilding;