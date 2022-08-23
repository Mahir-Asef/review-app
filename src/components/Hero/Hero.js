import React from 'react';
import './Hero.css';
import demo from '../../images/demo.png.webp';
const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-body">
            <div className="pb-sm-5">
                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, pariatur?</h3><br />
                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, pariatur?</h3><br />
                <button className="btn btn-primary">See more</button>
            </div>
            <div className="img-div">
                <img src={demo} className="img-fluid" alt="" srcset="" /></div>
            </div>
        </div>
    );
};

export default Hero;