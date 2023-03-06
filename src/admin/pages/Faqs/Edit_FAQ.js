import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import  {useNavigate} from "react-router-dom"
function Edit_FAQ() {
    const navigate=useNavigate();
    const {id} = useParams()
    const [data, setData] = useState('')
    const [heading, setHeading] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/faqs/" + id + "/edit").then((result) => {
            result.json().then((response) => {
                setData(response.faq)
                setHeading(response.faq.heading)
                setDescription(response.faq.description)
            })
        })
    }, [])

   async function update() {
        const formData= new FormData()
        formData.append('id',id);
        formData.append('heading',heading);
        formData.append('description',description)
        let  result= await fetch("http://127.0.0.1:8000/api/faq-update/",{
            method:"POST",
            body:formData
        })
       await result.json()
       navigate('/faq')
    }
    return (
        <>
            <h1 className="h3 mb-3"><strong>Update Portfolio</strong></h1>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="m-sm-4">
                                <div className="row">
                                    <div className="col-md-12 mx-auto d-table h-100 mb-3">
                                        <label className="form-label">Heading</label>
                                        <textarea className="form-control form-control-lg" type="text" defaultValue={data.heading} onChange={(e)=>setHeading(e.target.value)} name="heading"
                                                  placeholder="Enter your content"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 mx-auto d-table h-100 mb-3">
                                        <label className="form-label">Description</label>
                                        <textarea className="form-control form-control-lg" defaultValue={data.description}  onChange={(e)=>setDescription(e.target.value)} type="text" name="description" rows="4"
                                                  placeholder="Enter your description"/>
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

export default Edit_FAQ