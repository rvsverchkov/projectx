import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer__name">© 2024 xStrategy</p>
            <div className="footer__center-block">
                <a href="#marketing" className="header__link">MARKETING</a>
                <a href="#presentation" className="header__link">PRESENTATION</a>
            </div>
        </div>
    );
};

export default Footer;
