import React from "react";
import "../../Styles/LandingOther.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

export const AllQuote=()=>{
    return(
        <div className="all-quote-plan">
            <span>
            <FontAwesomeIcon icon={faClipboard} size="2x" className="fontAwesomeLanding" style={{height:"18px"}}/>
                <h3>Resume Quote / Application</h3>
                </span>
            <span>
            <FontAwesomeIcon icon={faArrowAltCircleRight} size="2x" className="fontAwesomeLanding" style={{height:"18px"}}/>
                <h3>Show all plans</h3>
                </span>
            </div>
    )
}