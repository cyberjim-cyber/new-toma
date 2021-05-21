import React from 'react';
import './Project.css';
import road from '../../images/project1.jpg';
import fly from '../../images/project3.jpg';
import build from '../../images/project5.jpg';
import rail from '../../images/project6.jpg';
import marine from '../../images/project7.jpg';
import grain from '../../images/project8.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Project = () => {
  AOS.init();
    return (
        <div className="main-project">
            <h2 className="project-h2">Project Highlight</h2>
            <div className="row main">
                <div data-aos-duration="900" data-aos="fade-up" className="col-md-4 project-hover project-div ">
               <a className="project-link" href="#"> <img  className="img-pro" src={road} alt=""/>
               <div className="over-img">
               <h2 >Flyover Project</h2>
               </div>
              </a>
               
                </div>
                <div data-aos-duration="900" data-aos="fade-up" className="col-md-4  project-div  ">
               
                  <a href="#">  <img  className="img-pro" src={fly} alt=""/>    <h2 className="over-img">Food Project</h2></a>
                
                </div>
                <div data-aos-duration="900" data-aos="fade-up" className="col-md-4  project-div">
                  <a href="#">  <img  className="img-pro" src={grain} alt=""/>    <h2 className="over-img">Railway Project</h2></a>
              
                </div></div>
                <div className="row main second-row">
                <div data-aos-duration="900" data-aos="fade-up" className="col-md-4 project-div  ">
              <a href="#">  <img  className="img-pro high-img" src={rail} alt=""/>    <h2 className="over-img">Highway Project</h2></a>
          
                </div>
                <div data-aos-duration="900" data-aos="fade-up" className="col-md-4  project-div">
                   <a href="#"> <img className="img-pro"src={marine} alt=""/>  <h2 className="over-img">Building Project</h2>
                   </a>
                 
                </div>
                <div data-aos-duration="900" data-aos="fade-up" className="col-md-4 project-div">
                   <a href="#"> <img className="img-pro"src={build} alt=""/>
                   <h2 className="over-img">Bridge Project</h2></a>
                   
                </div>
            </div>
            <div className="project-button">
          <a className="project-link" href="#">View all project</a>
        </div>
        </div>
    );
};

export default Project;