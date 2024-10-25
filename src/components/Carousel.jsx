import React, { lazy } from 'react';

import "../assets/css/carousel.css"


const Maincarousel = lazy(() => import('../components/Maincarousel'));
const MinCarosuel = lazy(() => import('../components/Mincarousel'));




function Carousel() {
    return (
        <div className='carousel-parent'> 
        <div className="carousel-header">Why should you choose Hexnode ?</div>
            <Maincarousel />
            <MinCarosuel />
        </div>
    );
}

export default Carousel;