import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import {useNavigate} from "react-router-dom"

function Edit_Service() {
    const navigate = useNavigate()
    const {id} = useParams()
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [icon, setIcon] = useState('')
    const [content, setContent] = useState('')
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/services/" + id + "/edit").then((result) => {
            result.json().then((response) => {
                setData(response.service)
                setName(response.service.name)
                setContent(response.service.content)
            })
        })
    }, [])

    async function update() {
        const formData = new FormData()
        formData.append('id', id)
        formData.append('name', name)
        formData.append('icon', icon)
        formData.append('content', content)

        let result = await fetch("http://127.0.0.1:8000/api/service-update/", {
            method: "POST",
            body: formData
        })
        await result.json()
        navigate('/service')
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
                                    <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100 mb-3">
                                        <label className="form-label">Name</label>
                                        <input className="form-control form-control-lg" type="text" name="name"
                                               defaultValue={data.name} onChange={(e) => setName(e.target.value)}
                                               placeholder="Enter your name"/>
                                    </div>
                                    <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100 mb-3">
                                        <label className="form-label">Icon</label>
                                        <input className="form-control form-control-lg" type="file" name="icon"
                                               onChange={(e) => setIcon(e.target.files[0])}
                                               placeholder="Enter your icon"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label className="form-label">Content</label>
                                        <textarea className="form-control form-control-lg" type="text" name="name"
                                                  defaultValue={data.content}
                                                  onChange={(e) => setContent(e.target.value)}
                                                  rows="4"
                                                  placeholder="Enter your content"/>
                                    </div>
                                </div>
                                <div className="text-center mt-3 text-lg-end mt-2 p-2">
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

export default Edit_Service