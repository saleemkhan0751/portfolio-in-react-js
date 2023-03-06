import React from "react";

function TeamPage(props) {
    console.log('teams', props.teams)
    return (
        <section id="team" className="team section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Team</h2>
                    <p>{props.settings.team}</p>
                </div>
                <div className="row">
                    {
                        props.teams.map((data, i) =>
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                <div className="member" data-aos="fade-up" data-aos-delay="100">
                                    <div className="member-img">
                                        <img src={"http://127.0.0.1:8000/admin/images/teams/" + data.picture}
                                             className="img-fluid" alt=""/>
                                        <div className="social">
                                            <a href={data.twitter_url}><i className="bi bi-twitter"></i></a>
                                            <a href={data.facebook_url}><i className="bi bi-facebook"></i></a>
                                            <a href={data.Instagram_url}><i className="bi bi-instagram"></i></a>
                                            <a href={data.linkedin_url}><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>{data.name}</h4>
                                        <span>{data.role}</span>
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

export default TeamPage