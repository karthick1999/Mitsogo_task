import React, { useState } from 'react';

import { MainCarouselItems as items } from '../common/constants';
import '../assets/css/maincarousel.css';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to handle navigation
    const showItem = (index) => {
        if (index < 0) {
            setCurrentIndex(0); // Disable left arrow at the first item
        } else if (index >= items.length) {
            setCurrentIndex(items.length - 1); // Disable right arrow at the last item
        } else {
            setCurrentIndex(index);
        }
    };

    return (
        <div className="carousel">
            {/* Carousel inner wrapper */}
            <div className="carousel-inner">
                <div
                    className="carousel-track"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {items.map((item, index) => (
                        <div className="carousel-item" key={index}>
                            <div className='carousel-img'>
                                <img src='https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fchris-robinson.png&w=2048&q=80' alt='carousel-img' />
                            </div>
                            <div className="carouse-detial">
                                <div className="carousel-detial-top">img elements must have an alt prop, either with meaningful text, </div>
                                <div className="carousel-detial-bottom">
                                    <p className='carousel-detial-auth-title'>Mr kitzubuki</p>
                                    <p className='carousel-detial-auth-name'>Chan</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Arrows */}
            <div className="arrow-container">
                <button
                    className="arrow left-arrow"
                    onClick={() => showItem(currentIndex - 1)}
                    disabled={currentIndex === 0} // Disable when on the first slide
                >
                    ❮
                </button>
                <button
                    className="arrow right-arrow"
                    onClick={() => showItem(currentIndex + 1)}
                    disabled={currentIndex === items.length - 1} // Disable when on the last slide
                >
                    ❯
                </button>
            </div>
        </div>
    );
};

export default Carousel;
