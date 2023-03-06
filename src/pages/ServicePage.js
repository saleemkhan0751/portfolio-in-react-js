import React, {useState} from "react";
function ServicePage(props) {
    return (
        <section id="services" className="services section-bg ">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Services</h2>
                    <p>{props.settings.service}</p>
                </div>

                <div className="row">
                    {
                        props.services.map((data,i)=>
                            <div className="col-md-6 mt-4 mt-md-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                                    <i className="bi bi-bar-chart"></i>
                                    <h4><a href="#">{data.name}</a></h4>
                                    <p>{data.content}</p>
                                </div>
                            </div>

                        )
                    }
                </div>

            </div>
        </section>
    )
}

export default ServicePage