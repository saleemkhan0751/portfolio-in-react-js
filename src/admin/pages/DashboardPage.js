import React, {useEffect, useState} from "react";

function DashboardPage() {
    const [data, setData] = useState('')
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/dashboard").then((result) => {
            result.json().then((response) => {
                setData(response)

            })
        })
    }, [])
    return (
        <>
            <h1 className="h3 mb-3"><strong>Dashboard</strong></h1>
            <div className="row">
                <div className="col-md-12 d-flex">
                    <div className="w-100">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col mt-0">
                                                <h5 className="card-title">Services</h5>
                                            </div>

                                            <div className="col-auto">
                                                <div className="stat text-primary">
                                                    <i className="align-middle" data-feather="truck"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className="mt-1 mb-3">{data.totalService}</h1>
                                        <div className="mb-0">
                                            <span className="text-danger"> <i
                                                className="mdi mdi-arrow-bottom-right"></i>{data.servicesMonth}</span>
                                            <span className="text-muted"> Since last month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col mt-0">
                                                <h5 className="card-title">Testimonial</h5>
                                            </div>

                                            <div className="col-auto">
                                                <div className="stat text-primary">
                                                    <i className="align-middle" data-feather="truck"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className="mt-1 mb-3">{data.totalTestimonial}</h1>
                                        <div className="mb-0">
                                           <span className="text-danger"> <i
                                               className="mdi mdi-arrow-bottom-right"></i>{data.testimonialMonth}</span>
                                            <span className="text-muted"> Since last month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col mt-0">
                                                <h5 className="card-title">Teams</h5>
                                            </div>

                                            <div className="col-auto">
                                                <div className="stat text-primary">
                                                    <i className="align-middle" data-feather="truck"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className="mt-1 mb-3">{data.totalTeam}</h1>
                                        <div className="mb-0">
                                            <span className="text-danger"> <i
                                                className="mdi mdi-arrow-bottom-right"></i>{data.teamMonth}</span>
                                            <span className="text-muted"> Since last month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col mt-0">
                                                <h5 className="card-title">Portfolio</h5>
                                            </div>

                                            <div className="col-auto">
                                                <div className="stat text-primary">
                                                    <i className="align-middle" data-feather="truck"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className="mt-1 mb-3">{data.totalPortfolio}</h1>
                                        <div className="mb-0">
                                          <span className="text-danger"> <i
                                              className="mdi mdi-arrow-bottom-right"></i>{data.portfolioMonth}</span>
                                            <span className="text-muted"> Since last month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardPage