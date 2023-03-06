import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import  {useNavigate} from "react-router-dom"
function Edit_Portfolio() {
    const navigate=useNavigate();
    const {id} = useParams()
    const [data, setData] = useState('')
    const [name, setName] = useState('')
    const [picture, setPicture] = useState('')

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/portfolio/" + id + "/edit").then((result) => {
            result.json().then((response) => {
                setData(response.portfolio)
                setName(response.portfolio.type)
            })
        })
    }, [])

   async function update() {
        const formData= new FormData()
        formData.append('id',id);
        formData.append('type',name);
        formData.append('picture',picture)
        let  result= await fetch("http://127.0.0.1:8000/api/portfolio-update/",{
            method:"POST",
            body:formData
        })
       await result.json()
       navigate('/portfolio')
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
                                    <div className="col-md-6 mx-auto d-table h-100 mb-3">
                                        <label className="form-label">Name</label>
                                        <input className="form-control form-control-lg" type="text" name="name"
                                               defaultValue={data.type} onChange={(e)=>setName(e.target.value)}
                                               placeholder="Enter your name"/>
                                    </div>
                                    <div className="col-md-6 mx-auto d-table h-100 mb-3">
                                        <label className="form-label">Picture</label>
                                        <input className="form-control form-control-lg" type="file" name="picture"
                                               onChange={(e)=>setPicture(e.target.files[0])}
                                               placeholder="Enter your picture"/>
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

export default Edit_Portfolio