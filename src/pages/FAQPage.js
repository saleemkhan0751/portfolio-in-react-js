import React from "react";

function FAQPage(props) {
    return (
        <section id="faq" className="faq">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Frequently Asked Questions</h2>
                </div>

                <ul className="faq-list accordion" data-aos="fade-up">
                    {
                        props.faqs.map((data, i) =>
                            <li>
                                <a data-bs-toggle="collapse" className="collapsed" data-bs-target={"#faq" + i}>{data.heading} ? <i className="bx bx-chevron-down icon-show"></i><i
                                        className="bx bx-x icon-close"></i></a>
                                <div id={"faq" + i} className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        {data.description}
                                    </p>
                                </div>
                            </li>
                        )

                    }

                </ul>

            </div>
        </section>
    )
}

export default FAQPage