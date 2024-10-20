import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header__blue-img"></div>
            {/* <div className="affiliate__decoration-one"></div> */}
            <div className="affiliate__decoration-two"></div>
            <div className="discover__ellipse"></div>
            <div className="header__logo-container">
                <div className="header__logo"></div>
                <div className="header__logo-text"></div>
            </div>
            <div className="header__right-block">
                <a href="#marketing" className="header__link">MARKETING</a>
                <a href="#presentation" className="header__link">PRESENTATION</a>
                <a href="#answers" className="header__link">F.A.Q.</a>
                <div className="header__link-icon" onClick={() => {
                    window.open('https://t.me/xStrategyx_bot', '_blank')
                }}>
                    <div className="header__icon"></div>
                    <div className="header__link">CHANNEL</div>
                </div>
                <div className="header__link-icon" onClick={() => {
                    window.open('https://t.me/xStrategyx_bot', '_blank')
                }}>
                    <div className="header__icon"></div>
                    <div className="header__link">SUPPORT</div>
                </div>
            </div>
        </div>
    );
};

export default Header;
