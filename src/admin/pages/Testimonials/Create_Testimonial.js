import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import {useFormik} from "formik";
import {testimonialSchema} from "./Index";

function Created_Testimonial() {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [picture, setPicture] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate()
    const initialValues = {
        name: "",
        role: "",
        content: "",
        picture: ""
    }
    const {values, handleBlur, handleChange, handleSubmit, errors, touched, setFieldValue} = useFormik({
        initialValues,
        validationSchema: testimonialSchema,
        validateOnChange: true,
        validateOnBlur: false,
        onSubmit: async (values, action) => {
            let item = {name, role, content}
            if (item.length != 0) {
                var formData = new FormData()
                formData.append('name', values.name);
                formData.append('role', values.role);
                formData.append('picture', values.picture);
                formData.append('content', values.content);
                let result = await fetch("http://127.0.0.1:8000/api/testimonial", {
                    method: "POST",
                    body: formData
                })
                await result.json();
                navigate("/testimonial")
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
                                        <div className="col-md-4 mx-auto d-table h-100 mb-3">
                                            <label className="form-label">Name</label>
                                            <input className="form-control form-control-lg" type="text" name="name"
                                                   placeholder="Enter your name"
                                                   value={values.name}
                                                   onChange={handleChange}
                                                   onBlur={handleBlur}
                                            />
                                            {touched.name && errors.name ? (
                                                <p className="text-danger">{errors.name}</p>) : null}
                                        </div>
                                        <div className="col-md-4 mx-auto d-table h-100 mb-3">
                                            <label className="form-label">Role</label>
                                            <input className="form-control form-control-lg" type="text" name="role"
                                                   placeholder="Enter your role"
                                                   value={values.role}
                                                   onChange={handleChange}
                                                   onBlur={handleBlur}
                                            />
                                            {touched.role && errors.role ? (
                                                <p className="text-danger">{errors.role}</p>) : null}
                                        </div>
                                        <div className="col-md-4 mx-auto d-table h-100 mb-3">
                                            <label className="form-label">Picture</label>
                                            <input className="form-control form-control-lg" type="file" name="picture"
                                                   placeholder="Enter your name"
                                                   onChange={(event) => {
                                                       setFieldValue("picture", event.currentTarget.files[0]);
                                                   }}
                                                   onBlur={handleBlur}/>
                                            {touched.picture && errors.picture ? (
                                                <p className="text-danger">{errors.picture}</p>) : null}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label className="form-label">Content</label>
                                            <textarea className="form-control form-control-lg" type="text"
                                                      name="content"
                                                      rows="4"
                                                      placeholder="Enter your content"
                                                      value={values.content}
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}/>
                                            {touched.content && errors.content ? (
                                                <p className="text-danger">{errors.content}</p>) : null}
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

export default Created_Testimonial