import React from "react";
import "./index.css";
import Header from "./components/Header/Header";
import Platform from './components/Platform/Platform';
import Marketing from './components/Marketing/Marketing';
import Affiliate from "./components/Affiliate/Affiliate";
import Bonus from "./components/Bonus/Bonus";
import Discover from "./components/Discover/Discover";
import CollapseAnswers from "./components/CollapseAnswers/CollapseAnswers";
import Footer from "./components/Footer/Footer";
import BackTop from "antd/es/float-button/BackTop";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

export default function App() {
    return (
        <div className="App">
            <div className="main-container">
                <ScrollToHashElement />
                <BackTop />
                <Header />
                <Platform />
                <Marketing />
                <Affiliate />
                <Bonus />
                <Discover />
                <CollapseAnswers />
                <Footer />
            </div>
        </div>
    );
}