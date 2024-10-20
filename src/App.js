import React from "react";
import "./index.css";
import Header from "./components/Header/Header";
import Platform from './components/Platform/Platform';
import Marketing from './components/Marketing/Marketing';
import Affiliate from "./components/Affiliate/Affiliate";
import Bonus from "./components/Bonus/Bonus";
import Discover from "./components/Discover/Discover";

export default function App() {
    return (
        <div className="App">
            <div className="main-container">
                <Header />
                <Platform />
                <Marketing />
                <Affiliate />
                <Bonus />
                <Discover />
            </div>
        </div>
    );
}