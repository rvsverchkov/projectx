import React from "react";
import "./Platform.css";
import Logo from "../Logo/Logo";

const Platform = () => {
    return (
        <div className="platform">
            <div className="platform__left-container">
                <div className="platform__text-container">
                    <p className="platform__title">The Web3<br></br>Platform</p>
                    <p className="platform__subtitle">Discover unique opportunities<br></br>for passive income<br></br>from investments<br></br>Explore the world of DeFi</p>
                </div>
                <div className="base-button button-launch">LAUNCH APP</div>
            </div>
            <Logo />
        </div>
    );
};

export default Platform;
