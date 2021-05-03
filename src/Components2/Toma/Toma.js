import React from 'react';
import './Toma.css';
import toma from '../../images/concern-1.png';
import right from '../../images/right_shape.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import rightimg from '../../images/right_shape.png';
import { Link } from 'react-router-dom';

const Toma = () => {
    AOS.init();
    return (
        <div className="main-toma">
            <div className="second-toma-div">
            <h3 data-aos-duration="900" data-aos="fade-up" style={{textAlign:"center",fontWeight:"900",marginBottom:"50px"}}>OUR SISTER CONCERN</h3>
            <div className="row">
                <div data-aos-duration="900" data-aos="fade-up" className="col-md-3 ">
                    <img className="toma-img" src={toma} alt=""/>
                    <h3 className="toma-h3">Toma Construction</h3>
                    <div className="butto">
                    <a className="lin" href="#">Read more</a>
                    </div>
                </div>
                <div data-aos-duration="900" data-aos="fade-up" className="col-md-3">
                <img className="toma-img" src={toma} alt=""/>
                    <h3 className="toma-h3">Toma Concreate</h3>
                    <div className="butto">
                    <a className="lin" href="#">Read more</a>
                    </div>
                </div>
                <div data-aos-duration="900" data-aos="fade-up" className="col-md-3">
                <img className="toma-img"src={toma} alt=""/>
                    <h3  className="toma-h3">Toma Properties</h3>
                    <div className="butto">
                    <a className="lin" href="#">Read more</a>
                    </div>
                </div>
                <div data-aos-duration="900" data-aos="fade-up" className="col-md-3">
                <img className="toma-img"src={toma} alt=""/>
                    <h3 className="toma-h3">Toma Concern</h3 >
                    <div className="butto">
                    <Link className="lin" to="/about">Read more</Link>
                    </div>
                </div>
            </div>
            </div>
            <div data-aos-duration="1500" data-aos="fade-up" className="right-toma-div ">
                <img className="right-toma" src={rightimg} alt=""/>
            </div>
        </div>
    );
};

export default Toma;