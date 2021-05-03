import React from 'react';
import './RecentNews.css';
import news from '../../images/news.jpg';
import blog2 from '../../images/blog2.jpg'
import blog3 from '../../images/blog3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RecentNews = () => {
    AOS.init();
    return (
        <div className="main-recentNews">
            <h2 className="recent-h2">Recent News</h2>
            <div className="row">
                <div data-aos-duration="900" data-aos="fade-up"  className="col-md-4">
                    <div className="zoom-div">

                   
                    <a  href="#"><img src={news} alt=""/></a>
                    </div>
                    <p className="recent-p">Construction of A Concrete Grain Silo At Mongla port With Ancillary Facilities (50000 Mt Capacity) Constructed By Toma Construction Jv With...</p>
                </div>
                <div data-aos-duration="900" data-aos="fade-up"  className="col-md-4">
                <div className="zoom-div">
                    <a href="#"><img src={blog2} alt=""/></a>
                    </div>
                    <p className="recent-p">A contract was signed on 1st March 2015 between LGED and Toma Construction & Co. Ltd. for "Construction of Khulna Coal Based Power Plant Connecting...</p>
                </div>
                <div data-aos-duration="900" data-aos="fade-up"  className="col-md-4">
                    <div className="zoom-div">
                    <a href="#"><img src={blog3} alt=""/></a>
                    </div>
                    <p className="recent-p">Still we have our Hot Line (Call Centre/ Help Desk) number: GP 01755667070 besides Robi Number 01866667070...</p>
                </div>
            </div>
            <div   className="recent-butt">
          <a className="recent-lik" href="#">View all </a>
        </div>
        </div>
    );
};

export default RecentNews;