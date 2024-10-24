import React from 'react';
import "../assets/css/description.css";

function Description(props) {
    return (
        <div className='description-parent'> 
        <div className='description-child'> 
            <h4>IDC</h4> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repudiandae 
                nobis explicabo blanditiis minima deleniti corrupti. 
                Nam minus enim maiores ullam iure, vero ratione temporibus quam distinctio totam, ad architecto!</p>

        </div>  
        <div className='hero-seperator'></div>
        <div className='description-child'>
        <h4>Gortner</h4> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repudiandae 
                nobis explicabo blanditiis minima deleniti corrupti. 
                Nam minus enim maiores ullam iure, vero ratione temporibus quam distinctio totam, ad architecto!</p>

        </div>
        <div className='hero-seperator'></div>

        <div className='description-child'>
        <h4>Forester</h4> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repudiandae 
                nobis explicabo blanditiis minima deleniti corrupti. 
                Nam minus enim maiores ullam iure, vero ratione temporibus quam distinctio totam, ad architecto!</p>

        </div>
            
        </div>
    );
}

export default Description;