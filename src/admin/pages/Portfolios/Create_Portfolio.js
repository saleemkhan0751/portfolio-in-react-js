import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import {useFormik} from "formik";
import {portfolioSchema} from "./Index";

function Created_Portfolio() {
    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');
    const navigate = useNavigate()
    const initialValues = {
        name: "",
        picture: ""
    }
    const {values, handleBlur, handleChange, handleSubmit, errors, touched, setFieldValue} = useFormik({
        initialValues,
        validationSchema: portfolioSchema,
        validateOnChange: true,
        validateOnBlur: false,
        onSubmit: async (values, action) => {
            var item = {name, picture}
            if (item.length != 0) {
                var formData = new FormData()
                formData.append('type', values.name)
                formData.append('picture', values.picture)
                let result = await fetch("http://127.0.0.1:8000/api/portfolio", {
                    method: "POST",
                    body: formData,
                })
                await result.json()
                navigate('/portfolio')
            } else {
                console.log('Something went wrong')
            }
        }
    })
    return (
        <>
            <h1 className="h3 mb-3"><strong>Add Portfolio</strong></h1>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="m-sm-4">
                                    <div className="row">
                                        <div className="col-md-6 mx-auto d-table h-100 mb-3">
                                            <label className="form-label">Name</label>
                                            <input className="form-control form-control-lg" type="text" name="name"
                                                   placeholder="Enter your name"
                                                   value={values.name}
                                                   onChange={handleChange}
                                                   onBlur={handleBlur}/>
                                            {touched.name && errors.name ? (
                                                <p className="text-danger">{errors.name}</p>
                                            ) : null}
                                        </div>
                                        <div className="col-md-6 mx-auto d-table h-100 mb-3">
                                            <label className="form-label">Picture</label>
                                            <input className="form-control form-control-lg" type="file" name="picture"
                                                   placeholder="Enter your name"
                                                   onChange={(e) => setFieldValue("picture", e.target.files[0])}/>
                                            {touched.picture && errors.picture ? (
                                                <p className="text-danger">{errors.picture}</p>
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

export default Created_Portfolio