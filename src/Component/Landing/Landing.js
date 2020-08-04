import React from "react";
import {Navbar} from "./Navbar";
import {Criteria} from "./Criteria";
import {PlanSelection} from "./PlanSelection";
import {Footer} from "./Footer";
import {AllQuote} from "./AllQuote";
import "../../Styles/Landing.css";

export const Landing=()=> {
    return (
        <div className="landing">
            <div className="landing-background">
            <div className="landing-background-color-overlay"></div>
            </div>
            <Navbar></Navbar>
            <div className="landing-content">
            <h1 className="landing-first-line">Let's Find the Right Plan for You</h1>
            <h3 className="landing-second-line">ANSWER A FEW QUESTIONS BELOW TO SEE PRICES</h3>
            <div className="cri-plan-box">
            <Criteria></Criteria>
            <PlanSelection></PlanSelection>
            </div>
            <AllQuote></AllQuote>
            </div>
            <Footer></Footer>
        </div>
    )
}