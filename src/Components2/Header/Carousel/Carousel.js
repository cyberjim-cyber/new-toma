import React from 'react';
import one from '../../../images/slider11.jpg';
import two from '../../../images/slider12.jpg';
import three from '../../../images/slider13.jpg';
import './Carousel.css';
import logo from '../../../images/toma-logo.png';

const Carousel = () => {
    return (
      <div>
        <div className="row">
          <div className="col-md-8 red">

          </div>
          <div className="col-md-4 blue">

          </div>
        </div>
        <div id="carouselExampleFade" class="carousel slide main-carousel carousel-fade" data-bs-pause="false" data-bs-ride="carousel">
           <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
  <div class="logo">
      
    </div>
    <div class="carousel-item active" data-bs-pause="false"  data-bs-interval="5000">
    <a className="logo" href="#">
            <img className="trans" src={logo} alt="Toma Group" />
        </a>
      <img className="car" src={one} class="d-block w-100 car" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h2>BUILD TO KEEP SAFE</h2>
        <h4 className="carouse-p">SPACIOUS, ECO FRIENDLY AND FUNCTIONAL.</h4>
        <div className="carousel-button">
          <a className="carousel-link" href="#">About us</a>
        </div>
        <div className="carousel-button2">
          <a className="carousel-link2" href="#">Lets Talk</a>
        </div>
      </div>
    </div>
    <div class="carousel-item" data-bs-pause="false"   data-bs-interval="5000">
    <a className="logo" href="#">
            <img class="trans" src={logo} alt="Toma Group" />
        </a>
      <img  src={two} class="d-block w-100 car" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h2>MOGHBAZAR-MOUCHAK FLYOVER</h2>
        <h4 className="carouse-p">Some representative placeholder content for the first slide.</h4>
        <div className="carousel-button">
          <a className="carousel-link" href="#">View Project</a>
        </div>
        <div className="carousel-button2">
          <a className="carousel-link2" href="#">Lets talk</a>
        </div>
      </div>
     
    </div>
    <div class="carousel-item"data-bs-pause="false"   data-bs-interval="5000">
    <a className="logo" href="#">
            <img class="trans" src={logo} alt="Toma Group" />
        </a>
      <img  src={three} class="d-block w-100 car" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h2>BUILD STRONG BETTER PERFORMANCE</h2>
        <h4 className="carouse-p">SPACIOUS, ECO FRIENDLY AND FUNCTIONAL.</h4>
        <div className="carousel-button">
          <a className="carousel-link" href="#">Project</a>
        </div>
        <div className="carousel-button2">
          <a className="carousel-link2" href="#">Lets talk</a>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div></div>
    );
};

export default Carousel;