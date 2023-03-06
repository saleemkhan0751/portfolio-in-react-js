
import React from "react";
import Navbar from "./Navbar";


function Header() {
    return(
        <div>
            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto"><a href="index.html">Presento<span>.</span></a></h1>
                    <Navbar/>
                    <a href="#about" className="get-started-btn scrollto">Get Started</a>
                </div>
            </header>

            <section id="hero" className="d-flex align-items-center">
                <div className="container" data-aos="zoom-out" data-aos-delay="100">
                    <div className="row">
                        <div className="col-xl-6">
                            <h1>Bettter digital experience with Presento</h1>
                            <h2>We are team of talented designers making websites with Bootstrap</h2>
                            <a href="#about" className="btn-get-started scrollto">Get Started</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
export  default  Header