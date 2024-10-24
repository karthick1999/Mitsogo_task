// Import React, OwlCarousel, and CSS
import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel2';

import { minCarouselImages } from '../common/constants';
import "../assets/css/mincarousel.css";

const CarouselComponent = () => {
    const options = {
        items: 3,
        loop: true,
        margin: 20,
        autoplay: true,
        nav: false,
        dots: false,
        
    };

    return (
        <OwlCarousel options={options}> 
        {minCarouselImages.map((image)=>{
            return   <div className="item"><img src={image} alt="cr-image"/></div>
        })}
            {/* <div className="item"><img src={minCarouselImages[0]} alt="1"/></div>
            <div className="item"><img src={minCarouselImages[1]}alt="2"/></div>
            <div className="item"><img src={minCarouselImages[2]} alt="3"/></div>
            <div className="item"><img src={minCarouselImages[3]} alt="4"/></div> */}
        </OwlCarousel>
    );
};

export default CarouselComponent;

