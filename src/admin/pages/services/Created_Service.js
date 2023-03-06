import React, {useState} from "react";
import {useNavigate} from "react-router-dom"

function Created_Service() {
    const [name, setName] = useState('');
    const [icon, setIcon] = useState('');
    const [content, setContent] = useState('');
    const [nameErr, setNameErr] = useState(false);
    const [iconErr, setIconErr] = useState(false);
    const [contentErr, setContentErr] = useState(false);
    const navigate = useNavigate();

    async function store() {
        if (name.length == 0) {
            setNameErr(true)
        } else {
            setNameErr(false)
        }
        if (icon.length==0){
            setIconErr(true)
        }else{
            setIconErr(false)
        }
        if (content.length==0){
            setContentErr(true)
        }else{
            setContentErr(false)
        }
        let item = {name, content}
        if (item.length != 0) {
            var formData = new FormData();
            formData.append('name', name);
            formData.append('picture', icon);
            formData.append('content', content);
            let result = await fetch("http://127.0.0.1:8000/api/services", {
                method: "POST",
                body: formData
            })
            await result.json()
            navigate("/service")
        } else {
            console.log('Something went wrong');
        }

    }

    return (
        <>
            <h1 className="h3 mb-3"><strong>Add Service</strong></h1>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="m-sm-4">
                                <div className="row">
                                    <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100 mb-3">
                                        <label className="form-label">Name</label>
                                        <input className="form-control form-control-lg" type="text" name="name"
                                               onChange={(e) => setName(e.target.value)}
                                               placeholder="Enter your name"/>
                                        {nameErr   ? <span className="text-danger">Name is required</span> : ''}
                                    </div>
                                    <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100 mb-3">
                                        <label className="form-label">Icon</label>
                                        <input className="form-control form-control-lg" type="file" name="icon"
                                               onChange={(e) => setIcon(e.target.files[0])}
                                               placeholder="Enter your name"/>
                                        {iconErr ? <span className="text-danger">Icon is required</span> : ''}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label className="form-label">Content</label>
                                        <textarea className="form-control form-control-lg" type="text" name="content"
                                                  onChange={(e) => setContent(e.target.value)} rows="4"
                                                  placeholder="Enter your content"/>
                                        {contentErr ? <span className="text-danger">Content is required</span> :''}
                                    </div>
                                </div>
                                <div className="text-center mt-3 text-lg-end mt-2 p-2">
                                    <a onClick={store} className="btn btn-lg btn-primary ">Submit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Created_Service