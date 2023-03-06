import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import  {useNavigate} from 'react-router-dom'
function Edit_Testimonial() {
    const {id} = useParams();
    const navigate=useNavigate();
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [picture, setPicture] = useState('');
    const [content, setContent] = useState('');
    const [t_id,setTestimonialId]=useState('')
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/testimonial/" + id).then((result) => {
            result.json().then((response) => {
                setData(response.testimonial)
                setTestimonialId(response.testimonial.id);
                setName(response.testimonial.name)
                setRole(response.testimonial.role)
                setContent(response.testimonial.content)
            })
        })
    },[])

    async function update_testimonial() {
        var item={t_id,name,role,content}
        console.log(item);
        const  formData=new FormData();
        formData.append('id',t_id);
        formData.append('name', name)
        formData.append('role', role)
        formData.append('picture', picture)
        formData.append('content', content)
        let result=await  fetch("http://127.0.0.1:8000/api/testimonial-update/",{
            method:"POST",
            body:formData
        })
        await result.json();
        console.log(result);
        navigate('/testimonial')
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
                                    <div className="col-md-4 mx-auto d-table h-100 mb-3">
                                        <label className="form-label">Name</label>
                                        <input className="form-control form-control-lg" defaultValue={data.name}
                                               onChange={(e)=>setName(e.target.value)}
                                               type="text" name="name"
                                               placeholder="Enter your name"/>
                                    </div>
                                    <div className="col-md-4 mx-auto d-table h-100 mb-3">
                                        <label className="form-label">Role</label>
                                        <input className="form-control form-control-lg" type="text" name="roel"
                                               defaultValue={data.role}
                                               onChange={(e) => setRole(e.target.value)}
                                               placeholder="Enter your name"/>
                                    </div>
                                    <div className="col-md-4 mx-auto d-table h-100 mb-3">
                                        <label className="form-label">Picture</label>
                                        <input className="form-control form-control-lg" type="file" name="picture"
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
                                    <a onClick={update_testimonial} className="btn btn-lg btn-primary">Update</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Edit_Testimonial