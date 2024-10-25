import React ,{useState}from 'react';  

import { emailRegex } from '../common/validation';

import "../assets/css/herocomponent.css";

import heroImg from "../assets/images/hexnode-kiosk.webp";

function Herocomponent(props) {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!emailRegex.test(email)) {
          setEmailError('Please enter a valid email address.');
        } else {
          setEmailError('');
        }
      };
    
      const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (emailRegex.test(e.target.value)) {
          setEmailError(''); 
        } else {
          setEmailError('Invalid email address.');
        }
      };
    return (
        <div className='hero-component'> 
        <div className='hero-text-section'> 
            <div className='hero-text'>
            <p >Turn your devices into kiosks in a few minutes with Hexnode UEM</p>
            </div> 
            <div className='hero-form'>
                <input className='hero-email' type='text' placeholder='your work Email !' onChange={handleEmailChange}/> 
                <button className='hero-button' onClick={handleSubmit}>GET STARTED NOW!</button> 
               
            </div>
            <p className='hero-email-error'>{emailError}</p>

        </div>
        <div className='hero-img'>
            <img src={heroImg} alt='hero' />
        </div>

            
        </div>
    );
}

export default Herocomponent;