import React from "react";
import "./Affiliate.css";

const Affiliate = () => {
    return (
        <div className="affiliate">
            <div className="affiliate__text-container">
                <p className="affiliate__title">Affiliate program:</p>
                <p className="affiliate__subtitle">xStrategy offers additional income from the affiliate<br></br>
                    program. Attract investors and get incom from their<br></br>investments. To do this, you ned to shate your unique
                    <br></br>referral link with your partners</p>
            </div>
            <div className="container">
                <p className="description">The affiliate program is linear and has 4 levels</p>
                <div className="diagram">
                    <div className="horizontal-line"></div>
                    <div className="levels__container">
                        <div className="level">
                            <div className="arrow"></div>
                            <span className="arrow-text">6%</span>
                        </div>
                        <div className="level">
                            <div className="arrow"></div>
                            <span className="arrow-text">2%</span>
                        </div>
                        <div className="level">
                            <div className="arrow"></div>
                            <span className="arrow-text">1%</span>
                        </div>
                        <div className="level">
                            <div className="arrow"></div>
                            <span className="arrow-text">1%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Affiliate;
