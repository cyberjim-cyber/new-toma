import React from 'react';
import './Zoom.css';
import road from '../../images/road-highway-1.jpg';
import fly from '../../images/flyover-1.jpg';
import build from '../../images/building-structure-md.jpg';
import rail from '../../images/railway-md.jpg';
import marine from '../../images/marine-docks-md.jpg';
import grain from '../../images/grain-silo-1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Zoom = () => {
    AOS.init();
    return (
        <div className="main-zoom">
            <div data-aos-duration="900" data-aos="fade-up" className="row  zoom">
                <div className="col-md-3">

               
        <div className="col hover">
            <img className="z-height" src={road} alt=""/>
            <h3 className="zoom-h3">Roads and Highway</h3>
          
        </div>
        <div className="col hover">
        <img className="z-height" src={rail} alt=""/>
        <h3 className="zoom-h3">Railway and ancliliuris</h3>
        </div> </div>
        <div className="col-md-3 hover">
        <img className="z-not" src={fly} alt=""/>
        <h3 className="zoom-h3">Flyover and bridge</h3>

        </div>
        <div className="col-md-3">
            <div className="col hover">
            <img className="z-height"src={build} alt=""/>
            <h3 className="zoom-h3">Build and structure</h3>
            </div>
            <div className="col hover">
                <img className="z-height"src={marine} alt=""/>
                <h3 className="zoom-h3">Jetty and merine docs</h3>
            </div>
           
        </div>
        <div className="col-md-3">
            <div  className="col hover back-blue">
                <h4 className="zoom-h3">Embankment and river guard</h4>
            </div>
            <div style={{paddingLeft:"0px"}} className="col hover">
                <img className="z-height last"src={grain} alt=""/>
                <h3 className="zoom-h3">Food grain sild</h3>
            </div>
        </div>
        </div>
        
        
        </div>
    );
};

export default Zoom;