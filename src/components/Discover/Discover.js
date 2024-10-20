import React from "react";
import "./Discover.css";

const Discover = () => {
    return (
        <div className="discover-main">
            <div className="discover">
                <div className="discover__left-container">
                    <div className="discover__text-container">
                        <p className="discover__title">Discover unique passive income<br></br>
                            opportunities with xStrategy</p>
                        <p className="discover__subtitle">Get daily 1% of staking</p>
                    </div>
                    <div className="base-button button-launch">LAUNCH APP</div>
                    <div className="discover__text-container">
                        <p className="discover__title">Mobile friendly</p>
                        <p className="discover__subtitle">Govern your investments from<br></br>
                            a simple interface on your phone<br></br>
                            or computer – no need to have<br></br>
                            20 labs open</p>
                    </div>
                </div>
                <div className="discover__right-phone"></div>
                <div className="discover__decoration"></div>
            </div>
            <div id="presentation" className="discover__presentation-container">
                <p className="presentation__title">Presentation</p>
                <div className="presentation__buttons-container">
                    <div className="presentation__button base-other-button">EN</div>
                    <div className="presentation__button base-other-button">OTHER</div>
                </div>
            </div>
        </div>
    );
};

export default Discover;
