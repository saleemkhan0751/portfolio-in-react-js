import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import {useNavigate} from "react-router-dom"

function Edit_Setting() {
    const navigate = useNavigate();
    const {id} = useParams()
    const [data, setData] = useState([])
    const [service, setService] = useState('');
    const [testimonial, setTestimonial] = useState('');
    const [pricing, setPricing] = useState('');
    const [team, setTeam] = useState('');
    const [about_us, setAboutUs] = useState('');
    const [portfolio, setPortfolio] = useState('');
    const [contact_us, setContactUs] = useState('')

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/settings/" + id + "/edit").then((result) => {
            result.json().then((response) => {
                setData(response.setting)
                setService(response.setting.service)
                setTestimonial(response.setting.testimonial)
                setTeam(response.setting.team)
                setPricing(response.setting.pricing)
                setContactUs(response.setting.contact_us)
                setAboutUs(response.setting.about_us)
                setPortfolio(response.setting.portfolio)
            })
        })
    }, [])

    async function update() {
        let item = {id, service, testimonial, team, pricing, contact_us, about_us, portfolio}
        let result = await fetch("http://127.0.0.1:8000/api/setting-update", {
            method: "POST",
            headers: {
                Accept: "application/form-json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
        let setting = await result.json()
        if (setting) {
            navigate('/setting')
        } else {
            console.log("Something went wrong")
        }

    }

    return (
        <>
            <h1 className="h3 mb-3"><strong>Update Service</strong></h1>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="m-sm-4">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-label">Service description</label>
                                        <textarea className="form-control form-control-lg" type="text" name="service"
                                                  defaultValue={data.service}
                                                  onChange={(e) => setService(e.target.value)}
                                                  rows="4"
                                                  placeholder="Enter your service"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Testimonial description</label>
                                        <textarea className="form-control form-control-lg" type="text"
                                                  name="testimonial"
                                                  rows="4"
                                                  defaultValue={data.testimonial}
                                                  onChange={(e) => setTestimonial(e.target.value)}
                                                  placeholder="Enter your testimonial"/>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Team description</label>
                                        <textarea className="form-control form-control-lg" type="text" name="team"
                                                  rows="4"
                                                  defaultValue={data.team}
                                                  onChange={(e) => setTeam(e.target.value)}
                                                  placeholder="Enter your team"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Portfolio description</label>
                                        <textarea className="form-control form-control-lg" type="text" name="portfolio"
                                                  rows="4"
                                                  defaultValue={data.portfolio}
                                                  onChange={(e) => setPortfolio(e.target.value)}
                                                  placeholder="Enter your portfolio"/>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label className="form-label">contact_us</label>
                                        <textarea className="form-control form-control-lg" type="text" name="contact_us"
                                                  rows="4"
                                                  defaultValue={data.contact_us}
                                                  onChange={(e) => setContactUs(e.target.value)}
                                                  placeholder="Enter your content"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">pricing</label>
                                        <textarea className="form-control form-control-lg" type="text" name="pricing"
                                                  rows="4"
                                                  defaultValue={data.pricing}
                                                  onChange={(e) => setPricing(e.target.value)}
                                                  placeholder="Enter your pricing"/>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label className="form-label">About us description</label>
                                        <textarea className="form-control form-control-lg" type="text" name="about_us"
                                                  rows="4"
                                                  defaultValue={data.about_us}
                                                  onChange={(e) => setAboutUs(e.target.value)}
                                                  placeholder="Enter your about us"/>
                                    </div>
                                </div>
                                <div className="text-center mt-3 text-lg-end mt-2 p-2">
                                    <a onClick={update} className="btn btn-lg btn-primary ">Update</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Edit_Setting