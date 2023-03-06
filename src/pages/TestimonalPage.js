import React from "react";
function TestimonalPage(props) {
    return (
        <section id="testimonials" className="testimonials">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Testimonials</h2>
                    <p>{props.settings.testimonial}</p>
                </div>

                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                    <div className="swiper-wrapper">
                        {
                            props.testimonials.map((data,i)=>
                                <div>
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                            <img src={"http://127.0.0.1:8000/admin/images/testimonials/" + data.picture}
                                              width={90} height={90}  className="testimonial-img rounded-circle" alt=""/>
                                            <h3>{data.name}</h3>
                                            <h4>{data.role}</h4>
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                                {data.content}
                                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>)
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>

            </div>
        </section>
    )
}

export default TestimonalPage