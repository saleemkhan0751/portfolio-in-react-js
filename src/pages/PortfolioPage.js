import React, {useState} from "react";
function PortfolioPage(props) {
    return (
        <section id="portfolio" className="portfolio">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>{props.settings.portfolio}</p>
                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-card">Card</li>
                            <li data-filter=".filter-web">Web</li>
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                    {
                        props.portfolios.map((data,i)=>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src={"http://127.0.0.1:8000/admin/images/portfolios/" + data.picture} width="500px" height="500px" className="img-fluid" alt=""/>
                                    <div className="portfolio-info">
                                        <h4>{data.type}</h4>
                                        <p>{data.type}</p>
                                        <div className="portfolio-links">
                                            <a href="frontend/assets/img/portfolio/portfolio-1.jpg"
                                               data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i
                                                className="bx bx-plus"></i></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
        </section>
    )
}

export default PortfolioPage
