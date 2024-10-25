
import React, { useState } from "react";

import "../assets/css/header.css";  

import menuIcon from "../assets/images/menu.png";
import closeIcon from "../assets/images/close.png";

export default function HeaderComponent() { 

    const [showMobilemenu, setShowMobilemenu] = useState(false);

    const handleMenu = () => {
        setShowMobilemenu(!showMobilemenu);
    };

    return (
        <div className="Header-Parent"> 
            <div className="Header-Name">
                <h3>hexnode</h3>
            </div> 
            <div className="Header-Button">
                <button role="button" data-testid="trial-button">
                    <a href="https://www.hexnode.com/mobile-device-management/cloud/signup/" target="_blank" rel="noreferrer">14 DAY FREE TRIAL</a>
                </button> 
                <img className="hamburger-icon" src={menuIcon} alt="hamburger-menu" onClick={handleMenu} />
            </div> 

            <div className={showMobilemenu ? "hamburger-screen active" : "hamburger-screen"}>
                <div className="Hamburger-Header-section"> 
                    <img src={closeIcon} alt="close" onClick={handleMenu} />
                </div> 
                <div className="Hamburger-Body-section"> 
                    <button className="button">
                        <a href="https://www.hexnode.com/mobile-device-management/cloud/signup/" target="_blank" rel="noreferrer">14 DAY FREE TRIAL</a>
                    </button> 
                    <span className="login-text">Login</span>
                </div>
            </div>
        </div>
    );
}
