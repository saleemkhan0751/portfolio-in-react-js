import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return(
        <div>
            <nav id="navbar" className="navbar order-last order-lg-0">
                <ul>
                    <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                    <li><a className="nav-link scrollto" href="#about">About</a></li>
                    <li><a className="nav-link scrollto" href="#services">Services</a></li>
                    <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                    <li><a className="nav-link scrollto" href="#team">Team</a></li>
                    <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
        </div>
    )

}
export  default  Navbar