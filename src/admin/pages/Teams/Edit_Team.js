import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import {useNavigate} from "react-router-dom"
function Edit_Team() {
    const {id} = useParams();
    const  navigate=useNavigate();
    const [team_id,setId]=useState('')
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [picture, setPicture] = useState('')
    const [facebook_url, setFacebookUrl] = useState('')
    const [twitter_url, setTwitterUrl] = useState('')
    const [linkedin_url, setLinkedinUrl] = useState('')
    const [Instagram_url, setInstagramUrl] = useState('')
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/teams/" + id + "/edit").then((result) => {
            result.json().then((response) => {
                setData(response.team)
                setId(response.team.id);
                setName(response.team.name)
                setRole(response.team.role);
                setFacebookUrl(response.team.facebook_url)
                setTwitterUrl(response.team.twitter_url)
                setLinkedinUrl(response.team.linkedin_url)
                setInstagramUrl(response.team.Instagram_url)
            })
        })
    }, [])

    async function update() {
        var item = {name, role, facebook_url, twitter_url, linkedin_url, Instagram_url}
        console.log(item)
        const formData = new FormData()
        formData.append('id',team_id);
        formData.append('name', name);
        formData.append('role', role);
        formData.append('picture',picture)
        formData.append('facabook_url',facebook_url)
        formData.append('twitter_url',twitter_url)
        formData.append('linkedin_url',linkedin_url)
        formData.append('Instagram_url',Instagram_url)
        let  result= await fetch("http://127.0.0.1:8000/api/team-update/",{
            method:"POST",
            body:formData
        })
      await result.json();
        navigate('/team')
    }

    return (
        <>
            <h1 className="h3 mb-3"><strong>Update Team</strong></h1>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="m-sm-4">
                                <div className="row">
                                    <div className="col-md-4 mx-auto d-table h-100 mb-3">
                                        <label className="form-label">Name</label>
                                        <input className="form-control form-control-lg" type="text" name="name"
                                               defaultValue={data.name} onChange={(e) => setName(e.target.value)}
                                               placeholder="Enter your name"/>
                                    </div>
                                    <div className="col-md-4 mx-auto d-table h-100 mb-3">
                                        <label className="form-label">Role</label>
                                        <input className="form-control form-control-lg" type="text" name="role"
                                               defaultValue={data.role}  onChange={(e)=>setRole(e.target.value)}
                                               placeholder="Enter your role"/>
                                    </div>
                                    <div className="col-md-4 mx-auto d-table h-100 mb-3">
                                        <label className="form-label">Picture</label>
                                        <input className="form-control form-control-lg" type="file" name="picture"
                                               onChange={(e) => setPicture(e.target.files[0])}
                                               placeholder="Enter your name"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mx-auto d-table h-100 mb-3">
                                        <label className="form-label">Instagram Url*</label>
                                        <input className="form-control form-control-lg" type="text" name="instagram_url"
                                               defaultValue={data.Instagram_url}
                                               onChange={(e) => setInstagramUrl(e.target.value)}
                                               placeholder="Enter your instagram url"/>
                                    </div>
                                    <div className="col-md-4 mx-auto d-table h-100 mb-3">
                                        <label className="form-label">Facebook Url*</label>
                                        <input className="form-control form-control-lg" type="text" name="name"
                                               defaultValue={data.facebook_url}
                                               onChange={(e) => setFacebookUrl(e.target.value)}
                                               placeholder="Enter your faceboo"/>
                                    </div>
                                    <div className="col-md-4 mx-auto d-table h-100 mb-3">
                                        <label className="form-label">Twitter Url*</label>
                                        <input className="form-control form-control-lg" type="text" name="name"
                                               defaultValue={data.twitter_url}
                                               onChange={(e) => setTwitterUrl(e.target.value)}
                                               placeholder="Enter your name"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mx-auto d-table h-100 mb-3">
                                        <label className="form-label">Linkedin Url*</label>
                                        <input className="form-control form-control-lg" type="text" name="name"
                                               defaultValue={data.linkedin_url}
                                               onChange={(e) => setLinkedinUrl(e.target.value)}
                                               placeholder="Enter your name"/>
                                    </div>
                                    <div className="col-md-4 mx-auto d-table h-100 mb-3">
                                    </div>
                                    <div className="col-md-4 mx-auto d-table h-100 mb-3">
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

export default Edit_Team