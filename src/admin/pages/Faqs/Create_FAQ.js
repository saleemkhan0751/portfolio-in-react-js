import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import {useFormik} from "formik";
import {FaqSchema} from "./Index";

function Created_FAQ() {
    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate()

    const initialValues = {
        heading: "",
        description: ""
    }

    const {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
        initialValues,
        validationSchema: FaqSchema,
        onSubmit: async (values, action) => {
            var item = {heading, description}
            if (item.length != 0) {
                var formData = new FormData()
                formData.append('heading', values.heading)
                formData.append('description', values.description)
                let result = await fetch("http://127.0.0.1:8000/api/faqs", {
                    method: "POST",
                    body: formData,
                })
                await result.json()
                navigate('/faq')
            } else {
                console.log('Something went wrong')
            }
        }
    })
    return (
        <>
            <h1 className="h3 mb-3"><strong>Add FAQ</strong></h1>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="m-sm-4">
                                    <div className="row">
                                        <div className="col-md-12 mx-auto d-table h-100 mb-3">
                                            <label className="form-label">Heading</label>
                                            <textarea className="form-control form-control-lg" type="text"
                                                      name="heading"
                                                      placeholder="Enter your heading"
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                      value={values.heading}
                                            />
                                            {touched.heading && errors.heading ? (
                                                <p className="text-danger">{errors.heading}</p>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 mx-auto d-table h-100 mb-3">
                                            <label className="form-label">Description</label>
                                            <textarea className="form-control form-control-lg" type="text"
                                                      name="description" rows="4"
                                                      placeholder="Enter your description"
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                      value={values.description}/>
                                            {touched.description && errors.description ? (
                                                <p className="text-danger">{errors.description}</p>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="text-center mt-3 text-lg-end p-2">
                                        <button className="btn btn-lg btn-primary" type="submit">
                                            Submit
                                        </button>
                                        {/*<a onClick={store} className="btn btn-lg btn-primary">Submit</a>*/}
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

export default Created_FAQ