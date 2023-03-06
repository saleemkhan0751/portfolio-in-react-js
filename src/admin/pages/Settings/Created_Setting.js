import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import {useFormik} from "formik";
import {settingSchema} from "./Index";

function Created_Setting() {
    const navigate = useNavigate();
    const [service, setService] = useState('');
    const [testimonial, setTestimonial] = useState('');
    const [pricing, setPricing] = useState('');
    const [team, setTeam] = useState('');
    const [about_us, setAboutUs] = useState('');
    const [portfolio, setPortfolio] = useState('');
    const [contact_us, setContactUs] = useState('')
    const initialValues = {
        service: "",
        testimonial: "",
        pricing: "",
        team: "",
        about_us: "",
        portfolio: "",
        contact_us: "",
    }
    const {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
        initialValues,
        validationSchema: settingSchema,
        onSubmit: async (values, action) => {
            let item = {
                service: values.service,
                testimonial: values.testimonial,
                pricing: values.pricing,
                team: values.team,
                about_us: values.about_us,
                portfolio: values.portfolio,
                contact_us: values.contact_us
            }
            console.log(item)
            let result = await fetch("http://127.0.0.1:8000/api/settings", {
                method: "POST",
                headers: {
                    Accept: "application/form-json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(item)

            })
            let setting = await result.json()
            if (setting) {
                navigate('/setting')
            } else {
                console.log('something went wrong')
            }
        }

    })
    return (
        <>
            <h1 className="h3 mb-3"><strong>Add Setting</strong></h1>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="m-sm-4">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="form-label">Service description</label>
                                            <textarea className="form-control form-control-lg" type="text"
                                                      name="service"
                                                      rows="4"
                                                      placeholder="Enter your service"
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                      value={values.service}/>
                                            {touched.service && errors.service ? (
                                                <p className="text-danger">{errors.service}</p>
                                            ) : null}
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Testimonial description</label>
                                            <textarea className="form-control form-control-lg" type="text"
                                                      name="testimonial"
                                                      rows="4"
                                                      placeholder="Enter your testimonial"
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                      value={values.testimonial}/>
                                            {touched.testimonial && errors.testimonial ? (
                                                <p className="text-danger">{errors.testimonial}</p>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label className="form-label">Team description</label>
                                            <textarea className="form-control form-control-lg" type="text" name="team"
                                                      rows="4"
                                                      placeholder="Enter your team"
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                      value={values.team}/>
                                            {touched.team && errors.team ? (
                                                <p className="text-danger">{errors.team}</p>
                                            ) : null}
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Portfolio description</label>
                                            <textarea className="form-control form-control-lg" type="text"
                                                      name="portfolio"
                                                      rows="4"
                                                      placeholder="Enter your portfolio"
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                      value={values.portfolio}/>
                                            {touched.portfolio && errors.portfolio ? (
                                                <p className="text-danger">{errors.portfolio}</p>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label className="form-label">Contact Us</label>
                                            <textarea className="form-control form-control-lg" type="text"
                                                      name="contact_us"
                                                      rows="4"
                                                      placeholder="Enter your content"
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                      value={values.contact_us}/>
                                            {touched.contact_us && errors.contact_us ? (
                                                <p className="text-danger">{errors.contact_us}</p>
                                            ) : null}
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">pricing</label>
                                            <textarea className="form-control form-control-lg" type="text"
                                                      name="pricing"
                                                      rows="4"
                                                      placeholder="Enter your pricing"
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                      value={values.pricing}/>
                                            {touched.pricing && errors.pricing ? (
                                                <p className="text-danger">{errors.pricing}</p>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label className="form-label">About us description</label>
                                            <textarea className="form-control form-control-lg" type="text"
                                                      name="about_us"
                                                      rows="4"
                                                      placeholder="Enter your about us"
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                      value={values.about_us}/>
                                            {touched.about_us && errors.about_us ? (
                                                <p className="text-danger">{errors.about_us}</p>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="text-center mt-3 text-lg-end mt-2 p-2">
                                        <button className="btn btn-lg btn-primary" type="submit">
                                            Submit
                                        </button>
                                        {/*<a onClick={store} className="btn btn-lg btn-primary ">Submit</a>*/}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Created_Setting