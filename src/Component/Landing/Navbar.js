import React from "react";
import "../../Styles/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPhoneAlt, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="leftNav">
                <ul>
                <li style={{paddingTop:"0"}}>
                    <img className="logo" src={require("../../Resources/logo4.png")} alt="logo"></img>
                </li>
                <li>
                    <h1><a href="https://github.com/">
                        <span>Insurance</span>
                        <FontAwesomeIcon icon={faChevronDown} size="sm" className="fontAwesomeLanding" />
                    </a></h1>
                </li>
                <li>
                    <h1><a href="https://github.com/">
                        <span>Information</span>
                        <FontAwesomeIcon icon={faChevronDown} size="sm" className="fontAwesomeLanding" />
                        </a></h1>
                </li>
                </ul>
            </div>
            <div className="rightNav">
                <ul>
                <li>
                    <h3><a href="https://github.com/">
                    <FontAwesomeIcon icon={faPhoneAlt} size="sm" className="fontAwesomeLanding" />
                        <span>Contact</span>
                        
                    </a></h3>
                </li>
                <li>
                    <h3><a href="https://github.com/">
                    <FontAwesomeIcon icon={faUser} size="sm" className="fontAwesomeLanding" />
                        <span>My Account</span>
                    </a></h3>
                </li>
                <li>
                    <h3><a href="https://github.com/">
                    <FontAwesomeIcon icon={faSearch} size="sm" className="fontAwesomeLanding" />
                        <span>Search</span>
                    </a></h3>
                </li >
                <li style={{paddingTop:"0"}}>
                <button className="submit-button">Show plans</button>
                </li>
                </ul>
                
        </div >
        </div >
    )
}