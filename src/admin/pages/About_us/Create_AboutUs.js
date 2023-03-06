import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import {useFormik} from "formik";
import {aboutUsSchema} from "./Index";

function Created_AboutUs() {
    const [name, setName] = useState('');
    const [icon, setIcon] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate()

    const initialValues = {
        title: "",
        picture: "",
        content: "",
    }

    const {values, handleBlur, handleSubmit, handleChange, errors, touched, setFieldValue} = useFormik({
        initialValues,
        validationSchema: aboutUsSchema,
        validateOnChange: true,
        validateOnBlur: false,
        onSubmit: async (values, action) => {
            let item = {name, content}
            if (item.length != 0) {
                var formData = new FormData()
                formData.append('title', values.title);
                formData.append('icon', values.picture);
                formData.append('content', values.content);
                let result = await fetch("http://127.0.0.1:8000/api/about-us", {
                    method: "POST",
                    body: formData
                })
                await result.json();
                navigate("/about-us")
            } else {
                console.log('Something went wrong!')
            }
        }
    })
    return (
        <>
            <h1 className="h3 mb-3"><strong>Add Testimonial</strong></h1>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="m-sm-4">
                                    <div className="row">
                                        <div className="col-md-6 mx-auto d-table h-100 mb-3">
                                            <label className="form-label">Title</label>
                                            <input className="form-control form-control-lg" type="text" name="title"
                                                   placeholder="Enter your title"
                                                   value={values.title}
                                                   onChange={handleChange}
                                                   onBlur={handleBlur}/>
                                            {touched.title && errors.title ? (
                                                <p className="text-danger">{errors.title}</p>
                                            ) : null}
                                        </div>
                                        <div className="col-md-6 mx-auto d-table h-100 mb-3">
                                            <label className="form-label">Icon</label>
                                            <input className="form-control form-control-lg" type="file" name="picture"
                                                   onChange={(e) => setFieldValue("picture", e.target.files[0])}
                                                   placeholder="Enter your name"/>
                                            {touched.picture && errors.picture ? (
                                                <p className="text-danger">{errors.picture}</p>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label className="form-label">Content</label>
                                            <textarea className="form-control form-control-lg" type="text"
                                                      name="content"
                                                      rows="4"
                                                      placeholder="Enter your content"
                                                      onBlur={handleBlur}
                                                      onChange={handleChange}
                                                      value={values.content}
                                            />
                                            {touched.content && errors.content ? (
                                                <p className="text-danger">{errors.content}</p>
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

export default Created_AboutUs