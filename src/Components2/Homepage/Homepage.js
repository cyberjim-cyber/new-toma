import React from 'react';
import Footer from '../Footer/Footer';
import Carousel from '../Header/Carousel/Carousel';
import Project from '../Project/Project';
import RecentNews from '../RecentNews/RecentNews';
import Suscribe from '../Suscribe/Suscribe';
import Toma from '../Toma/Toma';
import Welcome from '../Welcome/Welcome';
import Zoom from '../Zoom/Zoom';


const Homepage = () => {
    return (
        <div>
            <Carousel/>
            <Welcome/>
            <Zoom/>
            <Project/>
            <Toma/>
            <RecentNews/>
            <Suscribe/>
            <Footer/>
        </div>
    );
};

export default Homepage;