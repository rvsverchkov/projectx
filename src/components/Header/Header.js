import React from "react";
import "./Header.css";
import { ResponsiveNavbar } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header__blue-img"></div>
            <div className="affiliate__decoration-two"></div>
            <div className="discover__ellipse"></div>
            <div className="sub-header">
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
            <ResponsiveNavbar
                logo={<div className="icon-small"></div>}
                styles={{
                    navigation: { fontFamily: 'Arial, Helvetica, sans-serif' },
                    navigationBarSmall: {
                        backgroundColor: 'transparent',
                    },
                    navigationCardSmall: {
                        backgroundColor: '#191a21',
                    }
                }}
            >
                <ul>
                    <li><a href="#marketing" className="header__link header__link-sm" onClick={() => {
                        let closeButton = document.querySelector('.rhm-rn-navigation__icon');
                        closeButton.click()
                    }}>MARKETING</a></li>
                    <li><a href="#presentation" className="header__link header__link-sm" onClick={() => {
                        let closeButton = document.querySelector('.rhm-rn-navigation__icon');
                        closeButton.click()
                    }}>PRESENTATION</a></li>
                    <li><a href="#answers" className="header__link header__link-sm" onClick={() => {
                        let closeButton = document.querySelector('.rhm-rn-navigation__icon');
                        closeButton.click()
                    }}>F.A.Q.</a></li>
                    <li>
                        <div className="header__link-icon" onClick={() => {
                            let closeButton = document.querySelector('.rhm-rn-navigation__icon');
                            closeButton.click()
                            window.open('https://t.me/xStrategy_Info', '_blank')
                        }}>
                            <div className="header__icon"></div>
                            <div className="header__link header__link-sm">CHANNEL</div>
                        </div>
                    </li>
                    <li>
                        <div className="header__link-icon" onClick={() => {
                            let closeButton = document.querySelector('.rhm-rn-navigation__icon');
                            closeButton.click()
                            window.open('https://t.me/xStrategyx_bot', '_blank')
                        }}>
                            <div className="header__icon"></div>
                            <div className="header__link header__link-sm">SUPPORT</div>
                        </div>
                    </li>
                </ul>
            </ResponsiveNavbar>
        </div>
    );
};

export default Header;
