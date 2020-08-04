import React from "react";
import "../../Styles/LandingOther.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export const PlanSelection=()=>{
    return(
        <div className="plan-selection">
            <h1 className="criteria-date" id="plan-selection-line">Already know what you need?</h1>
            <button className="plan-selection-button">
                <div>
                <span>Select your plan</span>
                <span>
                <FontAwesomeIcon icon={faCaretDown} size="2x" className="fontAwesomeLanding" style={{height:"18px"}}/>
                </span>
                </div>
            </button>
        </div>
    )
}