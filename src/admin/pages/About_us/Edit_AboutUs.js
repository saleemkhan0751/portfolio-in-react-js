import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

function Edit_AboutUs() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');
    const [content, setContent] = useState('');
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/about-us/" + id + "/edit").then((result) => {
            result.json().then((response) => {
                setData(response.about_us)
                setName(response.about_us.title)
                setContent(response.about_us.content)
            })
        })
    }, [])

    async function update() {
        var item = {id, name, content}
        const formData = new FormData();
        formData.append('id', id);
        formData.append('title', name)
        formData.append('icon', picture)
        formData.append('content', content)
        let result = await fetch("http://127.0.0.1:8000/api/about-us-update/", {
            method: "POST",
            body: formData
        })
        await result.json();
        console.log(result);
        navigate('/about-us')
    }

    return (
        <>
            <h1 className="h3 mb-3"><strong>Update Testimonial</strong></h1>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="m-sm-4">
                                <div className="row">
                                    <div className="col-md-6 mx-auto d-table h-100 mb-3">
                                        <label className="form-label">Name</label>
                                        <input className="form-control form-control-lg" defaultValue={data.title}
                                               onChange={(e) => setName(e.target.value)}
                                               type="text" name="name"
                                               placeholder="Enter your name"/>
                                    </div>
                                    <div className="col-md-6 mx-auto d-table h-100 mb-3">
                                        <label className="form-label">Icon</label>
                                        <input className="form-control form-control-lg" type="file" name="icon"
                                               onChange={(e) => setPicture(e.target.files[0])}
                                               placeholder="Enter your name"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label className="form-label">Content</label>
                                        <textarea className="form-control form-control-lg" type="text" name="content"
                                                  defaultValue={data.content}
                                                  onChange={(e) => setContent(e.target.value)}
                                                  rows="4"
                                                  placeholder="Enter your content"/>
                                    </div>
                                </div>
                                <div className="text-center mt-3 text-lg-end p-2">
                                    <a onClick={update} className="btn btn-lg btn-primary">Update</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Edit_AboutUs