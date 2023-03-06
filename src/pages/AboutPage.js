import React from "react";

function AboutPage(props) {
    console.warn("faksfkakjdf",props.settings)
    return (
        <section id="about" className="about section-bg">
            <div className="container" data-aos="fade-up">

                <div className="row no-gutters">
                    <div className="content col-xl-5 d-flex align-items-stretch">
                        <div className="content">
                            <h3>Voluptatem dignissimos provident quasi</h3>
                            <p>
                                {
                                    props.settings.about_us
                                }
                            </p>
                            <a href="#" className="about-btn"><span>About us</span> <i
                                className="bx bx-chevron-right"></i></a>
                        </div>
                    </div>
                    <div className="col-xl-7 d-flex align-items-stretch">
                        <div className="icon-boxes d-flex flex-column justify-content-center">
                            <div className="row">
                                {
                                    props.about_us.map((data, i) =>
                                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                                            <i className="bx bx-receipt"></i>
                                            <h4>{data.title}</h4>
                                            <p>{data.content}</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default AboutPage