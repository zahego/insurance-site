import React from "react";
import "../../Styles/LandingOther.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

export const Criteria = () => {
    return (
        <div className="criteria" >
            <div className="date-flex" style={{position:"relative"}}>
                <button style={{position:"absolute", width:"30px", height:"40px", right: "10px"}}>
                <FontAwesomeIcon icon={faChevronCircleDown} size="2x" className="fontAwesomeLanding" style={{color:"rgb(166,182,182)", fontSize: "28px"}}/>
                </button>
                <button >
                    <h1 className="criteria-date" > Start Date </h1>
                    <FontAwesomeIcon icon={faQuestionCircle} size="1x" className="fontAwesomeLanding" style={{fontSize:"18px"}}/>
                    <h3> mm / dd / yyy </h3>
                </button>
                <button>
                    <h1 className="criteria-date" > End Date </h1>
                    <FontAwesomeIcon icon={faQuestionCircle} size="1x" className="fontAwesomeLanding" style={{fontSize:"18px"}}/>
                    <h3> mm / dd / yyy </h3>
                </button>
            </div >
            <div style={{borderRight: "1px solid rgb(1,82,78, .5)", borderLeft: "1px solid rgb(1,82,78, .5)", position:"relative"}}>
            <button style={{position:"absolute", width:"30px", height:"40px", right: "10px"}}>
                <FontAwesomeIcon icon={faChevronCircleDown} size="2x" className="fontAwesomeLanding" style={{color:"rgb(166,182,182)", fontSize: "28px"}}/>
                </button>
                <button>
                    <h1 className="criteria-date" > Coverage Area </h1>
                    <FontAwesomeIcon icon={faQuestionCircle} size="1x" className="fontAwesomeLanding" style={{fontSize:"18px"}}/>
                    <h3> International </h3>
                </button>
            </div>
            <div style={{position:"relative"}}>
            <button style={{position:"absolute", width:"30px", height:"40px", right: "10px"}}>
                <FontAwesomeIcon icon={faChevronCircleDown} size="2x" className="fontAwesomeLanding" style={{color:"rgb(166,182,182)", fontSize: "28px"}}/>
                </button>
                <button>
                    <h1 className="criteria-date" > Number of people </h1>
                    <FontAwesomeIcon icon={faQuestionCircle} size="1x" className="fontAwesomeLanding" style={{fontSize:"18px"}}/>
                    < h3 > 1 Male </h3>
                </button >
            </div>
            <div className="submit">
                <button className="submit-button" > Get Quote </button>
            </div>
        </div>
    )
}