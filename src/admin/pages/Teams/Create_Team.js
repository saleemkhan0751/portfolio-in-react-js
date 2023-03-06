import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import {useFormik} from "formik";
import {teamSchema} from "./index";

function Created_Team() {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [picture, setPicture] = useState("");
    const [facebook_url, setFacebookUrl] = useState("");
    const [twitter_url, setTwitterUrl] = useState("");
    const [linkedin_url, setLinkedinUrl] = useState("");
    const [instagram_url, setInstagramUrl] = useState("");
    const navigate = useNavigate();

    // async function store() {
    const initialValues = {
        name: "",
        role: "",
        picture: "",
        facebook_url: "",
        twitter_url: "",
        linkedin_url: "",
        instagram_url: "",
    }
    const {values, handleBlur, handleChange, handleSubmit, errors, touched, setFieldValue} = useFormik({
        initialValues,
        validationSchema: teamSchema,
        validateOnChange: true,
        validateOnBlur: false,
        onSubmit: async (values, action) => {
            console.warn(values.name)
            setName(values.name)
            setRole(values.role)
            setPicture(values.picture.name)
            setFacebookUrl(values.facebook_url)
            setTwitterUrl(values.twitter_url)
            setLinkedinUrl(values.linkedin_url)
            setInstagramUrl(values.instagram_url)
            var item = {name,picture, role, facebook_url, twitter_url, linkedin_url, instagram_url}
            console.log(item);
            if (item.length != 0) {
                var formData = new FormData();
                formData.append('name', values.name);
                formData.append('role', values.role);
                formData.append('picture', values.picture);
                formData.append('facebook_url', values.facebook_url);
                formData.append('twitter_url', values.twitter_url);
                formData.append('linkedin_url', values.linkedin_url);
                formData.append('Instagram_url', values.instagram_url);
                let result = await fetch("http://127.0.0.1:8000/api/teams", {
                    method: "POST",
                    headers:{
                        Accept:"application/json",
                    },
                    body: formData
                })
                await result.json();
                navigate('/team')
            } else {
                console.log('Something went wrong');
            }
        },


    });

    return (
        <>
            <h1 className="h3 mb-3"><strong>Add Team</strong></h1>
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
                                                   autoComplete="off"
                                                   placeholder="Enter your name"
                                                   value={values.name}
                                                   onChange={handleChange}
                                                   onBlur={handleBlur}
                                            />
                                            {touched.name && errors.name ? (
                                                <p className="text-danger">{errors.name}</p>
                                            ) : null}
                                        </div>
                                        <div className="col-md-4 mx-auto d-table h-100 mb-3">
                                            <label className="form-label">Role</label>
                                            <input className="form-control form-control-lg" type="text" name="role"
                                                   placeholder="Enter your role"
                                                   value={values.role}
                                                   onChange={handleChange}
                                                   onBlur={handleBlur}/>
                                            {
                                                touched.role && errors.role ? (
                                                    <p className="text-danger">{errors.role}</p>) : null
                                            }
                                        </div>
                                        <div className="col-md-4 mx-auto d-table h-100 mb-3">
                                            <label className="form-label">Picture</label>
                                            <input className="form-control form-control-lg" type="file" name="picture"
                                                   onChange={(event) => {
                                                setFieldValue("picture", event.currentTarget.files[0]);
                                            }}
                                                   onBlur={handleBlur}
                                                   placeholder="Enter your name"/>
                                            {
                                                touched.picture && errors.picture ? (
                                                    <p className="text-danger">{errors.picture}</p>) : null
                                            }
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 mx-auto d-table h-100 mb-3">
                                            <label className="form-label">Instagram Url*</label>
                                            <input className="form-control form-control-lg" type="text"
                                                   name="instagram_url"
                                                   value={values.instagram_url}
                                                   onChange={handleChange}
                                                   onBlur={handleBlur}
                                                   placeholder="Enter your instagram url"/>
                                            {touched.instagram_url && errors.instagram_url ? (
                                                <p className="text-danger">{instagram_url.instagram_url}</p>) : null}
                                        </div>
                                        <div className="col-md-4 mx-auto d-table h-100 mb-3">
                                            <label className="form-label">Facebook Url*</label>
                                            <input className="form-control form-control-lg" type="text"
                                                   name="facebook_url"
                                                   value={values.facebook_url}
                                                   onChange={handleChange}
                                                   onBlur={handleBlur}
                                                   placeholder="Enter your facebook url"/>
                                            {
                                                touched.facebook_url && errors.facebook_url ? (
                                                    <p className="text-danger">{errors.facebook_url}</p>) : null
                                            }
                                        </div>
                                        <div className="col-md-4 mx-auto d-table h-100 mb-3">
                                            <label className="form-label">Twitter Url*</label>
                                            <input className="form-control form-control-lg" type="text"
                                                   name="twitter_url"
                                                   value={values.twitter_url}
                                                   onChange={handleChange}
                                                   onBlur={handleBlur}
                                                   placeholder="Enter your twitter url"/>
                                            {
                                                touched.twitter_url && errors.twitter_url ? (
                                                    <p className="text-danger">{errors.twitter_url}</p>) : null
                                            }
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 mx-auto d-table h-100 mb-3">
                                            <label className="form-label">Linkedin Url*</label>
                                            <input className="form-control form-control-lg" type="text"
                                                   name="linkedin_url"
                                                   value={values.linkedin_url}
                                                   onChange={handleChange}
                                                   onBlur={handleBlur}
                                                   placeholder="Enter your linkedin url"/>
                                            {
                                                touched.linkedin_url && errors.linkedin_url ? (
                                                    <p className="text-danger">{errors.twitter_url}</p>) : null
                                            }

                                        </div>
                                        <div className="col-md-4 mx-auto d-table h-100 mb-3">
                                        </div>
                                        <div className="col-md-4 mx-auto d-table h-100 mb-3">
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

export default Created_Team